import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function BautismoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Bautismo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Bautismo</Text>
            <Text style={styles.subtitle}>
              Nos da el nacimiento a la vida divina:{'\n'}
              nos hace herederos del cielo
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>
              El fruto del Bautismo, o gracia bautismal, es una realidad rica que comprende:
            </Text>
            
            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • El perdón del pecado original y de todos los pecados personales.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • El nacimiento a la vida nueva, por la cual el hombre es hecho hijo adoptivo del Padre, miembro de Cristo, templo del Espíritu Santo.
              </Text>
            </View>

            <View style={styles.bulletPoint}>
              <Text style={styles.bulletText}>
                • La incorporación a la Iglesia, Cuerpo de Cristo, y la participación del sacerdocio de Cristo.
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