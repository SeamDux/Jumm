import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function LetaniasVirgenScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Letanías a la Virgen',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Letanías a la Santísima Virgen</Text>

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
            Santa María,{'\n'}
            <Text style={styles.respuesta}>ruega por nosotros</Text>{'\n'}
            Santa Madre de Dios,{'\n'}
            Santa Virgen de las vírgenes,{'\n'}
            Madre de Cristo,{'\n'}
            Madre de la Iglesia,{'\n'}
            Madre de Misericordia,{'\n'}
            Madre de la divina gracia,{'\n'}
            Madre de la Esperanza,{'\n'}
            Madre purísima,{'\n'}
            Madre castísima,{'\n'}
            Madre virginal,{'\n'}
            Madre sin mancha,{'\n'}
            Madre inmaculada,{'\n'}
            Madre amable,{'\n'}
            Madre admirable,{'\n'}
            Madre del Buen Consejo,{'\n'}
            Madre del Creador,{'\n'}
            Madre del Salvador,{'\n'}
            Virgen prudentísima,{'\n'}
            Virgen digna de veneración,{'\n'}
            Virgen digna de alabanza,{'\n'}
            Virgen poderosa,{'\n'}
            Virgen clemente,{'\n'}
            Virgen fiel,{'\n'}
            Espejo de justicia,{'\n'}
            Trono de sabiduría,{'\n'}
            Causa de nuestra alegría,{'\n'}
            Vaso espiritual,{'\n'}
            Vaso digno de honor,{'\n'}
            Vaso insigne de devoción,{'\n'}
            Rosa mística,{'\n'}
            Torre de David,{'\n'}
            Torre de marfil,{'\n'}
            Casa de oro,{'\n'}
            Arca de la alianza,{'\n'}
            Puerta del cielo,{'\n'}
            Estrella de la mañana,{'\n'}
            Salud de los enfermos,{'\n'}
            Refugio de los pecadores,{'\n'}
            Consuelo de los migrantes,{'\n'}
            Consuelo de los afligidos,{'\n'}
            Auxilio de los cristianos,{'\n'}
            Reina de los Ángeles,{'\n'}
            Reina de los Patriarcas,{'\n'}
            Reina de los Profetas,{'\n'}
            Reina de los Apóstoles,{'\n'}
            Reina de los Mártires,{'\n'}
            Reina de los Confesores,{'\n'}
            Reina de las Vírgenes,{'\n'}
            Reina de todos los Santos,{'\n'}
            Reina concebida sin pecado original,{'\n'}
            Reina elevada al cielo,{'\n'}
            Reina del Santísimo Rosario,{'\n'}
            Reina de la Familia,{'\n'}
            Reina de la paz,
          </Text>

          <Text style={styles.oracion}>
            V. Cordero de Dios, que quitas los pecados del mundo{'\n'}
            <Text style={styles.respuesta}>R. Perdónanos, Señor</Text>{'\n'}
            V. Cordero de Dios, que quitas los pecados del mundo{'\n'}
            <Text style={styles.respuesta}>R. Escúchanos, Señor</Text>{'\n'}
            V. Cordero de Dios, que quitas los pecados del mundo{'\n'}
            <Text style={styles.respuesta}>R. Ten misericordia de nosotros</Text>{'\n'}
            V. Ruega por nosotros, Santa Madre de Dios{'\n'}
            <Text style={styles.respuesta}>R. Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo.</Text>{'\n'}
          </Text>

          <Text style={styles.subtitulo}>Oremos</Text>

          <Text style={styles.oracion}>
            Te suplicamos, Señor, que derrames tu gracia en nuestras almas para que los que, por el anuncio del Ángel, hemos conocido la Encarnación de tu Hijo Jesucristo, por su Pasión y Cruz, seamos llevados a la gloria de su Resurrección. Por el mismo Jesucristo nuestro Señor. Amén.
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
            - Por la persona e intenciones del Sr. (Arz) Obispo de esta diócesis:{'\n'}
            <Text style={styles.respuesta}>Padrenuestro. Avemaría. Gloria.</Text>{'\n\n'}
            - Por las benditas almas del Purgatorio:{'\n'}
            <Text style={styles.respuesta}>Padrenuestro. Avemaría. Que descansen en paz.</Text>
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