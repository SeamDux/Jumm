import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function SacramentalesScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Los Sacramentales',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Los sacramentales</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              Se llaman sacramentales los signos sagrados instituidos por la Iglesia cuyo fin es preparar a los hombres para recibir el fruto de los sacramentos y santificar las diversas circunstancias de la vida. Por medio de ellos, y a imitación en cierto modo de los sacramentos, se significan y se obtienen por intercesión de la Iglesia unos efectos principalmente espirituales. Los sacramentales no confieren la gracia del Espíritu Santo a la manera de los sacramentos, pero por la oración de la Iglesia preparan a recibirla y disponen a cooperar con ella.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              Entre los sacramentales figuran:
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Las bendiciones</Text>
            <Text style={styles.text}>
              Toda bendición es alabanza de Dios y oración para obtener sus dones. En Cristo, los cristianos son bendecidos por Dios Padre "con toda clase de bendiciones espirituales" (Efesios 1, 3). Por eso la Iglesia da la bendición invocando el nombre de Jesús y haciendo habitualmente la señal santa de la cruz de Cristo.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Los exorcismos</Text>
            <Text style={styles.text}>
              Cuando la Iglesia pide públicamente y con autoridad, en nombre de Jesucristo, que una persona o un objeto sea protegido contra las asechanzas del maligno y sustraída a su dominio, se habla de exorcismo. Jesús lo practicó, de él tiene la Iglesia el poder y el oficio de exorcizar.
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(app)/oraciones-difuntos/exorcismos')}
          >
            <Text style={styles.buttonText}>
              Exorcismos
            </Text>
          </TouchableOpacity>
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
    marginBottom: 10,
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
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'left',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 