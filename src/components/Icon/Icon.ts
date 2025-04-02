export interface IconProps {
  /**
   * Variante dell'icona: "base" per l'icona semplice, "bordered" per l'icona con bordo circolare
   * @default "base"
   */
  variant?: "base" | "bordered";
  
  /**
   * Classi CSS aggiuntive
   */
  className?: string;
} 