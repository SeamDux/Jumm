import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function LetaniasSagradoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Letanías del Sagrado Corazón',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Letanías del Sagrado Corazón de Jesús</Text>
          
          <Text style={styles.oracion}>
            Señor, ten piedad{'\n'}
            Cristo, ten piedad{'\n'}
            Señor, ten piedad{'\n'}
            Cristo, óyenos{'\n'}
            Cristo, escúchanos
          </Text>

          <Text style={styles.oracion}>
            Dios Padre celestial,{'\n'}
          <Text style={styles.textoRojoItalic}>ten piedad de nosotros{'\n'}</Text>
            Dios Hijo Redentor del mundo,{'\n'}
            Dios Espíritu Santo,{'\n'}
            Santísima Trinidad, que eres un solo Dios,
          </Text>

          <Text style={styles.oracion}>
            Corazón de Jesús, Hijo del Padre Eterno,{'\n'}
          <Text style={styles.textoRojoItalic}>ten piedad de nosotros{'\n'}</Text>
            Corazón de Jesús, formado por el Espíritu Santo en el seno de la Virgen Madre,{'\n'}
            Corazón de Jesús, unido sustancialmente al Verbo de Dios,{'\n'}
            Corazón de Jesús, de infinita majestad,{'\n'}
            Corazón de Jesús, templo santo de Dios,{'\n'}
            Corazón de Jesús, tabernáculo del Altísimo,{'\n'}
            Corazón de Jesús, casa de Dios y puerta del cielo,{'\n'}
            Corazón de Jesús, horno ardiente de caridad,{'\n'}
            Corazón de Jesús, santuario de la justicia y del amor,{'\n'}
            Corazón de Jesús, lleno de bondad y de amor,{'\n'}
            Corazón de Jesús, abismo de todas las virtudes,{'\n'}
            Corazón de Jesús, dignísimo de toda alabanza,{'\n'}
            Corazón de Jesús, rey y centro de todos los corazones,{'\n'}
            Corazón de Jesús, en quien están todos los tesoros de la sabiduría y de la ciencia,{'\n'}
            Corazón de Jesús, en quien habita toda la plenitud de la divinidad,{'\n'}
            Corazón de Jesús, en quien el Padre se complace,{'\n'}
            Corazón de Jesús, de cuya plenitud todos hemos recibido,{'\n'}
            Corazón de Jesús, deseado de los eternos collados,{'\n'}
            Corazón de Jesús, paciente y de mucha misericordia,{'\n'}
            Corazón de Jesús, rico para todos los que te invocan,{'\n'}
            Corazón de Jesús, fuente de vida y de santidad,{'\n'}
            Corazón de Jesús, propiciación por nuestros pecados,{'\n'}
            Corazón de Jesús, colmado de oprobios,{'\n'}
            Corazón de Jesús, triturado por nuestros pecados,{'\n'}
            Corazón de Jesús, hecho obediente hasta la muerte,{'\n'}
            Corazón de Jesús, traspasado por una lanza,{'\n'}
            Corazón de Jesús, fuente de todo consuelo,{'\n'}
            Corazón de Jesús, vida y resurrección nuestra,{'\n'}
            Corazón de Jesús, paz y reconciliación nuestra,{'\n'}
            Corazón de Jesús, víctima por los pecadores,{'\n'}
            Corazón de Jesús, salvación de los que en ti esperan,{'\n'}
            Corazón de Jesús, esperanza de los que en ti mueren,{'\n'}
            Corazón de Jesús, delicia de todos los santos,
          </Text>

          <Text style={styles.oracion}>
            Cordero de Dios, que quitas los pecados del mundo,{'\n'}
            <Text style={styles.textoRojoItalic}>perdónanos Señor{'\n'}</Text>
            Cordero de Dios, que quitas los pecados del mundo,{'\n'}
            <Text style={styles.textoRojoItalic}>escúchanos Señor{'\n'}</Text>
            Cordero de Dios, que quitas los pecados del mundo,{'\n'}
            <Text style={styles.textoRojoItalic}>ten misericordia de nosotros</Text>
          </Text>

          <Text style={styles.oracion}>
            V. Jesús manso y humilde de Corazón{'\n'}
            R. Haz nuestro corazón semejante al tuyo
          </Text>

          <Text style={styles.subtitulo}>OREMOS</Text>

          <Text style={styles.oracion}>
            Oh Dios todopoderoso y eterno: mira el Corazón de tu amantísimo Hijo y las alabanzas y satisfacciones que en nombre de los pecadores te ofrece; y concede aplacado el perdón a éstos que piden tu misericordia en el nombre de tu mismo Hijo Jesucristo. Que vive y reina contigo por los siglos de los siglos. Amén.
          </Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  textoItalica: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  textoRojoItalic: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    color: '#dc2626',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
}); 