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
  jesusWords: string;
  prayerToJesus: string;
  verse: string;
  prayerToFather: string;
  diaryRef: string;
};

const novenaDays: NovenaDay[] = [
  {
    id: '1',
    title: 'Día 1',
    jesusWords:
      '«Hoy, tráeme a toda la humanidad, especialmente a todos los pecadores, y sumérgelos en el océano de mi misericordia. De esta forma me consolarás de la amarga tristeza en que me sume la pérdida de las almas».',
    prayerToJesus:
      'Misericordiosísimo Jesús, cuya naturaleza es la de tener compasión de nosotros y de perdonarnos, no mires nuestros pecados, sino la confianza que depositamos en tu bondad infinita. Acógenos en la morada de tu muy compasivo Corazón y nunca nos dejes escapar de Él. Te lo suplicamos por tu amor que te une al Padre y al Espíritu Santo.',
    verse:
      'Oh omnipotencia de la Divina Misericordia, salvación del hombre pecador, Tú eres la Misericordia y un mar de compasión, ayudas a quien te ruega con humildad.',
    prayerToFather:
      'Padre eterno, vuelve tu mirada misericordiosa hacia toda la humanidad, y especialmente hacia los pobres pecadores que están encerrados en el muy compasivo Corazón de Jesús, y por su dolorosa Pasión muéstranos tu misericordia para que alabemos la omnipotencia de tu misericordia por los siglos de los siglos. Amén.',
    diaryRef: 'Diario 1210-1211',
  },
  {
    id: '2',
    title: 'Día 2',
    jesusWords:
      '«Hoy, tráeme a las almas de los sacerdotes y religiosos, y sumérgelas en mi insondable misericordia. Fueron ellas las que me dieron fortaleza para soportar mi amarga Pasión. A través de ellas, como a través de canales, mi misericordia fluye hacia la humanidad».',
    prayerToJesus:
      'Misericordiosísimo Jesús, de quien procede todo bien, aumenta tu gracia en nosotros para que realicemos dignas obras de misericordia, y que todos aquellos que nos vean, glorifiquen al Padre de misericordia que está en el cielo.',
    verse:
      'La fuente del amor de Dios vive en los corazones limpios, purificados en el mar de misericordia, resplandecientes como las estrellas, claros como la aurora.',
    prayerToFather:
      'Padre eterno, vuelve tu mirada misericordiosa hacia el grupo elegido de tu viña, a las almas de los sacerdotes y religiosos; otórgales el poder de tu bendición. Por el amor del Corazón de tu Hijo, en el cual están encerradas, concédeles el poder de tu luz para que puedan guiar a otros en el camino de la salvación, y a una sola voz canten alabanzas a tu infinita misericordia por los siglos de los siglos. Amén.',
    diaryRef: 'Diario 1212-1213',
  },
  {
    id: '3',
    title: 'Día 3',
    jesusWords:
      '«Hoy, tráeme a todas las almas devotas y fieles, y sumérgelas en el océano de mi misericordia. Estas almas me consolaron a lo largo del Vía Crucis. Fueron una gota de consuelo en medio de un mar de amargura».',
    prayerToJesus:
      'Misericordiosísimo Jesús, que desde el tesoro de tu misericordia concedes a todos y a cada uno tus gracias en gran abundancia, acógenos en la morada de tu muy compasivo Corazón y nunca nos dejes escapar de Él. Te lo suplicamos por el inconcebible amor con que tu Corazón arde por el Padre celestial.',
    verse:
      'Son impenetrables las maravillas de la misericordia, no alcanza a sondearlas ni el pecador ni el justo, miras a todos con compasión, y atraes a todos a tu amor.',
    prayerToFather:
      'Padre Eterno, vuelve tu mirada misericordiosa hacia las almas fieles como herencia de tu Hijo y, por su dolorosa Pasión, concédeles tu bendición y rodéalas con tu protección constante para que no pierdan el amor y el tesoro de la santa fe, sino que con toda la legión de los ángeles y los santos, glorifiquen tu infinita misericordia por los siglos de los siglos. Amén.',
    diaryRef: 'Diario 1214-1215',
  },
  {
    id: '4',
    title: 'Día 4',
    jesusWords:
      '«Hoy, tráeme a los que no creen en mí y aquellos que todavía no me conocen. También pensaba en ellos durante mi amarga Pasión y su futuro celo consoló mi Corazón. Sumérgelos en el océano de mi misericordia».',
    prayerToJesus:
      'Piadosísimo Jesús, Tú que eres la luz del mundo entero, acoge en la morada de tu muy compasivo Corazón a las almas de aquellos que todavía no creen en ti o que no te conocen. Que los rayos de tu gracia las iluminen para que también ellas unidas a nosotros, ensalcen tu misericordia admirable y no las dejes escapar de la morada de tu muy compasivo Corazón.',
    verse:
      'La luz de tu amor ilumine las tinieblas de las almas. Haz que estas almas te conozcan, y junto con nosotros glorifiquen tu misericordia.',
    prayerToFather:
      'Padre Eterno, vuelve tu mirada misericordiosa hacia las almas de los que no creen en tu Hijo y hacia las de aquellos que todavía no te conocen, pero que están encerrados en el muy compasivo Corazón de Jesús. Atráelas hacia la luz del Evangelio. Estas almas desconocen la gran felicidad que es amarte. Concédeles que también ellas ensalcen la generosidad de tu misericordia por los siglos de los siglos. Amén.',
    diaryRef: 'Diario 1216-1217',
  },
  {
    id: '5',
    title: 'Día 5',
    jesusWords:
      '«Hoy, tráeme a las almas de nuestros hermanos separados y sumérgelas en el océano de mi misericordia. Durante mi amarga Pasión, desgarraron mi cuerpo y mi Corazón, es decir, mi Iglesia. Según regresan a la Iglesia, mis llagas cicatrizan y de este modo alivian mi Pasión».',
    prayerToJesus:
      'Misericordiosísimo Jesús, que eres la bondad misma, Tú no niegas la luz a quienes te la piden. Acoge en la morada de tu muy compasivo Corazón a las almas de nuestros hermanos separados y llévalas con tu luz a la unidad con la Iglesia; y no las dejes escapar de la morada de tu muy compasivo Corazón, sino haz que también ellas glorifiquen la generosidad de tu misericordia.',
    verse:
      'También para aquellos que rasgaron la vestidura de tu unidad brota de tu Corazón la fuente de piedad. La omnipotencia de tu misericordia, oh Dios, puede sacar del error también a estas almas.',
    prayerToFather:
      'Padre eterno, vuelve tu mirada misericordiosa hacia las almas de nuestros hermanos separados que han malgastado tus bendiciones y han abusado de tus gracias manteniéndose obstinadamente en el error. No mires sus errores, sino el amor de tu Hijo y su amarga Pasión que sufrió por ellos ya que también ellos están encerrados en el muy compasivo Corazón de Jesús. Haz que también ellos glorifiquen tu gran misericordia por los siglos de los siglos. Amén.',
    diaryRef: 'Diario 1218-1219',
  },
  {
    id: '6',
    title: 'Día 6',
    jesusWords:
      '«Hoy, tráeme a las almas mansas y humildes y a las almas de los niños pequeños, y sumérgelas en mi misericordia. Estas almas son las más semejantes a mi Corazón. Ellas me fortalecieron durante mi amarga agonía. Las veía como ángeles terrestres que velarían al pie de mis altares. Sobre ellas derramo torrentes enteros de gracias. Solamente el alma humilde es capaz de recibir mi gracia; concedo mi confianza a las almas humildes».',
    prayerToJesus:
      'Misericordiosísimo Jesús, tú mismo has dicho: «Aprended de mi que soy manso y humilde de corazón». Acoge en la morada de tu muy compasivo Corazón a todas las almas mansas y humildes y a las almas de los niños pequeños. Estas almas llevan a todo el cielo al éxtasis y son las preferidas del Padre celestial. Son un ramillete perfumado ante el trono de Dios, de cuyo perfume se deleita Dios mismo. Estas almas tienen una morada permanente en tu muy compasivo Corazón y cantan sin cesar un himno de amor y misericordia por toda la eternidad.',
    verse:
      'De verdad el alma humilde y mansa ya aquí en la tierra respira el paraíso, y del perfume de su humilde corazón se deleita el Creador mismo.',
    prayerToFather:
      'Padre Eterno, vuelve tu mirada misericordiosa hacia las almas mansas y humildes y hacia las almas de los niños pequeños que están encerradas en el muy compasivo Corazón de Jesús. Estas almas son las que se asemejan más a tu Hijo. Su fragancia asciende desde la tierra y alcanza tu trono. Padre de misericordia y de toda bondad, te suplico por el amor que tienes por estas almas y el gozo que te proporcionan, bendice al mundo entero para que todas las almas canten juntas las alabanzas de tu misericordia por los siglos de los siglos. Amén.',
    diaryRef: 'Diario 1220-1221',
  },
  {
    id: '7',
    title: 'Día 7',
    jesusWords:
      '«Hoy, tráeme a las almas que veneran y glorifican mi misericordia de modo especial y sumérgelas en mi misericordia. Estas almas son las que más lamentaron mi Pasión y penetraron más profundamente en mi espíritu. Ellas son un reflejo viviente de mi Corazón compasivo. Estas almas brillarán con un resplandor especial en la vida futura. Ninguna de ellas irá al fuego del infierno. Defenderé de modo particular a cada una en la hora de la muerte».',
    prayerToJesus:
      'Misericordiosísimo Jesús, cuyo Corazón es el amor mismo, acoge en la morada de tu muy compasivo Corazón a las almas que veneran y ensalzan de modo particular la grandeza de tu misericordia. Estas almas son fuertes con el poder de Dios mismo. En medio de toda clase de aflicciones y adversidades siguen adelante confiadas en tu misericordia, y unidas a ti, oh Jesús, cargan sobre sus hombros a toda la humanidad. Estas almas no serán juzgadas severamente, sino que tu misericordia las protegerá en la hora de la muerte.',
    verse:
      'El alma que ensalza la bondad de su Señor es por Él particularmente amada. Está siempre al lado de la fuente viva y saca gracias de la Divina Misericordia.',
    prayerToFather:
      'Padre Eterno, vuelve tu mirada misericordiosa hacia aquellas almas que glorifican y veneran tu mayor atributo, es decir, tu misericordia insondable y que están encerradas en el muy compasivo Corazón de Jesús. Estas almas son un Evangelio viviente, sus manos están llenas de obras de misericordia y sus corazones, desbordantes de gozo, te cantan, oh Altísimo, un cántico de misericordia. Te suplico, oh Dios, muéstrales tu misericordia según la esperanza y la confianza que han puesto en ti. Que se cumpla en ellas la promesa de Jesús quien les dijo: A las almas que veneren mi infinita misericordia..., Yo mismo las defenderé como a mi propia gloria durante sus vidas y especialmente en la hora de la muerte. Amén.',
    diaryRef: 'Diario 1224-1225',
  },
  {
    id: '8',
    title: 'Día 8',
    jesusWords:
      '«Hoy, tráeme a las almas que están en la cárcel del purgatorio y sumérgelas en el abismo de mi misericordia. Que los torrentes de mi sangre apacigüen el ardor de las llamas. Todas estas almas son muy amadas por mí. Ellas cumplen con el castigo que se debe a mi justicia. Está en tu poder llevarles alivio. Haz uso de todas las indulgencias del tesoro de mi Iglesia y ofrécelas en su nombre. Oh, si supieras los tormentos que padecen, ofrecerías continuamente por ellas las limosnas del espíritu y saldarías las deudas que tienen con mi justicia».',
    prayerToJesus:
      'Misericordiosísimo Jesús, Tú mismo has dicho que deseas la misericordia; heme aquí que llevo a la morada de tu muy compasivo Corazón a las almas del purgatorio, almas que te son muy queridas, pero que deben pagar su culpa adeudada a tu justicia. Que los torrentes de Sangre y Agua que brotaron de tu Corazón apaguen el fuego del purgatorio para que también allí sea glorificado el poder de tu misericordia.',
    verse:
      'Del tremendo ardor del fuego del purgatorio se levanta un lamento a tu misericordia. Y reciben consuelo, alivio y refrigerio en el torrente de Sangre y Agua derramado.',
    prayerToFather:
      'Padre Eterno, vuelve tu mirada misericordiosa hacia las almas que sufren en el purgatorio y que están encerradas en el muy compasivo Corazón de Jesús. Te suplico por la dolorosa Pasión de Jesús, tu Hijo, y por toda la amargura con la cual su sacratísima alma fue inundada, muestra tu misericordia a las almas que están bajo tu justo escrutinio. No las mires de otro modo sino a través de las llagas de Jesús, tu amadísimo Hijo, ya que creemos firmemente que tu bondad y tu compasión no tienen límites. Amén.',
    diaryRef: 'Diario 1226-1227',
  },
  {
    id: '9',
    title: 'Día 9',
    jesusWords:
      '«Hoy, tráeme a las almas tibias y sumérgelas en el abismo de mi misericordia. Estas almas son las que más dolorosamente hieren mi Corazón. A causa de las almas tibias, mi alma experimentó la más intensa repugnancia en el Huerto de los Olivos. Ellas fueron las que me hicieron gritar: «Padre, aleja de mi este cáliz, si es tu voluntad». Para ellas, la última esperanza de salvación consiste en recurrir a mi misericordia».',
    prayerToJesus:
      'Piadosísimo Jesús, que eres la compasión misma, te traigo a las almas tibias a la morada de tu muy compasivo Corazón. Que estas almas heladas que se parecen a cadáveres y te llenan de gran repugnancia se calienten con el fuego de tu amor puro. Oh piadosísimo Jesús, ejercita la omnipotencia de tu misericordia y atráelas al mismo ardor de tu amor y concédeles el amor santo, porque Tú lo puedes todo.',
    verse:
      'El fuego y el hielo no pueden estar juntos, ya que se apaga el fuego o se derrite el hielo. Pero tu misericordia, oh Dios, puede socorrer las miserias aún mayores.',
    prayerToFather:
      'Padre Eterno, vuelve tu mirada misericordiosa hacia las almas tibias que, sin embargo, están acogidas en el piadosísimo Corazón de Jesús. Padre de la misericordia, te suplico por la amarga Pasión de tu Hijo y por su agonía de tres horas en la Cruz, permite que también ellas glorifiquen el abismo de tu misericordia. Amén.',
    diaryRef: 'Diario 1228-1229',
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
      <Text style={styles.jesusWords}>{day.jesusWords}</Text>
      <Text style={styles.prayerText}>{day.prayerToJesus}</Text>
      <Text style={styles.verseText}>{day.verse}</Text>
      <Text style={styles.prayerText}>{day.prayerToFather}</Text>
      <Text style={styles.diaryRef}>({day.diaryRef})</Text>
    </View>
  );
}

