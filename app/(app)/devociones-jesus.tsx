import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function DevocionesJesusScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones a Nuestro Señor Jesucristo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>

        <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/salmo-2')}
          >
            <Text style={styles.devocionItemTitulo}>Salmo 2</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/coronilla-misericordia')}
          >
            <Text style={styles.devocionItemTitulo}>Coronilla de la Divina Misericordia</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/soneto-cristo')}
          >
            <Text style={styles.devocionItemTitulo}>Soneto a Jesús Crucificado</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/oracion-agustin')}
          >
            <Text style={styles.devocionItemTitulo}>Oración de San Agustín</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/primer-viernes')}
          >
            <Text style={styles.devocionItemTitulo}>Devoción del primer viernes de mes al Sagrado Corazón de Jesús</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/consagracion-sagrado')}
          >
            <Text style={styles.devocionItemTitulo}>Consagración al Sagrado Corazón de Jesús</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/consagracion-diocesis')}
          >
            <Text style={styles.devocionItemTitulo}>Consagración de la Diócesis al Sagrado Corazón</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/mes-sagrado-corazon')}
          >
            <Text style={styles.devocionItemTitulo}>Mes del Sagrado Corazón de Jesús</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/letanias-sagrado')}
          >
            <Text style={styles.devocionItemTitulo}>Letanías del Sagrado Corazón</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/letanias-nombre')}
          >
            <Text style={styles.devocionItemTitulo}>Letanías del Santo Nombre de Jesús</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/via-crucis')}
          >
            <Text style={styles.devocionItemTitulo}>Vía Crucis</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/via-crucis-breve')}
          >
            <Text style={styles.devocionItemTitulo}>Vía Crucis breve</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones/oracion-sagrado-dificultades')}
          >
            <Text style={styles.devocionItemTitulo}>Oración al Sagrado Corazón ante las dificultades de San Claudio de la Colombiere</Text>
          </TouchableOpacity>
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
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
}); 