import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function DespuesScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Después de la muerte',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Después de la muerte</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Inmediatamente después de la muerte uno de los presentes puede rezar:
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Venid en su ayuda, santos de Dios;{"\n"}
              salid a su encuentro, ángeles del Señor.{"\n\n"}
              Reciban su alma y preséntenla ante el Altísimo.{"\n\n"}
              V. Que te reciba Cristo, el mismo que te llamó;{"\n"}
              que el coro de los ángeles te introduzca en el cielo.{"\n\n"}
              Reciban su alma y preséntenla ante el Altísimo.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oremos.</Text>
            <Text style={styles.texto}>
              Te encomendamos, Señor, a tu hijo(a) N.,{"\n"}
              a fin de que, muerto ya para el mundo, viva para ti.{"\n"}
              Con tu infinita misericordia{"\n"}
              perdona los pecados que la fragilidad humana{"\n"}
              le haya hecho cometer.{"\n"}
              Por Cristo, nuestro Señor.{"\n"}
              Amén.
            </Text>
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
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  seccion: {
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 