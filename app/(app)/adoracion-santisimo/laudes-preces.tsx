import { Text } from 'react-native';
import {
  AdoracionSantisimoLayout,
  BodyText,
  DropCapLine,
  Rubric,
  SectionHeading,
} from '../../../components/adoracion-santisimo/AdoracionSantisimoLayout';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

export default function LaudesPrecesScreen() {
  return (
    <AdoracionSantisimoLayout
      title="Laudes Divinæ y Preces Finales"
      headerTitle="Laudes y Preces"
    >
      <SectionHeading>Laudes Divinæ</SectionHeading>
      <Text style={{ fontFamily: Fonts.italic, fontSize: 15, fontStyle: 'italic', color: Colors.liturgicalRed, textAlign: 'center', marginBottom: 14 }}>
        (Alabanzas de desagravio)
      </Text>

      <Rubric>
        Acabada la bendición, se rezan las Laudes Divinæ, que son repetidas por el pueblo. Los
        domingos y solemnidades son cantadas por todos al unísono.
      </Rubric>

      <DropCapLine initial="B" text="endito sea Dios." />
      <BodyText>Bendito sea su Santo Nombre.</BodyText>
      <BodyText>Bendito sea Jesucristo, verdadero Dios y verdadero Hombre.</BodyText>
      <BodyText>Bendito sea el Nombre de Jesús.</BodyText>
      <BodyText>Bendito sea su Sacratísimo Corazón.</BodyText>
      <BodyText>Bendita sea su Preciosísima Sangre.</BodyText>
      <BodyText>Bendito sea Jesús en el Santísimo Sacramento del Altar.</BodyText>
      <BodyText>Bendito sea el Espíritu Santo, Paráclito.</BodyText>
      <BodyText>Bendita sea la excelsa Madre de Dios, María Santísima.</BodyText>
      <BodyText>Bendita sea su santa e Inmaculada Concepción.</BodyText>
      <BodyText>
        Bendita sea su gloriosa Asunción{' '}
        <Text style={{ fontFamily: Fonts.italic, fontStyle: 'italic', color: Colors.liturgicalRed }}>
          (a los cielos)
        </Text>
        .
      </BodyText>
      <BodyText>Bendito sea el nombre de María, Virgen y Madre.</BodyText>
      <BodyText>Bendito sea san José, su castísimo Esposo.</BodyText>
      <BodyText>
        Bendito sea Dios en sus Ángeles y en sus Santos.{' '}
        <Text style={{ fontFamily: Fonts.bold, color: Colors.liturgicalRed }}>A</Text>mén.
      </BodyText>

      <SectionHeading>Preces Finales</SectionHeading>

      <DropCapLine initial="S" text="eñor, danos almas víctimas." />
      <BodyText>Señor, danos muchas almas víctimas.</BodyText>
      <BodyText>Señor, danos muchos matrimonios almas víctimas.</BodyText>
      <BodyText>Señor, danos muchos sacerdotes almas víctimas.</BodyText>

      <Rubric>
        Después de rezar las preces finales, se inicia el canto de la reserva. El ministro se pone de
        pie, y reserva el Santísimo Sacramento en el Sagrario.
      </Rubric>
    </AdoracionSantisimoLayout>
  );
}
