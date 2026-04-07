import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function VenEspirituCreadorScreen() {
  const router = useRouter();
  
  const texto = 'Ven, Espíritu Creador,\nvisita las mentes de los tuyos;\nllena de gracia celestial\nlos corazones que Tú creaste.\n\nTú, llamado el Consolador\nDon del Dios Altísimo,\nFuente viva, fuego, caridad\ny espiritual unción.\n\nTú, con tus siete dones,\neres fuerza de la diestra de Dios.\nTú, el prometido por el Padre;\ntu palabra enriquece nuestros labios.\n\nEnciende la luz en nuestros sentidos,\ninfunde tu amor en nuestros pechos,\ny a la debilidad de nuestra carne\nvigorizando con perpetua fuerza.\n\nAl enemigo ahuyéntalo bien lejos,\ndanos la paz cuanto antes;\nyendo Tú como guía\nsortearemos todos los peligros.\n\nQue por Ti conozcamos al Padre,\nconozcamos igualmente al Hijo\ny en Ti, Espíritu de ambos,\ncreamos en todo tiempo.\n\nV. Envía tu espíritu y todo será creado.\nR. Y se renovará la faz de la tierra.';

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ven, Espíritu Creador',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.devocionDetalle}>
            <Text style={styles.devocionTitulo}>Ven, Espíritu Creador</Text>
            <Text style={styles.oracionTexto}>{texto}</Text>
            <TouchableOpacity 
              style={styles.botonVolver}
              onPress={() => router.back()}
            >
              <Text style={styles.botonVolverTexto}>Volver al listado</Text>
            </TouchableOpacity>
          </View>
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
  devocionDetalle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  devocionTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  oracionTexto: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
