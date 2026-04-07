import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function PecadosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Pecados mortales, veniales, capitales',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Pecados mortales, veniales, capitales</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado es una falta contra la razón, la verdad, la conciencia recta; es faltar al amor verdadero para con Dios y para con el prójimo, a causa de un apego perverso a ciertos bienes. Hiere la naturaleza del hombre y atenta contra la solidaridad humana. Ha sido definido como "una palabra, un acto o un deseo contrarios a la ley eterna" (San Agustín, Contra Faustum manichaeum, 22, 27; Santo Tomás de Aquino, Summa theologiae, 1-2, q. 71, a. 6) (CEC 1849)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado es una ofensa a Dios: "Contra ti, contra ti sólo pequé, cometí la maldad que aborreces" (Sal 51, 6). El pecado se levanta contra el amor que Dios nos tiene y aparta de Él nuestros corazones. Como el primer pecado, es una desobediencia, una rebelión contra Dios por el deseo de hacerse "como dioses", pretendiendo conocer y determinar el bien y el mal (Gn 3, 5). El pecado es así "amor de sí hasta el desprecio de Dios" (San Agustín, De civitate Dei, 14, 28). Por esta exaltación orgullosa de sí, el pecado es diametralmente opuesto a la obediencia de Jesús que realiza la salvación (cf Flp 2, 6-9). (CEC 1850)
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 20,
  },
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
}); 