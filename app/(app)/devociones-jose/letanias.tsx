import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function LetaniasSanJoseScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Letanías a San José',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Letanías a San José</Text>

          <Text style={styles.oracion}>
            V. Señor, ten misericordia de nosotros{'\n'}
            <Text style={styles.respuesta}>R. Señor, ten misericordia de nosotros</Text>{'\n'}
            V. Cristo, ten misericordia de nosotros{'\n'}
            <Text style={styles.respuesta}>R. Cristo, ten misericordia de nosotros</Text>{'\n'}
            V. Señor, ten misericordia de nosotros{'\n'}
            <Text style={styles.respuesta}>R. Señor, ten misericordia de nosotros</Text>{'\n'}
            V. Cristo, óyenos{'\n'}
            <Text style={styles.respuesta}>R. Cristo, óyenos</Text>{'\n'}
            V. Cristo, escúchanos{'\n'}
            <Text style={styles.respuesta}>R. Cristo, escúchanos</Text>{'\n'}
          </Text>

          <Text style={styles.oracion}>
            V. Dios, Padre celestial{'\n'}
            <Text style={styles.respuesta}>R. Ten misericordia de nosotros</Text>{'\n'}
            V. Dios Hijo, Redentor del mundo{'\n'}
            <Text style={styles.respuesta}>R. Ten misericordia de nosotros</Text>{'\n'}
            V. Dios Espíritu Santo{'\n'}
            <Text style={styles.respuesta}>R. Ten misericordia de nosotros</Text>{'\n'}
            V. Trinidad Santa, un solo Dios{'\n'}
            <Text style={styles.respuesta}>R. Ten misericordia de nosotros</Text>
          </Text>

          <Text style={styles.oracion}>
            San José,{'\n'}
            <Text style={styles.respuesta}>ruega por nosotros</Text>{'\n'}
            Ilustre descendiente de David,{'\n'}
            Luz de los Patriarcas,{'\n'}
            Esposo de la Madre de Dios,{'\n'}
            Custodio purísimo de la Virgen,{'\n'}
            Padre nutricio del Hijo de Dios,{'\n'}
            Celoso defensor de Cristo,{'\n'}
            Jefe de la Sagrada Familia,{'\n'}
            José justísimo,{'\n'}
            José castísimo,{'\n'}
            José prudentísimo,{'\n'}
            José fortísimo,{'\n'}
            José obedientísimo,{'\n'}
            José fidelísimo,{'\n'}
            Espejo de paciencia,{'\n'}
            Amante de la pobreza,{'\n'}
            Modelo de los trabajadores,{'\n'}
            Gloria de la vida doméstica,{'\n'}
            Guardián de las vírgenes,{'\n'}
            Sostén de las familias,{'\n'}
            Consuelo de los desgraciados,{'\n'}
            Esperanza de los enfermos,{'\n'}
            Patrono de los moribundos,{'\n'}
            Terror de los demonios,{'\n'}
            Protector de la Santa Iglesia,
          </Text>

          <Text style={styles.oracion}>
            V. Cordero de Dios, que quitas los pecados del mundo{'\n'}
            <Text style={styles.respuesta}>R. Perdónanos, Señor</Text>{'\n'}
            V. Cordero de Dios, que quitas los pecados del mundo{'\n'}
            <Text style={styles.respuesta}>R. Escúchanos, Señor</Text>{'\n'}
            V. Cordero de Dios, que quitas los pecados del mundo{'\n'}
            <Text style={styles.respuesta}>R. Ten misericordia de nosotros</Text>{'\n'}
            V. Ruega por nosotros, San José{'\n'}
            <Text style={styles.respuesta}>R. Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo.</Text>{'\n'}
          </Text>

          <Text style={styles.subtitulo}>Oremos</Text>

          <Text style={styles.oracion}>
            Oh Dios, que con inefable providencia te dignaste elegir a San José por esposo de tu Santísima Madre; haz, te rogamos, que así como le veneramos en la tierra por nuestro protector, merezcamos tenerle por intercesor en el cielo. Tú que vives y reinas por los siglos de los siglos. Amén.
          </Text>

          <Text style={styles.subtitulo}>Oraciones adicionales</Text>

          <Text style={styles.texto}>
            Las siguientes oraciones pueden ser añadidas después de las letanías:
          </Text>

          <Text style={styles.oracion}>
            - Por las intenciones del Sumo Pontifice para ganar las indulgencias concedidas:{'\n'}
            <Text style={styles.respuesta}>Padrenuestro. Avemaría. Gloria.</Text>{'\n\n'}
            - Por las necesidades de la Iglesia y del Estado:{'\n'}
            <Text style={styles.respuesta}>Padrenuestro. Avemaría. Gloria.</Text>{'\n\n'}
            - Por las benditas almas del Purgatorio:{'\n'}
            <Text style={styles.respuesta}>Padrenuestro. Avemaría. Que descansen en paz</Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  respuesta: {
    color: Colors.primary,
    fontStyle: 'italic',
  },
});