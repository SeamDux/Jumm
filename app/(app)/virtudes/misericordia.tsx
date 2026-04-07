import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function MisericordiaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Las obras de misericordia',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Las obras de misericordia</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Las obras de misericordia son acciones caritativas mediante las cuales ayudamos a nuestro prójimo en sus necesidades corporales y espirituales (cf. Is 58, 6-7; Hb 13, 3). Instruir, aconsejar, consolar, confortar, son obras espirituales de misericordia, como también lo son perdonar y sufrir con paciencia. Las obras de misericordia corporales consisten especialmente en dar de comer al hambriento, dar techo a quien no lo tiene, vestir al desnudo, visitar a los enfermos y a los presos, enterrar a los muertos (cf Mt 25,31-46). Entre estas obras, la limosna hecha a los pobres (cf Tb 4, 5-11; Si 17, 22) es uno de los principales testimonios de la caridad fraterna; es también una práctica de justicia que agrada a Dios (cf Mt 6, 2-4):
            </Text>
          </View>

          <View style={styles.citaCard}>
            <Text style={styles.citaText}>
              "El que tenga dos túnicas que las reparta con el que no tiene; el que tenga para comer que haga lo mismo" (Lc 3, 11). "Dad más bien en limosna lo que tenéis, y así todas las cosas serán puras para vosotros" (Lc 11, 41). "Si un hermano o una hermana están desnudos y carecen del sustento diario, y alguno de vosotros les dice: "Id en paz, calentaos y hartaos", pero no les dais lo necesario para el cuerpo, ¿de qué sirve?" (St 2, 15-16; cf Jn 3, 17). (CEC 2447)
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Espirituales</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Enseñar al que no sabe.</Text>
              <Text style={styles.bulletItem}>• Dar buen consejo al que lo necesita.</Text>
              <Text style={styles.bulletItem}>• Corregir al que yerra.</Text>
              <Text style={styles.bulletItem}>• Perdonar las injurias.</Text>
              <Text style={styles.bulletItem}>• Consolar al triste.</Text>
              <Text style={styles.bulletItem}>• Sufrir con paciencia los defectos del prójimo.</Text>
              <Text style={styles.bulletItem}>• Rogar a Dios por vivos y difuntos.</Text>
            </View>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Corporales</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Visitar y cuidar a los enfermos.</Text>
              <Text style={styles.bulletItem}>• Dar de comer al hambriento.</Text>
              <Text style={styles.bulletItem}>• Dar de beber al sediento.</Text>
              <Text style={styles.bulletItem}>• Dar posada al peregrino.</Text>
              <Text style={styles.bulletItem}>• Vestir al desnudo.</Text>
              <Text style={styles.bulletItem}>• Visitar al preso.</Text>
            </View>
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
    textAlign: 'center',
  },
  card: {
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
  citaCard: {
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
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  citaText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
  bulletList: {
    marginLeft: 10,
  },
  bulletItem: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
  },
}); 