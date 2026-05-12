const pptxgen = require("pptxgenjs");

const C = {
  bg:      "080F1A",
  panel:   "0D1B30",
  panel2:  "112544",
  panel3:  "1A3A6C",
  accent:  "00B4D8",
  green:   "06D6A0",
  yellow:  "FFD166",
  red:     "EF476F",
  orange:  "F4A261",
  purple:  "9B72CF",
  white:   "FFFFFF",
  gray:    "8EAFC2",
  dgray:   "4A6070",
  lgray:   "B0C8D8",
};

function sh(blur=10, offset=3) {
  return { type:"outer", color:"000000", blur, offset, angle:135, opacity:0.45 };
}

function header(slide, title, accentColor) {
  slide.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.85, fill:{color:C.panel2}, line:{color:C.panel2} });
  slide.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:10, h:0.06, fill:{color:accentColor}, line:{color:accentColor} });
  slide.addShape(pres.shapes.RECTANGLE, { x:0, y:0.06, w:0.06, h:0.79, fill:{color:accentColor}, line:{color:accentColor} });
  slide.addText(title, {
    x:0.25, y:0.1, w:9.5, h:0.65,
    fontSize:20, bold:true, color:C.white, fontFace:"Arial Black", valign:"middle", margin:0
  });
}

function card(slide, x, y, w, h, borderColor, bgColor) {
  bgColor = bgColor || C.panel;
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill:{color:bgColor}, line:{color:borderColor, width:1.8}, shadow:sh() });
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h:0.06, fill:{color:borderColor}, line:{color:borderColor} });
}

function cardTitle(slide, x, y, w, icon, title, col) {
  slide.addText(icon+"  "+title, {
    x:x+0.18, y:y+0.1, w:w-0.3, h:0.35,
    fontSize:12, bold:true, color:col, fontFace:"Calibri", margin:0
  });
}

function sideBar(slide, x, y, h, col) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w:0.07, h, fill:{color:col}, line:{color:col} });
}

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Brick Logic – Hochverfügbarkeitskonzept";

