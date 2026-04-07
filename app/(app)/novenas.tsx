import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Link, Stack } from 'expo-router';

export default function NovenasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Novenas',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Novenas</Text>
            <Text style={styles.description}>
              Las novenas son una forma especial de oración que nos ayuda a prepararnos espiritualmente durante nueve días para celebrar una fiesta importante o pedir una gracia especial. Aquí encontrarás novenas tradicionales para diferentes devociones.
            </Text>
          </View>

          <Link href="/(app)/novenas/nino-dios" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Al Niño Dios</Text>
              <Text style={styles.optionSubtext}>(Nueve días antes de navidad)</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/devociones-maria/novena-inmaculada" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Novena a la Inmaculada Concepción</Text>
              <Text style={styles.optionSubtext}>(Nueve días de preparación para el 8 de diciembre)</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/novenas/san-jose" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Novena a San José</Text>
            </TouchableOpacity>
          </Link>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
    lineHeight: 24,
  },
  optionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
  optionSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
}); 