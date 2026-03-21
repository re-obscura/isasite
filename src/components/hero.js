// ═══════════════════════════════════════════════════════
// ISA — Hero Section (Cappen-Inspired Massive Typography)
// ═══════════════════════════════════════════════════════

import heroBg from '../assets/hero-bg.png';

export function createHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'hero';

  section.innerHTML = `
    <div class="hero__bg">
      <img src="${heroBg}" alt="Премиальная архитектура" loading="eager" />
      <div class="hero__overlay"></div>
      <div class="hero__grain"></div>
    </div>

    <div class="hero__content">
      <div class="hero__tag">
        <span class="hero__tag-line"></span>
        <span class="hero__tag-text">Премиум архитектура</span>
      </div>

      <h1 class="hero__title">
        <span class="hero__title-line">Фундаментальный</span>
        <span class="hero__title-line">подход.</span>
        <span class="hero__title-accent">Безупречный стиль.</span>
      </h1>

      <p class="hero__subtitle">
        Архитектура и интерьеры премиум-класса<br>от команды профессионалов.
      </p>

      <div class="hero__cta-row">
        <a href="#portfolio" class="hero__cta-link">Смотреть проекты</a>
        <span class="hero__cta-dash"></span>
        <a href="#footer" class="hero__cta-link hero__cta-link--muted">Связаться</a>
      </div>
    </div>

    <div class="hero__bottom-bar">
      <div class="hero__scroll-hint" id="scrollArrow">
        <span class="hero__scroll-text">Scroll</span>
        <div class="hero__scroll-line">
          <div class="hero__scroll-dot"></div>
        </div>
      </div>
      <div class="hero__bottom-info">
        г. Грозный — 2026
      </div>
    </div>
  `;

  return section;
}

export function initHero() {
  const scrollArrow = document.getElementById('scrollArrow');
  if (scrollArrow) {
    scrollArrow.addEventListener('click', () => {
      const next = document.getElementById('stories') || document.getElementById('portfolio');
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
