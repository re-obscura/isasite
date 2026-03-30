// ═══════════════════════════════════════════════════════
// ISA — Awards / Recognition (Editorial Ledger Redesign)
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createAwards() {
  const section = document.createElement('section');
  section.className = 'awards';

  const items = [
    { year: '2024', title: 'Лучший архитектурный проект', org: 'Architecture Awards СКФО', category: 'Архитектура' },
    { year: '2023', title: 'Премия за дизайн интерьера', org: 'Interior Design Russia', category: 'Дизайн' },
    { year: '2022', title: 'Инновации в благоустройстве', org: 'Urban Design Forum', category: 'Благоустройство' },
    { year: '2021', title: 'Мастер ковки и металла', org: 'Craft & Design Award', category: 'Производство' },
  ];

  const rowsHTML = items.map((item, i) => `
    <div class="awards-ledger__row" data-index="${i}">
      <div class="awards-ledger__year-col">
        <span class="awards-ledger__year">${item.year}</span>
      </div>
      <div class="awards-ledger__divider-col">
        <div class="awards-ledger__dot"></div>
        <div class="awards-ledger__vert-line"></div>
      </div>
      <div class="awards-ledger__info-col">
        <span class="awards-ledger__category">${item.category}</span>
        <h3 class="awards-ledger__title">${item.title}</h3>
        <span class="awards-ledger__org">${item.org}</span>
      </div>
      <div class="awards-ledger__accent-col">
        <svg class="awards-ledger__laurel" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="0.7">
          <path d="M20 4C14 8 10 14 10 22c0 5 3 9 6 12"/>
          <path d="M20 4C26 8 30 14 30 22c0 5-3 9-6 12"/>
          <path d="M14 16c-2 2-3 5-3 8"/>
          <path d="M26 16c2 2 3 5 3 8"/>
          <circle cx="20" cy="4" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="awards__container">
      <div class="awards-ledger__header">
        <div class="awards-ledger__header-top">
          <span class="awards-ledger__tag">Признание</span>
          <div class="awards-ledger__header-rule"></div>
        </div>
        <h2 class="awards-ledger__heading">Награды<br/><span class="awards-ledger__heading-light">и достижения</span></h2>
      </div>
      <div class="awards-ledger__list">
        ${rowsHTML}
      </div>
    </div>
  `;

  return section;
}

export function initAwards() {
  const rows = document.querySelectorAll('.awards-ledger__row');

  rows.forEach((row, i) => {
    const yearCol = row.querySelector('.awards-ledger__year-col');
    const dot = row.querySelector('.awards-ledger__dot');
    const vertLine = row.querySelector('.awards-ledger__vert-line');
    const infoCol = row.querySelector('.awards-ledger__info-col');
    const laurel = row.querySelector('.awards-ledger__laurel');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(dot,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' }
    )
      .fromTo(vertLine,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(yearCol,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(infoCol,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(laurel,
        { opacity: 0, scale: 0.6, rotation: -10 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
  });
}
