import type { jsPDF } from "jspdf";
import type { SurveyAnswers, SurveyResult } from "@/components/survey/evaluate";
import { QUESTIONS, SECTIONS } from "@/components/survey/data";

// Brand colours
const PURPLE = "#530172";
const GREEN = "#00cb97";
const ORANGE = "#f58729";
const LILAC = "#f8f3fc";
const RED = "#ef5658";
const WHITE = "#ffffff";
const GREY = "#666666";
const LIGHT = "#eeeeee";

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function setFill(doc: jsPDF, hex: string) {
  doc.setFillColor(...hexToRgb(hex));
}

function setDraw(doc: jsPDF, hex: string) {
  doc.setDrawColor(...hexToRgb(hex));
}

function setTextColor(doc: jsPDF, hex: string) {
  doc.setTextColor(...hexToRgb(hex));
}

const W = 210; // A4 width mm
const PAD = 16;
const COL = W - PAD * 2;

function header(doc: jsPDF, title: string, reference: string, date: string) {
  // Purple header bar
  setFill(doc, PURPLE);
  doc.rect(0, 0, W, 32, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  setTextColor(doc, WHITE);
  doc.text("CQC MediSolutions", PAD, 14);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setTextColor(doc, "#ffffffcc");
  doc.text("cqcmedisolutions.co.uk  |  0800 689 1061", PAD, 22);

  // Green accent line
  setFill(doc, GREEN);
  doc.rect(0, 32, W, 2, "F");

  // Title area
  setFill(doc, LILAC);
  doc.rect(0, 34, W, 28, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  setTextColor(doc, PURPLE);
  doc.text(title, PAD, 48);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setTextColor(doc, GREY);
  doc.text(`${reference}  |  ${date}`, PAD, 56);

  return 70; // y after header
}

function sectionLabel(doc: jsPDF, label: string, y: number) {
  setFill(doc, PURPLE);
  doc.roundedRect(PAD, y, 28, 6, 1.5, 1.5, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  setTextColor(doc, WHITE);
  doc.text(label.toUpperCase(), PAD + 4, y + 4.2);
  return y + 10;
}

function checkNewPage(doc: jsPDF, y: number, needed = 20): number {
  if (y + needed > 285) {
    doc.addPage();
    return 16;
  }
  return y;
}

// ─── Survey filled PDF ───────────────────────────────────────────────────────

type Contact = {
  name: string;
  business: string;
  email: string;
  phone: string;
  location: string;
};

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
  doc.setFontSize(9);
  setTextColor(doc, PURPLE);
  doc.text("Submitted by", PAD + 5, y + 8);

  const fields = [
    ["Name", contact.name],
    ["Business", contact.business],
    ["Email", contact.email],
    ["Phone", contact.phone],
    ["Location", contact.location],
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  let fx = PAD + 5;
  let fy = y + 16;
  fields.forEach(([label, val], i) => {
    setTextColor(doc, GREY);
    doc.text(label + ":", fx, fy);
    setTextColor(doc, "#1a1a1a");
    doc.text(val || "—", fx + 22, fy);
    fy += 6;
    if (i === 1) { fx = PAD + COL / 2; fy = y + 16; }
  });
  y += 40;

  // Questions by section
  const sectionMap = Object.fromEntries(SECTIONS.map((s) => [s.key, s.name]));

  let lastSection = "";
  for (const q of QUESTIONS) {
    if (q.section !== lastSection) {
      y = checkNewPage(doc, y, 18);
      y = sectionLabel(doc, `${q.section} — ${sectionMap[q.section] ?? q.section}`, y);
      lastSection = q.section;
    }

    y = checkNewPage(doc, y, 22);

    // Question prompt
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setTextColor(doc, "#1a1a1a");
    const promptLines = doc.splitTextToSize(q.prompt, COL - 4) as string[];
    doc.text(promptLines, PAD, y);
    y += promptLines.length * 5 + 2;

    // Answer(s)
    const raw = answers[q.id];
    const ids: string[] = Array.isArray(raw) ? raw : raw ? [raw] : [];
    const labels = ids.map((id) => q.options.find((o) => o.id === id)?.label ?? id);

    if (labels.length === 0) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      setTextColor(doc, GREY);
      doc.text("Not answered", PAD + 4, y);
      y += 6;
    } else {
      for (const lbl of labels) {
        y = checkNewPage(doc, y, 8);
        setFill(doc, GREEN);
        doc.circle(PAD + 2, y - 1, 1.2, "F");
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        setTextColor(doc, "#1a1a1a");
        const lines = doc.splitTextToSize(lbl, COL - 10) as string[];
        doc.text(lines, PAD + 6, y);
        y += lines.length * 5 + 1;
      }
    }

    // Divider
    y = checkNewPage(doc, y, 4);
    setDraw(doc, LIGHT);
    doc.line(PAD, y, W - PAD, y);
    y += 5;
  }

  // Footer on each page
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    setFill(doc, PURPLE);
    doc.rect(0, 292, W, 5, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    setTextColor(doc, WHITE);
    doc.text(`Page ${p} of ${total}  |  ${reference}  |  CQC MediSolutions`, PAD, 295.5);
  }

  return doc.output("blob");
}

// ─── Result PDF ──────────────────────────────────────────────────────────────

const FINDING_COLOURS: Record<"ok" | "gap" | "no", string> = {
  ok: GREEN,
  gap: ORANGE,
  no: RED,
};
const FINDING_GLYPHS: Record<"ok" | "gap" | "no", string> = { ok: "✓", gap: "!", no: "✕" };

const NEXT_STEP: Record<string, { title: string; price: string; caption: string; body: string; includes: string[] }> = {
  start: {
    title: "Start your application",
    price: "£1,599",
    caption: "in full, or secure your place with a £99 deposit",
    body: "We draft the forms, build the evidence pack around your statement of purpose, prepare your manager for the fit person interview and run a pre-submission review before anything reaches CQC. Work begins within 24 hours of the invoice being settled.",
    includes: [],
  },
  audit: {
    title: "Book your discovery call",
    price: "£15",
    caption: "for a discovery call, a full report and a consultation with our team",
    body: "The check above tells you where you fall short. The discovery call fixes it: a consultant works through your gaps with you, you get it in writing to work from, and you get proper CQC advice from a team that does this every day.",
    includes: [
      "A discovery call that goes through every blocker and gap from your check, and the order to fix them in",
      "A full report you keep: your verdict, the documents CQC will ask for, and a realistic submission date",
      "A CQC consultation with our team, with direct advice on your registration route and your registered manager",
      "A consultant reads your answers before you speak, so you are not explaining it all again from scratch",
      "Direct answers to your own questions, whatever you bring to the call",
      "The £15 credited against your registration fee if you go ahead with us",
    ],
  },
  scope: {
    title: "Book your discovery call",
    price: "£15",
    caption: "for a discovery call, a full report and a consultation with our team",
    body: "A consultant checks your model against the regulated activity definitions and tells you plainly whether you need to register, then puts it in writing.",
    includes: [
      "A discovery call that places your model against the regulated activity definitions and tells you where it sits",
      "A full report you keep: whether you must register, what would tip you into scope, and what keeps you out",
      "A CQC consultation with our team on the route and the timeline, if it turns out you do need to register",
      "A consultant reads your answers before you speak, so you are not explaining it all again from scratch",
      "Direct answers to your own questions, whatever you bring to the call",
      "The £15 credited against your registration fee if you go ahead with us",
    ],
  },
};

const STAMP_COLOURS: Record<string, string> = { ok: GREEN, warn: ORANGE, no: RED };

export async function buildResultPdf(
  result: SurveyResult,
  contact: Contact,
  reference: string,
  dateStr: string,
): Promise<Blob> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  let y = header(doc, "Eligibility Decision Notice", reference, dateStr);

  // Recipient line
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setTextColor(doc, GREY);
  doc.text(`Prepared for: ${contact.name}  |  ${contact.business}  |  ${contact.email}`, PAD, y);
  y += 10;

  // Stamp pill
  const stampClr = STAMP_COLOURS[result.stampTone] ?? ORANGE;
  setFill(doc, stampClr);
  doc.roundedRect(PAD, y, 60, 12, 3, 3, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  setTextColor(doc, WHITE);
  doc.text(result.stamp, PAD + 4, y + 5.5);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(result.stampNote, PAD + 4, y + 10.5);
  y += 18;

  // Verdict
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  setTextColor(doc, PURPLE);
  const verdictLines = doc.splitTextToSize(result.verdict, COL) as string[];
  doc.text(verdictLines, PAD, y);
  y += verdictLines.length * 7 + 2;

  // Sub
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setTextColor(doc, GREY);
  const subLines = doc.splitTextToSize(result.sub, COL) as string[];
  doc.text(subLines, PAD, y);
  y += subLines.length * 5 + 8;

  // Findings header
  setFill(doc, PURPLE);
  doc.rect(PAD, y, COL, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setTextColor(doc, WHITE);
  doc.text("ELIGIBILITY FINDINGS", PAD + 4, y + 5.5);
  y += 10;

  for (const finding of result.findings) {
    y = checkNewPage(doc, y, 16);
    const clr = FINDING_COLOURS[finding.k];

    setFill(doc, clr);
    doc.roundedRect(PAD, y, 7, 7, 1.5, 1.5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setTextColor(doc, WHITE);
    doc.text(FINDING_GLYPHS[finding.k], PAD + 2, y + 5.2);

    const labelLines = doc.splitTextToSize(finding.label, COL - 14) as string[];
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    setTextColor(doc, "#1a1a1a");
    doc.text(labelLines, PAD + 10, y + 5);
    y += labelLines.length * 5;

    if (finding.note) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      setTextColor(doc, GREY);
      const noteLines = doc.splitTextToSize(finding.note, COL - 14) as string[];
      doc.text(noteLines, PAD + 10, y + 2);
      y += noteLines.length * 4.5;
    }

    setDraw(doc, LIGHT);
    doc.line(PAD, y + 2, W - PAD, y + 2);
    y += 6;
  }

  // Recommended next step
  y = checkNewPage(doc, y, 30);
  setFill(doc, LILAC);
  doc.roundedRect(PAD, y, COL, 10, 3, 3, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  setTextColor(doc, PURPLE);
  doc.text("Recommended Next Step", PAD + 5, y + 7);
  y += 14;

  const next = NEXT_STEP[result.route];
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setTextColor(doc, PURPLE);
  doc.text(next.title, PAD, y);
  y += 8;

  // Price badge
  setFill(doc, PURPLE);
  doc.roundedRect(PAD, y, 38, 14, 3, 3, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  setTextColor(doc, WHITE);
  doc.text(next.price, PAD + 3, y + 10);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  const capLines = doc.splitTextToSize(next.caption, 65) as string[];
  doc.text(capLines, PAD + 42, y + 5);
  y += 18;

  // Body
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setTextColor(doc, "#1a1a1a");
  const bodyLines = doc.splitTextToSize(next.body, COL) as string[];
  doc.text(bodyLines, PAD, y);
  y += bodyLines.length * 5 + 6;

  if (next.includes.length > 0) {
    y = checkNewPage(doc, y, 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    setTextColor(doc, PURPLE);
    doc.text("What your £15 gets you", PAD, y);
    y += 7;

    for (const item of next.includes) {
      y = checkNewPage(doc, y, 12);
      setFill(doc, GREEN);
      doc.roundedRect(PAD, y - 3.5, 5.5, 5.5, 1, 1, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      setTextColor(doc, WHITE);
      doc.text("✓", PAD + 1, y + 0.5);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      setTextColor(doc, "#1a1a1a");
      const lines = doc.splitTextToSize(item, COL - 10) as string[];
      doc.text(lines, PAD + 8, y);
      y += lines.length * 5 + 2;
    }
  }

  // Disclaimer
  y = checkNewPage(doc, y, 20);
  y += 6;
  setFill(doc, LIGHT);
  doc.rect(PAD, y, COL, 0.5, "F");
  y += 6;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  setTextColor(doc, GREY);
  const disc = "This check is an indicative guide based on your own answers. It is not a decision by the Care Quality Commission and it is not legal advice. Registration decisions rest with CQC alone.";
  const discLines = doc.splitTextToSize(disc, COL) as string[];
  doc.text(discLines, PAD, y);

  // Footer on each page
  const total = doc.getNumberOfPages();
  for (let p = 1; p <= total; p++) {
    doc.setPage(p);
    setFill(doc, PURPLE);
    doc.rect(0, 292, W, 5, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    setTextColor(doc, WHITE);
    doc.text(`Page ${p} of ${total}  |  ${reference}  |  CQC MediSolutions`, PAD, 295.5);
  }

  return doc.output("blob");
}
