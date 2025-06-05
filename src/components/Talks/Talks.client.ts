
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function setupClientTalks() {
  const component = document.querySelector('.Talks');
  if (!component) return;

  const cards = component.querySelectorAll('.Talks__Card');
  if (!cards.length) return;
  
  cards.forEach(card => {
    const wrapper = card.querySelector('.Talks__CardWrapper');
    const mask = card.querySelector('.Talks__Mask');
    if (!wrapper) return;

    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    )
      .from(wrapper, { scale: 2 })
      .to(mask, {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, 0)
      .to(mask, { scale: 0.95, duration: 2, ease: "power2.inOut" }, 0)
  });
}
