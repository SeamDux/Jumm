import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

function VersicleLine({
  label,
  text,
  bold,
}: {
  label: 'V' | 'R';
  text: string;
  bold?: boolean;
}) {
  return (
    <Text style={styles.line}>
      <Text style={styles.prefix}>{label}. </Text>
      <Text style={[styles.lineText, bold && styles.lineTextBold]}>{text}</Text>
    </Text>
  );
}

function MealSection({
  subtitle,
  openingVersicle,
  prayer,
  closingNote,
}: {
  subtitle: string;
  openingVersicle: string;
  prayer: string;
  closingNote: string;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionSubtitle}>{subtitle}</Text>

      <VersicleLine label="V" text={openingVersicle} bold />

      <Text style={styles.prayerParagraph}>{prayer}</Text>

      <VersicleLine label="R" text="Amén." />

      <Text style={styles.plainLine}>{closingNote}</Text>

      <VersicleLine label="V" text="Ave María purísima," />
      <VersicleLine label="R" text="Sin pecado concebida." />
    </View>
  );
}

export default function DeLosAlimentosScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'De los alimentos' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>DE LOS ALIMENTOS</Text>

        <MealSection
          subtitle="Antes de comer."
          openingVersicle="En el nombre del Padre y del Hijo y del Espíritu Santo. Amén."
          prayer="Bendícenos, Señor, y bendice los alimentos que vamos a recibir de tu mano generosa, y te pedimos que nos aprovechen para ocuparnos fielmente en tu santo servicio. Por Jesucristo nuestro Señor."
          closingNote="Padrenuestro. Gloria."
        />

        <MealSection
          subtitle="Después de comer."
          openingVersicle="En el nombre del Padre y del Hijo y del Espíritu Santo. Amén."
          prayer="Te damos gracias, Señor, por los alimentos que hemos recibido de tu mano generosa y te pedimos que nadie carezca de tu pan. Por Jesucristo nuestro Señor."
          closingNote="Avemaría. Gloria."
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
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  section: {
    marginBottom: 28,
  },
  sectionSubtitle: {
    fontFamily: Fonts.italic,
    fontSize: 17,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    textAlign: 'left',
    marginBottom: 14,
  },
  line: {
    textAlign: 'left',
    marginBottom: 8,
    lineHeight: 26,
  },
  prefix: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.liturgicalRed,
  },
  lineText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
  },
  lineTextBold: {
    fontFamily: Fonts.bold,
    fontWeight: '700',
  },
  prayerParagraph: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    lineHeight: 26,
    marginBottom: 8,
  },
  plainLine: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    lineHeight: 26,
    marginBottom: 8,
  },
});
