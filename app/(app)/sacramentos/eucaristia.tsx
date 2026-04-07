import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function EucaristiaScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Eucaristía',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Eucaristía</Text>
            <Text style={styles.subtitle}>
              Alimenta la vida divina
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              La Eucaristía es el memorial de la Pascua de Cristo, es decir, de la obra de la salvación realizada por la vida, la muerte y la resurrección de Cristo, obra que se hace presente por la acción litúrgica.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              Por la consagración se realiza la transubstanciación del pan y del vino en el Cuerpo y la Sangre de Cristo. Bajo las especies consagradas del pan y del vino, Cristo mismo, vivo y glorioso, está presente de manera verdadera, real y substancial, con su Cuerpo, su Sangre, su alma y su divinidad.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>
              La Comunión del Cuerpo y de la Sangre de Cristo:
            </Text>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Acrecienta la unión del comulgante con el Señor.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Le perdona los pecados veniales y lo preserva de pecados graves.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Puesto que los lazos de caridad entre el comulgante y Cristo son reforzados, la recepción de este sacramento fortalece la unidad de la Iglesia, Cuerpo místico de Cristo.
              </Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(app)/santa-misa')}
          >
            <Text style={styles.buttonText}>
              La Santa Misa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(app)/adoracion')}
          >
            <Text style={styles.buttonText}>
              Adoración al Santísimo
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
  subtitle: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
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
    fontSize: 18,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'justify',
  },
  bulletPoint: {
    marginBottom: 15,
    paddingLeft: 10,
  },
  bulletText: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
    textAlign: 'justify',
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