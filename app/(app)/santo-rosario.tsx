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

type Mystery = {
  title: string;
  text: string;
};

type MysteryGroup = {
  id: string;
  title: string;
  days: string;
  mysteries: Mystery[];
};

type BilingualLine = {
  es: string;
  la: string;
};

type BilingualExchange = {
  vEs: string;
  vLa: string;
  rEs: string;
  rLa: string;
};

const mysteryGroups: MysteryGroup[] = [
  {
    id: 'gozosos',
    title: 'MISTERIOS GOZOSOS',
    days: 'lunes, sábados',
    mysteries: [
      {
        title: 'La Encarnación del Hijo de Dios',
        text: 'El Ángel Gabriel fue enviado por Dios a una virgen llamada María. El Ángel le dijo: «Concebirás en tu vientre y darás a luz un hijo, y le pondrás por nombre Jesús». (cf. Lc 1, 28-31)',
      },
      {
        title: 'La Visitación de Nuestra Señora a su prima santa Isabel',
        text: 'Aconteció que, en cuanto Isabel oyó el saludo de María, saltó la criatura en su vientre. Se llenó Isabel de Espíritu Santo. (Lc 1, 41)',
      },
      {
        title: 'El Nacimiento del Hijo de Dios en el portal de Belén',
        text: 'Y sucedió que mientras estaban allí, le llegó a Ella el tiempo del parto y dio a luz a su Hijo primogénito, lo envolvió en pañales y lo recostó en un pesebre. (Lc 2, 6-7b)',
      },
      {
        title: 'La Presentación del Niño Jesús en el templo y la Purificación de Nuestra Señora',
        text: 'Cuando se cumplieron los días de su purificación, según la ley de Moisés, lo llevaron a Jerusalén para presentarlo al Señor. (Lc 2, 22)',
      },
      {
        title: 'El Niño Jesús perdido y hallado en el templo',
        text: 'A los tres días lo encontraron en el templo... y le dijo su Madre «Hijo, ¿por qué nos has tratado así?...». Él les contestó: «¿Por qué me buscabais? ¿No sabíais que yo debía estar en las cosas de mi Padre?» (Lc 2, 46a; 48-49)',
      },
    ],
  },
  {
    id: 'luminosos',
    title: 'MISTERIOS LUMINOSOS',
    days: 'jueves',
    mysteries: [
      {
        title: 'El Bautismo de Cristo en el Jordán',
        text: 'Y sucedió que por aquellos días llegó Jesús desde Nazaret de Galilea y fue bautizado por Juan en el Jordán. Apenas salió del agua, vio rasgarse los cielos y al Espíritu que bajaba hacia Él como una paloma. (Mc 1, 9-10)',
      },
      {
        title: 'La Autorrevelación de Cristo en las bodas de Caná',
        text: 'La Madre de Jesús le dice: «No tienen vino». Su Madre dice a los sirvientes: «Haced lo que Él os diga». Jesús les dice: «Llenad las tinajas de agua» y el mayordomo probó el agua convertida en vino sin saber de dónde venía. (cf. Jn 2, 3-9)',
      },
      {
        title: 'El Anuncio del Reino de Dios invitando a la conversión',
        text: 'Entonces comenzó Jesús a predicar diciendo: «Convertíos, porque está cerca el Reino de los Cielos». (Mt 4, 17)',
      },
      {
        title: 'La Transfiguración del Señor',
        text: 'Seis días más tarde, Jesús tomó consigo a Pedro, a Santiago y a su hermano Juan, y subió con ellos aparte a un monte alto. Se transfiguró delante de ellos, y su rostro resplandecía como el sol, y sus vestidos se volvieron blancos como la luz. (Mt 17, 1-2)',
      },
      {
        title: 'La Institución de la Eucaristía, expresión sacramental del misterio Pascual',
        text: 'Y, tomando pan, lo partió y se lo dio, diciendo: «Esto es mi cuerpo, que se entrega por vosotros. Después de cenar, hizo lo mismo con el cáliz, diciendo: «Este cáliz es la nueva alianza en mi sangre, que es derramada por vosotros». (cf. Lc 22, 19-20)',
      },
    ],
  },
  {
    id: 'dolorosos',
    title: 'MISTERIOS DOLOROSOS',
    days: 'martes, viernes',
    mysteries: [
      {
        title: 'La Oración del Señor en el Huerto',
        text: 'En medio de su angustia oraba con más intensidad: «¡Abbá!, Padre: Tú lo puedes todo, aparta de mí este cáliz. Pero no se haga como yo quiero, sino como tú quieres». (Lc 22, 44a; Mc 14, 36)',
      },
      {
        title: 'La Flagelación del Señor',
        text: 'Y Pilato, queriendo complacer a la gente, les soltó a Barrabás; y a Jesús, después de azotarlo lo entregó para que lo crucificaran. (Mc 15, 15)',
      },
      {
        title: 'La Coronación de espinas',
        text: 'Los soldados se llevaron a Jesús al pretorio, lo desnudaron y trenzando una corona de espinas se la ciñeron en la cabeza. Y se burlaban de Él. (cf. Mt 27, 29)',
      },
      {
        title: 'Jesús con la Cruz a cuestas',
        text: 'Tomaron a Jesús, y, cargando Él mismo con la Cruz, salió al sitio llamado «de La Calavera» (que en hebreo se dice Gólgota). (Jn 19, 16-17)',
      },
      {
        title: 'La Crucifixión y muerte del Señor',
        text: 'Y cuando llegaron al lugar llamado «La Calavera», lo crucificaron. Vinieron las tinieblas sobre toda la tierra, hasta la hora nona. Y Jesús, clamando con voz potente, dijo: «Padre, a tus manos encomiendo mi espíritu». Y, dicho esto, expiró. (Lc 23, 33; 44-46)',
      },
    ],
  },
  {
    id: 'gloriosos',
    title: 'MISTERIOS GLORIOSOS',
    days: 'miércoles, domingos',
    mysteries: [
      {
        title: 'La Resurrección del Señor',
        text: 'Al alborear el primer día de la semana, fueron a ver el sepulcro. El Ángel habló a las mujeres: «Vosotras no temáis, ya sé que buscáis a Jesús. No está aquí: ¡Ha resucitado! (cf. Mt 28, 1-6)',
      },
      {
        title: 'La Ascensión del Señor',
        text: 'Y los sacó hasta cerca de Betania y, levantando sus manos, los bendijo. Y mientras los bendecía, se separó de ellos, y fue llevado al cielo. (Lc 24, 50-51)',
      },
      {
        title: 'La Venida del Espíritu Santo sobre María Santísima y el Colegio Apostólico',
        text: 'Al cumplirse el día de Pentecostés, vieron aparecer unas lenguas como llamaradas, posándose encima de cada uno de ellos, y se llenaron todos de Espíritu Santo. (Hch 2, 1-4)',
      },
      {
        title: 'La Asunción de Nuestra Señora en cuerpo y alma al cielo',
        text: '¿Quién es esta que despunta como el alba, hermosa como la luna, refulgente como el sol, imponente como un batallón? (Cant 6, 10)',
      },
      {
        title: 'La Coronación de la Santísima Virgen María como Reina y Señora de todo lo creado',
        text: 'Un gran signo apareció en el cielo: Una mujer vestida del sol, y la luna bajo sus pies y una corona de doce estrellas sobre su cabeza. (Ap 12, 1b)',
      },
    ],
  },
];

