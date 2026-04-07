import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionPesebreScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Bendición del Pesebre',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Bendición del Pesebre</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              Es laudable la costumbre de instalar en las casas y en las iglesias un «belén» o «nacimiento», que recuerda y ayuda a vivir el misterio de la Navidad.
            </Text>
            <Text style={styles.prayer}>
              Para dar más sentido religioso o para significar su inauguración puede hacerse un rito de bendición, que signifique el comienzo de las solemnes fiestas navideñas. Este rito es introductorio de los misterios que se celebran en la Liturgia.
            </Text>
            <Text style={styles.prayer}>
              Si se trata de un «belén» colocado en la iglesia, la bendición puede hacerse antes o después de alguna de las celebraciones con que comienzan las fiestas de Navidad (al final de las vísperas o al final de la misa de la noche). También puede hacerse la bendición como una celebración independiente en la tarde del 24 de diciembre.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Ritos iniciales</Text>
            <Text style={styles.prayer}>
              Reunida la familia, el padre o la madre de la misma dice:{'\n\n'}
              En el nombre del Padre, y del Hijo, y del Espíritu Santo{'\n\n'}
              Todos se santiguan y responden:{'\n\n'}
              R. Amén.{'\n\n'}
              El que dirige la celebración puede decir:{'\n\n'}
              Alabemos y demos gracias al Señor, que tanto amó al mundo que le entregó a su Hijo.{'\n\n'}
              Todos responden:{'\n\n'}
              R. Bendito seas por siempre, Señor.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              Luego el que dirige la celebración dispone a los presentes para la bendición, con estas palabras u otras semejantes:{'\n\n'}
              Durante estos días contemplaremos asiduamente en nuestro hogar este pesebre y meditaremos el gran amor del Hijo de Dios, que ha querido habitar con nosotros. Pidamos, pues, a Dios que el pesebre colocado en nuestro hogar avive en nosotros la fe cristiana y nos ayude a celebrar más intensamente estas fiestas de Navidad.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Lectura de la Palabra de Dios</Text>
            <Text style={styles.prayer}>
              Uno de los miembros de la familia lee un texto de la sagrada Escritura:{'\n\n'}
              Escuchad ahora, hermanos, las palabras del santo Evangelio según san Lucas: Lucas 2, 4-7a{'\n\n'}
              R. Gloria a ti, Señor{'\n\n'}
              En aquellos días, José, que era de la casa y familia de David, subió desde la ciudad de Nazaret, en Galilea, a la ciudad de David, que se llama Belén, en Judea, para inscribirse con su esposa María, que estaba encinta. Y mientras estaban allí le llegó el tiempo del parto, y dio a luz a su hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre.{'\n\n'}
              Palabra del Señor.{'\n\n'}
              R. Gloria a ti, Señor Jesús.{'\n\n'}
              Luego el celebrante dice:{'\n\n'}
              Oremos.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Preces</Text>
            <Text style={styles.prayer}>
              Sigue la plegaria común:{'\n\n'}
              En este momento en que nos hemos reunido toda la familia para iniciar las fiestas de Navidad, dirijamos nuestra oración a Cristo, Hijo de Dios vivo, que quiso ser también hijo de una familia humana; digámosle:{'\n\n'}
              R. Por tu nacimiento, Señor, protege a esta familia.{'\n\n'}
              Oh Cristo, por el misterio de tu sumisión a María y a José enséñanos el respeto y la obediencia a quienes dirigen esta familia.{'\n\n'}
              R. Por tu nacimiento, Señor, protege a esta familia.{'\n\n'}
              Tú que amaste y fuiste amado por tus padres, afianza a nuestra familia en el amor y la concordia.{'\n\n'}
              R. Por tu nacimiento, Señor, protege a esta familia.{'\n\n'}
              Tú que estuviste siempre atento a las cosas del Padre, haz que en nuestra familia Dios sea honorificado.{'\n\n'}
              R. Por tu nacimiento, Señor, protege a esta familia.{'\n\n'}
              Tú que has dado parte de tu gloria a María y José, admite a nuestros familiares que otros años celebraban la fiesta de Navidad con nosotros, en tu familia eterna.{'\n\n'}
              R. Por tu nacimiento, Señor, protege a esta familia.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración de Bendición</Text>
            <Text style={styles.prayer}>
              Luego el ministro, si es sacerdote o diácono, con las manos extendidas, si es laico, con las manos juntas, dice la oración de bendición:{'\n\n'}
              Señor Dios, Padre nuestro, que tanto amaste al mundo que nos entregaste a tu Hijo único nacido de María la Virgen, dígnate bendecir este nacimiento y a la comunidad cristiana que está aquí presente, para que las imágenes de este Belén ayuden a profundizar en la fe a los adultos y a los niños.{'\n\n'}
              Te lo pedimos por Jesús, tu Hijo amado, que vive y reina por los siglos de los siglos.{'\n\n'}
              Amén.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Conclusión del rito</Text>
            <Text style={styles.prayer}>
              El que dirige la celebración concluye el rito, santiguándose y diciendo:{'\n\n'}
              Cristo, el Señor, que se ha aparecido en la tierra y ha querido convivir con los hombres nos bendiga y nos guarde en su amor.
            </Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
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