import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function OracionBuenaMuerteScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Por una buena muerte',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Por una buena muerte</Text>
          </View>

          <View style={styles.prayerCard}>
            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.prayer}>
              Señor Jesús, Dios de bondad{'\n'}
              y Padre de misericordia,{'\n'}
              me presento ante ti con el corazón{'\n'}
              humillado, contrito y arrepentido.{'\n\n'}
              Te encomiendo mi última hora{'\n'}
              y lo que después de ella me espera.{'\n'}
              Cuando mis pies, entumecidos,{'\n'}
              me adviertan que mi carrera en este mundo{'\n'}
              está por acabar, Jesús misericordioso, ten piedad de mí.{'\n\n'}
              Cuando mis ojos, oscurecidos y turbados{'\n'}
              por el dolor de la muerte inminente,{'\n'}
              fijen en ti sus miradas lánguidas y moribundas,{'\n'}
              Jesús misericordioso, ten piedad de mí.{'\n\n'}
              Cuando mi corazón, oprimido por el dolor{'\n'}
              de la enfermedad, sea presa de la angustia de la muerte,{'\n'}
              Jesús misericordioso, ten piedad de mí.{'\n\n'}
              No permitas que muera sin los santos sacramentos.{'\n'}
              Te deseo recibir con pleno conocimiento,{'\n'}
              para obtener el perdón de mis pecados{'\n'}
              y morir en tu santa gracia.{'\n'}
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