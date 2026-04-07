import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function FrutosEspirituSantoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Los frutos del Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Los frutos del Espíritu Santo</Text>
          <Text style={styles.paragraph}>
            Los frutos del Espíritu son perfecciones que forma en nosotros el Espíritu Santo como primicias de la gloria eterna. La tradición de la Iglesia enumera doce:
          </Text>
          <View style={styles.listContainer}>
            <Text style={styles.listItem}>• Caridad</Text>
            <Text style={styles.listItem}>• Gozo</Text>
            <Text style={styles.listItem}>• Paz</Text>
            <Text style={styles.listItem}>• Paciencia</Text>
            <Text style={styles.listItem}>• Longanimidad</Text>
            <Text style={styles.listItem}>• Bondad</Text>
            <Text style={styles.listItem}>• Benignidad</Text>
            <Text style={styles.listItem}>• Mansedumbre</Text>
            <Text style={styles.listItem}>• Fidelidad</Text>
            <Text style={styles.listItem}>• Modestia</Text>
            <Text style={styles.listItem}>• Continencia</Text>
            <Text style={styles.listItem}>• Castidad</Text>
          </View>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 17,
    color: '#222',
    marginBottom: 16,
    textAlign: 'justify',
  },
  listContainer: {
    marginLeft: 20,
    marginBottom: 20,
  },
  listItem: {
    fontSize: 17,
    color: '#222',
    marginBottom: 6,
  },
}); 