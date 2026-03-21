// ═══════════════════════════════════════════════════════
// ISA — Stories (Directions) Component
// ═══════════════════════════════════════════════════════

import { directions } from '../data/content.js';

export function createStories() {
  const section = document.createElement('section');
  section.className = 'stories';
  section.id = 'stories';

  const circlesHTML = directions.map((dir, i) => `
    <div class="stories__item reveal" data-direction="${dir.id}" style="transition-delay: ${0.1 + i * 0.08}s">
      <div class="stories__circle">
        <div class="stories__circle-inner">
          <img src="${dir.image}" alt="${dir.category}" loading="lazy" />
        </div>
      </div>
      <div class="stories__label">
        <span class="stories__label-name">${dir.name}</span>
        ${dir.category}
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <h2 class="stories__title reveal">Направления</h2>
    <div class="stories__scroll stagger">
      ${circlesHTML}
    </div>
  `;

  return section;
}

export function createStoryPopup() {
  const overlay = document.createElement('div');
  overlay.className = 'story-popup-overlay glass-overlay-backdrop';
  overlay.id = 'storyPopup';

  overlay.innerHTML = `
    <div class="story-popup glass-popup">
      <button class="story-popup__close" aria-label="Закрыть">
        <svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
      </button>
      <div class="story-popup__image">
        <img src="" alt="" />
      </div>
      <div class="story-popup__body">
        <div class="story-popup__tag"></div>
        <h3 class="story-popup__title"></h3>
        <p class="story-popup__desc"></p>
        <button class="btn-accent"></button>
      </div>
    </div>
  `;

  return overlay;
}

export function initStories() {
  const items = document.querySelectorAll('.stories__item');
  const popup = document.getElementById('storyPopup');
  if (!popup) return;

  const closeBtn = popup.querySelector('.story-popup__close');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const dirId = item.dataset.direction;
      const dir = directions.find(d => d.id === dirId);
      if (!dir) return;

      popup.querySelector('.story-popup__image img').src = dir.image;
      popup.querySelector('.story-popup__image img').alt = dir.title;
      popup.querySelector('.story-popup__tag').textContent = dir.category;
      popup.querySelector('.story-popup__title').textContent = dir.title;
      popup.querySelector('.story-popup__desc').textContent = dir.description;
      popup.querySelector('.btn-accent').textContent = dir.cta;

      popup.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  });

  closeBtn.addEventListener('click', closePopup);
  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      closePopup();
    }
  });
}

function closePopup() {
  const popup = document.getElementById('storyPopup');
  popup.classList.remove('active');
  document.body.classList.remove('no-scroll');
}
