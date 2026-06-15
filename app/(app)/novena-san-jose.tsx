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
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

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
    text: 'Glorioso Patriarca san José, Patrono de la Iglesia universal, que por tu gran santidad e insigne prudencia tuviste el honor de ser en tantos peligros el guardián de María y de Jesús, guárdame también con tu protección continua, puesto que soy hijo de María y hermano de Jesús. Amén.',
  },
  {
    id: '2',
    title: 'Día 2',
    text: 'Glorioso Patriarca san José, que encontraste tu felicidad y santificación en medio del trabajo, alcánzame que, libre de la ociosidad, madre de todos los vicios, me santifique cumpliendo mis deberes de cada día. Amén.',
  },
  {
    id: '3',
    title: 'Día 3',
    text: 'Glorioso Patriarca san José, que supiste llevar con tanta paciencia los sufrimientos de Belén, de Egipto y de Nazaret, alcánzame del Señor hallar en medio de las tribulaciones, llevadas con paciencia, mi santificación. Amén.',
  },
  {
    id: '4',
    title: 'Día 4',
    text: 'Glorioso Patriarca san José, maestro y guía de las almas consagradas, que diste prueba de tu religiosidad acudiendo con tanto fervor a las fiestas que en tu tiempo se celebraban al Señor, concédenos ser almas de oración y cumplir perfecta y fervorosamente nuestras obligaciones para con Dios. Amén.',
  },
  {
    id: '5',
    title: 'Día 5',
    text: 'Glorioso Patriarca san José, que viviste con tanta humildad y diste prueba de tan gran silencio, que ni una sola palabra conserva el Evangelio de ti, enséñanos a vivir en la oscuridad y a no buscar que se hable de nosotros, antes que sea nuestra única gloria el servir a la Virgen, Esposa tuya y nuestra Madre, y a Jesucristo, nuestro Dios. Amén.',
  },
  {
    id: '6',
    title: 'Día 6',
    text: 'Glorioso Patriarca san José, que mereciste que el Evangelio te llamase «Varón justo», consíguenos de María y Jesús que, a imitación tuya, vayamos creciendo en santidad hasta el día de nuestra muerte. Amén.',
  },
  {
    id: '7',
    title: 'Día 7',
    text: 'Glorioso patriarca san José, que por tu pureza fuiste elegido para convivir con la Virgen de las vírgenes, María, y el Cordero Inmaculado, Jesús; alcánzanos que nos veamos libres de todos los pecados que afean tan delicada virtud. Amén.',
  },
  {
    id: '8',
    title: 'Día 8',
    text: 'Glorioso patriarca san José, que al obedecer al Ángel, que te ordenaba huir de noche y precipitadamente a Egipto, diste prueba de perfecta obediencia y conformidad con la Voluntad Divina, intercede por nosotros para que también en nosotros arraiguen estas dos grandes virtudes, que tanto resplandecieron en ti. Amén.',
  },
  {
    id: '9',
    title: 'Día 9',
    text: 'Glorioso Patriarca san José, que después de haber vivido santamente con Jesús y María, tuviste la dicha de morir en sus brazos, alcánzanos, tú que eres Patrono de la buena muerte, morir en tus brazos y en los de Jesús y María. Amén.',
  },
];

