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

type NovenaDay = {
  id: string;
  title: string;
  quote: string;
  paragraphs: string[];
};

const novenaDays: NovenaDay[] = [
  {
    id: '1',
    title: 'Día 1. María, Madre',
    quote: '«Lo que nacerá de ti, Santo, será llamado Hijo de Dios». (Lc 1, 35)',
    paragraphs: [
      '¿Quién más unido al hijo que su madre? ¿Quién más unido a Dios que Nuestra Señora del Encuentro? ¡Ella tiene como hijo propio al mismo Hijo de Dios!',
      'Santa María, Madre de Dios, está destinada a ser Madre de todos los llamados a ser hijos de Dios. Por ser Madre de Dios tiene capacidad total de recibir al Espíritu Santo. Por ser Madre de Cristo, es Madre del Cristo total. Por ser Madre de todos los hombres tiene el derecho de comunicarles esa vida divina. Donde actúa, obra el Espíritu de Dios.',
      'Todo el ser de María es maternal. A través de Ella, Dios ama con corazón de madre, hace realidad su infinita compasión por el hombre. Ella es la Madre ideal: Porque da sin agotarse y nunca desfallece ante nuestras miserias. Jamás hay que temer, jamás desesperar; conducidos, protegidos, amparados bajo Aquella que tiene para nosotros derechos de Madre.',
      'María siempre es Madre. Por ser Madre es Mediadora. Une al Padre con nosotros, al Hijo con nosotros, al Espíritu Santo con nosotros.',
      'Madre santa, haz que yo sea tu hijo fiel para que Dios se complazca viendo en mí a otro Jesús.',
    ],
  },
  {
    id: '2',
    title: 'Día 2. Santa María Virgen, santuario del Espíritu Santo',
    quote: '«El Espíritu Santo vendrá sobre ti». (Lc 1, 35)',
    paragraphs: [
      'María por ser virgen solo vive a Dios y tiene solo un amor: Dios. Experimenta al tiempo su propia «nada» y la plenitud de Dios. No contiene nada propio, todo dice relación a Dios. Solo Dios es el dueño de la vida de María.',
      'En el Corazón virgen de María todas las emociones, al margen de Dios, han sido acalladas. Por eso Nuestra Señora del Encuentro con Dios es el ambiente adecuado para una presencia de Dios plena y exclusiva. La virginidad capacitó a María para ser santuario del Espíritu Santo, mansión del Verbo de Dios. En la virginidad de María Dios obró la máxima fecundidad: La Encarnación del Verbo.',
      'La virginidad puso en María excepcional capacidad para amar y para amar sin el menor riesgo de egoísmo. Está de lleno en lo humano sin quedar nunca apresada por lo humano. Su ayuda no interfiere, no estorba, es inteligente y discreta. Nunca roza. Tiene el arte de servir sin destacar. La Santísima Trinidad pudo esconderse en Ella. Y Ella, al ser invadida por Dios, quedó capacitada para amar libremente según Dios.',
      'Madre Inmaculada, Nuestra Señora del Encuentro con Dios, hazme virgen de todo lo que no sea Dios.',
    ],
  },
  {
    id: '3',
    title: 'Día 3. María, Maestra',
    quote: '«Haced lo que Él os diga». (Jn 2, 5)',
    paragraphs: [
      'María dio a Jesús una vida y un Corazón humanos. Él fue realmente educado por María, como fue engendrado en Ella. Y Jesús se entregó a esa pedagogía del Corazón maternal de su Madre.',
      'Por eso Ella, Nuestra Señora del Encuentro con Dios, es la educadora, la Maestra por excelencia. Por Ella habla e instruye el Espíritu Santo.',
      'Aprendamos de Ella a Dios pues, como Madre de la Sabiduría divina, tiene el poder de transmitirla. Para ello María está dotada de gran dulzura y de gran delicadeza. María no hiere. Es incansable, infatigable, su paciencia es inagotable. No vaciles de asistir a la escuela de María. Cuanto más hundido te encuentres, más brillará la excelencia y bondad de su método educativo. Ella hará de ti otro Jesús.',
      'Nuestra Señora del Encuentro con Dios, maestra y lección de Dios, toda Ella como su Hijo, podría decir: Aprended de mí, que soy asequible, amable, agradable, disponible de oración. Toda Ella es obradora de salvación. Madre santa, hazme discípulo dócil de tu escuela.',
    ],
  },
  {
    id: '4',
    title: 'Día 4. La fe de María',
    quote: '«Feliz Tú, la que creíste». (Lc 1, 45)',
    paragraphs: [
      '¿Quién es Nuestra Señora del Encuentro con Dios?... Ella es la Mujer llena del favor de Dios, la feliz por haber creído, la digna de ser alabada a causa de su fe.',
      'El sí de santa María, dado en la fe, fue la llave que abrió a Dios la puerta para la realización de sus promesas de salvación. La fe de María fue apertura a Dios. En la fe lo aceptó y acogió sus designios, sintonizó con Él. Su fe fue muy difícil: El Señor puso su vida a la sombra de la cruz: «Una espada de dolor atravesará tu alma».',
      'La acción extraordinaria de Dios necesita, para ser hecha, hombres y mujeres de fe, convencidos de Dios, valientes en el creer, como santa María. ¡Mujer valiente y audaz en el creer! Se puso sin reservas en manos de Dios.',
      'María es modelo de creyentes. En su fe, es la discípula perfecta de Cristo. Su fe es espejo y sostén de nuestra fe.',
      '¡Nuestra Señora del Encuentro con Dios, auméntanos la fe!',
    ],
  },
  {
    id: '5',
    title: 'Día 5. María, Sembradora de Esperanza',
    quote: '«Bienaventurado aquél cuya esperanza es el Señor». (Sal 40, 5)',
    paragraphs: [
      'Santa María vivía constantemente la esperanza en todas las situaciones en que Dios la ponía, por más incomprensibles que pareciesen. La fuerza que la sostuvo en estado heroico durante su vida fue la esperanza que vivió en su fe.',
      'Ella solo se apoyaba en Dios, en el Dios siempre fiel. En el Dios que promete la salvación y que la opera. En el Dios que auxilia a quién en Él confía. En Ella, Nuestra Señora del Encuentro con Dios, se cumplen sus divinas promesas.',
      'Por eso Nuestra Señora del Encuentro con Dios es, para nosotros, esperanza firme de Dios y en Dios, afirmación gozosa de esperanza sin asomo de duda o vacilación. Ella es modelo para todos los que buscan, encuentran y conservan a Dios y para aquellos que en Él hacen descansar toda su esperanza. Es la divina sembradora de esperanza porque en Ella hacen asiento la grandeza y el poder de Dios, su Sabiduría y su Amor.',
      'Nuestra Señora del Encuentro con Dios, Mediadora Maternal de todas las gracias, concédeme una esperanza firme y segura en Dios, mi Padre.',
    ],
  },
  {
    id: '6',
    title: 'Día 6. Madre de la Caridad',
    quote: '«Se levantó María y se fue con prontitud a la región montañosa, a una ciudad de Judá». (Lc 1, 39)',
    paragraphs: [
      'María vivió la caridad, la fraternidad. Por eso se puso en camino hacia la casa de su prima santa Isabel, con diligencia, sin pereza. Y una vez allí la sirvió y ayudó con interés, con esfuerzo y ardor, con cuidado y delicadeza. Ella destaca por su actitud de servicio. Todo lo suyo es nuestro y todo lo nuestro lo vive y siente como propio.',
      'En Nuestra Señora del Encuentro se concreta la alianza de amor de Dios con el hombre. Por eso donde Ella está, está la caridad. Ella es como el amor encarnado de Dios que nos «amó hasta el extremo» (cf. Jn 13, 1). María, asociada íntimamente al misterio del Gólgota en coparticipación estrecha con la Pasión de Jesús en calidad de corredentora, presta el servicio de los servicios de ser ayuda adecuada para la obra específica de Jesús: La redención dolorosa mediante la expiación satisfactoria del pecado. El amor, que Dios, busca a María para hacerme en Ella amor y obrar amor en el mundo. ¡De qué quilates no será el amor del Corazón de María!',
      'Nuestra Señora del Encuentro con Dios, configúrame según tu Corazón.',
    ],
  },
  {
    id: '7',
    title: 'Día 7. Humildad y Obediencia de santa María',
    quote: '«He aquí la esclava del Señor, hágase en mí según tu palabra». (Lc 1, 38)',
    paragraphs: [
      'El secreto profundo de la grandeza de santa María, Nuestra Señora del Encuentro con Dios es la humildad. La humildad, en María, se traduce en una actitud, un estilo, un modo de ser y vivir. Ella sabía que sin Dios era pura nada y nada podía, que los dones de Dios a Ella eran totalmente gratuitos e inmerecidos. María es campo libre para la iniciativa amorosa de Dios. En Ella Dios puede volcar su amor y sus bienes sin límites. Ella es la disponible, la dócil, la sin reservas, sin condiciones, sin peros al querer de Dios.',
      'Santa María aparece siempre junto a Jesús prestando ayuda adecuada. Dios escogió lo que Ella tenía que hacer por Él y María aceptó y se sometió de corazón a las preferencias, al modo de ser, a los preceptos de Dios. Lo específico de santa María: Trabajar en la identificación de su voluntad con la del Padre. Salir de sí para aceptar al Padre y, en Él, a todos sus hijos. A través de todas las circunstancias, a veces duras y discriminantes, supo descubrir la voluntad de Dios.',
      'Madre, enséñame a decir siempre sí a todas las voluntades de Dios.',
    ],
  },
  {
    id: '8',
    title: 'Día 8. La Pobreza de María',
    quote: '«Bienaventurados los pobres de espíritu, porque de ellos es el Reino de los Cielos». (Mt 5, 3)',
    paragraphs: [
      'Nuestra Señora del Encuentro con Dios vivió la pobreza, es decir, la renuncia a todo lo que al hombre le ofrece seguridad. Se desprendió de todo para vivir la confianza total en el Padre que solo es real, verdadera y se hace visible en la renuncia a todo, para ponerlo a disposición del amor-servicio. El hombre moderno ha centrado su felicidad en tener cosas que lo llenen de satisfacción puramente material. Para María, la pobreza voluntaria es el estuche en el que puede vivir la voluntad del Padre como el único tesoro. Santa María es también pobre de corazón, por eso puede ver a Dios. Su pobreza de todo lo que ofrece seguridad la hizo capaz de Dios.',
      'Nuestra Señora del Encuentro con Dios, hazme pobre de espíritu, que opte siempre por Dios y ame mi pobreza.',
    ],
  },
  {
    id: '9',
    title: 'Día 9. Mediadora Maternal de todas las gracias',
    quote: '«No tienen vino». (Jn 2, 3)',
    paragraphs: [
      'Nuestra Señora participa subordinadamente en la mediación de su Hijo Jesús, por ser Madre. En las bodas de Caná refleja la eficacia de esa mediación maternal, entre los novios necesitados y su divino Hijo, fuente de toda gracia y bendición. Vivir la experiencia de la Madre que media es saborear su amor, su consuelo, su amparo, su protección, su guía. Ella nos lleva al encuentro con Cristo y en Cristo con el Padre. En su mediación maternal la Virgen Santísima es el lugar activo del encuentro con Dios. Santa María, la Mediadora Maternal es Madre de unidad, Madre de encuentros.',
      'Nuestra Señora del Encuentro con Dios, que experimente tu protección maternal y me concedas unirme con mayor intimidad al único Mediador: Jesucristo.',
    ],
  },
];

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

