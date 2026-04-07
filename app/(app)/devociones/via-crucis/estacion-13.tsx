import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecimoterceraEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'XIII Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>XIII Estación</Text>
          <Text style={styles.subtitulo}>Desclavan a Jesús y lo entregan a su Madre</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Angustiada en dolor, está María junto a la Cruz. Y Juan, con Ella. Pero se hace tarde, y los judíos instan para que se quite al Señor de allí.
          </Text>

          <Text style={styles.meditacion}>
            Después de haber obtenido de Pilatos el permiso que la ley romana exige para sepultar a los condenados, llega al Calvario
          </Text>

          <Text style={styles.cita}>
            un senador llamado José, varón virtuoso y justo, oriundo de Arimatea. El no ha consentido en la condena, ni en lo que los otros han perpetrado. Al contrario, es de los que esperan en el reino de Dios (Lucas 23,50-51). Con él viene también Nicodemo, aquel mismo que en otra ocasión había ido de noche a encontrar a Jesús, y trae consigo una confección de mirra y áloe, cosa de cien libras (Juan 19,39).
          </Text>

          <Text style={styles.meditacion}>
            Ellos no eran conocidos públicamente como discípulos del Maestro; no se habían hallado en los grandes milagros, ni le acompañaron en su entrada triunfal en Jerusalén. Ahora, en el momento malo, cuando los demás han huido, no temen dar la cara por su Señor.
          </Text>

          <Text style={styles.meditacion}>
            Entre los dos toman el cuerpo de Jesús y lo dejan en brazos de su Santísima Madre. Se renueva el dolor de María.
          </Text>

          <Text style={styles.cita}>
            ¿A dónde se fue tu Amado, oh la más hermosa de las mujeres? ¿A dónde se marchó el que quieres, y le buscaremos contigo? (Cantar de los Cantares 5,17).
          </Text>

          <Text style={styles.meditacion}>
            La Virgen Santísima es nuestra Madre, y no queremos ni podemos dejarla sola.
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