import { useState, type ReactNode } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type DayPrayer = {
  id: string;
  title: string;
  text: string;
};

const dailyPrayers: DayPrayer[] = [
  {
    id: '1',
    title: 'Día 1',
    text: 'Oh Jesús, Rey de las inteligencias, no solo porque aun como hombre poseéis más profundos conocimientos que todos los sabios de la tierra, sino porque sois la misma Verdad. Oh luz eterna, iluminadnos.',
  },
  {
    id: '2',
    title: 'Día 2',
    text: 'Oh Jesús, Rey de las voluntades, cuya voluntad humana estaba tan perfectamente conforme con la Voluntad Divina hasta querer incluso sujetarse a los hombres, os adoro y digo: Hágase vuestra voluntad.',
  },
  {
    id: '3',
    title: 'Día 3',
    text: 'Oh Jesús, Rey de los corazones, por el gran amor que nos profesáis, pues habéis querido reinar desde la Cruz por nuestro amor, os amo sobre todas las cosas.',
  },
  {
    id: '4',
    title: 'Día 4',
    text: 'Oh Jesús, Rey de los Ángeles y de los hombres, sobre ellos reináis, no solo como Dios, sino como Hombre; y tenéis este reinado esencial y absoluto por vuestra unión personal con Dios. Os adoro y me sujeto a vos.',
  },
  {
    id: '5',
    title: 'Día 5',
    text: 'Oh Jesús, Rey legislador, cuyas leyes tenemos obligación de guardar, ya para mostraros el amor que os tenemos, ya para salvar eternamente nuestra alma; quiero guardar vuestra santa ley, Jesús; quiero salvarme.',
  },
  {
    id: '6',
    title: 'Día 6',
    text: 'Oh Jesús, Rey y Juez justo y eterno, que castigáis al malo y premiáis al bueno, me sujeto a vos y os pido que no me condenéis cuando mi pobre alma se presente ante vuestro divino tribunal. Jesús, salvadme.',
  },
  {
    id: '7',
    title: 'Día 7',
    text: 'Oh Jesús, Rey de las naciones, reinad en ellas, levantad entre ellas la blanca bandera de la paz; mirad cuántos dioses roen los fundamentos de las sociedades modernas. Dad paz a los hombres de buena voluntad.',
  },
  {
    id: '8',
    title: 'Día 8',
    text: 'Oh Jesús, Rey de las familias, reinad también en ellas. En muchas reina vuestro enemigo, se desprecian vuestras leyes y domina prácticamente el paganismo. Oh Jesús, salvad a las familias.',
  },
  {
    id: '9',
    title: 'Día 9',
    text: 'Oh Jesús, Rey dominador del infernal enemigo, ejerced sobre él vuestro poder, reprimid su astucia, desbaratad sus planes y haced que todos, del uno al otro polo, os aclamen por su Rey y Señor.',
  },
];

const deprecaciones = [
  'Cristo, Modelo, Maestro y Pastor nuestro, congrega a tus ovejas de entre los pueblos y apaciéntalas en ricos pastizales y en fértiles dehesas. Padrenuestro.',
  'Guía y Salvador nuestro, reúne a todos los hombres en un solo pueblo; cura a los enfermos, busca a los que se han perdido, guarda a los fuertes, llama a los alejados, recoge a los descarriados, alienta a los desanimados. Padrenuestro.',
  'Juez eterno, cuando devuelvas a Dios Padre tu reino, colócanos a tu derecha y haz que heredemos el reino preparado para nosotros desde la creación del mundo. Padrenuestro.',
];

const litanyExchanges: { v: string; r: string }[] = [
  {
    v: 'Príncipe de la paz, heredero de las naciones, quebranta las armas de la guerra y haz entrar a la humanidad, con todo lo bueno que tiene, en el reino de tu Iglesia, que el Padre ha puesto en tus manos.',
    r: '«Venga a nosotros tu reino, Señor».',
  },
  {
    v: 'Oh Jesucristo, Rey del Universo, cuyo cuerpo es la Iglesia y cuyo reino no tendrá fin; que todos unidos en el Espíritu Santo te reconozcamos como nuestra Cabeza.',
    r: '«Venga a nosotros tu reino, Señor».',
  },
  {
    v: 'Oh Jesucristo, Príncipe absoluto de los siglos y Árbitro supremo de las mentes y de los corazones: Somete a los espíritus rebeldes; que encuentren rumbo los perdidos y que en un solo aprisco se congreguen.',
    r: '«Venga a nosotros tu reino, Señor».',
  },
  {
    v: 'Jesús, Dios-Hombre verdadero, al que le ha sido dado poder real y dominio total; que seas obedecido en todos los órdenes, que legisles y juzgues a todos los pueblos y naciones, y pongas un dique al torrente laicista que todo lo invade.',
    r: '«Venga a nosotros tu reino, Señor».',
  },
];

function VersicleLine({ label, text }: { label: 'V' | 'R'; text: string }) {
  return (
    <Text style={styles.line}>
      <Text style={styles.prefix}>{label}. </Text>
      <Text style={styles.bodyText}>{text}</Text>
    </Text>
  );
}

function SectionHeading({ children }: { children: string }) {
  return <Text style={styles.sectionHeading}>{children}</Text>;
}

