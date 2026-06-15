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

type Station = {
  id: string;
  title: string;
  text: string;
  song?: string;
};

const stations: Station[] = [
  {
    id: '1',
    title: 'Primera Estación: Jesús condenado a muerte',
    text: '«Vino a los suyos, y los suyos no lo recibieron» (Jn 1, 11). Pueblo mío, ¿qué te he hecho? Por ti nací entre pajas, trabajé treinta años, he predicado, hecho milagros... ¡y me condenas a la Cruz! Los suyos seguimos rechazándolo hoy, lo condenamos a muerte: Los jóvenes, los matrimonios, los trabajadores, los hombres de negocios, los de su misma Iglesia... ¿me decidiré de una vez a acompañar a Cristo solo, en el camino duro del Calvario?',
    song: 'Perdón, oh Dios mío.',
  },
  {
    id: '2',
    title: 'Segunda Estación: Jesús toma la Cruz',
    text: 'Gracias, Señor, si no, ¿qué hubiera sido de nosotros? ¿Cómo hubiéramos salido del pecado? Todos los cristianos tenemos que parecernos a ti, seguirte a ti. Y todos tenemos que tomar parte en nuestra redención, en la expiación de los pecados. Por eso, todos tenemos nuestra cruz. Señor, enséñame a aceptar el sufrimiento, a verlo como venido de tu mano (LG 41) para mi bien.',
  },
  {
    id: '3',
    title: 'Tercera Estación: Jesús cae por primera vez',
    text: 'Señor, ¡cómo pesa tu Cruz!... ¡son tantos los pecados nuestros, por los que estás padeciendo! Señor, que no haga yo tu Cruz más pesada, y en el andar difícil de la vida, cuando esté caído en el suelo, cuando no pueda más, que tu caída me dé fuerza para levantarme, que acuda a ti, alivio de todos los que sufren y están agobiados.',
  },
  {
    id: '4',
    title: 'Cuarta Estación: Jesús encuentra a su Madre',
    text: 'La Madre se entera de la condena. Sale deprisa, acorta, y en una bocacalle se encuentra frente a su Hijo. ¡Cómo iba! Su Niño de Belén y Nazaret, el Hijo del Altísimo, que se le había entregado a Ella, la Gracia plena, como un regalo maravilloso y divino. ¡Cuántas cosas le diría Jesús al cruzarse sus miradas!: Es por ellos, por él; esta Cruz es el último asidero para quienes la corriente del pecado arrastra al infierno.',
    song: 'Sálvame, Virgen María (1ª o 2ª estrofa).',
  },
  {
    id: '5',
    title: 'Quinta Estación: El Cireneo ayuda a llevar la Cruz a Jesús',
    text: 'Estaba agotado. No podía seguir. El centurión mira quién lo ayude. Nadie. «Busqué quien se compadeciese de mí, y no lo hubo» (Sal 68, 21). A uno de los espectadores, un hombre de Cirene, le obligan que tome la Cruz de Cristo. ¡Cuántas veces yo también me he negado a ayudarte a llevar la Cruz, me he rebelado contra tu plan! Señor, aunque sea a la fuerza, como aquel hombre, haz que te ayude a llevar la Cruz.',
  },
  {
    id: '6',
    title: 'Sexta Estación: La Verónica enjuga el rostro de Jesús',
    text: '¡Cómo camina Cristo! Semejante a un gusano, en frase de Isaías. Si hasta se ha hecho pecado, dice san Pablo. El rostro sucio; sus manos ensangrentadas abrazan la Cruz salvadora. Una mujer rompe la fila de soldados y le enjuga el rostro. En el lienzo queda impresa la imagen de Cristo. Es el premio de vencer el respeto humano y confesarlo: Ser hechos imagen suya. Señor, que de esta mujer judía aprenda a ser valiente y a enjugar tu rostro.',
  },
  {
    id: '7',
    title: 'Séptima Estación: Jesús cae por segunda vez',
    text: 'Áspera es la subida al Calvario, como la vida. ¡Cuántas caídas! Señor, danos constancia. A nosotros, a tus sacerdotes, religiosos, misioneros, a la jerarquía toda y a todos tus hijos. Cristo no dice basta. Ninguno tenemos derecho a echarnos al surco hasta un segundo después de la muerte. Pero no fiándonos de nuestras fuerzas, sino confiando en Dios, que ciertamente no dejará de darnos lo necesario, el pan de cada día, si se lo pedimos.',
    song: 'Amante Jesús mío.',
  },
  {
    id: '8',
    title: 'Octava Estación: Jesús habla a las hijas de Jerusalén',
    text: '¡Qué bueno eres, Señor! En mitad de tu Pasión te acuerdas más que del castigo que estás sufriendo Tú, del preparado para los leños secos. Y pides que lloremos por nuestros pecados para librarnos de él. Señor, para nuestra conversión y penitencia, envía operarios a tu mies, operarios santos, desde el de más arriba hasta los de más abajo. Por ellos, suplicantes te rogamos e insistimos, ¡óyenos, Señor!',
  },
  {
    id: '9',
    title: 'Novena Estación: Jesús cae por tercera vez',
    text: 'Veamos la escena: Cristo en tierra, derrumbado. ¡Pero no hay nadie que me ayude! El eco de este grito desgarrador resuena hoy también en nuestros oídos. Porque Cristo sigue hoy tirado en los suburbios, en los hospitales, en los marginados del tercer mundo, en las masas sin cultura o sin Dios de los cinco continentes. Señor, quiero echarte una mano; fortalece mi caridad perezosa, inconstante, falta de fe.',
  },
  {
    id: '10',
    title: 'Décima Estación: Jesús es despojado de sus vestiduras',
    text: 'Sin estar despegados de los bienes terrenos, no podemos practicar el amor a Dios y al prójimo. Pero qué costosa de aceptar es la lección de la pobreza. Por eso, el ejemplo de Cristo es total: El pesebre, el no tener dónde reclinar la cabeza, el morir desnudo, y esos terribles tirones para arrancarle la ropa pegada a las heridas de la flagelación. Señor, que tus ejemplos de pobreza nos graben a fuego en el corazón la desestima de cuanto hemos de abandonar algún día.',
    song: 'Perdona a tu pueblo, Señor.',
  },
  {
    id: '11',
    title: 'Undécima Estación: Jesús es clavado en la Cruz',
    text: 'Es la entrega total y heroica del cuerpo. Entrega cruenta, como la castidad es entrega incruenta. Por eso la castidad perfecta con voto se compara al martirio. Cristo es modelo de mártires y de vírgenes. Su crucifixión es compendio y símbolo de ambos. Cristo padece para expiar nuestras deshonestidades y fortalecer nuestra pureza. Señor, perdona mis pecados, y haz que mi castidad sea testimonio auténtico de tu gracia, sin la cual es imposible mantenerla.',
  },
  {
    id: '12',
    title: 'Duodécima Estación: Jesús muere en la Cruz',
    text: '«Todo se ha cumplido», al haberte «hecho obediente hasta la muerte en Cruz» (Fil 2,8). Formidable obediencia a la voluntad de Dios, que todo cristiano ha de imitar, y que constituye la finalidad del voto religioso de obediencia a una regla, a unos superiores, que representan la voluntad de Dios, por aprobación de la Iglesia. Señor, muerto por mí, que mi amor a ti sea tanto como para aceptar siempre tu voluntad y plan sobre mí.',
  },
  {
    id: '13',
    title: 'Decimotercera Estación: Jesús en los brazos de su Madre',
    text: 'Señora, ¡qué Hijo se te quitó y qué Hijo se te entrega! Por fin lo han matado, cruelmente, con saña. Señora, yo también he tenido la culpa. Y ahora que has perdido a tu Hijo, te da Dios otro hijo: Yo mismo. Madre, desde ahora no quiero que Cristo tenga que sufrir más por mis pecados. Quiero, en lo posible, reparar por ellos, ser siempre hijo tuyo a tu gusto. ¡Qué menos, habiéndome dado que Tú, la Madre de Dios, seas también y de verdad Madre mía!',
    song: 'Sálvame, Virgen María (1ª estrofa).',
  },
  {
    id: '14',
    title: 'Decimocuarta Estación: Jesús es puesto en el sepulcro',
    text: '«Si el grano de trigo no muere, no puede dar fruto» (Jn 12, 24). Señor, nada más morir, se abrió tu Corazón, como semilla fecunda. Y nació la Iglesia, en la cual florece tu vida escondida en millones de hostias. Yo quiero recibirte como grano de trigo, para que des fruto en mí, y contigo quiero morir al mundo para dar fruto en tu cuerpo místico. Luego será la recolección olorosa de los frutos alegres sin fin.',
    song: 'Cantemos al Amor de los amores.',
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

function Instruction({ children }: { children: React.ReactNode }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

function SectionHeading({ children }: { children: string }) {
  return <Text style={styles.sectionHeading}>{children}</Text>;
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

function StationContent({ station }: { station: Station }) {
  return (
    <View>
      <Text style={styles.stationTitle}>{station.title}</Text>
      <Text style={styles.meditationText}>{station.text}</Text>
      {station.song ? (
        <Text style={styles.songNote}>Se canta: {station.song}</Text>
      ) : null}
    </View>
  );
}

export default function SantoViaCrucisScreen() {
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
      <Stack.Screen options={{ title: 'Santo Vía Crucis' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>SANTO VÍA CRUCIS</Text>

        <Instruction>
          El que dirige, con quienes llevan la cruz y los cirios (si los hubiese), se ubican frente al
          Altar. El que dirige se pone de rodillas y, con él, los fieles. Cuando el Vía Crucis se rece
          frente al Santísimo expuesto, solo participa el que dirige.
        </Instruction>

        <Text style={styles.openingLine}>
          <Text style={styles.prefix}>V. </Text>
          <Text style={styles.bodyText}>
            Santo Vía Crucis. Por la señal. Acto de contrición.
          </Text>
        </Text>

        <View style={styles.block}>
          <SectionHeading>1. ORACIÓN PREPARATORIA</SectionHeading>
          <Instruction>Luego, solo el que dirige reza:</Instruction>
          <Text style={styles.preparatoryPrayer}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.bodyText}>
              Señor mío y Dios mío,{'\n'}
              bajo la mirada amorosa de nuestra Madre,{'\n'}
              nos disponemos a acompañarte{'\n'}
              por el camino de dolor,{'\n'}
              que fue precio de nuestro rescate.{'\n'}
              Queremos sufrir todo lo que Tú sufriste,{'\n'}
              ofrecerte nuestro pobre corazón, contrito,{'\n'}
              porque eres inocente y vas a morir por nosotros,{'\n'}
              que somos los únicos culpables.{'\n'}
              Madre mía, Virgen Dolorosa,{'\n'}
              ayúdame a revivir aquellas horas amargas{'\n'}
              que tu Hijo quiso pasar en la tierra,{'\n'}
              para que nosotros, hechos de un puñado de lodo,{'\n'}
              viviésemos al fin en la libertad y{'\n'}
              gloria de los hijos de Dios. Amén.
            </Text>
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>2. MEDITACIONES DE LAS ESTACIONES</SectionHeading>
          <Instruction>
            A continuación, se pone de pie con todos y permanece frente al Altar o bien se coloca
            frente a la imagen que represente la Estación correspondiente. Enuncia las estaciones de
            la siguiente manera, v.gr.: «V. Primera Estación: Jesús condenado a muerte».
          </Instruction>
          <Instruction>
            Dice la jaculatoria, con la respuesta del pueblo y todos se ponen de rodillas.
          </Instruction>
          <VersicleLine
            label="V"
            text="Te adoramos, Señor, y te bendecimos,"
          />
          <VersicleLine label="R" text="Que por tu Santa Cruz redimiste al mundo." />
          <Instruction>
            Luego lee la meditación, dejando un minuto de silencio, al final de la cual dice la
            jaculatoria, con la respuesta del pueblo. Dicha esta, todos se ponen de pie.
          </Instruction>
          <VersicleLine label="V" text="Pequé, Señor, pequé," />
          <VersicleLine label="R" text="Ten piedad y misericordia de mí." />
          <Instruction>
            Donde se indique, se entona el canto. Acabado este se trasladan a la siguiente Estación,
            si corresponde hacerse.
          </Instruction>
        </View>

        {stations.map((station) => (
          <CollapsibleSection
            key={station.id}
            title={station.title}
            expanded={!!expandedIds[station.id]}
            onToggle={() => toggleSection(station.id)}
          >
            <StationContent station={station} />
          </CollapsibleSection>
        ))}

        <Instruction>
          En caso de que se hayan trasladado por la Iglesia, el que dirige con quienes llevan la cruz
          y los cirios (si los hubiese), se ubican de nuevo frente al Altar.
        </Instruction>

        <View style={styles.block}>
          <SectionHeading>3. INTENCIONES DEL SANTO PADRE</SectionHeading>
          <Instruction>
            El que dirige se pone de rodillas junto con los fieles, y dice:
          </Instruction>
          <VersicleLine
            label="V"
            text="Por las intenciones del Sumo Pontífice, para ganar las indulgencias concedidas."
          />
          <Text style={styles.plainLine}>Padrenuestro. Avemaría. Gloria.</Text>
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
    paddingHorizontal: 20,
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
  openingLine: {
    marginBottom: 24,
    lineHeight: 26,
  },
  preparatoryPrayer: {
    lineHeight: 26,
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
  plainLine: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
    marginTop: 4,
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
  stationTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#000000',
    marginBottom: 12,
    lineHeight: 24,
  },
  meditationText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
    marginBottom: 12,
  },
  songNote: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    lineHeight: 24,
  },
});
