import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VirgenScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración a la Virgen Santísima',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración a la Virgen Santísima</Text>
          <Text style={styles.prayer}>
            María, Virgen y Madre Santísima,{"\n"}
            he recibido a tu Hijo amadísimo,{"\n"}
            que concebiste en tus inmaculadas entrañas,{"\n"}
            alimentaste con tu pecho{"\n"}
            y estrechaste amorosamente entre tus brazos.{"\n"}
            Al mismo que te alegraba contemplar{"\n"}
            y te llenaba de gozo;{"\n"}
            con amor y humildad te lo presento y te lo ofrezco,{"\n"}
            para que lo abraces, lo ames con tu corazón{"\n"}
            y lo ofrezcas a la Santísima Trinidad{"\n"}
            en culto supremo de adoración,{"\n"}
            por tu honor y por tu gloria{"\n"}
            y por mis necesidades y por las de todo el mundo.{"\n"}
            Te ruego, piadosísima Madre,{"\n"}
            que me alcances el perdón de mis pecados{"\n"}
            y gracia abundante para servirte,{"\n"}
            de hoy en adelante, con mayor fidelidad;{"\n"}
            y por último, la gracia de la perseverancia final,{"\n"}
            para que pueda alabarte contigo{"\n"}
            por los siglos de los siglos. Amén.
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
}); 