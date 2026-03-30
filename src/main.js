// ═══════════════════════════════════════════════════════
// ISA — Premium Architecture & Design — Cinematic Redesign
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Styles
import './styles/variables.css';
import './styles/base.css';
import './styles/glassmorphism.css';
import './styles/components.css';
import './styles/ornaments.css';
import './styles/dynamics.css';

// Components
import { createPreloader, initPreloader } from './components/preloader.js';
import { createHero, initHero } from './components/hero.js';
import { createNavigation, initNavigation } from './components/navigation.js';
import { createStories, initStories } from './components/stories.js';
import { createImageBreak } from './components/imagebreak.js';
import { createManifesto, initManifesto } from './components/manifesto.js';
import { createPortfolio, initPortfolio } from './components/portfolio.js';
import { initScrollAnimations, initCounters } from './components/animations.js';
import { createServices, initServices } from './components/services.js';
import { createPhilosophy } from './components/philosophy.js';
import { createAwards, initAwards } from './components/awards.js';
import { createFooter, initFooter } from './components/footer.js';
import { createMarquee } from './components/marquee.js';

gsap.registerPlugin(ScrollTrigger);

// ─── Custom Global Cursor ────────────────────────────
function initCustomCursor() {
  // Only on pointer devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  ring.innerHTML = '<span>Drag</span>';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  window.addEventListener('mousemove', (e) => {
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, overwrite: 'auto' });
    gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
  });

  // Re-bind after DOM is ready since elements are created dynamically
  setTimeout(() => {
    const links = document.querySelectorAll('a, button, .portfolio__pin, .hover-target, .story-card');
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.classList.add('hovering');
        dot.classList.add('hovering');
        ring.innerHTML = '';
      });
      el.addEventListener('mouseleave', () => {
        ring.classList.remove('hovering');
        dot.classList.remove('hovering');
      });
    });
  }, 100);
}

// ─── Cinematic Smooth Scroll (Lenis) ─────────────────
function initLenis() {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

// ─── Initialize Application ──────────────────────────
async function init() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = '';

  // Ambient Light and Film Grain
  const grain = document.createElement('div');
  grain.className = 'film-grain';
  document.body.appendChild(grain);

  const ambient = document.createElement('div');
  ambient.className = 'ambient-light';
  document.body.appendChild(ambient);

  // Preloader
  document.body.appendChild(createPreloader());

  // Fixed Navigation
  document.body.appendChild(createNavigation());

  // Page Sections
  app.appendChild(createHero());
  app.appendChild(createStories());
  app.appendChild(createMarquee());
  app.appendChild(createImageBreak());
  app.appendChild(createManifesto());
  app.appendChild(createPortfolio());
  app.appendChild(createServices());
  app.appendChild(createPhilosophy());
  app.appendChild(createAwards());
  app.appendChild(createFooter());



  // Initialize Global Systems
  initLenis();
  initCustomCursor();

  // Initialize Component Logic
  requestAnimationFrame(() => {
    initNavigation();
    initManifesto();
    initAwards();
    initServices();
    initFooter();

    // Single IntersectionObserver for ALL scroll reveals
    initScrollAnimations();

    // GSAP-dependent component initializations
    // Must wait for 'appLoaded' so images/fonts are fully rendered
    window.addEventListener('appLoaded', () => {
      initHero();
      initStories();
      initPortfolio();

      // Refresh ScrollTrigger after everything is initialized
      ScrollTrigger.refresh();
    });

    // Counters start when visible (via IntersectionObserver)
    initCounters();

    // Start Preloader Sequence (dispatches 'appLoaded' on completion)
    initPreloader();
  });
}

// Start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
