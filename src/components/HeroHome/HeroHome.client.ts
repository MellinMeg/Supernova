import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);


export function setupClientsplitText() { 
  let selectors = ['.HeroHome__Hi', '.HeroHome__Span', '.HeroHome__Title', '.HeroHome__FD']
  gsap.set(selectors, {opacity: 1});

  selectors.forEach((selector) => {
    const el = document.querySelector(selector);
    if (!el) return;


    const split = new SplitText(el, {
      type: "lines",
      lineClass: "line",
      autoSplit: true,
    });

    gsap.from(split.lines, {
      duration: 0.6,
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      ease: "power2.out",
    })
  }); 
}
  
document.fonts.ready.then(() => {
  setupClientsplitText();
});