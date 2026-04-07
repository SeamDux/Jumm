import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function ExpirarScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'En el momento de expirar',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>En el momento de expirar</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Terminadas las preces de la recomendación del alma, mientras el moribundo lucha con la muerte, puede trazarse el signo de la cruz sobre su frente y ofrecerle un crucifijo para que lo bese, diciendo:
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              V. El Señor guarde tu salida de este mundo y tu entrada{"\n"}
              en su reino, en su paz y en su amor.{"\n"}
              Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>O bien:</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              V. Que el Padre, el Hijo y el Espíritu Santo estén contigo,{"\n"}
              te infundan esperanza y te conduzcan a la paz de su reino.{"\n"}
              Amén.
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
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 10,
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