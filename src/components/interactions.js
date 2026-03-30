// ═══════════════════════════════════════════════════════
// ISA — Advanced Interactions (3D Tilt & Custom Cursor)
// ═══════════════════════════════════════════════════════

// ─── 3D Tilt Effect on Glass Card ─────────────────────
export function init3DTilt() {
    const card = document.querySelector('.hero__glass-card');
    if (!card) return;

    // Only apply on desktop devices with pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const tiltSettings = { max: 15, perspective: 1000, scale: 1.02 };

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const tiltX = ((y - centerY) / centerY) * -tiltSettings.max;
        const tiltY = ((x - centerX) / centerX) * tiltSettings.max;

        card.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${tiltSettings.scale}, ${tiltSettings.scale}, ${tiltSettings.scale})`;

        // Move the gradient glow based on mouse position
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        card.style.setProperty('--glow-x', `${glowX}%`);
        card.style.setProperty('--glow-y', `${glowY}%`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s var(--ease-out-expo)';
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
    });
}

// ─── Custom Lens Cursor ───────────────────────────────
export function initLensCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'lens-cursor';
    const cursorText = document.createElement('div');
    cursorText.className = 'lens-cursor__text';
    cursorText.textContent = 'View';
    cursor.appendChild(cursorText);
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    // A slight spring interpolation
    const speed = 0.15;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function render() {
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Hover states on portfolio items
    const items = document.querySelectorAll('.portfolio__pin');
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('lens-cursor--active');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('lens-cursor--active');
        });
    });

    // Hide cursor on stories so it doesn't conflict
    const storiesList = document.querySelector('.stories__scroll');
    if (storiesList) {
        storiesList.addEventListener('mouseenter', () => {
            cursor.classList.add('lens-cursor--hidden');
        });
        storiesList.addEventListener('mouseleave', () => {
            cursor.classList.remove('lens-cursor--hidden');
        });
    }
}
