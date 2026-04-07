import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function ConsagracionSagradoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Consagración al Sagrado Corazón',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Consagración al Sagrado Corazón de Jesús</Text>
          <Text style={styles.autor}>Sta. Margarita María de Alacoque</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.corazones.org/santos/margarita_maria_alacoque.htm')}
          >
            <Text style={styles.buttonText}>Conoce más sobre Sta. Margarita María</Text>
          </TouchableOpacity>
          
          <Text style={styles.oracion}>
            "Me entrego, y al Sagrado Corazón de Nuestro Señor Jesucristo consagro sin reservas, mi persona, mi vida, mis obras, mis dolores y sufrimientos. Me comprometo a no usar parte alguna de mi ser sino es para honrar, amar y glorificar al Sagrado Corazón. Este es mi propósito inmutable: ser enteramente suyo y hacer todas las cosas por su amor. Al mismo tiempo renuncio de todo corazón a todo aquello que le desagrade.
          </Text>

          <Text style={styles.oracion}>
            Sagrado Corazón de Jesús, quiero tenerte como único objeto de mi amor. Sé pues, mi protector en esta vida y garantía de la vida eterna. Sé para mí el refugio en mi última hora. Sé propiciación y desagravio por todos los pecados de mi vida. Corazón lleno de bondad, sé para mí el refugio en la hora de mi muerte y mi intercesor ante Dios Padre. Desvía de mí el castigo de su justa ira. Corazón de amor, en Ti pongo toda mi confianza. De mi maldad todo lo temo. Pero de tu Amor todo lo espero. Extirpa de mí, Señor, todo lo que te disguste o me pueda apartar de Ti. Que tu amor imprima tan profundamente en mi corazón que jamás te olvide yo y que jamás me separe de Ti.
          </Text>

          <Text style={styles.oracion}>
            Señor y Salvador mío, te ruego, por el amor que me tienes, que mi nombre esté profundamente grabado en tu sagrado Corazón; que mi felicidad y mi gloria sean vivir y morir en tu servicio. Amén."
          </Text>

          <Text style={styles.subtitulo}>Oración</Text>

          <Text style={styles.oracion}>
            Omnipotente y sempiterno Dios,{'\n'}
            mira el Corazón de tu amadísimo Hijo{'\n'}
            y las alabanzas y satisfacciones{'\n'}
            que en nombre de los pecadores te tributa,{'\n'}
            y concede aplacado el perdón{'\n'}
            a los que imploran tu misericordia{'\n'}
            en el nombre del mismo Hijo Jesucristo.{'\n'}
            Por Jesucristo nuestro Señor. Amén.
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
    marginBottom: 10,
    textAlign: 'center',
  },
  autor: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
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