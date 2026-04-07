import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function MandamientosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Los Diez mandamientos',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Los Diez mandamientos de la Ley de Dios</Text>
            <Text style={styles.citaText}>
              "¿Qué he de hacer yo de bueno para conseguir la vida eterna?" — "Si quieres entrar en la vida, cumple los mandamientos". (Mateo 19, 17).
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>El Decálogo en la Sagrada Escritura</Text>
            <Text style={styles.text}>
              La palabra "Decálogo" significa literalmente "diez palabras" (Ex 34, 28; Dt 4, 13; 10, 4). Estas "diez palabras" Dios las reveló a su pueblo en la montaña santa. Las escribió "con su Dedo" (Ex 31, 18), a diferencia de los otros preceptos escritos por Moisés (cf Dt 31, 9.24). Constituyen palabras de Dios en un sentido eminente. Son transmitidas en los libros del Éxodo (cf Ex 20, 1-17) y del Deuteronomio (cf Dt 5, 6-22). Ya en el Antiguo Testamento, los libros santos hablan de las "diez palabras" (cf por ejemplo, Os 4, 2; Jr 7, 9; Ez 18, 5-9); pero su pleno sentido será revelado en la Nueva Alianza en Jesucristo. (CEC 2056)
            </Text>
            <Text style={styles.text}>
              El Decálogo se comprende ante todo cuando se lee en el contexto del Éxodo, que es el gran acontecimiento liberador de Dios en el centro de la antigua Alianza. Las "diez palabras", bien sean formuladas como preceptos negativos, prohibiciones, o bien como mandamientos positivos (como "honra a tu padre y a tu madre"), indican las condiciones de una vida liberada de la esclavitud del pecado. El Decálogo es un camino de vida: si [...] amas a Dios, si sigues sus caminos y guardas sus mandamientos, sus preceptos y sus normas, vivirás y te multiplicarás" (Dt 30, 16).
            </Text>
            <Text style={styles.text}>
              Las "diez palabras" resumen y proclaman la ley de Dios: "Estas palabras dijo el Señor a toda vuestra asamblea, en la montaña, de en medio del fuego, la nube y la densa niebla, con voz potente, y nada más añadió. Luego las escribió en dos tablas de piedra y me las entregó a mí" (Dt 5, 22). Por eso estas dos tablas son llamadas "el Testimonio" (Ex 25, 16), pues contienen las cláusulas de la Alianza establecida entre Dios y su pueblo. Estas "tablas del Testimonio" (Ex 31, 18; 32, 15; 34, 29) se debían depositar en el "arca" (Ex 25, 16; 40, 1-2). (CEC 2057)
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://youtube.com/playlist?list=PLDFmwHW6wkBpAqWwFwUurKyHUywbxgTuC&si=VFI3xNNOTRpg0vYO')}
                              >
            <Text style={styles.buttonText}>Saber más</Text>
          </TouchableOpacity>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>La Iglesia y los diez Mandamientos</Text>
            <Text style={styles.text}>
              Fiel a la Escritura y siguiendo el ejemplo de Jesús, la Tradición de la Iglesia ha reconocido en el Decálogo una importancia y una significación primordiales. (CEC 2064)
            </Text>
            <Text style={styles.text}>
              Desde san Agustín, los "diez mandamientos" ocupan un lugar preponderante en la catequesis de los futuros bautizados y de los fieles. En el siglo XV se tomó la costumbre de expresar los preceptos del Decálogo en fórmulas rimadas, fáciles de memorizar.
            </Text>
            <Text style={styles.text}>
              Estas fórmulas están todavía en uso hoy. Los catecismos de la Iglesia han expuesto con frecuencia la moral cristiana siguiendo el orden de los "diez mandamientos". (CEC 2065)
            </Text>
            <Text style={styles.text}>
              Los diez mandamientos enuncian las exigencias del amor de Dios y del prójimo. Los tres primeros se refieren más al amor de Dios y los otros siete más al amor del prójimo.
            </Text>
            <Text style={styles.citaText}>
              «Como la caridad comprende dos preceptos de los que, según dice el Señor, penden la ley y los profetas [...], así los diez preceptos se dividen en dos tablas: tres están escritos en una tabla y siete en la otra» (San Agustín, Sermo 33, 2, 2). (CEC 2067)
            </Text>
            <Text style={styles.text}>
              El Concilio de Trento enseña que los diez mandamientos obligan a los cristianos y que el hombre justificado está también obligado a observarlos (cf DS 1569-1570). Y el Concilio Vaticano II afirma que: "Los obispos, como sucesores de los Apóstoles, reciben del Señor [...] la misión de enseñar a todos los pueblos y de predicar el Evangelio a todo el mundo para que todos los hombres, por la fe, el bautismo y el cumplimiento de los mandamientos, consigan la salvación" (LG 24). (CEC 2068)
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>La ley natural y el Decálogo</Text>
            <Text style={styles.text}>
              Los diez mandamientos pertenecen a la revelación de Dios. Nos enseñan al mismo tiempo la verdadera humanidad del hombre. Ponen de relieve los deberes esenciales y, por tanto indirectamente, los derechos fundamentales, inherentes a la naturaleza de la persona humana. El Decálogo contiene una expresión privilegiada de la "ley natural". (CEC 2070)
            </Text>
            <Text style={styles.text}>
              Aunque accesibles a la sola razón, los preceptos del Decálogo han sido revelados. Para alcanzar un conocimiento completo y cierto de las exigencias de la ley natural, la humanidad pecadora necesitaba esta revelación: "Conocemos los mandamientos de la ley de Dios por la revelación divina que nos es propuesta en la Iglesia, y por la voz de la conciencia moral". (CEC 2071)
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>La obligación del Decálogo</Text>
            <Text style={styles.text}>
              Los diez mandamientos, por expresar los deberes fundamentales del hombre hacia Dios y hacia su prójimo, revelan en su contenido primordial obligaciones graves. Son básicamente inmutables y su obligación vale siempre y en todas partes. Nadie podría dispensar de ellos. Los diez mandamientos están grabados por Dios en el corazón del ser humano. (CEC 2072)
            </Text>
            <Text style={styles.text}>
              Por su modo de actuar y su predicación, Jesús ha atestiguado el valor perenne del Decálogo. El Decálogo contiene una expresión privilegiada de la ley natural. Lo conocemos por la revelación divina y por la razón humana.
            </Text>
          </View>

          <View style={styles.mandamientosCard}>
            <Text style={styles.mandamientoTitle}>Los Diez Mandamientos:</Text>
            <Text style={styles.mandamiento}>1. Amarás a Dios sobre todas las cosas.</Text>
            <Text style={styles.mandamiento}>2. No tomarás el nombre de Dios en vano.</Text>
            <Text style={styles.mandamiento}>3. Santificarás las fiestas.</Text>
            <Text style={styles.mandamiento}>4. Honrarás a tu padre y a tu madre.</Text>
            <Text style={styles.mandamiento}>5. No matarás.</Text>
            <Text style={styles.mandamiento}>6. No cometerás actos impuros.</Text>
            <Text style={styles.mandamiento}>7. No robarás.</Text>
            <Text style={styles.mandamiento}>8. No dirás falso testimonio ni mentirás.</Text>
            <Text style={styles.mandamiento}>9. No consentirás pensamientos ni deseos impuros.</Text>
            <Text style={styles.mandamiento}>10. No codiciarás los bienes ajenos.</Text>
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
    marginBottom: 15,
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
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
  citaText: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
    fontStyle: 'italic',
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderLeftColor: Colors.primary,
  },
  mandamientosCard: {
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
  mandamientoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  mandamiento: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 12,
    paddingLeft: 15,
    lineHeight: 24,
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