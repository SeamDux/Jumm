import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia10() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 10 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Décimo día</Text>
          <Text style={styles.subtitle}>La vida del cristiano consiste en empezar una y otra vez</Text>
          <Text style={styles.paragraph}>
            En medio de las limitaciones inseparables de nuestra situación presente, porque el pecado habita todavía de algún modo en nosotros, el cristiano percibe con claridad nueva toda la riqueza de su filiación divina, cuando se reconoce plenamente libre porque trabaja en las cosas de su Padre, cuando su alegría se hace constante porque nada es capaz de destruir su esperanza.
          </Text>
          <Text style={styles.paragraph}>
            Es en esa hora, además y al mismo tiempo, cuando es capaz de admirar todas las bellezas y maravillas de la tierra, de apreciar toda la riqueza y toda la bondad, de amar con toda la entereza y toda la pureza por las que está hecho el corazón humano. Cuando el dolor ante el pecado no degenera nunca en un gesto amargo, desesperado o altanero, porque la compunción y el conocimiento de la humana flaqueza le encaminan a identificarse de nuevo con las ansias redentoras de Cristo, y a sentir más hondamente la solidaridad con todos los hombres. Cuando, en fin, el cristiano experimenta en sí con seguridad la fuerza del Espíritu Santo, de manera que las propias caídas no lo abaten: porque son una invitación a recomenzar, y a continuar siendo testigo fiel de Cristo en todas las encrucijadas de la tierra, a pesar de las miserias personales, que en estos casos suelen ser faltas leves, que enturbian apenas el alma; y, aunque fuesen graves, acudiendo al Sacramento de la Penitencia con compunción, se vuelve a la paz de Dios y a ser de nuevo un buen testigo de sus misericordias.
          </Text>
          <Text style={styles.paragraph}>
            Tal es, en un resumen breve, que apenas consigue traducir en pobres palabras humanas, la riqueza de la fe, la vida del cristiano, si se deja guiar por el Espíritu Santo. No puedo, por eso, terminar de otra manera que haciendo mía la petición, que se contiene en uno de los cantos litúrgicos de la fiesta de Pentecostés, que es como un eco de la oración incesante de la Iglesia entera: Ven, Espíritu Creador, visita las inteligencias de los tuyos, llena de gracia celeste los corazones que tú has creado. En tu escuela haz que sepamos del Padre, haznos conocer también al Hijo, haz en fin que creamos eternamente en Ti, Espíritu que procedes de uno del otro.
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