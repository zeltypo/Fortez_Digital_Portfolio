/* ===================================================================
   DENZEL G. FORTEZ - DIGITAL PORTFOLIO SCRIPTS
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initSkillsFilter();
  initCertificateModal();
  initDocumentTabs();
  fetchGitHubRepos();
  initContactForm();
});

/* -------------------------------------------------------------------
   1. Theme Toggle (Dark & Light Mode)
   ------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const html = document.documentElement;
  
  // Preference order: localStorage -> system preference -> default 'dark'
  const savedTheme = localStorage.getItem('df_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const active = html.getAttribute('data-theme');
      const nextTheme = active === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', nextTheme);
      localStorage.setItem('df_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggleBtn i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'bi bi-sun-fill';
  } else {
    icon.className = 'bi bi-moon-stars-fill';
  }
}

/* -------------------------------------------------------------------
   2. Mobile Navigation & Scroll Spy
   ------------------------------------------------------------------- */
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-list');
        icon.classList.toggle('bi-x-lg');
      }
    });

    // Close mobile nav on click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.add('bi-list');
          icon.classList.remove('bi-x-lg');
        }
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(sec => {
      const id = sec.getAttribute('id');
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        links.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('active');
          }
        });
      }
    });
  });
}

/* -------------------------------------------------------------------
   3. Skills Filter Tabs
   ------------------------------------------------------------------- */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');
      skillCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------------
   4. Certificate Lightbox Modal
   ------------------------------------------------------------------- */
function initCertificateModal() {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalCertImg');
  const modalTitle = document.getElementById('modalCertTitle');
  const modalSub = document.getElementById('modalCertSub');
  const closeBtn = document.getElementById('modalCloseBtn');
  const certCards = document.querySelectorAll('.cert-card');

  if (!modal) return;

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      const sub = card.getAttribute('data-sub');

      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalSub.textContent = sub;
      modal.classList.add('open');
    });
  });

  const closeModal = () => modal.classList.remove('open');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------
   5. Career Documents Tab Switcher (Resume vs Cover Letter vs Sheet)
   ------------------------------------------------------------------- */
function initDocumentTabs() {
  const tabBtns = document.querySelectorAll('.doc-tab-btn');
  const docPanels = document.querySelectorAll('.doc-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      docPanels.forEach(p => p.style.display = 'none');

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.style.display = 'block';
      }
    });
  });
}

/* -------------------------------------------------------------------
   6. Live GitHub Repositories Fetch
   ------------------------------------------------------------------- */
async function fetchGitHubRepos() {
  const container = document.getElementById('githubReposGrid');
  if (!container) return;

  const fallbackRepos = [
    {
      name: "PIGEM-System-Web",
      description: "Internet Service Application System with AI-Assisted Requirements Screening & admin monitoring.",
      language: "JavaScript / React",
      stars: 3,
      forks: 1,
      url: "https://github.com/zeltypo"
    },
    {
      name: "Vet-Adoption-Android-UI",
      description: "2nd Runner-Up Award Project: Android XML layout skeletons and fragments for pet adoption flow.",
      language: "Java / XML",
      stars: 4,
      forks: 2,
      url: "https://github.com/zeltypo"
    },
    {
      name: "City-Driver-Road-Safety",
      description: "Interactive 3D road safety game simulation created with Unity and C#.",
      language: "C# / Unity",
      stars: 2,
      forks: 0,
      url: "https://github.com/zeltypo"
    },
    {
      name: "Philippine-Group-4-Bank",
      description: "Desktop banking system featuring secure transactions, balance inquiries and account management.",
      language: "C# / .NET",
      stars: 2,
      forks: 0,
      url: "https://github.com/zeltypo"
    },
    {
      name: "Redhub-Cake-Order-System",
      description: "Bakery ordering and order pipeline application developed with Java Swing and MySQL.",
      language: "Java",
      stars: 2,
      forks: 1,
      url: "https://github.com/zeltypo"
    },
    {
      name: "Fortez-Digital-Portfolio",
      description: "Personal OJT digital portfolio with emerald green theme, dark/light modes, ATS resume, and AI assistant.",
      language: "HTML5 / CSS / JS",
      stars: 5,
      forks: 1,
      url: "https://github.com/zeltypo"
    }
  ];

  try {
    const res = await fetch('https://api.github.com/users/zeltypo/repos?sort=updated&per_page=6');
    if (!res.ok) throw new Error('GitHub API rate limit');
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      renderRepos(container, data.map(r => ({
        name: r.name,
        description: r.description || "Project repository created by Denzel Fortez.",
        language: r.language || "Code",
        stars: r.stargazers_count,
        forks: r.forks_count,
        url: r.html_url
      })));
      return;
    }
  } catch (err) {
    console.warn("Using fallback GitHub projects:", err);
  }

  renderRepos(container, fallbackRepos);
}

function renderRepos(container, repos) {
  container.innerHTML = repos.map(repo => `
    <div class="repo-card">
      <div class="repo-header">
        <div class="repo-name">
          <i class="bi bi-journal-code"></i>
          <span>${escapeHtml(repo.name)}</span>
        </div>
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline" style="padding:0.25rem 0.6rem;font-size:0.75rem;">
          <i class="bi bi-box-arrow-up-right"></i>
        </a>
      </div>
      <p class="repo-desc">${escapeHtml(repo.description)}</p>
      <div class="repo-meta">
        <span class="repo-lang">
          <span class="lang-dot"></span>
          ${escapeHtml(repo.language)}
        </span>
        <span><i class="bi bi-star"></i> ${repo.stars}</span>
        <span><i class="bi bi-diagram-2"></i> ${repo.forks}</span>
      </div>
    </div>
  `).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

/* -------------------------------------------------------------------
   7. Contact Form Handling
   ------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.innerHTML;
    btn.innerHTML = `<i class="bi bi-hourglass-split"></i> Sending...`;
    btn.disabled = true;

    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const message = form.querySelector('[name="message"]').value;

    // Use Web3Forms or mailto fallback
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "00000000-0000-0000-0000-000000000000", // Free Web3Forms key can be replaced anytime
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Inquiry from ${name}`
        })
      });

      // Show success
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.className = 'status-badge';
        alertBox.style.background = 'var(--primary-soft)';
        alertBox.style.borderColor = 'var(--primary)';
        alertBox.innerHTML = `✓ Thank you, ${escapeHtml(name)}! Your message has been prepared. You can also reach me directly at <b>fortezdenzel@gmail.com</b>.`;
      }
      form.reset();
    } catch (err) {
      // Fallback: mailto
      window.location.href = `mailto:fortezdenzel@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    } finally {
      btn.innerHTML = origText;
      btn.disabled = false;
    }
  });
}
