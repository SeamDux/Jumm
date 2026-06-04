import { useState } from 'react';
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

type PrayerSection = {
  id: string;
  title: string;
  initial: string;
  paragraphs: string[];
};

const sections: PrayerSection[] = [
  {
    id: 'santo-tomas',
    title: 'ORACIÓN DE SANTO TOMÁS DE AQUINO',
    initial: 'A',
    paragraphs: [
      'quí me llego, todopoderoso y eterno Dios, al sacramento de vuestro unigénito Hijo, mi Señor Jesucristo, como enfermo al médico de la vida, como manchado a la fuente de misericordias, como ciego a la luz de la claridad eterna, como pobre y desvalido al Señor de los cielos y tierra.',
      'Ruego, pues, a vuestra infinita bondad y misericordia, tengáis por bien sanar mi enfermedad, limpiar mi suciedad, alumbrar mi ceguedad, enriquecer mi pobreza y vestir mi desnudez, para que así pueda yo recibir el Pan de los Ángeles, al Rey de los Reyes, al Señor de los señores, con tanta reverencia y humildad, con tanta contrición y devoción, con tal fe y tal pureza, y con tal propósito e intención, cual conviene para la salud de mi alma.',
      'Dadme, Señor, que reciba yo, no solo el sacramento del Sacratísimo Cuerpo y Sangre, sino también la virtud y gracia del sacramento. ¡Oh benignísimo Dios!, concededme que albergue yo en mi corazón de tal modo el Cuerpo de vuestro unigénito Hijo, nuestro Señor Jesucristo, Cuerpo adorable que tomó de la Virgen María, que merezca incorporarme a su Cuerpo místico, y contarme como a uno de sus miembros. ¡Oh piadosísimo Padre!, otorgadme que este unigénito Hijo vuestro, al cual deseo ahora recibir encubierto y debajo del velo en esta vida, merezca yo verle para siempre, descubierto y sin velo, en la otra. El cual con Vos vive y reina en unidad del Espíritu Santo, Dios, por los siglos de los siglos. Amén.',
    ],
  },
  {
    id: 'confesion-fe',
    title: 'CONFESIÓN DE LA FE',
    initial: 'C',
    paragraphs: [
      'reo en ti, Dios mío, porque eres la suma Verdad, que no puede engañarse ni engañar.',
      'Espero en ti, Dios mío porque eres poderoso, misericordioso y quieres salvarme y santificarme, si yo quiero, con tu gracia.',
      'Te amo Dios mío, porque eres bueno sobre todas las cosas y has sido muy bueno conmigo siempre, sin yo merecerlo.',
      'Te adoro Dios mío porque eres excelentísimo, santo, Dios y Señor de todas las cosas.',
      'Me humillo ante ti, porque soy una pobre criatura que sin ti nada puedo, porque no te he servido como debo y te he ofendido mucho.',
      'Te pido perdón, Dios mío, de mis pecados, y me arrepiento de haberte ofendido por ser Tú tan bueno; estoy dispuesto a satisfacer por mis culpas y a enmendarme de todas ellas.',
      'Te doy gracias por los muchos beneficios que me has hecho siempre, y especialmente al querer hoy que yo te reciba.',
      'Te ofrezco cuanto soy y tengo para servirte siempre con ello en lo que quieras.',
      'Me conformo en todo a tu Divina Voluntad y acepto con alegría lo que me quieras permitir acerca de mí, fuera del pecado.',
      'Perdono por tu amor a todos los que me han ofendido, para que Tú me perdones.',
      'Te ruego por tu Pasión santísima que, al entrar en mi alma, te compadezcas de mí, me des las gracias que más necesito; no me dejes hasta el fin de mi vida, y al salir mi alma del cuerpo la lleves fortalecida con todos los sacramentos a la vida eterna.',
    ],
  },
  {
    id: 'oracion-virgen',
    title: 'ORACIÓN A LA SANTÍSIMA VIRGEN',
    initial: 'O',
    paragraphs: [
      'h Madre de piedad y de misericordia, Santísima Virgen María. Yo, miserable e indigno pecador, en ti confío con todo mi corazón y afecto; y acudo a tu piedad, para que, así como estuviste junto a tu dulcísimo Hijo clavado en la Cruz, también estés junto a mí, miserable pecador, y junto a todos los fieles que aquí y en toda la santa Iglesia vamos a participar de aquel divino Sacrificio, para que, ayudados con tu gracia, ofrezcamos una Hostia digna y aceptable en la presencia de la suma y única Trinidad. Amén.',
    ],
  },
  {
    id: 'intercesion-virgen',
    title: 'ORACIÓN POR INTERCESIÓN DE LA VIRGEN',
    initial: 'D',
    paragraphs: [
      'ios mío que por la Inmaculada Concepción de la Virgen preparaste a tu Hijo una digna morada: te rogamos que, así, como por previsión de la muerte de tu mismo Hijo preservaste a nuestra Madre de toda mancha así, por su intercesión nos concedas llegar limpios a recibir a tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo, Dios, por todos los siglos de los siglos. Amén.',
    ],
  },
];

function CollapsiblePrayer({
  section,
  expanded,
  onToggle,
}: {
  section: PrayerSection;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <View style={styles.accordionItem}>
      <Pressable
        style={[styles.accordionHeader, expanded && styles.accordionHeaderExpanded]}
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
      >
        <Text style={styles.accordionTitle}>{section.title}</Text>
        <MaterialCommunityIcons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={Colors.liturgicalRed}
        />
      </Pressable>

      {expanded ? (
        <View style={styles.accordionBody}>
          {section.paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              style={[styles.paragraph, index < section.paragraphs.length - 1 && styles.paragraphSpacing]}
            >
              {index === 0 ? (
                <>
                  <Text style={styles.dropCap}>{section.initial}</Text>
                  {paragraph}
                </>
              ) : (
                paragraph
              )}
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export default function PreparacionSantaMisaScreen() {
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
      <Stack.Screen options={{ title: 'Preparación para la Santa Misa' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>PREPARACIÓN PARA LA SANTA MISA</Text>

        {sections.map((section) => (
          <CollapsiblePrayer
            key={section.id}
            section={section}
            expanded={!!expandedIds[section.id]}
            onToggle={() => toggleSection(section.id)}
          />
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
    paddingHorizontal: 16,
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
  accordionTitle: {
    flex: 1,
    fontFamily: Fonts.bold,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    marginRight: 12,
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
  paragraph: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    textAlign: 'left',
    lineHeight: 26,
  },
  paragraphSpacing: {
    marginBottom: 14,
  },
  dropCap: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    fontWeight: '700',
    color: Colors.liturgicalRed,
    lineHeight: 28,
  },
});
