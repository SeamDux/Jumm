import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function OrdenScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Orden Sacerdotal',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Orden</Text>
            <Text style={styles.subtitle}>
              Perpetúa los ministros que transmiten la vida divina
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              El Orden es el sacramento gracias al cual la misión confiada por Cristo a sus apóstoles sigue siendo ejercida en la Iglesia hasta el fin de los tiempos; es, pues, el sacramento del ministerio apostólico.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              Comprende tres grados: El episcopado, el presbiterado y el diaconado.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              La Iglesia confiere el sacramento del Orden únicamente a varones (viri) bautizados, cuyas aptitudes para el ejercicio del ministerio han sido debidamente reconocidas. A la autoridad de la Iglesia corresponde la responsabilidad y el derecho de llamar a uno a recibir la ordenación.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.citaText}>
              "Por tanto, con el fin de dejar toda duda sobre una cuestión de gran importancia, que atañe a la misma constitución divina de la Iglesia, en virtud de mi ministerio de confirmar en la Fe a los hermanos (cf. Lucas, 22, 32), declaro que la Iglesia no tiene en modo alguno la facultad de conferir la ordenación sacerdotal a las mujeres, y que este dictamen debe ser considerado como definitivo por todos los fieles de la Iglesia." (Juan Pablo II, Carta Apostólica, 22 de mayo de 1994).
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
    backgroundColor: Colors.light.background,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
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
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
  citaText: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
    fontStyle: 'italic',
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderLeftColor: Colors.primary,
  },
}); 