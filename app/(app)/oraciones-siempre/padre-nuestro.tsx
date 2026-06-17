import {
  OracionSiempreLayout,
  PrayerParagraph,
} from '../../../components/oraciones-siempre/OracionSiempreLayout';

export default function PadreNuestroScreen() {
  return (
    <OracionSiempreLayout title="Padre Nuestro">
      <PrayerParagraph>
        Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino;
        hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día;
        perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos
        dejes caer en la tentación, y líbranos del mal. Amén.
      </PrayerParagraph>
    </OracionSiempreLayout>
  );
}
