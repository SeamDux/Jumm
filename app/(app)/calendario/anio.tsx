import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function AnioLiturgicoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Año Litúrgico',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>El Año Litúrgico</Text>
            <Text style={styles.description}>
              El Año litúrgico está formado por distintos tiempos litúrgicos. Estos son tiempos en los que la Iglesia nos invita a reflexionar y a vivir de acuerdo con alguno de los misterios de la vida de Cristo.{'\n\n'}
              Comienza por el Adviento, luego viene la Navidad, Epifanía, Primer tiempo ordinario, Cuaresma, Semana Santa, Pascua, Tiempo Pascual, Pentecostés, Segundo tiempo ordinario y termina con la fiesta de Cristo Rey.
            </Text>
          </View>

          <View style={styles.seasonCard}>
            <Text style={styles.seasonTitle}>Colores Litúrgicos</Text>
            <Text style={styles.seasonDescription}>
              En cada tiempo litúrgico, se usan colores diversos en los ornamentos que usan los ministros:{'\n\n'}
              <Text style={styles.colorText}>Blanco</Text> significa alegría y pureza. Se utiliza en el tiempo de Navidad y de Pascua.{'\n\n'}
              <Text style={styles.colorText}>Verde</Text> significa esperanza. Se utiliza en el tiempo ordinario.{'\n\n'}
              <Text style={styles.colorText}>Morado</Text> significa luto y penitencia. Se usa en Adviento, Cuaresma y Semana Santa.{'\n\n'}
              <Text style={styles.colorText}>Rojo</Text> significa el fuego del Espíritu Santo y el martirio. Se utiliza en las fiestas de los santos mártires y en Pentecostés.
            </Text>
          </View>

          <View style={styles.seasonCard}>
            <Text style={styles.seasonTitle}>¿Cómo se distribuyen durante el año los tiempos litúrgicos?</Text>
            <Text style={styles.seasonDescription}>
              <Text style={styles.highlight}>El Adviento</Text> es tiempo de espera para el nacimiento de Dios en el mundo. Es recordar a Cristo que nació en Belén y que vendrá nuevamente como Rey al final de los tiempos. Es un tiempo de oración y conversión para comprometernos con Cristo y esperarlo con alegría. Es preparar el camino hacia la Navidad. Este tiempo litúrgico consta de las cuatro semanas que preceden al 25 de diciembre, abarcando los cuatro domingos de Adviento.{'\n\n'}
              Al terminar el Adviento, comienza el <Text style={styles.highlight}>Tiempo de Navidad</Text>, que va desde la Navidad o Nacimiento, que se celebra el 25 de diciembre y nos recuerda que Dios vino a este mundo para salvarnos.{'\n\n'}
              La Epifanía nos recuerda la manifestación pública de Dios a todos los hombres. Aquí concluye el Tiempo de Navidad.{'\n\n'}
              <Text style={styles.highlight}>El Primer tiempo ordinario</Text> es el que va de la fiesta de la Epifanía hasta inicio de Cuaresma. En el Primer y <Text style={styles.highlight}>Segundo tiempo ordinario</Text> del Año litúrgico, no se celebra ningún aspecto concreto del misterio de Cristo. En ambos tiempos se profundizan los distintos momentos históricos de la vida de Cristo para adentrarse en la historia de la Salvación.{'\n\n'}
              <Text style={styles.highlight}>La Cuaresma</Text> comienza con el Miércoles de Ceniza y se prolonga durante los cuarenta días anteriores al Triduo Pascual. Es tiempo de preparación para la Pascua o Paso del Señor. Es un tiempo de oración, penitencia y ayuno. Es tiempo para la conversión del corazón.{'\n\n'}
              <Text style={styles.highlight}>La Semana Santa</Text> comienza con el Domingo de Ramos y termina con el Domingo de Resurrección. En el Triduo Pascual se recuerda y se vive junto a Cristo su Pasión, Muerte y Resurrección.{'\n\n'}
              El Domingo de Pascua es la mayor fiesta de la Iglesia, en la que se celebra la Resurrección de Jesús. Es el triunfo definitivo del Señor sobre la muerte y primicia de nuestra resurrección.{'\n\n'}
              <Text style={styles.highlight}>El Tiempo de Pascua</Text> es tiempo de paz, alegría y esperanza. Dura cincuenta días, desde el Domingo de Resurrección hasta Pentecostés, que es la celebración de la venida del Espíritu Santo sobre los apóstoles. En esta fiesta se trata de abrir el corazón a los dones del Espíritu Santo.{'\n\n'}
              Después de Pentecostés sigue el <Text style={styles.highlight}>Segundo tiempo ordinario</Text> del año litúrgico que termina con la fiesta de Cristo Rey.{'\n\n'}
              El eje del Año Litúrgico es la Pascua. Los tiempos fuertes son el Adviento y la Cuaresma.{'\n\n'}
              Durante el Adviento, Navidad y Epifanía se revive la espera gozosa del Mesías en la Encarnación. Hay una preparación para la venida del Señor al final de los tiempos: "Vino, viene y volverá".{'\n\n'}
              En la Cuaresma, se revive la marcha de Israel por el desierto y la subida de Jesús a Jerusalén. Se vive el misterio de la Muerte y Resurrección de Cristo: "Conversión y meditación de la palabra de Dios".{'\n\n'}
              En el Tiempo Pascual se vive la Pascua, Ascensión y Pentecostés en 50 días. Se celebra el gran domingo: "Ha muerto, vive, ¡Ven Señor Jesús!"{'\n\n'}
              En los tiempos ordinarios, la Iglesia sigue construyendo el Reino de Cristo movida por el Espíritu y alimentada por la Palabra.
            </Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  seasonCard: {
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
  seasonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  seasonDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  colorText: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
  highlight: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
}); 