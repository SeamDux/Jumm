import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function AlmaCristoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Alma de Cristo (San Ignacio de Loyola)',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Alma de Cristo (San Ignacio de Loyola)</Text>
          <Text style={styles.prayer}>
            Alma de Cristo, santifícame.{"\n"}
            Cuerpo de Cristo, sálvame.{"\n"}
            Sangre de Cristo, embriágame.{"\n"}
            Agua del costado de Cristo, lávame.{"\n"}
            Pasión de Cristo, confórtame.{"\n"}
            ¡Oh, buen Jesús!, óyeme.{"\n"}
            Dentro de tus llagas, escóndeme.{"\n"}
            No permitas que me aparte de Ti.{"\n"}
            Del maligno enemigo, defiéndeme.{"\n"}
            En la hora de mi muerte, llámame.{"\n"}
            Y mándame ir a Ti.{"\n"}
            Para que con tus santos te alabe.{"\n"}
            Por los siglos de los siglos. Amén.
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