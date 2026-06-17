export type AdoracionSantisimoMenuItem = {
  id: string;
  title: string;
  href: `/(app)/${string}`;
};

export const adoracionSantisimoMenu: AdoracionSantisimoMenuItem[] = [
  {
    id: 'quince-minutos',
    title: 'Quince minutos en compañía de Jesús Sacramentado',
    href: '/(app)/adoracion-santisimo/quince-minutos',
  },
  {
    id: 'exposicion',
    title: 'Exposición',
    href: '/(app)/adoracion-santisimo/exposicion',
  },
  {
    id: 'bendicion-reserva',
    title: 'Bendición y Reserva',
    href: '/(app)/adoracion-santisimo/bendicion-reserva',
  },
  {
    id: 'laudes-preces',
    title: 'Laudes Divinæ y Preces Finales',
    href: '/(app)/adoracion-santisimo/laudes-preces',
  },
];
