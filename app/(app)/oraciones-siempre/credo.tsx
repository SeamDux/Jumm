import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CredoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Credo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Credo</Text>
          <Text style={styles.context}>Se reza en Domingos y Solemnidades</Text>
          <Text style={styles.prayer}>
            Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.
          </Text>

          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
          Credo in Deum Patrem omnipotentem,
          Creatorem caeli et terrae.
          Et in Iesum Christum,
          Filium eius unicum, Dominum nostrum,
          qui conceptus est de Spiritu Sancto,
          natus ex Maria Virgine,
          passus sub Pontio Pilato,
          crucifixus, mortuus, et sepultus, descendit ad inferos,
          tertia die resurrexit a mortuis, ascendit ad caelos,
          sedet ad dexteram Dei Patris omnipotentis,
          inde venturus est iudicare vivos et mortuos.
          Credo in Spiritum Sanctum,
          sanctam Ecclesiam catholicam,
          sanctorum communionem,
          remissionem peccatorum,
          carnis resurrectionem, vitam aeternam.
          Amen.
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
    fontStyle: 'italic',
  },
  introText: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'justify',
    marginBottom: 20,
    lineHeight: 24,
  },
  context: {
    fontSize: 16,
    color: Colors.primary,
    backgroundColor: '#f3f3f3',
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    padding: 12,
    marginBottom: 20,
    fontStyle: 'italic',
  },
}); 