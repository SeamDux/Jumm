import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Colors from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native';

export default function LetaniasEspirituScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Letanías del Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Letanías del Espíritu Santo</Text>
          
          <Text style={styles.oracion}>
            Señor, ten piedad{'\n'}
            Cristo, ten piedad{'\n'}
            Señor, ten piedad{'\n'}
            Cristo, óyenos{'\n'}
            Cristo, escúchanos
          </Text>

          <Text style={styles.oracion}>
            Dios Padre celestial,{'\n'}
            <Text style={styles.textoRojoItalic}>ten piedad de nosotros{'\n'}</Text>
            Dios Hijo Redentor del mundo,{'\n'}
            <Text style={styles.textoRojoItalic}>ten piedad de nosotros{'\n'}</Text>
            Dios Espíritu Santo,{'\n'}
            <Text style={styles.textoRojoItalic}>ten piedad de nosotros{'\n'}</Text>
            Trinidad Santa, un solo Dios,{'\n'}
            <Text style={styles.textoRojoItalic}>ten piedad de nosotros</Text>
          </Text>

          <Text style={styles.oracion}>
            Espíritu que procedes del Padre y del Hijo,{'\n'}
            <Text style={styles.textoRojoItalic}>ven a nosotros{'\n'}</Text>
            Espíritu del Señor, que al comienzo de la creación planeando sobre las aguas las fecundaste,{'\n'}
            Espíritu por cuya inspiración han hablado los siervos de Dios,{'\n'}
            Espíritu cuya unción nos enseña todas las cosas,{'\n'}
            Espíritu que das testimonio de Cristo,{'\n'}
            Espíritu de verdad que nos instruyes sobre todas las cosas,{'\n'}
            Espíritu que sobreviene a María,{'\n'}
            Espíritu del Señor que llena todo el orbe,{'\n'}
            Espíritu de Dios que habita en nosotros,{'\n'}
            Espíritu de sabiduría y de entendimiento,{'\n'}
            Espíritu de consejo y de fortaleza,{'\n'}
            Espíritu de ciencia y de piedad,{'\n'}
            Espíritu de temor del Señor,{'\n'}
            Espíritu de gracia y de misericordia,{'\n'}
            Espíritu de fuerza, de dilección y de sobriedad,{'\n'}
            Espíritu de fe, de esperanza, de amor y de paz,{'\n'}
            Espíritu de humildad y de castidad,{'\n'}
            Espíritu de benignidad y de mansedumbre,{'\n'}
            Espíritu de multiforme gracia,{'\n'}
            Espíritu que escrutas los secretos de Dios,{'\n'}
            Espíritu que ruegas por nosotros con gemidos inenarrables,{'\n'}
            Espíritu que descendiste sobre Cristo en forma de paloma,{'\n'}
            Espíritu en el cual renacemos,{'\n'}
            Espíritu por el cual se difunde la caridad en nuestros corazones,{'\n'}
            Espíritu de adopción de hijos de Dios,{'\n'}
            Espíritu que apareciste sobre los discípulos en forma de lenguas de fuego,{'\n'}
            Espíritu con el cual fueron llenos los apóstoles,{'\n'}
            Espíritu que distribuyes tus dones a cada uno como quieres,
          </Text>

          <Text style={styles.oracion}>
            Sednos propicio,{'\n'}
            <Text style={styles.textoRojoItalic}>perdónanos, Señor{'\n'}</Text>
            Sednos propicio,{'\n'}
            <Text style={styles.textoRojoItalic}>escúchanos, Señor{'\n'}</Text>
            De todo mal,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            De todo pecado,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            De las tentaciones e insidias del demonio,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            De la presunción y desesperación,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            De la resistencia a la verdad conocida,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            De la obstinación y de la impenitencia,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            De la impureza de la mente y del cuerpo,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            Del espíritu de fornicación,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor{'\n'}</Text>
            De todo espíritu del mal,{'\n'}
            <Text style={styles.textoRojoItalic}>líbranos, Señor</Text>
          </Text>

          <Text style={styles.oracion}>
            Por tu eterna procesión del Padre y del Hijo,{'\n'}
            <Text style={styles.textoRojoItalic}>te rogamos óyenos{'\n'}</Text>
            Por tu descenso sobre Cristo en el Jordán,{'\n'}
            <Text style={styles.textoRojoItalic}>te rogamos óyenos{'\n'}</Text>
            Por tu advenimiento sobre los discípulos,{'\n'}
            <Text style={styles.textoRojoItalic}>te rogamos óyenos{'\n'}</Text>
            En el día del juicio, nosotros pecadores,{'\n'}
            <Text style={styles.textoRojoItalic}>te rogamos óyenos</Text>
          </Text>

          <Text style={styles.oracion}>
            Cordero de Dios, que quitas los pecados del mundo,{'\n'}
            <Text style={styles.textoRojoItalic}>perdónanos, Señor{'\n'}</Text>
            Cordero de Dios, que quitas los pecados del mundo,{'\n'}
            <Text style={styles.textoRojoItalic}>escúchanos, Señor{'\n'}</Text>
            Cordero de Dios, que quitas los pecados del mundo,{'\n'}
            <Text style={styles.textoRojoItalic}>ten misericordia de nosotros</Text>
          </Text>

          <Text style={styles.subtitulo}>OREMOS</Text>

          <Text style={styles.oracion}>
            Asístanos, te pedimos Señor, la virtud del Espíritu Santo, que purifique clemente nuestros corazones y nos preserve de todo mal. Te lo pedimos por el mismo Jesucristo Nuestro Señor. Amén.
          </Text>

          <TouchableOpacity 
            style={styles.botonVolver}
            onPress={() => router.back()}
          >
            <Text style={styles.botonVolverTexto}>Volver al listado</Text>
          </TouchableOpacity>
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
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  textoItalica: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  textoRojoItalic: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    color: '#dc2626',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
