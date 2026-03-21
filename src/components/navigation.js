// ═══════════════════════════════════════════════════════
// ISA — Fixed Horizontal Navigation (Cappen-Style)
// ═══════════════════════════════════════════════════════

import { navLinks } from '../data/content.js';

export function createNavigation() {
    const nav = document.createElement('nav');
    nav.className = 'nav-bar';
    nav.id = 'navBar';

    const linksHTML = navLinks.map(link =>
        `<a href="${link.href}" class="nav-bar__link">${link.label}</a>`
    ).join('<span class="nav-bar__dot">○</span>');

    const mobileLinksHTML = navLinks.map(link =>
        `<a href="${link.href}" class="nav-bar__mobile-link">${link.label}</a>`
    ).join('');

    nav.innerHTML = `
    <div class="nav-bar__inner">
      <div class="nav-bar__logo">
        <span class="nav-bar__logo-text">ISA</span>
      </div>
      <div class="nav-bar__line"></div>
      <div class="nav-bar__links">
        ${linksHTML}
      </div>
      <div class="nav-bar__line"></div>
      <a href="#footer" class="nav-bar__cta">Начать проект</a>
      <button class="nav-bar__burger" aria-label="Меню">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-bar__mobile-menu">
      ${mobileLinksHTML}
      <a href="#footer" class="nav-bar__mobile-link nav-bar__mobile-link--cta">Начать проект</a>
    </div>
  `;

    return nav;
}

function closeMenu() {
    const burger = document.querySelector('.nav-bar__burger');
    const mobileMenu = document.querySelector('.nav-bar__mobile-menu');
    if (burger) burger.classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
}

export function initNavigation() {
    const navBar = document.getElementById('navBar');
    if (!navBar) return;

    const burger = navBar.querySelector('.nav-bar__burger');
    const mobileMenu = navBar.querySelector('.nav-bar__mobile-menu');
    const closeBtn = navBar.querySelector('.nav-bar__mobile-close');

    // Burger toggle
    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                burger.classList.add('active');
                mobileMenu.classList.add('open');
                document.body.classList.add('menu-open');
            }
        });
    }

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    // Close on mobile link click
    navBar.querySelectorAll('.nav-bar__mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Smooth scroll on link click
    navBar.querySelectorAll('.nav-bar__link, .nav-bar__cta, .nav-bar__mobile-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Background opacity on scroll
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 80) {
                    navBar.classList.add('nav-bar--scrolled');
                } else {
                    navBar.classList.remove('nav-bar--scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}
