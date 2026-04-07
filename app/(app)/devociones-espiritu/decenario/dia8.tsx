import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia8() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 8 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Octavo día</Text>
          <Text style={styles.subtitle}>Vivir según el Espíritu Santo</Text>
          <Text style={styles.paragraph}>
            Vivir según el Espíritu Santo es vivir de fe, de esperanza, de caridad; dejar que Dios tome posesión de nosotros y cambie de raíz nuestros corazones, para hacerlos a su medida. Una vida cristiana madura, honda y recia, es algo que no se improvisa, porque es el fruto del crecimiento en nosotros de la gracia de Dios. En los Hechos de los Apóstoles, se describe la situación de la primitiva comunidad cristiana con una frase breve, pero llena de sentido: perseveraban todos en las instrucciones de los Apóstoles, en la comunicación de la fracción del pan y en la oración.
          </Text>
          <Text style={styles.paragraph}>
            Fue así como vivieron aquellos primeros, y como debemos vivir nosotros: la meditación de la doctrina de la fe hasta hacerla propia, el encuentro con Cristo en la Eucaristía, el diálogo personal -la oración sin anonimato- cara a cara con Dios, han de constituir como la substancia última de nuestra conducta. Si eso falta, habrá tal vez reflexión erudita, actividad más o menos intensa, devociones y prácticas. Pero no habrá auténtica existencia cristiana, porque faltará la compenetración con Cristo, la participación real y vivida en la obra divina de la salvación.
          </Text>
          <Text style={styles.paragraph}>
            Es doctrina que se aplica a cualquier cristiano, porque todos estamos igualmente llamados a la santidad. No hay cristianos de segunda categoría, obligados a poner en práctica sólo una versión rebajada del Evangelio: todos hemos recibido el mismo Bautismo y, si bien existe una amplia diversidad de carismas y de situaciones humanas, uno mismo es el Espíritu que distribuye los dones divinos, una misma la fe, una misma la esperanza, una la caridad. Podemos, por tanto, tomar como dirigida a nosotros la pregunta que formula el Apóstol: ¿no sabéis que sois templo de Dios y que el Espíritu Santo mora en vosotros?, y recibir como una invitación a un trato más personal y directo con Dios. Por desgracia el Paráclito es, para algunos cristianos, el Gran Desconocido.
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