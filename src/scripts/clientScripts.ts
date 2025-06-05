import { setupClientFooter } from '../components/Footer/Footer.client';
import { setupClientHeaderQuotes } from '../components/HeaderQuotes/HeaderQuotes.client';
import { setupClientHeroHome } from '../components/HeroHome/HeroHome.client';
import { setupClientHomeCards, splitTextHomeCards } from '../components/HomeCards/HomeCards.client';
import { setupClientHomeIntro, splitTitleHomeIntro } from '../components/HomeIntro/HomeIntro.client';
import { setupClientLenisLoader } from '../components/LenisLoader/LenisLoader.client';
import { handleMenuMobile } from '../components/MenuMobile/MenuMobile.client';
import { setupClientMobileNavigation } from '../components/MobileNavigation/MobileNavigation.client';
import { setupClientStickers } from '../components/Stickers/Stickers.client';
import { setupClientTalks } from '../components/Talks/Talks.client';

// Funzione principale che inizializza tutti i componenti client
export function initializeAllClientScripts() {
  // LenisLoader - questo è probabilmente globale e non dipende da un elemento specifico
  setupClientLenisLoader();

  // HeroHome
  if (document.querySelector('.HeroHome')) {
    setupClientHeroHome();
  }
  
  // MenuMobile
  if (document.querySelector('.MenuMobile')) {
    handleMenuMobile();
  }

  // Footer
  if (document.querySelector('.Footer')) {
    setupClientFooter();
  }
  
  // HeaderQuotes
  if (document.querySelector('.HeaderQuotes')) {
    setupClientHeaderQuotes();
  }
  
  // HomeCards
  if (document.querySelector('.HomeCards')) {
    setupClientHomeCards();
    splitTextHomeCards();
  }
  
  // HomeIntro
  if (document.querySelector('.HomeIntro')) {
    setupClientHomeIntro();
    splitTitleHomeIntro();
  }

  // MobileNavigation
  if (document.querySelector('.MobileNavigation')) {
    setupClientMobileNavigation();
  }
  // Stickers
  if (document.querySelector('.Stickers')) {
    setupClientStickers();
  }
  // Talks
  if (document.querySelector('.Talks')) {
    setupClientTalks();
  }
} 