import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VocacionVidaReligiosaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vocación a la Vida Religiosa',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Vocación a la Vida Religiosa</Text>
            <Text style={styles.subtitle}>
              Hombres y mujeres que consagran toda su existencia a Dios mediante los consejos
              evangélicos de pobreza, castidad y obediencia.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Diversidad de carismas</Text>
            <Text style={styles.text}>
              Existen comunidades contemplativas, dedicadas principalmente a la oración, y
              congregaciones apostólicas orientadas al servicio educativo, sanitario, social o
              misionero. Cada carisma responde a una necesidad concreta de la Iglesia.
            </Text>
            <Text style={styles.text}>
              La vida fraterna es una escuela de amor donde se comparten la misión, los bienes y la
              oración diaria en comunidad.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Itinerario de discernimiento</Text>
            <Text style={styles.text}>
              1. Fortalecer el trato con el Señor mediante adoración y lectio divina.
            </Text>
            <Text style={styles.text}>
              2. Conocer diferentes congregaciones asistiendo a jornadas vocacionales.
            </Text>
            <Text style={styles.text}>
              3. Realizar experiencias de convivencia o misiones con la comunidad que más atrae.
            </Text>
            <Text style={styles.text}>
              4. Entrar al postulantado y, posteriormente, al noviciado donde se recibe formación
              espiritual y humana.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Signos de llamado</Text>
            <Text style={styles.text}>
              Alegría al darse a los demás, docilidad, deseo de vida fraterna y un corazón disponible
              para ir donde la Iglesia necesite. El acompañamiento espiritual ayuda a reconocerlos.
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
});

