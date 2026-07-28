export type NovenaMenuItem = {
  id: string;
  title: string;
  href: `/(app)/${string}`;
};

export const novenasMenu: NovenaMenuItem[] = [
  {
    id: 'san-jose',
    title: 'Novena a San José',
    href: '/(app)/novenas/san-jose',
  },
  {
    id: 'divina-misericordia',
    title: 'Novena a la Divina Misericordia',
    href: '/(app)/novenas/divina-misericordia',
  },
  {
    id: 'nuestra-senora-encuentro-dios',
    title: 'Novena a Nuestra Señora del encuentro con Dios',
    href: '/(app)/novenas/nuestra-senora-encuentro-dios',
  },
  {
    id: 'espiritu-santo',
    title: 'Novena al Espíritu Santo',
    href: '/(app)/novenas/espiritu-santo',
  },
  {
    id: 'jesucristo-rey',
    title: 'Novena a Jesucristo Rey',
    href: '/(app)/novenas/jesucristo-rey',
  },
  {
    id: 'inmaculada-concepcion',
    title: 'Novena a la Inmaculada Concepción',
    href: '/(app)/novenas/inmaculada-concepcion',
  },
];
