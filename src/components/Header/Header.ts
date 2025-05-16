export interface HeaderProps {
  title?: string;
}

const headerData: HeaderProps = { title: "Benvenuto!" };

// Astro esegue TypeScript lato server per default, quindi il tuo codice in header.ts viene eseguito solo in fase di build o nel server, ma non viene caricato nel browser.

export function setupHeader() {
  
}
