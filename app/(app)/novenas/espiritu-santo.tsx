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
    text: '¡Oh Padre soberano, cuya mano es el Hijo que de ti procede, por quien creaste todas las cosas; y cuyo dedo es el Espíritu Santo, que procede de ambos, por quien las reformaste, escribiendo con Él tu santa ley en los corazones de los hombres! Escríbela en el mío con este dedo de tu diestra con tanta fuerza, que nunca más se borre; y pues Tú me mandas que también la escriba (Prov 7, 3), cooperando con amor al cumplimiento de ella, dame lo que me mandas, para que lo cumpla como quieres.',
  },
  {
    id: '2',
    title: 'Día 2',
    text: 'Gracias te doy, Padre de las misericordias, por la infinita bondad que muestras en dar tal don a tan vil criatura como el hombre, y en juntar tu divino Espíritu con nuestra miserable carne. Si quieres que tu misericordia resplandezca mucho en estas dádivas, aquí tienes un hombre que es todo carne, pero deseoso de ser vivificado con tu Espíritu; dámela, Señor, graciosamente, para que more en mí, y en mi alma te glorifique por la soberana merced que haces al que tan indigno era de recibirla. Amén.',
  },
  {
    id: '3',
    title: 'Día 3',
    text: '¡Oh Espíritu santísimo, río cristalino de agua viva que procedes de la silla de Dios y del Cordero, y riegas la ciudad de Dios y el árbol de la vida, que produce doce frutos al año, cuyas hojas son para la salud de las gentes (Ap 22, 1.2)! Ven a esta breve ciudad de mi alma, riégala con tus copiosas gracias y produce en ella tus doce frutos, comunicándome la caridad, gozo, paz, paciencia, benignidad, bondad, longanimidad, mansedumbre, fe, modestia, continencia y castidad (Gal 5, 22-23). Y para que estos frutos no se sequen ni marchiten, permanece siempre conmigo, conservándolos en su verdor, y aumentando su perfección hasta la vida eterna. Amén.',
  },
  {
    id: '4',
    title: 'Día 4',
    text: 'Gracias te doy, Redentor del mundo, por habernos dado tal sucesor en tu ausencia, que sea para nosotros fuerte protector, dulce consolador y solícito abogado. ¡Oh Espíritu santísimo!, venid a vuestro siervo, que está suspirando por teneros consigo; apadrinadme en las batallas, amparadme en los peligros, consoladme en las aflicciones y abogad por mi en todas las necesidades, haciéndome orar con tal fervor, que alcance remedio en ellas.',
  },
  {
    id: '5',
    title: 'Día 5',
    text: 'Gracias te doy, Padre soberano, por la infinita caridad que te movió a dar tan infinito don, dándonos todo lo bueno que de ti procede. Nos diste al Hijo que procede de tu entendimiento, como Verbo y Palabra tuya; danos también al Espíritu Santo, que procede de tu voluntad, como amor e impulso tuyo. ¿Qué te daré yo por dones tan preciosos? Toma, Señor, mi entendimiento y mi voluntad, con las obras que de ellos proceden, para que todas sean a gloria tuya por los siglos de los siglos. Amén.',
  },
  {
    id: '6',
    title: 'Día 6',
    text: '¡Oh Maestro celestial, que sin ruido de palabras hinches la memoria de verdades e ilustras el entendimiento para que las conozca, de modo que la voluntad se aficione a ellas! Ven a visitar mi alma ruda, ignorante y olvidadiza. Y pues eres Espíritu de verdad, enséñala toda verdad, desterrando de ella toda falsedad y mentira, asistiendo con ella para que conozca todo lo que ha de conocer, y no se olvide de ello al tiempo de obrar.',
  },
  {
    id: '7',
    title: 'Día 7',
    text: '¡Oh Espíritu de vida, que soplando sobre los muertos que vio Ezequiel (Ez 37,9), luego los vivificaste! Ven y sopla sobre las almas muertas por la culpa, para que las vivifiques con tu gracia. ¡Oh viento ábrego del cielo!, sopla en el huerto de mi alma para que con tu inspiración los árboles de las virtudes broten sus olorosos actos (Cant 4, 16) a gloria de Dios y a edificación de mi prójimo. ¡Oh Dios eterno, que con un viento fresco recreaste a los tres mozos que estaban en el horno de Babilonia! (Dn 3, 50), envía sobre mí este viento fresco de tu divino Espíritu, para que temple las llamas que arden en el horno de mi sensualidad, y todas mis potencias se provoquen a darte continuas alabanzas. Amén.',
  },
  {
    id: '8',
    title: 'Día 8',
    text: '¡Oh Espíritu santísimo, si llenases mi memoria y entendimiento de tus ilustraciones, para que los pensamientos que de ellas procediesen celebraran un día de fiesta muy alegre para ti y para mí (Sal 75, 22)! ¡Oh si mi voluntad y apetitos quedasen llenos de tu divinidad, para que mis quereres y deseos, desde hoy fuesen más divinos, conforme en todo con los tuyos! Lléname, Señor, de ti mismo, para que todas mis obras sean llenas delante de ti (Ap 3, 2), sin que haya en ellas cosa vacía que te ofenda y desagrade.',
  },
  {
    id: '9',
    title: 'Día 9',
    text: '¡Oh, quien oyera cómo hablaba la Virgen este día con estas lenguas, inspirada por este divino Espíritu! ¡Qué afectos tan encendidos! ¡Qué alabanzas y acción de gracias brotarían, y como se derretiría en fuego de amor hablando con su Amado! ¡Oh, qué música de lenguas tan diversas, pero muy concertadas, sonaba en aquel cenáculo por aquellos sagrados cantores, rigiéndoles como maestro el Espíritu Santo! ¡Oh Espíritu santísimo, ven a mi alma muda, y enséñale a hablar con varias lenguas de encendidos afectos y, pues me pides que suene mi voz en tus oídos (Cant 2, 14), aclárala y endúlzala para que su música te sea dulce y agradable por todos los siglos! Amén.',
  },
];

