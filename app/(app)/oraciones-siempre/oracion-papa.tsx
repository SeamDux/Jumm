import {
  OracionSiempreLayout,
  PrayerParagraph,
} from '../../../components/oraciones-siempre/OracionSiempreLayout';

export default function OracionPapaScreen() {
  return (
    <OracionSiempreLayout title="Oración por el Papa">
      <PrayerParagraph>Oremos por el Santo Padre N.</PrayerParagraph>
      <PrayerParagraph>
        El Señor le conserve y le llene de vida, y le haga bienaventurado en la tierra, y no le deje
        caer en manos de sus enemigos. Amén.
      </PrayerParagraph>
      <PrayerParagraph>
        {`Dios nuestro, pastor y guía de todos los fieles,
mira con bondad a tu hijo (nombre del Papa)
a quien constituiste pastor de tu Iglesia,
y sostenlo con tu amor,
para que con su palabra y su ejemplo
conduzca al pueblo que le has confiado
y llegue, juntamente con él, a la vida eterna.
Por nuestro Señor Jesucristo, tu Hijo,
que vive y reina contigo en la unidad del Espíritu Santo.
Amén.`}
      </PrayerParagraph>
    </OracionSiempreLayout>
  );
}
