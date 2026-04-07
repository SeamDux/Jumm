import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionEnfermoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Para un enfermo',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Para un enfermo</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.prayer}>
              Señor, Padre Santo, Dios todopoderoso y eterno, que con tu bendición levantas y fortaleces nuestra frágil condición, mira con bondad a este servidor tuyo N.; aparta de él la enfermedad y devuélvele la salud, para que, agradecido, bendiga tu Santo Nombre. Por Jesucristo nuestro Señor. Amén.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Bendición</Text>
            <Text style={styles.prayer}>
              Que el Señor te bendiga y te guarde.{'\n'}
              Que el Señor haga brillar su rostro sobre ti y te sea propicio.{'\n'}
              Que el Señor te muestre su rostro y te conceda la paz.{'\n'}
              En el nombre del Padre, y del Hijo, y del Espíritu Santo.{'\n'}
              Amén.
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
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 