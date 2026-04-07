import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VocacionesReligiosasScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración por las Vocaciones Religiosas',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración por las Vocaciones Religiosas</Text>
          <Text style={styles.prayer}>
            Espíritu Santo, en la unidad del Padre y del Hijo, te pedimos, nos concedas muchas y santas vocaciones a la vida consagrada. Que muchos jóvenes por la profesión de los consejos evangélicos, siguiendo más de cerca a Cristo y bajo tu transformante acción, se dediquen totalmente a Dios como a su amor supremo, y consigan la perfección de la caridad en el servicio del reino de Dios, procurando la gloria, la edificación de la Iglesia y la salvación del mundo, siendo signos preanunciadores en la tierra de la gloria celestial. Amén
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
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#222',
  },
}); 