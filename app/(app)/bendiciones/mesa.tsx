import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionMesaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Bendición de la mesa',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Bendición de la mesa</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Antes</Text>
            <Text style={styles.prayer}>
              V/. Bendícenos, Señor, y bendice estos alimentos que por tu bondad vamos a tomar. Por Jesucristo Nuestro Señor. Amén.
            </Text>
            <Text style={styles.subtitle}>(Añadir al mediodía y por la tarde)</Text>
            <Text style={styles.prayer}>
              V/. El Rey de la Gloria nos haga partícipes de la mesa celestial.{'\n'}
              Amén.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Después</Text>
            <Text style={styles.prayer}>
              V/. Te damos gracias, Señor, por todos tus beneficios.{'\n'}
              Tú, que vives y reinas por los siglos de los siglos.{'\n'}
              Amén.{'\n\n'}
              V/. El Señor nos dé su paz.{'\n'}
              Y la vida eterna. Amén.
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
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