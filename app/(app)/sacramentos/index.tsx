import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Link, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SacramentosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Los Sacramentos',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Link href="/(app)/sacramentos/bautismo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="water" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Bautismo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos/confirmacion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="fire" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Confirmación</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos/eucaristia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="bread-slice" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Eucaristía</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos/reconciliacion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-plus" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Reconciliación o Penitencia</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos/uncion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="bottle-tonic-plus" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Unción de los Enfermos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos/orden" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="hands-pray" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Orden Sacerdotal</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos/matrimonio" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="ring" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Matrimonio</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos/sacramentales" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Los Sacramentales</Text>
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
    fontSize: 20,
    marginLeft: 15,
    color: Colors.primary,
    flex: 1,
  },
}); 