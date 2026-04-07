import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DecenarioDia2() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Día 2 - Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.dayTitle}>Segundo día</Text>
          <Text style={styles.subtitle}>Vigencia y actualidad de la Pentecostés</Text>
          <Text style={styles.paragraph}>
            La fuerza y el poder de Dios iluminan la faz de la tierra. El Espíritu Santo continúa asistiendo a la Iglesia de Cristo, para que sea -siempre y en todo- signo levantado ante las naciones, que anuncia a la humanidad la benevolencia y el amor de Dios. Por grandes que sean nuestras limitaciones, los hombres podemos mirar con confianza a los cielos y sentirnos llenos de alegría: Dios nos ama y nos libra de nuestros pecados. La presencia y la acción del Espíritu Santo en la Iglesia son la prenda y la anticipación de la felicidad eterna, de esa alegría y de esa paz que Dios nos depara. También nosotros, como aquellos primeros que se acercaron a San Pedro en el día de Pentecostés, hemos sido bautizados. En el bautismo, Nuestro Padre Dios ha tomado posesión de nuestras vidas, nos ha incorporado a la de Cristo y nos ha enviado el Espíritu Santo.
          </Text>
          <Text style={styles.paragraph}>
            El Señor, nos dice la Escritura Santa, nos ha salvado haciéndonos renacer por el bautismo, renovándonos por el Espíritu Santo, que Él derramó copiosamente sobre nosotros por Jesucristo Salvador nuestro, para que, justificados por la gracia, vengamos a ser herederos de la vida eterna conforme a la esperanza que tenemos. La experiencia de nuestra debilidad y de nuestros fallos, la desedificación que puede producir el espectáculo doloroso de la pequeñez o incluso de la mezquindad de algunos que se llaman cristianos, el aparente fracaso o la escasez de algunas empresas apostólicas, todo eso -el comprobar la realidad del pecado y de las limitaciones humanas- sin embargo constituye una prueba para nuestra fe, y hace que se insinúen la tentación y la duda: ¿dónde están la fuerza y el poder de Dios? Es el momento de reaccionar, de rechazar la tristeza y la desconfianza, y de mantenernos serenos y de procurar que seamos más firme nuestra fidelidad.
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