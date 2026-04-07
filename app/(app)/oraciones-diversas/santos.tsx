import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, Link, router } from 'expo-router';

export default function OracionesSantosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oraciones a los santos',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Oraciones a los santos y santas</Text>
          </View>

          <Link href="/oraciones-diversas/santos/bernardo" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>San Bernardo de Claraval</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/santos/teresa-andes" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Santa Teresa de Jesús de los Andes</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/santos/alberto-hurtado" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>San Alberto Hurtado</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </TouchableOpacity>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
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