import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function JoseScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'A San José, para pedir una buena muerte',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>A San José, para pedir una buena muerte</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Especialmente, "la Iglesia nos anima a prepararnos para la hora de la muerte, ... confiándonos a San José, patrono de la buena muerte."
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Poderoso patrón del linaje humano, amparo de pecadores, seguro refugio de las almas, eficaz auxilio de los afligidos, agradable consuelo de los desamparados, glorioso San José, el último instante de mi vida ha de llegar sin remedio; mi alma quizás agonizará terriblemente acongojada con la representación de mi mala vida y de mis muchas culpas; el paso a la eternidad será sumamente duro; el demonio, mi enemigo, intentará combatirme terriblemente con todo el poder del infierno, a fin de que pierda a Dios eternamente; mis fuerzas en lo natural han de ser nulas; yo no tendré en lo humano quien me ayude; desde ahora, para entonces, te invoco, padre mío; a tu patrocinio me acojo; asísteme en aquel trance para que no falte en la fe, la esperanza y en la caridad; cuando mi espíritu, tu Hijo y mi Dios, mi esposo y mi Señor, ahuyentaron a los demonios para que no se atreviesen a combatir tu espíritu. Por estos favores y por los que en vida te hicieron, te pido ahuyentes a estos enemigos, para que yo acabe la vida en paz, amando a Jesús, a María y a ti, San José. Así sea.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.jaculatoria}>
              Jesús, José y María, os doy el corazón y el alma mía.
            </Text>
            <Text style={styles.jaculatoria}>
              Jesús, José y María, asistidme en la última agonía.
            </Text>
            <Text style={styles.jaculatoria}>
              Jesús, José y María, recibid cuando muera, el alma mía.
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
  jaculatoria: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    fontStyle: 'italic',
    color: Colors.primary,
    marginBottom: 10,
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