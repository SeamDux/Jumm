import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia4() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 4 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Cuarto día</Text>
          <Text style={styles.subtitle}>Nuestra fe en el Espíritu Santo debe ser absoluta</Text>
          <Text style={styles.paragraph}>
            Non est abbreviata manus Domini, no se ha hecho más corta la mano de Dios: no es menos poderoso Dios hoy que en otras épocas, ni menos verdadero su amor por los hombres. Nuestra fe nos enseña que la creación entera, el movimiento de la tierra y el de los astros, las acciones rectas de las criaturas y cuanto hay de positivo y de grande en el curso de la historia, todo, en una palabra, ha venido de Dios y conduce a Dios. En cada uno el Espíritu Santo puede pasar inadvertido, porque Dios nos da a conocer sus planes y porque el pecado del hombre enturbia y obscurece las obras divinas. Pero la fe nos recuerda que el Señor obra en el corazón de los hombres y que nada se nos mantiene en ser; quien, con su gracia, conduce la creación entera hacia la libertad de la gloria de los hijos de Dios.
          </Text>
          <Text style={styles.paragraph}>
            Por eso, la tradición cristiana ha resumido la actitud que debemos adoptar ante el Espíritu Santo en un solo concepto: docilidad. Ser sensibles a lo que el Espíritu divino promueve a nuestro alrededor y en nosotros mismos: a los carismas que distribuye, a los movimientos e instituciones que suscita, a los afectos y decisiones que hace nacer en nuestro corazón. El Espíritu Santo realiza en el mundo las obras de Dios: es como dice el himno litúrgico-dador de las gracias, luz de los corazones, huésped del alma, descanso en el trabajo, consuelo en el llanto. Sin su ayuda nada hay en el hombre que sea inocente y valioso, pues es Él quien lava lo manchado, quien cura lo enfermo, quien endereza lo que está torcido, quien libera de estarcavizado, quien conduce a los hombres hacia el puerto de la salvación y del gozo eterno. Pero esta fe nuestra en el Espíritu Santo ha de ser plena y completa: no es una creencia vaga en su presencia en el mundo, es una aceptación agradecida de los signos y realidades a los que, de una manera especial, ha querido vincular su fuerza. Cuando venga el Espíritu de verdad -Jesús mismo-, se glorificará porque recibirá de lo mío, y os lo anunciará. El Espíritu Santo es el Espíritu enviado por Cristo, para obrar en nosotros la santificación que Él nos mereció en la cruz.
          </Text>
          <Text style={styles.paragraph}>
            No puede haber fe por fe en el Espíritu Santo, si no hay fe coherente en la doctrina de Cristo, en los sacramentos de Cristo, en la Iglesia de Cristo. No es coherente con la fe cristiana, que no reconoce la acción del Espíritu Santo en la Iglesia, quien no tiene confianza en ella, quien se complace sólo en señalar las debilidades y las limitaciones de los que la integran. La Iglesia es, a la vez, santa y necesitada de purificación, y la humildad debe llevarnos a reconocer que todos somos capaces de traicionar el sacrificio del Calvario, al celebrar la Santa Misa en nuestros altares.
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