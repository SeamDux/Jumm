import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, Link } from 'expo-router';

export default function DevocionesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Devociones durante la semana',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Devociones durante la semana</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Es una costumbre espiritual dedicar cada día de la semana a un Devoción diversa, de manera de considerar en la oración y tenerla presente como manera de vivir siempre en presencia de Dios. Se proponen algunas devociones, pero cada uno puede escoger la que le convenga más a su realidad espiritual.
            </Text>
          </View>

          <View style={styles.dayCard}>
            <Text style={styles.dayTitle}>Domingo</Text>
            <Text style={styles.subtitle}>La Santísima Trinidad</Text>
            <Text style={styles.text}>
              Asiste con fervor a la Santa Misa y recibe la Comunión si es posible.
            </Text>
          </View>

          <Link href="/(app)/trinidad" asChild>
            <TouchableOpacity style={styles.buttonSantTrinidad}>
              <Text style={styles.buttonText}>Ir a Devociones a la Santísima Trinidad</Text>
            </TouchableOpacity>
          </Link>

          <View style={styles.dayCard}>
            <Text style={styles.dayTitle}>Lunes</Text>
            <Text style={styles.subtitle}>Las almas del Purgatorio</Text>
            <Text style={styles.text}>
              Ruega por las almas de tus parientes, amigos y bienhechores.
            </Text>
          </View>

          <View style={styles.dayCard}>
            <Text style={styles.dayTitle}>Martes</Text>
            <Text style={styles.subtitle}>Los Ángeles Custodios</Text>
            <Text style={styles.text}>
              Acude a menudo a los Ángeles Custodios pidiéndoles ayuda.{'\n'}
              Reza especialmente a tu Ángel de la guarda.
            </Text>
          </View>

          <View style={styles.dayCard}>
            <Text style={styles.dayTitle}>Miércoles</Text>
            <Text style={styles.subtitle}>San José</Text>
            <Text style={styles.text}>
              Invócale como patrono de la buena muerte.
            </Text>
          </View>

          <Link href="/(app)/devociones-jose" asChild>
            <TouchableOpacity style={styles.buttonSantTrinidad}>
              <Text style={styles.buttonText}>Ir a Devociones a San José</Text>
            </TouchableOpacity>
          </Link>

          <View style={styles.dayCard}>
            <Text style={styles.dayTitle}>Jueves</Text>
            <Text style={styles.subtitle}>La Santísima Eucaristía</Text>
            <Text style={styles.text}>
              A lo largo del día, haz frecuentes comuniones espirituales y, si es posible, una visita al Santísimo.
            </Text>
          </View>

          <Link href="/(app)/santa-misa" asChild>
            <TouchableOpacity style={styles.buttonSantTrinidad}>
              <Text style={styles.buttonText}>Ir a Santa Misa</Text>
            </TouchableOpacity>
          </Link>

          <View style={styles.dayCard}>
            <Text style={styles.dayTitle}>Viernes</Text>
            <Text style={styles.subtitle}>La pasión y muerte de Jesucristo</Text>
            <Text style={styles.text}>
              Medita la Pasión y Muerte del Señor utilizando, por ejemplo, el Vía Crucis.
            </Text>
          </View>

          <Link href="/(app)/devociones/via-crucis" asChild>
            <TouchableOpacity style={styles.buttonSantTrinidad}>
              <Text style={styles.buttonText}>Ir al Vía Crucis</Text>
            </TouchableOpacity>
          </Link>

          <View style={styles.dayCard}>
            <Text style={styles.dayTitle}>Sábado</Text>
            <Text style={styles.subtitle}>La Santísima Virgen María</Text>
            <Text style={styles.text}>
              Reza la Salve u otra devoción mariana.
            </Text>
          </View>

          <Link href="/(app)/devociones-maria" asChild>
            <TouchableOpacity style={styles.buttonSantTrinidad}>
              <Text style={styles.buttonText}>Ir a Devociones a la Virgen María</Text>
            </TouchableOpacity>
          </Link>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  card: {
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
  dayCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  buttonSantTrinidad: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: -5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 