import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SanMiguelScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración a San Miguel Arcángel',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración a San Miguel Arcángel</Text>
          <Text style={styles.prayer}>
            San Miguel Arcángel, defiéndenos en la batalla;{"\n"}
            sé nuestro amparo contra la perversidad y asechanzas del demonio: Reprímale{"\n"}
            Dios, pedimos suplicantes, y tú, Príncipe de la milicia celestial,{"\n"}
            arroja al infierno, con el divino poder, a Satanás y a los otros{"\n"}
            espíritus malignos que andan dispersos por el mundo para la{"\n"}
            perdición de las almas. Amén.
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