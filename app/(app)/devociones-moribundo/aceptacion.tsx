import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function AceptacionScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Aceptación de la Muerte',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Aceptación de la Muerte</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              También nosotros, Señor, descenderemos a la tumba cuando, como y donde te plazca. Que sean cumplidos tus justos decretos. ¿Qué nuestros cuerpos pecadores se conviertan en polvo, pero en tu gran misericordia, recibe nuestras almas inmortales... y cuando nuestros cuerpos resuciten, llévalos a tu Reino para que puedan amarte y bendecirte por siempre!
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Amado Padre mío y Dios mío, Señor de la vida y de la muerte, que como decreto inapelable has establecido que los hombres todos muramos como castigo justo por nuestros pecados. Mírame aquí, postrado ante Ti. Desde el fondo de mi corazón aborrezco mis pecados pasados, por los cuales he merecido la muerte muchas veces; muerte que acepto como expiación por mis pecados, y como prueba de mi sumisión a tu voluntad adorable.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Señor, felizmente moriré en el lugar, momento y forma en que Tú lo desees. Y hasta que llegue ese momento, aprovecharé el resto de mis días para luchar contra mis defectos y crecer más en tu amor, para romper los lazos que atan mi corazón a las criaturas y así preparar mi alma para cuando aparezca en tu presencia. Desde este momento me reservo a los brazos de tu paternal Providencia.
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