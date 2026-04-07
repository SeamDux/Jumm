import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function ConfirmacionScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Confirmación',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Confirmación</Text>
            <Text style={styles.subtitle}>
              Fortalece y acrecienta la vida divina:{'\n'}
              nos convierte en soldados de Cristo
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>
              La Confirmación perfecciona la gracia bautismal; es el sacramento que da el Espíritu Santo para:
            </Text>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Enraizarnos más profundamente en la filiación divina.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Incorporarnos más firmemente a Cristo.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Hacer más sólido nuestro vínculo con la Iglesia, asociándonos todavía más a su misión.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • Ayudarnos a dar testimonio de la fe cristiana por la palabra acompañada de las obras.
              </Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(app)/devociones-espiritu')}
          >
            <Text style={styles.buttonText}>
              Devociones al Espíritu Santo
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