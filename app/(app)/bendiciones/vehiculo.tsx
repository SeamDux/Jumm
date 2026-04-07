import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionVehiculoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Bendición de un vehículo',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Bendición de un vehículo</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              El ministro, al comenzar la celebración, dice:{'\n\n'}
              Nuestro auxilio es el nombre del Señor.{'\n'}
              Que hizo el cielo y la tierra.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Lectura de la Palabra de Dios</Text>
            <Text style={styles.prayer}>
              Uno de los presentes, o el mismo ministro, lee un breve texto de la sagrada Escritura, por ejemplo (Jn 14, 6):{'\n\n'}
              Dijo Jesús: "Yo soy el camino, y la verdad, y la vida. Nadie va al Padre, sino por Mí."{'\n\n'}
              O bien (Mt 22, 37a.39b-40):{'\n\n'}
              Amarás al Señor, tu Dios, con todo tu corazón. Amarás a tu prójimo como a ti mismo. Estos dos mandamientos sostienen la ley entera y los profetas.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración de bendición</Text>
            <Text style={styles.prayer}>
              Luego el ministro, si es sacerdote o diácono, con las manos extendidas, si es laico con las manos juntas, dice la oración de bendición:{'\n\n'}
              Oremos{'\n\n'}
              Dios todopoderoso, creador del cielo y la tierra, que, en tu gran sabiduría, encomendaste al hombre hacer cosas grandes y bellas, te pedimos por los que usen este vehículo: que recorran su camino con precaución y seguridad, eviten toda imprudencia peligrosa para los otros, y, tanto si viajan por placer o por necesidad, experimenten siempre la compañía de Cristo, que vive y reina contigo por los siglos de los siglos.{'\n\n'}
              Amén.{'\n\n'}
              Según las circunstancias, el ministro rocía con agua bendita a los presentes y el vehículo.
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
  sectionCard: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 15,
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