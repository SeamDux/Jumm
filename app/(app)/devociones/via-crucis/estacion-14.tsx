import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecimocuartaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'XIV Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>XIV Estación</Text>
          <Text style={styles.subtitulo}>Dan sepultura al cuerpo de Jesús</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Muy cerca del Calvario, en un huerto, José de Arimatea se había hecho labrar en la peña un sepulcro nuevo. Y por ser la víspera de la gran Pascua de los judíos, ponen a Jesús allí. Luego, José,
          </Text>

          <Text style={styles.cita}>
            arrimando una gran piedra, cierra la puerta del sepulcro y se va (Mateo 27,60).
          </Text>

          <Text style={styles.meditacion}>
            Sin nada vino Jesús al mundo, y sin nada—ni siquiera el lugar donde reposa se nos ha ido.
          </Text>

          <Text style={styles.meditacion}>
            La Madre del Señor—mi Madre—y las mujeres que han seguido al Maestro desde Galilea, después de observar todo atentamente, se marchan también. Cae la noche.
          </Text>

          <Text style={styles.meditacion}>
            Ahora ha pasado todo. Se ha cumplido la obra de nuestra Redención. Ya somos hijos de Dios, porque Jesús ha muerto por nosotros y su muerte nos ha rescatado.
          </Text>

          <Text style={styles.cita}>
            Empti enim estis pretio magno! (1 Corintios 6,20), tú y yo hemos sido comprados a gran precio.
          </Text>

          <Text style={styles.meditacion}>
            Hemos de hacer vida nuestra la vida y la muerte de Cristo. Morir por la mortificación y la penitencia, para que Cristo viva en nosotros por el Amor. Y seguir entonces los pasos de Cristo, con afán de corredimir a todas las almas.
          </Text>

          <Text style={styles.meditacion}>
            Dar la vida por los demás. Sólo así se vive la vida de Jesucristo y nos hacemos una misma cosa con Él.
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