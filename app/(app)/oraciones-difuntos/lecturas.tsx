import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LecturasScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Lecturas Bíblicas',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white,
          headerLeft: () => (
            <Pressable 
              onPress={() => router.back()}
              style={{ marginLeft: 16 }}
            >
              <Ionicons name="arrow-back" size={24} color={Colors.white} />
            </Pressable>
          )
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Lecturas Bíblicas</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Uno de los presentes o el ministro proclama la palabra de Dios.{"\n"}
              Para ello pueden utilizar las siguientes lecturas o parte de ellas:
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Salmo Responsorial Salmo 23</Text>
            <Text style={styles.texto}>
              <Text style={styles.respuesta}>R. El Señor es mi pastor, nada me falta.</Text>{"\n\n"}
              El Señor es mi pastor, nada me falta,{"\n"}
              en verdes pastos él me hace reposar{"\n"}
              y adonde brota agua fresca me conduce. <Text style={styles.respuesta}>R.</Text>{"\n\n"}
              Fortalece mi alma,{"\n"}
              por el camino del bueno me dirige,{"\n"}
              por amor de su nombre. <Text style={styles.respuesta}>R.</Text>{"\n\n"}
              Aunque pase por quebrada muy oscuras,{"\n"}
              no temo ningún mal,{"\n"}
              porque tú estás conmigo,{"\n"}
              tu bastón y tu vara me protegen. <Text style={styles.respuesta}>R.</Text>{"\n\n"}
              Me sirves a la mesa frente a mis adversarios,{"\n"}
              con aceites tú perfumas mi cabeza{"\n"}
              y rellenas mi copa. <Text style={styles.respuesta}>R.</Text>{"\n\n"}
              Me acompaña tu bondad y tu favor{"\n"}
              mientras dura mi vida,{"\n"}
              mi mansión será la casa del Señor{"\n"}
              por largo, largo tiempo. <Text style={styles.respuesta}>R.</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Evangelio S. Juan 6, 37-40</Text>
            <Text style={styles.subtituloItalica}>
              Jesús resucitará a los suyos de la muerte{"\n"}
              y les dará la vida eterna.
            </Text>
            
            <Text style={styles.texto}>
              Lectura del Santo Evangelio según San Juan{"\n"}
              Jesús dice:{"\n"}
              «Todo lo que el Padre me ha dado vendrá a mí,{"\n"}
              y yo no rechazaré al que venga a mí,{"\n"}
              porque yo he bajado del cielo,{"\n"}
              no para hacer mi propia voluntad,{"\n"}
              sino la voluntad del que me ha enviado.{"\n"}
              Y la voluntad del que me ha enviado{"\n"}
              es que yo no pierda nada de lo que él me ha dado,{"\n"}
              sino que lo resucite en el último día.{"\n"}
              La voluntad de mi Padre{"\n"}
              es que todo hombre que ve al Hijo y cree en él{"\n"}
              tenga vida eterna:{"\n"}
              y yo lo resucitaré en el último día».
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Otras lecturas sugeridas:</Text>
            <Text style={styles.texto}>
              Job 19,23-27a Apocalipsis 21,1-5a, 6-7{"\n"}
              Isaías 35,3-4; 6c-7; 10; Juan 4,16{"\n"}
              Salmo 123 Mateo 25,1-13{"\n"}
              Salmo 25,1-5-11 Marcos 15,33-37{"\n"}
              Salmo 91 Marcos 16,1-8{"\n"}
              Salmo 114 Lucas 22,39-46{"\n"}
              Salmo 115,3-5 Lucas 23,43-43{"\n"}
              Salmo 121,1-4 Lucas 24,1-8{"\n"}
              1 Cor 15,1-4 Juan 14,1-6; 23; 27
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
  subtituloItalica: {
    fontSize: 18,
    fontStyle: 'italic',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
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
  respuesta: {
    color: Colors.primary,
    fontWeight: 'bold',
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