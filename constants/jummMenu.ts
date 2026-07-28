export const GUIA_JUMM_PDF_URL =
  'https://drive.google.com/file/d/1uBLE5kYMXIgkPTwEusb6xAi6m_rV18qI/view?usp=sharing';

export const UNIFORMES_JUMM_PDF_URL =
  'https://drive.google.com/file/d/12I5N67MQNa3iXsGRaGxeswImr-L6eWE3/view?usp=sharing';

export type JummMenuItem = {
  id: string;
  title: string;
  href?: `/(app)/${string}`;
  externalUrl?: string;
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
    externalUrl: GUIA_JUMM_PDF_URL,
  },
  {
    id: 'uniformes',
    title: 'Uniformes del JUMM',
    externalUrl: UNIFORMES_JUMM_PDF_URL,
  },
];
