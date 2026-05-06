---
marp: true
paginate: false
style: |
  section {
    font-family: Arial;
    background: #ffffff;
    color: #061a40;
    padding: 60px;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 40px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .card {
    position: relative;
    border: 1px solid #e2e8f0;
    border-left: 5px solid #34d399;
    border-radius: 12px;
    padding: 25px;
    background: white;
  }

  .num {
    position: absolute;
    top: -15px;
    left: 20px;
    background: #34d399;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
  }

  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .note {
    margin-top: 40px;
    background: #ecfdf5;
    padding: 25px;
    border-left: 6px solid #34d399;
    border-radius: 12px;
  }
---

# Liest die Adresse · merkt sich, wer wo hängt.

<div class="cards">

<div class="card">
<div class="num">1</div>
<div class="title">Liest Ziel-MAC</div>
Im Frame steht: an wen geht das?
</div>

<div class="card">
<div class="num">2</div>
<div class="title">Lernt Quell-MAC</div>
Ergänzt MAC-Tabelle (CAM)
</div>

<div class="card">
<div class="num">3</div>
<div class="title">Richtiger Port</div>
Andere Ports sehen nichts
</div>

<div class="card">
<div class="num">4</div>
<div class="title">Vollduplex</div>
Senden & Empfangen parallel
</div>

</div>

<div class="note">
Ein Switch arbeitet auf OSI-Schicht 2 und nutzt MAC-Adressen für gezielte Weiterleitung.
</div>

---