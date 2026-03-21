// ═══════════════════════════════════════════════════════
// ISA — Editorial Manifesto (Split-Panel, No BG Image)
// ═══════════════════════════════════════════════════════

export function createManifesto() {
  const section = document.createElement('section');
  section.className = 'manifesto';

  section.innerHTML = `
    <div class="manifesto__ornament-bg"></div>
    <div class="manifesto__container">
      <div class="manifesto__left reveal">
        <div class="manifesto__tag">
          <span class="manifesto__tag-line"></span>
          <span>Наш манифест</span>
        </div>
        <h2 class="manifesto__heading">
          Мы не гонимся<br>за трендами.
        </h2>
        <p class="manifesto__accent">
          Мы создаём <em>архитектуру,</em><br>которая переживёт время.
        </p>
      </div>

      <div class="manifesto__divider">
        <div class="manifesto__divider-line"></div>
        <div class="manifesto__divider-diamond">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1L19 10L10 19L1 10Z" stroke="currentColor" stroke-width="1"/>
          </svg>
        </div>
        <div class="manifesto__divider-line"></div>
      </div>

      <div class="manifesto__right">
        <div class="manifesto__principle reveal" style="transition-delay: 0.1s">
          <div class="manifesto__principle-number">01</div>
          <div class="manifesto__principle-content">
            <h3 class="manifesto__principle-title">Фундаментальность</h3>
            <p class="manifesto__principle-text">За каждым проектом — инженерная точность и безупречное исполнение. Мы строим то, что будет стоять веками.</p>
          </div>
        </div>

        <div class="manifesto__principle reveal" style="transition-delay: 0.2s">
          <div class="manifesto__principle-number">02</div>
          <div class="manifesto__principle-content">
            <h3 class="manifesto__principle-title">Диалог с местом</h3>
            <p class="manifesto__principle-text">Каждый проект начинается с ландшафта, света и контекста. Архитектура должна быть продолжением среды.</p>
          </div>
        </div>

        <div class="manifesto__principle reveal" style="transition-delay: 0.3s">
          <div class="manifesto__principle-number">03</div>
          <div class="manifesto__principle-content">
            <h3 class="manifesto__principle-title">Прозрачность</h3>
            <p class="manifesto__principle-text">Вы всегда знаете, что происходит с проектом. Честный процесс — от первого эскиза до сдачи ключей.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
