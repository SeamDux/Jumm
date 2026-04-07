import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';

interface Devocion {
  id: string;
  titulo: string;
  ruta: string;
}

const devociones: Devocion[] = [
  {
    id: 'oracion',
    titulo: 'Oración a San José',
    ruta: '/devociones-jose/oracion'
  },
  {
    id: 'letanias',
    titulo: 'Letanías de San José',
    ruta: '/devociones-jose/letanias'
  },
  {
    id: 'siete-domingos',
    titulo: 'Siete Domingos de San José',
    ruta: '/devociones-jose/siete-domingos'
  }
];

export default function DevocionesJoseScreen() {

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devociones a San José',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Introducción sobre San José */}
          <Text style={[styles.devocionItemTitulo, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>“En tiempos difíciles para la Iglesia, Pío IX, queriendo ponerla bajo la especial protección del santo patriarca José, lo declaró 'Patrono de la Iglesia Católica'…Las razones por las que el bienaventurado José debe ser considerado especial Patrono de la Iglesia, y por las que a su vez, la Iglesia espera muchísimo de su tutela y patrocinio, nacen principalmente del hecho de que él es el esposo de María y padre putativo de Jesús; José, en su momento, fue el custodio legítimo y natural, cabeza y defensor de la Sagrada Familia". (Juan Pablo II, Redemptores custos, 28, 1989).</Text>
          <Text style={[styles.devocionItemTitulo, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>La devoción a San José es una continuación de la devoción que Jesús tuvo para con su guardián, pues según nos dice el Catecismo de la Iglesia Católica: "con la sumisión a su madre, y a su padre legal, Jesús cumple con perfección el cuarto mandamiento. Es la imagen temporal de su obediencia filial a su Padre celestial. La sumisión cotidiana de Jesús a José y a María anunciaba y anticipaba la sumisión del Jueves Santo: "No se haga mi voluntad..." Y no fue esta una sumisión accidental, pues "Cristo quiso nacer y crecer en el seno de la Sagrada Familia de José y María".</Text>
          <Text style={[styles.devocionItemTitulo, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>"¿Cómo sería José, cómo habría obrado en él la gracia, para ser capaz de llevar a cabo la tarea de sacar adelante en lo humano al Hijo de Dios? No es posible desconocer la sublimidad del misterio. Ese Jesús que es hombre, que habla con el acento de una región determinada de Israel, que se parece a un artesano llamado José, ése es el Hijo de Dios.</Text>
          <Text style={[styles.devocionItemTitulo, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>"Porque Jesús debía parecerse a José: en el modo de trabajar, en rasgos de su carácter, en la manera de hablar. En el realismo de Jesús, en su espíritu de observación, en su modo de sentarse a la mesa y de partir el pan, en su gusto por exponer la doctrina de una manera concreta, tomando ejemplo de las cosas de la vida ordinaria, se refleja lo que ha sido la infancia y la juventud de Jesús y, por tanto, su trato con José". (San Josemaría Escrivá, Es Cristo que pasa, 55).</Text>
          {devociones.map((devocion) => (
            <TouchableOpacity 
              key={devocion.id}
              style={styles.devocionItem}
              onPress={() => router.push(devocion.ruta)}
            >
              <Text style={styles.devocionItemTitulo}>{devocion.titulo}</Text>
            </TouchableOpacity>
          ))}
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
  devocionItem: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  devocionItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
});