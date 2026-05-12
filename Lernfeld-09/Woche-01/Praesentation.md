---
marp: true
paginate: false
style: |
  section {
    font-family: Arial, sans-serif;
    background: #ffffff;
    color: #061a40;
    padding: 48px 64px;
  }

  .top {
    position: absolute;
    top: 35px;
    left: 64px;
    font-size: 14px;
    font-weight: bold;
    color: #061a40;
  }

  .page {
    position: absolute;
    top: 35px;
    right: 64px;
    font-size: 14px;
    letter-spacing: 3px;
    color: #7c879e;
    font-weight: bold;
  }

  .label {
    margin-top: 170px;
    color: #ef4444;
    font-size: 13px;
    letter-spacing: 5px;
    font-weight: bold;
  }

  h1 {
    font-size: 42px;
    line-height: 1.2;
    margin-top: 36px;
    margin-bottom: 48px;
    color: #061a40;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }

  .card {
    position: relative;
    border: 1px solid #d8e0ef;
    border-left: 5px solid #34d399;
    border-radius: 12px;
    padding: 28px 18px 18px 18px;
    min-height: 92px;
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
  }

  .num {
    position: absolute;
    top: -15px;
    left: 24px;
    background: #34d399;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
  }

  .card-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .card-text {
    font-size: 14px;
    color: #334155;
  }

  .note {
    background: #e9fbf4;
    border-left: 6px solid #34d399;
    border-radius: 14px;
    padding: 24px 28px;
    font-size: 18px;
    line-height: 1.5;
    color: #334155;
  }

  .note-title {
    font-size: 12px;
    color: #065f46;
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 8px;
  }

  .footer {
    position: absolute;
    bottom: 32px;
    right: 64px;
    font-size: 13px;
    color: #94a3b8;
    letter-spacing: 3px;
  }
---

<div class="top">🟧🟥🟦🟩 &nbsp; IT-UMSCHULUNG</div>
<div class="page">03 · SWITCH</div>

<div class="label">SO ARBEITET EIN SWITCH</div>

# Liest die Adresse · merkt sich, wer wo hängt.

<div class="cards">

<div class="card">
<div class="num">1</div>
<div class="card-title">Liest Ziel-MAC</div>
<div class="card-text">Im Frame steht klar: an wen geht das?</div>
</div>

<div class="card">
<div class="num">2</div>
<div class="card-title">Lernt Quell-MAC</div>
<div class="card-text">Ergänzt seine MAC-Tabelle.</div>
</div>

<div class="card">
<div class="num">3</div>
<div class="card-title">Schaltet zum richtigen Port</div>
<div class="card-text">Andere Ports sehen nichts.</div>
</div>

<div class="card">
<div class="num">4</div>
<div class="card-title">Vollduplex parallel</div>
<div class="card-text">Senden und Empfangen gleichzeitig.</div>
</div>

</div>

<div class="note">
<div class="note-title">ÜBERSETZT FÜR DIE PRÜFUNG</div>
Ein Switch arbeitet auf <strong>OSI-Schicht 2</strong>.  
Er nutzt <strong>MAC-Adressen</strong>, lernt daraus seine Tabelle und leitet Frames gezielt an den richtigen Port weiter.
</div>

<div class="footer">OSI MODELL · NETZWERKGRUNDLAGEN</div>