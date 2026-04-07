import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CrucifijoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración ante el Crucifijo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración ante el Crucifijo</Text>
          <Text style={styles.prayer}>
            Mírame, ¡oh, mi amado y buen Jesús!,{"\n"}
            postrado en tu presencia;{"\n"}
            te ruego con el mayor fervor{"\n"}
            imprimas en mi corazón{"\n"}
            vivos sentimientos de fe, esperanza y caridad,{"\n"}
            verdadero dolor de mis pecados{"\n"}
            y firmísimo propósito de jamás ofenderte;{"\n\n"}
            mientras que yo,{"\n"}
            con el mayor afecto y compasión de que soy capaz,{"\n"}
            voy considerando y contemplando{"\n"}
            tus cinco llagas,{"\n"}
            teniendo presente lo que de Ti,{"\n"}
            mi buen Jesús,{"\n"}
            dijo el Profeta David:{"\n"}
            "Han taladrado mis manos y mis pies{"\n"}
            y se pueden contar todos mis huesos". (Salmo 21, 17-18)
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