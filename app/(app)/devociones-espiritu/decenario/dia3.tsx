import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia3() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 3 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Tercer día</Text>
          <Text style={styles.subtitle}>La Iglesia, vivificada por el Espíritu Santo, es el Cuerpo Místico de Cristo</Text>
          <Text style={styles.paragraph}>
            Permíteme narrar un suceso de mi vida personal, ocurrido hace ya muchos años. Un día un amigo de buen corazón, porque no tenía fe, me dijo, mientras señalaba un mapamundi: mire, de norte a sur y de este a oeste. ¿Qué quiere que mire?, le pregunté. Su respuesta fue: el fracaso de Cristo. Tantos siglos, procurando meter en la vida de los hombres su doctrina, y vea los resultados. Me llené, en un primer momento de tristeza: es un gran dolor, en efecto, considerar que son muchos los que aún no conocen al Señor y que, entre los que le conocen, son muchos también los que viven como si no lo conocieran.
          </Text>
          <Text style={styles.paragraph}>
            Pero esa sensación duró sólo un instante, para dejar paso al amor y al agradecimiento, porque Jesús ha querido hacer a cada hombre cooperador libre de su obra redentora. No ha fracasado: su doctrina y su vida están fecundando continuamente el mundo. La redención, por Él realizada, es suficiente y sobreabundante.
          </Text>
          <Text style={styles.paragraph}>
            Dios no quiere esclavos, sino hijos, y respeta nuestra libertad. La salvación continúa y nosotros participamos en ella: es voluntad de Cristo que -según las palabras fuertes de San Pablo- cumplamos en nuestra carne, en nuestra vida, aquello que falta a su pasión, pro Corpore eius, quod est Ecclesia, en beneficio de su cuerpo, que es la Iglesia.
          </Text>
          <Text style={styles.paragraph}>
            Vale la pena jugarse la vida, entregarse por entero, para corresponder al amor y a la confianza que Dios deposita en nosotros. Vale la pena, entonces, que nos dediquemos a tomar en serio nuestra fe. Al recitar el Credo, profesamos creer en Dios Padre todopoderoso, en su Hijo Jesucristo que murió y fue resucitado, en el Espíritu Santo, Señor y dador de vida. Confesamos una sola Iglesia, una santa, católica y apostólica, es el cuerpo de Cristo, vivificado por el Espíritu Santo. Si alguna vez experimentamos la tentación de la tristeza o de la desesperanza, miremos hasta el fondo del corazón o se lo pedimos al Señor, que nos ayude a ver la realidad de fe y a mantenernos siempre en la alegría de sabernos redimidos e invitados a la vida eterna.
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