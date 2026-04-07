import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function VenEspirituSantoScreen() {
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

  const texto = '[TITULO]Antes[/TITULO]\nV. Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía tu Espíritu y serán creadas todas las cosas.\nR. Y renovarás la faz de la tierra.\n\n[TITULO]Oremos[/TITULO]\n¡Oh, Dios, que has instruido los corazones de tus fieles con la luz del Espíritu Santo!, concédenos que sintamos rectamente con el mismo Espíritu y gocemos siempre de su divino consuelo. Por Jesucristo Nuestro Señor. Amén.\n\n[TITULO]Después[/TITULO]\nV. Te damos gracias, Dios todopoderoso, por todos tus beneficios. Que vives y reinas por los siglos de los siglos.\nR. Amén.';

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ven, Espíritu Santo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.devocionDetalle}>
            <Text style={styles.devocionTitulo}>Ven, Espíritu Santo</Text>
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
