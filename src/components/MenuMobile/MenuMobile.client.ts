
export function handleMenuMobile() { 
  const menuMobile = document.querySelector('.MenuMobile');

  if (!menuMobile) return;

  const openMenu = () => { 
    menuMobile?.classList.toggle('active');
  };

  menuMobile.addEventListener('click', openMenu);

  // const closeButton = document.querySelector('.MenuMobile__CloseButton');
  // const mobileNav = document.querySelector('.MenuMobile__Nav');
  
  // const closeMenu = () => {
  //   mobileNav?.classList.remove('open');
  //   menuMobile?.classList.remove('active');
  // };

  // const openMenu = () => {
  //   mobileNav?.classList.add('open');
  //   menuMobile?.classList.add('active');
  // };
  
  // if (menuMobile && mobileNav) {
  //   menuMobile.addEventListener('click', openMenu);
  // }

  // if (closeButton && mobileNav) {
  //   closeButton.addEventListener('click', closeMenu);
  // } 
}

handleMenuMobile();
