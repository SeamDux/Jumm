import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CantosMarianoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Cantos Virgen María',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Cantos a la Virgen María</Text>
          </View>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>1. Virgen del Carmen Bella</Text>
            <Text style={styles.lyrics}>
              Virgen del Carmen bella,{'\n'}
              Madre del Salvador,{'\n'}
              de tus amantes hijos oye el cantar de amor (bis){'\n\n'}
              <Text style={styles.italic}>Dios te salve María, del Carmen bella flor,{'\n'}
              Estrella que nos guías hacia el sol del Señor (bis)</Text>{'\n\n'}
              Junto a ti nos reúnes, nos llamas con tu voz,{'\n'}
              quieres formar de Chile un pueblo para Dios (bis){'\n\n'}
              <Text style={styles.italic}>Dios te salve María...</Text>{'\n\n'}
              Somos un pueblo en marcha en busca de tu luz,{'\n'}
              guíanos, Madre nuestra, llévanos a Jesús (bis){'\n\n'}
              <Text style={styles.italic}>Dios te salve María...</Text>{'\n\n'}
              Haznos cristianos Madre, cristianos de verdad,{'\n'}
              Hombres de fe sincera, de viva caridad(bis).{'\n\n'}
              <Text style={styles.italic}>Dios te salve María...</Text>{'\n\n'}
              Salva Señora a Chile, Mira que es tu nación{'\n'}
              Guíala por la senda de la virtud y honor (bis).
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=fzIJrsQFyUs')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>2. Junto a ti, María</Text>
            <Text style={styles.lyrics}>
              Junto a ti, María, como un niño quiero estar{'\n'}
              Tómame en tus brazos, guíame en mi caminar{'\n'}
              Quiero que me eduques, que me enseñes a rezar{'\n'}
              Hazme transparente, lléname de paz{'\n\n'}
              <Text style={styles.italic}>Madre, madre{'\n'}
              Madre, madre{'\n'}
              Madre, madre{'\n'}
              Madre, madre</Text>{'\n\n'}
              Gracias, madre mía, por llevarnos a Jesús{'\n'}
              Haznos más humildes, tan sencillos como tú{'\n'}
              Gracias, madre mía, por abrir tu corazón{'\n'}
              Porque nos congregas y nos das tu amor{'\n\n'}
              <Text style={styles.italic}>Madre, madre...</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=png4nus09vQ')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>3. María mírame</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>María, mírame{'\n'}
              María, mírame{'\n'}
              Si Tú me miras{'\n'}
              Él también me mirará{'\n'}
              Madre mía, mírame{'\n'}
              De la mano llévame{'\n'}
              Muy cerca de Él{'\n'}
              Que ahí me quiero quedar</Text>{'\n\n'}
              María, cúbreme con tu manto{'\n'}
              Que tengo miedo, no sé rezar{'\n'}
              Que por tus ojos misericordiosos{'\n'}
              Tendré la fuerza, tendré la paz{'\n\n'}
              <Text style={styles.italic}>María, mírame{'\n'}
              María, mírame{'\n'}
              Si Tú me miras{'\n'}
              Él también me mirará{'\n'}
              Madre mía, mírame{'\n'}
              De la mano llévame{'\n'}
              Muy cerca de Él{'\n'}
              Que ahí me quiero quedar</Text>{'\n\n'}
              Madre, consuélame de mis penas{'\n'}
              Es que no quiero ofenderle más{'\n'}
              Que por tus ojos misericordiosos{'\n'}
              Quiero ir al cielo y verlos ya{'\n\n'}
              <Text style={styles.italic}>María, mírame{'\n'}
              María, mírame{'\n'}
              Si Tú me miras{'\n'}
              Él también me mirará{'\n'}
              Madre mía, mírame{'\n'}
              De la mano llévame{'\n'}
              Muy cerca de Él{'\n'}
              Que ahí me quiero quedar</Text>{'\n\n'}
              María, mírame{'\n'}
              María, mírame{'\n'}
              Si Tú me miras{'\n'}
              Él también me mirará{'\n'}
              Madre mía, mírame{'\n'}
              De la mano llévame{'\n'}
              Muy cerca de Él{'\n'}
              Que ahí me quiero quedar{'\n'}
              En tus brazos quiero{'\n'}
              Descansar
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=JAjYcUndLCM')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>4. María de la Alianza</Text>
            <Text style={styles.lyrics}>
              Que silencio más delicado{'\n'}
              Amor del amor más escondido{'\n'}
              Eres mujer, puerta del cielo{'\n'}
              Tres colores adornan tu manto{'\n\n'}
              Bajan las cascadas de los árboles{'\n'}
              Que caen hasta el suelo{'\n'}
              Y llegan al santuario{'\n\n'}
              <Text style={styles.italic}>Quieres dar la mano{'\n'}
              Y yo pedir la tuya{'\n'}
              No puedo estar sin ti{'\n'}
              Sin tu mirada pura{'\n'}
              Tu voz me llena el alma{'\n'}
              María de la Alianza{'\n'}
              Palabra hecha flor</Text>{'\n\n'}
              He cambiado todo mi canto{'\n'}
              Solo para soñar tu brisa{'\n'}
              Y no soy más que polvo en el camino{'\n'}
              Aunque no es polvo de tu olvido{'\n\n'}
              Quiero ser un puente hacia el cielo{'\n'}
              Hecho de barro y de fuego{'\n'}
              Que nace en el santuario{'\n\n'}
              <Text style={styles.italic}>Quieres dar la mano{'\n'}
              Y yo pedir la tuya{'\n'}
              No puedo estar sin ti{'\n'}
              Sin tu mirada pura{'\n'}
              Tu voz me llena el alma{'\n'}
              María de la Alianza{'\n'}
              Palabra hecha flor{'\n\n'}
              Quieres dar la mano{'\n'}
              Y yo pedir la tuya{'\n'}
              No puedo estar sin ti{'\n'}
              Sin tu mirada pura{'\n'}
              Tu voz me llena el alma{'\n'}
              María de la Alianza{'\n'}
              Palabra hecha flor</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jkpEv3cu1Lg')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  songCard: {
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
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  lyrics: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  italic: {
    fontStyle: 'italic',
  },
button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 1,
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 