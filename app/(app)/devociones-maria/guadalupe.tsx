import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function GuadalupeScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Virgen de Guadalupe',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Oración a la Virgen de Guadalupe</Text>
          
          <Text style={styles.oracion}>
            ¡Oh Virgen Inmaculada, Madre del verdadero Dios y Madre de la Iglesia! Tú, que desde este lugar manifiestas tu clemencia y tu compasión a todos los que solicitan tu amparo; escucha la oración que con filial confianza te dirigimos y preséntala ante tu Hijo Jesús, único Redentor nuestro.
          </Text>

          <Text style={styles.oracion}>
            Madre de misericordia, Maestra del sacrificio escondido y silencioso, a ti, que sales al encuentro de nosotros, los pecadores, te consagramos en este día todo nuestro ser y todo nuestro amor. Te consagramos también nuestra vida, nuestros trabajos, nuestras alegrías, nuestras enfermedades y nuestros dolores.
          </Text>

          <Text style={styles.oracion}>
            Da la paz, la justicia y la prosperidad a nuestros pueblos; ya que todo lo que tenemos y somos lo ponemos bajo tu cuidado, Señora y Madre nuestra.
          </Text>

          <Text style={styles.oracion}>
            Queremos ser totalmente tuyos y recorrer contigo el camino de una plena fidelidad a Jesucristo en su Iglesia: no nos sueltes de tu mano amorosa.
          </Text>

          <Text style={styles.oracion}>
            Virgen de Guadalupe, Madre de las Américas, te pedimos por todos los Obispos, para que conduzcan a los fieles por senderos de intensa vida cristiana, de amor y de humilde servicio a Dios y a las almas.
          </Text>

          <Text style={styles.oracion}>
            Contempla esta inmensa mies, e intercede para que el Señor infunda hambre de santidad en todo el Pueblo de Dios, y otorgue abundantes vocaciones de sacerdotes y religiosos, fuertes en la fe, y celosos dispensadores de los misterios de Dios.
          </Text>

          <Text style={styles.oracion}>
            Concede a nuestros hogares la gracia de amar y de respetar la vida que comienza, con el mismo amor con el que concebiste en tu seno la vida del Hijo de Dios. Virgen Santa María, Madre del Amor Hermoso, protege a nuestras familias, para que estén siempre muy unidas, y bendice la educación de nuestros hijos.
          </Text>

          <Text style={styles.oracion}>
            Esperanza nuestra, míranos con compasión, enséñanos a ir continuamente a Jesús y, si caemos, ayúdanos a levantarnos, a volver a él, mediante la confesión de nuestras culpas y pecados en el Sacramento de la Penitencia, que trae sosiego al alma.
          </Text>

          <Text style={styles.oracion}>
            Te suplicamos, que nos concedas un amor muy grande a todos los santos Sacramentos, que son como las huellas que tu Hijo nos dejó en la tierra.
          </Text>

          <Text style={styles.oracion}>
            Así, Madre Santísima, con la paz de Dios en la conciencia, con nuestros corazones libres de mal y de odios, podremos llevar a todos la verdadera alegría y la verdadera paz, que vienen de tu Hijo, nuestro Señor Jesucristo, que con Dios Padre y con el Espíritu Santo, vive y reina por los siglos de los siglos. Amén.
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
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
}); 
 