import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SanJoseScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración a San José',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración a San José</Text>
          <Text style={styles.prayer}>
            Custodio y padre de vírgenes, San José,{"\n"}
            a cuya fiel custodia fueron encomendadas{"\n"}
            la misma inocencia, Cristo Jesús,{"\n"}
            y la Virgen de las vírgenes, María.{"\n"}
            Por estas dos queridísimas prendas,{"\n"}
            Jesús y María,{"\n"}
            te ruego y te suplico me alcances que,{"\n"}
            preservado de toda impureza,{"\n"}
            sirva siempre con alma limpia,{"\n"}
            corazón puro y cuerpo casto{"\n"}
            a Jesús y a María. Amén.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#222',
  },
}); 