import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function OfrecimientoObrasScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ofrecimiento de Obras del día',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Ofrecimiento de Obras del día</Text>
          <Text style={styles.prayer}>
            Sagrado Corazón de Jesús, por medio del Corazón Inmaculado de María Santísima, yo me consagro a ti, y contigo me ofrezco a Dios Padre en el Santo Sacrificio del Altar, con todos mis trabajos, oraciones, sufrimientos y alegrías de este día, en reparación por nuestros pecados, y para que venga a nosotros tu reino. Amén.
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