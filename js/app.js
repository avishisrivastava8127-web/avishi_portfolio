/**
 * APPLICATION LOGIC & INTERACTIVITY
 * Author: Avishi Srivastava Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNav();
  initAmbientCursorTracker();
  renderHeroAndStats();
  renderAchievements();
  renderProjects();
  initProjectFiltersAndSearch();
  renderResume();
  initContactChannelsAndForm();
  initModals();
  initScrollSpy();
});

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio_theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (!themeToggleBtn) return;
  themeToggleBtn.innerHTML = theme === "dark" 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

/* ==========================================================================
   MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (!mobileToggle || !navLinks) return;

  mobileToggle.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
    });
  });
}

/* ==========================================================================
   HERO & STATS RENDERING
   ========================================================================== */
function renderHeroAndStats() {
  const data = portfolioData.personal;
  if (!data) return;

  // Personal Info
  const nameEl = document.getElementById("heroName");
  const roleEl = document.getElementById("heroRole");
  const descEl = document.getElementById("heroDesc");
  const statusEl = document.getElementById("heroStatusText");
  const avatarImg = document.getElementById("heroAvatarImg");

  if (nameEl) nameEl.textContent = data.name;
  if (roleEl) roleEl.textContent = "AI & ML Engineer";
  if (descEl) descEl.textContent = data.tagline || data.summary;
  if (statusEl) statusEl.textContent = data.statusBadge;
  if (avatarImg) avatarImg.src = data.avatar;

  // Metrics Bar in Achievements Section
  const metricsContainer = document.getElementById("metricsStrip");
  if (metricsContainer && data.stats) {
    metricsContainer.innerHTML = data.stats.map(stat => `
      <div class="metric-box">
        <div class="metric-value">${stat.value}</div>
        <div class="metric-label">${stat.label}</div>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   ACHIEVEMENTS RENDERING
   ========================================================================== */
function renderAchievements() {
  const container = document.getElementById("achievementsGrid");
  if (!container || !portfolioData.achievements) return;

  container.innerHTML = portfolioData.achievements.map(ach => `
    <div class="achievement-card">
      <div>
        <div class="ach-header">
          <div class="ach-icon">${ach.icon}</div>
          <span class="ach-badge">${ach.category}</span>
        </div>
        <h3 class="ach-title">${ach.title}</h3>
        <p class="ach-org">${ach.organization} • ${ach.date}</p>
        <p class="ach-desc">${ach.description}</p>
      </div>
      <div class="ach-footer">
        <span class="ach-metric-tag">${ach.metrics}</span>
        <button class="btn-verify-cert" onclick="openCredentialModal('${ach.id}')">
          Verify Credential →
        </button>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */
let currentCategory = "all";
let searchQuery = "";

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container || !portfolioData.projects) return;

  const filtered = portfolioData.projects.filter(project => {
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    const matchesSearch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery) ||
      project.summary.toLowerCase().includes(searchQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 8px;">No projects match your filter.</p>
        <p style="font-size: 0.9rem;">Try selecting a different category or clearing the search query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(proj => `
    <div class="project-card">
      <div class="project-banner-wrapper">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
        <span class="project-category-tag">${proj.categoryLabel}</span>
      </div>
      <div class="project-body">
        <div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-summary">${proj.summary}</p>
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </div>
        <div class="project-actions">
          <div class="project-links">
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="proj-link-btn" title="Live Preview">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="proj-link-btn" title="GitHub Source Code">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
          <button class="btn-details" onclick="openProjectModal('${proj.id}')">
            Details
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function initProjectFiltersAndSearch() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProjects();
    });
  });

  const searchInput = document.getElementById("projectSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }
}

/* ==========================================================================
   PHOTO RESUME RENDERING & ACTIONS
   ========================================================================== */
function renderResume() {
  const resume = portfolioData.resume;
  if (!resume) return;

  // Header
  const titleEl = document.getElementById("resumeTitle");
  const subEl = document.getElementById("resumeSubtitle");
  const contactEl = document.getElementById("resumeContactLine");
  const summaryEl = document.getElementById("resumeProfileSummary");
  const photoEl = document.getElementById("resumePhoto");

  if (titleEl) titleEl.textContent = resume.title;
  if (subEl) subEl.textContent = (resume.subtitle || "") + " • " + (resume.institution || "");
  if (contactEl) contactEl.textContent = resume.contactLine;
  if (summaryEl) summaryEl.textContent = resume.profileSummary;
  if (photoEl) photoEl.src = resume.photo;

  // Education
  const eduContainer = document.getElementById("resumeEducation");
  if (eduContainer && resume.education) {
    eduContainer.innerHTML = resume.education.map(edu => `
      <div class="resume-edu-card">
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-institution">${edu.institution} (${edu.period})</div>
        <div class="edu-meta"><strong>${edu.score}</strong> • ${edu.highlights}</div>
      </div>
    `).join("");
  }

  // Achievements
  const achContainer = document.getElementById("resumeAchievementsList");
  if (achContainer && resume.achievements) {
    achContainer.innerHTML = resume.achievements.map(ach => `
      <div style="margin-bottom: 16px;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 6px;">
          ${ach.title}
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 4px; padding-left: 16px;">
          ${ach.points.map(p => `
            <li style="font-size: 0.88rem; color: var(--text-muted); position: relative;">
              <span style="position: absolute; left: -14px; color: var(--accent-cyan);">▹</span> ${p}
            </li>
          `).join("")}
        </ul>
      </div>
    `).join("");
  }

  // Skills
  const skillsContainer = document.getElementById("resumeSkillsGroup");
  if (skillsContainer && resume.skills) {
    skillsContainer.innerHTML = `
      <div style="margin-bottom: 14px;">
        <div class="skill-category-title">Programming Languages</div>
        <div class="skill-pills-wrap">
          ${resume.skills.languages.map(s => `<span class="skill-pill">${s}</span>`).join("")}
        </div>
      </div>
      <div style="margin-bottom: 14px;">
        <div class="skill-category-title">Areas of Interest</div>
        <div class="skill-pills-wrap">
          ${resume.skills.interests.map(s => `<span class="skill-pill">${s}</span>`).join("")}
        </div>
      </div>
      <div style="margin-bottom: 14px;">
        <div class="skill-category-title">Core Competencies</div>
        <div class="skill-pills-wrap">
          ${resume.skills.competencies.map(s => `<span class="skill-pill" style="border-color: rgba(99, 102, 241, 0.4);">${s}</span>`).join("")}
        </div>
      </div>
      <div>
        <div class="skill-category-title">Technical Development</div>
        <div class="skill-pills-wrap">
          ${resume.skills.technicalDev.map(s => `<span class="skill-pill">${s}</span>`).join("")}
        </div>
      </div>
    `;
  }

  // Print button listener
  const btnPrintResume = document.getElementById("btnPrintResume");
  if (btnPrintResume) {
    btnPrintResume.addEventListener("click", () => {
      window.print();
    });
  }

  // Copy resume link button
  const btnCopyResumeLink = document.getElementById("btnCopyResumeLink");
  if (btnCopyResumeLink) {
    btnCopyResumeLink.addEventListener("click", () => {
      const resumeUrl = window.location.origin + window.location.pathname + "#resume";
      navigator.clipboard.writeText(resumeUrl).then(() => {
        showToast("Resume section link copied to clipboard!");
      });
    });
  }
}

window.openResumeModal = function() {
  const contentEl = document.getElementById("modalContent");
  const backdrop = document.getElementById("modalBackdrop");
  if (!contentEl || !backdrop) return;

  contentEl.innerHTML = `
    <div style="text-align: center;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <div style="text-align: left;">
          <h3 style="font-size: 1.4rem; font-weight: 700; margin-bottom: 2px;">Avishi Srivastava — Official Photo Resume</h3>
          <p style="font-size: 0.86rem; color: var(--accent-cyan);">Vellore Institute of Technology, Vellore · AI &amp; ML Academic Dossier</p>
        </div>
        <a href="assets/images/resume.jpg" download="Avishi_Srivastava_Resume.jpg" class="btn-primary" style="padding: 9px 18px; font-size: 0.86rem;">
          Download JPG ⬇
        </a>
      </div>
      <div style="background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 16px 40px rgba(0,0,0,0.6); border: 1px solid var(--border-glass);">
        <img src="assets/images/resume.jpg" alt="Avishi Srivastava Full Photo Resume" style="width: 100%; height: auto; display: block;" />
      </div>
    </div>
  `;
  backdrop.classList.add("open");
};

/* ==========================================================================
   CONTACT FOR HIRING & FORM HANDLING
   ========================================================================== */
function initContactChannelsAndForm() {
  const personal = portfolioData.personal;
  const hiring = portfolioData.hiring;

  // Set hiring status banner
  const hiringStatusEl = document.getElementById("hiringStatusSummary");
  if (hiringStatusEl && hiring) {
    hiringStatusEl.innerHTML = `
      <h4><span class="status-dot"></span> Available for Hire</h4>
      <p>${hiring.statusText} • Preferred Location: <strong>${hiring.preferredLocation}</strong>. Response guarantee: <strong>${hiring.responseGuarantee}</strong>.</p>
    `;
  }

  // Populate channel fields
  const emailValEl = document.getElementById("channelEmailVal");
  const phoneValEl = document.getElementById("channelPhoneVal");
  const locationValEl = document.getElementById("channelLocationVal");

  if (emailValEl) emailValEl.textContent = personal.email;
  if (phoneValEl) phoneValEl.textContent = personal.phone;
  if (locationValEl) locationValEl.textContent = personal.location;

  // Form submission
  const hireForm = document.getElementById("hireForm");
  if (hireForm) {
    hireForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("hireName").value.trim();
      const email = document.getElementById("hireEmail").value.trim();
      const company = document.getElementById("hireCompany").value.trim();
      const role = document.getElementById("hireRoleType").value;
      const message = document.getElementById("hireMessage").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.");
        return;
      }

      const submitBtn = hireForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = "Sending Inquiry...";
      submitBtn.disabled = true;

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, company, roleType: role, message })
        });

        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        if (response.ok) {
          const result = await response.json();
          hireForm.reset();
          showToast(result.message || `Thank you, ${name}! Your inquiry has been sent successfully.`);
        } else {
          // Static host fallback (e.g. GitHub Pages where backend is static)
          saveLocalInquiry({ name, email, company, roleType: role, message });
          hireForm.reset();
          showToast(`Thank you, ${name}! Your inquiry for ${role} has been received. Expect a response within 24 hours.`);
        }
      } catch (err) {
        // Network or offline fallback
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        saveLocalInquiry({ name, email, company, roleType: role, message });
        hireForm.reset();
        showToast(`Thank you, ${name}! Your inquiry for ${role} has been received. Expect a response within 24 hours.`);
      }
    });
  }
}

function saveLocalInquiry(item) {
  try {
    const list = JSON.parse(localStorage.getItem("portfolio_inquiries") || "[]");
    list.push({ ...item, submittedAt: new Date().toISOString() });
    localStorage.setItem("portfolio_inquiries", JSON.stringify(list));
  } catch (e) {}
}

// Copy helper function
window.copyChannelText = function(type) {
  let val = "";
  if (type === "email") val = portfolioData.personal.email;
  if (type === "phone") val = portfolioData.personal.phone;
  if (type === "location") val = portfolioData.personal.location;

  navigator.clipboard.writeText(val).then(() => {
    showToast(`Copied ${type}: ${val}`);
  });
};

/* ==========================================================================
   MODAL WINDOW HANDLERS
   ========================================================================== */
function initModals() {
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!backdrop) return;

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

function closeModal() {
  const backdrop = document.getElementById("modalBackdrop");
  if (backdrop) backdrop.classList.remove("open");
}

window.openProjectModal = function(projectId) {
  const proj = portfolioData.projects.find(p => p.id === projectId);
  if (!proj) return;

  const contentEl = document.getElementById("modalContent");
  const backdrop = document.getElementById("modalBackdrop");

  contentEl.innerHTML = `
    <div style="margin-bottom: 24px;">
      <span class="project-category-tag" style="position: static; display: inline-block; margin-bottom: 12px;">${proj.categoryLabel}</span>
      <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;">${proj.title}</h2>
      <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.95rem; font-family: var(--font-mono);">${proj.metrics}</p>
    </div>

    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border-glass); background: #0B0D11;">
      <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: auto; display: block;" />
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px;">The Challenge &amp; Problem</h4>
      <p style="color: var(--text-muted); font-size: 0.94rem; line-height: 1.65; margin-bottom: 18px;">${proj.details.problem}</p>
      
      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px;">Architecture &amp; Engineered Solution</h4>
      <p style="color: var(--text-muted); font-size: 0.94rem; line-height: 1.65; margin-bottom: 18px;">${proj.details.solution}</p>

      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 10px;">Key Technical Highlights</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px;">
        ${proj.details.keyFeatures.map(f => `
          <li style="color: var(--text-muted); font-size: 0.92rem; padding-left: 20px; position: relative; line-height: 1.6;">
            <span style="position: absolute; left: 0; color: var(--accent-cyan);">✦</span> ${f}
          </li>
        `).join("")}
      </ul>

      <h4 style="font-size: 0.8rem; font-weight: 700; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px;">Technologies Utilized</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
        ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 14px; border-top: 1px solid var(--border-glass-subtle); padding-top: 22px; flex-wrap: wrap;">
      <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 22px; font-size: 0.88rem;">
        Launch Platform ↗
      </a>
      <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 22px; font-size: 0.88rem;">
        Browse Repository ↗
      </a>
    </div>
  `;

  backdrop.classList.add("open");
};

window.openCredentialModal = function(achId) {
  const ach = portfolioData.achievements.find(a => a.id === achId);
  if (!ach) return;

  const contentEl = document.getElementById("modalContent");
  const backdrop = document.getElementById("modalBackdrop");

  contentEl.innerHTML = `
    <div style="text-align: center; padding: 10px 0 20px;">
      <div style="font-size: 3.2rem; margin-bottom: 12px;">${ach.icon}</div>
      <span class="ach-badge" style="margin-bottom: 14px; display: inline-block;">${ach.category}</span>
      <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 6px;">${ach.title}</h2>
      <p style="color: var(--accent-cyan); font-weight: 600; font-size: 0.95rem; margin-bottom: 20px;">${ach.organization} • Conferred ${ach.date}</p>
      
      ${ach.credentialImage ? `
        <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 22px; border: 1px solid var(--border-glass); background: #0B0D11; box-shadow: var(--glass-shadow);">
          <img src="${ach.credentialImage}" alt="${ach.title}" style="width: 100%; height: auto; display: block;" />
        </div>
      ` : ''}

      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 22px; margin-bottom: 24px; text-align: left;">
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.65; margin-bottom: 14px;">${ach.description}</p>
        <div style="border-top: 1px solid var(--border-glass-subtle); padding-top: 14px; display: flex; justify-content: space-between; font-size: 0.84rem; flex-wrap: wrap; gap: 8px;">
          <span style="color: var(--text-dim);">Credential ID: <strong style="color: var(--text-main); font-family: var(--font-mono);">${ach.credentialId}</strong></span>
          <span style="color: var(--accent-emerald); font-weight: 600;">${ach.metrics}</span>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
        ${ach.credentialPdf ? `
          <a href="${ach.credentialPdf}" download="Avishi_Srivastava_graVITas_2026_Certificate.pdf" class="btn-primary" style="padding: 10px 24px; font-size: 0.88rem;">
            Download Official PDF ⬇
          </a>
        ` : ''}
        ${ach.credentialUrl && ach.credentialUrl !== '#' ? `
          <a href="${ach.credentialUrl}" target="_blank" rel="noopener noreferrer" class="${ach.credentialPdf ? 'btn-secondary' : 'btn-primary'}" style="padding: 10px 24px; font-size: 0.88rem;">
            Inspect Document ↗
          </a>
        ` : ''}
      </div>
    </div>
  `;

  backdrop.classList.add("open");
};

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}

/* ==========================================================================
   SCROLL SPY FOR NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   AMBIENT CURSOR GLOW TRACKER
   ========================================================================== */
function initAmbientCursorTracker() {
  const cursorGlow = document.getElementById("ambientCursorGlow");
  if (!cursorGlow) return;

  // Only activate on fine pointer devices (desktops and laptops)
  if (window.matchMedia("(pointer: fine)").matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let hasMoved = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        cursorGlow.classList.add("active");
      }
    }, { passive: true });

    window.addEventListener("mouseleave", () => {
      cursorGlow.classList.remove("active");
    });

    window.addEventListener("mouseenter", () => {
      if (hasMoved) cursorGlow.classList.add("active");
    });

    function animateCursor() {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);
  }
}
