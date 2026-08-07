export type OracionSiempreMenuItem = {
  id: string;
  title: string;
  href: `/(app)/${string}`;
};

export const oracionesSiempreMenu: OracionSiempreMenuItem[] = [
  { id: 'senal-cruz', title: 'Señal de la Cruz', href: '/(app)/oraciones-siempre/senal-cruz' },
  {
    id: 'acto-contricion',
    title: 'Acto de Contrición',
    href: '/(app)/oraciones-siempre/acto-contricion',
  },
  {
    id: 'ofrecimiento-obras',
    title: 'Ofrecimiento de Obras',
    href: '/(app)/oraciones-siempre/ofrecimiento-obras',
  },
  { id: 'padre-nuestro', title: 'Padre Nuestro', href: '/(app)/oraciones-siempre/padre-nuestro' },
  { id: 'ave-maria', title: 'Ave María', href: '/(app)/oraciones-siempre/ave-maria' },
  { id: 'gloria', title: 'Gloria', href: '/(app)/oraciones-siempre/gloria' },
  { id: 'credo', title: 'Credo', href: '/(app)/oraciones-siempre/credo' },
  { id: 'angelus', title: 'Ángelus', href: '/(app)/oraciones-siempre/angelus' },
  {
    id: 'oracion-papa',
    title: 'Oración por el Papa',
    href: '/(app)/oraciones-siempre/oracion-papa',
  },
  {
    id: 'regina-coeli',
    title: 'Regina Coeli - Alégrate Reina del Cielo (Tiempo Pascual)',
    href: '/(app)/oraciones-siempre/regina-caeli',
  },
  {
    id: 'vocaciones-sacerdotales',
    title: 'Oración por las Vocaciones Sacerdotales',
    href: '/(app)/oraciones-siempre/vocaciones-sacerdotales',
  },
  {
    id: 'vocaciones-religiosas',
    title: 'Oración por las Vocaciones Religiosas',
    href: '/(app)/oraciones-siempre/vocaciones-religiosas',
  },
  {
    id: 'oraciones-noche',
    title: 'Oraciones de la Noche',
    href: '/(app)/oraciones-noche',
  },
];
