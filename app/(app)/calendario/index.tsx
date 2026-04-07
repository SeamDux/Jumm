import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function CalendarioLiturgicoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Calendario Litúrgico de Chile',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Calendario Litúrgico propio de Chile</Text>
          </View>

          <TouchableOpacity 
            style={styles.linkCard}
            onPress={() => router.push('/(app)/calendario/anio')}
          >
            <Text style={styles.linkTitle}>El Año Litúrgico</Text>
            <Text style={styles.linkDescription}>Conoce los tiempos litúrgicos y su significado en la vida de la Iglesia</Text>
          </TouchableOpacity>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Enero</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>22</Text>
              <Text style={styles.celebration}>Beata Laura Vicuña. Memoria libre</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Febrero</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>07</Text>
              <Text style={styles.celebration}>Beato Pío IX. Memoria libre</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>11</Text>
              <Text style={styles.celebration}>Nuestra Señora de Lourdes. Memoria obligatoria</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Mayo</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>03</Text>
              <Text style={styles.celebration}>Santa Cruz de mayo. Fiesta</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>04</Text>
              <Text style={styles.celebration}>Santos Felipe y Santiago. Fiesta</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>24</Text>
              <Text style={styles.celebration}>Santa María, Auxilio de los cristianos. Memoria libre</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Junio</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>08</Text>
              <Text style={styles.celebration}>(Jueves después de Pentecostés){'\n'}Jesucristo Sumo y Eterno Sacerdote. Fiesta</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Julio</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>13</Text>
              <Text style={styles.celebration}>Santa Teresa de los Andes. Fiesta</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>14</Text>
              <Text style={styles.celebration}>Santos Enrique y Camilo de Lelis. Memorias libres</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>16</Text>
              <Text style={styles.celebration}>Nuestra Señora del Carmen. Solemnidad</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Agosto</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>18</Text>
              <Text style={styles.celebration}>San Alberto Hurtado. Memoria obligatoria</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>26</Text>
              <Text style={styles.celebration}>Beato Ceferino Namuncurá. Memoria libre</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>30</Text>
              <Text style={styles.celebration}>Santa Rosa de Lima. Fiesta</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Septiembre</Text>
            <View style={styles.dateItem}>
              <Text style={styles.specialDate}>Último domingo</Text>
              <Text style={styles.celebration}>Día de Oración por Chile</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Octubre</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>11</Text>
              <Text style={styles.celebration}>San Juan XXIII. Memoria libre</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.date}>22</Text>
              <Text style={styles.celebration}>San Juan Pablo II. Memoria libre</Text>
            </View>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Diciembre</Text>
            <View style={styles.dateItem}>
              <Text style={styles.date}>12</Text>
              <Text style={styles.celebration}>Nuestra Señora de Guadalupe</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  monthCard: {
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
  monthTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  dateItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    width: 40,
  },
  specialDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    width: 120,
  },
  celebration: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  linkCard: {
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
  linkTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  linkDescription: {
    fontSize: 16,
    color: '#333',
  },
}); 