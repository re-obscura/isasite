// ═══════════════════════════════════════════════════════
// ISA — Premium Architecture & Design — Main Entry
// ═══════════════════════════════════════════════════════

// Styles
import './styles/variables.css';
import './styles/base.css';
import './styles/glassmorphism.css';
import './styles/components.css';
import './styles/ornaments.css';
import './styles/dynamics.css';

// Components
import { createPreloader, hidePreloader } from './components/preloader.js';
import { createHero, initHero } from './components/hero.js';
import { createNavigation, initNavigation } from './components/navigation.js';
import { createStories, createStoryPopup, initStories } from './components/stories.js';
import { createImageBreak } from './components/imagebreak.js';
import { createManifesto } from './components/manifesto.js';
import { createPortfolio, initPortfolio } from './components/portfolio.js';
import { createServices } from './components/services.js';
import { createPhilosophy } from './components/philosophy.js';
import { createAwards } from './components/awards.js';
import { createFooter, initFooter } from './components/footer.js';
import { initScrollAnimations, initParallax } from './components/animations.js';
import { initHeroTextAnimation, initCounters, initImageReveals } from './components/dynamics.js';

// ─── Initialize Application ──────────────────────────
function init() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = '';

  // 1. Preloader
  document.body.appendChild(createPreloader());

  // 2. Fixed Navigation Bar
  document.body.appendChild(createNavigation());

  // 3. Hero Section
  app.appendChild(createHero());

  // 4. Stories Section
  app.appendChild(createStories());

  // 5. Story Popup
  document.body.appendChild(createStoryPopup());

  // 6. Full-bleed cinematic image break
  app.appendChild(createImageBreak());

  // 7. Editorial Manifesto Quote (with parallax bg)
  app.appendChild(createManifesto());

  // 8. Portfolio Section
  app.appendChild(createPortfolio());

  // 9. Services / Process
  app.appendChild(createServices());

  // 10. Philosophy Section
  app.appendChild(createPhilosophy());

  // 11. Awards & Recognition
  app.appendChild(createAwards());

  // 12. Footer
  app.appendChild(createFooter());

  // ─── Initialize All Interactions ────────────────────
  requestAnimationFrame(() => {
    initHero();
    initNavigation();
    initStories();
    initPortfolio();
    initFooter();
    initScrollAnimations();
    initParallax();

    // Premium effects
    initHeroTextAnimation();
    initCounters();
    initImageReveals();
    initTitleReveals();
    initRevealAnimations();
    initParallaxElements();
    initPortfolioHoverEffects();
    initPhilosophyCounters();

    // Hide preloader after everything is initialized
    hidePreloader();
  });
}

// ─── Title Underline Reveals ──────────────────────────
function initTitleReveals() {
  const titles = document.querySelectorAll('.portfolio__title, .services__title, .awards__heading');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  titles.forEach(t => observer.observe(t));
}

// ─── Generic Reveal Animations ────────────────────────
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ─── Scroll-Driven Parallax ──────────────────────────
function initParallaxElements() {
  const parallaxItems = [
    { el: document.querySelector('.manifesto__bg-img'), speed: 0.3 },
    { el: document.querySelector('.image-break__media img'), speed: 0.2 },
    { el: document.querySelector('.hero__bg img'), speed: 0.15 },
  ].filter(item => item.el);

  if (parallaxItems.length === 0) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    parallaxItems.forEach(({ el, speed }) => {
      const rect = el.closest('section, .image-break, .hero')?.getBoundingClientRect();
      if (!rect) return;
      // Only parallax when element is in viewport
      if (rect.bottom > -200 && rect.top < window.innerHeight + 200) {
        const offset = (scrollY - (el.closest('section, .image-break, .hero')?.offsetTop || 0)) * speed;
        el.style.transform = `translateY(${offset}px) scale(1.15)`;
      }
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();
}

// ─── Portfolio Hover Magnetic Effect ──────────────────
function initPortfolioHoverEffects() {
  const items = document.querySelectorAll('.portfolio__item');

  items.forEach(item => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.portfolio__item-overlay');
    if (!img || !overlay) return;

    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      img.style.transform = `scale(1.08) translate(${x * -8}px, ${y * -8}px)`;
    });

    item.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
}

// ─── Philosophy Animated Counters ─────────────────────
function initPhilosophyCounters() {
  const values = document.querySelectorAll('.philosophy__stat-number');
  if (!values.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  values.forEach(v => observer.observe(v));
}

function animateCounter(el) {
  const text = el.textContent.trim();
  const match = text.match(/^([\d]+)(.*)/);
  if (!match) return;

  const target = parseInt(match[1], 10);
  const suffix = match[2]; // +, %, etc.
  const duration = 2000;
  const start = performance.now();

  function update(time) {
    const progress = Math.min((time - start) / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
