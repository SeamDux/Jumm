import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SeptimaEstacionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'VII Estación',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>VII Estación</Text>
          <Text style={styles.subtitulo}>Cae Jesús por segunda vez</Text>

          <View style={styles.oracionContainer}>
            <Text style={styles.texto}>V. Te adoramos, oh Cristo, y te bendecimos.</Text>
            <Text style={styles.texto}>R. Que por tu Santa Cruz redimiste al mundo.</Text>
          </View>

          <Text style={styles.meditacion}>
            Ya fuera de la muralla, el cuerpo de Jesús vuelve a abatirse a causa de la flaqueza, cayendo por segunda vez, entre el griterío de la muchedumbre y los empellones de los soldados.
          </Text>

          <Text style={styles.meditacion}>
            La debilidad del cuerpo y la amargura del alma han hecho que Jesús caiga de nuevo. Todos los pecados de los hombres —los míos también— pesan sobre la Humanidad Santísima.
          </Text>

          <Text style={styles.cita}>
            Fue el quien tomó sobre sí nuestras enfermedades y cargó con nuestros dolores, y nosotros le tuvimos por castigado, herido de Dios y humillado. Fue traspasado por nuestras iniquidades y molido por nuestros pecados. El castigo de nuestra salvación pesó sobre él, y en sus llagas hemos sido curados (Isaías 53,4- 5).
          </Text>

          <Text style={styles.meditacion}>
            Desfallece Jesús, pero su caída nos levanta, su muerte nos resucita.
          </Text>

          <Text style={styles.meditacion}>
            A nuestra reincidencia en el mal, responde Jesús con su insistencia en redimirnos, con abundancia de perdón. Y para que nadie desespere, vuelve a alzarse fatigosamente abrazado a la Cruz.
          </Text>

          <Text style={styles.meditacion}>
            Que los tropiezos y derrotas no nos aparten ya más de Él. Como el niño débil se arroja compungido en los brazos rectos de su padre, tú y yo nos asiremos al yugo de Jesús. Sólo esa contrición y esa humildad transformarán nuestra flaqueza humana en fortaleza divina.
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