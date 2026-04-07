import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function OracionChileScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración por Chile',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Oración por Chile a la Virgen del Carmen, Reina y Patrona de Chile</Text>
          <Text style={styles.autor}>(Monseñor Ramón Ángel Jara)</Text>

          <Text style={styles.oracion}>
            ¡Oh Virgen Santísima del Carmen!. Llenos de la más tierna confianza como hijos que acuden al corazón de su madre, nosotros venimos a implorar una vez más los tesoros de misericordia que con tanta solicitud nos habéis siempre dispensado.
          </Text>

          <Text style={styles.oracion}>
            Reconocemos humildemente que uno de los mayores beneficios que Dios ha concedido a nuestra Patria, ha sido señalaros a Vos por nuestra especial Abogada, Protectora y Reina. Por eso a Vos clamamos en todos nuestros peligros y necesidades seguros de ser benignamente escuchados. Vos sois la Madre de la Divina Gracia, conservad puras nuestras almas; sois la Torre poderosa de David, defended el honor y la libertad de nuestra Nación; sois el refugio de los pecadores, tronchal las cadenas de los esclavos del error y del vicio; sois el consuelo de los afligidos, socorred a las viudas, a los huérfanos y desvalidos; sois el auxilio de los cristianos, conservad nuestra fe y socorred a nuestra Santa Iglesia, en especial a sus sacerdotes y religiosos.
          </Text>

          <Text style={styles.oracion}>
            Desde el trono de vuestra gloria atended a nuestras súplicas, ¡oh Madre del Carmelo! Abrid vuestro manto y cubrid con él a esta República de Chile, de cuya bandera Vos sois la estrella luminosa. Os pedimos el acierto para los magistrados, legisladores y jueces; la paz y piedad para los matrimonios y familias; el santo temor de Dios para los maestros; la inocencia para los niños; y para la juventud, una cristiana educación.
          </Text>

          <Text style={styles.oracion}>
            Apartad de nuestras ciudades los terremotos incendios y epidemias; alejad de nuestros mares las tormentas, y dad la abundancia a nuestros campos y montañas.
          </Text>

          <Text style={styles.oracion}>
            Sed el escudo de nuestros guerreros, el faro de nuestros marinos y el amparo de los ausentes y viajeros. Sed el remedio de los enfermos, la fortaleza de las almas atribuladas, la protectora especial de los moribundos y la redentora de las almas del Purgatorio.
          </Text>

          <Text style={styles.oracion}>
            ¡Oídnos pues, Reina y Madre Clementísima! Y haced que viviéndo unidos en la vida por la profesión de una misma fe y la práctica de un mismo amor al Corazón Divino de Jesús, podamos ser trasladados de esta patria terrenal a la patria inmortal del cielo, en que os alabaremos por los siglos de los siglos. Amén.
          </Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  autor: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
}); 