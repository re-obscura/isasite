// ═══════════════════════════════════════════════════════
// ISA — Full-Bleed Cinematic Image Divider
// ═══════════════════════════════════════════════════════

import heroBg from '../assets/hero-bg.png';

export function createImageBreak() {
    const section = document.createElement('div');
    section.className = 'image-break';

    section.innerHTML = `
    <div class="image-break__media">
      <img src="${heroBg}" alt="Архитектура ISA" loading="lazy" />
    </div>
    <div class="image-break__overlay"></div>
    <div class="image-break__caption">
      <span class="image-break__caption-text">Архитектура, которая вдохновляет</span>
    </div>
  `;

    return section;
}
