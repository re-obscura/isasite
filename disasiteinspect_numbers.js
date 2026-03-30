import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://localhost:3456/isasite/', { waitUntil: 'networkidle0' });

  // Wait for animations
  await new Promise(r => setTimeout(r, 4000));

  const data = await page.evaluate(() => {
    const processSteps = document.querySelectorAll('.process-step');
    const manifestoItems = document.querySelectorAll('.values-editorial__item');
    
    return {
      process: Array.from(processSteps).map(step => {
        const bg = step.querySelector('.process-step__number-bg');
        if (!bg) return null;
        const rect = bg.getBoundingClientRect();
        const parentRect = step.getBoundingClientRect();
        return { 
          text: bg.textContent, 
          rect: JSON.parse(JSON.stringify(rect)), 
          parentRect: JSON.parse(JSON.stringify(parentRect)),
          styles: {
            top: window.getComputedStyle(bg).top,
            left: window.getComputedStyle(bg).left,
            transform: window.getComputedStyle(bg).transform,
            fontSize: window.getComputedStyle(bg).fontSize
          }
        };
      }),
      manifesto: Array.from(manifestoItems).map(item => {
        const bg = item.querySelector('.values-editorial__number-bg');
        if (!bg) return null;
        const rect = bg.getBoundingClientRect();
        const parentRect = item.getBoundingClientRect();
        return { 
          text: bg.textContent, 
          rect: JSON.parse(JSON.stringify(rect)),
          parentRect: JSON.parse(JSON.stringify(parentRect)),
          styles: {
            top: window.getComputedStyle(bg).top,
            right: window.getComputedStyle(bg).right,
            transform: window.getComputedStyle(bg).transform,
            fontSize: window.getComputedStyle(bg).fontSize
          }
        };
      })
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
