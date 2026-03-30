// ═══════════════════════════════════════════════════════
// ISA — Philosophy Section (Cinematic Full-Width)
// ═══════════════════════════════════════════════════════

import { philosophyData } from '../data/content.js';

export function createPhilosophy() {
  const section = document.createElement('section');
  section.className = 'philosophy';
  section.id = 'philosophy';

  const valuesHTML = philosophyData.values.map((v, i) => `
    <div class="philosophy__stat scroll-reveal" data-delay="${i + 1}">
      <div class="philosophy__stat-number">${v.number}</div>
      <div class="philosophy__stat-label">${v.label}</div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="philosophy__ornament-bg"></div>
    <div class="philosophy__top">
      <div class="philosophy__top-inner">
        <div class="philosophy__tag scroll-reveal">
          <span class="philosophy__tag-line"></span>
          <span class="philosophy__tag-text">О компании</span>
        </div>
        <h2 class="philosophy__headline scroll-reveal" data-delay="1">
          <span class="philosophy__headline-main">За каждым проектом —</span>
          <span class="philosophy__headline-accent">команда, слово, результат.</span>
        </h2>
      </div>
    </div>

    <div class="philosophy__body">
      <div class="philosophy__body-inner">
        <div class="philosophy__image-col scroll-reveal scroll-reveal--left">
          <div class="philosophy__image-frame">
            <img src="${philosophyData.image}" alt="Команда ISA" loading="lazy" />
          </div>
        </div>

        <div class="philosophy__text-col">
          <p class="philosophy__text scroll-reveal">
            Наш подход — фундаментальный. Мы не гонимся за трендами —
            мы создаём то, что будет актуально через десятилетия.
            Безупречный вкус, инженерная точность, прозрачность на каждом этапе.
          </p>
          <p class="philosophy__text scroll-reveal" data-delay="1">
            Вы всегда знаете, что происходит с вашим проектом.
            От первого эскиза до сдачи ключей — каждый шаг
            под контролем.
          </p>

          <div class="philosophy__stats">
            ${valuesHTML}
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
