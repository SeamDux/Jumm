import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function NovenaNinoDiosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Novena al Niño Dios',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Al Niño Dios</Text>
            <Text style={styles.subtitle}>(nueve días ante de la Navidad)</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración para todos los días</Text>
            <Text style={styles.prayer}>
              Benignísimo Dios de infinita caridad, que tanto amasteis a los hombres, que les disteis en vuestro Hijo la prenda de vuestro amor, para que hecho hombre en las entrañas de una Virgen naciese en un pesebre para nuestra salud y remedio; yo, en nombre de todos los mortales, os doy infinitas gracias por tan soberano beneficio.{'\n\n'}
              En retorno de él os ofrezco la pobreza, humildad y demás virtudes de vuestro Hijo humanado, suplicándoos por sus divinos méritos, por las incomodidades en que nació y por las tiernas lágrimas que derramó en el pesebre, que dispongáis nuestros corazones con humildad profunda, con amor encendido, con tal desprecio de todo lo terreno, para que Jesús recién nacido tenga en ellos su cuna y more eternamente.
            </Text>
            <Text style={styles.prayerNote}>(Se reza el Padre Nuestro)</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración a la Virgen</Text>
            <Text style={styles.prayer}>
              Soberana María que por vuestras grandes virtudes y especialmente por vuestra humildad, merecisteis que todo un Dios os escogiese por madre suya, os suplico que vos misma preparéis y dispongáis mi alma y la de todos los que en este tiempo hiciesen esta novena, para el nacimiento espiritual de vuestro adorado Hijo. ¡Oh dulcísima madre!, comunicadme algo del profundo recogimiento y divina ternura con que lo aguardasteis vos, para que nos hagáis menos indignos de verle, amarle y adorarle por toda la eternidad. Amén.
            </Text>
            <Text style={styles.prayerNote}>(Se reza el Avemaría)</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración a San José</Text>
            <Text style={styles.prayer}>
              ¡Oh santísimo José, esposo de María y padre adoptivo de Jesús! Infinitas gracias doy a Dios porque os escogió para tan soberanos misterios y os adornó con todos los dones proporcionados a tan excelente grandeza. Os ruego, por el amor que tuvisteis al Divino Niño, me abracéis en fervorosos deseos de verle y recibirle sacramentalmente, mientras en su divina esencia le veo y le gozo en el cielo. Amén.
            </Text>
            <Text style={styles.prayerNote}>(Se reza un Gloria)</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración al Niño Jesús</Text>
            <Text style={styles.prayer}>
              Acordaos, ¡oh dulcísimo Niño Jesús!, que dijisteis estas palabras tan consoladoras para nuestra pobre humanidad agobiada y doliente: "Todo lo que quieras pedir, pídelo por los méritos de mi infancia y nada te será negado". Llenos de confianza en vos, ¡oh Jesús!, que sois la misma verdad, venimos a exponeros toda nuestra miseria. Ayudadnos a llevar una vida santa, para conseguir una eternidad bienaventurada. Concedednos por los méritos infinitos de vuestra infancia, la gracia de la cual necesitamos tanto. Nos entregamos a vos, ¡oh Niño omnipotente!, seguros de que no quedará frustrada nuestra esperanza, y de que, en virtud de vuestra divina promesa, acogeréis y despacharéis favorablemente nuestra súplica. Amén.
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.primary,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  sectionCard: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 15,
  },
  prayerNote: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 