const kyrieExchanges: BilingualExchange[] = [
  {
    vEs: 'Señor, ten piedad,',
    vLa: 'Kýrie, eléison,',
    rEs: 'Señor, ten piedad.',
    rLa: 'Kýrie, eléison.',
  },
  {
    vEs: 'Cristo, ten piedad,',
    vLa: 'Christe, eléison,',
    rEs: 'Cristo, ten piedad.',
    rLa: 'Christe, eléison.',
  },
  {
    vEs: 'Señor, ten piedad,',
    vLa: 'Kýrie, eléison,',
    rEs: 'Señor, ten piedad.',
    rLa: 'Kýrie, eléison.',
  },
  {
    vEs: 'Cristo, óyenos.',
    vLa: 'Christe, audi nos.',
    rEs: 'Cristo, óyenos.',
    rLa: 'Christe, audi nos.',
  },
  {
    vEs: 'Cristo, escúchanos.',
    vLa: 'Christe, exaudi nos.',
    rEs: 'Cristo, escúchanos.',
    rLa: 'Christe, exaudi nos.',
  },
];

const misericordiaTitles: BilingualLine[] = [
  { es: 'Dios, Padre celestial,', la: 'Pater de caelis, Deus,' },
  { es: 'Dios, Hijo Redentor del mundo,', la: 'Fili, Redemptor mundi, Deus,' },
  { es: 'Dios, Espíritu Santo,', la: 'Spiritus Sancte, Deus,' },
  { es: 'Trinidad Santa, un solo Dios,', la: 'Sancta Trínitas, unus Deus,' },
];

