export const AUDIOLIBROS_VOLUMEN_1_URL =
  'https://drive.google.com/drive/folders/1c5qsFLI9DjKNf231ca5nuDigXbUYj0jh?usp=sharing';

export const AUDIOLIBROS_VOLUMEN_2_URL =
  'https://drive.google.com/drive/folders/1xX5uohk2qv3M1fypjaLhBaaNvGK4Y2w0?usp=drive_link';

export type AudiolibrosMenuItem = {
  id: string;
  title: string;
  externalUrl: string;
};

export const audiolibrosMenu: AudiolibrosMenuItem[] = [
  {
    id: 'volumen-1',
    title: 'Volumen 1',
    externalUrl: AUDIOLIBROS_VOLUMEN_1_URL,
  },
  {
    id: 'volumen-2',
    title: 'Volumen 2',
    externalUrl: AUDIOLIBROS_VOLUMEN_2_URL,
  },
];
