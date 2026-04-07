import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, Link } from 'expo-router';

export default function AccionGraciasPage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Acción de Gracias',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Link href="/(app)/santa-misa/accion-gracias/santo-tomas" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oración de Santo Tomás de Aquino</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/seate-grato" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Séate Grato (para sacerdotes)</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/alma-cristo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Alma de Cristo (San Ignacio de Loyola)</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/san-francisco" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oraciones de San Francisco de Asís</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/crucifijo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oración ante el Crucifijo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/virgen" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oración a la Virgen Santísima</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/san-jose" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oración a San José</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/san-miguel" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Oración a San Miguel Arcángel</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias/letanias" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Letanías de la Humildad</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  menuItem: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuText: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: '500',
    textAlign: 'center',
  },
}); 