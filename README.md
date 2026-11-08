# Denzel G. Fortez &ndash; Digital Portfolio &amp; Career Documents
> **Course:** Euthenics 2 (GE2510) &bull; **Institution:** STI College Rosario  
> **Student:** Denzel G. Fortez &bull; **Program & Section:** BSIT 704  
> **Output:** Cover Letter Writing, Digital Portfolio Creation, and Resume Writing (250 Points)

---

## 🌟 Overview & Features
This repository contains the complete pre-finals portfolio and career branding package for **Denzel G. Fortez**, fourth-year BSIT student at STI College Rosario seeking a **480-hour On-the-Job Training (OJT)** internship in Front-End Web Development.

- **Theme:** Emerald Green Design (`#059669` / `#10b981`) with full **Dark Mode** &amp; **Light (White) Mode** toggle.
- **ATS Combination (Hybrid) Resume:** 1-Page industry standard (`Fortez_Denzel_BSIT_OJT_Resume.pdf`) showcasing both technical stack and practical experience.
- **Official OJT Cover Letter:** Tailored for **Endsofttech Web Solutions** / Front-End Web Development (`Fortez_Denzel_BSIT_OJT_Cover_Letter.pdf`).
- **Interactive AI Assistant:** Built-in intelligent chatbot trained on Denzel's background, Codefest 2nd Runner-Up award, Capstone project (PIGEM), tech stack, and OJT hours, with support for Google Gemini API.
- **Live GitHub Activity:** Dynamic synchronization with [github.com/zeltypo](https://github.com/zeltypo) via the GitHub REST API.
- **Verified Credentials:** Interactive modal lightbox for all 4 official certificates.

---

## 📁 Repository Structure
```
Fortez_Digital_Portfolio/
│
├── index.html                   # Main Digital Portfolio SPA (Dark/Light Mode, Projects, AI Chatbot)
├── resume.html                  # Standalone Printable ATS Hybrid Resume Page
├── cover_letter.html            # Standalone Printable OJT Cover Letter Page
├── submission_sheet.html        # GE2510 Pre-Finals Assessment Submission Sheet
├── vercel.json                  # Vercel deployment configuration
├── .gitignore                   # Ignored files (.env, system caches)
│
├── css/
│   └── style.css                # Emerald theme styles, CSS variables, dark/light modes, animations
│
├── js/
│   ├── main.js                  # Theme toggle, navigation scroll spy, skills filter, GitHub API, modal lightbox
│   └── chatbot.js               # Conversational AI assistant with full knowledge base
│
├── api/
│   └── chat.js                  # Vercel serverless function for Google Gemini API integration
│
└── assets/
    ├── images/
    │   └── denzel_profile.jpg   # Denzel's corporate profile photo
    ├── certs/
    │   ├── codefest_2nd_runner_up_2026.jpg       # STI Tagisan ng Talino Codefest 2nd Runner-Up
    │   ├── oracle_java_fundamentals.png          # Oracle Academy Java Fundamentals
    │   ├── techtalk_building_future_ai.png       # STI TechTalk AI Ethics & Future
    │   └── techtalk_development_of_ai_grok.png   # STI TechTalk AI & Grok
    ├── projects/
    │   ├── pigem_capstone_hero.jpg               # Capstone project hero screenshot
    │   ├── pigem_redfiber_banner.jpg             # Capstone Redfiber partnership banner
    │   ├── pigem_admin_dashboard.png             # Capstone admin monitoring dashboard
    │   └── redhub_cake_order.jpg                 # Redhub Cake processing screenshot
    └── docs/
        ├── Fortez_Denzel_BSIT_OJT_Resume.pdf     # Official 1-Page ATS Resume PDF
        └── Fortez_Denzel_BSIT_OJT_Cover_Letter.pdf # Official 1-Page OJT Cover Letter PDF
```

---

## 🚀 How to Deploy to GitHub & Vercel

### Option A: Deploy with Git & GitHub
1. Open PowerShell or Terminal in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Denzel Fortez Digital Portfolio & Career Documents"
   git branch -M main
   ```
2. Create a new repository on your GitHub account (`https://github.com/new`) named `Fortez_Digital_Portfolio`.
3. Push your code:
   ```bash
   git remote add origin https://github.com/zeltypo/Fortez_Digital_Portfolio.git
   git push -u origin main
   ```
4. **Enable GitHub Pages (Free URL):**
   - Go to your repository settings on GitHub: **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Branch**, select `main` and root `/`, then click **Save**.
   - Your live website link will be: `https://zeltypo.github.io/Fortez_Digital_Portfolio/`

---

### Option B: Deploy to Vercel (Recommended for AI Chatbot)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** &rarr; **Project**.
3. Select the `Fortez_Digital_Portfolio` repository and click **Import**.
4. *(Optional for Gemini API)* Under **Environment Variables**:
   - Key: `GEMINI_API_KEY`
   - Value: *(Your free key from https://aistudio.google.com/app/apikey)*
5. Click **Deploy**.
6. Your live Vercel URL will be generated immediately (e.g. `https://fortez-digital-portfolio.vercel.app`).

---

## 📄 Pre-Finals Grading Compliance (GE2510)
- **Quiz: Cover Letter Writing (50 pts):** Handout-aligned 1-page cover letter tailored for Endsofttech Web Solutions.
- **Performance Task: Digital Portfolio Creation (100 pts):** Emerald green theme, dark & white modes, mobile responsiveness, live GitHub activity, AI chatbot, and interactive certificate modal.
- **Practical Examination: Resume Writing (100 pts):** 1-Page ATS-compliant Combination (Hybrid) Resume highlighting technical stack, capstone leadership, and competition victory.
