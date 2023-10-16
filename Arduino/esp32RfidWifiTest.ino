#include <SPI.h>
#include <MFRC522.h>

#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid[] = {"OPPO_A74", "ssid2", "ssid3"}; 
const char* password[] = {"04060708", "password2", "password3"};
const int numberOfNetworks = 3; 

const char* serverUrl = "http://192.168.14.253:5000/api/users/register";

void setup() {
  Serial.begin(115200);

  for (int i = 0; i < numberOfNetworks; i++) {
    WiFi.begin(ssid[i], password[i]);
    Serial.print("Attempting to connect to ");
    Serial.println(ssid[i]);
    
    int attempts = 0;
    while (WiFi.status() != WL_CONNECTED && attempts < 20) {  
      delay(500);
      Serial.print(".");
      attempts++;
    }

    if (WiFi.status() == WL_CONNECTED) {
      Serial.println("");
      Serial.println("WiFi connected");
      Serial.println("IP address: ");
      Serial.println(WiFi.localIP());
      break; 
    } else {
      Serial.println("");
      Serial.println("Connection failed");
    }
  }

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Could not connect to any of the specified networks.");
  }
}
void loop() {
  if (mfrc522.PICC_IsNewCardPresent()) {
    if (mfrc522.PICC_ReadCardSerial()) {
      String uid = "";
      for (byte i = 0; i < mfrc522.uid.size; i++) {
        uid += String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
        uid += String(mfrc522.uid.uidByte[i], HEX);
      }
      Serial.print(F("UID: "));
      Serial.println(uid);

      DynamicJsonDocument jsonDoc(128);
      jsonDoc["uid"] = uid;

      String jsonString;
      serializeJson(jsonDoc, jsonString);

      HTTPClient http;

      Serial.println("Sending POST request to the server...");

      http.begin(serverUrl);

      http.addHeader("Content-Type", "application/json");

      int httpResponseCode = http.POST(jsonString);

      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.print("Response from the server: ");
        Serial.println(response);
      } else {
        Serial.print("HTTP request error: ");
        Serial.println(httpResponseCode);
      }

      http.end();
      delay(1000);

      mfrc522.PICC_HaltA();
    }
  }
}
