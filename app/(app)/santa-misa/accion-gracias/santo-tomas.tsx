import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SantoTomasScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración de Santo Tomás de Aquino',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración de Santo Tomás de Aquino</Text>
          <Text style={styles.prayer}>
            Gracias te doy,{"\n"}
            Señor Santo, Padre todopoderoso,{"\n"}
            Dios eterno, porque a mí, pecador,{"\n\n"}
            indigno siervo tuyo,{"\n"}
            sin mérito alguno de mi parte,{"\n"}
            sino por pura concesión de tu misericordia,{"\n"}
            te has dignado alimentarme{"\n"}
            con el precioso Cuerpo y Sangre{"\n"}
            de tu Unigénito Hijo{"\n"}
            mi Señor Jesucristo.{"\n\n"}
            Suplícote, que esta Sagrada Comunión{"\n"}
            no me sea ocasión de castigo,{"\n"}
            sino intercesión saludable para el perdón;{"\n"}
            sea armadura de mi fe,{"\n"}
            escudo de mi voluntad,{"\n"}
            muerte de todos mis vicios,{"\n"}
            exterminio de todos mis carnales apetitos,{"\n"}
            y aumento de caridad, paciencia y verdadera humildad,{"\n"}
            y de todas las virtudes:{"\n"}
            sea perfecto sosiego de mi cuerpo y de mi espíritu,{"\n"}
            firme defensa contra todos mis enemigos{"\n"}
            visibles e invisibles,{"\n"}
            perpetua unión contigo,{"\n"}
            único y verdadero Dios,{"\n"}
            y sello de mi muerte dichosa.{"\n\n"}
            Ruégote, que tengas por bien{"\n"}
            llevar a este pecador a aquel convite inefable,{"\n"}
            donde Tú, con tu Hijo y el Espíritu Santo,{"\n"}
            eres para tus santos luz verdadera,{"\n"}
            satisfacción cumplida,{"\n"}
            gozo perdurable,{"\n"}
            dicha consumada y felicidad perfecta.{"\n"}
            Por el mismo Cristo Nuestro Señor. Amén.
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