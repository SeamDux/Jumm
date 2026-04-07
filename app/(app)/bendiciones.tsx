import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Stack, Link } from 'expo-router';
import Colors from '../../constants/Colors';

export default function BendicionesScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Otras bendiciones y oraciones',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Link href="/(app)/bendiciones/enfermo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Para un enfermo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/nino-enfermo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Para un niño enfermo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/enfermo-grave" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Por un enfermo en peligro grave</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/enfermo-agonizante" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Por un enfermo agonizante</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/in-articulo-mortis" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Bendición Papal "In artículo mortis"</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/santo-tomas" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oración de Santo Tomás antes de comenzar a estudiar</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/internet" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oración antes de conectarse a Internet</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/mesa" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Bendición de la mesa</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/corona-adviento" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Bendición de la Corona de Adviento</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/pesebre" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Bendición del Pesebre</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/arbol-navidad" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Bendición del Árbol de Navidad</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/viaje" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Rito Breve de la Bendición de los que van a emprender un viaje</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones/vehiculo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Bendición de un vehículo</Text>
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
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  menuItem: {
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
    color: Colors.primary,
    textAlign: 'center',
  },
}); 