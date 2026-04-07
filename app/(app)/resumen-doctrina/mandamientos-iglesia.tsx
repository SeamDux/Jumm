import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, Link } from 'expo-router';

export default function MandamientosIglesiaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Mandamientos de la Iglesia',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Los mandamientos de la Iglesia</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              Los mandamientos de la Iglesia se sitúan en la línea de una vida moral referida a la vida litúrgica y que se alimenta de ella. El carácter obligatorio de estas leyes positivas promulgadas por la autoridad eclesiástica tiene por fin garantizar a los fieles el mínimo indispensable en el espíritu de oración y en el esfuerzo moral, en el crecimiento del amor de Dios y del prójimo.
            </Text>
            <Text style={styles.text}>
              Los mandamientos más generales son cinco:
            </Text>
          </View>

          <View style={styles.mandamientoCard}>
            <Text style={styles.mandamientoTitle}>1. Oír misa entera los domingos y fiestas de precepto</Text>
            <Text style={styles.text}>
              Exige a los fieles participar en la celebración eucarística, en la que se reúne la comunidad cristiana, el día en que se conmemora la Resurrección del Señor, y en aquellas principales fiestas litúrgicas que conmemoran los misterios del Señor, la Virgen María y los santos.
            </Text>
            <Link href="/santa-misa" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ir a la Santa Misa</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.mandamientoCard}>
            <Text style={styles.mandamientoTitle}>2. Confesar los pecados mortales al menos una vez al año, y en peligro de muerte, y si se ha de comulgar</Text>
            <Text style={styles.text}>
              Asegura la preparación para la Eucaristía mediante la recepción del sacramento de la Reconciliación, que continúa la obra de conversión y de perdón del Bautismo.
            </Text>
            <Link href="/confesion/confesion" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ir a la Confesión</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.mandamientoCard}>
            <Text style={styles.mandamientoTitle}>3. Comulgar por Pascua de Resurrección</Text>
            <Text style={styles.text}>
              Garantiza un mínimo en la recepción del Cuerpo y la Sangre del Señor en relación con el tiempo de Pascua, origen y centro de la liturgia cristiana.
            </Text>
            <Link href="/santa-misa/accion-gracias" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ir a la Comunión</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.mandamientoCard}>
            <Text style={styles.mandamientoTitle}>4. Ayunar y abstenerse de comer carne cuando lo manda la Santa Madre Iglesia</Text>
            <Text style={styles.text}>
              Asegura los tiempos de ascesis y de penitencia que nos preparan para las fiestas litúrgicas; contribuyen a hacernos adquirir el dominio sobre nuestros instintos y la libertad del corazón.
            </Text>
            <Link href="/vida-cristiana/penitencia" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver sobre el ayuno y la abstinencia</Text>
              </TouchableOpacity>
            </Link>
          </View>

          <View style={styles.mandamientoCard}>
            <Text style={styles.mandamientoTitle}>5. Ayudar a la Iglesia en sus necesidades</Text>
            <Text style={styles.text}>
              Señala la obligación de ayudar, cada uno según su capacidad, a cubrir las necesidades materiales de la Iglesia. En Chile la Iglesia ha establecido que todos los fieles que reciben ingresos de cualquier naturaleza deben entregar para las obras de la Iglesia el 1% de sus ingresos. Esto se llama "el uno por ciento". Es la respectiva parroquia.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://unoporcientosanbernardo.cl')}>
              <Text style={styles.buttonText}>Ir al sitio del 1%</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 15,
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
  mandamientoCard: {
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
  mandamientoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 