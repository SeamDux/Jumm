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

type PrimerSabadoMystery = {
  title: string;
  scripture: string;
  meditation: string[];
  canto: string;
};

const primerSabadoMysteries: PrimerSabadoMystery[] = [
  {
    title: 'La Encarnación del Hijo de Dios',
    scripture:
      'El Ángel anunció a María y le dijo: «No temas, María, porque has hallado gracia delante de Dios; vas a concebir en el seno y vas a dar a luz un Hijo, a quien pondrás por nombre Jesús». Dijo María: «He aquí la esclava del Señor; hágase en mí según tu palabra». Y el Ángel dejándola se fue. (Lc 1, 26-38)',
    meditation: [
      'El Ángel le anuncia a la Virgen que será la Madre de Dios. La Virgen, por ser la Inmaculada Concepción y la Llena de Gracia, dice «sí» a la voluntad del Padre, y recibe, por obra del Espíritu Santo, al Verbo de Dios, que se encarna en sus entrañas purísimas. De esta manera, la Virgen es nuestro modelo ideal y perfectísimo para recibir la Comunión eucarística, porque así como la Virgen creyó con su mente purísima la verdad de la Encarnación anunciada por el Ángel, así nosotros debemos creer, sin adherirnos a doctrinas extrañas ni a supersticiones, en el dogma de la presencia real de nuestro Señor Jesucristo en la Eucaristía, por la transubstanciación, producida en la santa Misa, en el momento de la consagración del pan y del vino, de manera tal que después de la consagración, ya no hay más pan ni vino, sino la substancia del Cuerpo, la Sangre, el Alma y la Divinidad de nuestro Señor Jesucristo. También, así como la Virgen se adhirió con todo su Corazón Inmaculado a su Hijo, que se encarnaba en sus entrañas, sin amar a nada ni a nadie que no fuera su Hijo Dios, también así nosotros, al comulgar, debemos tener un corazón puro, que ame a Jesús en la Eucaristía y a solo Él; y si ama a las creaturas, que sean en Él y por Él, y para Él, y nada que no sea por Él y para Él. También la Virgen lo recibió con su cuerpo purísimo, porque no hubo intervención de varón en la Concepción de Jesús; de la misma manera, nuestro cuerpo debe estar purificado por la penitencia, pero sobre todo, por la confesión sacramental, para recibir a Jesús Sacramentado, a imitación de María. Inmaculada Concepción, te pedimos que nos ayudes a que siempre te imitemos, para que recibamos a tu Hijo Jesús en la Eucaristía, con una mente, un corazón y un cuerpo puros, a imitación tuya, por la gracia santificante.',
    ],
    canto:
      'Bajado del cielo\nun Ángel llegó\ny anunció a María\nser Madre de Dios.\nAve, Ave, Ave María...',
  },
  {
    title: 'La Visitación de Nuestra Señora a su prima santa Isabel',
    scripture:
      'En aquellos días, se levantó María y se fue con prontitud a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel. Y sucedió que, en cuanto oyó Isabel el saludo de María, saltó de gozo el niño en su seno, e Isabel quedó llena de Espíritu Santo. (Lc 1, 39-46)',
    meditation: [
      'La Virgen, encinta por obra y gracia del Espíritu Santo, emprende un largo y peligroso viaje para socorrer a su prima, santa Isabel, encinta también ella. La visita de la Virgen causa alegría y gozo en Isabel y el Bautista, quien salta de gozo en el vientre de su madre, y el motivo de la alegría de ambos, es que con la visita de la Virgen llega Jesucristo, Dios encarnado, el Redentor. Con su visita, la Virgen nos enseña dos cosas: a obrar la misericordia con los más necesitados, y que su presencia maternal va siempre acompañada de la presencia de su Hijo Jesucristo, Dios, nuestro Señor. Visitemos a los enfermos de nuestra parroquia, sobre todo a aquellos que pertenecieron a las instituciones parroquiales, y hoy se encuentran solos y abandonados, y visitémoslos con el amor y la alegría de la Virgen y de Jesús.',
    ],
    canto:
      'Visita a su prima\nla Madre de Dios;\nal hijo la Madre\nla gracia llevó.\nAve, Ave, Ave María...',
  },
  {
    title: 'El Nacimiento del Hijo de Dios en el portal de Belén',
    scripture:
      'El Ángel les dijo a los pastores: «Les traigo una buena noticia, una gran alegría para todo el pueblo: Hoy, en la ciudad de David, les ha nacido un Salvador, que es el Mesías, el Señor. Y esto les servirá de señal: Encontrarán a un Niño recién nacido envuelto en pañales y acostado en un pesebre». Y junto con el Ángel, apareció de pronto una multitud del ejército celestial, que alababa a Dios, diciendo: «¡Gloria a Dios en las alturas, y en la tierra, paz a los hombres amados por Él». Después que los Ángeles volvieron al cielo, los pastores se decían unos a otros: «Vayamos a Belén, y veamos lo que ha sucedido y que el Señor nos ha anunciado». Fueron rápidamente y encontraron a María, a José, y al recién nacido acostado en el pesebre. (Lc 2, 11-16)',
    meditation: [
      'Jesús nace en un humilde portal de Belén. El Dios de majestad infinita; el Dios al que los cielos eternos no pueden contener; porque tanta es su grandeza, el Dios ante el cual los Ángeles postran sus frentes en adoración; ese Dios, nace como un niño humano, en una gruta excavada en la roca, utilizada como refugio para animales, en una noche fría y estrellada. Luego de nacer virginalmente, atravesando el abdomen superior de María Virgen, así como el rayo del sol atraviesa el cristal y lo deja intacto, antes, durante y después de atravesarlo, un Ángel lo recibe y se lo da a María, quien lo arropa con pañales, lo cubre con su manto, lo acuna entre sus brazos, colmándolo de amor maternal y lo amamanta. El Dios de majestad infinita, el Creador del universo visible e invisible, ha nacido como un niño más, indefenso, aterido, temblando por el frío, llorando de hambre, necesitado del amor de una madre, y del abrazo materno, que calme el desamparo que experimenta el bebé al pasar de la seguridad del vientre materno al mundo exterior. La Virgen obra la misericordia con su Niño Jesús, que está desamparado y desvalido, alimentándolo, abrigándolo, cuidándolo, y así nos da ejemplo para que nosotros obremos la misericordia para con nuestros prójimos más necesitados. Pidámosle, en este misterio, a la Virgen Inmaculada, que, a imitación suya, sepamos obrar la misericordia, para que así «atesoremos tesoros en el cielo», de manera tal que, en el día de nuestra muerte, recibamos misericordia de parte del Dios de infinita misericordia. Amén.',
    ],
    canto:
      'En pobre pesebre\nestá el Niño Dios\nhelado de frío\ny ardiendo de amor.\nAve, Ave, Ave María...',
  },
  {
    title: 'La Presentación del Niño Jesús en el templo y la Purificación de su Santísima Madre',
    scripture:
      'Cuando se cumplieron los días de la purificación de ellos, según la ley de Moisés, llevaron a Jesús a Jerusalén para presentarlo al Señor, como está escrito en la ley del Señor. (Lc 2, 22-40)',
    meditation: [
      'A los pocos días de nacer, la Virgen y san José llevan al Niño Dios al templo para el rito de la presentación, rito mediante el cual se consagraban los primogénitos a Dios. En nuestros días, el ateísmo de la sociedad materialista ha invadido a numerosos fieles, de manera tal que han perdido la noción del misterio sacramental y de la gracia santificante contenida en los sacramentos, y es así como se piensa que los sacramentos –principalmente, Bautismo, Primera Comunión, Confirmación, Matrimonio–, son meros eventos sociales, y no eventos salvíficos, en los cuales se hace presente Jesucristo con su sacrificio redentor, para donarnos la salvación. Los sacramentos, lejos de ser meros eventos sociales, utilizados para «aparentar» y «aparecer» con un barniz de cristiandad a los ojos de los hombres, pero conservando un corazón y costumbres paganos, son los «canales de la gracia», por donde se actualiza y vehiculiza el sacrificio redentor de Jesucristo; gracia que actuando en la raíz más profunda del ser metafísico del hombre, le concede la participación en la vida divina trinitaria y lo convierte en hijo adoptivo de Dios. Pidámosle en este misterio a la Virgen, morir al hombre viejo, el hombre dominado por las pasiones, por la superstición, por el error, por la concupiscencia, y nacer al hombre nuevo, y que sea Ella, la Inmaculada Concepción, quien nos presente, como niños recién nacidos, entre sus brazos, a su Hijo Jesús, Dios nuestro Señor.',
    ],
    canto:
      'Presenta en el templo\nla Madre a su Amor;\nespada cruenta\nle hirió el Corazón.\nAve, Ave, Ave María...',
  },
  {
    title: 'El Niño Jesús perdido y hallado en el templo',
    scripture:
      'Cuando Jesús cumplió los doce años, subieron todos a la fiesta, según la costumbre; al volverse, pasados aquellos días, el Niño Jesús se quedó en Jerusalén, sin saberlo sus padres. Creyendo ellos que estaría en la caravana, hicieron un día de camino. Luego se pusieron a buscarlo entre los parientes y conocidos; pero al no encontrarlo, se volvieron a Jerusalén en su busca. Y sucedió que, al cabo de tres días, lo encontraron en el templo, sentado en medio de los maestros, escuchándoles y preguntándoles. (Lc 2, 41-51)',
    meditation: [
      'Nuestro Señor, que tiene doce años, se queda en el templo, respondiendo las preguntas de los doctores y maestros de la ley. Mientras tanto, la Virgen y san José emprenden el regreso a su hogar, de forma separada, pensando cada uno que Jesús está con el otro. Luego de tres días, se percatan de que no es así, por lo que regresan apresuradamente a Jerusalén, pensando que Jesús se ha perdido. La realidad es que Jesús no se ha perdido en ningún momento, sino que ha permanecido siempre, en todo momento, en el templo. Muchas veces nos sucede lo mismo: Caminamos en dirección contraria al templo, en donde está Jesús, y lo perdemos de vista, y pensamos que Jesús nos ha abandonado; muchas veces, somos nosotros los que nos encaminamos hacia donde no está Jesús, y por eso creemos que Jesús nos ha dejado. Perdemos de vista a Jesús, pero porque vamos en dirección contraria adonde Jesús está: Jesús está en el templo; más concretamente, está en el Sagrario; más concretamente, está en la Eucaristía. No dirijamos nuestros pasos en dirección contraria al templo; no dirijamos nuestros pasos en dirección contraria al Sagrario; no dirijamos nuestros pasos en dirección contraria a la Eucaristía; dirijamos nuestros pasos hacia donde está Jesús: Jesús está en el templo parroquial; Jesús está en el Sagrario de la parroquia; Jesús está en la Eucaristía. Junto a María, que en Jerusalén se encuentra con su Hijo Jesús en el templo, vayamos también nosotros al templo parroquial, al Sagrario, a la Eucaristía, y hagamos Adoración Eucarística: Adoremos a nuestro Dios en la Eucaristía, que ha bajado del cielo para derramar su Amor inagotable e incontenible en nuestros corazones, en los corazones de todos aquellos que se acerquen a Él en la Eucaristía, con fe, con amor, y con un corazón contrito y humillado. María, Inmaculada Concepción, tú que encontraste a tu Hijo en el templo, llévanos de la mano al templo, al Sagrario, a la adoración eucarística, infúndenos tu mismo amor por la Eucaristía, para que amando a tu Hijo en la Eucaristía, en el tiempo que nos queda por vivir en esta vida terrena, lo continuemos amando por toda la eternidad, por los siglos de los siglos, en el Reino de los Cielos. Amén.',
    ],
    canto:
      'Perdido en el templo\nel Niño quedó.\nSus padres lo buscan\ncon sumo dolor.\nAve, Ave, Ave María...',
  },
];

