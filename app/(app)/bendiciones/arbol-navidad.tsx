import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionArbolNavidadScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Bendición del Árbol de Navidad',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Bendición del Árbol de Navidad</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              La costumbre de colocar en los hogares cristianos un árbol adornado, durante las fiestas de Navidad, es recomendable, ya que este árbol puede recordar a los fieles que Cristo, nacido por nosotros en Belén, es el verdadero Árbol de la vida, Árbol del que fue separado el hombre a causa del pecado de Adán.
            </Text>
            <Text style={styles.prayer}>
              Conviene, pues, invitar a los fieles a que vean en este árbol, lleno de luz, a Cristo luz del mundo, que con su nacimiento nos conduce a Dios que habita en una luz inaccesible.
            </Text>
            <Text style={styles.prayer}>
              La bendición de este árbol la hará, ordinariamente, el padre o la madre al iniciarse las fiestas de Navidad y en ella conviene que participen todos los miembros de la familia.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Rito de bendición</Text>
            <Text style={styles.prayer}>
              El ministro, al comenzar la celebración, dice:{'\n\n'}
              Nuestro auxilio es el nombre del Señor.{'\n\n'}
              R. Que hizo el cielo y la tierra.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Lectura de la Palabra de Dios</Text>
            <Text style={styles.prayer}>
              Uno de los presentes, o el mismo ministro, lee un breve texto de la sagrada Escritura, por ejemplo:{'\n\n'}
              Isaías 60, 13{'\n'}
              Vendrá a ti, Jerusalén, el orgullo del Líbano, con el ciprés y el abeto y el pino, para adornar el lugar de mi santuario y ennoblecer mi estado.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración de bendición</Text>
            <Text style={styles.prayer}>
              Luego el ministro, si es sacerdote o diácono, con las manos extendidas, si es laico, con las manos juntas, dice la oración de bendición:{'\n\n'}
              Oremos.{'\n\n'}
              Bendito seas, Señor y Padre nuestro, que nos concedes recordar con fe en estos días de Navidad los misterios del nacimiento de Jesucristo.{'\n\n'}
              Concédenos, a quienes hemos adornado este árbol y lo hemos embellecido con luces, vivir también a la luz de los ejemplos de la vida santa de tu Hijo y ser enriquecidos con las virtudes que resplandecen en su santa infancia.{'\n\n'}
              Gloria a él por los siglos de los siglos.{'\n\n'}
              Palabra del Señor.{'\n\n'}
              R. Gloria a ti, Señor Jesús.{'\n\n'}
              Según las circunstancias, el ministro rocía con agua bendita a los presentes y el árbol.
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