import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function BuscarCristoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Buscar, encontrar y amar a Cristo',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Buscar, encontrar y amar a Cristo</Text>
            <Text style={styles.subtitle}>Llamados a la santidad</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              "Todos los fieles, de cualquier estado o régimen de vida, son llamados a la plenitud de la vida cristiana y a la perfección de la caridad". Todos estamos llamados a la santidad: <Text style={styles.italic}>"Sed perfectos como vuestro Padre celestial es perfecto"</Text>. (CEC 2013).
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Si queremos corresponder a la llamada universal a la santidad, debemos poner empeño en ser piadosos, con un plan concreto de oraciones y devociones que nos lleven, sin darnos cuenta, a tener una vida contemplativa.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              "Los laicos, entregados a Cristo y ungidos por el Espíritu Santo, están maravillosamente llamados y preparados para producir siempre los frutos más abundantes del Espíritu. En efecto, todas sus obras, oraciones, tareas apostólicas, la vida conyugal y familiar, el trabajo diario, el descanso espiritual y corporal, si se realizan en el Espíritu —incluso las molestias de la vida, si se llevan con paciencia— todo ello se convierte en sacrificios espirituales agradables a Dios por Jesucristo, que ellos ofrecen con toda piedad a Dios Padre en la celebración de la Eucaristía, uniéndolos a la ofrenda del cuerpo del Señor". (LG34; cf. LG10)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              De esta manera, también los laicos dan gloria a Dios en todas partes por medio de su buen ejemplo, "consagrando el mundo mismo a Dios". (CEC n. 901).
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              De manera particular, los padres participan de la misión de santificación "impregnando de espíritu cristiano la vida conyugal y procurando la educación cristiana de los hijos". (CEC n. 902).
            </Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
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
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  italic: {
    fontStyle: 'italic',
  },
}); 