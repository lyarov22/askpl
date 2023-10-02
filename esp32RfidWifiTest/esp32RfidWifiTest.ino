#include <SPI.h>
#include <MFRC522.h>

#include <WiFi.h>
#include <HTTPClient.h>

#define RST_PIN         22          // Пин для сброса (RST)
#define SS_PIN          21          // Пин для выбора Slave (SDA)

MFRC522 mfrc522(SS_PIN, RST_PIN);  // Создаем экземпляр MFRC522

const char* ssid     = "SGP621";
const char* password = "popopopa";

const char* serverUrl = "http://192.168.43.23:5000/save_uuid";


void setup() {
  Serial.begin(115200); // Инициализируем сериальный порт
  SPI.begin();                     // Инициализация SPI
  mfrc522.PCD_Init();                 // Инициализация модуля
  mfrc522.PCD_SetAntennaGain(mfrc522.RxGain_max);  // Установка усиления антенны
  mfrc522.PCD_AntennaOff();           // Перезагружаем антенну
  mfrc522.PCD_AntennaOn();          // Включаем антенну

  WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected.");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Подключение к Wi-Fi...");
  }

  Serial.println("Подключено к Wi-Fi");
  
  Serial.println(F("Наведите метку RFID для считывания UID..."));

}

void loop() {
  /*static uint32_t rebootTimer = millis(); // Важный костыль против зависания модуля!
  if (millis() - rebootTimer >= 1000) {   // Таймер с периодом 1000 мс
    rebootTimer = millis();               // Обновляем таймер
    digitalWrite(RST_PIN, HIGH);          // Сбрасываем модуль
    delayMicroseconds(2);                 // Ждем 2 мкс
    digitalWrite(RST_PIN, LOW);           // Отпускаем сброс
    mfrc522.PCD_Init();                      // Инициализируем заного
  }
  */
  
  // Проверяем, есть ли новая метка в поле считывания
  if (mfrc522.PICC_IsNewCardPresent()) {
    // Выбираем метку
    if (mfrc522.PICC_ReadCardSerial()) {
      // Считываем UID метки
      String uid = "";
      for (byte i = 0; i < mfrc522.uid.size; i++) {
        uid += String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : "");
        uid += String(mfrc522.uid.uidByte[i], HEX);
      }
      Serial.print(F("UID метки: "));
      Serial.println(uid);

      // Создаем экземпляр HTTPClient
      HTTPClient http;
      
      Serial.println("Отправка POST-запроса на сервер...");
      
      // Начинаем HTTP-запрос
      http.begin(serverUrl);
      
      // Устанавливаем заголовок Content-Type
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
      
      // Формируем тело POST-запроса с параметром uuid
      String postBody = "uuid=" + uid;
      
      // Выполняем POST-запрос и получаем ответ
      int httpResponseCode = http.POST(postBody);
      
      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.print("Ответ от сервера: ");
        Serial.println(response);
      } else {
        Serial.print("Ошибка HTTP-запроса: ");
        Serial.println(httpResponseCode);
      }
      
      // Закрываем соединение
      http.end();
      
      delay(1000); // Задержка перед повторным сканированием
      
      // Ожидаем, пока метка не будет удалена из поля считывания
      mfrc522.PICC_HaltA();
    }
  }
}
