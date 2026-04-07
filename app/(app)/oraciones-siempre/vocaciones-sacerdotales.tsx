import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VocacionesSacerdotalesScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración por las Vocaciones Sacerdotales',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración por las Vocaciones Sacerdotales</Text>
          <Text style={styles.prayer}>
            Divino Jesús, que quieres que pidamos al Señor de la mies que envíe a ella buenos operarios, 
            dígnate suscitar en tu Iglesia y en particular en esta Diócesis, 
            muchos y santos Sacerdotes que siéndolo en todo según tu Corazón procuren celosamente por su sagrado ministerio, 
            la gloria de tu Padre celestial y la salvación de las almas redimidas por tu Sangre Preciosa. Amén.
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