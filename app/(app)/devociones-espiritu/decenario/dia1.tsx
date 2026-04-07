import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia1() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 1 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Primer día</Text>
          <Text style={styles.subtitle}>Pentecostés, el día en que el Espíritu Santo descendió sobre los discípulos del Señor</Text>
          <Text style={styles.paragraph}>
            Los Hechos de los Apóstoles, al narrarnos los acontecimientos de aquel día de Pentecostés en el que el Espíritu Santo descendió en forma de lenguas de fuego sobre los discípulos de Nuestro Señor, nos hacen asistir a la gran manifestación del poder de Dios, con el que la Iglesia inició su camino entre las naciones.
          </Text>
          <Text style={styles.paragraph}>
            La victoria que Cristo -con su obediencia, con su inmolación en la Cruz y con su Resurrección- había obtenido sobre la muerte y sobre el pecado, se reveló entonces en toda su divina claridad. Los discípulos, que ya eran testigos de la gloria del Resucitado, experimentaron en sí la fuerza del Espíritu Santo: sus inteligencias y sus corazones se abrieron a una luz nueva.
          </Text>
          <Text style={styles.paragraph}>
            Cristo y acogido con fe sus enseñanzas, pero no acertaban siempre a penetrar del todo su sentido: era necesario que llegara el Espíritu de verdad, que les hiciera comprender todas las cosas.
          </Text>
          <Text style={styles.paragraph}>
            Sabían que sólo en Jesús podían encontrar palabras de vida eterna, y estaban dispuestos a seguir y a dar la vida por Él, pero en días difíciles, cuando llegó la hora de la prueba, huyeron, lo dejaron solo. El día de Pentecostés todo eso ha pasado: el Espíritu Santo, que es espíritu de fortaleza, los ha hecho firmes, seguros, audaces. La palabra de los Apóstoles resuena recia y vibrante por las calles y plazas de Jerusalén.
          </Text>
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
  dayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 14,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 18,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 16,
    color: '#222',
    marginBottom: 12,
    textAlign: 'justify',
  },
}); 