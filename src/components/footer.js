// ═══════════════════════════════════════════════════════
// ISA — Footer Section (Premium Redesign)
// ═══════════════════════════════════════════════════════

import { footerData } from '../data/content.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioDesign from '../assets/portfolio-design.png';

gsap.registerPlugin(ScrollTrigger);

const socialIcons = {
  telegram: `<svg viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
};

export function createFooter() {
  const section = document.createElement('footer');
  section.className = 'footer';
  section.id = 'footer';

  const contactsHTML = footerData.contacts.map(c => `
    <div class="footer__contact-group">
      <div class="footer__contact-label">${c.label}</div>
      <div class="footer__contact-value">${c.value}</div>
    </div>
  `).join('');

  const socialsHTML = footerData.socials.map(s => `
    <a href="#" class="footer__social-link" aria-label="${s}">
      ${socialIcons[s]}
    </a>
  `).join('');

  section.innerHTML = `
    <div class="footer__inner">

      <div class="footer__split">
        <!-- Left: Visual Column -->
        <div class="footer__split-visual scroll-reveal">
          <div class="footer__split-visual-inner">
            <img src="${portfolioDesign}" alt="Обсудим проект" class="footer__visual-img" loading="lazy" />
          </div>
          <div class="footer__visual-overlay"></div>
        </div>

        <!-- Right: Content Column -->
        <div class="footer__split-content">
          <div class="footer__cta scroll-reveal">
            <div class="footer__cta-tag">
              <span class="footer__cta-tag-line"></span>
              <span class="footer__cta-tag-text">${footerData.ctaTag}</span>
            </div>
            <h2 class="footer__cta-title">${footerData.ctaTitle.replace(/\n/g, '<br>')}</h2>
          </div>

          <form class="footer__form scroll-reveal" id="contactForm" onsubmit="return false;" data-delay="1">
            <div class="footer__form-grid">
              <input type="text" class="footer__input" placeholder="Ваше имя" required />
              <input type="tel" class="footer__input" placeholder="Телефон" required />
            </div>
            <textarea class="footer__textarea" placeholder="Расскажите о вашем проекте..." rows="4"></textarea>
            <button type="submit" class="footer__submit hover-target">
              <span>Отправить заявку</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </form>
          
          <div class="footer__contacts-mini scroll-reveal" data-delay="2">
            ${contactsHTML}
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer__divider"></div>

      <!-- Bottom: Socials + Copyright -->
      <div class="footer__bottom">
        <div class="footer__copyright">${footerData.copyright}</div>
        <div class="footer__social">
          ${socialsHTML}
        </div>
      </div>
    </div>
  `;

  return section;
}

export function initFooter() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.footer__submit');
      btn.innerHTML = '<span>✓ Заявка отправлена</span>';
      btn.style.pointerEvents = 'none';
      btn.classList.add('footer__submit--sent');
      setTimeout(() => {
        btn.innerHTML = `<span>Отправить заявку</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        btn.style.pointerEvents = '';
        btn.classList.remove('footer__submit--sent');
        form.reset();
      }, 3000);
    });
  }

  const visualImg = document.querySelector('.footer__visual-img');
  if (visualImg) {
    gsap.fromTo(visualImg,
      { yPercent: -15, scale: 1.1 },
      {
        yPercent: 15,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: '.footer__split-visual',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  }
}
