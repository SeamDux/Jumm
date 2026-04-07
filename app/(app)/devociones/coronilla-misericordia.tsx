import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function CoronillaMisericordiaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Coronilla de la Divina Misericordia',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Coronilla de la Divina Misericordia</Text>
          
          <Text style={styles.texto}>
            Santa Faustina Kowalska, a partir de una visión que tuvo el 13 de Septiembre de 1935 empezó a difundir esta oración que el mismo Jesús le enseñó. En el relato de dicha visión recogido en su diario, afirma que el mismo Jesús le dijo:
          </Text>

          <Text style={styles.cita}>
            «Cuando recen este Tercio junto a los agonizantes, Yo me pondré entre el Padre y el alma agonizante, no como justo Juez, sino como Salvador Misericordioso»
          </Text>

          <Text style={styles.texto}>
            Para recitar la Coronilla de la Divina Misericordia se usa un rosario normal y se sigue esta secuencia:
          </Text>

          <Text style={styles.texto}>
            1. La señal de la Cruz. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.{'\n\n'}
            2. Padre Nuestro{'\n\n'}
            3. Ave María{'\n\n'}
            4. Credo (Símbolo de los Apóstoles){'\n\n'}
            5. En cada cuenta mayor del Rosario, cuando normalmente se dice el Padre Nuestro, diga:
          </Text>

          <Text style={styles.textoItalica}>
            Padre Eterno,{'\n'}
            Te ofrezco{'\n'}
            el Cuerpo, la Sangre,{'\n'}
            el Alma y la Divinidad{'\n'}
            de Tu amadísimo Hijo,{'\n'}
            Nuestro Señor Jesucristo,{'\n'}
            como propiciación{'\n'}
            de nuestros pecados{'\n'}
            y los del mundo entero.
          </Text>

          <Text style={styles.texto}>
            6. En cada cuenta menor del Rosario, cuando normalmente se dice el Ave María, diga:
          </Text>

          <Text style={styles.textoItalica}>
            Por Su dolorosa Pasión,{'\n'}
            ten misericordia de nosotros{'\n'}
            y del mundo entero.
          </Text>

          <Text style={styles.texto}>
            7. Invocación: Al final de la corona, la siguiente oración se reza tres veces seguidas:
          </Text>

          <Text style={styles.textoItalica}>
            Santo Dios,{'\n'}
            Santo Fuerte,{'\n'}
            Santo Inmortal,{'\n'}
            ten misericordia de nosotros{'\n'}
            y del mundo entero.
          </Text>

          <Text style={styles.texto}>
            8. Oración para concluir (opcional)
          </Text>

          <Text style={styles.textoItalica}>
            Oh Dios Eterno, en quien la misericordia es infinita y el tesoro de compasión inagotable, vuelve a nosotros Tu mirada bondadosa y aumenta Tu misericordia en nosotros, para que en momentos difíciles no nos desesperemos ni nos desalentemos, sino que, con gran confianza, nos sometamos a Tu santa voluntad, que es el Amor y la Misericordia misma. Amén.
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
  textoItalica: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 