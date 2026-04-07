import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function BienaventuranzasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Las bienaventuranzas',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Las bienaventuranzas</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Las bienaventuranzas están en el centro de la predicación de Jesús. Con ellas Jesús recoge las promesas hechas al pueblo elegido desde Abraham; pero las perfecciona ordenándolas no sólo a la posesión de una tierra, sino al Reino de los cielos:
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=q6uqZByXZ7U')}
                              >
            <Text style={styles.buttonText}>Saber más</Text>
          </TouchableOpacity>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los pobres de espíritu, porque de ellos es el Reino de los cielos.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los mansos, porque ellos poseerán en herencia la tierra.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los que lloran, porque ellos serán consolados.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los que tienen hambre y sed de justicia, porque ellos serán saciados.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los misericordiosos, porque ellos alcanzarán misericordia.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los limpios de corazón, porque ellos verán a Dios.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los que buscan la paz, porque ellos serán llamados hijos de Dios.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados los perseguidos por causa de la justicia, porque de ellos es el Reino de los cielos.
            </Text>
          </View>

          <View style={styles.bienaventuranzaCard}>
            <Text style={styles.bienaventuranzaText}>
              Bienaventurados seréis cuando os injurien, os persigan y digan con mentira toda clase de mal contra vosotros por mi causa. Alegraos y regocijaos porque vuestra recompensa será grande en los cielos. (Mt 5,3-12). (CEC 1716)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Las bienaventuranzas dibujan el rostro de Jesucristo y describen su caridad; expresan la vocación de los fieles asociados a la gloria de su Pasión y de su Resurrección; iluminan las acciones y las actitudes características de la vida cristiana; son promesas paradójicas que sostienen la esperanza en las tribulaciones; anuncian a los discípulos las bendiciones y las recompensas ya incoadas; quedan inauguradas en la vida de la Virgen María y de todos los santos. (CEC 1717)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Las bienaventuranzas responden al deseo natural de felicidad. Este deseo es de origen divino: Dios lo ha puesto en el corazón del hombre a fin de atraerlo hacia Él, el único que lo puede satisfacer: (CEC 1718) Las bienaventuranzas descubren la meta de la existencia humana, el fin último de los actos humanos: Dios nos llama a su propia bienaventuranza. Esta vocación se dirige a cada uno personalmente, pero también al conjunto de la Iglesia, pueblo nuevo de los que han acogido la promesa y viven de ella en la fe. (CEC 1719)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              La bienaventuranza prometida nos coloca ante opciones morales decisivas. Nos invita a purificar nuestro corazón de sus malos instintos y a buscar el amor de Dios por encima de todo. Nos enseña que la verdadera dicha no reside ni en la riqueza o el bienestar, ni en la gloria humana o el poder, ni en ninguna obra humana, por útil que sea, como las ciencias, las técnicas y las artes, ni en ninguna criatura, sino sólo en Dios, fuente de todo bien y de todo amor. (CEC 1723)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El Decálogo, el Sermón de la Montaña y la catequesis apostólica nos describen los caminos que conducen al Reino de los cielos. Por ellos avanzamos paso a paso mediante los actos de cada día, sostenidos por la gracia del Espíritu Santo. Fecundados por la Palabra de Cristo, damos lentamente frutos en la Iglesia para la gloria de Dios (cf la parábola del sembrador: Mt 13,3-23). (CEC 1724)
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
  bienaventuranzaCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  bienaventuranzaText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 