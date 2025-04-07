import { gsap } from 'gsap';

export function setupClientFooter() {
  const footer = document.querySelector('.Footer') as HTMLElement;
  const blobs = document.querySelectorAll('.Footer__Blob');

  // Funzione per generare un punto casuale all'interno di un range
  const randomPoint = (min: number, max: number) => gsap.utils.random(min, max);

  // Funzione per generare una posizione casuale all'interno del footer
  const getRandomPosition = (blob: Element) => {
    const footerRect = footer.getBoundingClientRect();
    const blobElement = blob as HTMLElement;
    const blobSize = window.innerWidth * 0.4; // 40vw come nel CSS
    
    // Calcoliamo i limiti sicuri per mantenere il blob sempre visibile
    // Lasciamo almeno 2/3 del blob sempre visibile
    const safeMargin = blobSize * 0.66;
    
    return {
      x: randomPoint(0, footerRect.width - safeMargin),
      y: randomPoint(0, footerRect.height - safeMargin)
    };
  };

  // Animazione fluida dei blob
  blobs.forEach((blob, index) => {
    // Posizione iniziale casuale
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

      // Animazione continua della deformazione
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

    // Delay iniziale diverso per ogni blob
    gsap.delayedCall(index * 2, createFluidAnimation);
  });

}

setupClientFooter();