const deprecaciones = [
  'Patrono de la Iglesia universal, concedednos aquella disponibilidad de voluntad y obediencia de la fe con la que aceptasteis la tarea que Dios Padre os encomendó. Padrenuestro.',
  'Custodio insigne del Redentor, purificad y santificad las familias cristianas para que sean santuarios de amor y cunas de vida a semejanza de vuestra unión virginal con María, la Madre del Redentor. Padrenuestro.',
  'Modelo acabado y pleno de paternidad, enseñadnos a ser ministros de salvación en el ejercicio fiel, noble y prudente de la autoridad en los servicios que nuestros deberes nos exijan. Padrenuestro.',
  'Custodio de las divinas gracias y espejo de santidad, alcanzadme caridad contra egoísmo, humildad contra soberbia, mansedumbre contra ira, prudencia contra ligereza, fortaleza contra pusilanimidad. Padrenuestro.',
  'Consuelo de los afligidos y esperanza de los enfermos, alcanzad para el mundo la pobreza de espíritu, la virginidad de corazón y la misericordia. Padrenuestro.',
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

export default function NovenaSanJoseScreen() {
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
      <Stack.Screen options={{ title: 'Novena a San José' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>NOVENA A SAN JOSÉ</Text>

        <View style={styles.block}>
          <SectionHeading>1. INICIO</SectionHeading>
          <Text style={styles.line}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.bodyText}>
              Novena al glorioso Patriarca san José, Esposo de María. Por la señal. Acto de
              contrición.
            </Text>
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>2. CANTO DE ENTRADA</SectionHeading>
          <Instruction>
            Se anuncia el canto de entrada (número, página) que será relativo a san José.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>3. SÚPLICA A SAN JOSÉ</SectionHeading>
          <Instruction>El que dirige comienza, y todos rezan al unísono:</Instruction>
          <Text style={styles.prayerText}>
            Oh Custodio y Padre de vírgenes, glorioso san José, a cuya fiel guarda fueron
            encomendadas la misma Inocencia, Cristo Jesús y la Virgen de las vírgenes, María. Por
            estos dos seres queridos, Jesús y María, os ruego y suplico me alcancéis la gracia de
            que, manteniéndome puro en la mente, limpio en el corazón y casto en el cuerpo, sea
            siempre siervo fiel de Jesús y de María. Amén.
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>4. ORACIÓN PARA TODOS LOS DÍAS</SectionHeading>
          <Instruction>La reza solo el que dirige la novena.</Instruction>
          <Text style={styles.line}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.bodyText}>
              Oh gloriosísimo Padre de Jesús, Esposo de María, Patriarca y Protector de la santa
              Iglesia, a quien el Padre eterno confió el cuidado de gobernar, regir y defender en la
              tierra a la Sagrada Familia; protegednos también a nosotros que pertenecemos, como
              fieles católicos, a la santa familia de vuestro Hijo, que es la Iglesia Romana, y
              conseguidnos los bienes necesarios de esta vida, y, sobre todo, los auxilios
              espirituales para la vida eterna. Alcanzadnos especialmente estas tres gracias: La de
              no cometer jamás ningún pecado mortal ni venial plenamente advertido, principalmente
              contra la castidad; la de un sincero amor y devoción a Jesús y a María, y la de una
              buena muerte, recibiendo bien los últimos sacramentos.
            </Text>
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>5. ORACIONES DE CADA DÍA</SectionHeading>
          <Instruction>
            Se reza la oración del día correspondiente y se pide la gracia.
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
            El que dirige recite las deprecaciones. Después de cada una de ellas se reza un
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
          <SectionHeading>7. ORACIÓN DEL PAPA LEÓN XIII</SectionHeading>
          <Instruction>La reza solo el que dirige la novena.</Instruction>
          <Text style={styles.line}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.bodyText}>
              Recurrimos a vos en nuestra tribulación, bienaventurado José, y después de haber
              implorado el socorro de vuestra santísima Esposa, solicitamos también confiadamente
              vuestro patrocinio. Por el afecto que os unió con la Inmaculada Virgen Madre de Dios,
              por el paternal amor con que tratasteis al Niño Jesús, os suplicamos que nos ayudéis
              a entrar en posesión de la herencia que Jesucristo nos legó con su Sangre y que nos
              asistáis con vuestro poder y nos socorráis en nuestras necesidades. Proteged, oh
              providentísimo custodio de la Sagrada Familia, la raza elegida de Jesucristo;
              preservadnos amantísimo padre, de toda mancha de error y corrupción; sednos propicio y
              asistidnos desde el cielo, muy poderoso libertador, en nuestras luchas con el poder de
              las tinieblas, y como en otro tiempo librasteis al Niño Jesús de inminente peligro de
              muerte, defended hoy a la santa Iglesia de Dios de las emboscadas del enemigo y de toda
              adversidad. Concedednos vuestra perpetua protección a fin de que sostenidos por vuestro
              ejemplo y auxilio, podamos vivir santamente, morir cristianamente y obtener la eterna
              bienaventuranza del cielo. Amén.
            </Text>
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>8. CANTO FINAL</SectionHeading>
          <Instruction>
            Se anuncia el canto final (número, página) que será relativo a san José.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>9. ACLAMACIÓN DE DESPEDIDA</SectionHeading>
          <VersicleLine label="V" text="Santo Patriarca José," />
          <VersicleLine label="R" text="Ruega por nosotros." />
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
  prayerText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
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
