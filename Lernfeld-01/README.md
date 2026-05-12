# Lernfeld 01 – IT-Systeme in Betrieb nehmen

## Thema
Hardware-Grundlagen, Zahlensysteme, EVA-Prinzip, OSI-Modell, TCP/IP

---

## Materialien

| Ordner / Datei | Inhalt |
|----------------|--------|
| [Hardware/](Hardware/) | CPU, RAM, Festplatten, BIOS/UEFI – PDFs und Grafiken |
| [Zahlensysteme/](Zahlensysteme/) | Binär, Dezimal, Hex – Schaubilder, Handouts, Übungen |
| [E-V-A/](E-V-A/) | EVA-Prinzip Schaubild (Eingabe–Verarbeitung–Ausgabe) |
| [Industrie_4.0/](Industrie_4.0/) | Technologie-Generationen Übersicht |
| Wichtige IT begriffe.docx | Sammlung wichtiger IT-Fachbegriffe |

---

## OSI-Referenzmodell (7 Schichten)

| Schicht | Name | Geräte / Protokolle |
|---------|------|---------------------|
| 7 | Anwendung (Application) | HTTP, HTTPS, FTP, SMTP, DNS |
| 6 | Darstellung (Presentation) | TLS, ASCII, UTF-8 |
| 5 | Sitzung (Session) | Sitzungsmanagement |
| 4 | Transport | TCP, UDP, Portnummern |
| 3 | Vermittlung (Network) | IP-Adresse, Router |
| 2 | Sicherung (Data Link) | MAC-Adresse, Switch, VLAN |
| 1 | Bitübertragung (Physical) | Kabel, Hub, Netzwerkkarte |

**Merksatz (unten → oben):**
> „Bitte Schüler Nehmt Trotzdem Seife Daheim An"

---

## TCP/IP-Modell (4 Schichten)

| TCP/IP-Schicht | Entspricht OSI |
|----------------|----------------|
| Anwendung | 5, 6, 7 |
| Transport | 4 |
| Internet | 3 |
| Netzzugang | 1, 2 |

**Warum TCP/IP statt OSI?**
TCP/IP ist die reale Grundlage des Internets. Das OSI-Modell ist nur ein theoretisches Referenzmodell.

---

## Typische Prüfungsfragen

**„Was ist das OSI-Modell?"**
Ein Referenzmodell, das Netzwerkkommunikation in sieben Schichten strukturiert.

**„Auf welcher Schicht arbeitet ein Switch?"**
Schicht 2 – Sicherungsschicht (MAC-Adressen).

**„Auf welcher Schicht arbeitet ein Router?"**
Schicht 3 – Vermittlungsschicht (IP-Adressen).

**„Wo gehören TCP und UDP hin?"**
Schicht 4 – Transportschicht.

---

## Fehlersuche nach OSI

> Grundregel: **Immer von Schicht 1 nach oben prüfen.**

| Symptom | Wahrscheinliche Schicht |
|---------|------------------------|
| Kein Link am Switchport | Schicht 1 – physisch |
| Ping geht nicht, aber Link ist da | Schicht 3 – IP/Routing |
| Ping geht, Webseite nicht | Schicht 7 – Anwendung |
| Nur ein VLAN funktioniert nicht | Schicht 2 – MAC/VLAN |

**Musterantwort (IHK-Niveau):**
> „Ich prüfe Netzwerkstörungen immer von Schicht 1 nach oben: erst physikalische Verbindung, dann VLAN und MAC, danach IP und Routing, zuletzt die Anwendung."

---

## Ziel
Verstehen, wie IT-Systeme aufgebaut sind und wie man Fehler systematisch eingrenzt.
