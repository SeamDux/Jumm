import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function EscapularioScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Escapulario del Carmen',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>El Escapulario de la Virgen del Carmen</Text>
          
          <Text style={styles.texto}>
            La Santísima Virgen se apareció en el S. XIV al Papa Juan XXII, prometiendo para aquellos que cumplieran los requisitos de esta devoción que "como Madre de Misericordia, con mis ruegos, oraciones, méritos y protección especial, les ayudaré para que, llegando cuanto antes al estado de sus penas, (...) sean trasladadas sus almas a la bienaventuranza".
          </Text>

          <Text style={styles.texto}>
            La imposición se hace con el escapulario de lana. Después de la ceremonia puede sustituirse con una medalla escapulario. Los requisitos de esta devoción, tanto para la medalla como para el escapulario son:
          </Text>

          <Text style={styles.texto}>
            - Tenerlo impuesto y llevarlo habitualmente.{'\n'}
            - Guardar castidad conforme al estado de cada uno.{'\n'}
            - Rezar diariamente tres Avemarías o siete Padres Nuestros con Avemaría y Gloria, o el Oficio Parvo o el Oficio Divino.
          </Text>

          <Text style={styles.texto}>
            Esta devoción a la Santísima Virgen ha de ayudarnos a ser más piadosos; nunca debemos ampararnos en ella para una vida de indiferencia religiosa.
          </Text>

          <Text style={styles.subtitulo}>Fórmula para la bendición e imposición</Text>

          <Text style={styles.oracion}>
            V. Nuestro auxilio en el nombre del Señor.{'\n'}
            R. Que hizo el cielo y la tierra.{'\n'}
            V. El Señor esté con ustedes.{'\n'}
            R. Y con tu espíritu.{'\n'}
            V. Oremos.
          </Text>

          <Text style={styles.oracion}>
            Señor Jesucristo, Salvador del género humano, santifica con tu diestra este hábito, que por amor a Ti y a tu Madre, la Virgen María del Monte Carmelo, va(n) a llevar con toda devoción tu siervo(a - os) para que con la intercesión de tu misma Madre, sea(n) defendido(a) del maligno enemigo y persevere(n) en tu gracia hasta el día de su muerte. Que vives y reinas por los siglos de los siglos. Amén.
          </Text>

          <Text style={styles.texto}>
            El sacerdote rocía con agua bendita el escapulario y, mientras lo impone, dice:
          </Text>

          <Text style={styles.oracion}>
            V. Recibe este hábito bendito y ruega a la Santísima Virgen que, por sus méritos, lo lleves sin mancha de pecado, te defienda de toda adversidad y te conduzca a la vida eterna. Amén.
          </Text>

          <Text style={styles.oracion}>
            V. Yo, en virtud de la potestad concedida, te (los) recibo para que pueda(n) participar de todos los bienes espirituales que por la misericordia de nuestro Señor Jesucristo han sido concedidos a los religiosos del Monte Carmelo. En nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.
          </Text>

          <Text style={styles.oracion}>
            V. Que te (los) bendiga el Dios omnipotente, creador del cielo y tierra, que se ha dignado que forme(en) parte de la Cofradía de la Bienaventurada Virgen María del Monte Carmelo; a Ella suplicamos que, en la hora de tu (su) muerte, aplaste la cabeza del demonio y que consigas (an) la palma y la corona de la eterna bienaventuranza. Por Cristo nuestro Señor. Amén.
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
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 