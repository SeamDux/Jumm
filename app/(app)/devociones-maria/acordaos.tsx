import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function AcordaosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Acordaos',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Acordaos (Oración de San Bernardo)</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://www.vaticannews.va/es/santos/08/20/s--bernardo--abad-y-doctor-de-la-iglesia.html')}
                            >
          <Text style={styles.buttonText}>San Bernardo de Claraval</Text>
        </TouchableOpacity>
          
          <Text style={styles.texto}>
            El Acordaos - oración atribuida a San Bernardo de Claraval- es la mejor oración para manifestar nuestra confianza en la Virgen María, pues Ella es Madre clementísima; una Madre que está siempre pendiente de sus hijos, y está más, si cabe, de sus hijos. Es la súplica de un hijo que se ve necesitado de los cuidados maternales de María para vencer las tentaciones del enemigo. Un hijo que ruega e implora humildemente, reconociéndose indigno y pecador, la protección siempre poderosa de la Madre de Dios, para que en ningún momento le deje solo. Un hijo que sabe que sin la ayuda de la Virgen no es capaz de salir victorioso en las batallas que tiene que luchar durante esta vida para alcanzar la gloria del Cielo.
          </Text>

          <Text style={styles.texto}>
            En esta oración el alma recuerda a Santa María el modo de su inquebrantable confianza: jamás la Virgen ha dejado de socorrer a los que han acudido a Ella buscando su protección.
          </Text>

          <Text style={styles.texto}>
            Y Ella presenta ante el trono de la Divina majestad de su Hijo Jesús todas las súplicas y ruegos que se le hacen.
          </Text>

          <Text style={styles.subtitulo}>Oración</Text>

          <Text style={styles.oracion}>
            Acordaos, ¡oh piadosísima Virgen María!,{'\n'}
            que jamás se ha oído decir que ninguno de los que han{'\n'}
            acudido a vuestra protección, implorando vuestro auxilio,{'\n'}
            haya sido desamparado.{'\n\n'}

            Animado por esta confianza, a Vos también acudo, Madre, Virgen{'\n'}
            de las vírgenes, y gimiendo bajo el peso de mis pecados me{'\n'}
            atrevo a comparecer ante Vos. Madre de Dios, no desechéis mis{'\n'}
            súplicas, antes bien, escuchadlas y acogedlas benignamente.{'\n'}
            Amén.
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
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 