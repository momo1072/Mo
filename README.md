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
