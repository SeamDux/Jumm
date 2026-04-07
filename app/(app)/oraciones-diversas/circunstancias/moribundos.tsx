import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function OracionMoribundosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Por los moribundos',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Por los moribundos</Text>
          </View>

          <View style={styles.prayerCard}>
            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.prayer}>
              Dios clementísimo, que amas a todos los hombres{'\n'}
              y no quieres la muerte del pecador{'\n'}
              sino que se convierta y viva,{'\n'}
              te pedimos humildemente por tus siervos{'\n'}
              que están en agonía;{'\n\n'}
              que tu misericordia los conforte{'\n'}
              en su última hora,{'\n'}
              que mueran en tu gracia{'\n'}
              y que sus almas, libres de toda mancha,{'\n'}
              merezcan pasar de esta vida a la eterna.{'\n'}
              Por nuestro Señor Jesucristo, tu Hijo,{'\n'}
              que vive y reina contigo en la unidad del Espíritu Santo{'\n'}
              y es Dios, por los siglos de los siglos.
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
    backgroundColor: Colors.light.background,
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
  prayerCard: {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
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