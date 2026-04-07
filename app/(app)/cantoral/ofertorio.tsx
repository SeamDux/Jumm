import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CantosOfertorioScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Cantos de ofertorio',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Cantos de ofertorio</Text>
          </View>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>1. Recibe, oh Padre Santo</Text>
            <Text style={styles.lyrics}>
              Recibe oh Padre Santo,{'\n'}
              esta hostia inmaculada{'\n'}
              que indignos te ofrecemos{'\n'}
              por nuestro pecados{'\n'}
              Y por la salud del mundo.{'\n\n'}
              Recibe oh Padre Santo,{'\n'}
              este cáliz inmaculado{'\n'}
              que indignos te ofrecemos{'\n'}
              por nuestros pecados.{'\n'}
              Y por la salud del mundo.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://youtu.be/pnxHrbYRrJ8?si=jKbXJCTRVrnNEcvu')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
          </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>2. Padre nuestro recibid</Text>
            <Text style={styles.lyrics}>
              Padre nuestro, recibid{'\n'}
              el humilde don del pan;{'\n'}
              de ese pan que se convertirá{'\n'}
              en el Cuerpo de Jesús.{'\n\n'}
              Recibid también, Señor,{'\n'}
              los racimos de la vid,{'\n'}
              de la vid que se convertirá{'\n'}
              en la Sangre de Jesús.{'\n\n'}
              Con el vino y con el pan{'\n'}
              ofrecemos nuestro don,{'\n'}
              nuestra pobre vida de dolor{'\n'}
              entregada con amor.{'\n\n'}
              Gloria al Padre y al Amor{'\n'}
              y a Jesús nuestro Señor,{'\n'}
              bendigamos el Nombre de Dios{'\n'}
              siempre y en todo lugar.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://youtu.be/6yuLB-uL9L4?si=UbfCx3Pv5bBcEYnL')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
          </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>3. Recibe oh Dios</Text>
            <Text style={styles.lyrics}>
              Recibe, oh Dios, el pan que te ofrecemos,{'\n'}
              luego será el Cuerpo de Jesús.{'\n'}
              También acepta nuestro sacrificio,{'\n'}
              nuestra oración y nuestro corazón.{'\n\n'}
              Recibe, oh Dios, el vino que ofrecemos,{'\n'}
              luego será la Sangre de Jesús.{'\n'}
              También acepta nuestro sacrificio,{'\n'}
              nuestra oración y nuestro corazón.{'\n\n'}
              Recíbelos, Señor, por nuestras faltas,{'\n'}
              por los que están aquí junto al altar,{'\n'}
              por los cristianos vivos y difuntos,{'\n'}
              por todo el mundo, por su salvación.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=V2k1bx6UJz8')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
          </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>4. Te presentamos</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>Te presentamos el vino y el pan{'\n'}
              Bendito seas por siempre señor</Text>{'\n\n'}
              Bendito seas señor{'\n'}
              Por este pan que nos diste{'\n'}
              Fruto de la tierra y del trabajo de los hombres{'\n\n'}
              <Text style={styles.italic}>Te presentamos el vino y el pan</Text>{'\n\n'}
              Bendito seas señor{'\n'}
              El vino tú nos lo diste{'\n'}
              Fruto de la tierra y del trabajo de los hombres{'\n\n'}
              <Text style={styles.italic}>Te presentamos el vino y el pan</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=B281oFYllbQ')}
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