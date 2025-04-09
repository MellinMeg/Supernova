import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function handleBlobs() {
  const heroHome = document.querySelector('.HeroHome') as HTMLElement;
  const blobs = document.querySelectorAll('.HeroHome__Blob');
  const randomPoint = (min: number, max: number) => gsap.utils.random(min, max);

  const getRandomPosition = (blob: Element) => {
    const heroHomeRect = heroHome.getBoundingClientRect();
    const blobElement = blob as HTMLElement;
    const blobSize = window.innerWidth * 0.4;
    
    // Calcoliamo i limiti sicuri per mantenere il blob sempre visibile
    // Lasciamo almeno 2/3 del blob sempre visibile
    const safeMargin = blobSize * 0.66;
    
    return {
      x: randomPoint(0, heroHomeRect.width - safeMargin),
      y: randomPoint(0, heroHomeRect.height - safeMargin)
    };
  };

  blobs.forEach((blob, index) => {
    const initialPos = getRandomPosition(blob);
    gsap.set(blob, {
      x: initialPos.x,
      y: initialPos.y,
      scale: 1
    });

    const createFluidAnimation = () => {
      const duration = gsap.utils.random(5, 10);
      const newPos = getRandomPosition(blob);
      const currentElement = blob as HTMLElement;
      
      // Timeline per coordinare le animazioni
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        onComplete: createFluidAnimation
      });

      // Animazione principale con movimento più fluido
      tl.to(blob, {
        x: newPos.x,
        y: newPos.y,
        duration: duration,
        ease: "sine.inOut",
      });

      // Animazione parallela per scala e rotazione
      tl.to(blob, {
        scale: gsap.utils.random(0.9, 1.2),
        rotation: randomPoint(-15, 15),
        duration: duration / 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1
      }, 0);

      // Animazione della deformazione e cambiamento dimensionale
      let progress = 0;
      gsap.to({}, {
        duration: duration,
        onUpdate: () => {
          progress += 0.016;
          const deform = Math.sin(progress * 2) * 10;
          currentElement.style.borderRadius = `${50 + deform}% ${50 - deform}% ${50 + deform}% ${50 - deform}%`;
        }
      });
    };

    gsap.delayedCall(index * 2, createFluidAnimation);
  });

}

// handleBlobs();

export function parallaxCiao(){
  const ciao = document.querySelector('.HeroHome__Ciao'); 
  const iLetter = document.querySelector('.HeroHome__ILetter'); 

  if(!iLetter || !ciao) return;

  ciao.addEventListener('mouseover', () => { 
    gsap.to(iLetter, {
      width: '11.5rem',
      duration: 0.5,
      ease: 'power2.out',
    });
  });
  
  ciao.addEventListener('mouseleave', () => { 
    gsap.to(iLetter, {
      width: '2rem',
      duration: 0.5,
      ease: 'power2.out',
    });
  });

  const initialTl = gsap.timeline();
  initialTl.to(iLetter, {
    width: '11.5rem',
    duration: 0.5,
    ease: 'power2.out',
  })
  initialTl.to(iLetter, {
    width: '2rem',
    duration: 0.5,
    ease: 'power2.out',
  }) 
  initialTl.from(".line span", 1.8, {
    y: '150',
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }, '-=1.5') 

  
  
  if (window.innerWidth < 768) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.HeroHome',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });

    tl.to(iLetter, {
      width: '11.5rem',
    })
    tl.to(iLetter, {
      width: '2rem',
    }) 
  }

}


parallaxCiao();