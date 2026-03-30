// ═══════════════════════════════════════════════════════
// ISA — Manifesto (Editorial Magazine Redesign)
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createManifesto() {
  const section = document.createElement('section');
  section.className = 'manifesto-section';
  section.id = 'manifesto';

  section.innerHTML = `
    <div class="manifesto-container">
      <div class="manifesto-header">
        <span class="manifesto-meta scroll-reveal">Философия</span>
        <div class="manifesto-line scroll-reveal scroll-reveal--scale" data-delay="1"></div>
      </div>
      
      <div class="manifesto-text-wrapper">
        <h2 class="manifesto-statement scroll-reveal">Мы не гонимся</h2>
        <h2 class="manifesto-statement manifesto-statement--offset scroll-reveal" data-delay="1">за трендами.</h2>
        <h2 class="manifesto-statement scroll-reveal" data-delay="2">Мы создаем</h2>
        <h2 class="manifesto-statement manifesto-statement--accent scroll-reveal" data-delay="3">классику.</h2>
      </div>

      <!-- Editorial Values Grid -->
      <div class="values-editorial">
        <div class="values-editorial__item" data-value="01">
          <div class="values-editorial__number-bg" aria-hidden="true">01</div>
          <div class="values-editorial__content">
            <div class="values-editorial__top">
              <span class="values-editorial__index">01</span>
              <div class="values-editorial__rule"></div>
            </div>
            <h3 class="values-editorial__title">Фундамен&shy;тальность</h3>
            <p class="values-editorial__desc">За каждым проектом — инженерная точность и безупречное исполнение, проверенное десятилетиями.</p>
            <div class="values-editorial__accent-line"></div>
          </div>
        </div>

        <div class="values-editorial__divider">
          <div class="values-editorial__divider-line"></div>
          <svg class="values-editorial__divider-diamond" viewBox="0 0 12 12" fill="none">
            <rect x="6" y="0" width="8.49" height="8.49" rx="1.5" transform="rotate(45 6 0)" stroke="currentColor" stroke-width="0.8"/>
          </svg>
          <div class="values-editorial__divider-line"></div>
        </div>

        <div class="values-editorial__item" data-value="02">
          <div class="values-editorial__number-bg" aria-hidden="true">02</div>
          <div class="values-editorial__content">
            <div class="values-editorial__top">
              <span class="values-editorial__index">02</span>
              <div class="values-editorial__rule"></div>
            </div>
            <h3 class="values-editorial__title">Контекст</h3>
            <p class="values-editorial__desc">Каждый объект рождается в диалоге со средой, органично продолжая ландшафт и архитектурную ткань.</p>
            <div class="values-editorial__accent-line"></div>
          </div>
        </div>

        <div class="values-editorial__divider">
          <div class="values-editorial__divider-line"></div>
          <svg class="values-editorial__divider-diamond" viewBox="0 0 12 12" fill="none">
            <rect x="6" y="0" width="8.49" height="8.49" rx="1.5" transform="rotate(45 6 0)" stroke="currentColor" stroke-width="0.8"/>
          </svg>
          <div class="values-editorial__divider-line"></div>
        </div>

        <div class="values-editorial__item" data-value="03">
          <div class="values-editorial__number-bg" aria-hidden="true">03</div>
          <div class="values-editorial__content">
            <div class="values-editorial__top">
              <span class="values-editorial__index">03</span>
              <div class="values-editorial__rule"></div>
            </div>
            <h3 class="values-editorial__title">Честность</h3>
            <p class="values-editorial__desc">Прозрачный процесс от первого эскиза до вручения ключей. Без скрытых сюрпризов.</p>
            <div class="values-editorial__accent-line"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}

export function initManifesto() {
  const items = document.querySelectorAll('.values-editorial__item');
  const dividers = document.querySelectorAll('.values-editorial__divider');

  items.forEach((item, i) => {
    const numberBg = item.querySelector('.values-editorial__number-bg');
    const content = item.querySelector('.values-editorial__content');
    const rule = item.querySelector('.values-editorial__rule');
    const accentLine = item.querySelector('.values-editorial__accent-line');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(numberBg,
      { opacity: 0, scale: 0.8, yPercent: 10 },
      { opacity: 1, scale: 1, yPercent: 0, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(content,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(rule,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(accentLine,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
  });

  dividers.forEach((div) => {
    gsap.fromTo(div,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: div,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Parallax on giant background numbers
  items.forEach((item) => {
    const numberBg = item.querySelector('.values-editorial__number-bg');
    gsap.to(numberBg, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });
}
