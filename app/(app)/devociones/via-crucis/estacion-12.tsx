import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DuodecimaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'XII Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>XII Estación</Text>
          <Text style={styles.subtitulo}>Muerte de Jesús en la Cruz</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            En la parte alta de la Cruz está escrita la causa de la condena:
          </Text>

          <Text style={styles.cita}>
            Jesús Nazareno Rey de los judíos (Juan 19,19). Y todos los que pasan por allí, le injurian y se mofan de Él. Si es el rey de Israel, baje ahora de la cruz (Mateo 27,42).
          </Text>

          <Text style={styles.meditacion}>
            Uno de los ladrones sale en su defensa:
          </Text>

          <Text style={styles.cita}>
            Este ningún mal ha hecho... (Lucas 23,41). Luego dirige a Jesús una petición humilde, llena de fe: Señor, acuérdate de mí cuando estés en tu reino (Lucas 23,42).
          </Text>

          <Text style={styles.cita}>
            En verdad te digo que hoy mismo estarás conmigo en el paraíso (Lucas 23,43).
          </Text>

          <Text style={styles.meditacion}>
            Junto a la Cruz está su Madre, María, con otras santas mujeres. Jesús la mira, y mira después al discípulo que El ama, y dice a su Madre:
          </Text>

          <Text style={styles.cita}>
            Mujer, ahí tienes a tu hijo. Luego dice al discípulo: Ahí tienes a tu madre (Juan 19,26-27).
          </Text>

          <Text style={styles.meditacion}>
            Se apaga la luminaria del cielo, y la tierra queda sumida en tinieblas. Son cerca de las tres, cuando Jesús exclama:
          </Text>

          <Text style={styles.cita}>
            Eli, Eli, lamma sabachtani? (Mateo 17,46).
          </Text>

          <Text style={styles.meditacion}>
            Después, sabiendo que todas las cosas están a punto de ser consumadas, para que se cumpla la Escritura, dice:
          </Text>

          <Text style={styles.cita}>
            Tengo sed (Juan 19,28). Los soldados empapan una esponja en vinagre y poniéndola en una caña de hisopo se la acercan a la boca. Jesús sorbe el vinagre, y exclama: Todo está cumplido (Juan 19,30).
          </Text>

          <Text style={styles.meditacion}>
            El velo del templo se rasga, y tiembla la tierra, cuando clama el Señor con una gran voz:
          </Text>

          <Text style={styles.cita}>
            Padre, en tus manos encomiendo mi espíritu (Lucas 23,46). Y expira.
          </Text>

          <Text style={styles.meditacion}>
            Ama el sacrificio, que es fuente de vida interior. Ama la Cruz, que es altar del sacrificio. Ama el dolor, hasta beber, como Cristo, las heces del cáliz.
          </Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Pequé Señor, me pesa</Text>
            <Text style={styles.texto}>R. Ten piedad y misericordia de mí.</Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 20,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  oracionContainer: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  meditacion: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 28,
  },
  cita: {
    fontSize: 18,
    color: Colors.text,
    fontStyle: 'italic',
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 28,
    paddingHorizontal: 20,
  },
}); 