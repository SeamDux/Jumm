import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function AdoroTePage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Adoro te Devote',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.texto}>
            [Aquí irá el contenido del Adoro te Devote]
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
  },
}); 