import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, Link } from 'expo-router';

export default function CantoralScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Cantoral Breve',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Cantoral Breve</Text>
            <Text style={styles.description}>
            La tradición musical de la Iglesia universal constituye un tesoro
de valor inestimable, que sobresale entre las demás expresiones
artísticas, principalmente porque el canto sagrado, unido a las
palabras, constituye una parte necesaria o integral de la Liturgia
solemne. En efecto, el canto sagrado ha sido ensalzado tanto por
la Sagrada Escritura, como por los Santos Padres, los Romanos
Pontífices, los cuales, en los últimos tiempos, empezando por San
Pío X, han expuesto con mayor precisión la función ministerial
de la música sacra en el servicio divino.La música sacra, por
consiguiente, será tanto más santa cuanto más íntimamente esté
unida a la acción litúrgica, ya sea expresando con mayor delicadeza
la oración o fomentando la unanimidad, ya sea enriqueciendo la
mayor solemnidad los ritos sagrados. Además, la Iglesia aprueba
y admite en el culto divino todas las formas de arte auténtico
que estén adornadas de las debidas cualidades.( Conc. Vaticano
II. SC, 112)
            </Text>
          </View>

          <Link href="/cantoral/entrada" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Cantos de entrada</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/cantoral/ofertorio" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Cantos de ofertorio</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/cantoral/comunion" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Cantos de Comunión</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/cantoral/maria" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Cantos a la Virgen María</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
    lineHeight: 24,
  },
  optionCard: {
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
  optionText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
}); 