const deprecaciones = [
  '¡Ven, Espíritu Santo! Consolador magnífico en las muchas penas de esta miserable vida. Dígnate enviar sobre mí tus siete dones como los enviaste sobre el Colegio Apostólico y María Santísima el día de Pentecostés. Gloria.',
  '¡Ven, Descanso en la fatiga!, para que no nos cansemos de seguir el camino de la virtud. Te ruego me llenes de tu don de fortaleza para perseverar con constancia y confianza en el camino de la perfección. Gloria.',
  '¡Ven, Padre de los Pobres! ¡Oh lumbre dichosísima, inunda de resplandores el corazón del fiel. Te ruego me llenes del don de ciencia y sabiduría para que saboree cada día más con qué infinito amor soy amado y así aumente mi caridad a Dios y al prójimo, actuando siempre movido por ella. Gloria.',
  '¡Ven, Luz de las almas! Lava el corazón sórdido, riega el que está marchito, sana el que enfermo está. Te ruego me llenes del don de consejo y piedad para obrar de continuo con prudencia y practicar con todos la justicia, dando a cada uno lo suyo: A Dios, con gratitud y obediencia, a los hombres, con generosidad y amabilidad. Gloria.',
  '¡Ven, Dador de tus dones! Doblega al duro y rígido, inflama al tibio y rige al que extraviado va. Te ruego me llenes del don de entendimiento y temor de Dios, para penetrar las verdades reveladas y no dejarme llevar de las tentaciones de los sentidos, procediendo con templanza en el uso de las criaturas. Gloria.',
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

function Instruction({ children }: { children: ReactNode }) {
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

export default function NovenaEspirituSantoScreen() {
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
      <Stack.Screen options={{ title: 'Novena al Espíritu Santo' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>NOVENA AL ESPÍRITU SANTO</Text>

        <View style={styles.block}>
          <SectionHeading>1. INICIO</SectionHeading>
          <Text style={styles.line}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.bodyText}>
              Novena al Espíritu Santo. Por la señal. Acto de contrición.
            </Text>
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>2. CANTO DE ENTRADA</SectionHeading>
          <Instruction>
            Se anuncia el canto de entrada (número, página) que serán dos estrofas del Veni
            Creator.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>3. ORACIÓN INICIAL</SectionHeading>
          <Instruction>Lo recita solo el que dirige.</Instruction>
          <Text style={styles.hymnText}>
            <Text style={styles.dropCap}>V</Text>
            en, Espíritu Creador, / visita nuestras almas, / y, pues Tú las creaste, / llénalas de
            tu gracia.{'\n\n'}
            Don de Dios altísimo; / Consolador te llaman; / fuego, amor, viva fuente, / suave unción
            del alma.{'\n\n'}
            Tú, dedo de Dios Padre, / siete dones regalas. / Tú, de Dios fiel promesa, / inspiras
            las palabras.{'\n\n'}
            Tú, alumbra nuestra mente. / Tú, nuestro amor inflama; / y, con tu fuerza, / anima
            nuestra carne flaca.{'\n\n'}
            Ahuyenta al enemigo; / infúndenos tu calma; / dirige nuestros pasos / y nuestro mal
            aparta.{'\n\n'}
            Enséñanos al Padre / y al Hijo nos declara; / y en ti, de ambos Espíritu, / tenga fe
            nuestra alma.{'\n\n'}
            Gloria al Padre, y al Hijo, / que de la muerte se alza, / con el divino Espíritu / que
            siempre reina y manda. / Amén.
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>4. ORACIÓN DE CADA DÍA</SectionHeading>
          <Instruction>
            El que dirige reza la oración, indicando antes el día de la novena (v.gr.: «Día
            primero...»). Después de la oración se deja un minuto de silencio.
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
            El que dirige recita las deprecaciones. Después de cada una de ellas se reza un Gloria de
            modo alternado, como en el Santo Rosario.
          </Instruction>
          {deprecaciones.map((text, index) => (
            <Text key={index} style={styles.deprecationItem}>
              <Text style={styles.bullet}>☞ </Text>
              <Text style={styles.bodyText}>{text}</Text>
            </Text>
          ))}
        </View>

        <View style={styles.block}>
          <SectionHeading>6. ORACIÓN FINAL</SectionHeading>
          <Instruction>La reza el que dirige, y los fieles responden.</Instruction>
          <VersicleLine
            label="V"
            text="Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía, Señor, tu Espíritu para darnos nueva vida,"
          />
          <VersicleLine label="R" text="Y renovarás la faz de la tierra." />
          <VersicleLine
            label="V"
            text="Oh Dios, que iluminaste los corazones de tus fieles con la luz del Espíritu Santo, concédenos saber qué está bien según el mismo Espíritu y gozar siempre de sus consuelos. Por Jesucristo nuestro Señor."
          />
          <VersicleLine label="R" text="Amén." />
        </View>

        <View style={styles.block}>
          <SectionHeading>7. CANTO FINAL</SectionHeading>
          <Instruction>
            Se anuncia el canto final (número, página) que será relativo al Espíritu Santo.
          </Instruction>
        </View>

        <View style={styles.block}>
          <SectionHeading>8. ACLAMACIÓN DE DESPEDIDA</SectionHeading>
          <VersicleLine label="V" text="Ven, Espíritu Santo," />
          <VersicleLine label="R" text="Y envía desde el cielo un rayo de tu luz." />
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
  hymnText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
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
