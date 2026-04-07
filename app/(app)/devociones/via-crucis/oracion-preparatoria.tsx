import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function OracionPreparatoriaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oración preparatoria',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración preparatoria para el Vía Crucis</Text>
          <Text style={styles.text}>
          Señor mío y Dios mío,
          bajo la mirada amorosa de nuestra Madre,
          nos disponemos a acompañarte
          por el camino de dolor,
          que fue precio de nuestro rescate.
          Queremos sufrir todo lo que Tú sufriste,
          ofrecerte nuestro pobre corazón, contrito,
          porque eres inocente y vas a morir por nosotros,
          que somos los únicos culpables.
          Madre mía, Virgen dolorosa,
          ayúdame a revivir aquellas horas amargas
          que tu Hijo quiso pasar en la tierra,
          para que nosotros, hechos de un puñado de lodo,
          viviésemos al fin
          in libertatem gloriæ filiorum Dei,
          en la libertad y gloria de los hijos de Dios.
          Amén.
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'justify',
    lineHeight: 24,
  },
}); 