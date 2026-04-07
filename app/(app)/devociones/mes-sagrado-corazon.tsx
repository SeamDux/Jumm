import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function MesSagradoCorazon() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: 'Mes del Sagrado Corazón',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={[styles.title, { marginTop: 70 }]}>Oración para todos los días del mes</Text>
            <Text style={styles.text}>
              Rendido a vuestros pies, ¡oh Jesús mío!, considerando las inefables muestras de amor que me habéis dado y las sublimes lecciones que me enseña de continuo vuestro adorabilísimo Corazón, os pido humildemente la gracia de conoceros, amaros y serviros como fiel dicípulo vuestro para hacerme digno de las mercedes y bendiciones que, generoso, concedéis a los que de veras os conocen, aman y sirven.
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>¡Mirad que soy muy pobre, dulcísimo Jesús,</Text> y necesito de Vos como el mendigo de la limosna que el rico le ha de dar!
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>¡Mirad que soy muy rudo, oh soberano Maestro!,</Text> y necesito de vuestras divinas enseñanzas, para luz y guía de mi ignorancia!
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>¡Mirad que soy muy débil, oh poderosísimo amparo de los frágiles,</Text> y caigo a cada paso y necesito apoyarme en Vos, para no desfallecer.
              {'\n\n'}
              Sedlo todo para mí, Sagrado Corazón; socorro de mi miseria, lumbre de mis ojos, báculo de mis pasos, remedio de mis males, auxilio en toda necesidad.
              {'\n\n'}
              De Vos lo espera todo mi pobre corazón. Vos lo alentasteis y convidasteis, cuando con tan tiernos acentos dijisteis repetidas veces en vuestro Evangelio: "Venid a mí, aprended de mí, pedid, llamad..."
              {'\n\n'}
              A las puertas de vuestro Corazón vengo, pues hoy, y llamo y pido y espero. Del mío os hago, ¡oh Señor!, firme, formal y decidida entrega. Tomadlo Vos, y dadme en cambio lo que sabéis me ha de hacer bueno en la tierra y dichoso en la eternidad.
              {'\n\n'}
              <Text style={{textAlign: 'center', fontStyle: 'italic'}}>Amén</Text>
            </Text>

            <Text style={[styles.title, { marginTop: 30 }]}>Oración Final</Text>
            <Text style={styles.text}>
              <Text style={{fontWeight: 'bold'}}>¡Oh Jesús!</Text> Yo os consagro mi corazón, colocadle en el vuestro, pues sólo en él quiero vivir y sólo a él quiero amar; en vuestro Corazón quiero vivir desconocido del mundo y conocido de Vos solo.
              {'\n\n'}
              En este Corazón beberé los ardores del amor que consumirán el mío; en Él encontraré la fuerza, la luz, el valor y el verdadero consuelo. Cuando el mío esté desfallecido, él me reanimará; cuando inquieto y turbado, él me tranquilizará.
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>¡Oh Corazón de Jesús!</Text> Haced que mi corazón sea el altar de vuestro amor; que mi lengua publique vuestra bondad, que mis ojos estén siempre clavados en vuestra llaga; que mi espíritu medite vuestras adorables perfecciones.
              {'\n\n'}
              Que mi memoria conserve siempre el precioso recuerdo de vuestras misericordias; que todo en mí exprese mi amor a vuestro Corazón, ¡oh Jesús! Y mi corazón esté siempre pronto a sacrificarlo todo por Vos.
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>¡Oh Corazón de María!</Text>, el más amable después del de Jesús, el más compasivo, el más misericordioso de todos los corazones, presentad a vuestro Hijo nuestra consagración, nuestro amor, nuestras resoluciones.
              {'\n\n'}
              Él se enternecerá a la vista de tantas miserias y nos librará de ellas; y después de haber sido nuestro refugio y nuestra protectora sobre la tierra, ¡oh Madre de Jesús! Seréis nuestra Reina en el cielo.
              {'\n\n'}
              <Text style={{textAlign: 'center', fontStyle: 'italic'}}>Amén</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    flex: 1,
    padding: 20,
  },
  content: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
    color: '#333',
  },
});
