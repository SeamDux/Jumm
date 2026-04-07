import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function OracionSanJoseScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración a San José',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Oración a San José</Text>

          <Text style={styles.oracion}>
            San José, mi padre y señor, tú que fuiste guardián fiel del Hijo de Dios y Madre Santísima; la Virgen María, alcánzame del Señor la gracia de un espíritu recto y de un corazón puro y casto para servir siempre mejor a Jesús y María. Amén.
          </Text>

          <Text style={styles.subtitulo}>Oración del Papa León XIII</Text>

          <Text style={styles.oracion}>
            A ti, bienaventurado San José, acudimos en nuestra tribulación; y después de invocar el auxilio de tu Santísima Esposa solicitamos también confiados tu patrocinio. Por aquella caridad que con la Inmaculada Virgen María, Madre de Dios, te tuvo unido, y por el paterno amor con que abrazaste al Niño Jesús, humildemente te suplicamos vuelvas benigno los ojos a la herencia que con su Sangre adquirió Jesucristo, y con tu poder y auxilio socorras nuestras necesidades.
          </Text>

          <Text style={styles.oracion}>
            Protege, Providentísimo Custodio de la Sagrada Familia la escogida descendencia de Jesucristo; aleja de nosotros toda mancha de error y corrupción; asístenos propicio, desde el cielo, fortísimo libertador nuestro, en esta lucha con el poder de las tinieblas; y, como en otro tiempo libraste al Niño Jesús del inminente peligro de la vida, así, ahora, defiende a la Iglesia Santa de Dios de las asechanzas de sus enemigos y de toda adversidad, y a cada uno de nosotros protégenos con tu perpetuo patrocinio, para que, a tu ejemplo y sostenidos por tu auxilio, podamos santamente vivir y piadosamente morir y alcanzar en el cielo la eterna felicidad. Amén.
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
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  respuesta: {
    color: Colors.primary,
    fontStyle: 'italic',
  },
});
