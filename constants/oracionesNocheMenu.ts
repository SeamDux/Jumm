export type OracionNocheMenuItem = {
  id: string;
  title: string;
  href: `/(app)/${string}`;
};

export const oracionesNocheMenu: OracionNocheMenuItem[] = [
  {
    id: 'buen-dormir',
    title: 'Oración para un Buen Dormir',
    href: '/(app)/oraciones-noche/buen-dormir',
  },
  {
    id: 'antes-examen',
    title: 'Oración antes del Examen de Conciencia de la noche',
    href: '/(app)/oraciones-noche/antes-examen',
  },
  {
    id: 'examen-noche',
    title: 'Examen de Conciencia por la noche',
    href: '/(app)/oraciones-noche/examen-noche',
  },
  {
    id: 'acto-contricion-accion-gracias',
    title: 'Acto de Contrición y de Acción de gracias',
    href: '/(app)/oraciones-noche/acto-contricion-accion-gracias',
  },
  {
    id: 'abandono',
    title: 'Acto de abandono',
    href: '/(app)/oraciones-noche/abandono',
  },
  {
    id: 'acto-contricion',
    title: 'Acto de contrición',
    href: '/(app)/oraciones-noche/acto-contricion',
  },
];
