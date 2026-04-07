import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function OracionSagradoDificultadesScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Oración al Sagrado Corazón ante las dificultades',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Oración al Sagrado Corazón ante las dificultades</Text>
          <Text style={styles.author}>San Claudio de la Colombiere</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.corazones.org/santos/claudio_colombiere.htm')}
                    >
            <Text style={styles.buttonText}>Conoce más sobre San Claudio de la Colombiere</Text>
            </TouchableOpacity>
          <Text style={styles.context}>
            Sacerdote jesuita a quien el propio Sagrado Corazón de Jesús eligió para impulsar la propagación de esta devoción. Un día el santo escribió una profunda oración ante las dificultades.
          </Text>
          <Text style={styles.prayer}>
            Dios mío, estoy tan persuadido de que veláis sobre todos los que en Vos esperan y de que nada puede faltar quien de Vos aguarda toda las cosas, que he resuelto vivir en adelante sin cuidado alguno, descargando sobre Vos todas mis inquietudes.
            {"\n\n"}
            Mas yo dormiré en paz y descansaré; porque Tú, ¡Oh Señor! y sólo Tú, has asegurado mi esperanza.
            {"\n\n"}
            Los hombres pueden despojarme de los bienes y de la reputación; las enfermedades pueden quitarme las fuerzas y los medios de serviros; yo mismo puedo perder vuestra gracia por el pecado; pero no perderé mi esperanza; la conservaré hasta el último suspiro de mi vida y serán inútiles todos los esfuerzos de los demonios del infierno para arrancármela. Dormiré y descansaré en paz.
            {"\n\n"}
            Que otros esperen su felicidad de su riqueza o de sus talentos; que se apoyen sobre la inocencia de su vida, o sobre el rigor de su penitencia, o sobre el número de sus buenas obras, o sobre el fervor de sus oraciones. En cuanto a mí, Señor, toda mi confianza es mi confianza misma. Porque Tú, Señor, solo Tú, has asegurado mi esperanza.
            {"\n\n"}
            A nadie engañó esta confianza. Ninguno de los que han esperado en el Señor ha quedado frustrado en su confianza.
            {"\n\n"}
            Por tanto, estoy seguro de que seré eternamente feliz, porque firmemente espero serlo y porque de Vos ¡oh Dios mío! es de Quien lo espero. En Ti esperé, Señor, y jamás seré confundido.
            {"\n\n"}
            Bien conozco ¡ah! Demasiado lo conozco, que soy frágil e inconstante; sé cuánto pueden las tentaciones contra la virtud más firme; he visto caer los astros del cielo y las columnas del firmamento; pero nada de esto puede aterrarme. Mientras mantenga firme mi esperanza, me conservaré a cubierto de todas las calamidades; y estoy seguro de esperar siempre, porque espero igualmente esta invariable esperanza.
            {"\n\n"}
            En fin, estoy seguro de que no puedo esperar con exceso de Vos y de que conseguiré todo lo que hubiese esperado de Vos. Así, espero que me sostendréis en las más rápidas y resbaladizas pendientes; que me fortaleceréis contra los más violentos asaltos de mis enemigos; que haréis triunfar mi flaqueza sobre mis más formidables enemigos. Espero que me amaréis siempre y que yo os amaré sin interrupción. Para llevar de una vez toda mi esperanza tan lejos como puedo llevarla, os espero a Vos mismo de Vos mismo ¡oh Creador mío! para el tiempo y para la eternidad. Así sea.
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  context: {
    fontSize: 16,
    color: Colors.primary,
    backgroundColor: '#f3f3f3',
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    padding: 12,
    marginBottom: 20,
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
  prayer: {
    fontSize: 18,
    color: '#222',
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
  },
}); 