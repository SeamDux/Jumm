import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionCoronaAdvientoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Bendición de la Corona de Adviento',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Bendición de la Corona de Adviento</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              La «Corona de Adviento» o «Corona de las luces de Adviento» es un signo que expresa la alegría del tiempo de preparación a la Navidad. Por medio de la bendición de la corona se subraya su significado religioso.
            </Text>
            <Text style={styles.prayer}>
              La luz indica el camino, aleja el miedo y favorece la comunión. La luz es un símbolo de Jesucristo, luz del mundo. El encender, semana tras semana, los cuatro cirios de la corona muestra la ascensión gradual hacia la plenitud de la luz de Navidad. El color verde de la corona significa la vida y la esperanza.
            </Text>
            <Text style={styles.prayer}>
              La corona de Adviento es, pues, un símbolo de la esperanza de que la luz y la vida triunfarán sobre las tinieblas y la muerte. Porque el Hijo de Dios se ha hecho hombre por nosotros, y con su muerte nos ha dado la verdadera vida.
            </Text>
            <Text style={styles.prayer}>
              El rito de la bendición en familia que aquí se propone pueden utilizarlo el sacerdote, el diácono, y también el laico, con los ritos y fórmulas previstos para él.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Rito de Bendición</Text>
            <Text style={styles.prayer}>
              El ministro, al comenzar la celebración, dice:{'\n\n'}
              Todos se santiguan y responden:{'\n\n'}
              R. Que hizo el cielo y la tierra.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Monición introductoria</Text>
            <Text style={styles.prayer}>
              Luego, el celebrante saluda a los presentes, diciendo:{'\n\n'}
              Al comenzar el nuevo año litúrgico vamos a bendecir esta corona con que inauguramos también el tiempo de Adviento. Sus luces nos recuerdan que Jesucristo es la luz del mundo. Su color significa la vida y la esperanza.{'\n\n'}
              El encender, semana tras semana, los cuatro cirios de la corona debe significar nuestra gradual preparación para recibir la luz de la Navidad.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Lectura de la Palabra de Dios</Text>
            <Text style={styles.prayer}>
              Uno de los presentes, o el mismo ministro, lee un breve texto de la sagrada Escritura, por ejemplo:{'\n\n'}
              Isaías 60, 1{'\n'}
              ¡Levántate, brilla, Jerusalén, que llega tu luz; la gloria del Señor amanece sobre ti!
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oración de bendición</Text>
            <Text style={styles.prayer}>
              Luego el ministro, si es sacerdote o diácono, con las manos extendidas, si es laico, con las manos juntas, dice la oración de bendición:{'\n\n'}
              Oremos.{'\n\n'}
              La tierra, Señor, se alegra en estos días, y tu Iglesia desborda de gozo ante tu Hijo, el Señor, que se avecina como luz esplendorosa, para iluminar a los que yacemos en las tinieblas de la ignorancia, del dolor y del pecado.{'\n\n'}
              Lleno de esperanza en su venida, tu pueblo ha preparado esta corona con ramos del bosque y la ha adornado con luces.{'\n\n'}
              Ahora, pues, que vamos a empezar el tiempo de preparación para la venida de tu Hijo, te pedimos, Señor, que, mientras se acrecienta cada día el esplendor de esta corona, con nuevas luces, a nosotros nos ilumines con el esplendor de aquel que, por ser la luz del mundo, iluminará todas las oscuridades.{'\n\n'}
              Él que vive y reina por los siglos de los siglos.{'\n\n'}
              R. Amén.{'\n\n'}
              Y se enciende el cirio que corresponda según la semana de Adviento.
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