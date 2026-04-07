import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function SantaTeresaAndesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Santa Teresa de los Andes',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Santa Teresa de Jesús de los Andes</Text>
            <Text style={styles.subtitle}>(Canonizada el 21 de marzo de 1993)</Text>
          </View>

          <View style={styles.prayerCard}>
            <Text style={styles.prayer}>
              Teresa de los Andes que de la mano de la Virgen María te convertiste en una joven enamorada de Jesucristo, eres modelo de Santidad y camino de perfección para la Iglesia.{'\n\n'}
              Tú supiste reír, amar, jugar y servir.{'\n'}
              Tú fuiste fuerte para asumir el dolor y generosa para amar.{'\n'}
              Tú supiste contemplar a Dios en las cosas sencillas de la vida.{'\n'}
              Muéstranos el amor del Padre para vivir la amistad con alegría y encontrar en la familia.{'\n\n'}
              Ayuda a los débiles y a los tristes para que el Espíritu los anime en la esperanza.{'\n'}
              Intercede por nosotros y pide para Chile el amor y la paz.{'\n\n'}
              Teresa de los Andes, hija predilecta de la Iglesia chilena, religiosa del Carmelo, amiga de los jóvenes, servidora de los pobres, ruega por nosotros cada día.{'\n\n'}
              Amén.
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
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  prayerCard: {
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
  prayer: {
    fontSize: 18,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 26,
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