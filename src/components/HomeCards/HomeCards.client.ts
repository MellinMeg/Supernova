import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase) ;

export function setupClientHomeCards() {
    const root = document.querySelector('.HomeCards__Wrapper') as HTMLElement;
    const pinHeight = document.querySelector('.HomeCards__Pinned') as HTMLElement;
    const container = root.querySelector('.HomeCards__Container') as HTMLElement;
    const cards = root.querySelectorAll('.CodeCard');
    const header = document.querySelectorAll('.Menu nav li a') as NodeListOf<HTMLElement>;
    const logo = document.querySelectorAll('.Logo__Wrapper svg path') as NodeListOf<HTMLElement>;
    const quote = document.querySelectorAll('.HeaderQuotes__Quote') as NodeListOf<HTMLElement>;

    // ScrollTrigger per cambiare colore degli anchor quando l'header passa sopra HomeCards
    ScrollTrigger.create({
      trigger: root,
      start: 'top top',       // quando la top di root tocca la top viewport
      end: 'bottom top',      // fino a quando la bottom di root tocca la top viewport
      onEnter: () => {
        header.forEach(el => el.style.color = 'var(--clr-blue-hard)');
        logo.forEach(el => el.style.fill = 'var(--clr-blue-hard)');
        quote.forEach(el => el.style.color = 'var(--clr-blue-hard)');
      },
      onLeaveBack: () => {
        header.forEach(el => el.style.color = '');
        logo.forEach(el => el.style.fill = '');
        quote.forEach(el => el.style.color = '');
      },
      // opzionale: se vuoi che torni normale anche quando esce dal fondo
      onLeave: () => {
        header.forEach(el => el.style.color = '');
        logo.forEach(el => el.style.fill = '');
        quote.forEach(el => el.style.color = '');
      },
      onEnterBack: () => {
        header.forEach(el => el.style.color = 'var(--clr-blue-hard)');
        logo.forEach(el => el.style.fill = 'var(--clr-blue-hard)');
        quote.forEach(el => el.style.color = 'var(--clr-blue-hard)');
      }
    });

    const genericTl = gsap.timeline({
      scrollTrigger: {
        trigger: root, 
        start: 'top 90%', 
        end: 'bottom 50%', 
        scrub: true,
      }
    })

    genericTl
    .to(root, {
      margin: 0, 
      // y: -1000,
      duration: 1, 
      ease: "power3.out",
    })
  


    // if less than 768px, do not run the animation
    if (window.innerWidth < 768) {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: root, 
      //     start: 'top 50%', 
      //     end: 'bottom top', 
      //     scrub: true,
      //   }
      // })

      // gsap.set(cards, {
      //   yPercent: 50,
      //   y: 0.5 * window.innerHeight, 
      // })
  
      // tl.to(cards, {
      //     yPercent: -100, 
      //     y: -0.5 * window.innerHeight, 
      //     duration: 1,
      //     stagger: 0.12,
      //     ease: CustomEase.create("custom", "M0,0 C0,0 0.098,0.613 0.5,0.5 0.899,0.386 1,1 1,1 "),
      // }, 'step') 
      // tl.to(cards, {
      //     rotation: () => { return (Math.random() - 0.5) * 20 }, 
      //     stagger: 0.12,
      //     duration: 0.5, 
      //     ease: 'power3.out', 
      // }, 'step')
      // tl.to(cards, {
      //     rotation: 0,
      //     stagger: 0.12,
      //     duration: 0.5, 
      //     ease: 'power3.in',
      // }, 'step+=0.5') 

    } else {

      ScrollTrigger.create({
        trigger: pinHeight, 
        start:'top 80%',
        end:'bottom 10%',
        pin: container, 
        pinSpacing: false, 
        scrub: true, 
      })
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root, 
          start: 'top 60%', 
          end: 'bottom 10%', 
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

}

export function splitTextHomeCards() { 
  ScrollTrigger.create({
    trigger: '.HomeCards__Title',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      let selectors = ['.HomeCards__Title', '.HomeCards__Description']
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
  });
}