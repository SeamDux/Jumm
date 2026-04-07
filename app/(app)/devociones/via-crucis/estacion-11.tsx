import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function UndecimaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'XI Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>XI Estación</Text>
          <Text style={styles.subtitulo}>Jesús es clavado en la Cruz</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Ahora crucifican al Señor, y junto a Él a dos ladrones, uno a la derecha y otro a la izquierda. Entretanto Jesús dice:
          </Text>

          <Text style={styles.cita}>
            —Padre, perdónales porque no saben lo que hacen (Lucas 23,34).
          </Text>

          <Text style={styles.meditacion}>
            Es el Amor lo que ha llevado a Jesús al Calvario. Y ya en la Cruz, todos sus gestos y todas sus palabras son de amor, de amor sereno y fuerte.
          </Text>

          <Text style={styles.meditacion}>
            Con ademán de Sacerdote Eterno, sin padre ni madre, sin genealogía (cf. Hebreos 7,3), abre sus brazos a la humanidad entera.
          </Text>

          <Text style={styles.meditacion}>
            Junto a los martillazos que enclavan a Jesús, resuenan las palabras proféticas de la Escritura Santa:
          </Text>

          <Text style={styles.cita}>
            han taladrado mis manos y mis pies. Puedo contar todos mis huesos, y ellos me miran y me contemplan (Salmo 21,17-18).
          </Text>

          <Text style={styles.cita}>
            —¡Pueblo mío! ¿Qué te hice o en qué te he contristado? ¡Respóndeme! (Miqueas 6,3).
          </Text>

          <Text style={styles.meditacion}>
            Y nosotros, rota el alma de dolor decimos sinceramente a Jesús: soy tuyo, y me entrego a Ti, y me clavo en la Cruz gustosamente, siendo en las encrucijadas del mundo un alma entregada a Ti, a tu gloria, a la Redención, a la corredención de la humanidad entera.
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