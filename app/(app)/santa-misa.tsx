import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Link, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SantaMisaPage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'La Santa Misa o Eucaristía',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Link href="/(app)/santa-misa/misa-del-dia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="calendar-today" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Misa del día</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/preparacion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-pulse" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Preparación</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/ordinario" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-open-variant" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Ordinario de la Misa</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="hands-pray" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Acción de Gracias</Text>
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
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
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
    marginLeft: 10,
    fontSize: 18,
    color: Colors.secondary,
  },
}); 