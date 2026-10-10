# Avishi Srivastava — Interactive Portfolio Website

A sleek, responsive, and high-performance developer portfolio website engineered with modern web standards (HTML5, CSS3, modular JavaScript).

---

## 🌟 Key Features

1. **Start Screen Intro & Launchpad**:
   - Dynamic greeting, role overview, verified status badge, and immediate call-to-actions.
   - Interactive Launchpad cards linking directly to **Achievements**, **Projects Built**, **Photo Resume**, and **Contact for Hiring**.

2. **🏆 Achievements Showcase**:
   - Impact metrics (Projects delivered, Hackathons won, Open source commits, System uptime).
   - Hackathon victories, cloud solutions certifications (AWS & Google Cloud), and academic honors.
   - Interactive **Verify Credential** modal dialogs.

3. **💻 Projects Built**:
   - 6 featured projects spanning Multi-modal AI Search, Cloud Observability, Headless E-Commerce, Real-Time CRDT Code Sync, FinTech Portfolio Engines, and DevOps Automation.
   - Interactive filter pills (`All`, `AI & ML`, `Full-Stack`, `Frontend & UI`, `Cloud & DevOps`) and real-time live search.
   - Deep-dive detail modals detailing problem statement, architectural solutions, and key technical highlights.

4. **📄 Photo Resume (Visual CV Hub)**:
   - High-resolution portrait avatar / photo card.
   - Executive profile summary, career experience timeline, education, categorized technical skills, and certifications.
   - **"Print / Save as PDF"**: Formatted `@media print` print-to-PDF stylesheet producing an ATS-friendly, clean resume document in 1-click.
   - Copyable resume link.

5. **💼 Contact for Hiring**:
   - Purpose-built for recruiters, engineering leaders, and clients.
   - Interactive inquiry form with opportunity type selection (`Full-Time`, `Contract`, `Advisory`, `Freelance MVP`), validation, and animated confirmation toasts.
   - Direct contact channels (Email, Phone, Location) with 1-click copy-to-clipboard buttons.

6. **🎨 Modern Aesthetics**:
   - Glassmorphic tech theme with dark and light mode toggle (persisted in `localStorage`).
   - Ambient background glow and grid.
   - Fully responsive for mobile devices, tablets, and wide desktop displays.

---

## 🚀 How to Run & Preview Locally

### Option 1: Instant Browser Preview (Zero Install)
Simply double-click `index.html` in your file explorer to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Node.js)
In this directory, run:
```bash
npx serve .
```
or:
```bash
npm start
```
Then visit `http://localhost:3000` (or the URL displayed in the terminal).

---

## 🛠️ How to Customize Your Details

All data is decoupled from HTML and neatly centralized in `js/data.js`:

- **Change Personal Details & Contact Info**: Update `portfolioData.personal` in `js/data.js`.
- **Add / Edit Projects**: Modify or add entries to `portfolioData.projects` in `js/data.js`.
- **Add / Edit Achievements**: Modify or add entries to `portfolioData.achievements` in `js/data.js`.
- **Update Photo / Avatar**:
  - Replace `assets/images/avatar.svg` with your own photo (e.g. `assets/images/my-photo.jpg`), then update `avatar: "assets/images/my-photo.jpg"` in `js/data.js`.

---

## 🌐 Deploy to Web (Zero Build Setup Required)

- **GitHub Pages**: Push this repository to GitHub, go to **Settings > Pages**, and select the `main` branch root folder.
- **Vercel / Netlify**: Drag-and-drop the folder or import the GitHub repo; it deploys instantly with zero build step.
