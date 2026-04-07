import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function ConsagracionDiocesisScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Consagración de la Diócesis',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Consagración de la Diócesis de San Bernardo{'\n'}a la Virgen del Carmen</Text>
          <Text style={styles.subtitulo}>Santuario de la Virgen del Cerro Chena{'\n'}domingo 8 de agosto de 2010</Text>

          <Text style={styles.oracion}>
            Te bendecimos, ¡oh Dios nuestro!, Padre, Hijo y Espíritu Santo, porque elegiste a María, desde antes de la creación del mundo, para ser santa e inmaculada ante Ti por el amor.
          </Text>

          <Text style={styles.oracion}>
            En previsión de los méritos de Cristo, la redimiste y constituiste Madre del mismo Redentor. Por virtud del Espíritu Santo hiciste de Ella para siempre templo santo, una nueva criatura, primicia de la nueva humanidad.
          </Text>

          <Text style={styles.oracion}>
            ¡Bendito seas por siempre, Señor!
          </Text>

          <Text style={styles.oracion}>
            ¡Bendita Tú entre las mujeres, Virgen María, y bendito el fruto de tu seno, Jesús! En Ti, la llena de gracia, se refleja la bondad de Dios y el destino de la criatura humana, para alabanza de la gloria de su gracia con la que nos enriqueció en su Hijo muy amado, que es nuestro Hermano e Hijo tuyo, Jesucristo.
          </Text>

          <Text style={styles.oracion}>
            Tú, la humilde sierva del Señor, eres el modelo de los discípulos de Cristo que consagran su vida a realizar la voluntad del Padre para la verdad a los hombres.
          </Text>

          <Text style={styles.oracion}>
            ¡Santa María, Madre de Cristo, Madre de Dios y Madre nuestra! Bajo tu protección nos acogemos, a tu intercesión maternal confiamos. Como Tú te consagraste totalmente a Dios, nosotros, siguiendo tu ejemplo y en comunión contigo, nos consagramos a Cristo el Señor; nos consagramos también a Ti, nuestro modelo, porque queremos hacer en todo la voluntad del Padre, y ser como Tú, fieles a las inspiraciones del Espíritu.
          </Text>

          <Text style={styles.oracion}>
            ¡Virgen del Carmen, Reina y Patrona del pueblo chileno! A tu corazón de Madre confiamos esta porción de la Iglesia, nuestra Diócesis de San Bernardo y todos los habitantes de las diversas comunas que la componen: nuestros sacerdotes, religiosos, religiosas y misioneros, como también a cada uno de los fieles e instituciones religiosas, civiles, y fuerzas armadas; especialmente confiamos a los enfermos, pobres. Que bajo tu protección maternal, nuestra Diócesis sea una familia unida en la fe, la esperanza y el amor en Cristo Jesús Nuestro Señor. Tú que eres Madre de la Iglesia, guía nuestra Iglesia particular en el camino del Dios vivo, del amor que es más fuerte que la muerte, del perdón que disculpa las ofensas, de la esperanza que mira hacia el futuro para construir, con la fuerza del Evangelio, la civilización del amor en esta Diócesis de San Bernardo.
          </Text>

          <Text style={styles.oracion}>
            ¡Santa María de la Esperanza, Virgen del Carmen y Madre de Chile! Extiende tu escapulario, como manto de protección, sobre las ciudades y los pueblos, sobre la cordillera y el mar, sobre hombres y mujeres, jóvenes y niños, ancianos y enfermos, huérfanos y afligidos, sobre los hijos fieles y sobre las ovejas descarriadas, y particularmente sobre esa Diócesis, que suspirando y llorando clama a Ti, Madre del Dios por quien se vive, para que tus ojos misericordiosos no dejen de posarse sobre nosotros que hoy nos consagramos a Ti, reconociéndote una vez más como Madre, como Reina y como abogada ante el trono de Dios. Tú, que en cada hogar de nuestra Diócesis tienes un altar familiar, que en cada corazón chileno tienes un altar vivo, acoge la plegaria de esta porción del pueblo de Dios, que ahora, con su Obispo, de rodillas se consagra a Ti.
          </Text>

          <Text style={styles.oracion}>
            Estrella de los mares y Faro de luz, consuelo seguro para el pueblo peregrino, que tus pasos de maestra Diócesis San Bernardo en su peregrinar terreno, para que recorra siempre senderos de paz y de concordia, caminos de Evangelio, de progreso, de justicia y libertad. Reconcilia a los hermanos en un abrazo fraterno; que desaparezcan los odios y los rencores, que se superen las divisiones y barreras, que se unan las rupturas, para que Chile sea una casa común en la que Cristo sea nuestra Paz, que su perdón renueve los corazones, que su Palabra sea esperanza y fermento en la sociedad.
          </Text>

          <Text style={styles.oracion}>
            ¡Madre de la Iglesia y de todos los hombres! Inspira y conserva la fidelidad a Cristo en nuestra Diócesis de San Bernardo y en toda nuestra Patria chilena. Mantén viva la unidad de la Iglesia bajo la cruz de tu Hijo. Haz que los hombres de todos los pueblos, reconozcan su mismo origen y su idéntico destino, se respeten y amen como hijos del mismo Padre, en Cristo Jesús, nuestro único Salvador, y el Espíritu que renueva la faz de la tierra, para gloria y alabanza de la Santísima Trinidad. Amén.
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
    fontSize: 16,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
}); 