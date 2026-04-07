import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function OracionAgustinScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración de San Agustín',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Oración de San Agustín</Text>
          
          <Text style={styles.oracion}>
            Señor Jesús, que me conozca a mí{'\n'}
            y que te conozca a Ti.{'\n'}
            Que no desee otra cosa sino a Ti.{'\n'}
            Que me odie a mí y te ame a Ti.{'\n'}
            Y que todo lo haga siempre por Ti.{'\n'}
            Que me humille y que te exalte a Ti.{'\n'}
            Que no piense nada más que en Ti.{'\n'}
            Que me mortifique, para vivir en Ti.{'\n'}
            Y que acepte todo como venido de Ti.{'\n'}
            Que renuncie a lo mío y te siga sólo a Ti.{'\n'}
            Que siempre escoja seguirte a Ti.{'\n'}
            Que huya de mí y me refugie en Ti.{'\n'}
            Y que merezca ser protegido por Ti.{'\n'}
            Que me tema a mí y tema ofenderte a Ti.{'\n'}
            Que sea contado entre los elegidos por Ti.{'\n'}
            Que desconfíe de mí{'\n'}
            y ponga toda mi confianza en Ti.{'\n'}
            Y que obedezca a otros por amor a Ti.{'\n'}
            Que a nada dé importancia sino tan sólo a Ti.{'\n'}
            Que quiera ser pobre por amor a Ti.{'\n'}
            Mírame, para que sólo te ame a Ti.{'\n'}
            Llámame, para que sólo te busque a Ti.{'\n'}
            Y concédeme la gracia{'\n'}
            de gozar para siempre de Ti. Amén.
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
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#000000',
  },
}); 