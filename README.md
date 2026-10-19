# Avishi Srivastava — Editorial Magazine Lookbook & Bento Portfolio

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.3-blue.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black.svg)](https://github.com/avishisrivastava8127-web/avishi_portfolio)

A modern, high-performance developer portfolio and technical dossier for **Avishi Srivastava** (B.Tech Computer Science & Engineering specializing in AI & ML at **VIT Vellore**).

Engineered with an **Editorial Magazine Lookbook & Bento Grid** architecture, combining the high-fashion editorial aesthetics of a print lookbook with modern software engineering credibility and interactive capabilities.

---

## 📸 Design Architecture & Typographic Suite

The portfolio follows an architectural **Bento Grid** layout with fine hairline dividers, deep contrast, and structured breathing room. All free-hand/cursive script fonts have been eliminated in favor of clean, professional editorial typography:

| Typographic Role | Typeface | Style / Weight | Usage |
| :--- | :--- | :--- | :--- |
| **Monumental Covers & Titles** | `Bebas Neue` / `Anton` | Uppercase Condensed Bold | Large headers (`PORTFOLIO`, `WHO AM I`, `QUALIFICATIONS`, `MY WORK INCLUDES`, `CASE STUDY`, `TECHNICAL ARSENAL`) |
| **Hero Accent Overlay** | `Instrument Serif` | `400 Italic` Serif | Classical high-fashion serif (`Avishi's`) overlaid across the cover |
| **Editorial Headings & Metrics** | `Playfair Display` | `700 Bold / Italic` | Section subtitles, metric numbers, and credential titles |
| **Interface & Body Typography** | `Plus Jakarta Sans` | `400 / 500 / 600` | Clean geometric body text, cards, and UI components |
| **Code & Technical Metadata** | `JetBrains Mono` | `400 / 500` Monospace | Terminal snippet, status pills, and credential identifiers |

---

## 🌟 Key Sections & Experience

### 1. 📰 Editorial Cover Hero (`#intro`)
- Monumental **`PORTFOLIO`** typography with an overlaid **`Avishi's`** serif accent.
- Real-time availability status capsule (`Open to Software Engineering & AI Internships`).
- Engineering mission tagline and immediate call-to-actions.
- Interactive engineer badge card and verified technical record chip.

### 2. 👤 Who Am I (`#who-am-i`)
- Concise personal thesis: AI/ML specialization, algorithmic foundation, and collaborative problem-solving.
- **Top 3 Quick Stats**:
  - **`Top 3`** — HackGrid Hackathon Runner-Up
  - **`100/100`** — ISC Class XII Computer Science
  - **`97.5%`** — Board Distinction
- Ecosystem technology tags: `Python`, `Java`, `PyTorch`, `React 19`, `Node.js`, `Git`.
- Framed Python class snippet card (`engineer.py`) with a terminal status badge (`● System Architect Ready`).

### 3. 🎓 Qualifications & Honors (`#qualifications`)
- **Verified Credential Preview Card**: Framed certificate showcase with a red `VERIFIED` ribbon tag, inspecting the **graVITas 2026 GenAI Application Development** masterclass in partnership with **HCLTech** at VIT Vellore.
- **Prioritized Capsule Badges** (Hackathon first):
  1. 🥈 **`HackGrid 2nd Runner-Up (53 Teams)`**
  2. 🎓 **`graVITas '26 GenAI Masterclass`**
  3. 💯 **`ISC Class XII CS — 100/100`**
  4. 📚 **`CBSE Class X — 95.8% Overall`**
  5. 🎙️ **`Inter-Collegiate Debate Honors`**
- Bottom technology pill bar highlighting active proficiencies.

### 4. 💻 Featured Work — Projects Side by Side (`#projects`)
- Two production-grade systems presented side by side in an expansive Bento showcase:
  - **StudyBuddy AI**: End-to-end intelligent study system with automated PDF notes ingestion, 1-minute revision synthesis, and streaming doubt tutor. Live at [studybuddyai-tdlp.onrender.com](https://studybuddyai-tdlp.onrender.com/).
  - **KhetiNex BioChain**: HackGrid Hackathon second runner-up platform for agricultural price arbitrage and smart contracts. Live at [fantasticfive-hg-26.vercel.app](https://fantasticfive-hg-26.vercel.app/).
- Filterable project controls with category buttons (`All`, `AI / EdTech`, `Web3 / Agri`) and real-time live search.
- Deep-dive interactive modal dialogs detailing problem statement, architectural solution, and tech stack.

### 5. 📱 Technical Arsenal (`#arsenal`)
- 4 vertical smartphone-aspect hardware cards featuring speaker notches, category indices, and hover lighting:
  - `01 / AI & LLM Systems` — PyTorch, Gemini API, RAG, Prompt Engineering, NLP.
  - `02 / Full-Stack Core` — Node.js, Express 5, React 19, RESTful APIs, WebSockets.
  - `03 / Algorithmic Core` — Data Structures & Algorithms in Java, Python, and C++ (100/100 in CS).
  - `04 / Cloud & DevOps` — Vercel, Render, Git/GitHub, Docker, Linux.

### 6. 📄 Executive Dossier & Verified Resume (`#resume`)
- High-resolution institutional credential sheet with fullscreen zoom inspection modal and direct JPG download.
- Structured interactive dossier:
  - **Distinctions & Hackathon Honors** (prioritized before academic background).
  - **Academic Background** (VIT Vellore, ISC Class XII, CBSE Class X).
  - **Categorized Technical Competencies** (Languages, Interests, Competencies, Problem Solving).
- **1-Click ATS Print / Save as PDF**: Formatted print stylesheet providing a clean, one-page printable CV via `window.print()`.

### 7. ✉️ Formal Inquiries & Contact (`#contact`)
- Recruiter and hiring manager dispatch interface with role scope selection (`Full-Time`, `Internship`, `Research Collaboration`, `Technical Advisory`, `Freelance MVP`).
- Full-stack REST API integration (`POST /api/contact`) with JSON file persistence, rate-limiting safeguards, and fallback storage.
- Direct communication channels (Email, Phone, Location) with 1-click clipboard copy.

---

## 🧭 Uncrowded & Organized Navigation

- **Streamlined 5-Section Navigation Bar**:
  `About` • `Qualifications` • `Work` • `Dossier` • `Contact`
- **Zero Text Wrapping**: Powered by `white-space: nowrap;` and `flex-shrink: 0;` so nav labels and the brand name never wrap or get truncated.
- **Responsive Mobile Drawer**: Seamlessly collapses into a clean full-screen menu drawer below `960px`.
- **Dynamic ScrollSpy**: Real-time position tracking that illuminates the current section indicator as the user scrolls.

---

## 📂 Project Directory Structure

```plaintext
PORTFOLIO/
├── index.html              # Main HTML5 semantic structure & Bento grid
├── server.js               # Node.js + Express 5 backend server & contact API
├── package.json            # NPM dependencies & scripts (Express, CORS)
├── README.md               # Technical documentation & project guide
│
├── css/
│   └── style.css           # Design tokens, typography, bento grid, responsive queries
│
├── js/
│   ├── data.js             # Centralized portfolio data (profile, projects, achievements, resume)
│   └── app.js              # Interactivity (theme toggle, filtering, search, modals, scrollspy)
│
├── data/
│   └── inquiries.json      # Persistent backend storage for received contact inquiries
│
└── assets/
    └── images/             # Resume JPG, avatar image, certificate SVGs, project banners
```

---

## 🚀 Getting Started & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- Modern web browser (Chrome, Edge, Firefox, Safari)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avishisrivastava8127-web/avishi_portfolio.git
   cd avishi_portfolio
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Start the local server:**
   ```bash
   npm start
   ```

4. **Access the portfolio:**
   Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

*(Alternatively, `index.html` can be opened directly in any browser for static viewing).*

---

## 🔌 Backend REST API Endpoints

The included `server.js` provides RESTful endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check endpoint returning server status, uptime, and timestamp |
| `GET` | `/api/portfolio` | Returns the complete decoupled portfolio JSON schema from `js/data.js` |
| `POST` | `/api/contact` | Submits a formal inquiry; persists to `data/inquiries.json` |

---

## 🌐 Deployment & Live Site

- **Live GitHub Pages URL**: [https://avishisrivastava8127-web.github.io/avishi_portfolio/](https://avishisrivastava8127-web.github.io/avishi_portfolio/)
- **GitHub Pages Configuration**:
  - The repository includes `.nojekyll` to bypass Jekyll build processing.
  - Includes `404.html` SPA routing redirect.
  - Automatically builds and deploys via `.github/workflows/deploy.yml` with dual-mode support (GitHub Actions and `gh-pages` branch).
- **Vercel / Netlify / Render**:
  - **Vercel**: Configuration included in `vercel.json` with serverless API handlers in `api/index.js`.
  - **Render / Railway**: Runs `npm start` (`node server.js`) with persistent JSON storage for recruitment inquiries.

---

## 📄 License & Credits

- Designed and engineered for **Avishi Srivastava**.
- Open source under the **MIT License**.
