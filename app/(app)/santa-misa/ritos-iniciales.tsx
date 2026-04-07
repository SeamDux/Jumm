import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function RitosInicialesPage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ritos Iniciales',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Canto de entrada (de pie)</Text>
          <Text style={styles.textoRojoItalic}>
            Recibimos al sacerdote de pie cuando se acerca al altar y lo besa. En el ara o altar hay reliquias de santos y representa el lugar donde se hacían los sacrificios. En el Antiguo Testamento se sacrificaban animales, pero desde la venida de Cristo, en el Nuevo Testamento, son incruentos. Si no se hubiera entonado canto alguno, se recita la antífona de entrada.
          </Text>
          <Text style={styles.texto}>En el nombre del Padre, y del Hijo, y del Espíritu Santo.</Text>
          <Text style={styles.textoRojoItalic}>Todos se santiguan.</Text>
          <Text style={styles.textoItalica}>R. Amén.</Text>
          <Text style={styles.textoRojoItalic}>El sacerdote saluda al pueblo</Text>
          <Text style={styles.texto}>El Señor esté con ustedes</Text>
          <Text style={styles.textoRojoItalic}>O bien:</Text>
          <Text style={styles.texto}>La gracia de nuestro Señor Jesucristo, el amor del Padre, y la comunión del Espíritu Santo estén con todos ustedes.</Text>
          <Text style={styles.textoItalica}>R. Y con tu espíritu.</Text>
          <Text style={styles.textoRojoItalic}>Si se está en Tiempo Pascual sería:</Text>
          <Text style={styles.texto}>El Dios de la vida, que ha resucitado a Jesucristo, rompiendo las ataduras de la muerte, esté con todos ustedes.</Text>
          <Text style={styles.textoItalica}>R. Y con tu espíritu.</Text>
          <Text style={styles.textoRojoItalic}>El sacerdote lee la 'Antífona de entrada' de ese día.</Text>
          <Text style={styles.tituloRojo}>Acto Penitencial</Text>
          <Text style={styles.textoRojoItalic}>El sacerdote invita a los fieles al arrepentimiento:</Text>
          <Text style={styles.texto}>Hermanos: Para celebrar dignamente estos sagrados misterios, reconozcamos nuestros pecados.</Text>
          <Text style={styles.textoRojoItalic}>Tras un breve silencio, todos reconocen sus pecados con la oración:</Text>
          <Text style={styles.texto}>Yo confieso ante Dios todopoderoso y ante ustedes hermanos, que he pecado mucho de pensamiento, palabra, obra y omisión.</Text>
          <Text style={styles.textoRojoItalic}>Llevando la mano al pecho, dicen:</Text>
          <Text style={styles.texto}>Por mi culpa, por mi culpa, por mi gran culpa.</Text>
          <Text style={styles.textoRojoItalic}>Luego prosiguen:</Text>
          <Text style={styles.texto}>Por eso ruego a Santa María, siempre Virgen, a los ángeles, a los santos y a ustedes, hermanos, que intercedan por mí ante Dios nuestro Señor.</Text>
          <Text style={styles.textoRojoItalic}>El sacerdote concluye con la absolución:</Text>
          <Text style={styles.texto}>Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.</Text>
          <Text style={styles.textoRojoItalic}>El pueblo responde:</Text>
          <Text style={styles.texto}>Amén.</Text>
          <Text style={styles.textoRojoItalic}>Siguen las invocaciones de desagravio que rezan alternadamente el sacerdote y los fieles:</Text>
          <Text style={styles.texto}>Señor ten piedad.</Text>
          <Text style={styles.textoItalica}>R. Señor ten piedad.</Text>
          <Text style={styles.texto}>Cristo ten piedad.</Text>
          <Text style={styles.textoItalica}>R. Cristo ten piedad.</Text>
          <Text style={styles.texto}>Señor ten piedad.</Text>
          <Text style={styles.textoItalica}>R. Señor ten piedad.</Text>
          <Text style={styles.textoRojoItalic}>O bien:</Text>
          <Text style={styles.texto}>Tú que has enviado a sanar los corazones afligidos:</Text>
          <Text style={styles.texto}>Señor ten piedad.</Text>
          <Text style={styles.textoItalica}>R. Señor ten piedad.</Text>
          <Text style={styles.texto}>Tú que has venido a llamar a los pecadores:</Text>
          <Text style={styles.texto}>Cristo ten piedad.</Text>
          <Text style={styles.textoItalica}>R. Cristo ten piedad.</Text>
          <Text style={styles.texto}>Tú que estás sentado a la derecha del Padre para interceder por nosotros:</Text>
          <Text style={styles.texto}>Señor ten piedad.</Text>
          <Text style={styles.textoItalica}>R. Señor ten piedad.</Text>
          <Text style={styles.tituloRojo}>Gloria</Text>
          <Text style={styles.textoRojoItalic}>Si es domingo o día de fiesta, acto seguido todos rezan El Gloria:</Text>
          <Text style={styles.texto}>Gloria a Dios en el cielo, y en la tierra paz a los hombres que ama el Señor. Por tu inmensa gloria te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias, Señor Dios, Rey celestial, Dios Padre todopoderoso. Señor, Hijo único, Jesucristo. Señor Dios, Cordero de Dios, Hijo del Padre; tú que quitas el pecado del mundo, ten piedad de nosotros; tú que quitas el pecado del mundo, atiende nuestra súplica; tú que estás sentado a la derecha del Padre, ten piedad de nosotros; porque sólo tú eres Santo, sólo tú Señor, sólo tú Altísimo Jesucristo, con el Espíritu Santo en la gloria de Dios Padre. Amén.</Text>
          <Text style={styles.tituloRojo}>Oración colecta</Text>
          <Text style={styles.textoRojoItalic}>Concluido el himno, el sacerdote dice:</Text>
          <Text style={styles.texto}>Oremos.</Text>
          <Text style={styles.textoRojoItalic}>Entonces, recita la 'Oración Colecta' designada para el día, y al final el pueblo aclama:</Text>
          <Text style={styles.texto}>Amén.</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  tituloRojo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: 15,
    marginTop: 15,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    textAlign: 'justify',
  },
  textoRojo: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    color: '#dc2626',
    textAlign: 'justify',
  },
  textoItalica: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  textoRojoItalic: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    color: '#dc2626',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
}); 