import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function OracionPapaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración por el Papa',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración por el Papa</Text>
          <Text style={styles.prayer}>
            Oremos por el Santo Padre N.{"\n\n"}
            El Señor le conserve y le llene de vida, y le haga bienaventurado en la tierra, y no le deje caer en manos de sus enemigos. Amén.{"\n\n"}
            Dios nuestro, pastor y guía de todos los fieles,{"\n"}
            mira con bondad a tu hijo (nombre del Papa){"\n"}
            a quien constituiste pastor de tu Iglesia,{"\n"}
            y sostenlo con tu amor,{"\n"}
            para que con su palabra y su ejemplo{"\n"}
            conduzca al pueblo que le has confiado{"\n"}
            y llegue, juntamente con él, a la vida eterna.{"\n"}
            Por nuestro Señor Jesucristo, tu Hijo,{"\n"}
            que vive y reina contigo en la unidad del Espíritu Santo.{"\n"}
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