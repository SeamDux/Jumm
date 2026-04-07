import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function VenEspirituSantoCreadorScreen() {
  const router = useRouter();
  
  const renderTextoConTitulos = (texto: string) => {
    if (!texto.includes('[TITULO]')) {
      return <Text style={styles.oracionTexto}>{texto}</Text>;
    }

    const partes = texto.split(/\[TITULO\](.*?)\[\/TITULO\]/g);
    return (
      <>
        {partes.map((parte, index) => {
          // Los índices pares son texto normal, los impares son títulos
          if (index % 2 === 0) {
            return parte ? <Text key={index} style={styles.oracionTexto}>{parte}</Text> : null;
          } else {
            return <Text key={index} style={styles.tituloSeccion}>{parte}</Text>;
          }
        })}
      </>
    );
  };

  const texto = '[TITULO](Secuencia de Pentecostés)[/TITULO]\nVen, Espíritu Santo,\ny envía desde el cielo\nun rayo de tu luz.\n\nVen, padre de los pobres;\nven dador de gracias,\nven luz de los corazones.\n\nConsolador magnífico,\ndulce huésped del alma,\nsu dulce refrigerio.\n\nDescanso en la fatiga,\nbrisa en el estío,\nconsuelo en el llanto.\n\n¡Oh luz santísima!,\nllena lo más íntimo\nde los corazones de tus fieles.\n\nSin tu ayuda,\nnada hay en el hombre,\nnada que sea bueno.\n\nLava lo que está manchado,\nriega lo que está árido,\nsana lo que está enfermo.\n\nDoblega lo que está rígido,\ncalienta lo que está frío,\nendereza lo que está extraviado.\n\nConcede a tus fieles\nque en Ti confían\ntus siete sagrados dones.\n\nDales el mérito de la virtud,\ndales el puerto de salvación,\ndales la felicidad eterna.';

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ven, Espíritu Santo Creador',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.devocionDetalle}>
            <Text style={styles.devocionTitulo}>Ven, Espíritu Santo Creador</Text>
            {renderTextoConTitulos(texto)}
            <TouchableOpacity 
              style={styles.botonVolver}
              onPress={() => router.back()}
            >
              <Text style={styles.botonVolverTexto}>Volver al listado</Text>
            </TouchableOpacity>
          </View>
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
  devocionDetalle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  devocionTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  oracionTexto: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#CC0000',
    marginVertical: 10,
    textAlign: 'center',
  },
});
