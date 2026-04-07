import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function MesMariaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Mes de María',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Mes de María</Text>
          <Text style={styles.subtitulo}>Del 8 de noviembre al 8 de diciembre de cada año</Text>

          <Text style={styles.subtitulo}>Oración Inicial</Text>

          <Text style={styles.oracion}>
            Oh María, durante el bello mes que te está consagrado, 
            todo resuena con tu nombre y alabanza! 
            Tu santuario resplandece con nuevo brillo y nuestras manos te han elevado a un trono de gracia y amor, 
            desde donde presides nuestras fiestas y escuchas nuestras oraciones y votos. 
            Para honrarte hemos esparcido frescas flores a tus pies y tu vuestro frente con guirnaldas y coronas. 
            Más ¡Oh María! no te das por satisfecha con estos homenajes; 
            hay flores cuya frescura y lozanía jamás pasan y coronas que no se marchitan. 
            Estas son las que tu esperas de tus hijos; porque el más hermoso adorno de una madre es la piedad de sus hijos; 
            y la más bella corona que pueden deponer a sus pies es la de sus virtudes. 
            Sí, los lirios que tu nos pides son la inocencia de nuestros corazones, 
            nos esforzaremos, pues, durante el curso de este mes consagrado a tu gloria, oh Virgen Santa, 
            en conservar nuestras almas puras y sin manchas y en separar de nuestros pensamientos, 
            deseos y miradas aun la sombra misma del mal; la rosa cuyo brillo agrada a tus ojos es la caridad, 
            el amor a Dios y a nuestros hermanos nos amaremos, pues, los unos a los otros, 
            como hijos de una misma familia cuya madre eres, viviendo todos en la dulzura de una concordia fraternal. 
            En este mes bendito procuraremos cultivar en nuestros corazones la humildad, 
            modesta flor que te es tan querida, y con tu auxilio llegaremos a ser puros, humildes, caritativos, pacientes y resignados. 
            ¡Oh María! Haz producir en el fondo de nuestros corazones todas estas amables virtudes.
          </Text>

          <Text style={styles.oracion}>
            Que ellas broten, florezcan y den al fin frutos de gracia, 
            para poder ser algún día dignos hijos de la más santa y la mejor de las madres. Amén.
          </Text>

          <Text style={styles.subtitulo}>Oración final</Text>

          <Text style={styles.oracion}>
            ¡Oh María!, Madre de Jesús, nuestro Salvador y nuestra buena Madre! 
            Nosotros venimos a ofrecerte, con estos obsequios que colocamos a tus pies, 
            nuestros corazones, deseosos de serte agradables, 
            y a solicitar de tu bondad un nuevo ardor en tu santo servicio. 
            Dígnate presentarnos a tu Divino Hijo, que en vista de sus méritos y a nombre de su Santa Madre, 
            dirija nuestros pasos por el sendero de la virtud, 
            que haga lucir con nuevo esplendor la luz de la fe sobre los infortunados pueblos que gimen por tanto tiempo en las tinieblas del error, 
            que vuelvan hacia Él, y cambie tantos corazones rebeldes, cuya penitencia regocijará su corazón y el tuyo. 
            Que convierta a los enemigos de su Iglesia y que en fin, encienda por todas partes el fuego de su ardiente caridad, 
            que nos colme de alegría en medio de las tribulaciones de esta vida, y de esperanza para el porvenir. Amén.
          </Text>

          <Text style={styles.cita}>
            "Dios quiere que no tengamos nada que no pase por manos de María" —(San Bernardo)
          </Text>

          <Text style={styles.cita}>
            "Es el mes en que, en los templos y en las casas particulares, sube a María desde el corazón de los cristianos el más ferviente y afectuoso homenaje de su oración y veneración. Es también el mes en el que desde su trono descienden hasta nosotros los dones más generosos y abundantes de la Divina Misericordia". (San Pablo VI, Mense Maio)
          </Text>

          <Text style={styles.cita}>
            "El mes de mayo nos estimula a pensar y a hablar de modo particular de Ella. En efecto, este es su mes. Así pues, el período del año litúrgico [Resurrección], y el corriente mes llaman e invitan nuestros corazones a abrirse de manera singular a María". (San Juan Pablo II, Mayo 1979)
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  cita: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: Colors.primary,
    fontStyle: 'italic',
  },
}); 