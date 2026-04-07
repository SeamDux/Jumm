import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function QuintaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'V Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>V Estación</Text>
          <Text style={styles.subtitulo}>Simón ayuda a llevar la Cruz de Jesús</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Jesús está extenuado. Su paso se hace más y más torpe, y la soldadesca tiene prisa por acabar; de modo que, cuando salen de la ciudad por la puerta Judiciaria, requieren a un hombre que venía de una granja, llamado Simón de Cirene, padre de Alejandro y de Rufo, y le fuerzan a que lleve la Cruz de Jesús (cf. Marcos 15,21).
          </Text>

          <Text style={styles.meditacion}>
            En el conjunto de la Pasión, es bien poca cosa lo que supone esta ayuda. Pero a Jesús le basta una sonrisa, una palabra, un gesto, un poco de amor para derramar copiosamente su gracia sobre el alma del amigo. Años más tarde, los hijos de Simón, ya cristianos, serán conocidos y estimados entre sus hermanos en la fe. Todo empezó por un encuentro inopinado con la Cruz.
          </Text>

          <Text style={styles.cita}>
            Me presenté a los que no preguntaban por mí, me hallaron los que no me buscaban (Isaías 16,1).
          </Text>

          <Text style={styles.meditacion}>
            A veces la Cruz aparece sin buscarla: es Cristo que pregunta por nosotros. Y si acaso ante esa Cruz inesperada, y tal vez por eso más oscura, el corazón mostrara repugnancia... no le des consuelos. Y, lleno de una noble compasión, cuando los pida, dile despacio, como en confidencia: corazón, ¡corazón en la Cruz!, ¡corazón en la Cruz!
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