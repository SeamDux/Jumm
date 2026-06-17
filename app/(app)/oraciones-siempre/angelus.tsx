import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

type Language = 'es' | 'la';

type AngelusExchange = {
  v: string;
  r: string;
  note?: string;
  bracketed?: boolean;
  repetition?: string;
};

const angelusEs: AngelusExchange[] = [
  {
    v: 'El Ángel del Señor anunció a María,',
    r: 'Y concibió por obra y gracia del Espíritu Santo.',
  },
  {
    v: 'Dios te salve, María, llena eres de gracia, el Señor es contigo, bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.',
    r: 'Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.',
  },
  {
    v: 'He aquí la esclava del Señor,',
    r: 'Hágase en mí según tu palabra.',
    note: 'Avemaría.',
  },
  {
    v: 'Y el Verbo se hizo carne,',
    r: 'Y habitó entre nosotros.',
    note: 'Avemaría.',
  },
  {
    v: 'Ruega por nosotros santa Madre de Dios,',
    r: 'Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo.',
  },
  {
    v: 'Oremos. Te suplicamos, Señor, que derrames tu gracia sobre nuestras almas, para que, habiendo conocido por el anuncio del Ángel la Encarnación de tu Hijo Jesucristo, por los méritos de su Pasión y Cruz, seamos llevados a la gloria de la Resurrección. Por el mismo Jesucristo nuestro Señor.',
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

const angelusLa: AngelusExchange[] = [
  {
    v: 'Ángelus Dómini nuntiávit Maríæ,',
    r: 'Et concépit de Spíritu Sancto.',
  },
  {
    v: 'Ave María, gratia plena, Dóminus tecum, benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus.',
    r: 'Sancta María, Mater Dei, ora pro nobis, peccatóribus, nunc et in hora mortis nostræ. Amen.',
  },
  {
    v: 'Ecce ancílla Dómini,',
    r: 'Fiat mihi secúndum verbum tuum.',
    note: 'Ave María.',
  },
  {
    v: 'Et Verbum caro factum est,',
    r: 'Et habitávit in nobis.',
    note: 'Ave María.',
  },
  {
    v: 'Ora pro nobis sancta Dei Genitrix,',
    r: 'Ut digni efficiámur promissiónibus Christi.',
  },
  {
    v: 'Orémus. Gratiam tuam, quæsumus, Domine, méntibus nostris infúnde: ut qui Angelo nuntiánte, Christi Fílii tui Incarnatiónem cognóvimus, per Passiónem eius et Crucem, ad resurrectiónis gloriam perducamur. Per eúndem Christum Dominum nostrum.',
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

function AngelusExchangeBlock({ exchange }: { exchange: AngelusExchange }) {
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
      {exchange.note ? <Text style={styles.note}>{exchange.note}</Text> : null}
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

export default function AngelusScreen() {
  const [language, setLanguage] = useState<Language>('es');
  const exchanges = language === 'es' ? angelusEs : angelusLa;

  return (
    <>
      <Stack.Screen options={{ title: 'Ángelus' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>ÁNGELUS</Text>

        <LanguageSwitch language={language} onChange={setLanguage} />

        {exchanges.map((exchange, index) => (
          <AngelusExchangeBlock key={`${language}-${index}`} exchange={exchange} />
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
  note: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    marginTop: 4,
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
