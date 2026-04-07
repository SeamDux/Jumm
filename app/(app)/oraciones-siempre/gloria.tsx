import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function GloriaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Gloria',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Gloria</Text>
          <Text style={styles.introText}>
          El Gloria se recitaba ya en los primeros siglos del Cristianismo,
          acaso basado en el mandato de Cristo: “Bautizad en el nombre del
          Padre y del Hijo y del Espíritu Santo". Fue fórmula de profesión de
          fe contra las herejías de Arrio (negaba la divinidad del Hijo) y de
          Macedonio (negaba la divinidad del Espíritu Santo).{"\n\n"}
          La primera parte es un himno de alabanza a Dios en sus Tres
          Divinas Personas. La gloria de Dios es el fin de toda la creación.
          El cristiano, al recitar esta oración, se une al coro formado por
          todos los ángeles y santos del Cielo, y por muchísimos otros
          hombres que aún están peregrinando por la vida terrena, en su
          canto de glorificación a Dios. Además es una profesión de fe en
          el misterio más fundamental y básico de la Revelación divina: el
          misterio de la Santísima Trinidad.{"\n\n"}
          “Como era en un principio”. Es un hecho esa glorificación eterna
          en Dios mismo; y a ella nos sumamos. Es una aspiración del alma,
          que resume sus anhelos en éste que es el más digno de todos: la
          glorificación esencial y eterna de Dios.{"\n\n"}
          “Ahora y siempre”. Nos adherimos al himno universal de los
          cielos y de la tierra a Dios, a través de todos los tiempos.{"\n\n"}
          “Por los siglos de los siglos”. Amén. Toda una eternidad que
          no tendrá fin, es la única medida que responde al deber de dar
          gracias a Dios. {"\n\n"}
          </Text>


          <Text style={styles.prayer}>
            Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.
          </Text>

          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
          Gloria Patri, et Filio, et
          Spiritui Sancto,
          Sicut erat in principio, et
          nunc, et semper, et in sæcula
          sæculorum. Amen.
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