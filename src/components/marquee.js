// ═══════════════════════════════════════════════════════
// ISA — Marquee Stats Strip (Infinite Scrolling)
// ═══════════════════════════════════════════════════════

export function createMarquee() {
    const section = document.createElement('div');
    section.className = 'marquee';

    const items = [
        '150+ Проектов',
        '12 Лет опыта',
        '25 Лет гарантии',
        '98% Довольных клиентов',
        'Грозный — Москва — Сочи',
        'Архитектура & Дизайн',
        'Собственное производство',
    ];

    const track = items.map(item =>
        `<span class="marquee__item">${item}</span><span class="marquee__sep">—</span>`
    ).join('');

    // Duplicate for seamless loop
    section.innerHTML = `
    <div class="marquee__track">
      ${track}${track}
    </div>
  `;

    return section;
}
