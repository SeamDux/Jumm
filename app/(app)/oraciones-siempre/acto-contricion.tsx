import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function ActoContricionScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Acto de Contrición',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Acto de Contrición</Text>

          <Text style={styles.prayer}>
          Señor mío Jesucristo, Dios y hombre verdadero, 
          Creador, Padre y Redentor mío: por ser Tu quien eres, Bondad infinita, 
          y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido. 
          También me pesa que puedas castigarme con las penas del infierno. 
          Ayudado de Tu divina gracia, propongo firmemente nunca más pecar, 
          confesarme y cumplir la penitencia que me fuera impuesta. Amén
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
  introText: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
  context: {
    fontSize: 16,
    color: Colors.primary,
    backgroundColor: '#f3f3f3',
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    padding: 12,
    marginBottom: 20,
    fontStyle: 'italic',
  },
}); 