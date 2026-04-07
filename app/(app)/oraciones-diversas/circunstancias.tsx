import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, Link, router } from 'expo-router';

export default function OracionesCircunstanciasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oraciones para diversas circunstancias',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Oraciones para diversas circunstancias</Text>
          </View>

          <Link href="/oraciones-diversas/circunstancias/papa" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por el Papa</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/obispo" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por el Obispo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/autoridades" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por las autoridades civiles</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/presidente" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por el presidente o gobernador</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/familia" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por la familia</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/familiares-amigos" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por los familiares y amigos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/hacen-sufrir" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por los que nos hacen sufrir</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/privados-libertad" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por los privados de libertad</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/desempleados" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por los desempleados</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/enfermos" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por los enfermos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/moribundos" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por los moribundos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/buena-muerte" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por una buena muerte</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/salud" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por la salud espiritual o física</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/trabajo" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por la santificación del trabajo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/siembra" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>En la siembra</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/cosecha" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Después de la cosecha</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/guerra" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>En tiempo de guerra o desorden público</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/exiliados" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Por los exiliados e inmigrantes</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/hambre" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>En tiempo de hambre</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/terremoto" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>En caso de terremoto</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/lluvia" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Para pedir la lluvia</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/buen-tiempo" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Para pedir buen tiempo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/oraciones-diversas/circunstancias/castidad" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Para pedir la castidad</Text>
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