function Instruction({ children }: { children: React.ReactNode }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

function CollapsibleSection({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <View style={styles.accordionItem}>
      <Pressable
        style={[styles.accordionHeader, expanded && styles.accordionHeaderExpanded]}
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        accessibilityLabel={title}
      >
        <Text style={styles.accordionTitle}>{title}</Text>
        <MaterialCommunityIcons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={Colors.liturgicalRed}
        />
      </Pressable>
      {expanded ? <View style={styles.accordionBody}>{children}</View> : null}
    </View>
  );
}

export default function NovenaJesucristoReyScreen() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Novena a Jesucristo Rey' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>NOVENA A JESUCRISTO REY</Text>

        <View style={styles.block}>
          <SectionHeading>1. INICIO</SectionHeading>
          <VersicleLine label="V" text="Novena a Jesucristo Rey. Por la señal. Acto de contrición." />
        </View>

        <View style={styles.block}>
          <SectionHeading>2. CANTO DE ENTRADA</SectionHeading>
          <Instruction>
            Se anuncia el canto de entrada (número, página) que será relativo a Jesucristo Rey o, al
            menos, a la persona de Jesucristo.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>3. ANTÍFONA</SectionHeading>
          <Instruction>La reza solo el que dirige.</Instruction>
          <VersicleLine
            label="V"
            text="Oh Jesús, Dios y Hombre verdadero, os reconozco por Rey Universal de todos los siglos; reinad en nosotros, para que podamos reinar con vos en el cielo."
          />
        </View>

        <View style={styles.block}>
          <SectionHeading>4. ORACIÓN INICIAL</SectionHeading>
          <Instruction>La reza solo el que dirige.</Instruction>
          <VersicleLine
            label="V"
            text="Oremos. Oh Rey excelentísimo elegido por el Padre eterno para que rija y gobierne a los hombres; concédeme el obedecer como Tú obedeciste en tu sacratísima Pasión a los designios de tu eterno Padre. Tú que vives y reinas por los siglos de los siglos."
          />
          <VersicleLine label="R" text="Amén." />
        </View>

        <View style={styles.block}>
          <SectionHeading>5. ORACIÓN DE CADA DÍA</SectionHeading>
          <Instruction>
            El que dirige reza la oración, indicando antes el día de la novena (v.gr.: «Día
            primero»). Después de la oración se deja un minuto de silencio.
          </Instruction>
        </View>

        {dailyPrayers.map((day) => (
          <CollapsibleSection
            key={day.id}
            title={day.title}
            expanded={!!expandedIds[day.id]}
            onToggle={() => toggleSection(day.id)}
          >
            <Text style={styles.dayPrayerText}>{day.text}</Text>
          </CollapsibleSection>
        ))}

        <View style={styles.block}>
          <SectionHeading>6. DEPRECACIONES</SectionHeading>
          <Instruction>
            El que dirige recita las deprecaciones. Después de cada una de ellas se reza un
            Padrenuestro de modo alternado, como en el Santo Rosario.
          </Instruction>
          {deprecaciones.map((text, index) => (
            <Text key={index} style={styles.deprecationItem}>
              <Text style={styles.bullet}>☞ </Text>
              <Text style={styles.bodyText}>{text}</Text>
            </Text>
          ))}
        </View>

        <View style={styles.block}>
          <SectionHeading>7. LETANÍAS</SectionHeading>
          <Instruction>
            Las reza el que dirige y los fieles responden, cantando la respuesta.
          </Instruction>
          <VersicleLine
            label="V"
            text="Oremos a Cristo Rey, que es anterior a todo, y en quien todo se mantiene unido y pidámosle:"
          />
          <Text style={styles.line}>
            <Text style={styles.cantorLabel}>Cantor: </Text>
            <Text style={styles.bodyText}>«Venga a nosotros tu reino, Señor».</Text>
          </Text>
          <VersicleLine label="R" text="«Venga a nosotros tu reino, Señor»." />
          {litanyExchanges.map((exchange, index) => (
            <View key={index} style={styles.litanyExchange}>
              <VersicleLine label="V" text={exchange.v} />
              <VersicleLine label="R" text={exchange.r} />
            </View>
          ))}
        </View>

        <View style={styles.block}>
          <SectionHeading>8. ORACIÓN FINAL</SectionHeading>
          <Instruction>La reza solo el que dirige.</Instruction>
          <VersicleLine
            label="V"
            text="Dios todopoderoso y eterno, que quisiste fundar todas las cosas en tu Hijo muy amado, Cristo, primogénito de entre los muertos y el primer resucitado; haznos hoy santos, sin mancha y sin reproche en tu presencia, admite a los difuntos en la gloria de tu Reino; y que toda la creación, liberada de la esclavitud del pecado, sirva a tu Majestad y te glorifique sin fin. Por Jesucristo nuestro Señor."
          />
          <VersicleLine label="R" text="Amén." />
        </View>

        <View style={styles.block}>
          <SectionHeading>9. CANTO FINAL</SectionHeading>
          <Instruction>
            Se anuncia el canto final (número, página) que será relativo a Jesucristo Rey o, al
            menos, a la persona de Jesucristo.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>10. ACLAMACIÓN DE DESPEDIDA</SectionHeading>
          <Instruction>
            La dice solo el que dirige, sin ninguna respuesta de los fieles.
          </Instruction>
          <VersicleLine label="V" text="¡Viva Cristo Rey!" />
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
    fontSize: 22,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  block: {
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
  instruction: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    marginBottom: 12,
    lineHeight: 24,
  },
  line: {
    marginBottom: 8,
    lineHeight: 26,
  },
  prefix: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.liturgicalRed,
  },
  bodyText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
  },
  cantorLabel: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.liturgicalRed,
  },
  litanyExchange: {
    marginTop: 8,
  },
  accordionItem: {
    marginBottom: 12,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 6,
    gap: 12,
  },
  accordionHeaderExpanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },
  accordionTitle: {
    flex: 1,
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#000000',
  },
  accordionBody: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: Colors.lightGray,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: Colors.white,
  },
  dayPrayerText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
  },
  deprecationItem: {
    marginBottom: 12,
    lineHeight: 26,
  },
  bullet: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.liturgicalRed,
  },
});
