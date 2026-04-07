import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function ReconciliacionScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Reconciliación',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Reconciliación o Penitencia</Text>
            <Text style={styles.subtitle}>
              Nos devuelve la vida divina perdida por el pecado
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              La confesión individual e íntegra de los pecados graves seguida de la absolución, es el único medio ordinario para la reconciliación con Dios y con la Iglesia.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>
              Los efectos espirituales de este sacramento son:
            </Text>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • La reconciliación con Dios por la que el penitente recupera la gracia;
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • La reconciliación con la Iglesia;
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • La remisión de la pena eterna contraída por los pecados mortales;
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • La remisión, al menos en parte, de las penas temporales, consecuencia del pecado;
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • La paz y la serenidad de la conciencia, y el consuelo espiritual;
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • El acrecentamiento de las fuerzas espirituales para el combate cristiano.
              </Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(app)/confesion')}
          >
            <Text style={styles.buttonText}>
              Confesión Sacramental
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