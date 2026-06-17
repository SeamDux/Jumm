import {
  OracionSiempreLayout,
  PrayerParagraph,
} from '../../../components/oraciones-siempre/OracionSiempreLayout';

export default function AntesExamenScreen() {
  return (
    <OracionSiempreLayout
      title="Oración antes del Examen de Conciencia de la noche"
      headerTitle="Antes del Examen"
    >
      <PrayerParagraph>
        {`Oh Dios, dame en esta hora la gracia de reconocer debidamente mis pecados ante ti, y de arrepentirme de ellos verdaderamente. Borra de tu libro, Señor de misericordia, mis múltiples acciones cometidas contra ti. Perdóname todas las distracciones en la oración, mis pecados de omisión, y mis pecados deliberados contra la conciencia.`}
      </PrayerParagraph>
      <PrayerParagraph>
        {`Dame luz para ver lo que he de hacer, valor para emprenderlo y firmeza para llevarlo a cabo. Que en todas las cosas avance en la obra de santificación, de la realización de tu voluntad; y que en definitiva, por tu misericordia, pueda alcanzar la gloria de tu Reino eterno, por Jesucristo nuestro Señor.`}
      </PrayerParagraph>
    </OracionSiempreLayout>
  );
}
