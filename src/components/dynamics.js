// ═══════════════════════════════════════════════════════
// ISA — Dynamic Effects (Counters, Reveals, Entrance)
// ═══════════════════════════════════════════════════════

// ─── Hero Text Staggered Entrance ─────────────────────
// (Now handled by GSAP timeline in hero.js)
export function initHeroTextAnimation() { }

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

// ─── Image Reveal (CSS-based, no clip-path hiding) ────
// Uses transform + opacity instead of clip-path to avoid invisible images.
export function initImageReveals() {
    const items = document.querySelectorAll(
        '.philosophy__image-col'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('img-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    items.forEach((el, i) => {
        el.classList.add('img-reveal');
        el.style.setProperty('--reveal-delay', `${(i % 5) * 0.08}s`);
        observer.observe(el);
    });
}
