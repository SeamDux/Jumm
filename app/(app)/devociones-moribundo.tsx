import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';

interface DevocionMoribundo {
  id: string;
  titulo: string;
  ruta: string;
}

const devociones: DevocionMoribundo[] = [
  {
    id: 'uncion',
    titulo: 'Unción de los Enfermos',
    ruta: '/devociones-moribundo/uncion'
  },
  {
    id: 'penitencial',
    titulo: 'Acto Penitencial',
    ruta: '/devociones-moribundo/penitencial'
  },
  {
    id: 'palabra',
    titulo: 'Liturgia de la Palabra',
    ruta: '/devociones-moribundo/palabra'
  },
  {
    id: 'sacramento',
    titulo: 'Liturgia del Sacramento',
    ruta: '/devociones-moribundo/sacramento'
  },
  {
    id: 'jose',
    titulo: 'A San José, para pedir una buena muerte',
    ruta: '/devociones-moribundo/jose'
  },
  {
    id: 'aceptacion',
    titulo: 'Aceptación de la Muerte',
    ruta: '/devociones-moribundo/aceptacion'
  },
  {
    id: 'preparacion',
    titulo: 'Preparación para el momento de la muerte',
    ruta: '/devociones-moribundo/preparacion'
  },
  {
    id: 'buena-muerte',
    titulo: 'Para obtener una buena muerte',
    ruta: '/devociones-moribundo/buena-muerte'
  }
];

export default function DevocionesMoribundoScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones para acompañar a un enfermo o moribundo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.introduccion}>
            <Text style={styles.introduccionTitulo}>Devociones para acompañar a un enfermo o moribundo</Text>
            <Text style={styles.introduccionTexto}>
              En estos momentos tan delicados, la Iglesia nos ofrece estas devociones para acompañar espiritualmente a nuestros hermanos enfermos o moribundos, ayudándoles a prepararse para el encuentro con el Señor.
            </Text>
          </View>
          
          {devociones.map((devocion) => (
            <TouchableOpacity 
              key={devocion.id}
              style={styles.devocionItem}
              onPress={() => router.push(devocion.ruta)}
            >
              <Text style={styles.devocionItemTitulo}>{devocion.titulo}</Text>
            </TouchableOpacity>
          ))}
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
  introduccion: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
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
  introduccionTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  introduccionTexto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 10,
  },
  devocionItem: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
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
  devocionItemTitulo: {
    fontSize: 20,
    color: Colors.primary,
    textAlign: 'center',
  },
}); 