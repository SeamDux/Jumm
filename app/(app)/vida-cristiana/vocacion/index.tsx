import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Link, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function VocacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vocación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Vocación</Text>
            <Text style={styles.description}>
              Caminos concretos para responder al llamado de Dios con alegría y entrega total.
            </Text>
          </View>

          <Link href="/(app)/vida-cristiana/vocacion/vocacion-sacerdotal" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="church" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Vocación Sacerdotal</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana/vocacion/vocacion-vida-religiosa" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="account-heart" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Vocación a la Vida Religiosa</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana/vocacion/vocacion-matrimonio" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="ring" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Vocación al Matrimonio</Text>
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuText: {
    fontSize: 18,
    marginLeft: 15,
    color: Colors.primary,
    flex: 1,
  },
});

