import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function ResponsosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Responsos',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Responsos</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              (Si no esta presente un sacerdote, pueden recitarlos{"\n"}
              los ministros de la Sagrada Comunión, o fieles laicos,{"\n"}
              hombres y mujeres).
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Monición Introductoria</Text>
            <Text style={styles.texto}>
              Hermanos: es lógico nuestro dolor, pues siempre duele la separación de los se-res que amamos. pero en este momento tengamos confianza en el Señor, que nos dice: <Text style={styles.italic}>vengan a mí todos los que están cansados y agobiados, que yo los aliviaré</Text>. Por eso, vamos a escuchar su Palabra de consuelo y a orar con la confianza de los hijos de Dios.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Salmo Responsorial</Text>
            <Text style={styles.texto}>
              Salmo 26, 1.4-7 y 8b y 9a
            </Text>
            <Text style={styles.texto}>
              <Text style={styles.respuesta}>R/. El Señor es mi luz y mi salvación</Text>{"\n\n"}
              Espero gozar de la dicha del Señor{"\n"}
              en el país de la vida.{"\n"}
              El Señor es mi luz y mi salvación ¿a quién temeré?{"\n"}
              El Señor es la defensa de mi vida ¿quién me hará temblar?{"\n"}
              <Text style={styles.respuesta}>R/.</Text>{"\n\n"}
              Una cosa pido al Señor,{"\n"}
              eso buscaré:{"\n"}
              habitar en la casa del Señor{"\n"}
              por los días de mi vida;{"\n"}
              gozar de la dulzura del Señor{"\n"}
              contemplando su templo <Text style={styles.respuesta}>R/.</Text>{"\n\n"}
              Escúchame, Señor, que te llamo;{"\n"}
              ten piedad, respóndeme.{"\n"}
              Tu rostro buscaré, Señor,{"\n"}
              no me escondas tu rostro. <Text style={styles.respuesta}>R/.</Text>{"\n"}
              Espero gozar de la dicha del Señor{"\n"}
              en el país de la vida.{"\n"}
              Espera en el Señor, sé valiente,{"\n"}
              ten ánimo, espera en el Señor. <Text style={styles.respuesta}>R/.</Text>{"\n\n"}
              <Text style={styles.respuesta}>R/. El Señor es mi luz y mi salvación</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oremos:</Text>
            <Text style={styles.texto}>
              Dios de misericordia y de amor, ponemos en tus manos amorosas a nuestro(a) hermano(a) N. En esta vida tú le demostraste tu gran amor; y ahora que ya está libre de toda preocupación, concédele la felicidad y la paz eterna. Su vida terrena ha terminado ya; recíbelo(a) ahora en el paraíso, en donde ya no habrá dolores, ni lágrimas ni penas, sino únicamente paz y alegría con Jesús, tu hijo, y con el Espíritu Santo, para siempre.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Evangelio</Text>
            <Text style={styles.texto}>
              V/. El Señor esté con ustedes.{"\n"}
              <Text style={styles.respuesta}>R/. Y con tu espíritu</Text>{"\n\n"}
              Lectura del santo Evangelio según San Juan (12, 23-26).{"\n"}
              <Text style={styles.italic}>En aquel tiempo dijo Jesús a sus discípulos: Ha llegado la hora de que sea glorificado el Hijo del hombre. Os aseguro que, si el grano de trigo no cae en tierra y muere, queda infecundo; pero, si muere, da mucho fruto. El que se ama a sí mismo, se pierde, y el que se aborrece a sí mismo en este mundo, se guardará para la vida eterna. El que quiera servirme, que me siga, y donde esté yo, allí también estará mi servidor; a quien me sirva, el Padre lo premiará.</Text>{"\n\n"}
              Breve Homilía (sólo el sacerdote o ministro)
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Preces Finales</Text>
            <Text style={styles.texto}>
              Pidamos por nuestro(a) hermano(a) a Jesucristo, que ha dicho: <Text style={styles.italic}>«Yo soy la resurrección y la vida; el que cree en mí, aunque haya muerto, vivirá, y el que está vivo y cree en mí, no morirá para siempre.»</Text>{"\n\n"}
              V/. Señor, tú que lloraste en la tumba de Lázaro, dígnate enjugar nuestras lágrimas.{"\n"}
              <Text style={styles.respuesta}>R/. Te lo pedimos, Señor.</Text>{"\n\n"}
              V/. Tú que resucitaste a los muertos, dígnate dar la vida eterna a nuestro(a) hermano(a).{"\n"}
              <Text style={styles.respuesta}>R/. Te lo pedimos, Señor</Text>{"\n\n"}
              V/. Tú que perdonaste en la Cruz al buen ladrón y le prometiste el paraíso, dígnate perdonar y llevar al Cielo a nuestro(a) hermano(a).{"\n"}
              <Text style={styles.respuesta}>R/. Te lo pedimos, Señor</Text>{"\n\n"}
              V/. Tú que has purificado a nuestro (a) hermano(a) en el agua del Bautismo y lo(a) ungiste con el óleo de la confirmación, dígnate admitirlo(a) entre tus santos y elegidos.{"\n"}
              <Text style={styles.respuesta}>R/. Te lo pedimos, Señor.</Text>{"\n\n"}
              V/. Tú que alimentaste a nuestro(a) hermano(a) con tu Cuerpo y tu Sangre, dígnate también admitirlo(a) en la mesa de tu Reino{"\n"}
              <Text style={styles.respuesta}>R/. Te lo pedimos, Señor.</Text>{"\n\n"}
              V/. Y a nosotros, que lloramos su muerte, dígnate confortarnos con la fe y la esperanza de la vida eterna.{"\n"}
              <Text style={styles.respuesta}>R/. Te lo pedimos Señor.</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oremos:</Text>
            <Text style={styles.texto}>
              Señor, Dios de misericordia, escucha nuestras oraciones y compadécete de tu hijo(a), N. a quien has llamado de esta vida. Recíbelo(a), junto con todos tus santos en tu reino de luz y de paz. Te lo pedimos por Cristo, Nuestro Señor.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>{"\n\n"}
              V/. Terminemos nuestra oración rezando la plegaria que el Señor nos enseñó.{"\n\n"}
              Padre nuestro...{"\n\n"}
              V/. Dale, Señor, el descanso eterno.{"\n"}
              <Text style={styles.respuesta}>R/. Y luzca para él (ella) la luz perpetua.</Text>{"\n\n"}
              V/. Descanse en paz.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>{"\n\n"}
              V/. Su alma y las almas de todos los fieles difuntos, por la misericordia de Dios descansen en paz.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>
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
    marginBottom: 10,
  },
  respuesta: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
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