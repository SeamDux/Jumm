import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function DecenarioEspirituSantoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Decenario al Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Decenario al Espíritu Santo</Text>
          <Text style={styles.paragraph}>
            El Decenario es una bonita y antigua costumbre con la que la Iglesia anima a sus fieles a preparar del mejor modo posible la venida del Espíritu Santo en Pentecostés.
          </Text>
          <Text style={styles.paragraph}>
            Comienza diez días antes de dicha fiesta, es decir, el día Jueves de la Ascensión de Jesús a los cielos. En ese día Jesucristo prometió a sus discípulos que les enviaría al Paráclito. Los discípulos permanecieron en Jerusalén en continua oración junto a María.
          </Text>
          <Text style={styles.paragraph}>
            Son, por tanto, estos días una ocasión propicia para recordar aquella primera oración conjunta y prepararnos para celebrar la venida del Espíritu Santo.
          </Text>
          <Text style={styles.quote}>
            “La víspera de empezar este Decenario, que es la víspera de la Ascensión gloriosa de nuestro Divino Redentor, nos debemos preparar, con resoluciones firmes, para emprender la vida interior, y emprendida esta vida, no abandonarla jamás.”
          </Text>
          <Text style={styles.quoteAuthor}>
            (Francisca Javiera del Valle, Decenario al Espíritu Santo)
          </Text>
          <Text style={styles.sectionTitle}>Oración inicial para todos los días</Text>
          <Text style={styles.paragraph}>
            ¡Ven, Oh Santo Espíritu!: ilumina mi entendimiento, para conocer tus mandatos; fortalece mi corazón contra las insidias del enemigo: inflama mi voluntad… He oído tu voz, y no quiero endurecerme y resistir, diciendo: después… mañana. ¡Ahora!, no vaya a ser que el mañana me falte. ¡Oh, Espíritu de verdad y de sabiduría, Espíritu de entendimiento y de consejo, Espíritu de gozo y de paz!: quiero lo que quieras, quiero porque quieres, quiero como quieras, quiero cuando quieras.
          </Text>
          <Text style={styles.sectionTitle}>Oración final para todos los días</Text>
          <Text style={styles.paragraph}>
            Ven Oh Santo Espíritu, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor.
          </Text>
          <Text style={styles.paragraph}>
            V. Envía tu espíritu y serán creados{"\n"}
            R. Y renovarás la faz de la tierra.{"\n\n"}
            Oh Dios que has instruido los corazones de los fieles con la luz del Espíritu Santo. Concédenos según el mismo Espíritu, conocer las cosas rectas y gozar siempre de sus divinos consuelos. Por el mismo Cristo nuestro Señor. Amén.
          </Text>
          <Text style={styles.sectionTitle}>Días del Decenario</Text>
          {Array.from({ length: 10 }, (_, i) => (
            <TouchableOpacity
              key={i + 1}
              style={styles.dayButton}
              onPress={() => router.push(`/devociones-espiritu/decenario/dia${i + 1}`)}
            >
              <Text style={styles.dayButtonText}>Día {i + 1}</Text>
            </TouchableOpacity>
          ))}
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
  sectionTitle: {
    fontSize: 18,
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
  quote: {
    fontSize: 16,
    color: Colors.primary,
    fontStyle: 'italic',
    marginVertical: 10,
    textAlign: 'center',
  },
  quoteAuthor: {
    fontSize: 15,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 16,
  },
  dayButton: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
  },
  dayButtonText: {
    fontSize: 17,
    color: Colors.primary,
    fontWeight: 'bold',
  },
}); 