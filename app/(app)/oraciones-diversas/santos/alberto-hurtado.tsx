import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function SanAlbertoHurtadoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'San Alberto Hurtado',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>San Alberto Hurtado</Text>
            <Text style={styles.subtitle}>(Canonizado el 23 de octubre de 2005)</Text>
          </View>

          <View style={styles.prayerCard}>
            <Text style={styles.prayer}>
              Apóstol de Jesucristo,{'\n'}
              servidor de los pobres,{'\n'}
              amigo de los niños{'\n'}
              y maestro de juventudes,{'\n'}
              bendecimos a nuestro Dios{'\n'}
              por tu paso entre nosotros.{'\n\n'}
              Tú supiste amar y servir.{'\n'}
              Tú fuiste profeta de la justicia{'\n'}
              y refugio de los más desamparados.{'\n'}
              Tú construiste con amor{'\n'}
              un hogar para acoger a Cristo.{'\n\n'}
              Como un verdadero padre,{'\n'}
              tú nos llamas a vivir la fe{'\n'}
              comprometida, consecuente y solidaria.{'\n'}
              Tú nos guías con entusiasmo{'\n'}
              en el seguimiento del Maestro.{'\n'}
              Tú nos conduces al Salvador{'\n'}
              que nuestro mundo necesita.{'\n\n'}
              Haznos vivir siempre contentos{'\n'}
              aún en medio de las dificultades.{'\n'}
              Haz que sepamos vencer el egoísmo{'\n'}
              y entregar nuestra vida a los hermanos.{'\n\n'}
              Padre Hurtado,{'\n'}
              hijo de María y de la Iglesia{'\n'}
              amigo de Dios y de los hombres{'\n'}
              Ruega por nosotros{'\n'}
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
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