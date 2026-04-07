import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function BajoTuProteccionScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Bajo Tu Protección',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Bajo tu protección</Text>

          <Text style={styles.oracion}>
            Bajo tu amparo{'\n'}
            nos acogemos Santa Madre{'\n'}
            de Dios; no desprecies las{'\n'}
            súplicas que te hacemos en{'\n'}
            nuestras necesidades; antes{'\n'}
            bien, líbranos de todos los{'\n'}
            peligros Virgen gloriosa y{'\n'}
            bendita.
          </Text>

          <Text style={styles.subtitulo}>En latín</Text>

          <Text style={styles.oracion}>
            Sub tuum praesidium{'\n'}
            confugimus,{'\n'}
            Sancta Dei Genitrix.{'\n'}
            Nostras deprecationes ne{'\n'}
            despicias{'\n'}
            in necessitatibus nostris,{'\n'}
            sed a periculis cunctis{'\n'}
            libera nos semper,{'\n'}
            Virgo gloriosa et benedicta.
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
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 