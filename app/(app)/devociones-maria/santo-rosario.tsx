import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function SantoRosarioScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Santo Rosario',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>El Santo Rosario</Text>
          
          <Text style={styles.texto}>
            El Santo Rosario es una devoción muy antigua. "La piedad medieval de Occidente desarrolló la oración del Rosario, en sustitución de la Oración de las Horas". Es una meditación de la vida de Jesucristo y de la Virgen María. "La oración cristiana se aplica preferentemente a meditar "los misterios de Cristo", como (...) en el Rosario. La meditación hace intervenir el pensamiento, la imaginación, la emoción y el deseo. Esta movilización es necesaria para profundizar en las convicciones de fe, suscitar la conversión del corazón y fortalecer la voluntad de seguir a Cristo".
          </Text>

          <Text style={styles.texto}>
            La meditación de estos misterios conduce a la contemplación, pues, como dice el Catecismo de la Iglesia Católica: "Esta forma de reflexión orante es de gran valor, pero la oración cristiana debe ir más lejos: hacia el conocimiento del amor del Señor Jesús, a la unión con Él". (CEC 2678, 2708).
          </Text>

          <Text style={styles.texto}>
            El Rosario está dividido en cuatro partes y cada parte en cinco misterios. En cada misterio se recitan un Padrenuestro, una decena de Avemarías y un Gloria. Una costumbre piadosa es rezar diariamente en familia una cuarta parte del Santo Rosario (es decir, cinco misterios).
          </Text>

          <Text style={styles.cita}>
            "El Rosario es la oración que acompaña siempre mi vida; también es la oración de los sencillos y de los santos... es la oración de mi corazón" (Papa Francisco).
          </Text>

          <Text style={styles.subtitulo}>Cómo se reza</Text>

          <Text style={styles.texto}>
            Por la señal de la santa Cruz...
          </Text>

          <Text style={styles.subtitulo}>Acto de contrición</Text>

          <Text style={styles.oracion}>
            ¡Señor mío, Jesucristo! Dios y Hombre verdadero, Creador, Padre y Redentor mío; por ser Vos quien sois, Bondad infinita, y porque os amo sobre todas las cosas, me pesa de todo corazón de haberos ofendido; también me pesa porque podéis castigarme con las penas del infierno. Ayudado de vuestra divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén.
          </Text>

          <Text style={styles.oracion}>
            V. Señor, abre mis labios,{'\n'}
            R. Y mi boca proclamará tu alabanza.{'\n\n'}
            V. Señor, ven en mi ayuda!,{'\n'}
            R. Y apresúrate a socorrerme.{'\n\n'}
            V. Gloria al Padre y al Hijo y al Espíritu Santo.{'\n'}
            R. Como era en un principio, ahora y siempre, por los siglos de los siglos. Amén.
          </Text>

          <Text style={styles.subtitulo}>Misterios del Santo Rosario</Text>

          <Text style={styles.subtitulo}>Misterios Gozosos (lunes y sábados)</Text>

          <Text style={styles.texto}>
            1. La Encarnación del Hijo de Dios (Lucas 1, 26-38).{'\n'}
            2. La Visitación de Nuestra Señora a su prima Santa Isabel (Lucas 1, 39-53).{'\n'}
            3. El Nacimiento del Hijo de Dios en Belén (Lucas 2, 6-19).{'\n'}
            4. La Purificación de Nuestra Señora (Lucas 2, 22-40).{'\n'}
            5. El Niño perdido y hallado en el Templo (Lucas 2, 41-52).
          </Text>

          <Text style={styles.subtitulo}>Misterios Luminosos (jueves)</Text>

          <Text style={styles.texto}>
            1. El Bautismo del Señor (Mateo 3, 13-17).{'\n'}
            2. Las bodas de Caná (Juan 2, 1-11).{'\n'}
            3. El Anuncio del Reino de Dios invitando a la conversión (Marcos 1, 15; Lucas 7, 47-50; Juan 20, 22-23).{'\n'}
            4. La Transfiguración del Señor (Mateo 17, 1-8).{'\n'}
            5. La institución de la Eucaristía (Juan 19, 25-30).
          </Text>

          <Text style={styles.subtitulo}>Misterios Dolorosos (martes y viernes)</Text>

          <Text style={styles.texto}>
            1. La Oración del Huerto (Mateo 26, 36-41).{'\n'}
            2. La Flagelación del Señor (Juan 18, 36-38; 19,1).{'\n'}
            3. La Coronación de espinas (Marcos 15, 14-17; Mateo 27, 24-30).{'\n'}
            4. La Cruz a cuestas (Juan 19, 17; Lucas 9, 23).{'\n'}
            5. Jesús muere en la Cruz (Juan 19, 25-30).
          </Text>

          <Text style={styles.subtitulo}>Misterios Gloriosos (miércoles y domingos)</Text>

          <Text style={styles.texto}>
            1. La Resurrección del Señor (Marcos 16, 6-8).{'\n'}
            2. La Ascensión del Señor (Mateo 28, 18-20; Hechos 1, 9-11).{'\n'}
            3. La Venida del Espíritu Santo (Hechos 2:1-4).{'\n'}
            4. La Asunción de Nuestra Señora (Cantar 3, 6; 8, 10).{'\n'}
            5. La Coronación de María Santísima (Cantar 6, 10; Lucas 1:51-54).
          </Text>

          <Text style={styles.subtitulo}>Oraciones adicionales</Text>

          <Text style={styles.texto}>
            Después de cada misterio, si se desea, se puede rezar una de las siguientes intercesiones:
          </Text>

          <Text style={styles.oracion}>
            María, Madre de gracia, Madre de misericordia, defiéndenos de nuestros enemigos y ampáranos ahora y en la hora de nuestra muerte. Amén.
          </Text>

          <Text style={styles.oracion}>
            Oh Jesús, perdónanos nuestros pecados, sálvanos del fuego del infierno y guía todas las almas al Cielo, especialmente aquellos que necesitan más de tu misericordia!
          </Text>

          <Text style={styles.texto}>
            Al terminar los cinco misterios, se puede rezar:
          </Text>

          <Text style={styles.oracion}>
            Dios te salve, María, Hija de Dios Padre, llena eres...{'\n'}
            Dios te salve, María, Madre de Dios Hijo, llenas eres...{'\n'}
            Dios te salve, María, Esposa de Dios Espíritu Santo, llena eres...
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
  cita: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.primary,
    fontStyle: 'italic',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 