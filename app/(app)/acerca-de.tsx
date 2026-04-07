import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AcercaDeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Presentación</Text>

          <Text style={styles.paragraph}>
            Tienes en tus manos este pequeño devocionario digital con el cual podrás conocer el contenido de la fe, orar a Jesús tanto personalmente como en comunidad y meditar en las grandes verdades de nuestra religión. Están recopilados en él aquellas oraciones que son propias de la vida de un cristiano, los textos esenciales de la Santa Misa y la Liturgia de las Horas, las oraciones de la mañana y de la noche, las devociones a los santos y las bendiciones, junto con las expresiones propias de nuestra piedad popular, como el mes de María, las novenas, etc.
          </Text>

          <Text style={styles.paragraph}>
            Ocupa un lugar esencial la Santa Eucaristía, centro y raíz de nuestra vida espiritual, con las oraciones de preparación y acción de gracias. Las devociones a Dios Padre, a Dios Hijo y a Dios Espíritu Santo te ayudarán a entrar en comunión con el misterio central de la fe cristiana, que podrás acompañar con el amor a la Madre de Dios y a San José y a otros santos de tu devoción. Cuando quieras confesarte con el sacerdote, encontrarás una manera sencilla y profunda de examinar tu conciencia y cuando sea necesario podrás orar por los vivos y los difuntos, especialmente por tus parientes que están a punto de partir de este mundo.
          </Text>

          <Text style={styles.paragraph}>
            Es un libro digital pequeño pero muy grande, que podrás llevar durante la jornada laboral, en tus viajes por la ciudad y el campo, en los tiempos de descanso y, especialmente, cuando asistas a la Santa Misa Dominical o en los días de la semana.
          </Text>

          <Text style={styles.paragraph}>
            Que la Virgen María, Madre de Dios y Madre nuestra nos ayude a seguir de cerca a su hijo Jesús, que durante toda su vida nos enseñó a orar siempre y al cual los discípulos le pidieron “Maestro, enséñanos a orar” (Lc 1,11) y el mismo nos dio ejemplo de estar siempre en oración.
          </Text>

          <Text style={styles.signature}>
            +Juan Ignacio González Errázuriz{"\n"}Obispo de San Bernardo
          </Text>

          <Text style={styles.date}>
            16 de julio de 2025{"\n"}Solemnidad de Nuestra Señora del Carmen,{"\n"}Madre y Reina de Chile.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: Colors.primary,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: Colors.text,
    textAlign: 'justify',
  },
  signature: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'right',
    marginTop: 32,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  date: {
    fontSize: 15,
    color: Colors.text,
    textAlign: 'right',
    marginBottom: 24,
  },
});
