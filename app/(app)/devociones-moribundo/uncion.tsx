import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function UncionScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Unción de los Enfermos',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Unción de los enfermos</Text>
          <Text style={styles.subtitulo}>(Sólo lo administran el Obispo y los sacerdotes)</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.versiculoLetra}>V.</Text>
            <Text style={styles.texto}>La paz del Señor a esta casa y a todos los presentes.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.instruccion}>Rocía con agua bendita</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>Que esta agua nos recuerde nuestro bautismo en Cristo, que nos redimió con su muerte y resurrección.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.instruccion}>Se dirige a los presentes con estas o parecidas palabras</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>Señor, Dios nuestro, que por medio de tu apóstol Santiago nos has dicho: "¿Está enfermo alguno de vosotros? Llame a los presbíteros de la Iglesia, y que recen sobre él, después de ungirlo con el óleo, en el nombre del Señor. Y la oración y la fe salvarán al enfermo, y el Señor lo curará, y si ha cometido pecado, lo perdonará."</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>Escucha la oración de quienes nos hemos reunido en tu nombre y protege misericordiosamente a N., nuestro hermano (y a todos los enfermos de esta casa).</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>Por Jesucristo, nuestro Señor.</Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
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
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  versiculoLetra: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    flex: 1,
  },
  instruccion: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    textAlign: 'center',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 