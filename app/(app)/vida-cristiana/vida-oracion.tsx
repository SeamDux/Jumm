import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VidaOracionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vida de oración, sacrificio y trabajo',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Vida de oración, sacrificio y trabajo</Text>
          </View>

          {/* Sección de Vida de Oración */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Vida de Oración</Text>
            <Text style={styles.quote}>"Conviene orar en todo tiempo y no desfallecer" (Lucas, 18,1)</Text>
            
            <View style={styles.card}>
              <Text style={styles.text}>
                "Si Dios es para nosotros vida, no debe extrañarnos que nuestra existencia de cristianos haya de estar entretejida en oración. Pero no penséis que la oración es un acto que se cumple y luego se abandona". (San Josemaría Escrivá, Es Cristo que pasa, 119).
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.text}>
                "El justo encuentra en la ley de Yahvé su complacencia y tiende a acomodarse a esa ley durante el día y durante la noche. Por la mañana pienso en ti; y por la tarde, se dirige hacia ti mi oración como el incienso. Toda la jornada puede ser tiempo de oración: de la noche a la mañana y de la mañana a la noche. Más aún: como nos recuerda la Escritura Santa, también el sueño debe ser oración". (Ibid)
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.text}>
                "La vida de oración ha de fundamentarse además en algunos ratos diarios, dedicados exclusivamente al trato con Dios: momentos de coloquio sin ruido de palabras, junto al Sagrario siempre que sea posible, para agradecer al Señor esa espera —¡tan solo!— desde hace veinte siglos. Oración mental es ese diálogo con Dios, de corazón a corazón, en el que interviene toda el alma: la inteligencia y la imaginación, la memoria y la voluntad. Una meditación que contribuye a dar valor sobrenatural a nuestra pobre vida humana, nuestra vida diaria corriente". (Ibid)
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.text}>
                "Aprendemos a orar en nuestra existencia recibiendo la palabra del Señor y participando en su Misterio Pascual; pero, en todo tiempo, en los acontecimientos de cada día, su Espíritu se nos ofrece para que brote la oración".
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.text}>
                "La enseñanza de Jesús sobre la oración a nuestro Padre está en la misma línea que la de la Providencia: el tiempo está en las manos del Padre; lo encontramos en el presente, ni ayer ni mañana, sino hoy: ¡Ojalá oyerais hoy su voz! No endurezcáis vuestro corazón". (Mateo, 16,24) (CEC 2569).
              </Text>
            </View>
          </View>

          {/* Sección de Vida de Sacrificio */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Vida de Sacrificio</Text>
            <Text style={styles.quote}>"Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz y sígame". (Mt. 16,24)</Text>

            <View style={styles.card}>
              <Text style={styles.text}>
                "El camino de la perfección pasa por la cruz. No hay santidad sin renuncia y sin combate espiritual. El progreso espiritual implica la lucha y la mortificación, que conducen gradualmente a vivir en la paz y el gozo de las bienaventuranzas: 'El que asciende no cesa nunca de ir de comienzo en comienzo mediante comienzos que no tienen fin. Jamás el que asciende cesa de desear lo que ya conoce.'" (CEC 2015).
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.text}>
                El Rey David es en este salmo el modelo de arrepentimiento. Tras haber cometido crímenes contra su prójimo, los confiesa como pecados ante Dios con arrepentimiento sincero: "contra Ti solo he pecado". Desde el fondo de su corazón desea cambiar radicalmente su vida, e implora a Dios que no le niegue su amistad. Promete mostrar su agradecimiento sirviendo al Señor continuamente y enseñando a otros los Caminos Divinos, para que ellos también cumplan en todo la voluntad de Dios.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.text}>
                "Oigamos al Señor, que nos dice: quien es fiel en lo poco, también lo es en lo mucho, y quien es injusto en lo poco, también lo es en lo mucho. Es como si Dios nos recordara: lucha cada instante en esos detalles en apariencia menudos, pero grandes a mis ojos: amor puntual al cumplimiento del deber; sonríe a quien lo necesite, aunque tú tengas el alma dolorida; dedica, sin regateo, el tiempo necesario a la oración; acude en ayuda de quien te busca; practica la justicia, ampliándola con la gracia de la caridad". (San Josemaría Escrivá, Es Cristo que pasa, 77).
              </Text>
            </View>
          </View>

          {/* Sección de Vida de Trabajo */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Vida de Trabajo</Text>
            <Text style={styles.quote}>"Sean fecundos, multiplíquense, llenen la tierra y sométanla; dominen a los peces del mar, a las aves del cielo y a todos los vivientes que se mueven sobre la tierra" (Gen. 1,28)</Text>

            <View style={styles.card}>
              <Text style={styles.text}>
                "El trabajo humano procede directamente de personas creadas a imagen de Dios y llamadas a prolongar, unidas y para mutuo beneficio, la obra de la creación, dominando la tierra. El trabajo es, por tanto, un deber: 'Si alguno no quiere trabajar, que tampoco coma'. El trabajo honra los dones del Creador y los talentos recibidos. Puede ser también redentor. Soportando el peso del trabajo, en unión con Jesús, el carpintero de Nazaret y el crucificado del Calvario, el hombre colabora en cierta manera con el Hijo de Dios en su obra redentora. Se muestra como discípulo de Cristo llevando la Cruz cada día, en la actividad que está llamado a realizar. El trabajo puede ser un medio de santificación y de animación de las realidades terrenas en el espíritu de Cristo." (CEC 2427)
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.text}>
                "En el trabajo, la persona ejerce y aplica una parte de las capacidades inscritas en su naturaleza. El valor primordial del trabajo pertenece al hombre mismo, que es su autor y su destinatario. El trabajo es para el hombre y no el hombre para el trabajo." (CEC 2428).
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
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
    marginBottom: 10,
    textAlign: 'center',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
}); 