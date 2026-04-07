import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionViajeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Bendición para un viaje',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Rito Breve de la Bendición de los que van a emprender un viaje</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              Existe la venerable costumbre, recordada varias veces en la misma Escritura, según la cual los que van a emprender un viaje implorarán la ayuda del Señor. El presente rito de bendición ofrece un modelo de oración encaminado a conservar esta piadosa costumbre.
            </Text>
            <Text style={styles.prayer}>
              Este rito puede utilizarse asimismo en el caso de los emigrantes que marchan de su patria u hogar, aunque sólo sea temporalmente, por motivos de trabajo, o se dirigen a otro lugar de estancia, por ejemplo, con ocasión de las vacaciones.
            </Text>
            <Text style={styles.prayer}>
              El ministro de esta bendición puede ser el sacerdote, el diácono, o también el laico; todos ellos, respetando la estructura del rito y sus principales elementos, adaptarán la celebración a las circunstancias de los que han de viajar y del lugar.
            </Text>
            <Text style={styles.prayer}>
              Si sólo se ha de bendecir a una persona o a un pequeño grupo, puede emplearse el rito breve.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              Nuestro auxilio es el nombre del Señor.{'\n\n'}
              R. Que hizo el cielo y la tierra.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Lectura de la Palabra de Dios</Text>
            <Text style={styles.prayer}>
              Uno de los presentes, o el que preside, lee un texto de la sagrada Escritura, por ejemplo:{'\n\n'}
              Tobías 4, 19a{'\n'}
              Bendice al Señor Dios en todo momento, y pídele que allane tus caminos y que te dé éxito en tus empresas y proyectos.{'\n\n'}
              O bien:{'\n\n'}
              Juan 14, 6{'\n'}
              Dijo Jesús: «Yo soy el camino, y la verdad, y la vida. Nadie va al Padre, sino por mí.»
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración de bendición</Text>
            <Text style={styles.prayer}>
              Luego el que preside dice la oración de bendición:{'\n\n'}
              Dios todopoderoso y eterno,{'\n'}
              que hiciste salir a Abrahán de su tierra{'\n'}
              y de la casa de su padre{'\n'}
              y lo guardaste sano y salvo{'\n'}
              por los caminos de su peregrinación,{'\n'}
              protégenos también a nosotros, tus servidores;{'\n'}
              sé para todos, Señor, apoyo en la preparación del viaje,{'\n'}
              compañía y solaz durante el camino,{'\n'}
              y ayuda en las dificultades,{'\n'}
              para que, guiados por ti,{'\n'}
              lleguemos al término de nuestro viaje{'\n'}
              y regresemos felizmente a nuestro hogar.{'\n'}
              Por Jesucristo, nuestro Señor.{'\n\n'}
              Amén.{'\n\n'}
              O bien:{'\n\n'}
              Dios nos bendiga{'\n'}
              con toda clase de bendiciones celestiales{'\n'}
              y disponga felizmente nuestros caminos,{'\n'}
              para que, entre las vicisitudes de esta vida,{'\n'}
              podamos experimentar siempre{'\n'}
              su divina protección.{'\n'}
              Por Jesucristo, nuestro Señor.{'\n\n'}
              Amén.
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
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionCard: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 