const mariaTitles: BilingualLine[] = [
  { es: 'Santa Madre de Dios,', la: 'Sancta Dei Génitrix,' },
  { es: 'Santa Virgen de las vírgenes,', la: 'Sancta Virgo vírginum,' },
  { es: 'Madre de Cristo,', la: 'Mater Christi,' },
  { es: 'Madre de la Iglesia,', la: 'Mater Ecclesiae,' },
  { es: 'Madre de la divina gracia,', la: 'Mater divínae grátiae,' },
  { es: 'Madre purísima,', la: 'Mater puríssima,' },
  { es: 'Madre castísima,', la: 'Mater castíssima,' },
  { es: 'Madre intacta,', la: 'Mater invioláta,' },
  { es: 'Madre incorrupta,', la: 'Mater intemeráta,' },
  { es: 'Madre inmaculada,', la: 'Mater immaculáta,' },
  { es: 'Madre amable,', la: 'Mater amábilis,' },
  { es: 'Madre admirable,', la: 'Mater admirábilis,' },
  { es: 'Madre del buen consejo,', la: 'Mater boni consílii,' },
  { es: 'Madre del Creador,', la: 'Mater Creatóris,' },
  { es: 'Madre del Salvador,', la: 'Mater Salvatóris,' },
  { es: 'Virgen prudentísima,', la: 'Virgo prudentíssima,' },
  { es: 'Virgen digna de veneración,', la: 'Virgo veneránda,' },
  { es: 'Virgen digna de alabanza,', la: 'Virgo praedicánda,' },
  { es: 'Virgen poderosa,', la: 'Virgo pótens,' },
  { es: 'Virgen clemente,', la: 'Virgo clémens,' },
  { es: 'Virgen fiel,', la: 'Virgo fidélis,' },
  { es: 'Espejo de Justicia,', la: 'Spéculum iustítiae,' },
  { es: 'Trono de la Sabiduría,', la: 'Sedes Sapiéntiae,' },
  { es: 'Causa de nuestra alegría,', la: 'Causa nostrae laetítiae,' },
  { es: 'Vaso espiritual,', la: 'Vas spirituále,' },
  { es: 'Vaso digno de honor,', la: 'Vas honorábile,' },
  { es: 'Vaso insigne de devoción,', la: 'Vas insígne devotiónis,' },
  { es: 'Rosa Mística,', la: 'Rosa Mystica,' },
  { es: 'Torre de David,', la: 'Turris Davídica,' },
  { es: 'Torre de Marfil,', la: 'Turris Ebúrnea,' },
  { es: 'Casa de Oro,', la: 'Domus Aúrea,' },
  { es: 'Arca de la Alianza,', la: 'Foéderis Arca,' },
  { es: 'Puerta del Cielo,', la: 'Iánua Caeli,' },
  { es: 'Estrella de la Mañana,', la: 'Stella Matutína,' },
  { es: 'Salud de los enfermos,', la: 'Salus infirmórum,' },
  { es: 'Refugio de los pecadores,', la: 'Refúgium peccatórum,' },
  { es: 'Consoladora de los afligidos,', la: 'Consolátrix afflictórum,' },
  { es: 'Auxilio de los cristianos,', la: 'Auxílium christianórum,' },
  { es: 'Reina de los Ángeles,', la: 'Regína Angelórum,' },
  { es: 'Reina de los Patriarcas,', la: 'Regína Patriarchárum,' },
  { es: 'Reina de los Profetas,', la: 'Regína Prophetárum,' },
  { es: 'Reina de los Apóstoles,', la: 'Regína Apostolórum,' },
  { es: 'Reina de los Mártires,', la: 'Regína Mártyrum,' },
  { es: 'Reina de los Confesores,', la: 'Regína Confessórum,' },
  { es: 'Reina de las Vírgenes,', la: 'Regína Vírginum,' },
  { es: 'Reina de todos los Santos,', la: 'Regína Sanctórum ómnium,' },
  { es: 'Reina concebida sin pecado original,', la: 'Regína sine labe origináli concépta,' },
  { es: 'Reina asunta al cielo,', la: 'Regína in caelum assúmpta,' },
  { es: 'Reina del Santísimo Rosario,', la: 'Regína Sacratíssimi Rosárii,' },
  { es: 'Reina de la familia,', la: 'Regína familiae,' },
  { es: 'Reina de la paz,', la: 'Regína pacis,' },
  { es: 'Mediadora Maternal de todas las gracias,', la: 'Mediátrix Materna ómnium gratiárum,' },
  {
    es: 'Nuestra Señora del Encuentro con Dios, Reina y Madre de la Familia Espiritual del P. Molina,',
    la: 'Nostra Dómina nos portans obviam Deo, Regína et Mater Familae Spiritualis Patris Molinae,',
  },
];

