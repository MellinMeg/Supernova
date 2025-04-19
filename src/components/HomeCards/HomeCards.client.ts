import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

export function setupClientHomeCards() {
  window.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('.HomeCards__Wrapper') as HTMLElement;
    const pinHeight = document.querySelector('.HomeCards__Pinned') as HTMLElement;
    const container = root.querySelector('.HomeCards__Container') as HTMLElement;
    const cards = root.querySelectorAll('.CodeCard');
    
    // Inizializza Lenis con impostazioni ottimizzate
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      // smoothTouch: false, // disabilitato per mobile per migliorare le prestazioni
      touchMultiplier: 2,
      infinite: false,
    });
    
    // Integrazione con GSAP
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    // Sincronizza Lenis con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Importante: assicurati che ScrollTrigger usi il corretto scrollerProxy
    gsap.utils.toArray<HTMLElement>([document.documentElement]).forEach((scrollingElement) => {
      ScrollTrigger.scrollerProxy(scrollingElement, {
        scrollTop(value) {
          if (arguments.length) {
            if (value !== undefined) {
              lenis.scrollTo(value);
            }
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
    });
    
    // Calcoliamo le dimensioni una sola volta per migliorare le performance
    const windowHeight = window.innerHeight;
    const halfWindowHeight = windowHeight * 0.5;
    
    // Ottimizzazione per dispositivi mobili
    if (window.innerWidth < 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root, 
          start: 'top 50%', 
          end: 'bottom top', 
          scrub: 0.5, // Valore numerico per rendere l'animazione più fluida
          markers: false,
          invalidateOnRefresh: true,
        }
      });

      gsap.set(cards, {
        yPercent: 30, // Valore ridotto per mobile
        y: halfWindowHeight * 0.8, 
      });
  
      tl.to(cards, {
          yPercent: -80, // Valore ridotto per mobile
          y: -halfWindowHeight * 0.8,
          duration: 1,
          stagger: 0.08, // Stagger ridotto per mobile
          ease: "power2.out", // Curva di easing più semplice per migliori performance
      }, 'step');
      
      tl.to(cards, {
          rotation: () => { return (Math.random() - 0.5) * 10 }, // Rotazione ridotta
          stagger: 0.08,
          duration: 0.4, 
          ease: 'power2.out', 
      }, 'step');
      
      tl.to(cards, {
          rotation: 0,
          stagger: 0.08,
          duration: 0.4, 
          ease: 'power2.in',
      }, 'step+=0.4'); 

    } else {
      // Codice per desktop
      ScrollTrigger.create({
        trigger: pinHeight, 
        start:'top 80%',
        end:'bottom 10%',
        pin: container, 
        pinSpacing: false, 
        scrub: 0.5, // Valore numerico invece di true
      });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root, 
          start: 'top 60%', 
          end: 'bottom 10%', 
          scrub: 0.5, // Valore numerico per maggiore fluidità
          invalidateOnRefresh: true,
        }
      });
  
      tl.to(cards, {
          yPercent: -250, 
          y: -halfWindowHeight, 
          duration: 1,
          stagger: 0.12,
          ease: CustomEase.create("custom", "M0,0 C0,0 0.098,0.613 0.5,0.5 0.899,0.386 1,1 1,1 "),
      }, 'step');
      
      tl.to(cards, {
          rotation: () => { return (Math.random() - 0.5) * 20 }, 
          stagger: 0.12,
          duration: 0.5, 
          ease: 'power3.out', 
      }, 'step');
      
      tl.to(cards, {
          rotation: 0,
          stagger: 0.12,
          duration: 0.5, 
          ease: 'power3.in',
      }, 'step+=0.5'); 
    }
    
    // Gestione resize della finestra
    function handleResize() {
      ScrollTrigger.refresh();
    }
    
    window.addEventListener('resize', handleResize);
  });
}

setupClientHomeCards();