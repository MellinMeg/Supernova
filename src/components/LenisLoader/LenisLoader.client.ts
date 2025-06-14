import Lenis from 'lenis'

// Extend the Window interface to include the 'lenis' property
declare global {
  interface Window {
    lenis: Lenis;
  }
}

export function setupClientLenisLoader() {
  const lenis = new Lenis({
    duration: 1,
    touchMultiplier: 2,
    anchors: true,
    autoRaf: true
  })

  window.lenis = lenis;

  function raf() {
    lenis.raf(performance.now());
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        lenis.scrollTo(href);
      }
    });
  })

}
