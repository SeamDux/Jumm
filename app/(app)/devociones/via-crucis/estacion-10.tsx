import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecimaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'X Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>X Estación</Text>
          <Text style={styles.subtitulo}>Despojan a Jesús de sus vestiduras</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Al llegar el Señor al Calvario, le dan a beber un poco de vino mezclado con hiel, como un narcótico, que disminuya en algo el dolor de la crucifixión. Pero Jesús, habiéndolo gustado para agradecer ese piadoso servicio, no ha querido beberlo (cf. Mateo 27,34). Se entrega a la muerte con la plena libertad del Amor.
          </Text>

          <Text style={styles.meditacion}>
            Luego, los soldados despojan a Cristo de sus vestidos.
          </Text>

          <Text style={styles.cita}>
            Desde la planta de los pies hasta la cabeza, no hay en él nada sano. Herida, hinchazones, llagas podridas, ni curadas, ni vendadas, ni suavizadas con aceite (Isaías 1,6).
          </Text>

          <Text style={styles.meditacion}>
            Los verdugos toman sus vestidos y los dividen en cuatro partes. Pero la túnica es sin costura, por lo que dicen:
          </Text>

          <Text style={styles.cita}>
            —No la dividamos; mas echemos suertes para ver de quién será (Juan 19,24).
          </Text>

          <Text style={styles.meditacion}>
            De este modo se ha vuelto a cumplir la Escritura: partieron entre sí mis vestidos y sortearon mi túnica (Salmo 21,19).
          </Text>

          <Text style={styles.meditacion}>
            Es el expolio, el despojo, la pobreza más absoluta. Nada ha quedado al Señor, sino un madero.
          </Text>

          <Text style={styles.meditacion}>
            Para llegar a Dios, Cristo es el camino; pero Cristo está en la Cruz, y para subir a la Cruz hay que tener el corazón libre, desasido de las cosas de la tierra.
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