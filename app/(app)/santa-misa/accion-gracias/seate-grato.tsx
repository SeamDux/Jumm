import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SeateGratoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Séate Grato (para sacerdotes)',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Séate Grato (para sacerdotes)</Text>
          <Text style={styles.prayer}>
            Séate grato, ¡oh Trinidad Santa!,{"\n"}
            el obsequio de tu siervo,{"\n"}
            y haz que el sacrificio que yo, indigno,{"\n"}
            he ofrecido a los ojos de tu majestad,{"\n"}
            sea de tu agrado,{"\n"}
            y para mí, y para todos aquellos{"\n"}
            por quienes lo he ofrecido,{"\n"}
            sea, por tu misericordia, propiciatorio.{"\n"}
            Por Cristo nuestro Señor. Amén.
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