import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function LetaniasNombreScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Letanías del Santo Nombre',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Letanías del Santo Nombre de Jesús</Text>
          
          <Text style={styles.oracion}>
            Señor, ten piedad{'\n'}
            Cristo, ten piedad{'\n'}
            Señor, ten piedad{'\n'}
            Cristo, óyenos{'\n'}
            Cristo, escúchanos
          </Text>

          <Text style={styles.oracion}>Dios Padre celestial,{'\n'}
          <Text style={styles.textoRojoItalic}>Ten piedad de nosotros{'\n'}</Text>
            Dios Hijo Redentor del mundo,{'\n'}
            Dios Espíritu Santo,{'\n'}
            Santísima Trinidad, que eres un solo Dios,
          </Text>

          <Text style={styles.oracion}>
            Jesús, Hijo del Dios vivo,{'\n'}
          <Text style={styles.textoRojoItalic}>Ten piedad de nosotros{'\n'}</Text>
            Jesús, esplendor del Padre,{'\n'}
            Jesús, pureza de la luz eterna,{'\n'}
            Jesús, Rey de la gloria,{'\n'}
            Jesús, sol de justicia,{'\n'}
            Jesús, Hijo de la Virgen María,{'\n'}
            Jesús, amable,{'\n'}
            Jesús, admirable,{'\n'}
            Jesús, Dios fuerte,{'\n'}
            Jesús, Padre del siglo futuro,{'\n'}
            Jesús, ángel del gran consejo,{'\n'}
            Jesús, potentísimo,{'\n'}
            Jesús, pacientísimo,{'\n'}
            Jesús, obedientísimo,{'\n'}
            Jesús, manso y humilde de corazón,{'\n'}
            Jesús, amante de la castidad,{'\n'}
            Jesús, amador nuestro,{'\n'}
            Jesús, Dios de la paz,{'\n'}
            Jesús, autor de la vida,{'\n'}
            Jesús, ejemplo de virtudes,{'\n'}
            Jesús, deseoso de nuestras almas,{'\n'}
            Jesús, Dios nuestro,{'\n'}
            Jesús, refugio nuestro,{'\n'}
            Jesús, padre de los pobres,{'\n'}
            Jesús, tesoro de los fieles,{'\n'}
            Jesús, buen pastor,{'\n'}
            Jesús, luz verdadera,{'\n'}
            Jesús, sabiduría eterna,{'\n'}
            Jesús, bondad infinita,{'\n'}
            Jesús, camino y vida nuestra,{'\n'}
            Jesús, gozo de los ángeles,{'\n'}
            Jesús, rey de los patriarcas,{'\n'}
            Jesús, maestro de los apóstoles,{'\n'}
            Jesús, doctor de los evangelistas,{'\n'}
            Jesús, fortaleza de los mártires,{'\n'}
            Jesús, luz de los confesores,{'\n'}
            Jesús, pureza de las vírgenes,{'\n'}
            Jesús, corona de todos los santos,
          </Text>

          <Text style={styles.oracion}>
            Sé propicio,{'\n'} 
          <Text style={styles.textoRojoItalic}>perdónanos, Jesús{'\n'}</Text>
            Sé propicio,{'\n'}
          <Text style={styles.textoRojoItalic}>escúchanos, Jesús</Text>
          </Text>

          <Text style={styles.oracion}>
            De todo mal,{'\n'}
          <Text style={styles.textoRojoItalic}>líbranos, Jesús{'\n'}</Text>
            De todo pecado,{'\n'}
            De tu ira,{'\n'}
            De los lazos del demonio,{'\n'}
            Del espíritu de fornicación,{'\n'}
            De muerte eterna,{'\n'}
            De la negligencia de tu amor,{'\n'}
            Por el misterio de tu santa encarnación,{'\n'}
            Por tu nacimiento,{'\n'}
            Por tu infancia,{'\n'}
            Por tu vida divina,{'\n'}
            Por tus trabajos,{'\n'}
            Por tu agonía y pasión,{'\n'}
            Por tu cruz y abandono,{'\n'}
            Por tus angustias,{'\n'}
            Por tu muerte y sepultura,{'\n'}
            Por tu resurrección,{'\n'}
            Por tu ascensión,{'\n'}
            Por tu institución de la Santísima Eucaristía,{'\n'}
            Por tus gozos,{'\n'}
            Por tu gloria,
          </Text>

          <Text style={styles.oracion}>
            Cordero de Dios, que quitas los pecados del mundo{'\n'}
          <Text style={styles.textoRojoItalic}>perdónanos Señor{'\n'}</Text>
            Cordero de Dios, que quitas los pecados del mundo{'\n'}
          <Text style={styles.textoRojoItalic}>escúchanos Señor{'\n'}</Text>
            Cordero de Dios, que quitas los pecados del mundo{'\n'}
          <Text style={styles.textoRojoItalic}>ten misericordia de nosotros{'\n'}</Text>
          </Text>

          <Text style={styles.oracion}>
            V. Jesús, óyenos{'\n'}
            R. Jesús, escúchanos
          </Text>

          <Text style={styles.subtitulo}>Oremos</Text>

          <Text style={styles.oracion}>
            Oh Dios, que constituiste a tu Hijo único Salvador del género humano y quisiste que se llamara Jesús, concédenos benignamente que, venerando su santo nombre en la tierra, gocemos de su visión en el cielo. Por el mismo Jesucristo, nuestro Señor. Amén.
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
}); 