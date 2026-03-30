// ═══════════════════════════════════════════════════════
// ISA — Cinematic Hero Section
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroBg from '../assets/hero-bg.png';

export function createHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'hero';

  section.innerHTML = `
    <!-- Background -->
    <div class="hero__bg">
      <img src="${heroBg}" alt="ISA Architecture" class="hero__bg-img" />
      <div class="hero__bg-overlay"></div>
      <div class="hero__bg-glass"></div>
    </div>

    <!-- Content -->
    <div class="hero__content">

      <!-- Top meta -->
      <div class="hero__top">
        <span class="hero__label">Est. 2026 — Грозный</span>
        <span class="hero__label">Архитектура &amp; Дизайн</span>
      </div>

      <!-- Title Block -->
      <div class="hero__title-block">
        <h1 class="hero__title">
          <span class="hero__title-line"><span class="hero__title-text" id="heroT1">Фундаментальный</span></span>
          <span class="hero__title-line"><span class="hero__title-text hero__title-text--light" id="heroT2">Подход</span></span>
        </h1>
        <div class="hero__desc-glass">
          <div class="hero__line-accent"></div>
          <p class="hero__desc">Безупречный стиль и&nbsp;бескомпромиссное качество в&nbsp;каждом проекте</p>
        </div>
      </div>

      <!-- Bottom -->
      <div class="hero__bottom">
        <div class="hero__scroll-hint">
          <div class="hero__scroll-bar"><div class="hero__scroll-thumb"></div></div>
          <span class="hero__scroll-label">Scroll</span>
        </div>
        <div class="hero__stats">
          <div class="hero__stat"><strong>150+</strong><span>проектов</span></div>
          <div class="hero__stat"><strong>12</strong><span>лет опыта</span></div>
          <div class="hero__stat"><strong>25</strong><span>лет гарантии</span></div>
        </div>
      </div>

    </div>
  `;

  return section;
}

export function initHero() {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  tl.fromTo('.hero__bg-img',
    { scale: 1.2, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
  )
    .fromTo('.hero__label',
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
      '-=1.4'
    )
    .fromTo('#heroT1',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      '-=1.2'
    )
    .fromTo('#heroT2',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      '-=0.9'
    )
    .fromTo('.hero__desc-glass',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.6'
    )
    .fromTo('.hero__bottom',
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '-=0.5'
    );

  // Subtle parallax
  gsap.to('.hero__bg', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    yPercent: 10,
    ease: 'none'
  });
}
