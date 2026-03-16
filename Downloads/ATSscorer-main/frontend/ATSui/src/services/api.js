import { API_BASE_URL } from "../config";

export async function uploadResume(file, jobDescription) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("jobDescription", jobDescription || "");

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || "Upload failed");
  }

  return response.json();
}

export async function scoreResume(resumeText, jobDescription) {
  const response = await fetch(`${API_BASE_URL}/score`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ resume: resumeText, jobDescription }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || "Score failed");
  }

  return response.json();
}
