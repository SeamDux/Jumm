import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia9() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 9 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Noveno día</Text>
          <Text style={styles.subtitle}>Docilidad, oración y unión con la Cruz</Text>
          <Text style={styles.paragraph}>
            Para concretar, aunque sea de una manera muy general, un estilo de vida que nos impulse a tratar al Espíritu Santo -y, con Él, al Padre y al Hijo- y a tener familiaridad con el Paráclito, podemos fijarnos en tres realidades fundamentales: docilidad -repito, vida de oración, unión con la Cruz.
          </Text>
          <Text style={styles.paragraph}>
            Docilidad, en primer lugar, porque el Espíritu Santo es quien, con sus inspiraciones, va dando tono sobrenatural a nuestros pensamientos, deseos y obras. Él es quien nos empuja a adherirnos a la doctrina de Cristo y a asimilarla con profundidad, quien nos da luz para tomar conciencia de nuestra vocación personal y fuerza para realizar todo lo que Dios espera. Si somos dóciles al Espíritu Santo, la imagen de Cristo se irá formando cada vez más en nosotros e iremos así acercándonos cada día más a Dios Padre. Los que son llevados por el Espíritu de Dios, esos son hijos de Dios.
          </Text>
          <Text style={styles.paragraph}>
            Vida de oración, en segundo lugar, porque la entrega, la obediencia, la mansedumbre del cristiano nacen del amor y al amor se encaminan. Y el amor lleva al trato, a la conversación, a la amistad. La vida cristiana requiere un diálogo constante con Dios Uno y Trino, y es a esa intimidad a donde nos conduce el Espíritu Santo. ¿Quién sabe las cosas del hombre, sino solamente el espíritu del hombre, que está dentro de él? Así las cosas de Dios nadie las ha conocido sino el Espíritu de Dios. Si tenemos relación asidua con el Espíritu Santo, nos haremos también nosotros espirituales, nos sentiremos hermanos de Cristo e hijos de Dios, a quien no dudaremos en invocar como a Padre que es nuestro.
          </Text>
          <Text style={styles.paragraph}>
            Acostumbremos a frecuentar al Espíritu Santo, que es quien nos ha de santificar: a confiar en Él, a pedir su ayuda, a sentirlo cerca de nosotros. Así se irá agrandando nuestro pobre corazón, tendremos más ansias de amar a Dios y, por Él, a todas las criaturas. Y se producirá en nuestras vidas esa visión final del Apocalipsis: el espíritu y la esposa, el Espíritu Santo y la Iglesia -y cada cristiano- que se dirigen a Jesús, a Cristo, y le piden que venga, que esté con nosotros para siempre.
          </Text>
          <Text style={styles.paragraph}>
            Unión con la Cruz, finalmente, porque en la vida de Cristo el Calvario precedió a la Resurrección y a la Pentecostés, y ese mismo proceso debe reproducirse en la vida de cada cristiano: somos -nos dice San Pablo- coherederos con Jesucristo, con tal que padezcamos con Él, a fin de que seamos con Él glorificados. El Espíritu Santo es fruto de la cruz, de la entrega total a Dios, de buscar exclusivamente su gloria y de renunciar por entero a nosotros mismos. Sólo cuando el hombre, siendo fiel a la gracia, se decide a colocar en el centro de su alma la Cruz, negándose a sí mismo por amor a Dios, estando realmente desprendido de egoísmo y de toda falsa seguridad humana, es decir, cuando vive verdaderamente de fe, es entonces y sólo entonces cuando recibe con plenitud el gran fuego, la gran luz, la gran consolación del Espíritu Santo. Es entonces también cuando vienen al alma esa paz y esa libertad que Cristo nos ha ganado, que se nos comunican con la gracia del Espíritu Santo.
          </Text>
          <Text style={styles.paragraph}>
            Los frutos del Espíritu son caridad, gozo, paz, paciencia, benignidad, bondad, longanimidad, mansedumbre, fe, modestia, continencia, castidad; y donde está el Espíritu del Señor, allí hay libertad.
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