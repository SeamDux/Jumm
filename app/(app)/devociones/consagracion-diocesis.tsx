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
          <Text style={styles.titulo}>Consagración de la Diócesis de San Bernardo{'\n'}Al Sagrado Corazón de Jesús</Text>
          
          <Text style={styles.oracion}>
            "Corazón de Jesús Sacramentado, Corazón del Dios Hombre, Redentor del Mundo, Rey de Reyes y Señor de los que dominan:
          </Text>

          <Text style={styles.oracion}>
            Tú eres el camino seguro que conduce a la posesión de la vida eterna; Tú eres la luz inextinguible que alumbra los entendimientos para que conozcan la verdad.
          </Text>

          <Text style={styles.oracion}>
            Confesamos que has venido a la tierra a establecer el reino de Dios en la paz de las almas, redimidas por tu Sangre Preciosa.
          </Text>

          <Text style={styles.oracion}>
            Hoy la Diócesis de San Bernardo, se postra reverente ante Ti, a quien reconocemos, presente verdadera y realmente en esta hostia consagrada.
          </Text>

          <Text style={styles.oracion}>
            Venga, pues, a nosotros tu Santísimo Reino, que es Reino de justicia, de amor y de paz.
          </Text>

          <Text style={styles.oracion}>
            Reina en los corazones de los hombres, en el seno de los hogares, en la inteligencia de los sabios, en las escuelas, en las leyes e instituciones patrias.
          </Text>

          <Text style={styles.oracion}>
            Reina, Señor, no solo sobre los que nunca se han separado de Ti, sino también sobre los hijos pródigos que te han abandonado.
          </Text>

          <Text style={styles.oracion}>
            Reina sobre aquellos que están extraviados por el error o separados por la discordia, y haz que vuelvan al puerto de la verdad y a la unidad de la fe, para que pronto no haya más que un solo rebaño y un solo pastor.
          </Text>

          <Text style={styles.oracion}>
            ¡Venga a nosotros tu Reino!
          </Text>

          <Text style={styles.oracion}>
            ¡Sagrado Corazón Eucarístico de Jesús! Extiende tu protección, sobre las ciudades y los pueblos, sobre la cordillera y el mar, sobre hombres y mujeres, sobre los hijos fieles y sobre las ovejas descarriadas, y particularmente sobre esta Diócesis, que gimiendo y llorando clama a Ti, Dios de la Luz, Luz de Luz, Dios Verdadero de Dios Verdadero, para que tu Cetro, Justo y misericordioso no deje de posarse sobre nosotros que hoy nos consagramos a Ti, reconociéndote una vez más como nuestro Rey y Señor, acoge la plegaria de esta porción del pueblo de Dios, que ahora, con su Obispo, se consagra a tu Adorabilísimo Corazón.
          </Text>

          <Text style={styles.oracion}>
            ¡Sagrado Corazón de Jesús! A tu Sacratísimo Corazón Consagro esta porción de la Iglesia, nuestra Diócesis de San Bernardo y a todos los habitantes de las diversas comunas que la componen: nuestros sacerdotes, religiosos, religiosas y misioneros, como también a cada uno de los fieles e instituciones religiosas, civiles, y de las fuerzas armadas y de seguridad pública; especialmente a los niños, ancianos, enfermos y pobres. Que bajo tu protección, nuestra Diócesis sea una familia unida en la fe, la esperanza y el amor a que eres Nuestro Dios y Señor, el Mesías Salvador.
          </Text>

          <Text style={styles.oracion}>
            Guía los pasos de nuestra Diócesis de San Bernardo en su camino terreno, para que recorra siempre senderos de paz y de concordia, caminos de Evangelio, de progreso, de justicia y libertad. Reconcilia a los hermanos en un abrazo fraterno; que desaparezcan los odios y los rencores, que se superen las divisiones y las barreras, que se unan las rupturas y sanen las heridas. Que Tú perdones nuestros corazones.
          </Text>

          <Text style={styles.oracion}>
            Desde los sagrarios de las Parroquias de nuestra Diócesis, preside nuestras empresas, bendícenos y concédenos la paz, para que la justicia y la caridad hagan más suave nuestra vida y más llevadero nuestro trabajo. Te pedimos, particularmente, que abras los corazones de muchos jóvenes para que comprendan y sigan tu llamado a la vida sacerdotal y a la vida religiosa, especialmente femenina.
          </Text>

          <Text style={styles.oracion}>
            Bendecid a toda nuestra diócesis, a todos los que estamos aquí reunidos en la unidad de la Caridad, suplicándote que nos mantengas en la seguridad de tu Amor y en el regalado gozo de tu Corazón llevándolo todo al mar".
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
    marginBottom: 20,
    textAlign: 'center',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 