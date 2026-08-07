export const GUIA_JUMM_PDF_URL =
  'https://drive.google.com/file/d/1uBLE5kYMXIgkPTwEusb6xAi6m_rV18qI/view?usp=sharing';

export const UNIFORMES_JUMM_PDF_URL =
  'https://drive.google.com/file/d/12I5N67MQNa3iXsGRaGxeswImr-L6eWE3/view?usp=sharing';

export const VIDEO_INTRODUCTARIO_JUMM_URL = 'https://www.youtube.com/watch?v=SiGU3oh85p8';

export const SITIO_WEB_JUMM_URL = 'https://jumm-masculino.com';

export type JummMenuItem = {
  id: string;
  title: string;
  href?: `/(app)/${string}`;
  externalUrl?: string;
};

export const jummMenu: JummMenuItem[] = [
  {
    id: 'video-introductorio',
    title: 'Video introductorio',
    externalUrl: VIDEO_INTRODUCTARIO_JUMM_URL,
  },
  {
    id: 'sitio-web',
    title: 'Sitio web JUMM',
    externalUrl: SITIO_WEB_JUMM_URL,
  },
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
