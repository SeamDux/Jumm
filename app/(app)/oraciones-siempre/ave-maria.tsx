import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function AveMariaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ave María',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Ave María</Text>

          <Text style={styles.introText}>
          “Dios te salve, María. ‘Alégrate, María’. El saludo del ángel
          Gabriel abre la oración del Avemaría. Es Dios mismo quien por
          mediación de su ángel, saluda a María. Nuestra oración se atreve
          a recoger el saludo a María con la mirada que Dios ha puesto
          sobre su humilde esclava y a alegramos con el gozo que Dios
          encuentra en ella.{"\n\n"}
          “Llena de gracia, el Señor es contigo”:  María es la llena de gracia
          porque el Señor está con ella. La gracia de la que está colmada es
          la presencia de Aquel que es la fuente de toda gracia.{"\n\n"}
          “Bendita tú eres entre todas las mujeres y bendito es el fruto de
          tu vientre, Jesús”. Después del saludo del ángel, hacemos nuestro
          el de Isabel. “Llena del Espíritu Santo”, Isabel es la primera en
          la larga serie de las generaciones que llaman bienaventurada a
          María: “Bienaventurada la que ha creído...”: María es “bendita
          entre todas las mujeres” porque ha creído en el cumplimiento de
          la palabra del Señor.{"\n\n"}
          “Santa María, Madre de Dios, ruega por nosotros...” Con Isabel,
          nos maravillamos y decimos: “¿De dónde a mí que la madre de
          mi Señor venga a mí?”. Porque nos da a Jesús su hijo, María es
          madre de Dios y madre nuestra; podemos confiarle todos nuestros
          cuidados y nuestras peticiones: ora por nosotros como ella oró
          por sí misma: “Hágase en mí según tu palabra”. Confiándonos
          a su oración, nos abandonamos con ella en la voluntad de Dios:
          “Hágase tu voluntad”.{"\n\n"}

          “Ruega por nosotros, pecadores, ahora y en la hora de nuestra
          muerte”. Pidiendo a María que ruegue por nosotros, nos reconocemos
          pecadores y nos dirigimos a la “Madre de la Misericordia”, a la
          Virgen Santísima. Nos ponemos en sus manos “ahora”, en el hoy
          de nuestras vidas. Y nuestra confianza se ensancha para entregarle
          desde ahora, “la hora de nuestra muerte”. Que esté presente en
          esa hora, como estuvo en la muerte en Cruz de su Hijo y que en
          la hora de nuestro tránsito nos acoja como madre nuestra para
          conducirnos a su Hijo Jesús, al Paraíso. (Cf. CEC 2676-2677)
          </Text>


          <Text style={styles.prayer}>
            Dios te salve, María, llena eres de gracia; el Señor es contigo. 
            Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.{"\n"}
            Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.
          </Text>

          <Text style={styles.title}>En latín</Text>
          <Text style={styles.prayer}>
          Ave María, gratia plena,
          Dominus tecum, benedicta tu
          in muliéribus, et benedictus
          fructus ventris tui Iesus.{"\n"}
          Sancta Maria,Mater Dei,
          ora pro nobis peccatoribus,
          nunc et in ora mortis nostrae.
          Amen.
          </Text>

          <Text style={styles.title}>Oh Señora mia!</Text>
          <Text style={styles.prayer}>
          ¡Oh, Señora mía! ¡Oh, Madre mía! Yo me ofrezco todo a
          ti y en prueba de mi filial afecto te consagro en este día, mis
          ojos, mis oídos, mi lengua, mi corazón; en una palabra, todo
          mi ser. Ya que soy todo tuyo, Madre compasiva, guárdame y
          defiéndeme como a pertenencia y posesión tuya. Amén.
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
    fontSize: 18,
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
}); 