export default function NovenaDivinaMisericordiaScreen() {
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
      <Stack.Screen options={{ title: 'Novena a la Divina Misericordia' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>NOVENA A LA DIVINA MISERICORDIA</Text>

        <View style={styles.block}>
          <SectionHeading>1. INICIO</SectionHeading>
          <Text style={styles.line}>
            <Text style={styles.prefix}>V. </Text>
            <Text style={styles.bodyText}>
              Novena a la Divina Misericordia. Por la señal. Acto de contrición.
            </Text>
          </Text>
        </View>

        <View style={styles.block}>
          <SectionHeading>2. ORACIÓN DE CADA DÍA</SectionHeading>
          <Instruction>
            El que dirige lee las palabras de Jesús y la oración del día correspondiente,
            indicando antes el día de la novena (v.gr.: «Día primero.»). Después de la oración se
            deja un minuto de silencio.
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
    fontSize: 20,
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
    color: '#000000',
    textAlign: 'center',
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
  jesusWords: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 26,
    marginBottom: 16,
  },
  prayerText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
    marginBottom: 16,
  },
  verseText: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: '#000000',
    lineHeight: 24,
    marginBottom: 16,
  },
  diaryRef: {
    fontFamily: Fonts.italic,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#000000',
    lineHeight: 22,
  },
});
