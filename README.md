# ASCAL: Automated System Control Attendance Lectures

**ASCAL** is a hardware-software solution designed for monitoring student attendance at lectures at the Central Asian College of Technology and Economics in Almaty. The project involves developing a device with a reader and a web server to track both student and teacher attendance.

## Hardware:

- **Development Board**: ESP32 Dev Board CH340 Type-C
- **RFID Module**: RC522
- **Display**: 0.91' OLED SSD1306 128x32px

## Design:

![Design Image](https://github.com/user-attachments/assets/a9cc190f-5aed-482c-8584-8d3019193d43)

[Figma Design](https://www.figma.com/file/jQJMaqA9YZEmjbGQ6C1GxZ/AKSPL-(Copy)-(Copy)?type=design&node-id=0%3A1&mode=design&t=c2GZlppRDHw9eq6r-1)

## Client:

Details about the client are under development.

## Server:

### NFC Tag (Phone-Based Attendance):

1. The student taps their phone on an NFC tag located in the classroom.
2. The phone interacts with the NFC tag and receives a command.
3. The phone sends an HTTP POST request to the server with the student's attendance information.
4. The teacher receives real-time attendance data on their computer.

### RFID Scanner (ONAY Card/NFC Sticker/Key Fob):

1. The student taps an ONAY card or NFC tag (sticker/key fob) on the RFID scanner located in the classroom.
2. The RFID scanner reads the ID from the tag.
3. The ESP32 receives the ID and sends it to the server via Wi-Fi.
4. The teacher receives real-time attendance data on their computer.

### Alternative Methods:

- **QR Code**: Generate a QR code on a wall that students photograph and send to a Telegram bot for attendance verification.
- **Face ID and QR Code**: Use Face ID for student verification along with the QR code.
- **Private Telegram Channel**: Create a private Telegram channel with restrictions on screenshots and message forwarding.

## Conclusion:

**ASCAL** provides a multifunctional system for automating attendance control, offering convenience and real-time updates for both students and teachers.
