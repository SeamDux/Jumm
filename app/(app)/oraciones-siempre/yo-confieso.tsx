import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function YoConfiesoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Yo Confieso',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Yo Confieso</Text>
          <Text style={styles.prayer}>
            Yo confieso ante Dios Todopoderoso, y ante ustedes hermanos, que he pecado mucho, de pensamiento, palabra, obra y omisión. Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a Santa María siempre Virgen, a los ángeles, a los santos y a ustedes hermanos, que intercedan por mí ante Dios, Nuestro Señor. Amén.
          </Text>
          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
          Confíteor Deo omnipoténti,
          et vobis, fratres: quia peccávi
          nimis cogitatióne, verbo, ópere
          et omissióne.
          Mea culpa, mea culpa, mea
          máxima culpa.
          Ídeo precor beatam
          Maríam semper Vírginem,
          omnes Ángelos et Sanctos, et
          vos, fratres, oráre pro me ad
          Dóminum Deum nostrum.
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
    fontStyle:"italic",
  },
  introText: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
}); 