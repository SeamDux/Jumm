import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function PalabraScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Liturgia de la Palabra',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Liturgia de la palabra</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Escuchad ahora, hermanos las palabras del Santo Evangelio según San Mateo 8,5-10,13
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Al entrar Jesús en Cafarnaúm, un centurión se le acercó, rogándole:
            </Text>
            <Text style={styles.dialogo}>
              - Señor, tengo en casa un criado que está en cama paralítico y sufre mucho.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Jesús le contestó:
            </Text>
            <Text style={styles.dialogo}>
              - Voy a curarlo.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Pero el centurión le replicó:
            </Text>
            <Text style={styles.dialogo}>
              - Señor, no soy quien para que entres en mi casa. Basta que lo digas de palabra, y mi criado quedará sano. Porque yo también vivo bajo disciplina y tengo soldados a mis órdenes; y le digo a uno "ve" y va; al otro, "ven" y viene; a mi criado "haz esto", y lo hace.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Al oírlo Jesús quedó admirado y dijo a los que le seguían:
            </Text>
            <Text style={styles.dialogo}>
              - Os aseguro que en Israel no he encontrado en nadie tanta fe.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Y al centurión le dijo:
            </Text>
            <Text style={styles.dialogo}>
              - Vuelve a casa, que se cumpla lo que has creído.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.palabraDelSenor}>
              Palabra del Señor.
            </Text>
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
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 15,
    flexDirection: 'column',
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 10,
  },
  dialogo: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginLeft: 20,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  palabraDelSenor: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: Colors.primary,
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