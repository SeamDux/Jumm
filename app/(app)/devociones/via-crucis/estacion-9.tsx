import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function NovenaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'IX Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>IX Estación</Text>
          <Text style={styles.subtitulo}>Jesús cae por tercera vez</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            El Señor cae por tercera vez, en la ladera del Calvario, cuando quedan sólo cuarenta o cincuenta pasos para llegar a la cumbre. Jesús no se sostiene en pie: le faltan las fuerzas, y yace agotado en tierra.
          </Text>

          <Text style={styles.cita}>
            Se entregó porque quiso; maltratado, no abrió boca, como cordero llevado al matadero, como oveja muda ante los trasquiladores (Isaías 53,7).
          </Text>

          <Text style={styles.meditacion}>
            Todos contra El...: los de la ciudad y los extranjeros, y los fariseos y los soldados y los príncipes de los sacerdotes... todos verdugos. Su Madre —mi Madre—, María, llora.
          </Text>

          <Text style={styles.meditacion}>
            Jesús cumple la voluntad de su Padre! Pobre: desnudo. Generoso: ¿qué le falta por entregar? Dilexit me, et tradidit semetipsum pro me (Gálatas 2, 20), me amó y se entregó hasta la muerte por mí.
          </Text>

          <Text style={styles.meditacion}>
            ¡Dios mío!, que odie el pecado, y me una a Ti, abrazándome a la Santa Cruz, para cumplir a mi vez tu Voluntad amabilísima..., desnudo de todo afecto terreno, sin más miras que tu gloria..., generosamente, no reservándome nada, ofreciéndome contigo en perfecto holocausto.
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