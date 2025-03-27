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
      const duration = gsap.utils.random(15, 20);
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

  // Interazione con il mouse migliorata
  // if (footer) {
  //   let isMouseMoving = false;
  //   let mouseTimeout: number;

  //   footer.addEventListener('mousemove', (e: MouseEvent) => {
  //     const { clientX, clientY } = e;
  //     const footerRect = footer.getBoundingClientRect();
  //     const mouseX = clientX - footerRect.left;
  //     const mouseY = clientY - footerRect.top;

  //     isMouseMoving = true;
  //     clearTimeout(mouseTimeout);

  //     blobs.forEach((blob) => {
  //       const blobElement = blob as HTMLElement;
  //       const blobSize = window.innerWidth * 0.4;
  //       const blobRect = blobElement.getBoundingClientRect();
  //       const blobX = parseFloat(blobElement.style.transform.replace(/[^\d.-]/g, '')) || 0;
  //       const blobY = parseFloat(blobElement.style.transform.split(',')[1]) || 0;
        
  //       const blobCenterX = blobX + blobSize / 2;
  //       const blobCenterY = blobY + blobSize / 2;

  //       const deltaX = mouseX - blobCenterX;
  //       const deltaY = mouseY - blobCenterY;
  //       const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
  //       if (distance < 400) {
  //         const repelStrength = (1 - distance / 400) * 100;
  //         const angleX = deltaX / distance;
  //         const angleY = deltaY / distance;

  //         const safeMargin = blobSize * 0.66;
  //         const newX = clamp(
  //           blobX - (angleX * repelStrength),
  //           0,
  //           footerRect.width - safeMargin
  //         );
  //         const newY = clamp(
  //           blobY - (angleY * repelStrength),
  //           0,
  //           footerRect.height - safeMargin
  //         );

  //         gsap.to(blob, {
  //           x: newX,
  //           y: newY,
  //           scale: 1.1,
  //           duration: 1,
  //           ease: "power2.out"
  //         });
  //       }
  //     });

  //     mouseTimeout = window.setTimeout(() => {
  //       isMouseMoving = false;
  //     }, 100);
  //   });

  //   footer.addEventListener('mouseleave', () => {
  //     isMouseMoving = false;
  //     blobs.forEach((blob) => {
  //       const currentPos = getRandomPosition(blob);
  //       gsap.to(blob, {
  //         x: currentPos.x,
  //         y: currentPos.y,
  //         scale: 1,
  //         duration: 1.5,
  //         ease: "power2.out"
  //       });
  //     });
  //   });
  // }
}

setupClientFooter();
