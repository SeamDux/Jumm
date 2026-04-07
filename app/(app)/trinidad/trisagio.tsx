import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function TrisagioScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Trisagio Angélico',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>El Trisagio Angélico a la Santísima Trinidad</Text>

          <Text style={styles.text}>
            El Trisagio Angélico se reza durante tres días, empezando el viernes antes de esta fiesta de la Santísima Trinidad, que se celebra el Domingo. Es una oración de adoración y alabanza a la Trinidad Beatísima.
          </Text>

          <Text style={styles.category}>Cómo se reza</Text>
          <Text style={styles.prayer}>
            En el nombre del Padre, y del Hijo,{'\n'}
            y del Espíritu Santo. Amén.{'\n\n'}
            V. Señor, ábreme los labios.{'\n'}
            R. Y mi boca proclamará tu alabanza.{'\n\n'}
            V. Dios mío, ven en mi auxilio.{'\n'}
            R. Señor, date prisa en socorrerme.{'\n\n'}
            V. Gloria al Padre...{'\n'}
            R. Como era en el principio...
          </Text>

          <Text style={styles.category}>Primera decena</Text>
          <Text style={styles.text}>
            En primer lugar, dicen todos la deprecación:
          </Text>
          <Text style={styles.prayer}>
            Santo Dios, Santo fuerte, Santo inmortal, ten piedad de nosotros; después se recita el Padre nuestro en coro (o solo).
          </Text>

          <Text style={styles.category}>Segunda decena</Text>
          <Text style={styles.text}>
            Luego, se recitan alternadamente de nuevo las deprecaciones anterior por nueve veces y luego Gloria al Padre...
          </Text>
          <Text style={styles.prayer}>
            Santo Dios, Santo fuerte, Santo Inmortal, ten misericordia de nosotros.{'\n\n'}
            Responden los otros:{'\n'}
            Santo, Santo Santo es Señor Dios de los ejércitos.{'\n'}
            Llenos están los cielos y la tierra de tu gloria.{'\n\n'}
            Se reza por tercera vez en coro las deprecaciones con su respuesta y Gloria al Padre...{'\n\n'}
            Al terminar de decirlo 9 veces, se reza:{'\n'}
            Gloria al Padre ...{'\n'}
            Como era en un principio...{'\n\n'}
            Después todos dicen:{'\n'}
            Santo Dios, Santo fuerte, Santo inmortal, ten misericordia de nosotros-{'\n\n'}
            Al terminar los tres grupo de invocaciones se dice:{'\n'}
            Santo Dios, Santo fuerte, Santo inmortal,{'\n'}
            ten misericordia de nosotros.{'\n\n'}
            Padre nuestro...
          </Text>

          <Text style={styles.category}>Antífona</Text>
          <Text style={styles.prayer}>
            A ti Dios Padre no engendrado,{'\n'}
            a ti Hijo unigénito,{'\n'}
            a ti Espíritu Santo Paráclito,{'\n'}
            santa e indivisa Trinidad,{'\n'}
            con todas las fuerzas de nuestro corazón{'\n'}
            y de nuestra voz, te reconocemos, alabamos y{'\n'}
            bendecimos;{'\n'}
            gloria a ti por los siglos de los siglos.{'\n\n'}
            V. Bendigamos al Padre, y al Hijo, con el Espíritu Santo.{'\n'}
            R. Alabémosle y ensalcémosle por todos los siglos.
          </Text>

          <Text style={styles.category}>Oración</Text>
          <Text style={styles.prayer}>
            Oh Dios todopoderoso y eterno,{'\n'}
            que con la luz de la verdadera fe{'\n'}
            diste a tus siervos conocer la gloria{'\n'}
            de la Trinidad eterna, y adorar la Unidad en el poder de{'\n'}
            tu majestad:{'\n\n'}
            haz, te suplicamos, que, por la{'\n'}
            firmeza de esa misma fe, seamos defendidos{'\n'}
            siempre de toda adversidad.{'\n\n'}
            Por Cristo nuestro Señor{'\n\n'}
            R. Amén.{'\n\n'}
            Líbranos, sálvanos, vivifícanos, ¡oh Trinidad beatísima!
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: Colors.secondary,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },
  prayer: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 