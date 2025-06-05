import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function setupClientStickers() { 
    const stickersEl = document.querySelector('.Stickers') as HTMLElement;
    const wrapper = stickersEl.querySelector('.Stickers__Wrapper') as HTMLElement;
    const bg = stickersEl.querySelector('.Stickers__Bg') as HTMLElement;
    const title = stickersEl.querySelector('.Heading1') as HTMLElement;
    const stickers = wrapper.querySelectorAll('.Stickers__Image') as NodeListOf<HTMLElement>;
    const wrapperHeight = wrapper.getBoundingClientRect().height;
    const count = document.querySelector(".Stickers__Counter") as HTMLElement;
    const loader = document.querySelector(".Stickers__Loader") as HTMLElement;
    const progressBar = document.querySelector(".Stickers__Loadingbar") as HTMLElement;
    document.documentElement.style.overflow = "hidden";
  
    function countPercent() {
      const newPercent = (loadingTl.progress() * 100).toFixed();
      count.innerHTML = newPercent + "%";
    }
  
    const loadingTl = gsap.timeline({
      paused: false,
      onUpdate: countPercent,
      onComplete: loadComplete,
    });
  
    gsap.set(stickersEl, {opacity: 0});
    loadingTl.to(stickersEl, {opacity: 1, duration: 0.5, ease: "power2.inOut"}, '-=0.5')
    loadingTl.to(progressBar, { width: "100%", duration: 2, ease: "power2.inOut" });
  
    function loadComplete() {
      count.innerHTML = "100%";
      progressBar.style.width = "100%";
    
        gsap.timeline()
        .to([loader, count, title], {
          opacity: 0,
          duration: 0.3,
          ease: 'sine.out',
        })
        .to(stickers, {
          y: wrapperHeight ? wrapperHeight * 1.5 : 0,
          duration: 1.2,
          ease: "power2.inOut",
          stagger: {
            amount: 0.3,
            from: 'end',
          },
        }, '-=0.6')
        .to(bg, {
          backdropFilter: 'blur(0px)',
          duration: 0.2,
          opacity: 0,
          ease: 'sine.out',
        }, '-=0.5')
        .to(stickersEl, {
          top: '-10000px',
          duration: 0.2,
          zIndex: -20,
        }, '-=0.4')
        .to(document.documentElement, {
          overflow: "auto",
          duration: 0.1,
        }, '-=0.4')
    }
}