import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

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

export default function OfrecimientoObrasScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Ofrecimiento de Obras' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>OFRECIMIENTO DE OBRAS</Text>

        <Text style={styles.instruction}>
          En Ejercicios Espirituales, y en otras ocasiones especiales, quien dirige reza un fragmento entre barras y la asamblea lo repite. Comienza diciendo:
        </Text>

        <Text style={styles.versicle}>℣. Ofrecimiento de obras. Por la señal.</Text>

        <PrayerSection
          title="AL SAGRADO CORAZÓN DE JESÚS"
          initial="D"
          text="ivino Corazón de Jesús, / por medio del Corazón Inmaculado de María Santísima / os ofrezco las oraciones, / obras y trabajos del presente día, / para reparar las ofensas que se os hacen / y por las demás intenciones / por las cuales os inmoláis continuamente en el Altar. / Os las ofrezco en especial por el Papa / y por las intenciones del Apostolado de la Oración de este mes."
        />

        <PrayerSection
          title="OBLACIÓN DE SAN IGNACIO"
          initial="T"
          text="omad, Señor, y recibid / toda mi libertad, / mi memoria, / mi entendimiento / y toda mi voluntad; / todo mi haber y mi poseer. / Vos me lo disteis; / a Vos, Señor, lo torno, / todo es vuestro; / disponed de ello a toda vuestra voluntad, / dadme vuestro amor y vuestra gracia, / que esta me basta. Amén."
        />

        <PrayerSection
          title="CONSAGRACIÓN A NUESTRA SEÑORA"
          initial="O"
          text="h Señora mía, oh Madre mía, / yo me ofrezco del todo a vos, / y en prueba de mi filial afecto, / os consagro en este día: / mis ojos, / mis oídos, / mi lengua, / mi corazón; / en una palabra, todo mi ser. / Ya que soy todo vuestro, oh Madre de bondad, / guardadme y defendedme / como cosa y posesión vuestra. Amén."
        />

        <PrayerSection
          title="A SAN JOSÉ"
          initial="O"
          text="h Custodio y Padre de vírgenes, glorioso san José, / a cuya fiel guarda fueron encomendados / la misma Inocencia, Cristo Jesús, / y la Virgen de las vírgenes, María. / Por estos dos seres queridos, Jesús y María, / os ruego y suplico me alcancéis la gracia / que, manteniéndome puro en la mente, / limpio en el corazón / y casto en el cuerpo / sea siempre siervo fiel de Jesús y María. Amén."
        />

        <PrayerSection
          title="AL ÁNGEL DE LA GUARDA"
          initial="Á"
          text="ngel de la guarda, / dulce compañía, / no me desampares de noche ni de día; / no me dejes solo, que me perdería; / ni vivir ni morir en pecado mortal. / Jesús en la vida, / Jesús en la muerte, / Jesús para siempre. Amén, Jesús."
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
  },
  instruction: {
    fontFamily: Fonts.italic,
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  versicle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 28,
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
