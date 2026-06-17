export type JummMenuItem = {
  id: string;
  title: string;
  href: `/(app)/${string}`;
};

export const jummMenu: JummMenuItem[] = [
  {
    id: 'himno',
    title: 'Himno del JUMM',
    href: '/(app)/jumm/himno',
  },
  {
    id: 'guia',
    title: 'Guía del JUMM',
    href: '/(app)/jumm/guia',
  },
];
