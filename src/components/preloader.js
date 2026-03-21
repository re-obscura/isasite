// ═══════════════════════════════════════════════════════
// ISA — Preloader Component
// ═══════════════════════════════════════════════════════

export function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.id = 'preloader';

    preloader.innerHTML = `
    <div class="preloader__ornament">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#C4A97D" stroke-width="1">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" opacity="0.8"/>
          <path d="M50 15 L85 50 L50 85 L15 50 Z" opacity="0.6"/>
          <path d="M50 25 L75 50 L50 75 L25 50 Z" opacity="0.4"/>
          <path d="M50 35 L65 50 L50 65 L35 50 Z" opacity="0.3"/>
          <circle cx="50" cy="50" r="4" fill="#C4A97D" opacity="0.5"/>
        </g>
      </svg>
    </div>
    <div class="preloader__text">ISA</div>
  `;

    return preloader;
}

export function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.remove();
        }, 800);
    }, 1800);
}
