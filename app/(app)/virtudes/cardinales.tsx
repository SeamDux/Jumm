import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VirtudesCardinalesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Virtudes Cardinales',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Cardinales</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Las virtudes humanas se arraigan en las virtudes teologales que adaptan las facultades del hombre a la participación de la naturaleza divina. Son disposiciones estables del entendimiento y de la voluntad que regulan nuestros actos, ordenan nuestras pasiones y guían nuestra conducta según la razón y la fe.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Las virtudes morales crecen mediante la educación, mediante actos deliberados y con el esfuerzo perseverante. La gracia divina las purifica y las eleva. Pueden agruparse en torno a las cuatro virtudes cardinales: prudencia, justicia, fortaleza y templanza.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4FAW85oc6iQ')}
                    >
            <Text style={styles.buttonText}>Saber más</Text>
            </TouchableOpacity>

          <View style={styles.virtudCard}>
            <Text style={styles.virtudTitle}>Prudencia:</Text>
            <Text style={styles.text}>
              Dispone la razón práctica para discernir, en toda circunstancia, nuestro verdadero bien y elegir los medios justos para realizarlo.
            </Text>
          </View>

          <View style={styles.virtudCard}>
            <Text style={styles.virtudTitle}>Justicia:</Text>
            <Text style={styles.text}>
              Consiste en la constante y firme voluntad de dar al prójimo lo que le es debido. Cuando esta virtud se refiere a Dios se llama de la religión.
            </Text>
          </View>

          <View style={styles.virtudCard}>
            <Text style={styles.virtudTitle}>Fortaleza:</Text>
            <Text style={styles.text}>
              Asegura, en las dificultades, la firmeza y la constancia en la práctica del bien.
            </Text>
          </View>

          <View style={styles.virtudCard}>
            <Text style={styles.virtudTitle}>Templanza:</Text>
            <Text style={styles.text}>
              Modera la atracción hacia los placeres sensibles y procura la moderación en el uso de los bienes creados.
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
button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
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
  virtudCard: {
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
  virtudTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
}); 