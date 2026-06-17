import { Linking, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

const HIMNO_AUDIO_URL =
  'https://drive.google.com/file/d/1cbgi9QOcqTxCJjdX58hEz8PBF7egt28Y/view?usp=sharing';

async function openHimnoAudio() {
  try {
    const supported = await Linking.canOpenURL(HIMNO_AUDIO_URL);
    if (supported) {
      await Linking.openURL(HIMNO_AUDIO_URL);
    }
  } catch (error) {
    console.error('Error opening hymn audio:', error);
  }
}

function Stanza({ children, bold = false }: { children: string; bold?: boolean }) {
  return (
    <View style={styles.stanza}>
      <Text style={[styles.stanzaText, bold && styles.stanzaBold]}>{children}</Text>
    </View>
  );
}

export default function HimnoScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Himno del JUMM' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>HIMNO DEL JUMM</Text>

        <TouchableOpacity style={styles.audioButton} onPress={openHimnoAudio}>
          <Text style={styles.audioButtonText}>Escuchar himno</Text>
        </TouchableOpacity>

        <Stanza bold>
          Juventud y Fuerza de la Iglesia, Somos hijos del Eterno Amor // Y caminamos hacia el
          Cielo, Nuestra vida es para Jesús. // Hijos de María, Nuestra Reina y Madre Unidos
          seremos para el mundo Luz.
        </Stanza>

        <Stanza>
          Con la cruz como nuestro estandarte, Avanzamos con pasos de fe. Su presencia en la
          eucaristía, Nos da fuerza para vencer.
        </Stanza>

        <Stanza bold>Juventud y Fuerza de la Iglesia</Stanza>

        <Stanza>
          La alegría, la unión y el trabajo, son pilares para el corazón, el espíritu joven que lucha
          y convierte su vida en acción.
        </Stanza>

        <Stanza bold>Juventud y Fuerza de la Iglesia</Stanza>

        <Stanza>
          Mediadora de todas las Gracias Intercede María ante Dios, Tu Corazón sea nuestro refugio y
          el camino al encuentro con Dios.
        </Stanza>

        <Stanza bold>
          Nuestro Padre Molina será, gran ejemplo de santidad. Y su fuerza anima la misión, de llevar
          a Dios al mundo.
        </Stanza>
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
    marginBottom: 28,
    letterSpacing: 0.5,
  },
  audioButton: {
    alignSelf: 'center',
    backgroundColor: Colors.liturgicalRed,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginBottom: 28,
  },
  audioButtonText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
  stanza: {
    marginBottom: 28,
  },
  stanzaText: {
    fontFamily: Fonts.regular,
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 28,
  },
  stanzaBold: {
    fontFamily: Fonts.bold,
    fontWeight: '700',
  },
});
