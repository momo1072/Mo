const fs = require("fs");
const PptxGenJS = require("pptxgenjs");

// 🔴 فقط اینو عوض کن
const filePath = String.raw`C:\Users\Student\SCHOOL-PROJECT\Lernfeld-03\Lernfeld-03\Woche-02\22.04.2026-Entscheidungsvorlage–Zentrale-Datenspeicherinfrastruktur.md`;

// ✅ چک کن فایل وجود داره
if (!fs.existsSync(filePath)) {
  console.log("❌ Datei nicht gefunden!");
  process.exit();
}

// خواندن فایل
const content = fs.readFileSync(filePath, "utf-8");

// ساخت ppt
let pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";

// تقسیم متن
const sections = content.split("### ").filter(s => s.trim() !== "");

// تابع تمیز کردن متن
function clean(text) {
  return text
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/!\[.*\]\(.*\)/g, "") // حذف عکس
    .replace(/\|.*\|/g, "") // حذف جدول
    .replace(/-{5,}/g, "")
    .trim();
}

// ساخت اسلاید
sections.forEach(section => {
  const lines = section.split("\n").filter(l => l.trim() !== "");

  const title = clean(lines[0]);

  let slide = pptx.addSlide();

  // عنوان
  slide.addText(title, {
    x: 1,
    y: 0.7,
    fontSize: 24,
    bold: true
  });

  let y = 1.5;

  // متن
  lines.slice(1).forEach(line => {
    let text = clean(line);

    if (!text) return;

    // اگر خیلی طولانیه → اسلاید جدید
    if (y > 5.5) {
      slide = pptx.addSlide();
      y = 1.0;
    }

    // بولت یا متن
    if (line.startsWith("-") || line.match(/^\d+\./)) {
      slide.addText("• " + text, {
        x: 1.2,
        y,
        fontSize: 16
      });
    } else {
      slide.addText(text, {
        x: 1,
        y,
        fontSize: 15
      });
    }

    y += 0.4;
  });
});

// ذخیره
pptx.writeFile({ fileName: "output.pptx" })
  .then(() => {
    console.log("✅ PPT ohne Fehler erstellt");
  })
  .catch(() => {
    console.log("❌ Fehler beim Speichern");
  });