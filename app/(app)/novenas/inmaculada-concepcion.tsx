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
    text: 'María, predestinada. Fue ella predestinada ya desde toda la eternidad para ser Madre de Dios. Tú has sido creado y predestinado para ir al cielo, donde encontrarás tu última y suprema felicidad.',
  },
  {
    id: '2',
    title: 'Día 2',
    text: 'María, preservada del pecado original. Lo tenemos todos al venir a este mundo; se nos borra con el Bautismo. María fue la única pura criatura que se vio libre del mismo. ¿Evitas el pecado?',
  },
  {
    id: '3',
    title: 'Día 3',
    text: 'María, llena de gracia. No solo no tuvo María el primer pecado, sino que Dios la llenó de gracia y dones singulares. Dios te da gracia; no la profanes y no la arrojes con el pecado. ¿Lo haces así?',
  },
  {
    id: '4',
    title: 'Día 4',
    text: 'María, confirmada en gracia. Significa esto que Dios hizo que María no pudiese pecar. Sin embargo, Ella se apartaba de cuanto veía contrario a la ley de Dios. Tú puedes pecar. ¿Qué has de hacer?',
  },
  {
    id: '5',
    title: 'Día 5',
    text: 'María, libre de la inclinación al mal. Uno de los más tristes efectos del primer pecado es la inclinación al mal que sentimos en nuestra naturaleza. María se vio libre de ella. ¿Cómo la contrarrestas?',
  },
  {
    id: '6',
    title: 'Día 6',
    text: 'María, llena de virtudes. Todas las tenía y en grado superior, y las procuraba aumentar cada día. Tú eres pobre de ellas. ¿Qué haces?',
  },
  {
    id: '7',
    title: 'Día 7',
    text: 'María tiene poder sobre el demonio. Desde el instante de su Concepción, María tiene subyugado el poder del demonio, el cual nada puede ni contra Ella ni contra sus devotos. ¿Eres devoto de María?',
  },
  {
    id: '8',
    title: 'Día 8',
    text: 'María, alegría del cielo. ¡Qué júbilo en el cielo al ser María concebida sin pecado! Los Ángeles la aclamaron por su Reina, y la Santísima Trinidad la miró como una Hija de familia. ¿La amas?',
  },
  {
    id: '9',
    title: 'Día 9',
    text: 'María, alegría de la tierra. La Iglesia se alegra en la Concepción Inmaculada de María y todos los fieles se postran reverentes y suplicantes ante su altar. ¿Lo haces tú? ¿Cómo la amas?',
  },
];

type DeprecationItem = {
  initial: string;
  text: string;
  note?: string;
};

const deprecaciones: DeprecationItem[] = [
  {
    initial: 'M',
    text: 'adre mía amadísima, en todos los instantes de mi vida, acordaos de mí, miserable pecador. Avemaría.',
    note: '(cantada)',
  },
  {
    initial: 'A',
    text: 'cueducto de las divinas gracias, concededme abundancia de lágrimas para llorar amargamente mis pecados. Avemaría.',
  },
  {
    initial: 'R',
    text: 'eina de cielos y tierra, sed mi amparo y defensa en las tentaciones de mis enemigos. Avemaría.',
  },
  {
    initial: 'I',
    text: 'nmaculada Virgen María, Madre de Dios, alcanzadme de Vuestro Santísimo Hijo las gracias que necesito para mi salvación. Avemaría.',
  },
  {
    initial: 'A',
    text: 'bogada y refugio de los pecadores, asistidme en el trance de mi muerte y abridme las puertas del cielo. Avemaría.',
    note: '(cantada)',
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

export default function NovenaInmaculadaConcepcionScreen() {
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
      <Stack.Screen options={{ title: 'Novena a la Inmaculada Concepción' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>NOVENA A LA INMACULADA CONCEPCIÓN</Text>

        <View style={styles.block}>
          <SectionHeading>1. INICIO</SectionHeading>
          <VersicleLine
            label="V"
            text="Novena a la Inmaculada Concepción. Por la señal. Acto de contrición."
          />
        </View>

        <View style={styles.block}>
          <SectionHeading>2. CANTO DE ENTRADA</SectionHeading>
          <Instruction>
            Se anuncia el canto de entrada (número, página) que será relativo a la Santísima Virgen
            María.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>3. ORACIÓN INICIAL</SectionHeading>
          <VersicleLine
            label="V"
            text="Oh Señor, curad en nosotros los efectos del pecado y haced que os sirvamos con corazón puro. Os lo pedimos por los méritos de María Inmaculada."
          />
        </View>

        <View style={styles.block}>
          <SectionHeading>4. MEDITACIÓN DE CADA DÍA</SectionHeading>
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
          <SectionHeading>5. DEPRECACIONES</SectionHeading>
          <Instruction>
            El que dirige recita las deprecaciones. Después de cada una de ellas se reza un Avemaría
            de modo alternado, como en el Santo Rosario, excepto la primera y la última, que son
            cantadas.
          </Instruction>
          {deprecaciones.map((item, index) => (
            <Text key={index} style={styles.deprecationItem}>
              <Text style={styles.bullet}>☞ </Text>
              <Text style={styles.deprecationInitial}>{item.initial}</Text>
              <Text style={styles.bodyText}>{item.text}</Text>
              {item.note ? <Text style={styles.deprecationNote}> {item.note}</Text> : null}
            </Text>
          ))}
        </View>

        <View style={styles.block}>
          <SectionHeading>6. ORACIÓN FINAL</SectionHeading>
          <Instruction>La reza solo el que dirige.</Instruction>
          <VersicleLine
            label="V"
            text="Oremos: Oh Virgen, sois pura e inmaculada; compadeceos y rogad por nosotros, que estamos tan llenos de miserias y pecados, y hacednos puros y santos. Así sea."
          />
        </View>

        <View style={styles.block}>
          <SectionHeading>7. CANTO FINAL</SectionHeading>
          <Instruction>
            Se anuncia el canto final (número, página) que será relativo a la Santísima Virgen María.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>8. ACLAMACIÓN DE DESPEDIDA</SectionHeading>
          <VersicleLine label="V" text="Ave María purísima," />
          <VersicleLine label="R" text="Sin pecado concebida." />
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
  deprecationInitial: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.liturgicalRed,
  },
  deprecationNote: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
  },
});
