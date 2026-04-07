import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function ResponsoDosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Responso II',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Responso II</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              <Text style={styles.italic}>«Yo soy la resurrección y la vida, quien cree en Mí, aunque haya muerto, vivirá; y todo el que vive y cree en Mí no morirá eternamente».</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Vengan en su ayuda, Santos de Dios; salgan a su encuentro, Ángeles del Señor; reciban su alma, y preséntenla al Altísimo.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              V/. Cristo que te llamó, te reciba y los Ángeles te conduzcan al regazo de Abraham.{"\n"}
              <Text style={styles.respuesta}>R/. Reciban su alma y preséntenla al Altísimo.</Text>{"\n\n"}
              V/. Concédele, Señor, el descanso eterno y brille para él (ella) la luz eterna.{"\n"}
              <Text style={styles.respuesta}>R/. Reciban su alma y preséntenla al Altísimo.</Text>{"\n\n"}
              V/. Señor, ten piedad.{"\n"}
              <Text style={styles.respuesta}>R/. Cristo, ten piedad, Señor, ten piedad.</Text>{"\n\n"}
              V/. Padre Nuestro...{"\n\n"}
              V/. Y líbranos del mal.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>{"\n\n"}
              V/. Libera, Señor, su alma.{"\n"}
              <Text style={styles.respuesta}>R/. De las penas del infierno.</Text>{"\n\n"}
              V/. Descanse en paz.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>{"\n\n"}
              V/. Señor, escucha nuestra oración.{"\n"}
              <Text style={styles.respuesta}>R/. Y llegue a Ti nuestro clamor.</Text>{"\n\n"}
              V/. El Señor esté con ustedes.{"\n"}
              <Text style={styles.respuesta}>R/. Y con tu espíritu.</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oración</Text>
            <Text style={styles.texto}>
              Oh, Dios, que concedes el perdón y quieres la salvación de los hombres: te rogamos que, por la intercesión de la Santísima Virgen María y de todos los Santos, concedas la bienaventuranza a tu hijo(a) N., a quien llamaste de este mundo.{"\n\n"}
              No le abandones en las manos del enemigo, ni te olvides de él (ella) para siempre; sino recíbelo (a) con tus santos Ángeles y llévale al Cielo, su patria definitiva.{"\n\n"}
              Y porque creyó y esperó en Ti, concédele para siempre las alegrías del Cielo. Por Cristo nuestro Señor.{"\n\n"}
              <Text style={styles.respuesta}>R/. Amén</Text>{"\n\n"}
              <Text style={styles.italic}>«Yo soy la resurrección y la vida; quien cree en Mí, aunque haya muerto, vivirá; y todo el que vive y cree en Mí no morirá eternamente».</Text>{"\n\n"}
              V/. Concédele, Señor, el descanso eterno.{"\n"}
              <Text style={styles.respuesta}>R/. Y brille para él (ella) la luz eterna.</Text>{"\n\n"}
              V/. Descanse en paz.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>{"\n\n"}
              V/. Por la misericordia de Dios, su alma y las almas de todos los fieles difuntos descansen en paz{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oremos.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Por uno o varios difuntos</Text>
            <Text style={styles.texto}>
              Absuelve, te rogamos, Señor, el (las) alma(s) de tu(s) siervo(s) N. de todo vínculo de pecado, para que, en la gloria de la resurrección, descanse(n) resucitado(a)(os) entre tus santos y elegidos. Por Cristo nuestro Señor.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Por todos los fieles difuntos</Text>
            <Text style={styles.texto}>
              Oh Dios, creador y redentor de todos los fieles; concede a las almas de tus siervos y siervas la remisión de todos sus pecados, para que, por nuestras fervorosas súplicas, consigan el perdón que siempre han deseado. Por Cristo nuestro Señor.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>{"\n\n"}
              V/. Dale(s), Señor, el descanso eterno{"\n"}
              <Text style={styles.respuesta}>R/. Y luzca para él (ella) (ellos) la luz perpetua.</Text>{"\n\n"}
              V/. Descanse(n) en paz.{"\n"}
              <Text style={styles.respuesta}>R/. Amén.</Text>{"\n\n"}
              V/. Su(s) alma(s) y las de todos los fieles difuntos, por la misericordia de Dios descansen en paz.{"\n"}
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