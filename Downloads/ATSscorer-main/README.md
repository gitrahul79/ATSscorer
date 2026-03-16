# 📝 ATSscorer

**ATS Resume Scorer** is a full-stack web application that helps job seekers analyze their resumes against job descriptions using ATS-style scoring. Upload your resume, paste a job description, and instantly receive a professional analysis with a match score, strengths, and weaknesses.

---

## ✨ Features

- 🔑 **Keyword Match Analysis** – Detects alignment between resume and job description.  
- 🎨 **Formatting & Readability** – Checks for clean structure and section usage.  
- 🎓 **Education & Experience Check** – Validates important career sections.  
- 🛠 **Skills & Achievements** – Highlights technical skills and measurable results.  
- 📞 **Contact Info Verification** – Ensures email and phone number presence.  
- 📊 **Interactive Visualization** – Doughnut chart of your ATS score.  
- 📂 **Multi-format Upload** – Supports `.pdf`, `.docx`, and `.txt`.  

---

## 🛠 Tech Stack

- **Frontend:** React.js, Vite, Chart.js (Doughnut visualization)  
- **Backend:** Node.js, Express.js  
- **Parsing Libraries:** `pdf-parse` (PDF), `mammoth` (Word `.docx`)  
- **File Upload:** Multer  
- **Styling:** Custom CSS with modern gradient UI  

---

## ⚡ How It Works

1. **Upload** your resume file (`.pdf`, `.docx`, `.txt`).  
2. **Paste** the target job description.  
3. **Analyze** – The backend parses and scores the resume.  
4. **View Report** – See your overall ATS score, strengths, weaknesses, and a preview.  

---

## 🚀 Installation

Clone the repository and run both backend and frontend:

```bash
# Clone repo
git clone https://github.com/your-username/ats-resume-scorer.git
cd ats-resume-scorer
```

## 🧩 Local Run (Frontend + Backend)

### Backend

```bash
cd backend
npm install
cp .env.example .env
# edit .env if needed (FRONTEND_URL for CORS)
npm start
```

### Frontend

```bash
cd frontend/ATSui
npm install
cp .env.example .env
# (development) VITE_BACKEND_URL=http://localhost:3000
npm run dev
```

## ☁️ Deployment Guide (Vercel + Render/Railway)

1. **Frontend (Vercel):**
   - Deploy `frontend/ATSui` as Vite project.
   - Add env var:
     - `VITE_BACKEND_URL=https://<your-backend-host>`

2. **Backend (Render/Railway):**
   - Deploy `backend` as Node.js service.
   - Add env vars:
     - `PORT` (if required by host)
     - `FRONTEND_URL=https://<your-vercel-domain>`

3. Update CORS in backend (already set in `backend/server.js` with FRONTEND_URL allowlist).

4. In frontend, `/upload` and `/score` calls use `API_BASE_URL` from env.

---

## 📡 API Endpoints

- `POST /upload` with `multipart/form-data`: `file` + `jobDescription`.
- `POST /score` with JSON payload: `{ resume, jobDescription }`.

