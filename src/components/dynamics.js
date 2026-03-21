// ═══════════════════════════════════════════════════════
// ISA — Dynamic Effects (Counters, Reveals, Entrance)
// ═══════════════════════════════════════════════════════

// ─── Hero Text Staggered Entrance ─────────────────────
export function initHeroTextAnimation() {
    const title = document.querySelector('.hero__title');
    const accent = document.querySelector('.hero__title-accent');
    const subtitle = document.querySelector('.hero__subtitle');
    const tag = document.querySelector('.hero__tag');
    const ctaRow = document.querySelector('.hero__cta-row');
    const glassCard = document.querySelector('.hero__glass-card');

    const elements = [tag, title, accent, subtitle, ctaRow, glassCard].filter(Boolean);

    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.15}s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.15}s`;
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 1900);
}

// ─── Animated Number Counters ─────────────────────────
export function initCounters() {
    const counters = document.querySelectorAll('.hero__stat-num, .philosophy__value-number');
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
        '.portfolio__item, .philosophy__image'
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
