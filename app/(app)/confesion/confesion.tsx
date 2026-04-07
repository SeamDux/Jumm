import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function ConfesionPecadosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Confesión de los Pecados',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Confesión de los pecados</Text>

          <Text style={styles.text}>• El Penitente se persigna. El sacerdote, habitualmente dice "Ave María Purísima". El penitente contesta "Sin pecado concebida".</Text>
          
          <Text style={styles.text}>• A continuación se dice el tiempo que hace desde la última confesión: "Mi última confesión fue hace…" (cuántos días, meses o años, aproximadamente).</Text>
          
          <Text style={styles.text}>• Se dicen los pecados que se recuerden, empezando con los más difíciles. Si se ha recibido alguna absolución general, hay que decírselo al sacerdote junto con los pecados mortales que se perdonaron.</Text>
          
          <Text style={styles.text}>• Si tienes dudas, sientes vergüenza o no sabes cómo confesarse, se le dice claramente al sacerdote. Él ayudará siempre a hacer una buena confesión. Basta con que se conteste honestamente a sus preguntas. Nunca debe callarse un pecado por vergüenza o por temor: hay que confiar siempre en la misericordia de Dios que es nuestro Padre y quiere perdonarnos.</Text>
          
          <Text style={styles.text}>• Si no se recuerda ningún pecado mortal, es bueno confesar al menos algunos veniales diciendo al final: "Me arrepiento de todos los pecados de mi vida pasada, especialmente..." (mencionar aquí de manera general algún pecado por el que se esté particularmente arrepentido, por ejemplo, contra la caridad o la castidad).</Text>
          
          <Text style={styles.text}>• El sacerdote nos dará la penitencia y algunos consejos que nos ayudarán a ser mejores cristianos.</Text>
          
          <Text style={styles.category}>La Absolución</Text>
          <Text style={styles.prayer}>
            "Dios, Padre misericordioso, que reconcilió consigo al mundo por la muerte y la resurrección de su Hijo y derramó el Espíritu Santo para la remisión de los pecados, te conceda, por el ministerio de la Iglesia, el perdón y la paz. Y yo te absuelvo de tus pecados en el nombre del Padre, del Hijo, y del Espíritu Santo."
          </Text>
          <Text style={styles.text}>El penitente responde: <Text style={{fontWeight: 'bold'}}>Amén.</Text></Text>
          
          <Text style={styles.category}>Despedida</Text>
          <Text style={styles.prayer}>
            "La Pasión de Nuestro Señor Jesucristo, la intercesión de la Bienaventurada Virgen María y de todos los santos, el bien que hagas y el mal que puedas sufrir, te sirvan como remedio de tus pecados, aumento de gracia y premio de vida eterna. Puedes ir en paz."
          </Text>
          
          <Text style={styles.text}>• Se escuchan con atención las palabras de la absolución contestando al final: <Text style={{fontWeight: 'bold'}}>"Amén"</Text>. La penitencia debe cumplirse lo antes posible. La penitencia disminuirá el castigo temporal debido a los pecados ya perdonados.</Text>
          
          <Text style={styles.note}>• El penitente debe cumplir la penitencia que el sacerdote le señaló. Si olvida la penitencia, reza una similar a la que le han dado en otras ocasiones.</Text>
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
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: Colors.secondary,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    marginLeft: 20,
  },
  prayer: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
    marginBottom: 15,
    lineHeight: 24,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  note: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 24,
    padding: 15,
    backgroundColor: '#fff9e6',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: Colors.secondary,
  },
}); 