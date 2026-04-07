import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function MadreDolorosaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Madre Dolorosa',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Estaba la Madre Dolorosa</Text>
          
          <Text style={styles.subtitulo}>Traducción de Lope de Vega</Text>

          <Text style={styles.poema}>
            Estaba la Madre dolorosa{'\n'}
            junto a la Cruz llorando,{'\n'}
            mientras su Hijo pendía.{'\n'}
            Su alma llorosa,{'\n'}
            triste y dolorida,{'\n'}
            traspasada por una espada.{'\n\n'}

            ¡Oh cuán triste y afligida{'\n'}
            estuvo aquella bendita{'\n'}
            Madre del Unigénito!{'\n'}
            Estaba triste y dolorosa,{'\n'}
            como madre piadosa,{'\n'}
            al ver las penas de su Divino Hijo.{'\n\n'}

            ¿Qué hombre no lloraría,{'\n'}
            si viese a la Madre de Cristo{'\n'}
            en tan atroz suplicio?{'\n'}
            ¿Quién no se contristaría,{'\n'}
            al contemplar a la Madre de Cristo{'\n'}
            dolerse con su Hijo?{'\n\n'}

            Por los pecados de su pueblo,{'\n'}
            vio a Jesús en los tormentos,{'\n'}
            y sometido a los azotes.{'\n'}
            Vio a su dulce Hijo{'\n'}
            morir abandonado,{'\n'}
            cuando entregó su espíritu.{'\n\n'}

            ¡Oh, Madre, fuente de amor!{'\n'}
            Haz que sienta tu dolor{'\n'}
            para que contigo llore.{'\n'}
            Haz que arda mi corazón{'\n'}
            en amor de Cristo mi Dios,{'\n'}
            para que así le agrade.{'\n\n'}

            ¡Oh santa Madre! Haz esto:{'\n'}
            graba las llagas del Crucificado{'\n'}
            en mi corazón hondamente.{'\n'}
            De tu Hijo lleno de heridas,{'\n'}
            que se dignó padecer tanto por mí,{'\n'}
            reparte conmigo las penas.{'\n\n'}

            Haz que yo contigo piadosamente llore,{'\n'}
            y que me conduela del Crucificado,{'\n'}
            mientras yo viva.{'\n'}
            Haz que esté contigo{'\n'}
            junto a la Cruz;{'\n'}
            pues deseo asociarme en el llanto.{'\n\n'}

            ¡Oh Virgen la más ilustre de todas las vírgenes!{'\n'}
            no seas ya dura para mí;{'\n'}
            haz que contigo llore.{'\n'}
            Haz que lleve la muerte de Cristo;{'\n'}
            hazme socio de su Pasión{'\n'}
            y que venere sus llagas.{'\n\n'}

            Haz que, herido con sus heridas,{'\n'}
            sea yo embriagado con la Cruz{'\n'}
            y con la Sangre de tu Hijo.{'\n'}
            Para que no me queme y arda en las llamas,{'\n'}
            por ti, oh Virgen, sea defendido{'\n'}
            en el día del juicio.{'\n\n'}

            ¡Oh Cristo! Cuando hubiere de salir de aquí,{'\n'}
            dame, por tu Madre,{'\n'}
            que llegue a la palma de la victoria.{'\n'}
            Cuando el cuerpo feneciere,{'\n'}
            haz que al alma se le dé{'\n'}
            la gloria del Paraíso.{'\n\n'}

            Amén. Aleluya.
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  poema: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#000000',
  },
}); 