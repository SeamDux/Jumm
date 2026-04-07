import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function PrimeraEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'I Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>I Estación</Text>
          <Text style={styles.subtitulo}>Condenan a muerte a Jesús</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Han pasado ya las diez de la mañana. El proceso está llegando a su fin. No ha habido pruebas concluyentes. El juez sabe que sus enemigos se lo han entregado por envidia, e intenta un recurso absurdo: la elección entre Barrabás, un malhechor acusado de robo con homicidio, y Jesús, que se dice Cristo. El pueblo elige a Barrabás. Pilatos exclama:
          </Text>

          <Text style={styles.cita}>—¿Qué he de hacer, pues, con Jesús? (Mateo 26,22).</Text>

          <Text style={styles.meditacion}>
            Contestan todos: —¡Crucifícale! El juez insiste: —Pero ¿qué mal ha hecho? Y de nuevo responden a gritos: —¡Crucifícale!, ¡crucifícale!
          </Text>

          <Text style={styles.meditacion}>
            Se asusta Pilatos ante el creciente tumulto. Manda entonces traer agua, y se lava las manos a la vista del pueblo, mientras dice:
          </Text>

          <Text style={styles.cita}>
            —Inocente soy de la sangre de este justo; vosotros veréis (Mateo 27,24).
          </Text>

          <Text style={styles.meditacion}>
            Y después de haber hecho azotar a Jesús, lo entrega para que lo crucifiquen. Se hace el silencio en aquellas gargantas enronquecidas y posesas. Como si Dios estuviese ya vencido.
          </Text>

          <Text style={styles.meditacion}>
            Jesús está solo. Quedan lejanos aquellos días en que la palabra del Hombre-Dios ponía luz y esperanza en los corazones, aquellas largas procesiones de enfermos que eran curados, los clamores triunfales de Jerusalén cuando llegó el Señor montado en un manso pollino.
          </Text>

          <Text style={styles.meditacion}>
            ¡Si los hombres hubieran querido dar otro curso al amor de Dios! ¡Si tú y yo hubiésemos conocido el día del Señor!
          </Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Pequé Señor, me pesa</Text>
            <Text style={styles.texto}>R. Ten piedad y misericordia de mí.</Text>
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
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 20,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  oracionContainer: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  meditacion: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 28,
  },
  cita: {
    fontSize: 18,
    color: Colors.text,
    fontStyle: 'italic',
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 28,
    paddingHorizontal: 20,
  },
}); 