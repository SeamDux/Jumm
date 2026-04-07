import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VidaEspiritualScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'La vida espiritual',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>La vida espiritual</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Lo primero que hemos de hacer para ser buenos cristianos es procurar vivir en gracia de Dios, evitando para ello todo pecado mortal; y como queremos amar a Dios sobre todas las cosas, trataremos incluso de evitar todo pecado venial.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              La práctica de algunos actos de piedad nos ayudará a tener una vida contemplativa en medio de los quehaceres ordinarios. Un plan de vida cristiana vivido con seriedad e interés puede ser el medio para conseguir que nuestra vida no sea inútil ni estéril, de tal manera que vivieramos como verdaderos hijos de Dios.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Cada día, en la semana, en el mes, en el año</Text>
            
            <Text style={styles.subTitle}>Cada día</Text>
            <View style={styles.bulletCard}>
              <Text style={styles.bulletTitle}>• Oración</Text>
              <Text style={styles.text}>
                Sagrado Corazón De Jesús, por medio del Corazón Inmaculado de María Santísima, yo me consagro a ti y consigo me ofrezco a Dios Padre en tu santo sacrificio del altar, con todos mis trabajos, oraciones, sufrimientos y alegrías de este día, en reparación por nuestros pecados y para que venga a nosotros tu Reino.
              </Text>
            </View>

            <View style={styles.bulletCard}>
              <Text style={styles.bulletTitle}>• Ofrecimiento de sí mismo</Text>
              <Text style={styles.text}>
                Toma, Señor, y recibe mi libertad, mi memoria, mi entendimiento y toda mi voluntad, todo mi haber y mi poder. Tú me lo diste, a Ti, Señor, lo torno; todo es tuyo: dispon de ello conforme a tu voluntad. Dame tu amor y gracia, que esto me basta. (San Ignacio de Loyola).
              </Text>
            </View>

            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Tener una hora para acostarse y para levantarse.</Text>
              <Text style={styles.bulletItem}>• Ofrecer a Dios el trabajo de la jornada bajo la intercesión de la Virgen María.</Text>
              <Text style={styles.bulletItem}>• Hacer un rato de oración mental (15 minutos). De preferencia antes de la Misa.</Text>
              <Text style={styles.bulletItem}>• Asistir a la Santa Misa y recibir la comunión siempre que sea posible. Es el mejor sacrificio que se puede ofrecer a Dios.</Text>
              <Text style={styles.bulletItem}>• Al mediodía: rezar el Angelus (durante el tiempo pascual el Regina Caeli).</Text>
              <Text style={styles.bulletItem}>• Rezar el Santo Rosario, si es posible en familia.</Text>
              <Text style={styles.bulletItem}>• Leer durante unos minutos, meditándolo, el Nuevo Testamento o un libro espiritual.</Text>
              <Text style={styles.bulletItem}>• Antes de retirarse a descansar, dedicar unos minutos a examinar brevemente cómo ha ido el día.</Text>
              <Text style={styles.bulletItem}>• Trabajar con intensidad. La santificación del trabajo ordinario es la meta primordial del cristiano.</Text>
            </View>

            <Text style={styles.subTitle}>Cada semana</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• El domingo es el día del Señor. La Santa Misa debe ser el centro de la jornada. Es también un día dedicado especialmente a la familia, el descanso y el propio enriquecimiento espiritual.</Text>
              <Text style={styles.bulletItem}>• Si durante la semana no es posible recibir la comunión, será bueno hacerlo los domingos y días de precepto.</Text>
            </View>

            <Text style={styles.subTitle}>Cada mes</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Confesarse, con verdadero arrepentimiento, aunque no haya pecados mortales, para recibir la gracia sacramental.</Text>
              <Text style={styles.bulletItem}>• Recibir acompañamiento espiritual con una persona sabia, prudente y experimentada.</Text>
              <Text style={styles.bulletItem}>• Día de retiro espiritual: dedicar unas horas a considerar nuestra relación con Dios. Delante del Santísimo Sacramento siempre que sea posible.</Text>
            </View>

            <Text style={styles.subTitle}>Cada año</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Curso de retiro o ejercicios espirituales: dos o tres días en silencio, conversando a solas con Dios, son una gran oportunidad para una nueva conversión. El alma, como el cuerpo, necesita vacaciones.</Text>
            </View>

            <Text style={styles.subTitle}>En todo momento</Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>• Mantener la presencia de Dios con jaculatorias, comuniones espirituales y actos de amor y reparación.</Text>
              <Text style={styles.bulletItem}>• Considerar que somos hijos de Dios: tratar de agradarle en todo lo que hacemos, como un niño trata de agradar a su padre.</Text>
              <Text style={styles.bulletItem}>• Agradecer a Dios todo lo que nos da.</Text>
              <Text style={styles.bulletItem}>• Hacerlo todo por amor de Dios: purificar nuestra intención haciendo actos de contrición y desagravio por los pecados propios y ajenos.</Text>
              <Text style={styles.bulletItem}>• Tratar de vivir como nos hubiera gustado haberlo hecho a la hora de la muerte. Así no tendremos miedo a la muerte y moriremos de la misma manera que hayamos vivido.</Text>
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
  card: {
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
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  bulletCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  bulletTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  bulletList: {
    marginBottom: 15,
  },
  bulletItem: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
    paddingLeft: 15,
  },
}); 