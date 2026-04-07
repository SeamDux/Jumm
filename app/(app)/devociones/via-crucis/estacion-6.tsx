import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SextaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'VI Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>VI Estación</Text>
          <Text style={styles.subtitulo}>Una piadosa mujer enjuga el rostro de Jesús</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.cita}>
            No hay en El parecer, no hay hermosura que atraiga las miradas, ni belleza que agrade. Despreciado, deshecho de los hombres, varón de dolores, conocedor de todas los quebrantos, ante quien se vuelve el rostro, menospreciado, estimado en nada (Isaías 53,2-3).
          </Text>

          <Text style={styles.meditacion}>
            Y es el Hijo de Dios que pasa, loco... ¡loco de Amor!
          </Text>

          <Text style={styles.meditacion}>
            Una mujer, Verónica de nombre, se abre paso entre la muchedumbre, llevando un lienzo blanco plegado, con el que limpia piadosamente el rostro de Jesús. El Señor deja grabada su Santa Faz en las tres partes de ese velo.
          </Text>

          <Text style={styles.meditacion}>
            El rostro bienaventurado de Jesús, que había sonreído a los niños y se transfiguró de gloria en el Tabor, está ahora como oculto por el dolor. Pero ese dolor es nuestra purificación; ese sudor y esa sangre que empañan y desdibujan sus facciones, nuestra limpieza.
          </Text>

          <Text style={styles.meditacion}>
            Señor, que yo me decida a arrancar, mediante la penitencia, la triste careta que me he forjado con mis miserias... Entonces, sólo entonces, por el camino de la contemplación y de la expiación, mi vida irá copiando fielmente los rasgos de tu vida. Nos iremos pareciendo más y más a Ti.
          </Text>

          <Text style={styles.meditacion}>
            Seremos otros Cristos, el mismo Cristo, ipse Christus.
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