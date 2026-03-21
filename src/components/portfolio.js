// ═══════════════════════════════════════════════════════
// ISA — Portfolio Gallery Component
// ═══════════════════════════════════════════════════════

import { portfolioItems } from '../data/content.js';

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'architecture', label: 'Архитектура' },
  { id: 'design', label: 'Дизайн' },
  { id: 'gates', label: 'Ворота' },
  { id: 'landscape', label: 'Благоустройство' }
];

let activeFilter = 'all';

export function createPortfolio() {
  const section = document.createElement('section');
  section.className = 'portfolio';
  section.id = 'portfolio';

  const filtersHTML = categories.map(cat => `
    <button class="portfolio__filter ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  const itemsHTML = portfolioItems.map(item => `
    <div class="portfolio__item reveal" data-category="${item.category}" data-size="${item.size || 'normal'}">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="portfolio__item-overlay">
        <div class="portfolio__item-info">
          <div class="portfolio__item-name">${item.name}</div>
          <div class="portfolio__item-category">${getCategoryLabel(item.category)}</div>
        </div>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="portfolio__header reveal">
      <h2 class="portfolio__title">Портфолио</h2>
      <div class="portfolio__filters">
        ${filtersHTML}
      </div>
    </div>
    <div class="portfolio__grid" id="portfolioGrid">
      ${itemsHTML}
    </div>
  `;

  return section;
}

function getCategoryLabel(id) {
  const labels = {
    architecture: 'Архитектура',
    design: 'Дизайн',
    gates: 'Ворота',
    landscape: 'Благоустройство'
  };
  return labels[id] || id;
}

export function initPortfolio() {
  const filters = document.querySelectorAll('.portfolio__filter');
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (filter === activeFilter) return;

      // Update active button
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = filter;

      // Animate filter
      const items = grid.querySelectorAll('.portfolio__item');
      items.forEach(item => {
        item.classList.add('filtering-out');
      });

      setTimeout(() => {
        items.forEach(item => {
          const cat = item.dataset.category;
          if (filter === 'all' || cat === filter) {
            item.style.display = '';
            item.classList.remove('filtering-out');
            item.classList.add('filtering-in');
          } else {
            item.style.display = 'none';
            item.classList.remove('filtering-out');
          }
        });

        setTimeout(() => {
          items.forEach(item => item.classList.remove('filtering-in'));
        }, 500);
      }, 300);
    });
  });
}
