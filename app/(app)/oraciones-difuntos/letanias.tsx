import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function LetaniasScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Letanías para la Buena Muerte',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Letanías para la Buena Muerte</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              1. Jesús, Señor, Dios de bondad, Padre de misericordia, aquí me presento delante de Vos con el corazón humillado, contrito y confuso, a encomendaros mi última hora y la suerte que después de ella me espera.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mis pies, fríos ya, me adviertan que mi carrera en este valle de lágrimas está por acabarse: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mis manos trémulas ya no puedan estrechar el Crucifijo, y a pesar mío le dejan caer sobre el lecho de mi dolor: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mis ojos, apagados con el dolor de la cercana muerte, fijen en Vos por última vez sus miradas moribundas: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mis labios fríos y balbucientes pronuncien por última vez vuestro santísimo Nombre: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mi cara pálida y amoratada causa ya lástima y terror a los circunstantes, y los cabellos de mi cabeza, bañados con el sudor de la muerte, anuncien que está cercano mi fin: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mis oídos, próximos a cerrarse para siempre a las conversaciones de los hombres, se abran para oír de vuestra boca la sentencia que marque mi suerte para toda la eternidad: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mi imaginación, agitada por horrendos fantasmas, se vea sumergida en mortales congojas, y mi espíritu, perturbado por el temor de vuestra justicia, a la vista de mis iniquidades, luche con el ángel de las tinieblas, que quisiera precipitarme en el abismo de la desesperación: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mi corazón, débil y oprimido por el dolor de la enfermedad, esté sobrecogido del horror de la muerte, fatigado y rendido por los esfuerzos que hubiere hecho contra los enemigos de mi salvación: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando derrame mis últimas lágrimas, síntomas de mi destrucción, recibidlas, Señor, en sacrificio de expiación, para que muera como víctima de penitencia, y en aquel momento terrible: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mis parientes y amigos, juntos a mí, lloren al verme en el último trance, y cuando invoquen vuestra misericordia en mi favor: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando perdido el uso de los sentidos, desaparezca todo el mundo de mi vista y gima entre las últimas agonías y afanes de la muerte: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando los últimos suspiros del corazón fuercen a mi alma a salir del cuerpo, aceptadlos como señales de una santa impaciencia de ir a reinar con Vos, entonces: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando mi alma salga de mi cuerpo, dejándolo pálido, frío y sin vida, aceptad la destrucción de él como un tributo que desde ahora quiero ofrecer a vuestra Majestad, y en aquella hora: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              En fin, cuando mi alma comparezca delante de Vos, para ser juzgada, no la arrojéis de vuestra presencia, sino dignaos recibirla en el seno amoroso de vuestra misericordia, para que cante eternamente vuestras alabanzas: Jesús misericordioso, tened compasión de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oración</Text>
            <Text style={styles.texto}>
              Oh Dios mío, que condenándonos a la muerte, nos habéis ocultado el momento y la hora, haced que viviendo santamente todos los días de nuestra vida, merezcamos una muerte dichosa, abrasados en vuestro divino amor. Por los méritos de Nuestro Señor Jesucristo, que vive y reina con Vos, en unidad del Espíritu Santo, por los siglos de los siglos. Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              2. Dios mío, estoy tan persuadido de que veláis sobre todos los que en Vos esperan y de que nada puede faltar a quien de Vos espera todas las cosas, que he resuelto vivir en adelante sin cuidado alguno, descargando sobre Vos todas mis inquietudes.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Más yo dormiré en paz y descansaré; porque Tú ¡Oh Señor! y sólo Tú, has asegurado mi esperanza.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Los hombres pueden despojarme de los bienes y de la reputación; las enfermedades pueden quitarme las fuerzas y los medios de serviros; yo mismo puedo perder vuestra gracia por el pecado; pero no perderé mi esperanza; la conservaré hasta el último instante de mi vida y serán inútiles todos los esfuerzos del demonio del infierno para arrancármela.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Dormiré y descansaré en paz.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Que otros esperen su felicidad de su riqueza o de sus talentos; que se apoyen sobre la inocencia de su vida, o sobre el rigor de su penitencia, o sobre el número de sus buenas obras, o sobre el fervor de sus oraciones. En cuanto a mí, Señor, toda mi confianza es mi confianza misma. Porque Tú, Señor, solo Tú, has asegurado mi esperanza.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              A nadie engañó esta confianza. Ninguno de los que han esperado en el Señor ha quedado frustrado en su confianza.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Por tanto, estoy seguro de que seré eternamente feliz, porque firmemente espero serlo y porque de Vos ¡oh Dios mío! Es de Quien lo espero. En Ti espero, Señor, y jamás seré confundido.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Bien conozco ¡ah! Demasiado lo conozco, que soy frágil e inconstante; sé cuánto pueden las tentaciones contra la virtud más firme; he visto caer los astros del cielo y las columnas del firmamento; pero nada de esto puede atemorizarme. Mientras mantenga firme mi esperanza, me conservaré a cubierto de todas las calamidades; y estoy seguro de esperar siempre, porque espero igualmente esta inmutable esperanza.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              En fin, estoy seguro de que no puedo esperar con exceso de Vos y de que conseguiré todo lo que hubiere esperado de Vos. Así, espero que me sostendréis en las más rápidas y resbaladizas pendientes, que me fortaleceréis contra los más violentos asaltos y que haréis triunfar mi flaqueza sobre mis más formidables enemigos. Espero que me amaréis siempre y que yo os amaré sin interrupción; y para llevar de una vez mi esperanza tan lejos como puedo llevarla, os espero a Vos mismo de Vos mismo ¡oh Creador mío! Para el tiempo y para la eternidad. Así sea.
            </Text>
          </View>

          
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  seccion: {
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 