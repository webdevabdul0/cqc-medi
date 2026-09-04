import type { jsPDF } from "jspdf";
import type { SurveyAnswers, SurveyResult } from "@/components/survey/evaluate";
import { QUESTIONS, SECTIONS } from "@/components/survey/data";

// Brand colours
const PURPLE  = "#530172";
const GREEN   = "#00cb97";
const ORANGE  = "#f58729";
const LILAC   = "#f8f3fc";
const RED     = "#ef5658";
const WHITE   = "#ffffff";
const GREY    = "#666666";
const LIGHT   = "#eeeeee";
const DARK    = "#1a1a1a";

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function setFill(doc: jsPDF, hex: string) { doc.setFillColor(...hexToRgb(hex)); }
function setDraw(doc: jsPDF, hex: string) { doc.setDrawColor(...hexToRgb(hex)); }
function setTxt(doc: jsPDF, hex: string)  { doc.setTextColor(...hexToRgb(hex)); }

const W   = 210;
const PAD = 14;
const COL = W - PAD * 2;

function header(doc: jsPDF, title: string, reference: string, date: string): number {
  // Purple bar
  setFill(doc, PURPLE);
  doc.rect(0, 0, W, 30, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setTxt(doc, WHITE);
  doc.text("CQC MediSolutions", PAD, 13);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setTxt(doc, "#ffffffbb");
  doc.text("cqcmedisolutions.co.uk  |  0800 689 1061", PAD, 21);

  // Green accent
  setFill(doc, GREEN);
  doc.rect(0, 30, W, 2, "F");

  // Lilac title band
  setFill(doc, LILAC);
  doc.rect(0, 32, W, 26, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  setTxt(doc, PURPLE);
  doc.text(title, PAD, 45);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setTxt(doc, GREY);
  doc.text(`${reference}  |  ${date}`, PAD, 53);

  return 64;
}

function checkNewPage(doc: jsPDF, y: number, needed = 20): number {
  if (y + needed > 283) { doc.addPage(); return 14; }
  return y;
}

function footer(doc: jsPDF, reference: string) {
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    setFill(doc, PURPLE);
    doc.rect(0, 291, W, 6, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    setTxt(doc, WHITE);
    doc.text(`Page ${p} of ${total}  |  ${reference}  |  CQC MediSolutions`, PAD, 295);
  }
}

// ─── Survey filled PDF ───────────────────────────────────────────────────────

type Contact = { name: string; business: string; email: string; phone: string; location: string; };

export async function buildSurveyPdf(
  answers: SurveyAnswers,
  contact: Contact,
  reference: string,
  dateStr: string,
): Promise<Blob> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  let y = header(doc, "CQC Registration Eligibility Survey", reference, dateStr);

  // Contact block
  y = checkNewPage(doc, y, 40);
  setFill(doc, LILAC);
  doc.roundedRect(PAD, y, COL, 34, 3, 3, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setTxt(doc, PURPLE);
  doc.text("Submitted by", PAD + 5, y + 8);

  const fields = [
    ["Name", contact.name],
    ["Business", contact.business],
    ["Email", contact.email],
    ["Phone", contact.phone],
    ["Location", contact.location],
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  let fx = PAD + 5; let fy = y + 16;
  fields.forEach(([label, val], i) => {
    setTxt(doc, GREY); doc.text(label + ":", fx, fy);
    setTxt(doc, DARK); doc.text(val || "—", fx + 20, fy);
    fy += 6;
    if (i === 1) { fx = PAD + COL / 2; fy = y + 16; }
  });
  y += 40;

  const sectionMap = Object.fromEntries(SECTIONS.map((s) => [s.key, s.name]));
  let lastSection = "";
  for (const q of QUESTIONS) {
    if (q.section !== lastSection) {
      y = checkNewPage(doc, y, 18);
      setFill(doc, PURPLE);
      doc.roundedRect(PAD, y, 32, 6, 1.5, 1.5, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6.5);
      setTxt(doc, WHITE);
      doc.text(`${q.section} — ${sectionMap[q.section] ?? q.section}`.toUpperCase(), PAD + 3, y + 4.2);
      y += 10;
      lastSection = q.section;
    }

    y = checkNewPage(doc, y, 20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    setTxt(doc, DARK);
    const promptLines = doc.splitTextToSize(q.prompt, COL - 4) as string[];
    doc.text(promptLines, PAD, y);
    y += promptLines.length * 5 + 2;

    const raw = answers[q.id];
    const ids: string[] = Array.isArray(raw) ? raw : raw ? [raw] : [];
    const labels = ids.map((id) => q.options.find((o) => o.id === id)?.label ?? id);

    if (labels.length === 0) {
      doc.setFont("helvetica", "italic"); doc.setFontSize(8); setTxt(doc, GREY);
      doc.text("Not answered", PAD + 4, y); y += 6;
    } else {
      for (const lbl of labels) {
        y = checkNewPage(doc, y, 8);
        setFill(doc, GREEN);
        doc.circle(PAD + 2, y - 1, 1.2, "F");
        doc.setFont("helvetica", "normal"); doc.setFontSize(8); setTxt(doc, DARK);
        const lines = doc.splitTextToSize(lbl, COL - 10) as string[];
        doc.text(lines, PAD + 6, y);
        y += lines.length * 5 + 1;
      }
    }

    y = checkNewPage(doc, y, 4);
    setDraw(doc, LIGHT); doc.line(PAD, y, W - PAD, y); y += 5;
  }

  footer(doc, reference);
  return doc.output("blob");
}

// ─── Result PDF ──────────────────────────────────────────────────────────────

const FINDING_COLOURS: Record<"ok" | "gap" | "no", string> = { ok: GREEN, gap: ORANGE, no: RED };
const FINDING_GLYPHS:  Record<"ok" | "gap" | "no", string> = { ok: "✓", gap: "!", no: "✕" };

const STAMP_BORDER: Record<string, string> = { ok: GREEN, warn: ORANGE, no: RED };


export async function buildResultPdf(
  result: SurveyResult,
  contact: Contact,
  reference: string,
  dateStr: string,
): Promise<Blob> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  let y = header(doc, "Eligibility Decision Notice", reference, dateStr);

  // ── CARD 1: Decision notice ────────────────────────────────────────────────
  const card1Top = y;

  // Card border (draw at end once height is known — we'll draw it after)
  // First draw white background
  setFill(doc, WHITE);
  setDraw(doc, "#d8d8d8");
  doc.setLineWidth(0.4);

  // Row 1: "Eligibility decision notice" label (left) + Ref / Date (right)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setTxt(doc, PURPLE);
  doc.text("Eligibility decision notice", PAD + 4, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  setTxt(doc, GREY);
  doc.text(`Ref ${reference}`, W - PAD - 4, y + 7, { align: "right" });
  doc.text(dateStr, W - PAD - 4, y + 13, { align: "right" });

  y += 18;

  // Row 2: verdict (left) + stamp box (right)
  const verdictWidth = COL - 52;
  const stampW = 46;
  const stampX = W - PAD - 4 - stampW;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  setTxt(doc, PURPLE);
  const verdictLines = doc.splitTextToSize(result.verdict, verdictWidth) as string[];
  doc.text(verdictLines, PAD + 4, y + 2);
  const verdictH = verdictLines.length * 8;

  // Stamp bordered box (outline only, colored border)
  const stampClr = STAMP_BORDER[result.stampTone] ?? ORANGE;
  setDraw(doc, stampClr);
  doc.setLineWidth(0.8);
  doc.rect(stampX, y - 2, stampW, 22, "S");
  doc.setLineWidth(0.4);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setTxt(doc, stampClr);
  doc.text(result.stamp.toUpperCase(), stampX + stampW / 2, y + 8, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text(result.stampNote.toUpperCase(), stampX + stampW / 2, y + 15, { align: "center" });

  y += Math.max(verdictH, 24) + 4;

  // Sub text
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setTxt(doc, "#00000099");
  const subLines = doc.splitTextToSize(result.sub, COL - 8) as string[];
  doc.text(subLines, PAD + 4, y);
  y += subLines.length * 5 + 8;

  // Findings
  setDraw(doc, LIGHT);
  doc.setLineWidth(0.3);
  doc.line(PAD + 4, y, W - PAD - 4, y);
  y += 4;

  for (const finding of result.findings) {
    y = checkNewPage(doc, y, 18);
    const clr = FINDING_COLOURS[finding.k];

    // Colored square badge
    setFill(doc, clr);
    doc.roundedRect(PAD + 4, y, 5.5, 5.5, 0.8, 0.8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    setTxt(doc, WHITE);
    doc.text(FINDING_GLYPHS[finding.k], PAD + 6.2, y + 4.2);

    // Label
    const labelLines = doc.splitTextToSize(finding.label, COL - 18) as string[];
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setTxt(doc, DARK);
    doc.text(labelLines, PAD + 13, y + 4.2);
    y += labelLines.length * 5;

    if (finding.note) {
      const noteLines = doc.splitTextToSize(finding.note, COL - 18) as string[];
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      setTxt(doc, GREY);
      doc.text(noteLines, PAD + 13, y + 2);
      y += noteLines.length * 4.5 + 1;
    } else {
      y += 2;
    }

    setDraw(doc, LIGHT);
    doc.setLineWidth(0.3);
    doc.line(PAD + 4, y + 1, W - PAD - 4, y + 1);
    y += 6;
  }

  // Draw card 1 border
  const card1H = y - card1Top + 4;
  setFill(doc, WHITE);
  setDraw(doc, "#d8d8d8");
  doc.setLineWidth(0.4);
  doc.roundedRect(PAD, card1Top, COL, card1H, 4, 4, "S");

  // Disclaimer
  y += 8;
  setDraw(doc, LIGHT);
  doc.setLineWidth(0.3);
  doc.line(PAD, y, W - PAD, y);
  y += 5;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7);
  setTxt(doc, GREY);
  const disc = "This check is an indicative guide based on your own answers. It is not a decision by the Care Quality Commission and it is not legal advice. Registration decisions rest with CQC alone.";
  const discLines = doc.splitTextToSize(disc, COL) as string[];
  doc.text(discLines, PAD, y);

  footer(doc, reference);
  return doc.output("blob");
}
