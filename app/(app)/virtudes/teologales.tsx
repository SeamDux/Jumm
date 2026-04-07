import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VirtudesTeologalesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Virtudes Teologales',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Teologales</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Las virtudes teologales se refieren directamente a Dios. Disponen a los cristianos a vivir en relación con la Santísima Trinidad. Tienen como origen, motivo y objeto, a Dios conocido por la fe, esperado y amado por Él mismo. Fundan, animan y caracterizan el obrar moral del cristiano. Informan y vivifican todas las virtudes morales. Son infundidas por Dios en el alma de los fieles para hacerlos capaces de obrar como hijos suyos y merecer la vida eterna. Son la garantía de la presencia y la acción del Espíritu Santo en las facultades del ser humano.
            </Text>
          </View>
            <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=6jI5yH8loz8')}
                    >
            <Text style={styles.buttonText}>Saber más</Text>
            </TouchableOpacity>

          <View style={styles.virtudCard}>
            <Text style={styles.virtudTitle}>Fe:</Text>
            <Text style={styles.text}>
              Por la que creemos en Dios y en todo lo que Él nos ha dicho y revelado, y que la Santa Iglesia nos propone como objeto de fe, porque Él es la verdad misma.
            </Text>
          </View>

          <View style={styles.virtudCard}>
            <Text style={styles.virtudTitle}>Esperanza:</Text>
            <Text style={styles.text}>
              Por la que aspiramos al Reino de los Cielos y a la vida eterna como felicidad nuestra, poniendo nuestra confianza en las promesas de Cristo y apoyándonos no en nuestras fuerzas, sino en los auxilios de la gracia del Espíritu Santo. Por la virtud de la esperanza deseamos y esperamos de Dios con una firme confianza la vida eterna y las gracias para merecerla.
            </Text>
          </View>

          <View style={styles.virtudCard}>
            <Text style={styles.virtudTitle}>Caridad:</Text>
            <Text style={styles.text}>
              Por la que amamos a Dios sobre todas las cosas y a nuestro prójimo como a nosotros mismos por amor de Dios. Es el "vínculo de la perfección" y la forma de todas las virtudes.
            </Text>
          </View>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  card: {
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
    button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  virtudCard: {
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
  virtudTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
}); 