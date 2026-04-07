import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function BenditaSeaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Bendita Sea Tu Pureza',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Bendita Sea Tu Pureza</Text>
          
          <Text style={styles.texto}>
            Bendita sea tu pureza y eternamente lo sea: La pureza es virtud eminentemente positiva que hace grata a Dios a la persona que la vive. Es la virtud de la belleza, de la blancura del alma. Eleva al hombre hacia las cosas divinas, lo dignifica y engrandece. Estos dos versos son una alabanza a María. Concebida sin mancha, siempre fue pura y limpia más que el sol (...) Nadie como Ella vivió —ni vivirá— con tanta delicadeza la pureza.
          </Text>

          <Text style={styles.texto}>
            Pues todo un Dios se recrea en tan graciosa belleza: La Virgen María es la obra maestra de la Creación. Ella es toda blanca, sin mancha posible. Reina de la luz, que no tiene menguantes como la luna, ni ocaso como el sol, sino siempre en toda luz, sin mezcla de sombra de ninguna clase. Más que Ella sólo Dios.
          </Text>

          <Text style={styles.texto}>
            A Ti celestial Princesa, Virgen Sagrada, María: El alma se dirige a María, recordándole su realeza y su virginidad (...) No se llama a María "la humilde, ni la obediente", aunque fue todo eso y modelo acabadísimo de todas las virtudes; sin embargo se le dice "la Virgen" y parece que ya está dicho todo con llamarla así.
          </Text>

          <Text style={styles.texto}>
            Yo te ofrezco en este día alma, vida y corazón: Es el ofrecimiento que el hombre hace de su ser a María, Madre nuestra por designio divino. Desde hoy, que es el primer día del resto de vida que a cada uno le queda, sin perder un instante más, ofrece el hombre aquello que más aprecia: el alma, con sus facultades, inteligencia y voluntad; su propia vida, regalo inmenso de Dios; y el corazón, para que la Virgen lo tome y le alcance la gracia de conservarlo limpio, y así gozar de la visión de Dios eternamente.
          </Text>

          <Text style={styles.texto}>
            Mírame con compasión: Es una petición de misericordia que hace el alma, con la seguridad de ser atendida por María, porque Ella es Madre, y la mejor de las madres, que siempre está pendiente de sus hijos y se compadece de ellos.
          </Text>

          <Text style={styles.texto}>
            No me dejes, Madre mía: Lleno de confianza en el poder y la bondad de Santa María y sabiendo que, como Madre buena, oye los ruegos de sus hijos, le suplica el alma con todo el fervor del corazón que no le deje de su mano, porque si Ella le deja se perderá para siempre.
          </Text>

          <Text style={styles.subtitulo}>Oración</Text>

          <Text style={styles.oracion}>
            Bendita sea tu pureza{'\n'}
            y eternamente lo sea,{'\n'}
            pues todo un Dios se recrea{'\n'}
            en tan graciosa belleza.{'\n'}
            A Ti, celestial Princesa,{'\n'}
            Virgen Sagrada María,{'\n'}
            yo te ofrezco en este día{'\n'}
            alma, vida y corazón.{'\n'}
            Mírame con compasión,{'\n'}
            no me dejes, Madre mía.
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
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 