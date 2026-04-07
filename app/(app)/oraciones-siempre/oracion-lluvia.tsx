import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function OracionLluviaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración por la Lluvia',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración por la Lluvia</Text>
          <Text style={styles.prayer}>
            Dios nuestro en quien vivimos, nos movemos y existimos; te pedimos que nos concedas la lluvia necesaria para que, ayudados por los bienes de la tierra, anhelemos con más confianza los bienes eternos.{"\n\n"}
            Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo, y es Dios, por los siglos de los siglos. Amén
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