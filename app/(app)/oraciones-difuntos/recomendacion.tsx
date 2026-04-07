import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function RecomendacionScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Recomendación del Alma',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Preces de la Recomendación del Alma</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Cuando parece que es ya inminente el momento de la muerte, si está presente el obispo, un presbítero o un diácono, éste dice las <Text style={styles.italic}>oraciones de la recomendación del alma</Text>. Si no está presente ningún ministro ordenado, estas mismas preces las dice alguno de los presentes.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>Se pueden rezar alguna de las siguientes oraciones:</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              1. Alma cristiana, al salir de este mundo,{"\n"}
              marcha en el nombre de Dios Padre todopoderoso,{"\n"}
              que te creó;{"\n"}
              en el nombre de Jesucristo, Hijo de Dios vivo,{"\n"}
              que murió por ti;{"\n"}
              en el nombre del Espíritu Santo,{"\n"}
              que sobre ti descendió.{"\n\n"}
              Entra en el lugar de la paz{"\n"}
              y que tu morada esté junto a Dios en Sión,{"\n"}
              la ciudad santa,{"\n"}
              con Santa María Virgen, Madre de Dios,{"\n"}
              con San José{"\n"}
              y todos los ángeles y santos.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              2. Hermano(a) mío(a),{"\n"}
              te pongo en manos de Dios todopoderoso,{"\n"}
              para que vuelvas al mismo que te creó{"\n"}
              y te formó del polvo de la tierra.{"\n"}
              Cuando salgas de este mundo,{"\n"}
              que vengan a tu encuentro la Santísima Virgen María,{"\n"}
              los ángeles y todos los santos.{"\n"}
              Nuestro Señor Jesucristo,{"\n"}
              que quiso morir por ti en la cruz,{"\n"}
              te libre de la muerte eterna.{"\n"}
              El Hijo de Dios vivo te lleve a su Reino{"\n"}
              y te reconozca entre sus ovejas, el buen pastor;{"\n"}
              que él perdone tus pecados{"\n"}
              y te cuente entre sus elegidos;{"\n"}
              que te veas cara a cara a tu redentor{"\n"}
              y goces de la contemplación de Dios{"\n"}
              por los siglos de los siglos.{"\n"}
              R. Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              3. V. Dale, Señor, a tu hijo(a) la eterna salvación que espera{"\n"}
              de tu misericordia. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a) de todas las tribulaciones.{"\n"}
              Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a Noé del{"\n"}
              diluvio. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a Abraham{"\n"}
              de sus enemigos. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a Job de sus{"\n"}
              padecimientos. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a Moisés{"\n"}
              del poder del faraón. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a Daniel del{"\n"}
              foso de los leones. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a los tres{"\n"}
              jóvenes del horno ardiente y del poder de un rey{"\n"}
              inicuo. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a Susana de{"\n"}
              la calumnia. Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a David de{"\n"}
              las manos de Goliat y de la persecución del rey Saúl.{"\n"}
              Amén.{"\n\n"}
              V. Salva, Señor, a tu hijo(a), como salvaste a Pedro y a{"\n"}
              Pablo de la cárcel. Amén.{"\n\n"}
              V. Por Jesucristo, nuestro salvador, que padeció por{"\n"}
              nosotros una muerte tan amarga y nos mereció la vida{"\n"}
              eterna, salva, Señor, a este(a) hijo(a) tuyo(a). Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Para terminar se puede rezar la <Text style={styles.italic}>Salve Regina</Text>.
            </Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  seccion: {
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 10,
  },
  italic: {
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 