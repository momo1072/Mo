---
marp: true
paginate: false
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

  section {
    font-family: 'Inter', Arial, sans-serif;
    background: #0f172a;
    color: #e2e8f0;
    padding: 52px 68px;
  }

  section.light {
    background: #ffffff;
    color: #0f172a;
  }

  section.accent {
    background: #061a40;
    color: #e2e8f0;
  }

  .badge {
    display: inline-block;
    background: #34d399;
    color: #022c22;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 4px;
    padding: 4px 14px;
    border-radius: 99px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 52px;
    font-weight: 800;
    line-height: 1.1;
    margin: 0 0 20px 0;
    color: #f8fafc;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #34d399;
    margin: 0 0 32px 0;
    border-bottom: 2px solid #1e3a5f;
    padding-bottom: 12px;
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #34d399;
    margin: 0 0 8px 0;
  }

  .subtitle {
    font-size: 20px;
    color: #94a3b8;
    margin-bottom: 12px;
  }

  .hero-note {
    background: #1e293b;
    border-left: 5px solid #34d399;
    border-radius: 12px;
    padding: 20px 28px;
    font-size: 17px;
    color: #cbd5e1;
    margin-top: 32px;
    line-height: 1.6;
  }

  .grid-7 {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    margin-top: 20px;
  }

  .layer-card {
    background: #1e293b;
    border-radius: 10px;
    padding: 14px 8px;
    text-align: center;
    border-top: 4px solid #34d399;
    font-size: 12px;
  }

  .layer-num {
    font-size: 22px;
    font-weight: 800;
    color: #34d399;
    display: block;
    margin-bottom: 4px;
  }

  .layer-name-de {
    font-weight: 700;
    font-size: 11px;
    color: #f1f5f9;
    display: block;
  }

  .layer-name-en {
    font-size: 10px;
    color: #64748b;
    display: block;
    margin-top: 2px;
  }

  .merksatz {
    background: linear-gradient(135deg, #064e3b, #065f46);
    border-radius: 16px;
    padding: 24px 32px;
    margin-top: 24px;
    text-align: center;
  }

  .merksatz-label {
    font-size: 11px;
    letter-spacing: 4px;
    color: #6ee7b7;
    font-weight: 700;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  .merksatz-text {
    font-size: 19px;
    font-weight: 700;
    color: #ecfdf5;
    line-height: 1.5;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 8px;
  }

  .detail-card {
    background: #1e293b;
    border-radius: 14px;
    padding: 24px;
    border-left: 5px solid #34d399;
  }

  .detail-card.blue {
    border-left-color: #60a5fa;
  }

  .detail-card.orange {
    border-left-color: #fb923c;
  }

  .detail-card.purple {
    border-left-color: #c084fc;
  }

  .detail-card.yellow {
    border-left-color: #fbbf24;
  }

  .detail-card.red {
    border-left-color: #f87171;
  }

  .detail-card.cyan {
    border-left-color: #22d3ee;
  }

  .tag {
    display: inline-block;
    background: #0f172a;
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 2px 10px;
    font-size: 12px;
    color: #94a3b8;
    margin: 3px 2px;
  }

  .pruef-box {
    background: #172554;
    border: 1px solid #1e40af;
    border-radius: 10px;
    padding: 12px 18px;
    font-size: 14px;
    color: #bfdbfe;
    margin-top: 10px;
    font-style: italic;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
    margin-top: 16px;
  }

  th {
    background: #1e293b;
    color: #34d399;
    padding: 12px 16px;
    text-align: left;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 13px;
  }

  td {
    padding: 10px 16px;
    border-bottom: 1px solid #1e293b;
    color: #cbd5e1;
  }

  tr:nth-child(even) td {
    background: #0f172a;
  }

  .flow-step {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid #1e293b;
  }

  .flow-num {
    background: #34d399;
    color: #022c22;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    font-weight: 800;
    font-size: 14px;
    flex-shrink: 0;
  }

  .flow-text strong {
    color: #f1f5f9;
    font-size: 15px;
    display: block;
  }

  .flow-text span {
    color: #64748b;
    font-size: 13px;
  }

  .qa-item {
    background: #1e293b;
    border-radius: 10px;
    padding: 16px 20px;
    margin-bottom: 12px;
  }

  .qa-q {
    color: #fbbf24;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  .qa-a {
    color: #e2e8f0;
    font-size: 16px;
    font-weight: 600;
  }

  .top-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #34d399, #60a5fa, #c084fc);
  }

  .page-label {
    position: absolute;
    top: 28px;
    right: 68px;
    font-size: 12px;
    color: #334155;
    letter-spacing: 3px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .footer {
    position: absolute;
    bottom: 28px;
    right: 68px;
    font-size: 12px;
    color: #334155;
    letter-spacing: 2px;
  }
---

<div class="top-bar"></div>
<div class="page-label">01 · EINFÜHRUNG</div>

<br><br>

<div class="badge">Lernfeld 09 · Netzwerktechnik</div>

# Das OSI-Referenz&shy;modell

<div class="subtitle">7 Schichten · 1 Ziel: Kommunikation verstehen</div>

<div class="hero-note">
Das OSI-Modell teilt Netzwerkkommunikation in <strong>7 klar abgegrenzte Schichten</strong> ein —
herstellerunabhängig, strukturiert und analysierbar.
</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">02 · ÜBERBLICK</div>

## Die 7 Schichten im Überblick

<div class="grid-7">

<div class="layer-card" style="border-top-color:#f87171">
  <span class="layer-num">7</span>
  <span class="layer-name-de">Anwendung</span>
  <span class="layer-name-en">Application</span>
</div>

<div class="layer-card" style="border-top-color:#fb923c">
  <span class="layer-num">6</span>
  <span class="layer-name-de">Darstellung</span>
  <span class="layer-name-en">Presentation</span>
</div>

<div class="layer-card" style="border-top-color:#fbbf24">
  <span class="layer-num">5</span>
  <span class="layer-name-de">Sitzung</span>
  <span class="layer-name-en">Session</span>
</div>

<div class="layer-card" style="border-top-color:#34d399">
  <span class="layer-num">4</span>
  <span class="layer-name-de">Transport</span>
  <span class="layer-name-en">Transport</span>
</div>

<div class="layer-card" style="border-top-color:#60a5fa">
  <span class="layer-num">3</span>
  <span class="layer-name-de">Vermittlung</span>
  <span class="layer-name-en">Network</span>
</div>

<div class="layer-card" style="border-top-color:#a78bfa">
  <span class="layer-num">2</span>
  <span class="layer-name-de">Sicherung</span>
  <span class="layer-name-en">Data Link</span>
</div>

<div class="layer-card" style="border-top-color:#94a3b8">
  <span class="layer-num">1</span>
  <span class="layer-name-de">Bitübertragung</span>
  <span class="layer-name-en">Physical</span>
</div>

</div>

<div class="merksatz">
  <div class="merksatz-label">Merksatz · von unten nach oben</div>
  <div class="merksatz-text">„Bitte Schüler Nehmen Trotzdem Seife Daheim An"</div>
</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">03 · SCHICHTEN 1 & 2</div>

## Schicht 1 & 2 – Physik & Sicherung

<div class="two-col">

<div class="detail-card">
  <h3>① Bitübertragung</h3>
  <p style="color:#94a3b8;font-size:14px;margin:0 0 12px 0">Physical Layer</p>
  <p style="font-size:15px;color:#cbd5e1;margin:0 0 14px 0">Überträgt Bits (0/1) physisch über ein Medium.</p>
  <span class="tag">Kabel (Kupfer, LWL)</span>
  <span class="tag">Hub</span>
  <span class="tag">Netzwerkkarte</span>
  <span class="tag">Stecker</span>
  <div class="pruef-box">Schicht 1 regelt die physische Übertragung der Bits über das Übertragungsmedium.</div>
</div>

<div class="detail-card" style="border-left-color:#a78bfa">
  <h3 style="color:#a78bfa">② Sicherungsschicht</h3>
  <p style="color:#94a3b8;font-size:14px;margin:0 0 12px 0">Data Link Layer</p>
  <p style="font-size:15px;color:#cbd5e1;margin:0 0 14px 0">Fehlerfreie Übertragung im lokalen Netz.</p>
  <span class="tag">MAC-Adressen</span>
  <span class="tag">Ethernet-Frames</span>
  <span class="tag">VLAN</span>
  <span class="tag">Switch</span>
  <div class="pruef-box" style="background:#1a1040;border-color:#4c1d95;color:#ddd6fe">Die Sicherungsschicht organisiert Frames und nutzt MAC-Adressen zur lokalen Zustellung.</div>
</div>

</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">04 · SCHICHTEN 3 & 4</div>

## Schicht 3 & 4 – Netz & Transport

<div class="two-col">

<div class="detail-card blue">
  <h3 style="color:#60a5fa">③ Vermittlungsschicht</h3>
  <p style="color:#94a3b8;font-size:14px;margin:0 0 12px 0">Network Layer</p>
  <p style="font-size:15px;color:#cbd5e1;margin:0 0 14px 0">Logische Adressierung & Routing zwischen Netzwerken.</p>
  <span class="tag">IP-Adresse (v4/v6)</span>
  <span class="tag">Router</span>
  <span class="tag">Routing</span>
  <div class="pruef-box" style="background:#0c1a40;border-color:#1e3a8a;color:#bfdbfe">Schicht 3 entscheidet, über welchen Weg Pakete zwischen Netzwerken übertragen werden.</div>
</div>

<div class="detail-card" style="border-left-color:#34d399">
  <h3>④ Transportschicht</h3>
  <p style="color:#94a3b8;font-size:14px;margin:0 0 12px 0">Transport Layer</p>
  <p style="font-size:15px;color:#cbd5e1;margin:0 0 14px 0">Ende-zu-Ende-Kommunikation, Ports & Zuverlässigkeit.</p>
  <span class="tag">TCP (zuverlässig)</span>
  <span class="tag">UDP (schnell)</span>
  <span class="tag">Portnummern</span>
  <div class="pruef-box">Die Transportschicht stellt die zuverlässige oder schnelle Übertragung zwischen Anwendungen sicher.</div>
</div>

</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">05 · SCHICHTEN 5 – 7</div>

## Schicht 5, 6 & 7 – Obere Schichten

<div class="two-col">

<div style="display:flex;flex-direction:column;gap:16px">

<div class="detail-card yellow">
  <h3 style="color:#fbbf24">⑤ Sitzungsschicht</h3>
  <p style="font-size:14px;color:#cbd5e1;margin:4px 0 0 0">Auf-, Ab- und Wiederaufbau von Sitzungen zwischen Kommunikationspartnern.</p>
</div>

<div class="detail-card orange">
  <h3 style="color:#fb923c">⑥ Darstellungsschicht</h3>
  <p style="font-size:14px;color:#cbd5e1;margin:4px 0 8px 0">Datenumwandlung, Verschlüsselung & Zeichencodierung.</p>
  <span class="tag">TLS/SSL</span>
  <span class="tag">UTF-8</span>
  <span class="tag">Komprimierung</span>
</div>

</div>

<div class="detail-card red">
  <h3 style="color:#f87171">⑦ Anwendungsschicht</h3>
  <p style="color:#94a3b8;font-size:14px;margin:0 0 10px 0">Application Layer</p>
  <p style="font-size:15px;color:#cbd5e1;margin:0 0 14px 0">Schnittstelle zwischen Anwendung & Netzwerk.</p>
  <span class="tag">HTTP / HTTPS</span>
  <span class="tag">FTP</span>
  <span class="tag">SMTP</span>
  <span class="tag">DNS</span>
  <span class="tag">SSH</span>
  <div class="pruef-box" style="background:#2d0a0a;border-color:#7f1d1d;color:#fecaca">Die Anwendungsschicht stellt Netzwerkdienste für Programme bereit.</div>
</div>

</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">06 · GERÄTE-ZUORDNUNG</div>

## Komponenten & ihre Schicht

| Komponente | OSI-Schicht | Aufgabe |
|---|---|---|
| Netzwerkkabel / Hub | **Schicht 1** | Physische Bitübertragung |
| Switch | **Schicht 2** | Gezielte Weiterleitung per MAC |
| MAC-Adresse | **Schicht 2** | Lokale Identifizierung |
| Router | **Schicht 3** | Routing zwischen Netzen |
| IP-Adresse | **Schicht 3** | Logische Adressierung |
| TCP / UDP / Port | **Schicht 4** | Ende-zu-Ende-Transport |
| TLS / SSL | **Schicht 6** | Verschlüsselung |
| HTTP, FTP, SMTP, DNS | **Schicht 7** | Anwendungsprotokolle |

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">07 · FEHLERSUCHE</div>

## Netzwerkstörung – systematisch vorgehen

<div style="margin-top:8px">

<div class="flow-step">
  <div class="flow-num">1</div>
  <div class="flow-text">
    <strong>Schicht 1 – Gibt es Link / Strom / Kabel?</strong>
    <span>Kein Link → Problem auf Schicht 1 (physisch)</span>
  </div>
</div>

<div class="flow-step">
  <div class="flow-num">2</div>
  <div class="flow-text">
    <strong>Schicht 2 – Richtiges VLAN? MAC sichtbar?</strong>
    <span>Kein MAC → Problem auf Schicht 2 (Sicherung)</span>
  </div>
</div>

<div class="flow-step">
  <div class="flow-num">3</div>
  <div class="flow-text">
    <strong>Schicht 3 – Gültige IP? Ping auf Gateway?</strong>
    <span>Kein Ping → Problem auf Schicht 3 (Netzwerk/IP)</span>
  </div>
</div>

<div class="flow-step">
  <div class="flow-num">4</div>
  <div class="flow-text">
    <strong>Schicht 4 – Ports offen? TCP/UDP funktioniert?</strong>
    <span>Port blockiert → Problem auf Schicht 4</span>
  </div>
</div>

<div class="flow-step" style="border-bottom:none">
  <div class="flow-num">7</div>
  <div class="flow-text">
    <strong>Schicht 7 – Dienst funktioniert nicht?</strong>
    <span>Ping geht, Webseite nicht → Schicht 7 (Anwendung)</span>
  </div>
</div>

</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">08 · PRÜFUNG</div>

## Blitz-Antworten für die Prüfung

<div class="qa-item">
  <div class="qa-q">❓ Kein Link am Switchport – welche Schicht?</div>
  <div class="qa-a">Schicht 1 – physisches Problem.</div>
</div>

<div class="qa-item">
  <div class="qa-q">❓ Ping geht nicht, aber Link ist da?</div>
  <div class="qa-a">Schicht 3 – IP- oder Routing-Problem.</div>
</div>

<div class="qa-item">
  <div class="qa-q">❓ Webseite öffnet sich nicht, aber Ping geht?</div>
  <div class="qa-a">Wahrscheinlich Schicht 7 – Anwendung.</div>
</div>

<div class="qa-item">
  <div class="qa-q">❓ Nur ein VLAN funktioniert nicht?</div>
  <div class="qa-a">Schicht 2 – Sicherungsschicht.</div>
</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>

---

<div class="top-bar"></div>
<div class="page-label">09 · ABSCHLUSS</div>

<br><br>

<div class="badge">Musterantwort · 1-Minus-Niveau</div>

# Immer von unten nach oben.

<div class="hero-note" style="font-size:19px;line-height:1.8">
„Ich prüfe Netzwerkstörungen immer von Schicht 1 nach oben: erst physikalische Verbindung,
dann VLAN und MAC, danach IP und Routing, zuletzt die Anwendung."
</div>

<br>

<div style="color:#334155;font-size:14px;letter-spacing:2px;text-align:right">
LERNFELD 09 · OSI-MODELL · IHK-VORBEREITUNG
</div>

<div class="footer">OSI · IHK-PRÜFUNGSVORBEREITUNG</div>
