import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

type PrayerSectionProps = {
  title: string;
  initial: string;
  text: string;
};

function PrayerSection({ title, initial, text }: PrayerSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.prayerText}>
        <Text style={styles.dropCap}>{initial}</Text>
        {text}
      </Text>
    </View>
  );
}

export default function AccionGraciasPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Acción de Gracias' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>ACCIÓN DE GRACIAS{'\n'}DESPUÉS DE LA COMUNIÓN</Text>

        <PrayerSection
          title="ALMA DE CRISTO"
          initial="A"
          text="lma de Cristo, santifícame. / Cuerpo de Cristo, sálvame. / Sangre de Cristo, embriágame. / Agua del costado de Cristo, lávame. / Pasión de Cristo, confórtame. / Oh buen Jesús, óyeme. / Dentro de tus llagas, escóndeme. / No permitas que me separe de ti. / Del maligno enemigo, defiéndeme. / En la hora de mi muerte, llámame. / Y mándame ir a ti, / para que con tus Ángeles y Santos / te alabe y te bendiga, / por los siglos de los siglos. Amén."
        />

        <PrayerSection
          title="OBLACIÓN DE SAN IGNACIO"
          initial="T"
          text="omad, Señor, y recibid / toda mi libertad, / mi memoria, / mi entendimiento / y toda mi voluntad; / todo mi haber y mi poseer. / Vos me lo disteis; / a Vos, Señor, lo torno, / todo es vuestro; / disponed de ello a toda vuestra voluntad, / dadme vuestro amor y vuestra gracia, / que esta me basta. Amén."
        />

        <PrayerSection
          title="A JESUCRISTO CRUCIFICADO"
          initial="M"
          text="iradme, / oh mi amado y buen Jesús, / postrado en vuestra santísima presencia, / os ruego con el mayor fervor / imprimáis en mi corazón / vivos sentimientos / de fe, esperanza y caridad; / verdadero dolor de mis pecados / y propósito firmísimo de jamás ofenderos; / mientras que yo, / con todo el amor y compasión de que soy capaz, / voy contemplando vuestras cinco llagas, / comenzando por aquello que dijo de Vos, ¡oh buen Jesús!, el santo profeta David: / «Han taladrado mis manos y mis pies, / y se pueden contar todos mis huesos»."
        />

        <PrayerSection
          title="ACTO DE CONTRICIÓN"
          initial="N"
          text="o me mueve, mi Dios, para quererte, / el cielo que me tienes prometido, / ni me mueve el infierno tan temido / para dejar por eso de ofenderte. / Tú me mueves, Señor, / muéveme el verte clavado en una Cruz y escarnecido; / muéveme el ver tu cuerpo tan herido; / muévenme tus afrentas y tu muerte. / Muéveme, en fin, tu amor, y en tal manera / que, aunque no hubiera cielo, yo te amara, / y, aunque no hubiera infierno, te temiera. / No me tienes que dar porque te quiera, / pues, aunque lo que espero no esperara, / lo mismo que te quiero te quisiera."
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 28,
    paddingBottom: 40,
  },
  mainTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5,
    lineHeight: 30,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  prayerText: {
    fontFamily: Fonts.regular,
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 28,
  },
  dropCap: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    color: Colors.liturgicalRed,
    lineHeight: 28,
  },
});
