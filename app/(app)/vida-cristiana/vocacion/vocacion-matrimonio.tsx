import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VocacionMatrimonioScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vocación al Matrimonio',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Vocación al Matrimonio</Text>
            <Text style={styles.subtitle}>
              Alianza de vida y amor entre un hombre y una mujer llamados a ser signo del amor de
              Cristo por su Iglesia.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Fundamento evangélico</Text>
            <Text style={styles.text}>
              Jesús confirma el plan original del Padre: «lo que Dios ha unido, que no lo separe el
              hombre». El matrimonio es camino de santidad donde los esposos se ayudan mutuamente a
              crecer en la fe y colaboran con Dios en el don de la vida.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Elementos para discernir</Text>
            <Text style={styles.text}>
              • Capacidad de amar de forma estable, fiel y generosa.{"\n"}
              • Proyecto común que integra fe, trabajo, familia y servicio a la comunidad.{"\n"}
              • Deseo de educar cristianamente a los hijos y abrir el hogar a la misión.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Herramientas pastorales</Text>
            <Text style={styles.text}>
              Los novios pueden acudir a la pastoral familiar, cursillos prematrimoniales y grupos de
              matrimonios jóvenes. Estos espacios ayudan a fortalecer la comunicación, la oración en
              pareja y el acompañamiento espiritual.
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