const primerSabadoSerieIIMysteries: PrimerSabadoMystery[] = [
  {
    title: 'La Encarnación del Hijo de Dios',
    scripture:
      'Y el Ángel le dijo: «No temas María, porque has hallado gracia delante de Dios; concebirás en tu seno y darás a luz un Hijo y le pondrás por nombre Jesús». Dijo entonces María: «He aquí la esclava del Señor; hágase en mí según tu palabra». (Lc 1, 30-31, 38)',
    meditation: [
      '¡Oh Madre, Madre! Con esa palabra fiat, nos has hecho hermanos de Dios y herederos de su gloria. ¡Bendita seas! (San Josemaría Escrivá)',
      'En el seno de María Santísima había para Jesús amor, pureza, adoración, compañía, respeto, cuidado... Y cuando sale del sagrario y viene a mi miserable pecho, nada de eso halla. (Santa María Micaela)',
    ],
    canto:
      'Bajado del cielo\nun Ángel llegó\ny anunció a María\nser Madre de Dios.\nAve, Ave, Ave María...',
  },
  {
    title: 'La Visitación de Nuestra Señora a su prima santa Isabel',
    scripture:
      'Y en cuanto oyó el saludo de María, el niño saltó de gozo en su seno e Isabel quedó llena del Espíritu Santo; y exclamando en voz alta dijo: «¡Bendita tú entre las mujeres y bendito el fruto de tu vientre! ¿De dónde a mí tanto bien, que venga la Madre de mi Señor a visitarme?» (Lc 1, 41-43)',
    meditation: [
      'Únete a la escena de la visitación. Canta con María su Magnificat de acción de gracias. Da saltos de júbilo con el niño profeta y adora rendido el gran misterio de la Encarnación del Verbo. (San Buenaventura)',
      'Ya que os disteis tanta prisa en visitar y santificar la casa de Isabel, visitad la casa de mi alma. Mejor que yo sabéis lo pobre que es y cuán enferma se halla de tantos males. (San Alfonso María de Ligorio)',
    ],
    canto:
      'Visita a su prima\nla Madre de Dios;\nal hijo la Madre\nla gracia llevó.\nAve, Ave, Ave María...',
  },
  {
    title: 'El nacimiento del Hijo de Dios en el portal de Belén',
    scripture:
      'Y sucedió que estando en Belén le llegó la hora del parto, y dio a luz a su Hijo primogénito; lo envolvió en pañales y lo recostó en un pesebre, porque no había lugar para ellos en la posada. (Lc 2, 6-7)',
    meditation: [
      '¡Oh María!, la más dichosa de las madres y la más pura de las vírgenes, prestadme vuestro Corazón amante para amar a este divino Niño, que adoro en vuestros brazos y a quien quiero asemejarme a toda costa. (San Juan Eudes)',
      'El Niño Jesús viene a este mundo en tu busca. Ofrécete desde ahora como su pequeña oveja. No quieras otro pastor.',
    ],
    canto:
      'En pobre pesebre\nestá el Niño Dios\nhelado de frío\ny ardiendo de amor.\nAve, Ave, Ave María...',
  },
  {
    title: 'La Presentación del Niño Jesús en el templo y la Purificación de su Santísima Madre',
    scripture:
      'Y cumplidos los días de la purificación, llevaron a Jesús a Jerusalén para presentarlo al Señor y para presentar como ofrenda un par de tórtolas o dos pichones, según lo mandado por la ley del Señor. (Lc 2, 22-24)',
    meditation: [
      'María lleva en sus brazos a un tierno Niño, flor y fruto de su pureza virginal, para ofrecerlo al Señor como víctima de sacrificio. Y es que ese hijo de María es también el Hijo del Altísimo que debe ser inmolado para la redención de nuestros pecados. (San Juan Eudes)',
      'Ofrezcámonos también nosotros a Dios en rendido homenaje a su Divina Majestad. Mas hagámoslo por medio de Jesucristo y Este en brazos de su Madre, como el día de la Presentación.',
    ],
    canto:
      'Presenta en el templo\nla Madre a su Amor;\nespada cruenta\nle hirió el Corazón.\nAve, Ave, Ave María...',
  },
  {
    title: 'El Niño Jesús perdido y hallado en el templo',
    scripture:
      'Cuando tuvo doce años, subieron a la fiesta, como era costumbre. Pasados aquellos días, al regresar, el Niño Jesús se quedó en Jerusalén, sin que lo advirtiesen sus padres; y ocurrió que, al cabo de tres días, lo encontraron en el templo, sentado en medio de los doctores, escuchándolos y preguntándoles. (Lc 2, 42-43, 46)',
    meditation: [
      'El Señor envía o permite a veces abandonos y oscuridades, tedios y cansancios que lo ocultan a las miradas del alma para mantenernos en humildad, hacernos adquirir méritos, consolidar nuestra virtud, formarnos en la paciencia y conformidad con la Voluntad Divina; o para que lo busquemos con afán. (San Juan Eudes)',
      'Aunque uno posea todos los bienes del mundo, si ha perdido a Dios, todas las cosas de la tierra se le han convertido en humo y vanidad. (San Alfonso María de Ligorio)',
    ],
    canto:
      'Perdido en el templo\nel Niño quedó.\nSus padres lo buscan\ncon sumo dolor.\nAve, Ave, Ave María...',
  },
];

