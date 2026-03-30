// ═══════════════════════════════════════════════════════
// ISA — Cinematic Preloader
// ═══════════════════════════════════════════════════════

import gsap from 'gsap';

export function createPreloader() {
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.id = 'preloader';

  preloader.innerHTML = `
    <div class="preloader__container">
      <div class="preloader__brand">ISA<br><span class="preloader__sub">Architecture</span></div>
      <div class="preloader__counter">
        <span id="preloaderProgress">0</span>%
      </div>
    </div>
    <div class="preloader__overlay"></div>
  `;

  return preloader;
}

export function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('preloaderProgress');
  const overlay = document.querySelector('.preloader__overlay');

  if (!preloader || !progress) return;

  // Prevent scrolling while loading
  document.body.classList.add('no-scroll');

  const tl = gsap.timeline({
    onComplete: () => {
      document.body.classList.remove('no-scroll');
      preloader.remove();
      // Dispatch event to start page animations (e.g. Hero)
      window.dispatchEvent(new Event('appLoaded'));
    }
  });

  const state = { value: 0 };

  // Fake loading progress
  tl.to(state, {
    value: 100,
    duration: 2.5,
    ease: "power2.inOut",
    onUpdate: () => {
      progress.textContent = Math.round(state.value);
    }
  })
    .to('.preloader__container', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut"
    })
    .to(preloader, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut"
    }, "-=0.5");
}

