const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");

// Colors: dark navy + electric blue accent
const C = {
  bg: "0D1B2A",
  panel: "1A2C42",
  accent: "00A8E8",
  accent2: "0077B6",
  white: "FFFFFF",
  gray: "8EAFC2",
  lightbg: "F0F6FC",
};

async function iconToBase64(iconName, color = "#FFFFFF", size = 256) {
  const icons = require("react-icons/fa");
  const icon = icons[iconName];
  if (!icon) return null;
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(icon, { color, size: String(size) })
  );
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Blade-Systeme";

  // ─── SLIDE 1: Überblick & Aufbau ───────────────────────────────────────────
  const s1 = pres.addSlide();
  s1.background = { color: C.bg };

  // Left column background
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4.4, h: 5.625,
    fill: { color: C.panel }, line: { color: C.panel }
  });

  // Accent bar left
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.07, h: 5.625,
    fill: { color: C.accent }, line: { color: C.accent }
  });

  // Title left
  s1.addText("Blade-\nSysteme", {
    x: 0.25, y: 0.3, w: 3.9, h: 1.5,
    fontSize: 36, bold: true, color: C.white,
    fontFace: "Arial Black", valign: "top", margin: 0
  });

  s1.addText("Server-Architekturen", {
    x: 0.25, y: 1.7, w: 3.9, h: 0.35,
    fontSize: 13, color: C.accent, fontFace: "Calibri", margin: 0
  });

  // Key facts left column
  const facts = [
    ["Enclosure", "Chassis nimmt mehrere Blades auf"],
    ["Shared Resources", "Stromversorgung, Kühlung, Netzwerk"],
    ["Hot-Swap", "Blades im Betrieb austauschbar"],
    ["Skalierbar", "Einfache Kapazitätserweiterung"],
  ];

  facts.forEach(([title, desc], i) => {
    const y = 2.25 + i * 0.75;
    s1.addShape(pres.shapes.RECTANGLE, {
      x: 0.25, y, w: 0.05, h: 0.45,
      fill: { color: C.accent }, line: { color: C.accent }
    });
    s1.addText(title, {
      x: 0.45, y, w: 3.7, h: 0.22,
      fontSize: 11, bold: true, color: C.white, fontFace: "Calibri", margin: 0
    });
    s1.addText(desc, {
      x: 0.45, y: y + 0.22, w: 3.7, h: 0.22,
      fontSize: 9.5, color: C.gray, fontFace: "Calibri", margin: 0
    });
  });

  // ─── RIGHT: Blade Chassis Diagram ───────────────────────────────────────
  const ox = 4.7, oy = 0.35;

  // Chassis outer frame
  s1.addShape(pres.shapes.RECTANGLE, {
    x: ox, y: oy, w: 5.0, h: 4.7,
    fill: { color: "1E3A5F" },
    line: { color: C.accent, width: 2 }
  });

  // Chassis label
  s1.addText("Blade Chassis / Enclosure", {
    x: ox + 0.1, y: oy + 0.05, w: 4.8, h: 0.3,
    fontSize: 10, bold: true, color: C.accent, fontFace: "Calibri",
    align: "center", margin: 0
  });

  // Draw blade slots (6 blades)
  const bladeColors = ["0077B6", "00A8E8", "0077B6", "00A8E8", "0077B6", "00A8E8"];
  const bladeLabels = ["Blade 1\n(Web Server)", "Blade 2\n(DB Server)", "Blade 3\n(App Server)", "Blade 4\n(Backup)", "Blade 5\n(VM Host)", "Blade 6\n(Spare)"];

  for (let i = 0; i < 6; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const bx = ox + 0.15 + col * 2.45;
    const by = oy + 0.45 + row * 1.2;

    s1.addShape(pres.shapes.RECTANGLE, {
      x: bx, y: by, w: 2.3, h: 1.05,
      fill: { color: bladeColors[i] },
      line: { color: C.white, width: 1 }
    });

    // LED indicator
    s1.addShape(pres.shapes.OVAL, {
      x: bx + 0.08, y: by + 0.08, w: 0.12, h: 0.12,
      fill: { color: "00FF88" }, line: { color: "00FF88" }
    });

    // Blade label
    s1.addText(bladeLabels[i], {
      x: bx + 0.05, y: by + 0.2, w: 2.2, h: 0.7,
      fontSize: 8.5, color: C.white, fontFace: "Calibri",
      align: "center", valign: "middle", margin: 0
    });
  }

  // Midplane / backplane
  s1.addShape(pres.shapes.RECTANGLE, {
    x: ox + 0.15, y: oy + 4.1, w: 4.7, h: 0.3,
    fill: { color: "2D5016" }, line: { color: "4CAF50", width: 1 }
  });
  s1.addText("Midplane  |  Shared Power  |  Network Fabric  |  Management", {
    x: ox + 0.15, y: oy + 4.12, w: 4.7, h: 0.26,
    fontSize: 7.5, color: "A5D6A7", fontFace: "Calibri",
    align: "center", margin: 0
  });

  // Slide number
  s1.addText("1 / 2", {
    x: 9.5, y: 5.3, w: 0.5, h: 0.2,
    fontSize: 8, color: C.gray, align: "right", margin: 0
  });

  // ─── SLIDE 2: Hersteller & Vergleich ──────────────────────────────────────
  const s2 = pres.addSlide();
  s2.background = { color: C.bg };

  // Title bar
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: C.panel }, line: { color: C.panel }
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.07,
    fill: { color: C.accent }, line: { color: C.accent }
  });
  s2.addText("Gängige Blade-Systeme & Vergleich", {
    x: 0.35, y: 0.1, w: 9.3, h: 0.55,
    fontSize: 22, bold: true, color: C.white, fontFace: "Arial Black",
    valign: "middle", margin: 0
  });

  // Vendor cards
  const vendors = [
    {
      name: "HPE BladeSystem", sub: "c7000 / Synergy",
      color: "00A8E8",
      points: ["Bis zu 16 Blades", "OneView Management", "Virtual Connect Fabric", "ProLiant BL-Serie"]
    },
    {
      name: "Dell PowerEdge", sub: "M1000e / MX7000",
      color: "0077B6",
      points: ["Bis zu 16 Blades", "OpenManage Console", "PowerEdge MX Chassis", "Disaggregated Design"]
    },
    {
      name: "Cisco UCS", sub: "Unified Computing System",
      color: "005073",
      points: ["Fabric Interconnect", "Unified Management", "UCS B-Serie Blades", "Service Profile-Konzept"]
    },
    {
      name: "Lenovo ThinkSystem", sub: "SN850 / SN550",
      color: "1A3A5C",
      points: ["IBM-Architektur-Basis", "XClarity Management", "Flexible Konfiguration", "KI-optimierte Blades"]
    },
  ];

  vendors.forEach((v, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = 0.3 + col * 4.9;
    const cy = 1.0 + row * 2.15;

    s2.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 4.5, h: 1.95,
      fill: { color: C.panel },
      line: { color: v.color, width: 1.5 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.3 }
    });

    // Color accent top bar
    s2.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 4.5, h: 0.07,
      fill: { color: v.color }, line: { color: v.color }
    });

    // Vendor name
    s2.addText(v.name, {
      x: cx + 0.15, y: cy + 0.1, w: 4.2, h: 0.28,
      fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", margin: 0
    });
    s2.addText(v.sub, {
      x: cx + 0.15, y: cy + 0.36, w: 4.2, h: 0.2,
      fontSize: 9, color: v.color, fontFace: "Calibri", italic: true, margin: 0
    });

    // Bullet points
    s2.addText(
      v.points.map((p, pi) => ({ text: p, options: { bullet: true, breakLine: pi < v.points.length - 1 } })),
      {
        x: cx + 0.15, y: cy + 0.6, w: 4.2, h: 1.25,
        fontSize: 9, color: C.gray, fontFace: "Calibri"
      }
    );
  });

  // Bottom summary bar
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.1, w: 10, h: 0.525,
    fill: { color: C.panel }, line: { color: C.panel }
  });
  s2.addText("Vorteile: Platzsparend  ·  Energieeffizient  ·  Zentral verwaltbar  ·  Schnell skalierbar  |  Einsatz: Rechenzentren, Cloud, HPC", {
    x: 0.3, y: 5.15, w: 9.4, h: 0.43,
    fontSize: 9.5, color: C.gray, fontFace: "Calibri",
    align: "center", valign: "middle", margin: 0
  });

  s2.addText("2 / 2", {
    x: 9.5, y: 4.85, w: 0.5, h: 0.2,
    fontSize: 8, color: C.gray, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Blade_Systeme.pptx" });
  console.log("Done!");
}

main().catch(console.error);const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");

// Colors: dark navy + electric blue accent
const C = {
  bg: "0D1B2A",
  panel: "1A2C42",
  accent: "00A8E8",
  accent2: "0077B6",
  white: "FFFFFF",
  gray: "8EAFC2",
  lightbg: "F0F6FC",
};

async function iconToBase64(iconName, color = "#FFFFFF", size = 256) {
  const icons = require("react-icons/fa");
  const icon = icons[iconName];
  if (!icon) return null;
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(icon, { color, size: String(size) })
  );
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "Blade-Systeme";

  // ─── SLIDE 1: Überblick & Aufbau ───────────────────────────────────────────
  const s1 = pres.addSlide();
  s1.background = { color: C.bg };

  // Left column background
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4.4, h: 5.625,
    fill: { color: C.panel }, line: { color: C.panel }
  });

  // Accent bar left
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.07, h: 5.625,
    fill: { color: C.accent }, line: { color: C.accent }
  });

  // Title left
  s1.addText("Blade-\nSysteme", {
    x: 0.25, y: 0.3, w: 3.9, h: 1.5,
    fontSize: 36, bold: true, color: C.white,
    fontFace: "Arial Black", valign: "top", margin: 0
  });

  s1.addText("Server-Architekturen", {
    x: 0.25, y: 1.7, w: 3.9, h: 0.35,
    fontSize: 13, color: C.accent, fontFace: "Calibri", margin: 0
  });

  // Key facts left column
  const facts = [
    ["Enclosure", "Chassis nimmt mehrere Blades auf"],
    ["Shared Resources", "Stromversorgung, Kühlung, Netzwerk"],
    ["Hot-Swap", "Blades im Betrieb austauschbar"],
    ["Skalierbar", "Einfache Kapazitätserweiterung"],
  ];

  facts.forEach(([title, desc], i) => {
    const y = 2.25 + i * 0.75;
    s1.addShape(pres.shapes.RECTANGLE, {
      x: 0.25, y, w: 0.05, h: 0.45,
      fill: { color: C.accent }, line: { color: C.accent }
    });
    s1.addText(title, {
      x: 0.45, y, w: 3.7, h: 0.22,
      fontSize: 11, bold: true, color: C.white, fontFace: "Calibri", margin: 0
    });
    s1.addText(desc, {
      x: 0.45, y: y + 0.22, w: 3.7, h: 0.22,
      fontSize: 9.5, color: C.gray, fontFace: "Calibri", margin: 0
    });
  });

  // ─── RIGHT: Blade Chassis Diagram ───────────────────────────────────────
  const ox = 4.7, oy = 0.35;

  // Chassis outer frame
  s1.addShape(pres.shapes.RECTANGLE, {
    x: ox, y: oy, w: 5.0, h: 4.7,
    fill: { color: "1E3A5F" },
    line: { color: C.accent, width: 2 }
  });

  // Chassis label
  s1.addText("Blade Chassis / Enclosure", {
    x: ox + 0.1, y: oy + 0.05, w: 4.8, h: 0.3,
    fontSize: 10, bold: true, color: C.accent, fontFace: "Calibri",
    align: "center", margin: 0
  });

  // Draw blade slots (6 blades)
  const bladeColors = ["0077B6", "00A8E8", "0077B6", "00A8E8", "0077B6", "00A8E8"];
  const bladeLabels = ["Blade 1\n(Web Server)", "Blade 2\n(DB Server)", "Blade 3\n(App Server)", "Blade 4\n(Backup)", "Blade 5\n(VM Host)", "Blade 6\n(Spare)"];

  for (let i = 0; i < 6; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const bx = ox + 0.15 + col * 2.45;
    const by = oy + 0.45 + row * 1.2;

    s1.addShape(pres.shapes.RECTANGLE, {
      x: bx, y: by, w: 2.3, h: 1.05,
      fill: { color: bladeColors[i] },
      line: { color: C.white, width: 1 }
    });

    // LED indicator
    s1.addShape(pres.shapes.OVAL, {
      x: bx + 0.08, y: by + 0.08, w: 0.12, h: 0.12,
      fill: { color: "00FF88" }, line: { color: "00FF88" }
    });

    // Blade label
    s1.addText(bladeLabels[i], {
      x: bx + 0.05, y: by + 0.2, w: 2.2, h: 0.7,
      fontSize: 8.5, color: C.white, fontFace: "Calibri",
      align: "center", valign: "middle", margin: 0
    });
  }

  // Midplane / backplane
  s1.addShape(pres.shapes.RECTANGLE, {
    x: ox + 0.15, y: oy + 4.1, w: 4.7, h: 0.3,
    fill: { color: "2D5016" }, line: { color: "4CAF50", width: 1 }
  });
  s1.addText("Midplane  |  Shared Power  |  Network Fabric  |  Management", {
    x: ox + 0.15, y: oy + 4.12, w: 4.7, h: 0.26,
    fontSize: 7.5, color: "A5D6A7", fontFace: "Calibri",
    align: "center", margin: 0
  });

  // Slide number
  s1.addText("1 / 2", {
    x: 9.5, y: 5.3, w: 0.5, h: 0.2,
    fontSize: 8, color: C.gray, align: "right", margin: 0
  });

  // ─── SLIDE 2: Hersteller & Vergleich ──────────────────────────────────────
  const s2 = pres.addSlide();
  s2.background = { color: C.bg };

  // Title bar
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: C.panel }, line: { color: C.panel }
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.07,
    fill: { color: C.accent }, line: { color: C.accent }
  });
  s2.addText("Gängige Blade-Systeme & Vergleich", {
    x: 0.35, y: 0.1, w: 9.3, h: 0.55,
    fontSize: 22, bold: true, color: C.white, fontFace: "Arial Black",
    valign: "middle", margin: 0
  });

  // Vendor cards
  const vendors = [
    {
      name: "HPE BladeSystem", sub: "c7000 / Synergy",
      color: "00A8E8",
      points: ["Bis zu 16 Blades", "OneView Management", "Virtual Connect Fabric", "ProLiant BL-Serie"]
    },
    {
      name: "Dell PowerEdge", sub: "M1000e / MX7000",
      color: "0077B6",
      points: ["Bis zu 16 Blades", "OpenManage Console", "PowerEdge MX Chassis", "Disaggregated Design"]
    },
    {
      name: "Cisco UCS", sub: "Unified Computing System",
      color: "005073",
      points: ["Fabric Interconnect", "Unified Management", "UCS B-Serie Blades", "Service Profile-Konzept"]
    },
    {
      name: "Lenovo ThinkSystem", sub: "SN850 / SN550",
      color: "1A3A5C",
      points: ["IBM-Architektur-Basis", "XClarity Management", "Flexible Konfiguration", "KI-optimierte Blades"]
    },
  ];

  vendors.forEach((v, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = 0.3 + col * 4.9;
    const cy = 1.0 + row * 2.15;

    s2.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 4.5, h: 1.95,
      fill: { color: C.panel },
      line: { color: v.color, width: 1.5 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.3 }
    });

    // Color accent top bar
    s2.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 4.5, h: 0.07,
      fill: { color: v.color }, line: { color: v.color }
    });

    // Vendor name
    s2.addText(v.name, {
      x: cx + 0.15, y: cy + 0.1, w: 4.2, h: 0.28,
      fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", margin: 0
    });
    s2.addText(v.sub, {
      x: cx + 0.15, y: cy + 0.36, w: 4.2, h: 0.2,
      fontSize: 9, color: v.color, fontFace: "Calibri", italic: true, margin: 0
    });

    // Bullet points
    s2.addText(
      v.points.map((p, pi) => ({ text: p, options: { bullet: true, breakLine: pi < v.points.length - 1 } })),
      {
        x: cx + 0.15, y: cy + 0.6, w: 4.2, h: 1.25,
        fontSize: 9, color: C.gray, fontFace: "Calibri"
      }
    );
  });

  // Bottom summary bar
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.1, w: 10, h: 0.525,
    fill: { color: C.panel }, line: { color: C.panel }
  });
  s2.addText("Vorteile: Platzsparend  ·  Energieeffizient  ·  Zentral verwaltbar  ·  Schnell skalierbar  |  Einsatz: Rechenzentren, Cloud, HPC", {
    x: 0.3, y: 5.15, w: 9.4, h: 0.43,
    fontSize: 9.5, color: C.gray, fontFace: "Calibri",
    align: "center", valign: "middle", margin: 0
  });

  s2.addText("2 / 2", {
    x: 9.5, y: 4.85, w: 0.5, h: 0.2,
    fontSize: 8, color: C.gray, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Blade_Systeme.pptx" });
  console.log("Done!");
}

main().catch(console.error);
