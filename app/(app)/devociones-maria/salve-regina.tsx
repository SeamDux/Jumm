import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function SalveReginaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Salve Regina',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Salve Regina</Text>
          
          <Text style={styles.texto}>
            Generalmente se divide la Salve en tres partes:{'\n'}
            - El alma saluda a la Madre de Dios, invocando su misericordia.{'\n'}
            - El alma reitera el saludo y, en nombre de todos los hombres, invoca a María Santísima, pide que nos mire con ojos de misericordia y nos lleve hasta su Hijo Jesús.{'\n'}
            - El alma proclama el título mayor y fundamental de su intercesión, el ser Madre de Dios.
          </Text>

          <Text style={styles.subtitulo}>En latín</Text>

          <Text style={styles.oracion}>
            Salve, Regina, Mater misericórdiæ, vita, dulcédo et spes nostra, salve.{'\n'}
            Ad te clamámus, éxsules fílii Hevæ. Ad te suspirámus geméntes et flentes in hac lacrimárum valle.{'\n'}
            Eia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte.{'\n'}
            Et Iesum benedíctum fructum ventris tui, nobis, post hoc exsílium, osténde.{'\n'}
            O clemens, o pia, o dulcis Virgo María!
          </Text>

          <Text style={styles.subtitulo}>En español</Text>

          <Text style={styles.oracion}>
            Dios te salve, Reina y Madre{'\n'}
            de misericordia,{'\n'}
            vida, dulzura y esperanza{'\n'}
            nuestra, Dios te salve.{'\n'}
            A Ti llamamos los{'\n'}
            desterrados hijos de Eva;{'\n'}
            a Ti suspiramos, gimiendo y{'\n'}
            llorando,{'\n'}
            en este valle de lágrimas.{'\n'}
            Ea, pues, Señora, abogada{'\n'}
            nuestra,{'\n'}
            vuelve a nosotros esos tus{'\n'}
            ojos misericordiosos;{'\n'}
            y después de este destierro{'\n'}
            muéstranos a Jesús,{'\n'}
            fruto bendito de tu vientre.{'\n'}
            ¡Oh clementísima!,{'\n'}
            ¡Oh piadosa!,{'\n'}
            ¡Oh dulce siempre Virgen{'\n'}
            María!
          </Text>

          <Text style={styles.oracion}>
            V. Ruega por nosotros, Santa Madre de Dios.{'\n'}
            R. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.
          </Text>

          <Text style={styles.subtitulo}>Oremos</Text>

          <Text style={styles.oracion}>
            Omnipotente sempiterno Dios,{'\n'}
            que con la cooperación del Espíritu Santo,{'\n'}
            preparasteis el cuerpo y el alma de la gloriosa{'\n'}
            Virgen y Madre María,{'\n'}
            para que fuese merecedora de ser digna morada{'\n'}
            de vuestro Hijo;{'\n'}
            concedednos que, pues celebramos con alegría{'\n'}
            su conmemoración,{'\n'}
            por su piadosa intercesión{'\n'}
            seamos liberados de los males presentes{'\n'}
            y de la muerte eterna.{'\n'}
            Por el mismo Cristo, Señor nuestro. Amén.{'\n'}
            V. Que el auxilio divino permanezca para siempre. Amén.
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
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 