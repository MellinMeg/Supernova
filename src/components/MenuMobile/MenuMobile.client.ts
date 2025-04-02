
export function handleMenuMobile() { 
  const menuToggle = document.querySelector('.MenuMobile__Toggle');
  const closeButton = document.querySelector('.MenuMobile__CloseButton');
  const mobileNav = document.querySelector('.MenuMobile__Nav');
  
  const closeMenu = () => {
    mobileNav?.classList.remove('open');
    menuToggle?.classList.remove('active');
  };

  const openMenu = () => {
    mobileNav?.classList.add('open');
    menuToggle?.classList.add('active');
  };
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', openMenu);
  }

  if (closeButton && mobileNav) {
    closeButton.addEventListener('click', closeMenu);
  } 
}

handleMenuMobile();
