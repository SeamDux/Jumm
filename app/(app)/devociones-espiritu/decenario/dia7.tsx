import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia7() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 7 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Séptimo día</Text>
          <Text style={styles.subtitle}>El don de la sabiduría nos permite conocer a Dios y gozarnos en su presencia</Text>
          <Text style={styles.paragraph}>
            Entre los dones del Espíritu Santo, diría que hay uno del que tenemos especial necesidad todos los cristianos: el don de sabiduría que, al hacernos conocer a Dios y gustar de Dios, nos coloca en condiciones de poder juzgar con verdad sobre las situaciones y las cosas de esta vida. Si fuéramos consecuentes con nuestra fe, al mirar a nuestro alrededor y contemplar el espectáculo de la historia y del mundo, no podríamos menos de sentir que se elevan en nuestro corazón los mismos sentimientos que animaron el de Jesucristo: al ver aquellas muchedumbres se compadecía de ellas porque estaban malparadas y abatidas, como ovejas sin pastor.
          </Text>
          <Text style={styles.paragraph}>
            No es que el cristiano no advierta todo lo bueno que hay en la humanidad, que no aprecie las limpias alegrías, que no participe en los afanes e ideales terrenos. Por el contrario, siento todo eso desde lo más recóndito de su alma, y lo comparte y lo vive con especial hondura, ya que conoce mejor que hombre alguno las profundidades del espíritu humano. La fe cristiana no achica el ánimo, ni cercena los impulsos nobles del alma, puesto que nos los agranda, al revelar su verdadero y más auténtico sentido: no estamos destinados a una felicidad cualquiera, porque hemos sido llamados a penetrar en la intimidad divina, a conocer y amar a Dios Padre, a Dios Hijo y a Dios Espíritu Santo y, en la Trinidad y en la Unidad de Dios, a todos los ángeles y a todos los hombres.
          </Text>
          <Text style={styles.paragraph}>
            Esa es la gran osadía de la fe cristiana: proclamar el valor y la dignidad de la humana naturaleza, y afirmar que, mediante la gracia que nos eleva al orden sobrenatural, hemos sido creados para alcanzar la dignidad de hijos de Dios. Osadía ciertamente increíble, si no estuviera basada en el decreto salvador de Dios Padre, y no hubiera sido confirmada por la sangre de Cristo y reafirmada y hecha posible por la acción constante del Espíritu Santo. Hemos de vivir de fe, de crecer en la fe, hasta que se pueda decir de cada uno de nosotros, de cada cristiano, lo que escribía hace siglos uno de los grandes Doctores de la Iglesia oriental: de la misma manera que los cuerpos transparentes, nítidos, al recibir los rayos de luz, se vuelven resplandecientes e irradian brillo, las almas que son llevadas e ilustradas por el Espíritu Santo se vuelven también ellas espirituales y llevan a las demás la luz de la gracia.
          </Text>
          <Text style={styles.paragraph}>
            Del Espíritu Santo proviene el conocimiento de las cosas futuras, la inteligencia de los misterios, la comprensión de las verdades ocultas, la distribución de los dones, la ciudadanía celeste, la conversación con los ángeles. De Él, la alegría que nunca termina, la perseverancia en Dios, la semejanza con Dios y, lo más sublime que puede ser pensado, el hacerse Dios. La conciencia de la magnitud de la dignidad humana -de modo eminente, inefable, al ser constituidos por la gracia en hijos de Dios- junto con la humildad, forma en el cristiano una sola cosa, ya que no son nuestras fuerzas las que nos salvan y nos dan la vida, sino el favor divino.
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