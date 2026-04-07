import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function InvocacionesScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Invocaciones Breves',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Invocaciones Breves</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Se pueden recitar suavemente con la persona moribunda algunos de los textos siguientes. También se pueden usar otras oraciones jaculatorias.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              ¿Quién podrá apartarnos del amor de Cristo?
            </Text>
            <Text style={styles.cita}>Romanos 8, 35</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Si vivimos, vivimos para el Señor,{"\n"}
              y si morimos, morimos para el Señor.
            </Text>
            <Text style={styles.cita}>Romanos 14, 8</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              El Señor es mi luz y mi salvación.
            </Text>
            <Text style={styles.cita}>Salmo 27</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Sediento estoy de Dios, del Dios que me da vida.
            </Text>
            <Text style={styles.cita}>Salmo 42</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Mi alma tiene sed del Dios vivo.
            </Text>
            <Text style={styles.cita}>Salmo 25</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Señor, mi Dios, a ti levanto mi alma, en ti confío.
            </Text>
            <Text style={styles.cita}>Salmo 25</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              En la casa de mi Padre hay muchas moradas.
            </Text>
            <Text style={styles.cita}>Juan 14, 2</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Yo quiero que allí donde estoy yo,{"\n"}
              estéis también conmigo, dice Jesús.
            </Text>
            <Text style={styles.cita}>Juan 17, 24</Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Jesús, José y María, asistidme en mi agonía.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Señor, Dios mío, ya desde ahora acepto de buena voluntad, como venida de vuestra mano, cualquier género de muerte que os plazca enviarme, con todas sus angustias, penas y dolores.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Salmo 129</Text>
            <Text style={styles.nota}>(Indulgencia parcial solo aplicable a las almas del Purgatorio)</Text>
            <Text style={styles.texto}>
              "Desde lo más profundo te invoco, Señor,{"\n"}
              ¡Señor, oye mi voz!{"\n"}
              Estén tus oídos atentos{"\n"}
              al clamor de mi plegaria.{"\n"}
              Si tienes en cuenta las culpas, Señor,{"\n"}
              ¿quién podrá subsistir?{"\n"}
              Pero en ti se encuentra el perdón,{"\n"}
              para que seas temido.{"\n"}
              Mi alma espera en el Señor,{"\n"}
              y yo confío en su palabra.{"\n"}
              Mi alma espera al Señor,{"\n"}
              más que el centinela la aurora.{"\n"}
              Como el centinela espera la aurora,{"\n"}
              espere Israel al Señor,{"\n"}
              porque en él se encuentra la misericordia{"\n"}
              y la redención en abundancia:{"\n"}
              él redimirá a Israel{"\n"}
              de todos sus pecados."
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Acto de contrición</Text>
            <Text style={styles.texto}>
              Cuando mis manos trémulas ya no puedan estrechar el Crucifijo, y a pesar mío le dejan caer sobre el lecho del dolor:{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mis ojos, apagados con el dolor de la cercana muerte, fijen en Vos por última vez sus miradas moribundas;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mis labios fríos y balbucientes pronuncien por última vez vuestro santísimo Nombre;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mi cara pálida amoratada causa ya lástima y terror a los circunstantes, y los cabellos de mi cabeza, bañados con el sudor de la muerte, anuncien que está cercano mi fin;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mis oídos, próximos a cerrarse para siempre a las conversaciones de los hombres, se abran para oír de vuestra boca la sentencia irrevocable que marque mi suerte para toda la eternidad;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mi imaginación, agitada por horrendos fantasmas, se vea sumergida en mortales congojas, y mi espíritu, perturbado por el temor de vuestra justicia, a la vista de mis iniquidades, luche con el ángel de las tinieblas, que quisiera precipitarme en el abismo de la desesperación;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mi corazón, débil y oprimido por el dolor de la enfermedad, esté sobrecogido del horror de la muerte, fatigado y rendido por los esfuerzos que hubiere hecho contra los enemigos de mi salvación;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando derrame mis últimas lágrimas, síntomas de mi destrucción, recibidlas, Señor, en sacrificio de expiación, para que muera como víctima de penitencia, y en aquel momento terrible;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mis parientes y amigos, juntos a mí, lloren al verme en el último trance, y cuando invoquen vuestra misericordia en mi favor;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando perdido el uso de los sentidos, desaparezca todo el mundo de mi vista y gima entre las últimas agonías y afanes de la muerte;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando los últimos suspiros del corazón fuercen a mi alma a salir del cuerpo, aceptadlos como señales de una santa impaciencia de ir a reinar con Vos, entonces;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              Cuando mi alma salga de mi cuerpo, dejándolo pálido, frío y sin vida, aceptad la destrucción de él como un tributo que desde ahora quiero ofrecer a vuestra Majestad, y en aquella hora;{"\n"}
              Jesús misericordioso, tened compasión de mí.{"\n\n"}
              En fin, cuando mi alma comparezca delante de Vos, para ser juzgada, no la arrojéis de vuestra presencia, sino dignaos recibirla en el seno amoroso de vuestra misericordia, para que cante eternamente vuestras alabanzas;{"\n"}
              Jesús misericordioso, tened compasión de mí.
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
  cita: {
    fontSize: 16,
    color: Colors.primary,
    fontStyle: 'italic',
    textAlign: 'right',
  },
  nota: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    marginBottom: 15,
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