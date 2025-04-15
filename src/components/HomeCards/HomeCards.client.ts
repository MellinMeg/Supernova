import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase) ;

export function setupClientHomeCards() {

  window.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('.HomeCards__Wrapper') as HTMLElement;
    const pinHeight = document.querySelector('.HomeCards__Pinned') as HTMLElement;
    const container = root.querySelector('.HomeCards__Container') as HTMLElement;
    const cards = root.querySelectorAll('.card');

    // if less than 768px, do not run the animation
    if (window.innerWidth < 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root, 
          start: 'top 50%', 
          end: 'bottom top', 
          scrub: true,
        }
      })

      gsap.set(cards, {
        yPercent: 50,
        y: 0.5 * window.innerHeight, 
      })
  
      tl.to(cards, {
          yPercent: -100, 
          y: -0.5 * window.innerHeight, 
          duration: 1,
          stagger: 0.12,
          ease: CustomEase.create("custom", "M0,0 C0,0 0.098,0.613 0.5,0.5 0.899,0.386 1,1 1,1 "),
      }, 'step') 
      tl.to(cards, {
          rotation: () => { return (Math.random() - 0.5) * 20 }, 
          stagger: 0.12,
          duration: 0.5, 
          ease: 'power3.out', 
      }, 'step')
      tl.to(cards, {
          rotation: 0,
          stagger: 0.12,
          duration: 0.5, 
          ease: 'power3.in',
      }, 'step+=0.5') 

    } else {
      ScrollTrigger.create({
        trigger: pinHeight, 
        start:'top 80%',
        end:'bottom 40%',
        pin: container, 
        pinSpacing: false, 
        scrub: true, 
      })
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root, 
          start: 'top 60%', 
          end: 'bottom 40%', 
          scrub: true,
        }
      })
  
      tl.to(cards, {
          yPercent: -250, 
          y: -0.5 * window.innerHeight, 
          duration: 1,
          stagger: 0.12,
          ease: CustomEase.create("custom", "M0,0 C0,0 0.098,0.613 0.5,0.5 0.899,0.386 1,1 1,1 "),
      }, 'step') 
      tl.to(cards, {
          rotation: () => { return (Math.random() - 0.5) * 20 }, 
          stagger: 0.12,
          duration: 0.5, 
          ease: 'power3.out', 
      }, 'step')
      tl.to(cards, {
          rotation: 0,
          stagger: 0.12,
          duration: 0.5, 
          ease: 'power3.in',
      }, 'step+=0.5') 
    }

  })
}

setupClientHomeCards();