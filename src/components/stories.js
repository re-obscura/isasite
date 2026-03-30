// ═══════════════════════════════════════════════════════
// ISA — Cinematic Directions (Stories) GSAP Horizontal
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { directions } from '../data/content.js';

export function createStories() {
  const section = document.createElement('section');
  section.className = 'stories-section';
  section.id = 'stories';

  const cardsHTML = directions.map((dir, i) => `
    <div class="story-card" data-index="${i}">
      <div class="story-card__img-wrapper">
        <img src="${dir.image}" alt="${dir.category}" loading="lazy" class="story-card__img"/>
      </div>
      <div class="story-card__content">
        <span class="story-card__meta">${String(i + 1).padStart(2, '0')} // ${dir.category}</span>
        <h3 class="story-card__title heading-alt">${dir.name}</h3>
      </div>
    </div>
  `).join('');

  section.innerHTML = `
    <div class="stories-wrapper">
      <div class="stories-header">
        <h2 class="stories-heading heading-primary">Экспертиза</h2>
      </div>
      <div class="stories-track">
        ${cardsHTML}
      </div>
    </div>
  `;

  return section;
}


export function initStories() {
  const track = document.querySelector('.stories-track');
  const cards = gsap.utils.toArray('.story-card');

  if (track && cards.length > 0) {
    const totalWidth = track.scrollWidth - window.innerWidth;

    const scrollTween = gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      id: "horizontal-scroll",
      scrollTrigger: {
        trigger: ".stories-section",
        pin: true,
        scrub: 1,
        end: () => "+=" + track.scrollWidth,
      }
    });

    // Parallax on images inside horizontal scroll
    cards.forEach(card => {
      const img = card.querySelector('.story-card__img');
      gsap.fromTo(img,
        { xPercent: -10 },
        {
          xPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: true,
          }
        }
      );
    });
  }
}
