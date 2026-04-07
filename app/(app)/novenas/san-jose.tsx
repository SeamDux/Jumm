import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';
import { ThemedText } from '../../../components/ThemedText';

export default function NovenaSanJoseScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Novena a San José',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Novena a San José</Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Oración Preparatoria</ThemedText>
            <Text style={styles.prayer}>
              Salve, custodio del Redentor{'\n'}
              y esposo de la Virgen María.{'\n'}
              A ti Dios confió a su Hijo,{'\n'}
              en ti María depositó su confianza,{'\n'}
              contigo Cristo se forjó como hombre.{'\n'}
              Oh, bienaventurado José,{'\n'}
              muéstrate padre también a nosotros{'\n'}
              y guíanos en el camino de la vida.{'\n'}
              Concédenos gracia, misericordia y valentía,{'\n'}
              y defiéndenos de todo mal.{'\n'}
              Amén. (Patris corde)
            </Text>
            <Text style={styles.prayerNote}>Pídase con fervor y confianza la gracia que se desea obtener.</Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día primero</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como consolaste a tu padre amado en las perplejidades e incertidumbres que tuvo, dudando en abandonar a tu Santísima Madre su esposa, así te suplicamos humildemente por intercesión de San José nos concedas mucha prudencia y acierto en todos los casos dudosos y angustias de nuestra vida, para que siempre acertemos con tu santísima voluntad.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día segundo</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como consolaste a tu padre amado en la pobreza y desamparo de Belén, con tu nacimiento y con los cánticos de los Ángeles y visitas de los pastores, así también te suplicamos humildemente por intercesión de San José, que nos concedas llevar con paciencia nuestra pobreza y desamparo en esta vida, y que alegres nuestro espíritu con tu presencia y tu gracia, y la esperanza de la gloria.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día tercero</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como consolaste a tu amado padre en el doloroso misterio de la Circuncisión, recibiendo de él el dulce nombre de Jesús, así te suplicamos humildemente, por intercesión de San José, nos concedas pronunciar siempre con amor y respeto tu santísimo nombre, llevarlo en el corazón, honrarlo en la vida, y proclamar con obras y palabras que tú fuiste nuestro Salvador y Jesús.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día cuarto</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como consolaste a tu padre amado de la pena que le causó la profecía de Simeón, mostrándole el innumerable coro de los Santos, así te suplicamos humildemente, por intercesión de San José que nos concedas la gracia de ser de aquellos para quienes tú sirves, no de ruina, sino de resurrección, y que correspondamos fielmente a tu gracia para que vayamos a tu gloria.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día quinto</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como al amado padre te redujiste de Belén a Egipto para librarte del tirano Herodes, así te suplicamos humildemente, por intercesión de San José, que nos libres de los que quieren dañar nuestras almas o nuestros cuerpos, nos des fortaleza y salvación en nuestras persecuciones, y en medio del destierro de esta vida nos protejas hasta que volvamos a la patria celestial.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día sexto</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como tu padre amado te sustentó en Nazaret, y en cambio tú le premiaste en tu santísima compañía tantos años, con tu doctrina y tu dulce conversación, así te rogamos humildemente, por intercesión de San José nos concedas el sustento espiritual de tu gracia, y de tu santa comunión, y que vivamos santa y modestamente, como tú en Nazaret.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día séptimo</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como por seguir la voluntad de tu padre celestial permitiste que tu amado padre en la tierra padeciese el vehementísimo dolor de perderte por tres días, así te suplicamos humildemente, por intercesión de San José, que antes queramos perder todas las cosas y disgustar a cualquier amigo, que dejar de hacer tu voluntad; que jamás te perdamos a ti por el pecado mortal, o que si por desgracia te perdiésemos te hallemos mediante una buena confesión.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día octavo</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, que en la hora de su muerte consolaste a tu glorioso padre, asistiendo juntamente con tu Madre su esposa a su última agonía, te suplicamos humildemente, por intercesión de San José, que nos concedas una muer- te semejante a la suya asistido de tu bondad, de tu Santísima Madre y del mismo glorioso Patriarca protector de los moribundos, pronunciando al morir vuestros santísimos nombres, Jesús, María y José.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Día noveno</ThemedText>
            <Text style={styles.prayer}>
              Oh benignísimo Jesús, así como has elegido por medio de tu Vicario en la tierra a tu amado padre por protector de la Santa Iglesia Católica, así te suplicamos humildemente por intercesión de San José, nos concedas el que seamos verdaderos y sinceros católicos, que profesemos sin error la fe católica, que vivamos sin miedo una vida digna de la fe que profesamos, y que jamás puedan los enemigos ni aterrarnos con persecuciones, ni con engaños seducirnos y apartarnos de la única y verdadera religión que es la Católica.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Oración final</ThemedText>
            <Text style={styles.subtitle}>(Para todos los días)</Text>
            <Text style={styles.prayer}>
              Jesús, José y María, os doy mi corazón y el alma mía{'\n'}
              Jesús, José y María, asistidme en mi última agonía.{'\n'}
              Jesús, José y María, con Vos descanse en paz el alma mía Amén.
            </Text>
            <Text style={styles.prayerNote}>Padrenuestro, Avemaría y Gloria.</Text>
          </View>

          <View style={styles.sectionCard}>
            <ThemedText type="subtitle">Himno</ThemedText>
            <Text style={styles.prayer}>
              Este es el varón justo,{'\n'}
              le amó el Señor,{'\n'}
              y dio el ciento por uno{'\n'}
              su labor.{'\n\n'}
              Humilde magisterio{'\n'}
              bajo el que Dios aprende:{'\n'}
              ¡Qué diga, si lo entiende,{'\n'}
              quien sepa de misterio!{'\n'}
              Si Dios es cautiverio{'\n'}
              se queda en aprendiz,{'\n'}
              aprende aquí la casa de David!{'\n\n'}
              Sencillo, sin historia,{'\n'}
              de espalda a los laureles,{'\n'}
              escalas los niveles{'\n'}
              más altos de la gloria.{'\n'}
              ¡Qué asombroso, hacer memoria,{'\n'}
              y hallarte a tu ascensión{'\n'}
              tu hogar, tu oficio y Dios como razón!{'\n\n'}
              Y, pues que el mundo entero{'\n'}
              te mira y se pregunta,{'\n'}
              di tú como se junta{'\n'}
              ser santo y carpintero,{'\n'}
              la gloria y el madero,{'\n'}
              la gracia y el afán,{'\n'}
              tener propicio a Dios y escaso el pan.
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