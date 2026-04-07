import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function LiturgiaPalabraPage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Liturgia de la Palabra',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.tituloRojo}>Primera Lectura <Text style={styles.textoItalica}>(sentados)</Text></Text>
          <Text style={styles.textoRojoItalic}>
            Los domingos se toma del Antiguo Testamento, excepto en el Tiempo Pascual, en que se toma de los Hechos de los Apóstoles. Si es costumbre, puede leer alguno de los asistentes. Al terminar:
          </Text>
          <Text style={styles.texto}>Palabra de Dios.</Text>
          <Text style={styles.textoItalica}>R. Te alabamos, Señor.</Text>

          <Text style={styles.tituloRojo}>Salmo responsorial</Text>
          <Text style={styles.textoRojoItalic}>
            También puede leer el Salmo que corresponda a ese día alguno de los asistentes. Hay una parte denominada Salmo Responsorial que el pueblo repite intercaladamente. Si es costumbre, los Salmos serán cantados.
          </Text>

          <Text style={styles.tituloRojo}>Segunda Lectura <Text style={styles.textoItalica}>(sentados)</Text></Text>
          <Text style={styles.textoRojoItalic}>
            Sólo se hace una segunda lectura los domingos y las solemnidades. Al final, el que ha leído dice:
          </Text>
          <Text style={styles.texto}>Palabra de Dios.</Text>
          <Text style={styles.textoItalica}>R. Te alabamos, Señor.</Text>
          <Text style={styles.textoRojoItalic}>
            Seguidamente se canta o recita el Aleluya designado para ese día.
          </Text>

          <Text style={styles.tituloRojo}>Evangelio <Text style={styles.textoItalica}>(de pie)</Text></Text>
          <Text style={styles.textoRojoItalic}>El sacerdote, inclinado ante el altar, dice en voz baja:</Text>
          <Text style={styles.texto}>
            Purifica mi corazón y mis labios, Dios todopoderoso, para que anuncie dignamente tu Evangelio.
          </Text>
          <Text style={styles.textoRojoItalic}>Después, en voz alta dice al pueblo:</Text>
          <Text style={styles.texto}>El Señor esté con ustedes.</Text>
          <Text style={styles.textoItalica}>R. Y con tu espíritu.</Text>
          <Text style={styles.texto}>Lectura del Santo Evangelio según San [N]</Text>
          <Text style={styles.textoItalica}>R. Gloria a Ti, Señor.</Text>
          <Text style={styles.textoRojoItalic}>Una vez leído el Evangelio, el sacerdote dice:</Text>
          <Text style={styles.texto}>Palabra del Señor.</Text>
          <Text style={styles.textoItalica}>R. Gloria a Ti, Señor Jesús.</Text>
          <Text style={styles.textoRojoItalic}>El sacerdote besa el libro, diciendo en voz baja:</Text>
          <Text style={styles.texto}>Que las palabras del Evangelio borren nuestros pecados.</Text>

          <Text style={styles.tituloRojo}>Homilía <Text style={styles.textoItalica}>(sentados)</Text></Text>
          <Text style={styles.textoRojoItalic}>
            Debe decirse todos los domingos y fiestas de precepto. Al terminar es oportuno guardar un breve espacio de tiempo en silencio.
          </Text>

          <Text style={styles.tituloRojo}>Profesión de Fe <Text style={styles.textoItalica}>(de pie)</Text></Text>
          <Text style={styles.textoRojoItalic}>Si es festivo, todos rezarán el Credo:</Text>
          <Text style={styles.texto}>
            Creo en Dios, Padre Todopoderoso,{'\n'}
            Creador del cielo y de la tierra.{'\n'}
            Creo en Jesucristo, su único Hijo, Nuestro Señor,{'\n'}
            <Text style={styles.textoRojoItalic}>(En las palabras que siguen, hasta María Virgen, todos se inclinan)</Text>{'\n'}
            que fue concebido por obra y gracia del Espíritu Santo,{'\n'}
            nació de Santa María Virgen,{'\n'}
            padeció bajo el poder de Poncio Pilato{'\n'}
            fue crucificado, muerto y sepultado,{'\n'}
            descendió a los infiernos,{'\n'}
            al tercer día resucitó de entre los muertos,{'\n'}
            subió a los cielos{'\n'}
            y está sentado a la derecha de Dios, Padre todopoderoso.{'\n'}
            Desde allí ha de venir a juzgar a vivos y muertos.{'\n'}
            Creo en el Espíritu Santo,{'\n'}
            la santa Iglesia católica,{'\n'}
            la comunión de los santos,{'\n'}
            el perdón de los pecados,{'\n'}
            la resurrección de la carne{'\n'}
            y la vida eterna.{'\n'}
            Amén.
          </Text>

          <Text style={styles.tituloRojo}>Oración de los fieles</Text>
          <Text style={styles.textoRojoItalic}>
            A continuación, se hace la 'Oración de los fieles' o preces, que son unas plegarias que el sacerdote o algún asistente va leyendo y el pueblo responde:
          </Text>
          <Text style={styles.texto}>Escúchanos, Señor, te rogamos</Text>
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