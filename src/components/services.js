// ═══════════════════════════════════════════════════════
// ISA — Services / Process Section
// ═══════════════════════════════════════════════════════

export function createServices() {
    const section = document.createElement('section');
    section.className = 'services';

    const steps = [
        {
            num: '01',
            title: 'Концепция',
            desc: 'Определяем видение, изучаем участок, формируем архитектурную идею. Каждый проект начинается с глубокого понимания задачи.'
        },
        {
            num: '02',
            title: 'Проектирование',
            desc: 'Создаём полный комплект проектной документации. 3D-визуализация, рабочие чертежи, инженерные решения.'
        },
        {
            num: '03',
            title: 'Реализация',
            desc: 'Авторский надзор на каждом этапе строительства. Контроль качества материалов, сроков и бюджета.'
        },
        {
            num: '04',
            title: 'Результат',
            desc: 'Сдаём объект, в который хочется возвращаться. Каждая деталь продумана, каждый материал выверен.'
        }
    ];

    const stepsHTML = steps.map((s, i) => `
    <div class="services__step reveal" style="transition-delay: ${i * 0.1}s">
      <div class="services__step-num">${s.num}</div>
      <div class="services__step-content">
        <h3 class="services__step-title">${s.title}</h3>
        <p class="services__step-desc">${s.desc}</p>
      </div>
      <div class="services__step-line"></div>
    </div>
  `).join('');

    section.innerHTML = `
    <div class="services__container">
      <div class="services__header">
        <div class="services__tag reveal">Как мы работаем</div>
        <h2 class="services__title reveal">Процесс</h2>
      </div>
      <div class="services__grid">
        ${stepsHTML}
      </div>
    </div>
  `;

    return section;
}
