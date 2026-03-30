// ═══════════════════════════════════════════════════════
// ISA — Pinterest-style Masonry Portfolio
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioItems } from '../data/content.js';

const SIZES = ['tall', 'normal', 'wide', 'normal', 'tall', 'normal', 'wide', 'normal', 'tall', 'normal'];

export function createPortfolio() {
  const section = document.createElement('section');
  section.className = 'portfolio';
  section.id = 'portfolio';

  const itemsHTML = portfolioItems.map((item, index) => {
    const size = item.size || SIZES[index % SIZES.length];
    const number = String(index + 1).padStart(2, '0');

    return `
      <div class="portfolio__pin hover-target" data-size="${size}" data-category="${item.category}">
        <div class="portfolio__pin-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" class="portfolio__pin-img" />
        </div>
        <div class="portfolio__pin-overlay">
          <div class="portfolio__pin-info">
            <span class="portfolio__pin-num">${number}</span>
            <h3 class="portfolio__pin-name">${item.name}</h3>
            <span class="portfolio__pin-cat">${getCategoryLabel(item.category)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="container">
      <div class="portfolio__header scroll-reveal">
        <h2 class="portfolio__title heading-primary">Избранные<br>Проекты</h2>
        <a href="#" class="portfolio__view-all">Смотреть все</a>
      </div>
      <div class="portfolio__masonry">
        ${itemsHTML}
      </div>
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
  const pins = document.querySelectorAll('.portfolio__pin');

  // Staggered reveal on scroll
  pins.forEach((pin, i) => {
    gsap.fromTo(pin,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: (i % 4) * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pin,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Subtle parallax on the image inside
    const img = pin.querySelector('.portfolio__pin-img');
    if (img) {
      gsap.fromTo(img,
        { scale: 1.12, yPercent: -6 },
        {
          scale: 1,
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    }
  });
}
