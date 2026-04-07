import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';

export default function LetaniasHumildadScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Letanías de la Humildad',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Letanías de la Humildad</Text>
          <Text style={styles.autor}>Cardenal Merry del Val</Text>
          <Text style={styles.prayer}>
            Que el Cardenal Merry del Val solía recitar después de celebrar la Santa Misa.{"\n\n"}
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.humanitas.cl/iglesia/el-cardenal-rafael-merry-del-val')}
          >
            <Text style={styles.buttonText}>Conoce más sobre el Cardenal Merry del Val</Text>
          </TouchableOpacity>{"\n"}

            Oh Jesús, manso{"\n"}
            y humilde de corazón,{"\n"} 
            <Text style={styles.textoRojoItalic}>Escucha mi plegaria.</Text>{"\n"}
            Del deseo de sentirme apreciado,{"\n"}
            <Text style={styles.textoRojoItalic}>Líbrame, Jesús</Text>{"\n"}
            Del deseo de sentirme amado,{"\n"}
            Del deseo de ser ensalzado,{"\n"}
            Del deseo de ser elogiado,{"\n"}
            Del deseo de ser alabado,{"\n"}
            Del deseo de ser preferido,{"\n"}
            Del deseo de ser consultado,{"\n"}
            Del deseo de ser aplaudido,{"\n"}
            Del temor a la humillación,{"\n"}
            Del temor al desprecio,{"\n"}
            Del temor al reproche,{"\n"}
            Del temor a la calumnia,{"\n"}
            Del temor al olvido,{"\n"}
            Del temor al ridículo,{"\n"}
            Del temor al agravio,{"\n"}
            Del temor al recelo,{"\n"}
            Que los demás sean
            más amados que yo,{"\n"}
            <Text style={styles.textoRojoItalic}>Ayúdame, Jesús, a desearlo</Text>{"\n"}
            Que los demás se sean{"\n"}
            más apreciados que yo,{"\n"}
            Que los demás crezcan{"\n"}
            y yo disminuya a los ojos del mundo,{"\n"}
            Que los demás sean alabados{"\n"}
            y yo pase oculto,{"\n"}
            Que los demás sean preferidos{"\n"}
            a mí en todo,{"\n"}
            Que los demás sean más santos que yo,{"\n"}
            siempre que yo alcance la santidad que Tú quieres.{"\n"}
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
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#222',
  },
  textoRojoItalic: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 10,
    color: '#dc2626',
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  autor: {
    fontSize: 20,
    color: Colors.text,
    marginBottom: 10,
    textAlign: 'center',
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
}); 