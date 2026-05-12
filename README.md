# Fachinformatiker Systemintegration – Lernmaterialien

Dieses Repository enthält meine gesammelten Lernnotizen und Unterlagen für die Umschulung zum **Fachinformatiker Systemintegration (IHK)**.

Die Inhalte werden laufend ergänzt, da die Module nicht in numerischer Reihenfolge unterrichtet werden.

---

## Struktur

| Lernfeld | Thema | Status |
|----------|-------|--------|
| [Lernfeld-01](Lernfeld-01/README.md) | IT-Systeme – Hardware, Zahlensysteme, OSI-Modell | aktiv |
| [Lernfeld-02](Lernfeld-02/README.md) | Arbeitsplätze einrichten, Wirtschaft & Recht | aktiv |
| [Lernfeld-03](Lernfeld-03/README.md) | Netzwerke, RAID, Cloud, Safety vs. Security | aktiv |
| Lernfeld-04 | Schutzbedarfsanalyse | noch nicht belegt |
| Lernfeld-05 | Software zur Verwaltung | noch nicht belegt |
| Lernfeld-06 | Serviceanfragen bearbeiten | noch nicht belegt |
| Lernfeld-07 | Cyber-Sicherheit | noch nicht belegt |
| Lernfeld-08 | Netzwerke und Dienste | noch nicht belegt |
| [Lernfeld-09](Lernfeld-09/README.md) | Netzwerksicherheit, Kryptographie, Virtualisierung | aktiv |

---

## Prüfungsvorbereitung

Der Ordner [Prüfungsvorbereitung/](Prüfungsvorbereitung/) enthält gesammelte Prüfungsfragen und Tests aus dem Unterricht.

---

## Tools

- `tools/build-pptx.js` – Konvertiert Markdown-Notizen automatisch in PowerPoint-Präsentationen

```bash
node tools/build-pptx.js <pfad-zur-markdown-datei>
```

---

## Prüfungsrelevante Schwerpunkte

- OSI-Modell & TCP/IP-Modell
- Hardware-Komponenten (CPU, RAM, Festplatten, BIOS/UEFI)
- Zahlensysteme (Binär, Dezimal, Hex)
- RAID-Systeme & Datenspeicher
- Cloud-Strategien
- Netzwerksicherheit (CIA-Triade, Firewalls, ACLs, VPN)
- Kryptographie (symmetrisch / asymmetrisch / hybrid)
- Virtualisierung & Hypervisor
- Safety vs. Security
- Hochverfügbarkeit & Redundanz
- Wirtschaft & Recht (TCO, ROI, Vertragsarten, DSGVO)

---

# 🐧 Linux Cheatsheet — Terminal Grundbefehle

> Spickzettel für die Linux-Kommandozeile  
> IT-Systemtechnik · GFN GmbH · 2026

---

## 📁 Dateien & Ordner

```bash
ls -la                          # Alle Dateien anzeigen (mit Details)
cd /pfad/zum/ordner             # Ordner wechseln
mkdir mein-ordner               # Neuen Ordner erstellen
rm -rf ordner/                  # Ordner löschen (Vorsicht!)
cp datei.txt ziel/              # Datei kopieren
mv datei.txt neuer-name.txt     # Datei verschieben / umbenennen
cat datei.txt                   # Dateiinhalt anzeigen
nano datei.txt                  # Datei bearbeiten
```

---

## 🔍 Suchen

```bash
find / -name "datei.txt"        # Datei suchen
grep "suchbegriff" datei.txt    # Text in Datei suchen
grep -r "begriff" /ordner/      # Rekursiv in allen Dateien suchen
```

---

## ⚙️ System & Prozesse

```bash
top                             # Prozesse anzeigen (live)
htop                            # Prozesse anzeigen (schöner)
ps aux                          # Alle Prozesse auflisten
kill <PID>                      # Prozess beenden
df -h                           # Festplattenplatz anzeigen
free -h                         # RAM-Auslastung anzeigen
uname -a                        # Systeminfo anzeigen
uptime                          # Wie lange läuft das System?
```

---

## 👤 Benutzer & Rechte

```bash
whoami                          # Aktueller Benutzer
sudo <befehl>                   # Als Admin ausführen
chmod 755 datei.sh              # Berechtigungen setzen
chown user:group datei.txt      # Besitzer ändern
passwd                          # Passwort ändern
```

---

## 🌐 Netzwerk

```bash
ip a                            # IP-Adressen anzeigen
ping google.com                 # Verbindung testen
curl https://example.com        # URL abrufen
ss -tuln                        # Offene Ports anzeigen
```

---

## 📦 Pakete installieren (Debian/Ubuntu)

```bash
apt update                      # Paketliste aktualisieren
apt upgrade                     # Alle Pakete updaten
apt install <paket>             # Paket installieren
apt remove <paket>              # Paket entfernen
```

---

*Erstellt im Rahmen der IT-Ausbildung · GFN GmbH*
