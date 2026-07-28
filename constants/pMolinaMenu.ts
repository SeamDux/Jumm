export const HIMNO_P_MOLINA_AUDIO_URL =
  'https://drive.google.com/file/d/1q0XwW1na43ZC1--WJSrzcvEGZNjvUDXL/view?usp=drive_link';

export const HIMNO_P_MOLINA_LETRA_URL =
  'https://drive.google.com/file/d/1k2pEM7xdixLoesIneztqG19hDHcLT0Ak/view?usp=drive_link';

export const FOLLETO_SIN_LIMITES_URL =
  'https://drive.google.com/file/d/1H0qzTh5TxBpOKACGCjzJ4LHoUXkwRabN/view?usp=drive_link';

export const AUDIOLIBRO_P_MOLINA_URL =
  'https://youtube.com/playlist?list=PL-F96SgHlT9XXISb0-UiTTdAhO4nb8_gX&si=Q8PVvpxD_M7yOtfs';

export const MENSAJES_DE_LUZ_URL =
  'https://youtube.com/playlist?list=PL-F96SgHlT9Vrb-swqmt3UdnYY9lQNAYI&si=nMOBmDKpPdiTTSVm';

export type PMolinaMenuItem = {
  id: string;
  title: string;
  href?: `/(app)/${string}`;
  externalUrl?: string;
};

export const pMolinaMenu: PMolinaMenuItem[] = [
  {
    id: 'himno-audio',
    title: 'Himno al P. Molina (audio)',
    externalUrl: HIMNO_P_MOLINA_AUDIO_URL,
  },
  {
    id: 'himno-letra',
    title: 'Himno al P. Molina (letra)',
    externalUrl: HIMNO_P_MOLINA_LETRA_URL,
  },
  {
    id: 'folleto-sin-limites',
    title: 'Folleto Sin Límites',
    externalUrl: FOLLETO_SIN_LIMITES_URL,
  },
  {
    id: 'audiolibro',
    title: 'Audiolibro P. Molina',
    externalUrl: AUDIOLIBRO_P_MOLINA_URL,
  },
  {
    id: 'mensajes-de-luz',
    title: 'Mensajes de Luz',
    externalUrl: MENSAJES_DE_LUZ_URL,
  },
];
