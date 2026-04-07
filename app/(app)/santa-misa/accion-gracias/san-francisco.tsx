import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SanFranciscoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oraciones de San Francisco de Asís',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oraciones de San Francisco de Asís</Text>
          <Text style={styles.prayer}>
            Señor, Tú lo eres todo y yo no soy nada.{"\n"}
            Tú eres el Creador de todas las cosas,{"\n"}
            Tú el que conservas todo el universo, y yo no soy nada.{"\n"}
            Señor, hazme instrumento de tu paz:{"\n"}
            Donde haya odio, siembre yo amor;{"\n"}
            donde haya injuria, perdón;{"\n"}
            donde haya duda, fe;{"\n"}
            donde haya tristeza, alegría;{"\n"}
            donde haya desaliento, esperanza;{"\n"}
            donde haya oscuridad, tu luz.{"\n"}
            ¡Oh, Divino Maestro!,{"\n"}
            que no busque ser consolado, sino consolar;{"\n"}
            que no busque ser querido, sino amar;{"\n"}
            que no busque ser comprendido, sino comprender;{"\n"}
            porque dando es como recibimos;{"\n"}
            perdonando es como Tú nos perdonas;{"\n"}
            y muriendo en Ti, es como nacemos a la vida eterna.
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