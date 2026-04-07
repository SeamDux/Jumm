import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function AntesConfesarseScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Antes de Confesarse',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Antes de confesarse</Text>

          <Text style={styles.category}>•  Dolor sincero por los pecados cometidos. </Text>
          <Text style={styles.text}>"El acto esencial de la penitencia, por parte del penitente, es la contrición, o sea, un rechazo claro y decidido del pecado cometido, junto con el propósito de no volver a cometerlo, por el amor que se tiene a Dios y que renace con el arrepentimiento. La contrición, entendida así, es el principio y el alma de la conversión, de la metánoia evangélica que devuelve el hombre a Dios, como el hijo pródigo que vuelve al padre, y que tiene en el sacramento de la Penitencia su signo visible, perfeccionador de la misma atrición. Por ello, "de esta contrición del corazón depende la verdad de la penitencia" ... Es bueno recordar que contrición y conversión son aún más un acercamiento a la santidad de Dios, un nuevo encuentro de la propia verdad interior, turbada y trastornada por el pecado, una liberación en lo más profundo de sí mismo y, con ello, una recuperación de la alegría perdida, la alegría de ser salvados, que la mayoría de los hombres de nuestro tiempo ha dejado de gustar". (Juan Pablo II, Exhortación Apostólica, Reconciliatio et Poenitentiae, n. 31).</Text>
          
          <Text style={styles.category}>•  El propósito de no volver a cometer el pecado confesado (enmienda) es señal de arrepentimiento genuino y sincero.</Text>
          <Text style={styles.text}>No es necesario prometer que jamás se pecará en el futuro. La resolución de evitar ponerse en ocasiones de pecado es muestra suficiente de un arrepentimiento sincero. La ayuda de la gracia de Dios junto con la intención de rectificar dará la fortaleza para resistir y vencer las tentaciones en el futuro.</Text>

          <Text style={styles.category}>Acto de Contrición</Text>
          <Text style={styles.prayer}>
            ¡Señor mío, Jesucristo! Dios y Hombre verdadero, Creador, Padre y Redentor mío; por ser Vos quien sois, Bondad infinita, y porque os amo sobre todas las cosas, me pesa de todo corazón el haberos ofendido; también me pesa porque podéis castigarme con las penas del infierno. Ayudado por vuestra divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén.
          </Text>

          <Text style={styles.category}>Confesión General (Confiteor)</Text>
          <Text style={styles.prayer}>
            Yo confieso ante Dios todopoderoso y ante ustedes, hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión. Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a Santa María, siempre Virgen, a los Ángeles, a los Santos y a ustedes, hermanos, que intercedan por mí ante Dios, Nuestro Señor.
          </Text>

          <Text style={styles.category}>•  Podemos ahora confesarnos.</Text>
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
    marginTop: 10,
    marginBottom: 20,
    lineHeight: 24,
    padding: 15,
    backgroundColor: '#fff',
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