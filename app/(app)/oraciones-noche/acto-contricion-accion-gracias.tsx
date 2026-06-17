import {
  OracionSiempreLayout,
  PrayerParagraph,
} from '../../../components/oraciones-siempre/OracionSiempreLayout';

export default function ActoContricionAccionGraciasScreen() {
  return (
    <OracionSiempreLayout
      title="Acto de Contrición y de Acción de gracias"
      headerTitle="Contrición y Acción de gracias"
    >
      <PrayerParagraph>
        {`En el nombre † del Padre, y del Hijo, y del Espíritu Santo.\nAmén.`}
      </PrayerParagraph>
      <PrayerParagraph>
        {`Te doy gracias, Dios mío, por todos los beneficios que hoy me has concedido. Te pido perdón de todas las faltas que he cometido durante este día; me pesa de todo corazón haberte ofendido y propongo firmemente nunca más pecar, ayudado de tu divina gracia.`}
      </PrayerParagraph>
    </OracionSiempreLayout>
  );
}
