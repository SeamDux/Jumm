import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SegundaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'II Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>II Estación</Text>
          <Text style={styles.subtitulo}>Jesús carga con la Cruz</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Fuera de la ciudad, al noroeste de Jerusalén, hay un pequeño collado: Gólgota se llama en arameo; locus Calvariae, en latín: lugar de las Calaveras o Calvario.
          </Text>

          <Text style={styles.meditacion}>
            Jesús se entrega inerme a la ejecución de la condena. No se le ha de ahorrar nada, y cae sobre sus hombros el peso de la cruz infamante. Pero la Cruz será, por obra de amor, el trono de su realeza.
          </Text>

          <Text style={styles.meditacion}>
            Las gentes de Jerusalén y los forasteros venidos para la Pascua se agolpan por las calles de la ciudad, para ver pasar a Jesús Nazareno, el Rey de los judíos. Hay un tumulto de voces; y a intervalos, cortos silencios: tal vez cuando Cristo fija los ojos en alguien:
          </Text>

          <Text style={styles.cita}>
            —Si alguno quiere venir en pos de mí, tome su cruz de cada día y sígame (Mateo 26,24).
          </Text>

          <Text style={styles.meditacion}>
            ¡Con qué amor se abraza Jesús al leño que ha de darle muerte!
          </Text>

          <Text style={styles.meditacion}>
            ¿No es verdad que en cuanto dejas de tener miedo a la Cruz, a eso que la gente llama cruz, cuando pones tu voluntad en aceptar la Voluntad divina, eres feliz, y se pasan todas las preocupaciones, los sufrimientos físicos o morales?
          </Text>

          <Text style={styles.meditacion}>
            Es verdaderamente suave y amable la Cruz de Jesús. Ahí no cuentan las penas; sólo la alegría de saberse corredentores con Él.
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