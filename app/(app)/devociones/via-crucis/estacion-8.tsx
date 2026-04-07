import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function OctavaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'VIII Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>VIII Estación</Text>
          <Text style={styles.subtitulo}>Jesús consuela a las hijas de Jerusalén</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Entre las gentes que contemplan el paso del Señor, hay unas cuantas mujeres que no pueden contener su compasión y prorrumpen en lágrimas, recordando acaso aquellas jornadas gloriosas de Jesucristo, cuando todos exclamaban maravillados: bene omnia fecit (Marcos 7,37), todo lo ha hecho bien.
          </Text>

          <Text style={styles.meditacion}>
            Pero el Señor quiere enderezar ese llanto hacia un motivo más sobrenatural, y las invita a llorar por los pecados, que son la causa de la Pasión y que atraerán el rigor de la justicia divina:
          </Text>

          <Text style={styles.cita}>
            —Hijas de Jerusalén, no lloréis por mí, llorad por vosotras y por vuestros hijos... Pues si al árbol verde le tratan de esta manera, ¿en el seco qué se hará? (Lucas 23,28, 31).
          </Text>

          <Text style={styles.meditacion}>
            Tus pecados, los míos, los de todos los hombres, se ponen en pie. Todo el mal que hemos hecho y el bien que hemos dejado de hacer. El panorama desolador de los delitos e infamias sin cuento, que habríamos cometido, si El, Jesús, no nos hubiera confortado con la luz de su mirada amabilísima.
          </Text>

          <Text style={styles.meditacion}>
            ¡Qué poco es una vida para reparar!
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