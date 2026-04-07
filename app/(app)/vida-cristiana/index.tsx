import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Link, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function VidaCristianaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'La Vida Cristiana',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>La Vida Cristiana</Text>
            <Text style={styles.description}>
              Guía práctica para vivir una vida cristiana plena y significativa
            </Text>
          </View>

          <Link href="/(app)/vida-cristiana/buscar-cristo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="magnify-plus" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Buscar, encontrar y amar a Cristo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana/vida-oracion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="hands-pray" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Vida de Oración, sacrificio y trabajo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana/vida-espiritual" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="spirit-level" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>La vida espiritual</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana/devociones-semana" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="calendar-week" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones durante la semana</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana/vocacion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="account-group" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Vocación</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana/penitencia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Días de penitencia, las indulgencias</Text>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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