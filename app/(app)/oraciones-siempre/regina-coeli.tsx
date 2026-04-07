import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function ReginaCoeliScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Regina Coeli',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Regina Coeli - Alégrate Reina del Cielo (Tiempo Pascual)</Text>
          <Text style={styles.prayer}>
            V. Alégrate, Reina del cielo; aleluya,{"\n"}
            R. Porque el que mereciste llevar en tu seno; aleluya,{"\n\n"}
            V. Ha resucitado, según predijo; aleluya,{"\n"}
            R. Ruega por nosotros a Dios; aleluya,{"\n\n"}
            V. Gózate y alégrate, Virgen María; aleluya,{"\n"}
            R. Porque ha resucitado Dios verdaderamente; aleluya.{"\n\n"}
            Oración{"\n\n"}
            Oh Dios, que por la resurrección de tu Hijo, nuestro Señor Jesucristo, te has dignado dar la alegría al mundo, concédenos que por su Madre, la Virgen María, alcancemos el gozo de la vida eterna. Por el mismo Cristo nuestro Señor. Amén.
          </Text>

          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
            V: Regina caeli, laetare,
            alleluia.{"\n"}
            R: Quia quem meruisti
            portare, alleluia.{"\n\n"}
            V: Resurrexit, sicut dixit,
            alleluia.{"\n"}
            R: Ora pro nobis Deum,
            alleluia.{"\n\n"}
            V: Gaude et laetare Virgo
            María, alleluia.{"\n"}
            R: Quia surrexit Dominus
            vere, alleluia.{"\n\n"}
            Oremus:{"\n\n"}
            Deus, qui per resurrectionem
            Filii tui, Domini nostri Iesu
            Christi, mundum laetificare
            dignatus es: praesta, quaesumus;
            ut, per eius Genetricem
            Virginem Mariam, perpetuae
            capiamus gaudia vitae.
            Per eundem Christum
            Dominum nostrum. Amen.
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
}); 