function PrimerSabadoMysteryItem({
  index,
  mystery,
}: {
  index: number;
  mystery: PrimerSabadoMystery;
}) {
  return (
    <View style={styles.mysteryItem}>
      <Text style={styles.mysteryTitle}>
        {index + 1}. {mystery.title}
      </Text>
      <Text style={styles.mysteryText}>{mystery.scripture}</Text>

      <Text style={styles.primerSabadoHeading}>Meditación</Text>
      {mystery.meditation.map((paragraph, paragraphIndex) => (
        <Text
          key={paragraphIndex}
          style={[styles.mysteryText, paragraphIndex > 0 && styles.meditationParagraphSpacing]}
        >
          {paragraph}
        </Text>
      ))}

      <Text style={styles.primerSabadoHeading}>Canto Mariano</Text>
      <Text style={styles.cantoText}>{mystery.canto}</Text>
    </View>
  );
}

function PrimerSabadoContent({ mysteries }: { mysteries: PrimerSabadoMystery[] }) {
  return (
    <View>
      {mysteries.map((mystery, index) => (
        <PrimerSabadoMysteryItem key={index} index={index} mystery={mystery} />
      ))}
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
          id="primer-sabado"
          title="PRIMER SÁBADO DE MES"
          expanded={!!expandedIds['primer-sabado']}
          onToggle={() => toggleSection('primer-sabado')}
        >
          <PrimerSabadoContent mysteries={primerSabadoMysteries} />
        </CollapsibleSection>

        <CollapsibleSection
          id="primer-sabado-serie-ii"
          title="PRIMER SÁBADO DE MES"
          subtitle="Serie II: De varios Santos"
          expanded={!!expandedIds['primer-sabado-serie-ii']}
          onToggle={() => toggleSection('primer-sabado-serie-ii')}
        >
          <PrimerSabadoContent mysteries={primerSabadoSerieIIMysteries} />
        </CollapsibleSection>

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
  primerSabadoHeading: {
    fontFamily: Fonts.italic,
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    marginTop: 14,
    marginBottom: 8,
  },
  meditationParagraphSpacing: {
    marginTop: 12,
  },
  cantoText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
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
    color: Colors.liturgicalRed,
    lineHeight: 28,
  },
});
