import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia5() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 5 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Quinto día</Text>
          <Text style={styles.subtitle}>El Espíritu Santo está en medio de nosotros</Text>
          <Text style={styles.paragraph}>
            Los cristianos llevamos los grandes tesoros de la gracia en vaso de barro; Dios ha confiado su don a la fragilidad y debilidad humana, siguiendo la forma del Señor durante su vida mortal: nuestra consecuencia, nuestra constancia y nuestro empeño se rechazan a ver y no ven la obra de su gracia. En muchas ocasiones, donde hemos ido un curso de agua, el Señor ha actuado, debe haber fe en la divinidad de la Iglesia una, santa, católica y apostólica, aún a pesar de los pecares. Cuando he comentado en confianza más de alguna vez páginas en que quiero insistir, responde tu a pecadora y a los míos.
          </Text>
          <Text style={styles.paragraph}>
            Todo eso es cierto, pero no autoriza en modo alguno a juzgar a la Iglesia de manera humana, ni, en realidad, fijando únicamente la mirada en lo menor, en lo que es débil. Siendo el cristiano el mayor y mejor resultado del derramamiento eficaz de la gracia, no es propio de un hijo de Dios dejarse llevar por la tristeza o la desconfianza, ni por la falta de esperanza. La fe nos dice que Dios está en la Iglesia, que Cristo ha querido fundarla y que el Espíritu Santo la asiste: en ella se encuentra la plenitud de los medios de salvación, y se nos da la gracia para que podamos alcanzar la vida eterna. Cristo ha prometido que no la abandonará nunca, y su promesa se cumple siempre. El Espíritu Santo es el alma de la Iglesia, y su acción se manifiesta en los sacramentos, en la predicación, en la vida de los santos y en la vida de cada cristiano fiel.
          </Text>
          <Text style={styles.paragraph}>
            Si no existiera el Espíritu Santo, no podríamos decir: Señor Jesús, pues nadie puede llamar a Jesús Señor, si no es en el Espíritu Santo (cf. 1 Corintios XII, 3). Si no existiera el Espíritu Santo, no podríamos orar, pues no sabemos pedir lo que nos conviene, pero el mismo Espíritu intercede por nosotros con gemidos inefables (cf. Romanos VIII, 26). Si no existiera el Espíritu Santo, no podríamos amar a Dios, porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos ha sido dado (cf. Romanos V, 5). ¿Cómo saber que el Espíritu de Dios habita en nosotros? Escucha a San Juan: En esto conocemos que permanecemos en Él y Él en nosotros, en que nos ha dado de su Espíritu (1 Juan IV, 13).
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