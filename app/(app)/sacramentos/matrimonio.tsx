import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function MatrimonioScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Matrimonio',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Matrimonio</Text>
            <Text style={styles.subtitle}>
              Perfecciona el amor humano de los esposos y les da las{'\n'}
              gracias para santificarse en el camino hacia la vida divina
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.text}>
              La alianza matrimonial, por la que un hombre y una mujer constituyen una íntima comunidad de vida y de amor, fue fundada y dotada de sus leyes propias por el Creador.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>
              Los efectos del Matrimonio son:
            </Text>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Origina entre los cónyuges un vínculo perpetuo y exclusivo, de modo que el matrimonio válido celebrado y consumado entre bautizados no puede ser disuelto jamás.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Los cónyuges reciben una gracia propia del sacramento por la que:
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Quedan como consagrados por un sacramento peculiar para los deberes y la dignidad de su estado.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Se fortalece su unidad indisoluble.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Se ayudan mutuamente a santificarse con la vida matrimonial conyugal y en la acogida y educación de los hijos.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Entre bautizados, el matrimonio ha sido elevado por Cristo Señor a la dignidad de sacramento.
              </Text>
            </View>
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
}); 