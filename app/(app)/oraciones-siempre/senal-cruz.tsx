import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SenalCruzScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Señal de la Cruz',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Señal de la Cruz</Text>

          <Text style={styles.introText}>
          “La memorización de las oraciones fundamentales ofrece una
          base indispensable para la vida de oración, pero es importante
          hacer gustar su sentido”. (Juan Pablo II, Catechesis Tradendae, 55).
          El cristiano comienza su jornada, sus oraciones y sus acciones
          con la señal de la cruz, “en el nombre del Padre y del Hijo y del
          Espíritu Santo. Amén”. El bautizado consagra la jornada a la gloria
          de Dios e invoca la gracia del Señor que le permite actuar en el
          Espíritu como hijo del Padre. La señal de la cruz nos fortalece en
          las tentaciones y en las dificultades.{"\n\n"}
          </Text>


          <Text style={styles.prayer}>
            Por la señal de la Santa Cruz, de nuestros enemigos líbranos Señor, Dios nuestro.{"\n\n"}
            En el nombre del Padre, y del Hijo, y del Espíritu Santo.{"\n"}
            Amén.
          </Text>
          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
          Per signum Sanctae (†) Crucis, de inimicis (†) nostris, libera nos, (†) Domine Deus noster.{"\n\n"}
          In nomine Patris, et Filii, et Spiritus Sancti. Amen.
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
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#222',
    fontStyle: 'italic',
  },
  introText: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
}); 