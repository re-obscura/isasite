// ═══════════════════════════════════════════════════════
// ISA — Single Scroll Reveal System (IntersectionObserver)
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Master scroll reveal — watches ALL `.scroll-reveal` elements
 * and adds `.is-visible` when they enter the viewport.
 */
export function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (!revealElements.length) return;

    // Safety: if IntersectionObserver isn't supported or fails,
    // show everything immediately
    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    // Start observer only after a slight delay to allow GSAP pins and Lenis to settle
    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Only reveal if actually intersecting
                if (entry.isIntersecting) {
                    // Small delay ensures we don't flash during fast layout shifts
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, 50);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,       // Element must be 10% visible to reveal
            rootMargin: '0px 0px -50px 0px' // Only trigger exactly as it enters viewport
        });

        revealElements.forEach(el => observer.observe(el));
    }, 500);

    // SAFETY FALLBACK: after 6 seconds, force-reveal anything still hidden.
    // This prevents elements from staying invisible if something goes wrong.
    setTimeout(() => {
        revealElements.forEach(el => {
            if (!el.classList.contains('is-visible')) {
                el.classList.add('is-visible');
            }
        });
    }, 6000);
}

// ─── Animated Number Counters ─────────────────────────
export function initCounters() {
    const counters = document.querySelectorAll('.hero__stat strong, .philosophy__stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const text = el.textContent;
    const match = text.match(/(\d+)/);
    if (!match) return;

    const target = parseInt(match[1]);
    const suffix = text.replace(match[1], '');
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(target * eased);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}
