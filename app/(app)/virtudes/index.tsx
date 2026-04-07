import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function VirtudesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Las virtudes',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Las virtudes</Text>
            <Text style={styles.subtitle}>Guía para el crecimiento espiritual</Text>
          </View>

          <Link href="/(app)/virtudes/teologales" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-flash" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Teologales</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/virtudes/cardinales" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="shield-cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Cardinales</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/virtudes/bienaventuranzas" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="star-shooting" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Las bienaventuranzas</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/virtudes/misericordia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="hand-heart" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Las obras de misericordia</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/virtudes/pecados" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="alert-circle" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Pecados mortales, veniales y capitales</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/virtudes/diversidad-pecados" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="alert-octagon" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>La diversidad de pecados</Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  menuItem: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 15,
    flex: 1,
  },
}); 