import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function SacramentoScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Liturgia del Sacramento',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Liturgia del sacramento</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Con humildad y confianza invoquemos al Señor a favor de N., nuestro hermano.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.peticion}>
              - Dígnate visitarlo con tu misericordia y confórtalo con la santa Unción
            </Text>
            <Text style={styles.respuesta}>
              R. Te rogamos Señor
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.peticion}>- Líbralo, Señor de todo mal.</Text>
            <Text style={styles.peticion}>- Alivia el dolor de todos los enfermos.</Text>
            <Text style={styles.peticion}>- Asiste a los que se dedican al cuidado de los enfermos.</Text>
            <Text style={styles.peticion}>- Libra a este enfermo del pecado y de toda tentación.</Text>
            <Text style={styles.peticion}>- Da vida y salud a quien en tu nombre vamos a imponer tus manos.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Bendición del óleo</Text>
            <Text style={styles.texto}>
              Señor Dios, Padre de todo consuelo, que has querido sanar las dolencias de los enfermos por medio de tu Hijo: escucha con amor la oración de nuestra fe y derrama desde el cielo tu Espíritu Santo Defensor sobre este óleo.
            </Text>
            <Text style={styles.texto}>
              Tú que has hecho que el leño verde del olivo produzca aceite abundante para vigor de nuestro cuerpo, enriquece con tu bendición este óleo, para que cuantos sean ungidos con él sientan en el cuerpo y en el alma tu divina protección y experimenten alivio en sus enfermedades y dolores.
            </Text>
            <Text style={styles.texto}>
              Que por tu acción, Señor, este aceite sea para nosotros óleo santo, en nombre de Jesucristo, nuestro Señor.
            </Text>
            <Text style={styles.texto}>
              El que vive y reina por los siglos de los siglos.
            </Text>
            <Text style={styles.respuesta}>R. Amén.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Santa Unción</Text>
            <Text style={styles.instruccion}>Se unge al enfermo en la frente y en las manos</Text>
            <Text style={styles.texto}>
              POR ESTA SANTA UNCIÓN Y POR SU BONDADOSA MISERICORDIA TE AYUDE EL SEÑOR CON LA GRACIA DEL ESPÍRITU SANTO.
            </Text>
            <Text style={styles.respuesta}>Amén</Text>
            <Text style={styles.instruccion}>(Le unge las manos diciendo)</Text>
            <Text style={styles.texto}>
              PARA QUE, LIBRE DE TUS PECADOS, TE CONCEDA LA SALVACIÓN Y TE CONFORME EN TU ENFERMEDAD.
            </Text>
            <Text style={styles.respuesta}>Amén.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.instruccion}>Después dice esta oración</Text>
            <Text style={styles.texto}>
              Te rogamos, Redentor nuestro, que por la gracia del Espíritu Santo, cures el dolor de este enfermo, sanes sus heridas, perdones sus pecados, ahuyentes todo sufrimiento de su cuerpo y de su alma y le devuelvas la salud espiritual y corporal, para que, restablecido por tu misericordia, se incorpore de nuevo a los quehaceres de su vida.
            </Text>
            <Text style={styles.respuesta}>Amén.</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Conclusión del rito</Text>
            <Text style={styles.texto}>
              Y ahora, todos juntos, invoquemos a Dios con la oración que el mismo Cristo nos enseñó.
            </Text>
            <Text style={styles.texto}>
              Padre Nuestro...
            </Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
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
    marginBottom: 15,
    marginTop: 20,
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
  peticion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 5,
    marginLeft: 20,
  },
  respuesta: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 10,
    fontStyle: 'italic',
    color: Colors.primary,
  },
  instruccion: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    textAlign: 'center',
    marginVertical: 10,
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