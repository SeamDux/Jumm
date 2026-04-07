import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function TerceraEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'III Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>III Estación</Text>
          <Text style={styles.subtitulo}>Cae Jesús por primera vez</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            La Cruz hiende, destroza con su peso los hombros del Señor.
          </Text>

          <Text style={styles.meditacion}>
            La turbamulta ha ido agigantándose. Los legionarios apenas pueden contener la encrespada, enfurecida muchedumbre que, como río fuera de cauce, afluye por las callejuelas de Jerusalén.
          </Text>

          <Text style={styles.meditacion}>
            El cuerpo extenuado de Jesús se tambalea ya bajo la Cruz enorme. De su Corazón amorosísimo llega apenas un aliento de vida a sus miembros llagados.
          </Text>

          <Text style={styles.meditacion}>
            A derecha e izquierda, el Señor ve esa multitud que anda como ovejas sin pastor. Podría llamarlos uno a uno, por sus nombres, por sus pecados. Ahí están los que se alimentaron en la multiplicación de los panes y de los peces, los que fueron curados de sus dolencias, los que adoctrinó junto al lago y en la montaña y en los pórticos del Templo.
          </Text>

          <Text style={styles.meditacion}>
            Un dolor agudo penetra en el alma de Jesús, y el Señor se desploma extenuado.
          </Text>

          <Text style={styles.meditacion}>
            Tú y yo no podemos decir nada: ahora ya sabemos por qué pesa tanto la Cruz de Jesús. Y lloramos nuestras miserias y también la ingratitud tremenda del corazón humano. Del fondo del alma nace un acto de contrición verdadera, que nos saca de la postración del pecado. Jesús ha caído para que nosotros nos levantemos: una vez y siempre.
          </Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Pequé Señor, me pesa</Text>
            <Text style={styles.texto}>R. Ten piedad y misericordia de mí.</Text>
          </View>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 20,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  oracionContainer: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  meditacion: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 28,
  },
  cita: {
    fontSize: 18,
    color: Colors.text,
    fontStyle: 'italic',
    textAlign: 'justify',
    marginVertical: 10,
    lineHeight: 28,
    paddingHorizontal: 20,
  },
}); 