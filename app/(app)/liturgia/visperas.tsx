import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function VisperasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vísperas',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.mainTitle}>Oración de la tarde (Vísperas)</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Invocación inicial</Text>
            <Text style={styles.versiculo}>V. Dios mío ven en mi auxilio</Text>
            <Text style={styles.respuesta}>R. Señor, date prisa en socorrerme.</Text>
            <Text style={styles.text}>Gloria. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Himno</Text>
            <Text style={styles.text}>Dios de la luz, presencia ardiente</Text>
            <Text style={styles.text}>sin meridiano ni frontera:</Text>
            <Text style={styles.text}>vuelves la noche mediodía,</Text>
            <Text style={styles.text}>ciegas al sol con tu derecha.{'\n\n'}</Text>

            <Text style={styles.text}>Como columna de la aurora,</Text>
            <Text style={styles.text}>iba en la noche tu grandeza;</Text>
            <Text style={styles.text}>te vio el desierto, y destilaron</Text>
            <Text style={styles.text}>luz de tu gloria las arenas.{'\n\n'}</Text>

            <Text style={styles.text}>Cerró la noche sobre Egipto</Text>
            <Text style={styles.text}>como cilicio de tinieblas;</Text>
            <Text style={styles.text}>para tu pueblo amanecías</Text>
            <Text style={styles.text}>bajo los techos de las tiendas.{'\n\n'}</Text>

            <Text style={styles.text}>Eres la luz, pero en tu rayo</Text>
            <Text style={styles.text}>lanzas el día a la tiniebla:</Text>
            <Text style={styles.text}>ciegas los ojos del soberbio,</Text>
            <Text style={styles.text}>curas al pobre su ceguera.{'\n\n'}</Text>

            <Text style={styles.text}>Cristo Jesús, tú que trajiste</Text>
            <Text style={styles.text}>fuego a la entraña de la tierra,</Text>
            <Text style={styles.text}>guarda encendida nuestra lámpara</Text>
            <Text style={styles.text}>hasta la aurora de tu vuelta. Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Salmodia</Text>
            <Text style={styles.antifona}>Ant. 1: Desde Sión extenderá el Señor el poder de su cetro, y reinará eternamente. Aleluya.</Text>

            <Text style={styles.salmoTitle}>Salmo 109, 1-5. 7</Text>
            <Text style={styles.salmoSubtitle}>El Mesías, rey y sacerdote</Text>

            <Text style={styles.text}>Él debe reinar hasta poner todos sus</Text>
            <Text style={styles.text}>enemigos bajo sus pies. (1Co 15,25){'\n\n'}</Text>

            <Text style={styles.text}>Oráculo del Señor a mi Señor:</Text>
            <Text style={styles.text}>"Siéntate a mi derecha,</Text>
            <Text style={styles.text}>y haré de tus enemigos</Text>
            <Text style={styles.text}>estrado de tus pies."{'\n\n'}</Text>

            <Text style={styles.text}>Desde Sión extenderá el Señor</Text>
            <Text style={styles.text}>el poder de tu cetro:</Text>
            <Text style={styles.text}>somete en la batalla a tus enemigos.{'\n\n'}</Text>

            <Text style={styles.text}>"Eres príncipe desde el día de tu nacimiento,</Text>
            <Text style={styles.text}>entre esplendores sagrados;</Text>
            <Text style={styles.text}>yo mismo te engendré, como rocío,</Text>
            <Text style={styles.text}>antes de la aurora."{'\n\n'}</Text>

            <Text style={styles.text}>El Señor lo ha jurado y no se arrepiente:</Text>
            <Text style={styles.text}>"Tú eres sacerdote eterno</Text>
            <Text style={styles.text}>según el rito de Melquisedec."{'\n\n'}</Text>

            <Text style={styles.text}>El Señor a tu derecha, el día de su ira,</Text>
            <Text style={styles.text}>quebrantará a los reyes.{'\n\n'}</Text>

            <Text style={styles.text}>En su camino beberá del torrente,</Text>
            <Text style={styles.text}>por eso levantará la cabeza.</Text>

            <Text style={styles.antifona}>Ant. 1: Desde Sión extenderá el Señor el poder de su cetro, y reinará eternamente. Aleluya.</Text>

            <Text style={styles.antifona}>Ant. 2: En presencia del Señor se estremece la tierra. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.salmoTitle}>Salmo 113 A</Text>
            <Text style={styles.salmoSubtitle}>Israel librado de Egipto: las maravillas del éxodo</Text>

            <Text style={styles.text}>Reconoced que también vosotros,</Text>
            <Text style={styles.text}>los que renunciasteis al mundo, ha-</Text>
            <Text style={styles.text}>béis salido de Egipto. (S. Agustín){'\n\n'}</Text>

            <Text style={styles.text}>Cuando Israel salió de Egipto,</Text>
            <Text style={styles.text}>los hijos de Jacob de un pueblo balbuciente,</Text>
            <Text style={styles.text}>Judá fue su santuario,</Text>
            <Text style={styles.text}>Israel fue su dominio.{'\n\n'}</Text>

            <Text style={styles.text}>El mar, al verlos, huyó,</Text>
            <Text style={styles.text}>el Jordán se echó atrás;</Text>
            <Text style={styles.text}>los montes saltaron como carneros;</Text>
            <Text style={styles.text}>las colinas, como corderos.{'\n\n'}</Text>

            <Text style={styles.text}>¿Qué te pasa, mar, que huyes,</Text>
            <Text style={styles.text}>y a ti, Jordán, que te echas atrás?</Text>
            <Text style={styles.text}>¿Y a vosotros, montes, que saltáis como carneros;</Text>
            <Text style={styles.text}>colinas, que saltáis como corderos?{'\n\n'}</Text>

            <Text style={styles.text}>En presencia del Señor se estremece la tierra,</Text>
            <Text style={styles.text}>en presencia del Dios de Jacob;</Text>
            <Text style={styles.text}>que transforma las peñas en estanques,</Text>
            <Text style={styles.text}>el pedernal en manantiales de agua.</Text>

            <Text style={styles.antifona}>Ant. 2: En presencia del Señor se estremece la tierra. Aleluya.</Text>

            <Text style={styles.antifona}>Ant. 3: Reina el Señor, nuestro Dios, dueño de todo. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.italicText}>El cántico siguiente se dice con todos los Aleluya intercalados cuando el Oficio es cantado. Cuando el Oficio se dice sin canto es suficiente decir el Aleluya sólo al principio y al final de cada estrofa.</Text>

            <Text style={styles.salmoTitle}>Cántico Ap. 19, 1-2. 5-7</Text>
            <Text style={styles.salmoSubtitle}>Las bodas del cordero</Text>

            <Text style={styles.text}>Aleluya.</Text>
            <Text style={styles.text}>La salvación y la gloria y el poder son de nuestro Dios.</Text>
            <Text style={styles.respuesta}>(R. Aleluya)</Text>
            <Text style={styles.text}>Porque sus juicios son verdaderos y justos.</Text>
            <Text style={styles.respuesta}>R. Aleluya, (aleluya).{'\n\n'}</Text>

            <Text style={styles.text}>Aleluya.</Text>
            <Text style={styles.text}>Alabad al Señor, sus siervos todos.</Text>
            <Text style={styles.respuesta}>(R. Aleluya)</Text>
            <Text style={styles.text}>Los que le teméis, pequeños y grandes.</Text>
            <Text style={styles.respuesta}>R. Aleluya, (aleluya).{'\n\n'}</Text>

            <Text style={styles.text}>Aleluya.</Text>
            <Text style={styles.text}>Porque reina el Señor, nuestro Dios, dueño de todo.</Text>
            <Text style={styles.respuesta}>(R. Aleluya.){'\n\n'}</Text>

            <Text style={styles.text}>Alegrémonos y gocemos y démosle gracias.</Text>
            <Text style={styles.respuesta}>R. Aleluya, (aleluya).{'\n\n'}</Text>

            <Text style={styles.text}>Aleluya.</Text>
            <Text style={styles.text}>Llegó la boda del Cordero.</Text>
            <Text style={styles.respuesta}>(R. Aleluya.)</Text>
            <Text style={styles.text}>Su esposa se ha embellecido.</Text>
            <Text style={styles.respuesta}>R. Aleluya, (aleluya).{'\n\n'}</Text>

            <Text style={styles.antifona}>Ant. 3: Reina el Señor, nuestro Dios, dueño de todo. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Lectura breve</Text>
            <Text style={styles.salmoSubtitle}>2Co 1, 3-4</Text>

            <Text style={styles.text}>Bendito sea Dios, Padre de nuestro Señor Jesucristo, Padre de misericordia y Dios de todo consuelo; él nos consuela en todas nuestras luchas, para poder nosotros consolar a los que están en toda tribulación, mediante el consuelo con que nosotros somos consolados por Dios.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Responsorio breve</Text>

            <Text style={styles.versiculo}>V. Bendito eres, Señor, en la bóveda del cielo.</Text>
            <Text style={styles.respuesta}>R. Bendito eres, Señor, en la bóveda del cielo.</Text>

            <Text style={styles.versiculo}>V. Digno de gloria y alabanza por los siglos</Text>
            <Text style={styles.respuesta}>R. En la bóveda del cielo.</Text>

            <Text style={styles.versiculo}>V. Gloria al Padre, y al Hijo, y al Espíritu Santo.</Text>
            <Text style={styles.respuesta}>R. Bendito eres, Señor, en la bóveda del cielo.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cántico evangélico</Text>
            <Text style={styles.antifona}>Ant.: El Todopoderoso ha hecho grandes por mí: su nombre es santo</Text>

            <Text style={styles.salmoTitle}>Cántico de la Santísima Virgen María</Text>
            <Text style={styles.salmoSubtitle}>Alegría del alma en el Señor</Text>

            <Text style={styles.text}>Proclama mi alma la grandeza del Señor,</Text>
            <Text style={styles.text}>se alegra mi espíritu en Dios mi salvador;</Text>
            <Text style={styles.text}>porque ha mirado la humillación de su esclava.{'\n\n'}</Text>

            <Text style={styles.text}>Desde ahora me felicitarán todas las generaciones,</Text>
            <Text style={styles.text}>porque el Poderoso ha hecho obras grandes por mí:</Text>
            <Text style={styles.text}>su nombre es santo,</Text>
            <Text style={styles.text}>y su misericordia llega a sus fieles</Text>
            <Text style={styles.text}>de generación en generación.{'\n\n'}</Text>

            <Text style={styles.text}>Él hace proezas con su brazo:</Text>
            <Text style={styles.text}>dispersa a los soberbios de corazón,</Text>
            <Text style={styles.text}>derrama del trono a los poderosos</Text>
            <Text style={styles.text}>y enaltece a los humildes,</Text>
            <Text style={styles.text}>a los hambrientos los colma de bienes</Text>
            <Text style={styles.text}>y a los ricos los despide vacíos.{'\n\n'}</Text>

            <Text style={styles.text}>Auxilia a Israel, su siervo,</Text>
            <Text style={styles.text}>acordándose de su misericordia</Text>
            <Text style={styles.text}>-como lo había prometido a nuestros padres-</Text>
            <Text style={styles.text}>en favor de Abraham y su descendencia por siempre.</Text>

            <Text style={styles.antifona}>Ant.: El Todopoderoso ha hecho obras grandes por mí: su nombre es santo</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preces</Text>

            <Text style={styles.text}>Adoremos a Cristo, Señor nuestro y cabeza de la Iglesia, y digámosle confiadamente:</Text>

            <Text style={styles.versiculo}>Venga a nosotros tu reino, Señor.</Text>

            <Text style={styles.text}>Señor, amigo de los hombres, haz de tu Iglesia instrumento de concordia y unidad entre ellos y signo de salvación</Text>
            <Text style={styles.versiculo}>- para todos los pueblos reine la justicia y el bienestar</Text>
            

            <Text style={styles.text}>Protege con tu brazo poderoso al Papa y a todos los obispos</Text>
            <Text style={styles.versiculo}>- y concédeles trabajar en unidad, amor y paz.</Text>

            <Text style={styles.text}>A los cristianos concédenos vivir íntimamente unidos a ti, nuestro maestro</Text>
            <Text style={styles.versiculo}>- y dar testimonio en nuestras vidas de la llegada de tu reino</Text>


            <Text style={styles.text}>Concede, Señor, al mundo el don de la paz,</Text>
            <Text style={styles.versiculo}>- y haz que en todos los pueblos reine la justicia y el bienestar.</Text>

            <Text style={styles.salmoSubtitle}>Se pueden añadir algunas intenciones libres.</Text>

            <Text style={styles.text}>Otorga, a los que han muerto, una resurrección gloriosa,</Text>
            <Text style={styles.versiculo}>- y haz que los que aún vivimos en este mundo gocemos un día con ellos de la felicidad eterna</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>Terminemos nuestra oración con las palabras del Señor: Padre nuestro.</Text>

            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.text}>Dios todopoderoso y eterno, que gobiernas el cielo y la tierra, escucha las súplicas de tu pueblo y concédenos tu paz en nuestro tiempo. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios, por los siglos de los siglos.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conclusión</Text>
            <Text style={styles.versiculo}>V. El Señor nos bendiga, nos guarde de todo mal y nos lleve a la vida eterna.</Text>
            <Text style={styles.respuesta}>R. Amén</Text>
          </View>

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
    padding: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.error,
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
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
    color: Colors.error,
    marginBottom: 12,
    textAlign: 'center',
  },
  salmoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  salmoSubtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.error,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 3,
    textAlign: 'justify',
    lineHeight: 24,
  },
  versiculo: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  respuesta: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
    marginLeft: 16,
  },
  antifona: {
    fontSize: 16,
    color: Colors.primary,
    fontStyle: 'italic',
    marginVertical: 12,
    textAlign: 'justify',
  },
  italicText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    marginVertical: 8,
  },
}); 