import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';  
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
import Lenis from 'lenis'

export function setupClientHomeIntro() {
  const root = document.querySelector('.HomeIntro') as HTMLElement;
  const pinHeight = root.querySelector('.HomeIntro__Wrapper')
  const container = root.querySelector('.HomeIntro__Container')
  const paragraphs = root.querySelectorAll('.HomeIntro__Paragraph')

  paragraphs.forEach(paragraph => {
      wrapWordsInSpan(paragraph as HTMLElement)
  })
  
  ScrollTrigger.create({
      trigger: pinHeight, // Listens to pin-height
      start: 'top top',
      end: 'bottom bottom',
      pin: container // The pinned section
  })

  const tl = gsap.timeline({
      scrollTrigger: { // All tweens of my timeline will have the same scrollTrigger properties
          trigger: pinHeight,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true // Progresses with the scroll
      }
  })

  paragraphs.forEach((paragraph, index) => {
      if(paragraphs[index+1]) { // Check if there is a next paragraph
          tl.to(paragraphs[index].querySelectorAll('.HomeIntro__Word span'), {
              y:'100%', // Disappearance of words from paragraphs[index]
              duration:1,
              stagger:0.2,
              ease:'power4.in',
          }) // Both tweens will play at the same time
          tl.to(paragraphs[index+1].querySelectorAll('.HomeIntro__Word span'), {
              y:'0%', // Appearance of words from paragraphs[index+1]
              duration:1,
              delay:1,
              stagger:0.2,
              ease:'power4.out',
          }, '<') // This means the animation starts at the beginning of the previous tween
      }
  })
}

// UTIL METHOD
function wrapWordsInSpan(element: HTMLElement) {
    const text = element.textContent || '';
    element.innerHTML = text
        .split(' ')
        .map(word => `<span class="HomeIntro__Word"><span>${word}</span></span>`)
        .join(' ');
}


setupClientHomeIntro();

ScrollTrigger.create({
  trigger: '.HomeIntro__Title',
  start: 'top 80%',
  once: true,
  onEnter: () => {
    splitTitle();
  }
});

export function splitTitle() { 
  let selectors = ['.HomeIntro__Title']
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
