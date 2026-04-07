import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function SonetoCristoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Soneto a Jesús Crucificado',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Soneto a Jesús Crucificado</Text>
          <Text style={styles.autor}>Atribuido a Fray Miguel de Guevara, O. S. A.</Text>
          
          <Text style={styles.poema}>
            No me mueve, mi Dios, para quererte{'\n'}
            el cielo que me tienes prometido,{'\n'}
            ni me mueve el infierno tan temido{'\n'}
            para dejar por eso de ofenderte.{'\n\n'}
            
            Tú me mueves, Señor; muéveme el verte{'\n'}
            clavado en una cruz y escarnecido;{'\n'}
            muéveme ver tu cuerpo tan herido;{'\n'}
            muévenme tus afrentas y tu muerte.{'\n\n'}
            
            Muéveme, en fin, tu amor, y en tal manera,{'\n'}
            que aunque no hubiera cielo, yo te amara,{'\n'}
            y aunque no hubiera infierno, te temiera.{'\n\n'}
            
            No me tienes que dar porque te quiera,{'\n'}
            pues aunque lo que espero no esperara,{'\n'}
            lo mismo que te quiero te quisiera.
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  autor: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  poema: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#000000',
  },
}); 