function DayContent({ day }: { day: NovenaDay }) {
  return (
    <View>
      <Text style={styles.quoteText}>{day.quote}</Text>
      {day.paragraphs.map((paragraph, index) => (
        <Text key={index} style={styles.paragraphText}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
}

export default function NovenaNuestraSenoraEncuentroDiosScreen() {
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
      <Stack.Screen options={{ title: 'Novena a Nuestra Señora del encuentro con Dios' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>NOVENA A NUESTRA SEÑORA DEL ENCUENTRO CON DIOS</Text>

        <View style={styles.block}>
          <SectionHeading>1. INICIO</SectionHeading>
          <Text style={styles.line}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.bodyText}>
              Novena a Nuestra Señora del Encuentro con Dios, Mediadora Maternal de todas las
              gracias. Por la señal. Acto de contrición.
            </Text>
          </Text>
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
          <Instruction>
            El que dirige reza la siguiente oración con su cita evangélica introductoria, pero sin
            indicar el libro con su capítulo y versículos.
          </Instruction>
          <Text style={styles.line}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.quoteInline}>«Encontraron al Niño con María, su Madre». (Mt 2, 11)</Text>
          </Text>
          <Text style={styles.prayerText}>
            Nuestra Señora del Encuentro con Dios, nueva tienda del encuentro de Dios con el hombre y
            del hombre con Dios ¡Muéstranos que eres siempre Madre, llévanos a Jesús!
          </Text>
          <Text style={styles.prayerText}>
            Te rogamos que como Maestra de vida divina, nos enseñes a creer, a esperar y a amar con
            tu misma fe, esperanza y caridad. Que tu humildad se imprima a fuego en nosotros de modo
            que, libres de todo lo que nos esclavice al pecado, ansiemos que la voluntad amorosa de
            Dios sea nuestro único afán. Y así, unidos a ti, por tu Mediación Maternal, que es
            transparencia del Espíritu Santo, colaboremos adecuadamente en la obra redentora de
            Cristo, para gloria de Dios Padre. Amén.
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>4. ORACIÓN DE CADA DÍA</SectionHeading>
          <Instruction>
            El que dirige reza la oración, indicando antes el día de la novena y el título (v.gr.:
            «Día primero: María, Madre...») y leyendo también la cita evangélica introductoria, pero
            sin indicar el libro con su capítulo y versículos. Después de la oración se deja un
            minuto de silencio.
          </Instruction>
        </View>

        {novenaDays.map((day) => (
          <CollapsibleSection
            key={day.id}
            title={day.title}
            expanded={!!expandedIds[day.id]}
            onToggle={() => toggleSection(day.id)}
          >
            <DayContent day={day} />
          </CollapsibleSection>
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
    fontSize: 18,
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
    lineHeight: 24,
  },
  line: {
    marginBottom: 12,
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
  quoteInline: {
    fontFamily: Fonts.italic,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000000',
  },
  prayerText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
    marginBottom: 12,
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
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#000000',
    lineHeight: 22,
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
  quoteText: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  paragraphText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
    marginBottom: 14,
  },
});
