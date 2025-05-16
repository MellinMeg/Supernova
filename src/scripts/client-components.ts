// /**
//  * File centralizzato per l'importazione di tutti i moduli client TypeScript
//  * Questo file importa e inizializza tutte le funzionalità client dei componenti
//  */

// // Importazione delle funzioni di setup dai file client
// import { setupClientButton } from '../components/Button/Button.client';
// import { setupClientCodeCard } from '../components/CodeCard/CodeCard.client';
// import { setupClientFooter } from '../components/Footer/Footer.client';
// import { setupClientFooterMenu } from '../components/FooterMenu/FooterMenu.client';
// import { setupHeader } from '../components/Header/header.client';
// import { setupClientHeaderQuotes } from '../components/HeaderQuotes/HeaderQuotes.client';
// import { setupClientHeading } from '../components/Heading/Heading.client';
// import { setupClientsplitText } from '../components/HeroHome/HeroHome.client';
// import { setupClientHomeCards } from '../components/HomeCards/HomeCards.client';
// import { setupClientHomeIntro } from '../components/HomeIntro/HomeIntro.client';
// import { setupClientLenisLoader } from '../components/LenisLoader/LenisLoader.client';
// import { setupClientLogo } from '../components/Logo/Logo.client';
// import { setupClientMenu } from '../components/Menu/Menu.client';
// import { handleMenuMobile } from '../components/MenuMobile/MenuMobile.client';
// import { setupClientMobileNavigation } from '../components/MobileNavigation/MobileNavigation.client';
// import { setupClientRunnerLink } from '../components/RunnerLink/RunnerLink.client';
// import { setupClientStickers } from '../components/Stickers/Stickers.client';

// // Funzione per inizializzare tutti i componenti client
// export function initializeAllClientComponents() {
//   // Inizializza i componenti con funzioni di setup esplicite
//   setupClientButton();
//   setupClientCodeCard();
//   setupClientFooter();
//   setupClientFooterMenu();
//   setupHeader();
//   setupClientHeaderQuotes();
//   setupClientHeading();
//   setupClientsplitText();
//   setupClientHomeCards();
//   setupClientHomeIntro();
//   setupClientLenisLoader();
//   setupClientLogo();
//   setupClientMenu();
//   handleMenuMobile();
//   setupClientMobileNavigation();
//   setupClientRunnerLink();
//   setupClientStickers();
// }

// // Inizializza tutti i componenti quando il DOM è pronto
// document.addEventListener('DOMContentLoaded', () => {
//   initializeAllClientComponents();
// });

// // Esportazione di tutte le funzioni di setup per l'uso individuale
// export {
//   setupClientButton,
//   setupClientCodeCard,
//   setupClientFooter,
//   setupClientFooterMenu,
//   setupHeader,
//   setupClientHeaderQuotes,
//   setupClientHeading,
//   setupClientsplitText,
//   setupClientHomeCards,
//   setupClientHomeIntro,
//   setupClientLenisLoader,
//   setupClientLogo,
//   setupClientMenu,
//   handleMenuMobile,
//   setupClientMobileNavigation,
//   setupClientRunnerLink,
//   setupClientStickers
// };