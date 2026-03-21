// ═══════════════════════════════════════════════════════
// ISA — Animations & Scroll Effects
// ═══════════════════════════════════════════════════════

let observer = null;

export function initScrollAnimations() {
    // Intersection Observer for reveal-on-scroll
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Unobserve after revealing to save resources
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}

export function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero__bg img, .philosophy__image img');

    if (!parallaxElements.length) return;

    // Use passive scroll listener for performance
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                parallaxElements.forEach(el => {
                    const rect = el.closest('section')?.getBoundingClientRect();
                    if (!rect) return;

                    // Only apply parallax when element is in viewport
                    if (rect.bottom > 0 && rect.top < window.innerHeight) {
                        const speed = 0.15;
                        const yPos = -(scrollY - (rect.top + window.scrollY)) * speed;
                        el.style.transform = `translateY(${yPos}px) scale(1.1)`;
                    }
                });

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

export function initCapsuleScroll() {
    const capsule = document.getElementById('capsule');
    if (!capsule) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 200) {
            capsule.style.opacity = '0';
            capsule.style.transform = 'translateX(-50%) translateY(-100%)';
            capsule.style.pointerEvents = 'none';
        } else {
            capsule.style.opacity = '1';
            capsule.style.transform = 'translateX(-50%) translateY(0)';
            capsule.style.pointerEvents = '';
        }

        lastScroll = currentScroll;
    }, { passive: true });
}
