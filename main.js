/**
 * Aditya Surwase - Developer Portfolio
 * Interactive Scripting & UI Mechanics
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 0. Theme Switcher (Default: Light / White Theme) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  
  // Set default to 'light' unless user previously chose dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme === 'light' ? 'Light / White' : 'Dark'} mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      // Moon -> Sun
      themeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    } else {
      // Sun -> Moon
      themeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  // --- 1. Typed Text Animation for Hero ---
  const typedTarget = document.querySelector('.typed-text');
  if (typedTarget) {
    const roles = [
      'Computer Engineering Student',
      'Python & C/C++ Developer',
      'AI & Machine Learning Enthusiast',
      'Systems & Software Explorer',
      'Problem Solver & Builder'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typedTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typedTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1900;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }

  // --- 2. Navbar Scroll Effect & Active Section Tracking ---
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSection = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // --- 3. Mobile Navigation Menu Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-links');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('mobile-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }

  // --- 4. Interactive Skills Filtering ---
  const skillFilterButtons = document.querySelectorAll('.skills-filter-nav .filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 5. Interactive Copy Email to Clipboard ---
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(message) {
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailToCopy = btn.getAttribute('data-copy-email') || 'adityasurwase127@gmail.com';
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast(`Email copied: ${emailToCopy}`);
      }).catch(() => {
        showToast(`Email: ${emailToCopy}`);
      });
    });
  });

  // --- 6. Contact Form Submission (Mailto + Toast) ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      const mailtoLink = `mailto:adityasurwase127@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Aditya,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      showToast('Opening email client to send message...');
      window.location.href = mailtoLink;
      contactForm.reset();
    });
  }

  // --- 7. Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
