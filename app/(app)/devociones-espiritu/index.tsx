import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

const devociones = [
  {
    id: 'ven-espiritu-santo',
    titulo: 'Ven, Espíritu Santo',
  },
  {
    id: 'ven-espiritu-santo-creador',
    titulo: 'Ven, Espíritu Santo Creador',
  },
  {
    id: 'ven-espiritu-creador',
    titulo: 'Ven, Espíritu Creador',
  },
  {
    id: 'letanias',
    titulo: 'Letanía del Espíritu Santo',
  }
];

export default function DevocionesEspirituScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Introducción sobre el Espíritu Santo */}
          <Text style={[styles.devocionItemTitulo, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>“Nadie puede decir: 'Jesús es Señor', sino por influjo del Espíritu Santo” (1 Colosenses 12, 3). La Iglesia nos invita a invocar al Espíritu Santo como Maestro interior de la oración cristiana.</Text>
          <Text style={[styles.devocionItemTitulo, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>“Cada vez que en la oración nos dirigimos a Jesús, es el Espíritu Santo quien, con su gracia preveniente, nos atrae al camino de la oración. Por eso, la Iglesia nos invita a implorar todos los días al Espíritu Santo, especialmente al comenzar y terminar cualquier acción importante”.</Text>
          <Text style={[styles.devocionItemTitulo, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>“La forma tradicional para pedir el Espíritu Santo es invocar al Padre por medio de Cristo nuestro Señor para que nos dé el Espíritu Consolador (cf. Lucas 11,13). Jesús insiste en esta petición en su Nombre en el momento mismo en que promete el don del Espíritu de Verdad (cf. Juan 14, 17; 15, 26; 16, 13). Pero la oración más sencilla y la más directa es también la más tradicional: 'Ven, Espíritu Santo', y cada tradición litúrgica la ha desarrollado en antífonas e himnos. (CEC 2670-2671; 2681).</Text>
          {devociones.map((devocion) => (
            <TouchableOpacity 
              key={devocion.id}
              style={styles.devocionItem}
              onPress={() => router.push(`/(app)/devociones-espiritu/${devocion.id}`)}
            >
              <Text style={styles.devocionItemTitulo}>{devocion.titulo}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones-espiritu/dones')}
          >
            <Text style={styles.devocionItemTitulo}>Los dones del Espíritu Santo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones-espiritu/frutos')}
          >
            <Text style={styles.devocionItemTitulo}>Los frutos del Espíritu Santo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.devocionItem}
            onPress={() => router.push('/devociones-espiritu/decenario')}
          >
            <Text style={styles.devocionItemTitulo}>Decenario al Espíritu Santo</Text>
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