// ════════════════════════════════════════════════════════════
// SLIDE 1 — COVER
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  // Background geometry
  s.addShape(pres.shapes.RECTANGLE, { x:6.5, y:0, w:3.5, h:5.625, fill:{color:C.panel2, transparency:55}, line:{color:C.panel2, transparency:55} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:0, w:0.12, h:5.625, fill:{color:C.accent}, line:{color:C.accent} });
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:4.9, w:10, h:0.725, fill:{color:C.panel2}, line:{color:C.panel2} });

  s.addText("Technisches", { x:0.35, y:0.5, w:6, h:0.5, fontSize:16, color:C.gray, fontFace:"Calibri", margin:0 });
  s.addText("Pflichtenheft", { x:0.35, y:0.9, w:6, h:0.75, fontSize:40, bold:true, color:C.white, fontFace:"Arial Black", margin:0 });
  s.addText("Hochverfügbarkeitskonzept\nBrick-Logic-SaaS-Plattform", {
    x:0.35, y:1.62, w:6, h:0.85,
    fontSize:18, color:C.accent, fontFace:"Calibri", margin:0
  });

  // Meta info
  const meta = [
    ["Auftraggeber", "Klemmbausteine GmbH · Brick Logic Solutions"],
    ["Auftragnehmer", "IT-Abteilung — Leitender Systemadministrator"],
    ["Stand", "08.05.2026"],
    ["Vorlage", "Lastenheft 1.3.1 GFN [2025]"],
  ];
  meta.forEach(([k,v], i) => {
    s.addText(k+":", { x:0.35, y:2.75+i*0.38, w:1.7, h:0.33, fontSize:9.5, color:C.gray, bold:true, margin:0 });
    s.addText(v,      { x:2.1,  y:2.75+i*0.38, w:4.2, h:0.33, fontSize:9.5, color:C.lgray, margin:0 });
  });

  // Right: old vs new visual
  // OLD
  s.addShape(pres.shapes.RECTANGLE, { x:6.7, y:0.5, w:3.0, h:1.45, fill:{color:"2D1010"}, line:{color:C.red, width:2}, shadow:sh() });
  s.addText("❌  Alter Aufbau", { x:6.7, y:0.55, w:3.0, h:0.3, fontSize:9, bold:true, color:C.red, align:"center", margin:0 });
  s.addText("⚠ Einzelner physischer\nServer (Single Point\nof Failure)", { x:6.75, y:0.88, w:2.9, h:1.0, fontSize:9, color:C.lgray, align:"center", valign:"middle", margin:0 });

  s.addText("▼ Modernisierung", { x:6.7, y:2.05, w:3.0, h:0.3, fontSize:9, color:C.gray, align:"center", italic:true, margin:0 });

  // NEW cluster visual
  s.addShape(pres.shapes.RECTANGLE, { x:6.7, y:2.38, w:3.0, h:2.95, fill:{color:C.panel}, line:{color:C.green, width:2}, shadow:sh() });
  s.addText("✅  Neuer Aufbau", { x:6.7, y:2.44, w:3.0, h:0.28, fontSize:9, bold:true, color:C.green, align:"center", margin:0 });
  [["HOST A\nPROD-VM",C.green],["HOST B\nPROD-DB",C.accent],["HOST C\nTEST + Quorum",C.yellow]].forEach(([lbl,col],i) => {
    s.addShape(pres.shapes.RECTANGLE, { x:6.78+i*0.98, y:2.8, w:0.9, h:0.95, fill:{color:C.panel2}, line:{color:col, width:1.5} });
    s.addText(lbl, { x:6.78+i*0.98, y:2.8, w:0.9, h:0.95, fontSize:7, color:col, align:"center", valign:"middle", margin:0 });
  });
  s.addShape(pres.shapes.RECTANGLE, { x:6.85, y:3.85, w:2.6, h:0.35, fill:{color:"1A1A00"}, line:{color:C.yellow, width:1} });
  s.addText("💾 Zentraler Storage (SAN)", { x:6.85, y:3.85, w:2.6, h:0.35, fontSize:7.5, color:C.yellow, align:"center", valign:"middle", margin:0 });
  s.addShape(pres.shapes.RECTANGLE, { x:6.85, y:4.28, w:2.6, h:0.35, fill:{color:"001A1A"}, line:{color:C.accent, width:1} });
  s.addText("⚖ Load Balancer (Internet)", { x:6.85, y:4.28, w:2.6, h:0.35, fontSize:7.5, color:C.accent, align:"center", valign:"middle", margin:0 });

  // Footer
  s.addText("Stand: 08.05.2026  ·  Vorlage: Lastenheft 1.3.1 GFN [2025]  ·  Vertraulich – Nur für internen Gebrauch", {
    x:0.3, y:4.95, w:9.4, h:0.32,
    fontSize:8.5, color:C.dgray, align:"center", margin:0
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 2 — MANAGEMENT-ZUSAMMENFASSUNG
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "💼  Management-Zusammenfassung  (für die Chefin)", C.accent);

  // Quote box
  s.addShape(pres.shapes.RECTANGLE, { x:0.3, y:1.0, w:9.4, h:1.55, fill:{color:"081825"}, line:{color:C.accent, width:2}, shadow:sh() });
  s.addShape(pres.shapes.RECTANGLE, { x:0.3, y:1.0, w:9.4, h:0.06, fill:{color:C.accent}, line:{color:C.accent} });
  s.addText("zitat ", { x:0.38, y:1.08, w:0.4, h:1.3, fontSize:60, color:C.accent, valign:"top", margin:0 });
  s.addText(
    "Wir ersetzen den einen alten Server durch drei moderne Server in einem Cluster mit gemeinsamem Speicher. "+
    "Die Anwendung laeuft nicht mehr direkt auf einem Computer, sondern als virtuelle Maschine, "+
    "die zwischen den Servern wandern kann — fällt eine Hardware aus, läuft die Plattform binnen Minuten "+
    "auf einem anderen Server weiter, und Test- und Produktivsystem sind sauber voneinander getrennt.",
    { x:0.78, y:1.1, w:8.6, h:1.35, fontSize:11.5, color:C.white, fontFace:"Calibri", italic:true, valign:"middle", margin:0 }
  );

  // 3 key pillars
  const pillars = [
    { icon:"🔁", title:"Ausfallsicherheit", col:C.green,
      desc:"Fällt ein Server aus, startet die VM automatisch auf einem anderen Host. Kein Datenverlust, minimale Unterbrechung." },
    { icon:"🔬", title:"Getrennte Testumgebung", col:C.accent,
      desc:"Klone der Produktions-VM laufen in einem vollständig isolierten Netzwerk. Kein Risiko für Kundendaten." },
    { icon:"🔧", title:"Wartung ohne Ausfall", col:C.yellow,
      desc:"VMs werden vor der Wartung live auf andere Server verschoben. Der Dienst läuft für Kunden unterbrechungsfrei." },
  ];
  pillars.forEach((p,i) => {
    const x = 0.3 + i*3.25;
    card(s, x, 2.75, 3.05, 2.55, p.col);
    s.addText(p.icon, { x, y:2.85, w:3.05, h:0.55, fontSize:26, align:"center", margin:0 });
    s.addText(p.title, { x:x+0.15, y:3.42, w:2.75, h:0.35, fontSize:13, bold:true, color:C.white, align:"center", fontFace:"Calibri", margin:0 });
    s.addText(p.desc,  { x:x+0.15, y:3.8,  w:2.75, h:1.38, fontSize:9.5, color:C.gray, fontFace:"Calibri", margin:0 });
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 3 — KAPITEL 1: VERFÜGBARKEIT
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "📊  Kapitel 1: Interpretation der Verfügbarkeitsanforderung (99,99 %)", C.green);

  // Giant number left
  card(s, 0.3, 1.0, 4.3, 2.35, C.green);
  s.addText("99,99 %", { x:0.3, y:1.1, w:4.3, h:1.0, fontSize:54, bold:true, color:C.green, align:"center", fontFace:"Arial Black", margin:0 });
  s.addText("»Vier Neunen«", { x:0.3, y:2.05, w:4.3, h:0.3, fontSize:12, color:C.gray, italic:true, align:"center", margin:0 });
  s.addShape(pres.shapes.LINE, { x:0.7, y:2.38, w:3.5, h:0, line:{color:C.dgray, width:0.8} });

  // Table of downtimes
  const dtRows = [
    ["Pro Jahr",   "8 759,12 h",  "≈ 52,6 Minuten", C.green],
    ["Pro Monat",  "~720 h",      "~4,38 Minuten",  C.yellow],
    ["Pro Woche",  "168 h",       "~1,01 Minuten",  C.orange],
    ["Pro Tag",    "24 h",        "~8,64 Sekunden", C.red],
  ];
  dtRows.forEach(([period, avail, down, col], i) => {
    const y = 2.48 + i*0.52;
    s.addShape(pres.shapes.RECTANGLE, { x:0.35, y, w:4.2, h:0.47, fill:{color: i%2===0 ? C.panel2 : C.panel}, line:{color:C.dgray, width:0.5} });
    s.addText(period, { x:0.4,  y:y+0.05, w:1.1, h:0.37, fontSize:9.5, color:C.lgray, bold:true, margin:0 });
    s.addText(avail,  { x:1.5,  y:y+0.05, w:1.1, h:0.37, fontSize:9,   color:C.gray, margin:0 });
    s.addText(down,   { x:2.6,  y:y+0.05, w:1.9, h:0.37, fontSize:10,  color:col, bold:true, margin:0 });
  });

  // Right: Visual bar + why single server fails
  // Year bar
  s.addText("Das ganze Jahr visualisiert:", { x:4.85, y:1.02, w:4.9, h:0.3, fontSize:10, color:C.gray, margin:0 });
  s.addShape(pres.shapes.RECTANGLE, { x:4.85, y:1.35, w:4.85, h:0.35, fill:{color:C.green}, line:{color:C.green} });
  s.addShape(pres.shapes.RECTANGLE, { x:9.66, y:1.35, w:0.04, h:0.35, fill:{color:C.red},   line:{color:C.red} });
  s.addText("← 52 Min. Ausfall (kaum sichtbar im Jahr)", { x:4.85, y:1.73, w:4.9, h:0.25, fontSize:8, color:C.red, align:"right", margin:0 });

  // Why single server FAILS
  card(s, 4.85, 2.08, 4.9, 3.22, C.red);
  s.addText("❌  Warum der Einzelserver das nicht schafft", { x:5.05, y:2.18, w:4.55, h:0.35, fontSize:11, bold:true, color:C.red, fontFace:"Calibri", margin:0 });
  const fails = [
    ["Hardware-Defekt", "Mainboard, RAM, CPU — Reparatur: Stunden bis Tage"],
    ["Festplatten-Ausfall", "Ohne Redundanz: Datenverlust + langer Restore"],
    ["Stromausfall", "USV puffert nur Minuten, kein echter Schutz"],
    ["Routine-Wartung", "1 Reboot/Quartal verbraucht bereits das Jahresbudget"],
    ["OS-Crash / Patches", "Typisch 30–120 Min. Downtime pro Ereignis"],
  ];
  fails.forEach(([t,d], i) => {
    const y = 2.58 + i*0.56;
    sideBar(s, 5.05, y+0.05, 0.4, C.red);
    s.addText(t, { x:5.22, y:y+0.06, w:4.4, h:0.22, fontSize:10, bold:true, color:C.white, margin:0 });
    s.addText(d, { x:5.22, y:y+0.27, w:4.4, h:0.22, fontSize:8.5, color:C.gray, margin:0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x:4.85, y:5.08, w:4.9, h:0.38, fill:{color:"2D0A0A"}, line:{color:C.red, width:1} });
  s.addText("⚠  Realistisch erreichbar mit Einzelserver: max. 99–99,5 %  (= 3–9 h Ausfall/Jahr)", {
    x:5.0, y:5.1, w:4.6, h:0.33, fontSize:9, bold:true, color:C.red, valign:"middle", margin:0
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 4 — KAPITEL 2: VIRTUALISIERUNG GRUNDKONZEPT
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "🖥️  Kapitel 2: Grundkonzept der Server-Virtualisierung", C.accent);

  // Left: Layer diagram
  card(s, 0.3, 1.0, 4.45, 4.3, C.accent);
  s.addText("Schichten-Modell", { x:0.3, y:1.08, w:4.45, h:0.3, fontSize:10, bold:true, color:C.accent, align:"center", margin:0 });

  const layers = [
    ["👤  VM 1 (PROD)", "VM 2 (TEST)", "VM 3 (DB)", C.green, "Gastsysteme — Linux/Windows + Anwendung"],
    ["⚡  Hypervisor (VMware ESXi / Hyper-V / Proxmox)", null, null, C.yellow, "Abstrahiert physische Hardware"],
    ["🔩  Physische Hardware — CPU · RAM · NICs · Storage", null, null, C.orange, "Gemeinsam genutzte Ressourcen"],
  ];

  let ly = 1.45;
  // Top VM layer (3 boxes)
  s.addShape(pres.shapes.RECTANGLE, { x:0.4, y:ly, w:4.25, h:0.06, fill:{color:C.green}, line:{color:C.green} });
  ly += 0.06;
  [["VM 1\nPROD",C.green],["VM 2\nTEST",C.accent],["VM 3\nDB",C.yellow]].forEach(([lbl,col],i) => {
    s.addShape(pres.shapes.RECTANGLE, { x:0.4+i*1.43, y:ly, w:1.38, h:0.9, fill:{color:C.panel2}, line:{color:col, width:1.5} });
    s.addText(lbl, { x:0.4+i*1.43, y:ly, w:1.38, h:0.9, fontSize:9.5, bold:true, color:col, align:"center", valign:"middle", margin:0 });
  });
  ly += 0.9;
  s.addText("← unabhängige Gastsysteme", { x:0.4, y:ly, w:4.25, h:0.22, fontSize:7.5, color:C.gray, italic:true, margin:0 });
  ly += 0.22;

  // Hypervisor
  s.addShape(pres.shapes.RECTANGLE, { x:0.4, y:ly, w:4.25, h:0.72, fill:{color:"1A1A00"}, line:{color:C.yellow, width:2} });
  s.addText("⚡  Hypervisor\n(virtualisiert die Hardware)", { x:0.4, y:ly, w:4.25, h:0.72, fontSize:10, bold:true, color:C.yellow, align:"center", valign:"middle", margin:0 });
  ly += 0.72;

  // Hardware
  s.addShape(pres.shapes.RECTANGLE, { x:0.4, y:ly, w:4.25, h:0.72, fill:{color:"1A0A00"}, line:{color:C.orange, width:2} });
  s.addText("🔩  Physische Hardware\nCPU · RAM · NICs · Storage", { x:0.4, y:ly, w:4.25, h:0.72, fontSize:10, bold:true, color:C.orange, align:"center", valign:"middle", margin:0 });
  ly += 0.72;

  s.addShape(pres.shapes.RECTANGLE, { x:0.4, y:ly+0.05, w:4.25, h:0.28, fill:{color:C.panel2}, line:{color:C.dgray, width:0.5} });
  s.addText("💡 Eine VM = eine Datei + RAM-Zuteilung — portabel zwischen Servern", { x:0.4, y:ly+0.07, w:4.25, h:0.24, fontSize:8, color:C.accent, align:"center", margin:0 });

  // Right: HA, Snapshot, Isolation
  const items = [
    { icon:"🔁", title:"Hochverfügbarkeit durch HA-Cluster", col:C.green,
      points:[
        "Mehrere Hypervisor-Hosts bilden Cluster mit Heartbeat",
        "Fällt ein Host aus → VMs starten automatisch auf anderem Host (1–5 Min.)",
        "Live Migration: VM wechselt Host ohne Unterbrechung → Wartung ohne Downtime ✓",
        "Redundanter zentraler Speicher (SAN/iSCSI): Plattenausfall = keine Downtime",
      ]},
    { icon:"📸", title:"Isolierte Testumgebung durch Klonen & Snapshots", col:C.accent,
      points:[
        "Snapshot: \"Foto\" der Prod-VM in Sekunden — Rollback bei Fehlern in Minuten",
        "Klon: identische Kopie der Prod-VM → Tests mit echten Datenbeständen",
        "Virtuelles Netzwerk (vSwitch/VLAN): Test-VMs vollständig isoliert",
        "Ressourcen-Limits: Test kann Produktion keine CPU/RAM wegnehmen",
      ]},
  ];
  items.forEach((item, i) => {
    const y = 1.0 + i*2.35;
    card(s, 4.95, y, 4.8, 2.12, item.col);
    s.addText(item.icon+"  "+item.title, { x:5.15, y:y+0.1, w:4.5, h:0.38, fontSize:11.5, bold:true, color:item.col, fontFace:"Calibri", margin:0 });
    s.addText(
      item.points.map((p,pi) => ({ text:p, options:{ bullet:true, breakLine: pi<item.points.length-1 }})),
      { x:5.15, y:y+0.52, w:4.5, h:1.48, fontSize:9.5, color:C.gray, fontFace:"Calibri" }
    );
  });

  // Bottom note
  s.addShape(pres.shapes.RECTANGLE, { x:4.95, y:5.08, w:4.8, h:0.38, fill:{color:C.panel2}, line:{color:C.yellow, width:1} });
  s.addText("⚖  Lastverteilung (DRS / Live Balancing): Hosts werden gleichmäßig genutzt → höhere Reserven bei Ausfall", {
    x:5.1, y:5.1, w:4.6, h:0.33, fontSize:9, color:C.yellow, valign:"middle", margin:0
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 5 — KAPITEL 3: HARDWARE-ANFORDERUNGEN
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "🔩  Kapitel 3: Anforderungen an die neue Hardware", C.orange);

  // Intel vs AMD
  card(s, 0.3, 1.0, 4.45, 2.05, C.orange);
  s.addText("⚡  Hardware-Virtualisierung — Pflicht!", { x:0.5, y:1.1, w:4.1, h:0.33, fontSize:12, bold:true, color:C.orange, margin:0 });
  [
    [0.4, "Intel", "VT-x (vmx)", "EPT (Ext. Page Tables)", "VT-d (I/O-Passthrough)", C.accent],
    [2.35,"AMD",  "AMD-V (svm)", "NPT / RVI",             "AMD-Vi (I/O)",           C.green],
  ].forEach(([x, brand, base, mem, io, col]) => {
    s.addShape(pres.shapes.RECTANGLE, { x:x, y:1.48, w:1.85, h:1.38, fill:{color:C.panel2}, line:{color:col, width:1.5} });
    s.addText("🔷  "+brand, { x:x, y:1.52, w:1.85, h:0.3, fontSize:11, bold:true, color:col, align:"center", margin:0 });
    s.addText("Base: "+base, { x:x+0.08, y:1.84, w:1.7, h:0.22, fontSize:8, color:C.lgray, margin:0 });
    s.addText("Mem:  "+mem,  { x:x+0.08, y:2.05, w:1.7, h:0.22, fontSize:8, color:C.lgray, margin:0 });
    s.addText("I/O:  "+io,   { x:x+0.08, y:2.26, w:1.7, h:0.22, fontSize:8, color:C.lgray, margin:0 });
  });

  // Without HW virt = pain
  card(s, 0.3, 3.13, 4.45, 2.18, C.red);
  s.addText("❌  Ohne Hardware-Virt. Flags:", { x:0.5, y:3.23, w:4.1, h:0.3, fontSize:11, bold:true, color:C.red, margin:0 });
  [
    "Performance-Verlust 30–80 % durch Software-Emulation",
    "64-Bit-Gäste werden von Hypervisoren oft komplett verweigert",
    "Live Migration, Nested Virt., GPU-Passthrough nicht möglich",
    "Binary Translation kostet messbar Latenz & CPU-Zyklen",
  ].forEach((pt, i) => {
    sideBar(s, 0.5, 3.58+i*0.44, 0.36, C.red);
    s.addText(pt, { x:0.7, y:3.6+i*0.44, w:3.9, h:0.32, fontSize:9.5, color:C.gray, margin:0 });
  });

  // Right: full hardware requirements table
  card(s, 5.0, 1.0, 4.75, 4.3, C.yellow);
  s.addText("📋  Hardware-Pflichtmerkmale (pro Host)", { x:5.2, y:1.1, w:4.4, h:0.33, fontSize:12, bold:true, color:C.yellow, margin:0 });

  const hwRows = [
    ["CPU",    "Aktuelle Server-Gen., VT-x/AMD-V + EPT/NPT, mind. 16 Kerne"],
    ["RAM",    "ECC-RAM, mind. 128 GB (überdim. für Failover-Reserven)"],
    ["NIC",    "2× 10 GbE redundant (LAN) + 2× 10 GbE für Storage-Netz"],
    ["Strom",  "Redundante Netzteile, zwei Einspeisungen (A+B) + USV"],
    ["Storage","Zentrales SAN / iSCSI / NFS, RAID 10 oder RAID 6 + Hot-Spare"],
    ["Mgmt",   "iLO / iDRAC / IMM für Out-of-Band-Fernzugriff"],
  ];
  hwRows.forEach(([k,v], i) => {
    const y = 1.5 + i*0.62;
    s.addShape(pres.shapes.RECTANGLE, { x:5.05, y, w:4.6, h:0.56, fill:{color: i%2===0 ? C.panel2 : C.panel}, line:{color:C.dgray, width:0.5} });
    s.addShape(pres.shapes.RECTANGLE, { x:5.05, y, w:0.7, h:0.56, fill:{color:C.panel3}, line:{color:C.dgray, width:0.5} });
    s.addText(k, { x:5.07, y:y+0.05, w:0.65, h:0.46, fontSize:9.5, bold:true, color:C.yellow, align:"center", valign:"middle", margin:0 });
    s.addText(v, { x:5.82, y:y+0.07, w:3.75, h:0.42, fontSize:9, color:C.lgray, valign:"middle", margin:0 });
  });

  // SW vs HW virt bottom comparison
  s.addShape(pres.shapes.RECTANGLE, { x:5.0, y:5.08, w:4.75, h:0.38, fill:{color:"001A00"}, line:{color:C.green, width:1} });
  s.addText("✅  Mit VT-x / AMD-V: Latenz-Overhead sinkt von 30–80 % auf nur 5–15 % — für Kunden nicht wahrnehmbar", {
    x:5.15, y:5.1, w:4.5, h:0.33, fontSize:8.5, color:C.green, valign:"middle", margin:0
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 6 — KAPITEL 4: TECHNISCHER LÖSUNGSVORSCHLAG (Architektur)
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "🏗️  Kapitel 4: Konkreter technischer Lösungsvorschlag — Architektur", C.green);

  // Full architecture diagram
  // Internet + LB
  s.addShape(pres.shapes.OVAL, { x:3.8, y:0.95, w:2.4, h:0.58, fill:{color:C.panel2}, line:{color:C.accent, width:2} });
  s.addText("🌐  Internet", { x:3.8, y:0.95, w:2.4, h:0.58, fontSize:10, bold:true, color:C.accent, align:"center", valign:"middle", margin:0 });
  s.addShape(pres.shapes.LINE, { x:5.0, y:1.53, w:0, h:0.3, line:{color:C.accent, width:1.5} });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x:3.7, y:1.83, w:2.6, h:0.52, rectRadius:0.1, fill:{color:C.panel3}, line:{color:C.accent, width:2}, shadow:sh() });
  s.addText("⚖  Load Balancer", { x:3.7, y:1.83, w:2.6, h:0.52, fontSize:10, bold:true, color:C.accent, align:"center", valign:"middle", margin:0 });

  // Cluster network bar
  s.addShape(pres.shapes.RECTANGLE, { x:0.3, y:2.47, w:9.4, h:0.3, fill:{color:"0A1020"}, line:{color:C.purple, width:1.5} });
  s.addText("⬛  Cluster-Netzwerk  10 GbE", { x:0.3, y:2.47, w:9.4, h:0.3, fontSize:8.5, bold:true, color:C.purple, align:"center", valign:"middle", margin:0 });

  // Lines LB → Cluster
  s.addShape(pres.shapes.LINE, { x:3.7, y:2.09, w:-2.0, h:0.38, line:{color:C.gray, width:1} });
  s.addShape(pres.shapes.LINE, { x:6.3, y:2.09, w:1.8,  h:0.38, line:{color:C.gray, width:1} });

  // Three hosts
  const hosts = [
    { x:0.3, label:"🖥  HOST A", sub:"ESXi / Hyper-V", col:C.green,
      vms:[["PROD-VM\n(live)",C.green],["TEST-VM\n(idle)",C.accent]] },
    { x:3.65, label:"🖥  HOST B", sub:"ESXi / Hyper-V", col:C.accent,
      vms:[["PROD-DB\n(live)",C.yellow],["Reserve\nFailover",C.dgray]] },
    { x:7.0, label:"🖥  HOST C", sub:"ESXi / Hyper-V", col:C.yellow,
      vms:[["TEST-VMs\n(isoliert)",C.accent],["Quorum\nWitness",C.orange]] },
  ];
  hosts.forEach(h => {
    s.addShape(pres.shapes.RECTANGLE, { x:h.x, y:2.77, w:2.85, h:2.0, fill:{color:C.panel}, line:{color:h.col, width:2}, shadow:sh() });
    s.addText(h.label, { x:h.x+0.1, y:2.82, w:2.65, h:0.28, fontSize:10.5, bold:true, color:h.col, margin:0 });
    s.addText(h.sub,   { x:h.x+0.1, y:3.09, w:2.65, h:0.2,  fontSize:8, color:C.gray, margin:0 });
    h.vms.forEach(([lbl,col], vi) => {
      s.addShape(pres.shapes.RECTANGLE, { x:h.x+0.12+vi*1.4, y:3.33, w:1.3, h:1.3, fill:{color:C.panel2}, line:{color:col, width:1.5} });
      s.addText(lbl, { x:h.x+0.12+vi*1.4, y:3.33, w:1.3, h:1.3, fontSize:8.5, color:col, align:"center", valign:"middle", margin:0 });
    });
  });

  // Live Migration arrows
  s.addShape(pres.shapes.LINE, { x:3.15, y:3.77, w:0.5, h:0, line:{color:C.green, width:2} });
  s.addShape(pres.shapes.LINE, { x:6.5,  y:3.77, w:0.5, h:0, line:{color:C.green, width:2} });
  s.addText("⟵ Live Migration / HA-Failover ⟶", { x:2.5, y:3.55, w:5.0, h:0.24, fontSize:8, color:C.green, align:"center", italic:true, margin:0 });

  // Storage bar
  s.addShape(pres.shapes.RECTANGLE, { x:2.5, y:4.83, w:5.0, h:0.42, fill:{color:"1A1200"}, line:{color:C.yellow, width:2}, shadow:sh() });
  s.addText("💾  Zentraler Storage — SAN / iSCSI · RAID 10 · Redundante Pfade · Dual-Controller", {
    x:2.6, y:4.83, w:4.8, h:0.42, fontSize:9, bold:true, color:C.yellow, align:"center", valign:"middle", margin:0
  });
  // Storage connection lines
  [1.73, 5.08, 8.43].forEach(hx => {
    s.addShape(pres.shapes.LINE, { x:hx, y:4.77, w:0, h:0.06, line:{color:C.yellow, width:1.5} });
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 7 — SOFTWARE, TRENNUNG PROD/TEST, BACKUP, MONITORING
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "⚙️  Kapitel 4: Software-Stack, Trennung, Backup & Monitoring", C.purple);

  const cols4 = [
    {
      icon:"💿", title:"Hypervisor-Software", col:C.accent,
      items:[
        "VMware vSphere + vSphere HA + DRS (Mittelstandsstandard)",
        "Microsoft Hyper-V + Failover Cluster Manager",
        "Proxmox VE HA-Cluster (OSS, kostengünstig)",
        "Zentral verwaltet via vCenter / Proxmox WebUI",
      ]
    },
    {
      icon:"🔬", title:"Prod ↔ Test Trennung", col:C.green,
      items:[
        "Eigene vSwitches + getrennte VLANs für PROD & TEST",
        "Ressourcenpools trennen CPU/RAM-Zuteilung",
        "Optional: TEST-VMs auf eigenem Storage-LUN",
        "Klon der Prod-VM vor jedem Release als Standard",
      ]
    },
    {
      icon:"💾", title:"Backup & Disaster Recovery", col:C.yellow,
      items:[
        "3-2-1-Regel: 3 Kopien · 2 Medien · 1 Offsite",
        "VM-konsistente Backups (Veeam / Proxmox Backup Server)",
        "Wichtig: HA ersetzt kein Backup (Ransomware-Schutz!)",
        "Tägliches Backup in Online-Storage (Offsite)",
      ]
    },
    {
      icon:"📡", title:"Monitoring & Alerting", col:C.orange,
      items:[
        "Externe Verfügbarkeitssonde: UptimeRobot (Kundensicht)",
        "Internes Monitoring: Prometheus + Grafana",
        "CPU, RAM, Disk, VM-Status, Netzwerk-Latenz",
        "Eskalationskette: Slack → SMS bei Critical-Alert",
      ]
    },
  ];
  cols4.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.3 + col * 4.9;
    const y = 1.0 + row * 2.35;
    card(s, x, y, 4.55, 2.15, c.col);
    s.addText(c.icon+"  "+c.title, { x:x+0.18, y:y+0.1, w:4.25, h:0.35, fontSize:12, bold:true, color:c.col, fontFace:"Calibri", margin:0 });
    s.addText(
      c.items.map((it,ii) => ({ text:it, options:{ bullet:true, breakLine:ii<c.items.length-1 }})),
      { x:x+0.18, y:y+0.5, w:4.25, h:1.52, fontSize:9.5, color:C.gray, fontFace:"Calibri" }
    );
  });

  // Monitoring cycle
  s.addShape(pres.shapes.RECTANGLE, { x:0, y:5.1, w:10, h:0.525, fill:{color:C.panel2}, line:{color:C.panel2} });
  const cycle = ["📡 Messen", "→", "📊 Analysieren", "→", "🔔 Alarmieren", "→", "🔧 Beheben", "→", "📋 Dokumentieren"];
  const ccols = [C.green,C.dgray,C.accent,C.dgray,C.orange,C.dgray,C.red,C.dgray,C.yellow];
  cycle.forEach((step, i) => {
    s.addText(step, { x:0.2+i*1.07, y:5.16, w:1.0, h:0.38, fontSize: step==="→"?14:9, bold:step!=="→", color:ccols[i], align:"center", valign:"middle", margin:0 });
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 8 — ERFÜLLUNGSMATRIX
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "✅  Erfüllungsmatrix: Lastenheft → Technische Umsetzung", C.green);

  // Matrix rows
  const matrix = [
    {
      req:"📊  99,99 % Verfügbarkeit",
      col:C.green,
      impl:"HA-Cluster aus 3 Hosts + redundanter Storage + redundante Netzwerke + USV",
      detail:[
        "Automatischer VM-Restart auf anderem Host bei Ausfall: < 5 Minuten",
        "Live Migration vor Wartung: Downtime = 0",
        "Redundanter SAN-Speicher: kein Single Point of Failure auf Disk-Ebene",
        "3-2-1 Backup: Schutz vor Ransomware und Datenverlust",
      ]
    },
    {
      req:"🔬  Getrennte Testumgebung",
      col:C.accent,
      impl:"Test-VMs in eigenem VLAN/vSwitch + Ressourcenpool + getrennter LUN + eigene Rechte",
      detail:[
        "Klon der Prod-VM per Snapshot: in Minuten einsatzbereit",
        "Kein Netzwerkzugriff auf produktive Datenbank möglich",
        "Ressourcenlimits: Test bremst Produktion nicht aus",
        "Eigene Backup-Policy und Benutzergruppen für Entwicklung",
      ]
    },
    {
      req:"🔧  Wartung ohne Abschaltung",
      col:C.yellow,
      impl:"Live Migration zieht alle VMs von Host A auf B/C vor Wartung — leerer Host wird gewartet",
      detail:[
        "Host-Wartung: VMs wandern in < 1 Min. live auf anderen Host",
        "Kunden merken nichts — keine Downtime, keine Fehlermeldung",
        "Hot-Swap Hardware (RAM, Festplatten) an leeren Hosts möglich",
        "Quorum/Witness auf Host C verhindert Split-Brain",
      ]
    },
  ];

  matrix.forEach((row, i) => {
    const y = 1.0 + i*1.53;
    // Req label
    s.addShape(pres.shapes.RECTANGLE, { x:0.3, y, w:2.8, h:1.38, fill:{color:C.panel}, line:{color:row.col, width:2}, shadow:sh() });
    s.addShape(pres.shapes.RECTANGLE, { x:0.3, y, w:0.07, h:1.38, fill:{color:row.col}, line:{color:row.col} });
    s.addText(row.req, { x:0.5, y:y+0.1, w:2.55, h:0.38, fontSize:11, bold:true, color:row.col, fontFace:"Calibri", margin:0 });
    s.addText(row.impl, { x:0.5, y:y+0.5, w:2.55, h:0.75, fontSize:8.5, color:C.lgray, fontFace:"Calibri", margin:0 });

    // Arrow
    s.addText("→", { x:3.12, y:y+0.45, w:0.4, h:0.5, fontSize:22, color:row.col, align:"center", valign:"middle", margin:0 });

    // Detail bullets
    s.addShape(pres.shapes.RECTANGLE, { x:3.55, y, w:6.15, h:1.38, fill:{color:C.panel}, line:{color:C.dgray, width:1}, shadow:sh() });
    s.addText(
      row.detail.map((d,di) => ({ text:d, options:{ bullet:true, breakLine:di<row.detail.length-1 }})),
      { x:3.7, y:y+0.12, w:5.9, h:1.18, fontSize:9.5, color:C.gray, fontFace:"Calibri" }
    );
    // Check
    s.addText("✓", { x:9.35, y:y+0.42, w:0.3, h:0.5, fontSize:22, bold:true, color:row.col, align:"center", margin:0 });
  });

  // Bottom summary
  s.addShape(pres.shapes.RECTANGLE, { x:0.3, y:5.1, w:9.4, h:0.38, fill:{color:C.panel2}, line:{color:C.accent, width:1.5} });
  s.addText("Fazit: Durch Server-Virtualisierung mit Hardware-Unterstützung (Intel VT-x / AMD-V) und einem 3-Host-HA-Cluster werden alle Lastenheft-Anforderungen wirtschaftlich, skalierbar und zukunftssicher erfüllt.", {
    x:0.5, y:5.12, w:9.1, h:0.35, fontSize:9, color:C.white, valign:"middle", margin:0
  });
}

// ════════════════════════════════════════════════════════════
// SLIDE 9 — GLOSSAR
// ════════════════════════════════════════════════════════════
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  header(s, "📖  Anhang: Glossar für nicht-technische Leser", C.accent);

  const terms = [
    ["Hypervisor",     "Software, die einen Server in mehrere virtuelle Computer aufteilt", C.yellow],
    ["VM",             "Computer in einer Datei - Betriebssystem + Anwendung + Daten in einem Paket", C.green],
    ["Cluster",        "Mehrere Server, die zusammenarbeiten und sich gegenseitig vertreten können", C.accent],
    ["HA",             "Hochverfügbarkeit — technische Maßnahmen, damit ein Dienst auch bei Ausfällen weiterläuft", C.orange],
    ["Live Migration", "Eine VM zieht im laufenden Betrieb auf einen anderen Server um (kein Ausfall)", C.green],
    ["Snapshot",       "\"Foto\" einer VM zu einem Zeitpunkt — Rückkehr in Sekunden möglich (z. B. nach fehlerhaftem Update)", C.accent],
    ["SAN / iSCSI",    "Zentraler Festplattenspeicher, auf den alle Server gemeinsam zugreifen", C.yellow],
    ["VLAN",           "Logisch getrenntes Netzwerk auf gemeinsamer Hardware (wie abgetrennte Räume im selben Gebäude)", C.purple],
    ["SLA",            "Service Level Agreement — vertraglich zugesicherte Dienstgüte (z. B. 99,99 % Verfügbarkeit)", C.orange],
    ["RAID",           "Methode, Daten auf mehrere Festplatten zu verteilen, sodass beim Ausfall einer Disk kein Datenverlust entsteht", C.red],
  ];

  // Two columns
  terms.forEach(([ term, def, col], i) => {
    const colNum = i % 2;
    const row    = Math.floor(i / 2);
    const x = 0.3 + colNum * 4.9;
    const y = 1.0 + row * 0.92;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w:4.55, h:0.8, fill:{color:C.panel}, line:{color:col, width:1.2} });
    sideBar(s, x, y, 0.8, col);
    s.addText(term, { x:x+0.2, y:y+0.07, w:4.2, h:0.28, fontSize:11, bold:true, color:col, fontFace:"Calibri", margin:0 });
    s.addText(def,  { x:x+0.2, y:y+0.35, w:4.2, h:0.38, fontSize:8.5, color:C.gray, fontFace:"Calibri", margin:0 });
  });
}

pres.writeFile({ fileName:"/home/claude/BrickLogic_Pflichtenheft_v2.pptx" }).then(() => console.log("Done!")).catch(console.error);
