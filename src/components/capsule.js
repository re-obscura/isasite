// ═══════════════════════════════════════════════════════
// ISA — Info Capsule Component
// ═══════════════════════════════════════════════════════

import { capsuleMessages } from '../data/content.js';

let currentIndex = 0;
let rotationInterval = null;
let isExpanded = false;

export function createCapsule() {
    const capsule = document.createElement('div');
    capsule.className = 'capsule glass';
    capsule.id = 'capsule';

    const msg = capsuleMessages[0];

    capsule.innerHTML = `
    <div class="capsule__header">
      <div class="capsule__content">
        <div class="capsule__text">${msg.text}</div>
      </div>
      <div class="capsule__arrow">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9" fill="none" stroke="#C4A97D" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    <div class="capsule__details">
      <p class="capsule__details-text">${msg.details}</p>
      <button class="btn-glass">${msg.cta}</button>
    </div>
  `;

    capsule.addEventListener('click', toggleCapsule);
    startRotation();

    return capsule;
}

function toggleCapsule(e) {
    const capsule = document.getElementById('capsule');
    if (!capsule) return;

    isExpanded = !isExpanded;
    capsule.classList.toggle('expanded', isExpanded);

    if (isExpanded) {
        stopRotation();
    } else {
        startRotation();
    }
}

function rotateText() {
    if (isExpanded) return;

    const textEl = document.querySelector('.capsule__text');
    const detailsText = document.querySelector('.capsule__details-text');
    const ctaBtn = document.querySelector('.capsule__details .btn-glass');
    if (!textEl) return;

    textEl.classList.add('fading');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % capsuleMessages.length;
        const msg = capsuleMessages[currentIndex];
        textEl.textContent = msg.text;
        if (detailsText) detailsText.textContent = msg.details;
        if (ctaBtn) ctaBtn.textContent = msg.cta;
        textEl.classList.remove('fading');
    }, 500);
}

function startRotation() {
    stopRotation();
    rotationInterval = setInterval(rotateText, 6000);
}

function stopRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
    }
}
