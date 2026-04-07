import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function AngelusScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ángelus',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Ángelus</Text>

          <Text style={styles.context}>
          Durante siglos la Iglesia ha rezado el  Angelus, especialmente
          al mediodía, celebrando el misterio de la Encarnación.
          </Text>

          <Text style={styles.prayer}>
            V. El Ángel del Señor anunció a María.{"\n"}
            R. Y concibió del Espíritu Santo.{"\n\n"}
            Dios te salve, María...{"\n\n"}
            V. He aquí la esclava del Señor.{"\n"}
            R. Hágase en mí según tu palabra.{"\n\n"}
            Dios te salve, María...{"\n\n"}
            V. Y el Verbo se hizo carne.{"\n"}
            R. Y habitó entre nosotros.{"\n\n"}
            Dios te salve, María...{"\n\n"}
            V. Ruega por nosotros, Santa Madre de Dios.{"\n"}
            R. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.{"\n\n"}
            Oración:{"\n\n"}
            Te suplicamos, Señor, que derrames tu gracia en nuestras almas para que los que, por el anuncio del Ángel, hemos conocido la Encarnación de tu Hijo Jesucristo, por su Pasión y Cruz seamos llevados a la gloria de su Resurrección. Por el mismo Jesucristo Nuestro Señor.{"\n\n"}
            R. Amén
          </Text>

          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
          V. Angelus Domini
          nuntiavit Mariae.{"\n"}
          R. Et concepit de Spiritu
          Sancto.{"\n\n"}
          Ave Maria, gratia plena.{"\n\n"}
          V. Ecce ancilla Domini,{"\n"}
          R. Fiat mihi secundum
          verbum tuum.{"\n\n"}
          Ave Maria, gratia plena.{"\n\n"}
          V. Et Verbum caro factum
          est,{"\n"}
          R. Et habitavit in nobis.{"\n\n"}
          Ave Maria, gratia plena.{"\n\n"}
          V. Ora pro nobis, sancta
          Dei Genetrix{"\n\n"}
          R. Ut digni efficiamur
          promissionibus Christi.
          Oremus. Gratiam tuam,
          quaesumus, Domine, mentibus
          nostris infunde; ut qui, Angelo
          nuntiante, Christi Filii tui
          incarnationem cognovimus,
          per passionem eius et crucem
          ad resurrectionis gloriam
          perducamur. Per eumdem
          Christum Dominum nostrum. R. Amen.{"\n\n"}
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
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#222',
  },
  introText: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
  context: {
    fontSize: 16,
    color: Colors.primary,
    backgroundColor: '#f3f3f3',
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    padding: 12,
    marginBottom: 20,
    fontStyle: 'italic',
  },
}); 