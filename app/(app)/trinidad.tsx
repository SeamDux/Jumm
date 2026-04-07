import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Stack, Link } from 'expo-router';
import Colors from '../../constants/Colors';

export default function TrinidadScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones a la Santísima Trinidad',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        {/* Introducción sobre la Santísima Trinidad */}
        <Text style={[styles.menuText, {fontSize: 18, color: '#222', textAlign: 'justify', marginBottom: 16}]}>“El misterio de la Santísima Trinidad es el misterio central de la fe y de la vida cristiana. Es el misterio de Dios en sí mismo. Es, pues, la fuente de todos los otros misterios de la fe; es la luz que los ilumina. Es la enseñanza más fundamental y esencial en la "jerarquía de las verdades de fe". "Toda la historia de la salvación no es otra cosa que la historia del camino y los medios por los cuales el Dios verdadero y único, Padre, Hijo y Espíritu Santo, se revela, reconcilia consigo a los hombres, apartados por el pecado, y se une con ellos" (Cf. CEC 234).</Text>
        <Text style={[styles.menuText, {fontSize: 18, color: '#222', textAlign: 'justify', marginBottom: 16}]}>"Las personas divinas, inseparables en su ser, son también inseparables en su obrar. Pero en la única operación divina cada una manifiesta lo que le es propio en la Trinidad, sobre todo en las misiones divinas de la Encarnación del Hijo y del don del Espíritu Santo". (Cf. CEC. 267). Las misiones divinas de la Santísima Trinidad están íntimamente relacionadas con los misterios de nuestra salvación, pues como dice San Josemaría Escrivá, "asistiendo a la Santa Misa, aprenderás a tratar a cada una de las Personas divinas: al Padre, que engendra al Hijo; al Hijo, que es engendrado por el Padre; al Espíritu Santo que de los dos procede. Tratando a cualquiera de las Personas, tratamos a un solo Dios; y tratando a las tres, a la Trinidad, tratamos igualmente a un solo Dios único y verdadero". (San Josemaría Escrivá, Es Cristo que pasa, 91).</Text>
        <Text style={[styles.menuText, {fontSize: 18, color: '#222', textAlign: 'justify', marginBottom: 16}]}>"La Trinidad es un misterio de fe en sentido estricto, uno de los 'misterios escondidos en Dios, que no pueden ser conocidos si no son revelados desde lo alto'". Dios, ciertamente, ha dejado huellas de su ser trinitario en su obra de Creación y en su Revelación a lo largo del Antiguo Testamento". (Cf. CEC 237).</Text>
        <Link href="/(app)/trinidad/trisagio" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Trisagio Angélico a la Santísima Trinidad</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(app)/trinidad/tedeum" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Te Deum</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  menuItem: {
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
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
}); 