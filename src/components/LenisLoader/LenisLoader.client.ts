import Lenis from 'lenis'

// Extend the Window interface to include the 'lenis' property
declare global {
  interface Window {
    lenis: Lenis;
  }
}

export function setupClientLenisLoader() {

  // // Initialize Lenis
  // const lenis = new Lenis({
  //   autoRaf: true,
  // });

  // // Listen for the scroll event and log the event data
  // lenis.on('scroll', (e) => {

  // });

  // const lenis = new Lenis({
  //   duration: 10,
  //   easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  //   // direction: 'vertical',
  //   // smooth: true,
  //   // smoothTouch: false,
  //   touchMultiplier: 2,
  // })

  // window.lenis = lenis;

  // function raf() {
  //   lenis.raf(performance.now());
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
  //     e.preventDefault();
  //     lenis.scrollTo(anchor.getAttribute('href'));
  //   });
  // })

}

setupClientLenisLoader();
