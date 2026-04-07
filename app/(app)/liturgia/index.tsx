import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LiturgiaHorasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Liturgia de las Horas',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/(app)/liturgia/laudes')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="sunny" size={32} color={Colors.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Laudes</Text>
              <Text style={styles.menuSubtitle}>Oración de la mañana</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/(app)/liturgia/visperas')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="partly-sunny" size={32} color={Colors.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Vísperas</Text>
              <Text style={styles.menuSubtitle}>Oración de la tarde</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/(app)/liturgia/completas')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="moon" size={32} color={Colors.primary} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitle}>Completas</Text>
              <Text style={styles.menuSubtitle}>Oración de la noche</Text>
            </View>
          </TouchableOpacity>
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
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 14,
    color: Colors.text,
    opacity: 0.7,
  },
}); 