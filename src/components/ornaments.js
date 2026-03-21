// ═══════════════════════════════════════════════════════
// ISA — Animated Geometric Ornaments
// ═══════════════════════════════════════════════════════
//
// Chechen-inspired geometric patterns rendered as animated SVGs.
// Visible, elegant ornamental accents between sections.

// ─── SVG Pattern Definitions ──────────────────────────

function diamondLattice(id = 'lattice') {
  return `
  <svg class="ornament ornament--${id}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    <g stroke="rgba(196,169,125,0.35)" stroke-width="0.7">
      <!-- Outer diamond -->
      <path d="M100 10 L190 100 L100 190 L10 100 Z" class="orn-draw orn-draw--1"/>
      <!-- Inner diamond -->
      <path d="M100 40 L160 100 L100 160 L40 100 Z" class="orn-draw orn-draw--2"/>
      <!-- Core diamond -->
      <path d="M100 65 L135 100 L100 135 L65 100 Z" class="orn-draw orn-draw--3"/>
      <!-- Cross lines -->
      <line x1="100" y1="10" x2="100" y2="190" class="orn-draw orn-draw--4"/>
      <line x1="10" y1="100" x2="190" y2="100" class="orn-draw orn-draw--4"/>
      <!-- Corner accents -->
      <path d="M55 55 L100 10 L145 55" class="orn-draw orn-draw--5"/>
      <path d="M145 145 L100 190 L55 145" class="orn-draw orn-draw--5"/>
      <path d="M55 145 L10 100 L55 55" class="orn-draw orn-draw--6"/>
      <path d="M145 55 L190 100 L145 145" class="orn-draw orn-draw--6"/>
    </g>
    <!-- Decorative inner details -->
    <g stroke="rgba(196,169,125,0.2)" stroke-width="0.5">
      <path d="M100 40 L100 65" class="orn-draw orn-draw--3"/>
      <path d="M100 135 L100 160" class="orn-draw orn-draw--3"/>
      <path d="M40 100 L65 100" class="orn-draw orn-draw--3"/>
      <path d="M135 100 L160 100" class="orn-draw orn-draw--3"/>
    </g>
    <circle cx="100" cy="100" r="4" fill="rgba(196,169,125,0.2)" class="orn-pulse"/>
    <circle cx="100" cy="10" r="2.5" fill="rgba(196,169,125,0.15)" class="orn-pulse orn-pulse--delay-1"/>
    <circle cx="190" cy="100" r="2.5" fill="rgba(196,169,125,0.15)" class="orn-pulse orn-pulse--delay-2"/>
    <circle cx="100" cy="190" r="2.5" fill="rgba(196,169,125,0.15)" class="orn-pulse orn-pulse--delay-3"/>
    <circle cx="10" cy="100" r="2.5" fill="rgba(196,169,125,0.15)" class="orn-pulse orn-pulse--delay-4"/>
  </svg>`;
}

function starPattern(id = 'star') {
  return `
  <svg class="ornament ornament--${id}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
    <g stroke="rgba(196,169,125,0.3)" stroke-width="0.7">
      <!-- 8-pointed star from overlapping squares -->
      <rect x="25" y="25" width="70" height="70" transform="rotate(45 60 60)" class="orn-draw orn-draw--1"/>
      <rect x="25" y="25" width="70" height="70" class="orn-draw orn-draw--2"/>
      <!-- Inner octagon -->
      <polygon points="60,15 90,35 105,60 90,85 60,105 30,85 15,60 30,35" class="orn-draw orn-draw--3"/>
    </g>
    <g stroke="rgba(196,169,125,0.18)" stroke-width="0.5">
      <!-- Inner star detail -->
      <polygon points="60,30 72,48 95,48 78,60 84,82 60,70 36,82 42,60 25,48 48,48" class="orn-draw orn-draw--4"/>
    </g>
    <circle cx="60" cy="60" r="3" fill="rgba(196,169,125,0.2)" class="orn-pulse"/>
  </svg>`;
}

function repeatingBorder(id = 'border') {
  return `
  <svg class="ornament ornament--${id}" viewBox="0 0 600 30" xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none">
    <g stroke="rgba(196,169,125,0.22)" stroke-width="0.6">
      ${Array.from({ length: 20 }, (_, i) => {
    const x = i * 30 + 15;
    return `<path d="M${x - 10} 15 L${x} 5 L${x + 10} 15 L${x} 25 Z" class="orn-draw orn-draw--${(i % 4) + 1}"/>`;
  }).join('\n      ')}
    </g>
  </svg>`;
}

function cornerOrnament(id = 'corner', flip = false) {
  const transform = flip ? 'transform="scale(-1,1) translate(-100,0)"' : '';
  return `
  <svg class="ornament ornament--${id}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" ${transform}>
    <g stroke="rgba(196,169,125,0.25)" stroke-width="0.7">
      <path d="M5 5 L50 5 L50 15 L15 15 L15 50 L5 50 Z" class="orn-draw orn-draw--1"/>
      <path d="M5 5 L30 5" class="orn-draw orn-draw--2"/>
      <path d="M5 5 L5 30" class="orn-draw orn-draw--2"/>
      <path d="M20 20 L35 20 L35 35 L20 35 Z" transform="rotate(45 27.5 27.5)" class="orn-draw orn-draw--3"/>
    </g>
  </svg>`;
}

// ─── Section Ornament Blocks ──────────────────────────

export function createSectionOrnament(type = 'lattice') {
  const container = document.createElement('div');
  container.className = `section-ornament section-ornament--${type} reveal`;

  switch (type) {
    case 'lattice':
      container.innerHTML = `
        <div class="section-ornament__left">${starPattern('left')}</div>
        <div class="section-ornament__center">${diamondLattice('center')}</div>
        <div class="section-ornament__right">${starPattern('right')}</div>
      `;
      break;
    case 'border':
      container.innerHTML = repeatingBorder('wide');
      break;
    case 'corners':
      container.innerHTML = `
        <div class="section-ornament__corner-tl">${cornerOrnament('tl')}</div>
        <div class="section-ornament__corner-tr">${cornerOrnament('tr', true)}</div>
      `;
      break;
    case 'minimal':
      container.innerHTML = `
        <div class="section-ornament__line"></div>
        <div class="section-ornament__diamond">${starPattern('mini')}</div>
        <div class="section-ornament__line"></div>
      `;
      break;
  }

  return container;
}

export function createFloatingOrnament() {
  const el = document.createElement('div');
  el.className = 'floating-ornament';
  el.innerHTML = diamondLattice('float');
  return el;
}
