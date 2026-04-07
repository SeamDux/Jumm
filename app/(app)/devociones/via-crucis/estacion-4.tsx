import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CuartaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'IV Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>IV Estación</Text>
          <Text style={styles.subtitulo}>Jesús encuentra a María, Su Santísima Madre</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Apenas se ha levantado Jesús de su primera caída, cuando encuentra a su Madre Santísima, junto al camino por donde El pasa.
          </Text>

          <Text style={styles.meditacion}>
            Con inmenso amor mira María a Jesús, y Jesús mira a su Madre; sus ojos se encuentran, y cada corazón vierte en el otro su propio dolor. El alma de María queda anegada en amargura, en la amargura de Jesucristo.
          </Text>

          <Text style={styles.cita}>
            ¡Oh vosotros cuantos pasáis por el camino: mirad y ved si hay dolor comparable a mi dolor! (Lamentaciones 1,2).
          </Text>

          <Text style={styles.meditacion}>
            Pero nadie se da cuenta, nadie se fija; sólo Jesús.
          </Text>

          <Text style={styles.meditacion}>
            Se ha cumplido la profecía de Simeón: una espada traspasará tu alma (Lucas 2,35).
          </Text>

          <Text style={styles.meditacion}>
            En la oscura soledad de la Pasión, Nuestra Señora ofrece a su Hijo un bálsamo de ternura, de unión, de fidelidad; un sí a la voluntad divina.
          </Text>

          <Text style={styles.meditacion}>
            De la mano de María, tú y yo queremos también consolar a Jesús, aceptando siempre y en todo la Voluntad de su Padre, de nuestro Padre.
          </Text>

          <Text style={styles.meditacion}>
            Sólo así gustaremos de la dulzura de la Cruz de Cristo, y la abrazaremos con la fuerza del Amor, llevándola en triunfo por todos los caminos de la tierra.
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