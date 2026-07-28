import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

type PrayerSectionProps = {
  title: string;
  subtitle?: string;
  initial: string;
  paragraphs: string[];
};

function PrayerSection({ title, subtitle, initial, paragraphs }: PrayerSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
      {paragraphs.map((paragraph, index) => (
        <Text key={index} style={[styles.prayerText, index > 0 && styles.paragraphSpacing]}>
          {index === 0 ? (
            <>
              <Text style={styles.dropCap}>{initial}</Text>
              {paragraph}
            </>
          ) : (
            paragraph
          )}
        </Text>
      ))}
    </View>
  );
}

export default function AccionGraciasPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Acción de Gracias' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>ACCIÓN DE GRACIAS{'\n'}DESPUÉS DE LA COMUNIÓN</Text>

        <PrayerSection
          title="ALMA DE CRISTO"
          initial="A"
          paragraphs={[
            'lma de Cristo, santifícame. / Cuerpo de Cristo, sálvame. / Sangre de Cristo, embriágame. / Agua del costado de Cristo, lávame. / Pasión de Cristo, confórtame. / Oh buen Jesús, óyeme. / Dentro de tus llagas, escóndeme. / No permitas que me separe de ti. / Del maligno enemigo, defiéndeme. / En la hora de mi muerte, llámame. / Y mándame ir a ti, / para que con tus Ángeles y Santos / te alabe y te bendiga, / por los siglos de los siglos. Amén.',
          ]}
        />

        <PrayerSection
          title="OBLACIÓN DE SAN IGNACIO"
          initial="T"
          paragraphs={[
            'omad, Señor, y recibid / toda mi libertad, / mi memoria, / mi entendimiento / y toda mi voluntad; / todo mi haber y mi poseer. / Vos me lo disteis; / a Vos, Señor, lo torno, / todo es vuestro; / disponed de ello a toda vuestra voluntad, / dadme vuestro amor y vuestra gracia, / que esta me basta. Amén.',
          ]}
        />

        <PrayerSection
          title="A JESUCRISTO CRUCIFICADO"
          initial="M"
          paragraphs={[
            'iradme, / oh mi amado y buen Jesús, / postrado en vuestra santísima presencia, / os ruego con el mayor fervor / imprimáis en mi corazón / vivos sentimientos / de fe, esperanza y caridad; / verdadero dolor de mis pecados / y propósito firmísimo de jamás ofenderos; / mientras que yo, / con todo el amor y compasión de que soy capaz, / voy contemplando vuestras cinco llagas, / comenzando por aquello que dijo de Vos, ¡oh buen Jesús!, el santo profeta David: / «Han taladrado mis manos y mis pies, / y se pueden contar todos mis huesos».',
          ]}
        />

        <PrayerSection
          title="ACTO DE CONTRICIÓN"
          initial="N"
          paragraphs={[
            'o me mueve, mi Dios, para quererte, / el cielo que me tienes prometido, / ni me mueve el infierno tan temido / para dejar por eso de ofenderte. / Tú me mueves, Señor, / muéveme el verte clavado en una Cruz y escarnecido; / muéveme el ver tu cuerpo tan herido; / muévenme tus afrentas y tu muerte. / Muéveme, en fin, tu amor, y en tal manera / que, aunque no hubiera cielo, yo te amara, / y, aunque no hubiera infierno, te temiera. / No me tienes que dar porque te quiera, / pues, aunque lo que espero no esperara, / lo mismo que te quiero te quisiera.',
          ]}
        />

        <PrayerSection
          title="ORACIÓN DE SAN BUENAVENTURA"
          initial="J"
          paragraphs={[
            'esús y Señor mío, traspasa el centro de mi alma con el suave dardo de tu amor, y con la misma caridad de los Apóstoles para que le abrase el deseo de poseerte. Que por ti suspire y anhele estar en tu casa, sin otra aspiración que verse libre para unirse contigo. Haz que mi alma tenga hambre de ti, Pan de los Ángeles, alimento cotidiano de los Santos, lleno de toda fuerza y dulzura, que hace sentir la delicia de su sabor a cuantos comen de Él.',
            'Jesús mío, a quien desean contemplar los Ángeles, haz que mi corazón tenga siempre sed de ti, fuente de vida, manantial de sabiduría y ciencia, río de luz eterna, torrente de delicias, abundancia de la casa de Dios; que te desee, te busque, te halle; que a ti vaya y a ti llegue; en ti piense, de ti hable, y todas mis acciones encamine a honra y gloria de tu Nombre, con humildad y discreción, con amor y con alegría, facilidad y afecto, con perseverancia hasta el fin; para que Tú solo seas siempre toda mi esperanza, mi confianza, mi riqueza, mi deleite, mi contento, mi gozo, mi descanso y mi tranquilidad; mi paz, mi suavidad, mi perfume, mi dulzura, mi comida, mi alimento, mi refugio, mi auxilio, mi sabiduría, mi herencia, mi posesión, mi tesoro, en el cual esté siempre fija y firme, e inconmoviblemente arraigada mi alma y mi corazón. Amén.',
          ]}
        />

        <PrayerSection
          title="ORACIÓN UNIVERSAL"
          subtitle="PAPA CLEMENTE XI"
          initial="C"
          paragraphs={[
            'reo en ti, Señor, pero ayúdame a creer con más firmeza; espero en ti, pero ayúdame a esperar con más confianza; te amo, Señor, pero ayúdame a amarte más ardientemente; estoy arrepentido, pero ayúdame a tener mayor dolor. Te adoro, Señor, porque eres mi Creador, y te anhelo porque eres mi último fin; te alabo porque no te cansas de hacerme el bien, y me refugio en ti porque eres mi protector.',
            'Que tu sabiduría, Señor, me dirija y tu justicia me reprima; que tu misericordia me consuele y tu poder me defienda.',
            'Te ofrezco, Señor, mis pensamientos, para que se dirijan a ti; te ofrezco mis palabras, para que hablen de ti; te ofrezco mis obras, para que todo lo haga por ti; te ofrezco mis penas, para que las sufra por ti.',
            'Todo aquello que quieres Tú, Señor, lo quiero yo; precisamente porque lo quieres Tú, quiero como lo quieras Tú, y durante todo el tiempo que lo quieras Tú.',
            'Te pido, Señor, que ilumines mi entendimiento, que inflames mi voluntad, que purifiques mi corazón y santifiques mi alma. Ayúdame a apartarme de mis pasadas iniquidades, a rechazar las tentaciones futuras, a vencer mis inclinaciones al mal y a cultivar las virtudes necesarias.',
            'Concédeme, Dios de bondad, amor a ti, odio a mí, celo por el prójimo y desprecio a lo mundano.',
            'Dame tu gracia para ser obediente con mis superiores, ser comprensivo con mis inferiores, saber aconsejar a mis amigos y perdonar a mis enemigos.',
            'Que venza la sensualidad con la mortificación, con generosidad la avaricia, con bondad la ira, con fervor la tibieza. Que sepa tener prudencia, Señor, al aconsejar, valor frente a los peligros, paciencia en las dificultades, humildad en la prosperidad.',
            'Concédeme, Señor, atención al orar, sobriedad al comer, responsabilidad en mi trabajo y firmeza en mis propósitos. Ayúdame a conservar la pureza de alma, a ser modesto en mis actitudes, ejemplar en mis conversaciones y a llevar una vida ordenada.',
            'Concédeme tu ayuda para dominar mis instintos, para fomentar en mí tu vida de gracia, para cumplir tus mandamientos y obtener la salvación. Enséñame, Señor, a comprender la pequeñez de lo terreno, la grandeza de lo divino, la brevedad de esta vida y la eternidad de la futura. Concédeme una buena preparación para la muerte y un santo temor al juicio, para librarme del infierno y alcanzar el paraíso. Por Cristo nuestro Señor. Amén.',
          ]}
        />

        <PrayerSection
          title="ORACIÓN DEL ÁNGEL DE FÁTIMA"
          initial="D"
          paragraphs={[
            'ios mío, yo creo, / adoro, espero y te amo. / Te pido perdón / por los que no creen, / no adoran, / no esperan y no te aman.',
          ]}
        />

        <PrayerSection
          title="BENDITA SEA TU PUREZA"
          initial="B"
          paragraphs={[
            'endita sea tu pureza / y eternamente lo sea, / pues todo un Dios se recrea / en tan graciosa belleza; / a ti celestial Princesa, / oh Virgen sagrada, María, / yo te ofrezco en este día / alma, vida y corazón, / mírame con compasión, / no me dejes, Madre mía.',
          ]}
        />

        <PrayerSection
          title="EL MAGNÍFICAT"
          initial="P"
          paragraphs={[
            'roclama mi alma la grandeza del Señor, se alegra mi espíritu en Dios, mi Salvador; porque ha mirado la humildad de su esclava. Desde ahora me felicitarán todas las generaciones, porque el Poderoso ha hecho obras grandes en mí: Su Nombre es santo y su misericordia llega a sus fieles de generación en generación. Él hace proezas con su brazo: Dispersa a los soberbios de corazón, derriba del trono a los poderosos, y enaltece a los humildes, a los hambrientos los colma de bienes y a los ricos los despide vacíos. Auxilia a Israel su siervo acordándose de su misericordia –como lo había prometido a nuestros padres– en favor de Abrahán y su descendencia por siempre. Amén.',
          ]}
        />

        <PrayerSection
          title="ORACIÓN A LA SANTÍSIMA VIRGEN MARÍA"
          initial="O"
          paragraphs={[
            'h María, Virgen y Madre Santísima, he recibido a tu Hijo amadísimo, que concebiste en tus inmaculadas entrañas, criándolo y alimentándolo con tu pecho, y lo abrazaste amorosamente entre tus brazos. Al mismo que te alegraba contemplar y te llenaba de gozo; con amor y humildad te lo presento y te lo ofrezco, para que lo abraces, lo ames con tu corazón y lo ofrezcas a la Santísima Trinidad en culto supremo de adoración, por tu honor y por tu gloria, y por mis necesidades y por las de todo el mundo.',
            'Te ruego, piadosísima Madre, que me alcances el perdón de mis pecados y gracia abundante para servirte, desde ahora, con mayor fidelidad; y, por último, la gracia de la perseverancia final, para que pueda alabarle contigo por los siglos de los siglos. Amén.',
          ]}
        />

        <PrayerSection
          title="ORACIÓN DE SAN PEDRO CANISIO"
          initial="M"
          paragraphs={[
            'e encomiendo a ti, gloriosa Virgen María, Reina del Cielo y de la tierra que llevaste tan dignamente en tus purísimas entrañas al mismo Señor y Creador de todas las cosas, concebido del Espíritu Santo, a quien yo también acabo de recibir. Te pido, Santísima Madre de Dios, que intercedas por mí ante tu mismo Hijo, y que, si al tomar parte en este gran Sacramento falté en una u otra manera, me obtengas el perdón para mi negligencia e indignidad.',
            'Tú, Señora, siempre casta e inocente, te hiciste más santa y agradable a Dios después que concebiste a tu Hijo; haz que también yo, con la recepción de tan divino Sacramento me santifique de tal manera, que de ahora en adelante pueda conservar mi corazón y mi cuerpo limpios de toda mancha de pecado.',
            'Cuando concebiste a tu Hijo por obra del Espíritu Santo, cantaste magníficas alabanzas, y te alegraste maravillosamente en Dios, tu Salvador; haz, Madre Virgen, que con tus méritos y tus plegarias, también yo con esta sagrada Comunión obtenga un espíritu nuevo y ardiente, y que viva piadosamente en constante acción de gracias; y haz que nunca me muestre ingrato para con tan gran Redentor y huésped mío, sino que le sea siempre fiel servidor y ministro en todas las cosas. Amén.',
          ]}
        />

        <PrayerSection
          title="ORACIÓN A SAN MIGUEL ARCÁNGEL"
          initial="S"
          paragraphs={[
            'an Miguel Arcángel, defiéndenos en la batalla. Sé nuestro amparo contra la perversidad y asechanzas del demonio. Reprímale Dios, pedimos suplicantes; y tú, Príncipe de la milicia celestial, arroja al infierno con el divino poder a Satanás y a los otros espíritus malignos que andan dispersos por el mundo para la perdición de las almas. Amén.',
          ]}
        />
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
    lineHeight: 30,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  sectionSubtitle: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginTop: -8,
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  prayerText: {
    fontFamily: Fonts.regular,
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 28,
  },
  paragraphSpacing: {
    marginTop: 14,
  },
  dropCap: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    color: Colors.liturgicalRed,
    lineHeight: 28,
  },
});
