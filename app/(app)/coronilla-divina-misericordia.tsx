import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

function VersicleLine({
  label,
  text,
  initial,
}: {
  label: 'V' | 'R';
  text: string;
  initial?: string;
}) {
  return (
    <Text style={styles.line}>
      <Text style={styles.prefix}>{label}. </Text>
      {initial ? (
        <>
          <Text style={styles.dropCap}>{initial}</Text>
          <Text style={styles.lineText}>{text}</Text>
        </>
      ) : (
        <Text style={styles.lineText}>{text}</Text>
      )}
    </Text>
  );
}

function SectionHeading({ children }: { children: string }) {
  return <Text style={styles.sectionHeading}>{children}</Text>;
}

function Instruction({ children }: { children: React.ReactNode }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

export default function CoronillaDivinaMisericordiaScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Coronilla de la Divina Misericordia' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>CORONILLA DE LA DIVINA MISERICORDIA</Text>

        <Text style={styles.introLine}>
          <Text style={styles.prefix}>V. </Text>
          <Text style={styles.introBold}>
            Coronilla de la Divina Misericordia. Por la señal. Acto de contrición. Padrenuestro.
            Avemaría. Credo.
          </Text>
        </Text>

        <View style={styles.section}>
          <SectionHeading>1. ORACIONES PREPARATORIAS</SectionHeading>

          <Instruction>La reza solo el que dirige:</Instruction>

          <VersicleLine
            label="V"
            initial="E"
            text="xpiraste, Jesús, pero la fuente de vida brotó para las almas, y el océano de tu misericordia se abrió para el mundo entero. ¡Oh fuente de vida, insondable Misericordia Divina, envuelve al mundo y viértete sobre nosotros!"
          />

          <Instruction>
            Luego, se repite la siguiente jaculatoria{' '}
            <Text style={styles.underline}>tres veces</Text>, a la que responde el pueblo:
          </Instruction>

          <VersicleLine
            label="V"
            text="Oh Sangre y Agua que brotaste del Corazón de Jesús como una fuente de misericordia para nosotros,"
          />
          <VersicleLine label="R" text="En ti confío." />
        </View>

        <View style={styles.section}>
          <Instruction>
            2. En las cuentas del Rosario correspondientes al Padrenuestro se dice:
          </Instruction>

          <VersicleLine
            label="V"
            initial="P"
            text="adre Eterno, yo te ofrezco el Cuerpo y la Sangre, el Alma y la Divinidad de tu amadísimo Hijo, nuestro Señor Jesucristo, como propiciación por nuestros pecados y los del mundo entero."
          />
        </View>

        <View style={styles.section}>
          <Instruction>
            3. En las cuentas del Rosario correspondientes al Avemaría se dice:
          </Instruction>

          <VersicleLine label="V" text="Por su dolorosa Pasión," />
          <VersicleLine label="R" text="Ten misericordia de nosotros y del mundo entero." />
        </View>

        <View style={styles.section}>
          <Instruction>
            4. Al finalizar las cinco decenas de la coronilla se repite{' '}
            <Text style={styles.underline}>tres veces</Text>:
          </Instruction>

          <VersicleLine label="V" text="Santo Dios, Santo Fuerte, Santo Inmortal," />
          <VersicleLine label="R" text="Ten misericordia de nosotros y del mundo entero." />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>
            5. ORACIÓN CONCLUSIVA{' '}
            <Text style={styles.headingNote}>(la reza solo el que dirige)</Text>
          </Text>

          <VersicleLine
            label="V"
            initial="O"
            text="h Dios Eterno, en quien la misericordia es infinita y el tesoro de compasión inagotable, vuelve a nosotros tu mirada bondadosa y aumenta tu misericordia en nosotros, para que en los momentos difíciles no nos desesperemos ni nos desalentemos, sino con gran confianza, nos sometamos a tu Santa Voluntad, que es el amor y la misericordia mismos."
          />
        </View>

        <View style={styles.section}>
          <Instruction>6. Se concluye con la Salve Regina (p. 71).</Instruction>
        </View>
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
    fontSize: 20,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  introLine: {
    marginBottom: 24,
    lineHeight: 26,
  },
  introBold: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeading: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  headingNote: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '400',
  },
  instruction: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    marginBottom: 12,
    lineHeight: 24,
  },
  underline: {
    textDecorationLine: 'underline',
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
  dropCap: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    color: Colors.liturgicalRed,
    lineHeight: 28,
  },
});
