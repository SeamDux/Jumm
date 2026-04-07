import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DonesEspirituSantoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Los dones del Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Los dones del Espíritu Santo</Text>
          <Text style={styles.paragraph}>
            Los siete dones del Espíritu Santo pertenecen en plenitud a Cristo, Hijo de David. Completan y llevan a su perfección las virtudes de quienes los reciben. Hacen a los fieles dóciles para obedecer con prontitud a las inspiraciones divinas.
          </Text>

          <Text style={styles.donTitle}>Don de sabiduría</Text>
          <Text style={styles.paragraph}>
            Nos hace comprender la maravilla insondable de Dios y nos impulsa a buscarle sobre todas las cosas y en medio de nuestro trabajo y de nuestras obligaciones.
          </Text>

          <Text style={styles.donTitle}>Don de inteligencia</Text>
          <Text style={styles.paragraph}>
            Nos descubre con mayor claridad las riquezas de la fe.
          </Text>

          <Text style={styles.donTitle}>Don de consejo</Text>
          <Text style={styles.paragraph}>
            Nos señala los caminos de la santidad, el querer de Dios en nuestra vida diaria, nos anima a seguir la solución que más concuerda con la gloria de Dios y el bien de los demás.
          </Text>

          <Text style={styles.donTitle}>Don de fortaleza</Text>
          <Text style={styles.paragraph}>
            Nos alienta continuamente y nos ayuda a superar las dificultades que sin duda encontramos en nuestro caminar hacia Dios.
          </Text>

          <Text style={styles.donTitle}>Don de ciencia</Text>
          <Text style={styles.paragraph}>
            Nos lleva a juzgar con rectitud las cosas creadas y a mantener nuestro corazón en Dios y en lo creado en la medida en que nos lleve a Él.
          </Text>

          <Text style={styles.donTitle}>Don de piedad</Text>
          <Text style={styles.paragraph}>
            Nos mueve a tratar a Dios con la confianza con la que un hijo trata a su Padre.
          </Text>

          <Text style={styles.donTitle}>Don de temor de Dios</Text>
          <Text style={styles.paragraph}>
            Nos induce a huir de las ocasiones de pecar, a no ceder a la tentación, a evitar todo mal que pueda contristar al Espíritu Santo, a temer radicalmente separarnos de Aquel a quien amamos y constituye nuestra razón de ser y de vivir.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 17,
    color: '#222',
    marginBottom: 16,
    textAlign: 'justify',
  },
  donTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 10,
    marginBottom: 4,
  },
}); 