const agnusDeiExchanges: BilingualExchange[] = [
  {
    vEs: 'Cordero de Dios que quitas los pecados del mundo,',
    vLa: 'Agnus Dei, qui tollis peccáta mundi,',
    rEs: 'Perdónanos Señor.',
    rLa: 'Parce nobis, Dómine.',
  },
  {
    vEs: 'Cordero de Dios que quitas los pecados del mundo,',
    vLa: 'Agnus Dei, qui tollis peccáta mundi,',
    rEs: 'Escúchanos Señor.',
    rLa: 'Exáudi nos, Dómine.',
  },
  {
    vEs: 'Cordero de Dios que quitas los pecados del mundo,',
    vLa: 'Agnus Dei, qui tollis peccáta mundi,',
    rEs: 'Ten misericordia de nosotros.',
    rLa: 'Miserére nobis.',
  },
];

function BilingualExchangeBlock({ exchange }: { exchange: BilingualExchange }) {
  return (
    <View style={styles.exchangeBlock}>
      <BilingualRow es={`V. ${exchange.vEs}`} la={`V. ${exchange.vLa}`} prefix />
      <BilingualRow es={`R. ${exchange.rEs}`} la={`R. ${exchange.rLa}`} prefix />
    </View>
  );
}

function BilingualRow({
  es,
  la,
  prefix,
}: {
  es: string;
  la: string;
  prefix?: boolean;
}) {
  return (
    <View style={styles.bilingualRow}>
      <Text style={[styles.bilingualEs, prefix && styles.prefixText]}>{es}</Text>
      <Text style={[styles.bilingualLa, prefix && styles.prefixText]}>{la}</Text>
    </View>
  );
}

function BilingualTitleRow({ line }: { line: BilingualLine }) {
  return <BilingualRow es={line.es} la={line.la} />;
}

function MysteryItem({ index, mystery }: { index: number; mystery: Mystery }) {
  return (
    <View style={styles.mysteryItem}>
      <Text style={styles.mysteryTitle}>
        {index + 1}. {mystery.title}
      </Text>
      <Text style={styles.mysteryText}>{mystery.text}</Text>
    </View>
  );
}

