import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function PenitencialScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Acto Penitencial',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Acto Penitencial</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Hermanos: para participar con fruto de esta celebración, comencemos por reconocer nuestros pecados.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.instruccion}>Se hace una breve pausa de silencio.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Yo confieso ante Dios todopoderoso y a ante ustedes hermanos, que he pecado mucho de pensamiento, obra y omisión. Por mi culpa....
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna. Amén.
            </Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    flex: 1,
  },
  instruccion: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    textAlign: 'center',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 