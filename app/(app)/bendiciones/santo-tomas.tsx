import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function OracionSantoTomasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oración de Santo Tomás',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Oración de Santo Tomás</Text>
            <Text style={styles.subtitle}>antes de comenzar a estudiar</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              Creador inefable, que de los tesoros de tu sabiduría formaste tres jerarquías de ángeles y con maravilloso orden las colocaste sobre el cielo empíreo, y distribuiste las partes del universo con suma elegancia.
            </Text>
            <Text style={styles.prayer}>
              Tú que eres la verdadera fuente de luz y sabiduría, y el soberano principio, dígnate infundir sobre las tinieblas de mi entendimiento un rayo de tu claridad, apartando de mí la doble oscuridad en que he nacido: el pecado y la ignorancia.
            </Text>
            <Text style={styles.prayer}>
              Tú, que haces elocuentes las lenguas de los niños, instruye mi lengua e infunde en mis labios la gracia de tu bendición.
            </Text>
            <Text style={styles.prayer}>
              Dame agudeza para entender, capacidad para retener, método y facilidad para aprender, sutileza para interpretar, y gracia copiosa para hablar.
            </Text>
            <Text style={styles.prayer}>
              Dame acierto al empezar, dirección al progresar y perfección al acabar, ¡Oh Señor! Dios y hombre verdadero, que vives y reinas por los siglos de los siglos. Amén.
            </Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
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
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 5,
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prayer: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 