function CollapsibleSection({
  id,
  title,
  subtitle,
  expanded,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
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
        <View style={styles.accordionHeaderText}>
          <Text style={styles.groupTitle}>{title}</Text>
          {subtitle ? <Text style={styles.groupDays}>{subtitle}</Text> : null}
        </View>
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

function LetaniasLauretanasContent() {
  return (
    <View>
      <Text style={styles.instruction}>
        Terminados los cinco misterios, se rezan (o se cantan) las Letanías Lauretanas.
      </Text>

      <Text style={styles.sectionHeading}>V. Letanías Lauretanas.</Text>

      {kyrieExchanges.map((exchange, index) => (
        <BilingualExchangeBlock key={index} exchange={exchange} />
      ))}

      <BilingualExchangeBlock
        exchange={{
          vEs: 'Dios, Padre celestial,',
          vLa: 'Pater de caelis, Deus,',
          rEs: 'Ten misericordia de nosotros.',
          rLa: 'Miserere nobis.',
        }}
      />
      {misericordiaTitles.slice(1).map((line, index) => (
        <BilingualTitleRow key={index} line={line} />
      ))}
      <BilingualRow es="R. Ten misericordia de nosotros." la="R. Miserere nobis." prefix />

      <View style={styles.litanyDivider} />

      <BilingualExchangeBlock
        exchange={{
          vEs: 'Santa María,',
          vLa: 'Sancta Maria,',
          rEs: 'Ruega por nosotros.',
          rLa: 'Ora pro nobis.',
        }}
      />
      {mariaTitles.map((line, index) => (
        <BilingualTitleRow key={index} line={line} />
      ))}
      <BilingualRow es="R. Ruega por nosotros." la="R. Ora pro nobis." prefix />

      <View style={styles.litanyDivider} />

      {agnusDeiExchanges.map((exchange, index) => (
        <BilingualExchangeBlock key={index} exchange={exchange} />
      ))}

      <BilingualExchangeBlock
        exchange={{
          vEs: 'Ruega por nosotros, santa Madre de Dios,',
          vLa: 'Ora pro nobis, sancta Dei Génitrix,',
          rEs: 'Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo.',
          rLa: 'Ut digni efficiámur promissiónibus Christi.',
        }}
      />

      <View style={styles.litanyDivider} />

      <BilingualRow
        es="V. Oremos. Te rogamos, Señor y Dios nuestro, que concedas a nosotros tus siervos, gozar de perpetua salud de alma y cuerpo; y por la gloriosa intercesión de la bienaventurada siempre Virgen María, ser librados de la tristeza presente y disfrutar de la eterna alegría. Por Cristo nuestro Señor."
        la="V. Orémus. Concéde nos fámulos tuos, quaésumus, Dómine Deus, perpétua mentis et córporis sanitáte gaudére, et, gloriósa beátae Maríae semper Virginis intercessione, a praesénti liberári tristitia et aetérna pérfrui laetítia. Per Christum Dóminum nostrum."
        prefix
      />
      <BilingualRow es="R. Amén." la="R. Amen." prefix />
    </View>
  );
}

function IntencionesComunesContent() {
  return (
    <View>
      <Text style={styles.versicleLine}>
        <Text style={styles.prefix}>V. </Text>
        <Text style={styles.bodyText}>
          Por las intenciones del Sumo Pontífice, para ganar las indulgencias concedidas.
        </Text>
      </Text>
      <Text style={styles.plainLine}>Padrenuestro. Avemaría. Gloria.</Text>

      <Text style={styles.versicleLine}>
        <Text style={styles.prefix}>V. </Text>
        <Text style={styles.bodyText}>Por las benditas almas del purgatorio.</Text>
      </Text>
      <Text style={styles.plainLine}>Padrenuestro. Avemaría. Gloria.</Text>

      <Text style={styles.versicleLine}>
        <Text style={styles.prefix}>V. </Text>
        <Text style={styles.bodyText}>
          Por la Familia Espiritual del P. Molina, por las intenciones del Reinado de María y sus
          miembros.
        </Text>
      </Text>
      <Text style={styles.plainLine}>Padrenuestro. Avemaría. Gloria.</Text>
    </View>
  );
}

function SalveReginaContent() {
  return (
    <View>
      <Text style={styles.versicleLine}>
        <Text style={styles.prefix}>V. </Text>
        <Text style={styles.bodyText}>Una Salve al Inmaculado Corazón de María.</Text>
      </Text>

      <Text style={styles.salveText}>
        <Text style={styles.dropCap}>D</Text>
        ios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te
        salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en
        este valle de lágrimas. Ea, pues, Señora Abogada nuestra, vuelve a nosotros esos tus ojos
        misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu
        vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros,
        santa Madre de Dios, para que seamos dignos de alcanzar las promesas de nuestro Señor
        Jesucristo. Amén.
      </Text>

      <Text style={styles.versicleLine}>
        <Text style={styles.prefix}>V. </Text>
        <Text style={styles.bodyText}>Ave María purísima,</Text>
      </Text>
      <Text style={styles.versicleLine}>
        <Text style={styles.prefix}>R. </Text>
        <Text style={styles.bodyText}>Sin pecado concebida.</Text>
      </Text>
    </View>
  );
}

export default function SantoRosarioScreen() {
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
      <Stack.Screen options={{ title: 'Santo Rosario' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>SANTO ROSARIO</Text>

        {mysteryGroups.map((group) => (
          <CollapsibleSection
            key={group.id}
            id={group.id}
            title={group.title}
            subtitle={`(${group.days})`}
            expanded={!!expandedIds[group.id]}
            onToggle={() => toggleSection(group.id)}
          >
            {group.mysteries.map((mystery, index) => (
              <MysteryItem key={index} index={index} mystery={mystery} />
            ))}
          </CollapsibleSection>
        ))}

        <CollapsibleSection
          id="letanias"
          title="5. LETANÍAS LAURETANAS"
          expanded={!!expandedIds.letanias}
          onToggle={() => toggleSection('letanias')}
        >
          <LetaniasLauretanasContent />
        </CollapsibleSection>

        <CollapsibleSection
          id="intenciones"
          title="6. INTENCIONES COMUNES"
          expanded={!!expandedIds.intenciones}
          onToggle={() => toggleSection('intenciones')}
        >
          <IntencionesComunesContent />
        </CollapsibleSection>

        <CollapsibleSection
          id="salve"
          title="7. SALVE REGINA"
          expanded={!!expandedIds.salve}
          onToggle={() => toggleSection('salve')}
        >
          <SalveReginaContent />
        </CollapsibleSection>
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
    paddingHorizontal: 16,
    paddingVertical: 28,
    paddingBottom: 40,
  },
  mainTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
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
  },
  accordionHeaderExpanded: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },
  accordionHeaderText: {
    flex: 1,
    marginRight: 12,
  },
  groupTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    letterSpacing: 0.3,
  },
  groupDays: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    marginTop: 4,
  },
  accordionBody: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: Colors.lightGray,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: Colors.white,
  },
  mysteryItem: {
    marginBottom: 20,
  },
  mysteryTitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 24,
  },
  mysteryText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    lineHeight: 26,
  },
  instruction: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    marginBottom: 16,
    lineHeight: 24,
  },
  sectionHeading: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 14,
  },
  exchangeBlock: {
    marginBottom: 10,
  },
  bilingualRow: {
    flexDirection: 'row',
    marginBottom: 4,
    gap: 8,
  },
  bilingualEs: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#000000',
    lineHeight: 22,
  },
  bilingualLa: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: '#000000',
    lineHeight: 22,
  },
  prefixText: {
    fontFamily: Fonts.bold,
    fontWeight: '700',
    color: Colors.liturgicalRed,
  },
  litanyDivider: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 14,
  },
  versicleLine: {
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
    marginBottom: 16,
    lineHeight: 26,
  },
  salveText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    lineHeight: 26,
    marginBottom: 16,
  },
  dropCap: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    lineHeight: 28,
  },
});
