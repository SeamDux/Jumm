export const REINADO_MARIA_REVISTAS_URL = 'https://reinadodemaria.org/categoria/revistas/';

export const REVISTAS_JUMM_URL = 'https://jumm-masculino.com/elementor-935/';

export type RevistasMenuItem = {
  id: string;
  title: string;
  externalUrl: string;
};

export const revistasMenu: RevistasMenuItem[] = [
  {
    id: 'reinado-maria',
    title: 'Reinado de María',
    externalUrl: REINADO_MARIA_REVISTAS_URL,
  },
  {
    id: 'revistas-jumm',
    title: 'Revistas JUMM',
    externalUrl: REVISTAS_JUMM_URL,
  },
];
