import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function setupClientStickers() {
  const wrapper = document.querySelector('.Stickers__Wrapper');
  if (!wrapper) return;
  const wrapperHeight = wrapper.getBoundingClientRect().height;

  const stickers = wrapper.querySelectorAll('.Stickers__Image');
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      gsap.to(stickers, {
        y: wrapperHeight ? wrapperHeight * 1.5 : 0,
        duration: 2,
        ease: "power2.inOut",
        stagger: {
          amount: 0.3,
          from: 'end',
        },
      })
    }, 1000);
  });
  
}

setupClientStickers();
