import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

type Language = 'es' | 'la';

type PrayerExchange = {
  v: string;
  r: string;
  bracketed?: boolean;
  repetition?: string;
};

const reginaCaeliEs: PrayerExchange[] = [
  {
    v: 'Alégrate, Reina del cielo, ¡Aleluya!',
    r: 'Porque el que mereciste llevar en tu seno, ¡Aleluya!',
  },
  {
    v: 'Ha resucitado según predijo, ¡Aleluya!',
    r: 'Ruega por nosotros a Dios, ¡Aleluya!',
  },
  {
    v: 'Gózate y alégrate, Virgen María, ¡Aleluya!',
    r: 'Porque ha resucitado Dios verdaderamente, ¡Aleluya!',
  },
  {
    v: 'Oremos. Oh Dios que por la resurrección de tu Hijo, nuestro Señor Jesucristo, te has dignado dar la alegría al mundo, concédenos que por su Madre, la Virgen María, alcancemos el gozo de la vida eterna. Por el mismo Jesucristo nuestro Señor.',
    r: 'Amén.',
  },
  {
    v: 'Gloria al Padre, y al Hijo y al Espíritu Santo.',
    r: 'Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
    bracketed: true,
    repetition: '(3 veces)',
  },
  {
    v: 'Ave María purísima,',
    r: 'Sin pecado concebida.',
  },
];

const reginaCaeliLa: PrayerExchange[] = [
  {
    v: 'Regina cæli, lætáre, Alleluia!',
    r: 'Quia quem meruísti portare, Alleluia!',
  },
  {
    v: 'Resurréxit, sicut díxit, Alleluia!',
    r: 'Ora pro nobis Deum, Alleluia!',
  },
  {
    v: 'Gaude et lætáre, Virgo María, Alleluia!',
    r: 'Quia surréxit Dóminus vere, Alleluia!',
  },
  {
    v: 'Orémus. Deus, qui per resurrectionem Fílii tui, Dómini nostri Iesu Christi, mundum lætificáre dignátus es, præsta quæsumus ut, per eius Genitrícem Virginem Maríam, perpétuæ capiámus gaudia vitæ. Per eúndem Christum Dóminum nostrum.',
    r: 'Amen.',
  },
  {
    v: 'Gloria Patri, et Filio et Spirítui Sancto.',
    r: 'Sicut erat in principio, et nunc et semper, et in sæcula sæculórum. Amen.',
    bracketed: true,
    repetition: '(3 veces)',
  },
  {
    v: 'Ave María puríssima,',
    r: 'Sine labe concepta.',
  },
];

function VersicleLine({
  label,
  text,
  leadingBracket,
  trailingBracket,
  trailingRepetition,
}: {
  label: 'V' | 'R';
  text: string;
  leadingBracket?: boolean;
  trailingBracket?: boolean;
  trailingRepetition?: string;
}) {
  return (
    <Text style={styles.line}>
      {leadingBracket ? <Text style={styles.bracket}>[</Text> : null}
      <Text style={styles.prefix}>{label}. </Text>
      <Text style={styles.lineText}>{text}</Text>
      {trailingRepetition ? (
        <Text style={styles.repetitionInline}> {trailingRepetition}</Text>
      ) : null}
      {trailingBracket ? <Text style={styles.bracket}>]</Text> : null}
    </Text>
  );
}

function PrayerExchangeBlock({ exchange }: { exchange: PrayerExchange }) {
  if (exchange.bracketed) {
    return (
      <View style={styles.exchange}>
        <VersicleLine label="V" text={exchange.v} leadingBracket />
        <VersicleLine
          label="R"
          text={exchange.r}
          trailingBracket
          trailingRepetition={exchange.repetition}
        />
      </View>
    );
  }

  return (
    <View style={styles.exchange}>
      <VersicleLine label="V" text={exchange.v} />
      <VersicleLine label="R" text={exchange.r} />
    </View>
  );
}

function LanguageSwitch({
  language,
  onChange,
}: {
  language: Language;
  onChange: (lang: Language) => void;
}) {
  return (
    <View style={styles.switchContainer}>
      <Pressable
        style={[styles.switchOption, language === 'es' && styles.switchOptionActive]}
        onPress={() => onChange('es')}
      >
        <Text style={[styles.switchText, language === 'es' && styles.switchTextActive]}>
          Español
        </Text>
      </Pressable>
      <Pressable
        style={[styles.switchOption, language === 'la' && styles.switchOptionActive]}
        onPress={() => onChange('la')}
      >
        <Text style={[styles.switchText, language === 'la' && styles.switchTextActive]}>
          Latín
        </Text>
      </Pressable>
    </View>
  );
}

export default function ReginaCaeliScreen() {
  const [language, setLanguage] = useState<Language>('es');
  const exchanges = language === 'es' ? reginaCaeliEs : reginaCaeliLa;

  return (
    <>
      <Stack.Screen options={{ title: 'Regina Caeli' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>REGINA CÆLI</Text>

        <LanguageSwitch language={language} onChange={setLanguage} />

        {exchanges.map((exchange, index) => (
          <PrayerExchangeBlock key={`${language}-${index}`} exchange={exchange} />
        ))}
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
  switchContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: Colors.liturgicalRed,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 28,
  },
  switchOption: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    backgroundColor: Colors.white,
  },
  switchOptionActive: {
    backgroundColor: Colors.liturgicalRed,
  },
  switchText: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.liturgicalRed,
  },
  switchTextActive: {
    fontFamily: Fonts.bold,
    fontWeight: '700',
    color: Colors.white,
  },
  exchange: {
    marginBottom: 20,
  },
  line: {
    textAlign: 'left',
    marginBottom: 6,
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
  repetitionInline: {
    fontFamily: Fonts.italic,
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
  },
  bracket: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.liturgicalRed,
  },
});
