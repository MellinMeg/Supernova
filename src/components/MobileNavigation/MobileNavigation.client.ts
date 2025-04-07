import { gsap } from 'gsap';

export function setupClientMobileNavigation() {
  window.addEventListener('DOMContentLoaded', () => {
    const mobileNav = document.querySelector('.MobileNavigation') as HTMLElement;
    const mobileNavItems = document.querySelectorAll('.MobileNavigation li a') as NodeListOf<HTMLElement>;
    const hamburger = document.querySelector('.MenuMobile') as HTMLElement;
    const header = document.querySelector('.Header') as HTMLElement;

    if (!mobileNav || !hamburger || !mobileNavItems || !header) return;

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const tl = gsap.timeline({ paused: true });
    let isOpen = false;

    gsap.set(mobileNav, { opacity: 0, zIndex: -1 });
    gsap.set(mobileNavItems, { translateY: '100%' });

    function animateMenu(open: boolean) {
      tl.clear();

      tl.to(header, {
        duration: 0.25,
        borderRadius: open ? '2.5rem 2.5rem 0 0' : '2.5rem',
        ease: 'power2.inOut',
      })
      .to(mobileNav, {
        opacity: open ? 1 : 0,
        zIndex: open ? 11 : -1,
        duration: 0.4,
        ease: 'power2.inOut',
      }, '<')
      .to(mobileNavItems, {
        translateY: open ? 0 : '100%',
        duration: 0.4,
        ease: 'power2.inOut',
        stagger: open ? 0.1 : -0.1,
      }, '-=0.25');

      hamburger.classList.toggle('active', open);
      tl.play();
    }

    function toggleMenu() {
      isOpen = !isOpen;
      animateMenu(isOpen);
    }

    function updateOnBreakpoint(e: MediaQueryList | MediaQueryListEvent) {
      const isMobile = e.matches;
      hamburger.removeEventListener('click', toggleMenu);

      if (isMobile) {
        gsap.set(mobileNavItems, { translateY: '100%' });
        hamburger.addEventListener('click', toggleMenu);
      } else {
        if (isOpen) {
          animateMenu(false);
          isOpen = false;
        }
      }
    }

    updateOnBreakpoint(mediaQuery);
    mediaQuery.addEventListener('change', updateOnBreakpoint);
    // window.addEventListener('resize', () => updateOnBreakpoint(mediaQuery));
    window.addEventListener('resize', () => {
      if (isOpen) {
        animateMenu(false);
        isOpen = false;
      }
      updateOnBreakpoint(mediaQuery);
    });
    
  });
}

setupClientMobileNavigation();
