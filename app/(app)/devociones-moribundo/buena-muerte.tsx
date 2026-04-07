import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BuenaMuerteScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Para obtener una buena muerte',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Para obtener una buena muerte</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Oh Creador y Padre mío, imploro de Ti la más importante de todas las gracias: la perseverancia final y una muerte santa. A pesar de haber desperdiciado gran parte de la vida que me has dado hasta ahora, concédeme la gracia de vivirla bien a partir de este momento y de terminarla en tu santo amor.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Concédeme morir como los Santos Patriarcas, abandonando este valle de lágrimas sin tristeza, para ir y disfrutar del descanso eterno en mi patria verdadera.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Concédeme morir como el glorioso San José, acompañado por Jesús y María, pronunciando esos nombres dulcísimos que espero ensalzar eternamente.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Concédeme morir como la Virgen Inmaculada, con el más puro amor y deseando unirme al único amor mío.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Concédeme morir como Jesús en la Cruz, identificado plenamente con la voluntad del Padre y convertido por amor en un holocausto.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Señor Jesús, habiendo aceptado tú la muerte por mí, dame la gracia de morir en un acto perfecto de amor por Ti.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Santa María, Madre de Dios, ruega por mí ahora y a la hora de mi muerte.
            </Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 