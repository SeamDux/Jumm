import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function PadreNuestroScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Padre Nuestro',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Padre Nuestro</Text>

          <Text style={styles.introText}>
          “En el Padre Nuestro, las tres primeras peticiones tienen por
          objeto la gloria del Padre: la santificación del nombre, la venida
          del reino y el cumplimiento de la voluntad divina. Las otras cuatro
          presentan al Padre nuestros deseos: estas peticiones conciernen
          a nuestra vida para alimentarla o para curarla del pecado y se
          refieren a nuestro combate por la victoria del Bien sobre el Mal.
          Con el “Amén” final expresamos nuestra aceptación respecto a las
          siete peticiones: ‘Así sea’. (CEC, 2157).
          </Text>

          <Text style={styles.prayer}>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;{"\n"}
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo.{"\n"}
            Danos hoy nuestro pan de cada día; perdona nuestras ofensas,{"\n"}
            como también nosotros perdonamos a los que nos ofenden;{"\n"}
            no nos dejes caer en la tentación, y líbranos del mal. Amén.
          </Text>

          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
          Pater noster, qui es in caelis: sanctificetur nomen tuum;{"\n"} 
          adveniat regnumtuum; fiat voluntas tua,
          sicut in caelo, et in terra.{"\n"}
          Panem nostrum cotidianum da nobis hodie;
          et dimitte nobis debita nostra,{"\n"}
          sicut et nos dimittimus debitoribus
          nostris; et ne nos inducas in
          tentationem; sed libera nos
          a malo. Amen.
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
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#222',
    fontStyle: 'italic',
  },
  introText: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
}); 