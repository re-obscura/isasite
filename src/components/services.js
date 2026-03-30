// ═══════════════════════════════════════════════════════
// ISA — Process Section (Editorial Progression Redesign)
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createServices() {
  const section = document.createElement('section');
  section.className = 'services';

  const steps = [
    {
      num: '01',
      title: 'Концепция',
      desc: 'Определяем видение, изучаем участок, формируем архитектурную идею. Каждый проект начинается с глубокого понимания задачи.',
      label: 'Исследование'
    },
    {
      num: '02',
      title: 'Проектирование',
      desc: 'Создаём полный комплект проектной документации. 3D-визуализация, рабочие чертежи, инженерные решения.',
      label: 'Разработка'
    },
    {
      num: '03',
      title: 'Реализация',
      desc: 'Авторский надзор на каждом этапе строительства. Контроль качества материалов, сроков и бюджета.',
      label: 'Строительство'
    },
    {
      num: '04',
      title: 'Результат',
      desc: 'Сдаём объект, в который хочется возвращаться. Каждая деталь продумана, каждый материал выверен.',
      label: 'Сдача'
    }
  ];

  const stepsHTML = steps.map((s, i) => `
    <div class="process-step" data-step="${i}">
      <div class="process-step__number-bg" aria-hidden="true">${s.num}</div>
      <div class="process-step__node">
        <div class="process-step__dot"></div>
        ${i < steps.length - 1 ? '<div class="process-step__connector"></div>' : ''}
      </div>
      <div class="process-step__body">
        <span class="process-step__label">${s.label}</span>
        <div class="process-step__index-row">
          <span class="process-step__index">${s.num}</span>
          <div class="process-step__rule"></div>
        </div>
        <h3 class="process-step__title">${s.title}</h3>
        <p class="process-step__desc">${s.desc}</p>
        <div class="process-step__accent"></div>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="services__container">
      <div class="process-header">
        <div class="process-header__top">
          <span class="process-header__tag">Как мы работаем</span>
          <div class="process-header__rule"></div>
        </div>
        <h2 class="process-header__heading">Процесс<br/><span class="process-header__heading-light">от идеи до ключей</span></h2>
      </div>
      <div class="process-timeline">
        ${stepsHTML}
      </div>
    </div>
  `;

  return section;
}

export function initServices() {
  const steps = document.querySelectorAll('.process-step');

  steps.forEach((step, i) => {
    const numberBg = step.querySelector('.process-step__number-bg');
    const dot = step.querySelector('.process-step__dot');
    const connector = step.querySelector('.process-step__connector');
    const body = step.querySelector('.process-step__body');
    const rule = step.querySelector('.process-step__rule');
    const accent = step.querySelector('.process-step__accent');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // Giant number fades in
    tl.fromTo(numberBg,
      { opacity: 0, scale: 0.85, yPercent: 15 },
      { opacity: 1, scale: 1, yPercent: 0, duration: 1.0, ease: 'power3.out' }
    )
      // Dot pops
      .fromTo(dot,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' },
        '-=0.7'
      )
      // Body slides up
      .fromTo(body,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      // Rule expands
      .fromTo(rule,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.5'
      )
      // Accent line
      .fromTo(accent,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

    // Connector grows after dot appears
    if (connector) {
      tl.fromTo(connector,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      );
    }

    // Parallax on giant background number
    gsap.to(numberBg, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: step,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });
}
