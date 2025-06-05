export function handleMenuMobile() { 
  const menuMobile = document.querySelector('.MenuMobile');
  let allHtml = document.querySelector('html'); 

  if (!menuMobile) return;

  menuMobile.addEventListener('click', () => { 
    menuMobile?.classList.toggle('active'); 

    if (menuMobile.classList.contains('active')) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    if( document.body.classList.contains('menu-open')) {
      allHtml?.classList.add('overflow-hidden');
    }
    else {
      allHtml?.classList.remove('overflow-hidden');
    }

  });

}