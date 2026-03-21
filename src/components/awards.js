// ═══════════════════════════════════════════════════════
// ISA — Awards / Recognition Strip
// ═══════════════════════════════════════════════════════

export function createAwards() {
    const section = document.createElement('section');
    section.className = 'awards';

    const items = [
        { year: '2024', title: 'Лучший архитектурный проект', org: 'Architecture Awards СКФО' },
        { year: '2023', title: 'Премия за дизайн интерьера', org: 'Interior Design Russia' },
        { year: '2022', title: 'Инновации в благоустройстве', org: 'Urban Design Forum' },
        { year: '2021', title: 'Мастер ковки и металла', org: 'Craft & Design Award' },
    ];

    const itemsHTML = items.map((item, i) => `
    <div class="awards__item reveal" style="transition-delay: ${i * 0.08}s">
      <span class="awards__year">${item.year}</span>
      <span class="awards__title">${item.title}</span>
      <span class="awards__org">${item.org}</span>
    </div>
  `).join('');

    section.innerHTML = `
    <div class="awards__container">
      <div class="awards__header">
        <div class="awards__tag reveal">Признание</div>
        <h2 class="awards__heading reveal">Награды</h2>
      </div>
      <div class="awards__list">
        ${itemsHTML}
      </div>
    </div>
  `;

    return section;
}
