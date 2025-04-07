import { gsap } from "gsap";

export function handleMenuMobile() { 
  const menuMobile = document.querySelector('.MenuMobile');
  let allHtml = document.querySelector('html'); 

  if (!menuMobile) return;

  menuMobile.addEventListener('click', () => { 
    menuMobile?.classList.toggle('active'); 
    document.body.classList.toggle('menu-open');

    if( document.body.classList.contains('menu-open')) {
      allHtml?.classList.add('overflow-hidden');
    }
    else {
      allHtml?.classList.remove('overflow-hidden');
    }

    const logo = document.querySelector('.Logo');
    if(!logo) return;
    
    // gsap.to(logo, {
      
    // });
    
  });
  

}

handleMenuMobile();
