
// /api/upload.js

import multer from "multer";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { calculateATSScore } from "../backend/atsResumeScorer.js";

export const config = {
  api: {
    bodyParser: false
  }
};

async function extractTextFromFile(file) {

  const name = file.originalname.toLowerCase();

  if (name.endsWith(".pdf")) {
    const data = await pdfParse(file.buffer);
    return data.text || "";
  }

  if (name.endsWith(".docx")) {
    const result = await mammoth.extractRawText({ buffer: file.buffer });
    return result.value || "";
  }

  return file.buffer.toString("utf8");
}

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {

    const file = req.file;
    const jobDescription = req.body.jobDescription || "";

    const text = await extractTextFromFile(file);

    const result = calculateATSScore(text, jobDescription);

    res.status(200).json(result);

  } catch (error) {

    res.status(500).json({ error: "Processing error" });

  }
}
