import {
  OracionSiempreLayout,
  PrayerParagraph,
} from '../../../components/oraciones-siempre/OracionSiempreLayout';

export default function SenalCruzScreen() {
  return (
    <OracionSiempreLayout title="Señal de la Cruz">
      <PrayerParagraph>
        Por la señal de la Santa Cruz, de nuestros enemigos líbranos Señor, Dios nuestro.
      </PrayerParagraph>
      <PrayerParagraph>
        {`En el nombre del Padre, y del Hijo, y del Espíritu Santo.\nAmén.`}
      </PrayerParagraph>
    </OracionSiempreLayout>
  );
}
