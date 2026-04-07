import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function CementerioScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Preces en el cementerio',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Preces en el cementerio y bendición del sepulcro</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              (Sólo el Obispo, sacerdote y diácono)
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oración</Text>
            <Text style={styles.texto}>
              Si el sepulcro no está bendecido, se bendice antes de depositar el cuerpo en él.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oremos.</Text>
            <Text style={styles.texto}>
              Señor Jesucristo,{"\n"}
              tú permaneciste tres días en el sepulcro,{"\n"}
              dando así a toda sepultura un carácter de espera{"\n"}
              en la esperanza de la resurrección.{"\n"}
              Concede a tu siervo reposar en la paz de este sepulcro{"\n"}
              hasta que tú, resurrección y vida de los hombres,{"\n"}
              le resucites y le lleves a contemplar la luz de tu rostro.{"\n"}
              Tú que vives y reinas por los siglos de los siglos.{"\n"}
              Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Dicha la oración, si existe la costumbre, el sacerdote rocía con agua bendita e inciensa el sepulcro y el cuerpo del difunto, a no ser que se haga dentro del rito de la última recomendación.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Rito de Inhumación</Text>
            <Text style={styles.texto}>
              El acto de sepultar al difunto se hace inmediatamente o al final del rito, según la costumbre del lugar. Mientras se coloca el cuerpo en el sepulcro, o en otro momento oportuno, el sacerdote puede decir:{"\n\n"}
              Dios todopoderoso ha llamado a nuestro(a) hermano(a){"\n"}
              y nosotros ahora enterramos su cuerpo,{"\n"}
              para que vuelva a la tierra de donde fue sacado.{"\n"}
              Con la fe puesta en la resurrección de Cristo,{"\n"}
              primogénito de los muertos,{"\n"}
              creemos que él transformará nuestro cuerpo humillado{"\n"}
              y lo hará semejante a su cuerpo glorioso.{"\n"}
              Por eso encomendamos nuestro hermano(a) al Señor,{"\n"}
              para que lo(a) resucite en el último día{"\n"}
              y lo(a) admita en la paz de su Reino.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Si hay homilía junto al sepulcro, téngase en este momento.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Si también se hace junto al sepulcro la última recomendación y despedida, téngase en lugar de las siguientes preces finales. En este caso el rito de última recomendación y despedida concluye las exequias.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Última Recomendación y Despedida</Text>
            <Text style={styles.subtitulo}>Preces Finales</Text>
            <Text style={styles.texto}>
              Terminar con la siguiente oración
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oremos.</Text>
            <Text style={styles.texto}>
              Señor, ten misericordia de tu siervo(a),{"\n"}
              para que no sufra castigo por sus faltas,{"\n"}
              pues deseó cumplir tu voluntad.{"\n"}
              La verdadera fe lo(a) unió aquí,{"\n"}
              en la tierra, al pueblo fiel,{"\n"}
              que tu bondad lo(a) una ahora{"\n"}
              al coro de los ángeles y elegidos.{"\n"}
              Por Jesucristo nuestro Señor.{"\n"}
              Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Como conclusión del rito puede entonarse algún canto apropiado.
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
  respuesta: {
    color: Colors.primary,
    fontWeight: 'bold',
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