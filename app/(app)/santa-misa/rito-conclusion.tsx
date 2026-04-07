import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function RitoConclusionPage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Rito de Conclusión',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.tituloRojo}>Rito de conclusión</Text>
          <Text style={styles.textoRojoItalic}>
            Llegados a este momento, pueden hacerse, si es necesario y con{'\n'}
            brevedad, los anuncios o advertencias al pueblo. Luego tiene lugar{'\n'}
            la despedida. El sacerdote extiende las manos hacia el pueblo y dice:
          </Text>

          <Text style={styles.texto}>El Señor esté con ustedes.</Text>

          <Text style={styles.textoRojoItalic}>El pueblo responde:</Text>
          <Text style={styles.texto}>Y con tu espíritu.</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote bendice al pueblo, diciendo:</Text>
          <Text style={styles.texto}>
            La bendición de Dios todopoderoso, Padre, Hijo y{'\n'}
            Espíritu Santo,{'\n'}
            descienda sobre ustedes
          </Text>

          <Text style={styles.textoRojoItalic}>El pueblo responde:</Text>
          <Text style={styles.texto}>Amén.</Text>

          <Text style={styles.textoRojoItalic}>
            Luego el diácono, o el mismo sacerdote, con las manos juntas,{'\n'}
            despide al pueblo, diciendo:
          </Text>
          <Text style={styles.texto}>Pueden ir en paz.</Text>

          <Text style={styles.textoRojoItalic}>El pueblo responde:</Text>
          <Text style={styles.texto}>Demos gracias a Dios.</Text>

          <Text style={styles.textoRojoItalic}>
            El sacerdote besa con veneración el altar, como al comienzo; y, una{'\n'}
            vez realizada la debida reverencia con los demás ministros que han{'\n'}
            intervenido en la celebración, se retira a la sacristía.
          </Text>
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