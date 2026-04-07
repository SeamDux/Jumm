import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia6() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 6 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Sexto día</Text>
          <Text style={styles.subtitle}>Dar a conocer el camino de la correspondencia a la acción del Espíritu Santo</Text>
          <Text style={styles.paragraph}>
            Veo todas las incidencias de la vida -las de cada existencia individual y, de alguna manera, las de las grandes encrucijadas de las historia- como otras tantas llamadas que Dios dirige a los hombres, para que se enfrenten con la verdad; y como ocasiones, que se nos ofrecen a los cristianos, para anunciar con nuestras obras y con nuestras palabras ayudados por la gracia, el Espíritu al que pertenecemos.
          </Text>
          <Text style={styles.paragraph}>
            Cada generación de cristianos ha de redimir, ha de santificar su propio tiempo: para eso, necesita comprender y compartir las ansias de los otros hombres, sus iguales, a fin de darles a conocer, con don de lenguas cómo deben corresponder a la acción del Espíritu Santo, a la efusión permanente de las riquezas del Corazón divino. A nosotros, los cristianos, nos corresponde anunciar en estos días, a ese mundo del que somos y en el que vivimos, el mensaje antiguo y nuevo del Evangelio.
          </Text>
          <Text style={styles.paragraph}>
            No es verdad que toda la gente de hoy -así, en general y en bloque- esté cerrada, o permanezca indiferente, a lo que la fe cristiana enseña sobre el destino y el ser del hombre; no es cierto que los hombres de estos tiempos se ocupen sólo de las cosas de la tierra, y se desinteresen de mirar al cielo. Aunque no faltan ideologías -y personas que las sustentan- que están cerradas, hay en nuestra época anhelos grandes y actitudes rastreras, heroísmos y cobardías, ilusiones y desengaños; criaturas que sueñan con un mundo nuevo más justo y más humano, y otras que, quizá decepcionadas ante el fracaso de sus primitivos ideales, se refugian en el egoísmo de buscar sólo la propia tranquilidad, o en permanecer inmersas en el error.
          </Text>
          <Text style={styles.paragraph}>
            A todos esos hombres y a todas esas mujeres, estén donde estén, en sus momentos de exaltación o en sus crisis y derrotas, les hemos de hacer llegar el anuncio solemne y tajante de San Pedro, durante los días que siguieron a la Pentecostés: Jesús es la piedra angular, el Redentor, el todo de nuestra vida, porque fuera de Él no se ha dado a los hombres otro nombre debajo del cielo, por el cual podamos ser salvos.
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
  dayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 14,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 18,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 16,
    color: '#222',
    marginBottom: 12,
    textAlign: 'justify',
  },
}); 