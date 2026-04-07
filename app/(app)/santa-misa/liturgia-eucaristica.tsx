import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

export default function LiturgiaEucaristicaPage() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Liturgia Eucarística',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textoRojoItalic}>
            El sacerdote presenta a Dios los dones del pan y del vino que, por la Consagración, se convertirán en el Cuerpo y la Sangre del Señor. Esta parte se conoce como el 'Ofertorio'.
          </Text>

          <Text style={styles.tituloRojo}>Presentación de las ofrendas <Text style={styles.textoItalica}>(sentados)</Text></Text>
          <Text style={styles.textoRojoItalic}>Al ofrecer el pan, el sacerdote dice:</Text>
          <Text style={styles.texto}>
            Bendito seas, Señor, Dios del Universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos: él será para nosotros pan de vida.
          </Text>
          <Text style={styles.textoRojoItalic}>Si el sacerdote lo ha dicho en voz alta, el pueblo aclamará:</Text>
          <Text style={styles.texto}>Bendito seas, por siempre, Señor.</Text>

          <Text style={styles.textoRojoItalic}>
            El diácono o el sacerdote dice en voz baja mientras pone vino y un poco de agua en el cáliz:
          </Text>
          <Text style={styles.texto}>
            Por el misterio de esta agua y este vino, haz que compartamos la divinidad de quien se ha dignado participar de nuestra humanidad.
          </Text>

          <Text style={styles.textoRojoItalic}>Al ofrecer el vino, el sacerdote dice:</Text>
          <Text style={styles.texto}>
            Bendito seas, Señor, Dios del Universo, por este vino, fruto de la vid y del trabajo del hombre, que recibimos de tu generosidad y ahora te presentamos: él será para nosotros bebida de salvación.
          </Text>

          <Text style={styles.textoRojoItalic}>Si el sacerdote lo ha dicho en voz alta, el pueblo aclamará:</Text>
          <Text style={styles.texto}>Bendito seas, por siempre, Señor.</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, inclinado, dice en secreto:</Text>
          <Text style={styles.texto}>
            Acepta, Señor, nuestro corazón contrito y nuestro espíritu humilde; que éste sea hoy nuestro sacrificio y que sea agradable en tu presencia, Señor, Dios nuestro.
          </Text>

          <Text style={styles.textoRojoItalic}>Mientras el sacerdote se lava las manos, dice en secreto:</Text>
          <Text style={styles.texto}>Lava del todo mi delito, Señor, limpia mi pecado.</Text>

          <Text style={styles.textoRojoItalic}>El celebrante se va al centro del altar y, de cara al pueblo, dice:</Text>
          <Text style={styles.textoRojoItalic}>(De pie)</Text>
          <Text style={styles.texto}>
            Oremos, hermanos, para que este sacrificio mío y de ustedes, sea agradable a Dios, Padre todopoderoso.
          </Text>

          <Text style={styles.textoRojoItalic}>El pueblo responde:</Text>
          <Text style={styles.textoItalica}>
            El Señor reciba de tus manos este sacrificio, para alabanza y gloria de su nombre, para nuestro bien y el de toda su santa Iglesia.
          </Text>

          <Text style={styles.tituloRojo}>Oración sobre las ofrendas</Text>
          <Text style={styles.textoRojoItalic}>El sacerdote lee la 'Oración sobre las ofrendas' prevista para ese día.</Text>

          <Text style={styles.tituloRojo}>Plegaria Eucarística</Text>

          <Text style={styles.texto}>Levantemos el corazón</Text>
          <Text style={styles.textoItalica}>R. Lo tenemos levantado hacia el Señor.</Text>

          <Text style={styles.texto}>Demos gracias al Señor, nuestro Dios.</Text>
          <Text style={styles.textoItalica}>R. Es justo y necesario.</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote lee el Prefacio correspondiente a ese día, a cuyo término todos dicen:</Text>

          <Text style={styles.texto}>
            Santo, Santo, Santo es el Señor,{'\n'}
            Dios del Universo.{'\n'}
            Llenos están el cielo y la tierra de tu gloria.{'\n'}
            Hosanna en el cielo.{'\n'}
            Bendito el que viene en nombre del Señor.{'\n'}
            Hosanna en el cielo.
          </Text>

          <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Selecciona una de las plegarias principales:</Text>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-1')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística I (Canon Romano)</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-2')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística II</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-3')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística III</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-4')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística IV</Text>
          </Pressable>

          <Text style={styles.tituloRojo}>Rito de la Comunión</Text>
          <Text style={styles.textoRojoItalic}>Una vez que el sacerdote ha dejado el cáliz sobre el altar y la patena, dice:</Text>

          <Text style={styles.texto}>
            Fieles a la recomendación del Salvador y siguiendo{'\n'}
            su divina enseñanza, nos atrevemos a decir:
          </Text>

          <Text style={styles.textoRojoItalic}>O bien:</Text>
          <Text style={styles.texto}>
            Llenos de alegría por ser hijos de Dios, digamos{'\n'}
            confiadamente la oración que Cristo nos enseñó:
          </Text>

          <Text style={styles.textoRojoItalic}>O bien:</Text>
          <Text style={styles.texto}>
            El Amor de Dios ha sido derramado en nuestros{'\n'}
            corazones con el Espíritu Santo que se nos ha dado;{'\n'}
            digamos con fe y esperanza:
          </Text>

          <Text style={styles.textoRojoItalic}>O bien:</Text>
          <Text style={styles.texto}>
            Antes de participar en el banquete de la Eucaristía,{'\n'}
            signo de reconciliación y vínculo de unión fraterna,{'\n'}
            oremos juntos como el Señor nos ha enseñado:
          </Text>

          <Text style={styles.textoRojoItalic}>Extiende las manos y, junto con el pueblo, continúa:</Text>

          <Text style={styles.textoItalica}>
            Padre nuestro que estás en el cielo santificado sea tu
            Nombre; venga a nosotros tu reino; hágase tu voluntad
            en la tierra como en el cielo.
            Danos hoy nuestro pan de cada día; perdona nuestras
            ofensas, como también nosotros perdonamos a los que nos
            ofenden; no nos dejes caer en la tentación, y líbranos del mal.
          </Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, con las manos extendidas, prosigue él solo:</Text>

          <Text style={styles.texto}>
            Líbranos de todos los males, Señor y concédenos la paz{'\n'}
            en nuestros días, para que ayudados por tu misericordia,{'\n'}
            vivamos siempre libres de pecado y protegidos de toda{'\n'}
            perturbación, mientras esperamos la gloriosa venida de{'\n'}
            nuestro Salvador Jesucristo.
          </Text>

          <Text style={styles.textoRojoItalic}>El pueblo concluye la oración aclamando:</Text>
          <Text style={styles.texto}>
            Tuyo es el reino,{'\n'}
            tuyo el poder y la gloria,{'\n'}
            por siempre, Señor.
          </Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, con las manos extendidas, dice en voz alta:</Text>
          <Text style={styles.texto}>
            Señor Jesucristo, que dijiste a tus apóstoles: 'La paz{'\n'}
            os dejo, mi paz os doy', no tengas en cuenta nuestros{'\n'}
            pecados, sino la fe de tu Iglesia, y conforme a tu palabra,{'\n'}
            concédele la paz y la unidad. Tú que vives y reinas por{'\n'}
            los siglos de los siglos.
          </Text>

          <Text style={styles.textoItalica}>El pueblo responde:</Text>
          <Text style={styles.texto}>Amén.</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, extendiendo y juntando las manos, añade:</Text>
          <Text style={styles.texto}>La paz del Señor esté siempre con ustedes.</Text>

          <Text style={styles.textoRojoItalic}>El pueblo responde:</Text>
          <Text style={styles.texto}>Y con tu espíritu.</Text>

          <Text style={styles.textoRojoItalic}>Luego, si se estima oportuno, el diácono o el sacerdote añaden:</Text>
          <Text style={styles.texto}>Dense fraternalmente un saludo de paz.</Text>

          <Text style={styles.textoRojoItalic}>Y todos, según la costumbre del lugar se dan la paz.</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote deja caer en el cáliz una parte del pan consagrado, diciendo en secreto:</Text>
          <Text style={styles.texto}>
            El Cuerpo y la Sangre de Nuestro Señor Jesucristo, unidos{'\n'}
            en este cáliz, sean para nosotros alimento de vida eterna.
          </Text>

          <Text style={styles.textoRojoItalic}>Mientras tanto se canta o se recita:</Text>
          <Text style={styles.texto}>
            Cordero de Dios, que quitas el pecado del mundo,{'\n'}
            ten piedad de nosotros.{'\n\n'}
            Cordero de Dios, que quitas el pecado del mundo,{'\n'}
            ten piedad de nosotros.{'\n\n'}
            Cordero de Dios, que quitas el pecado del mundo,{'\n'}
            danos la paz.
          </Text>

          <Text style={styles.textoRojoItalic}>El sacerdote reza en secreto la oración para la comunión:</Text>
          <Text style={styles.texto}>
            Señor Jesucristo, la comunión de tu Cuerpo y de tu Sangre{'\n'}
            no sea para mí un motivo de juicio y condenación, sino que, por{'\n'}
            tu piedad, me aproveche para defensa de alma y cuerpo y como{'\n'}
            remedio saludable.
          </Text>

          <Text style={styles.textoRojoItalic}>O bien:</Text>
          <Text style={styles.texto}>
            Señor Jesucristo, Hijo de Dios vivo, que por voluntad del{'\n'}
            Padre, cooperando el Espíritu Santo, diste con tu muerte la vida{'\n'}
            al mundo, líbrame, por la recepción de tu Cuerpo y de tu Sangre,{'\n'}
            de todas mis culpas y de todo mal. Concédeme cumplir siempre{'\n'}
            tus mandamientos y jamás permitas que me separe de ti.
          </Text>

          <Text style={styles.textoRojoItalic}>El sacerdote hace genuflexión, toma el pan consagrado, lo eleva y lo muestra al pueblo, diciendo:</Text>
          <Text style={styles.texto}>
            Este es el Cordero de Dios, que quita el pecado del{'\n'}
            mundo. Dichosos los invitados a la cena del Señor.
          </Text>

          <Text style={styles.textoRojoItalic}>Y, juntamente con el pueblo, añade:</Text>
          <Text style={styles.texto}>
            Señor, no soy digno de que entres en mi casa, pero{'\n'}
            una palabra tuya bastará para sanarme.
          </Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, después de comulgar con el Cuerpo y la Sangre de Cristo, lee la 'Antífona de Comunión' que corresponde a ese día. Seguidamente, se acerca a los que quieren comulgar y mostrándoles el pan consagrado, dice a cada uno de ellos:</Text>
          <Text style={styles.texto}>El Cuerpo de Cristo.</Text>

          <Text style={styles.textoRojoItalic}>El que va a comulgar responde:</Text>
          <Text style={styles.texto}>Amén.</Text>

          <Text style={styles.textoRojoItalic}>Después, con el pueblo sentado o de rodillas, tiene lugar la purificación, que es cuando se limpian la patena y el cáliz. El sacerdote dice en secreto:</Text>
          <Text style={styles.texto}>
            Haz, Señor, que recibamos con un corazón limpio el alimento{'\n'}
            que acabamos de tomar, y que el don que nos haces en esta vida{'\n'}
            nos aproveche para la eterna.
          </Text>

          <Text style={styles.textoRojoItalic}>Acto seguido, el sacerdote puede ir a la sede, o lugar destinado para sentarse. Si se estima oportuno, se pueden guardar unos momentos de silencio o cantar un salmo o cántico de alabanza.</Text>

          <Text style={styles.textoRojoItalic}>De pie en la sede o en el altar, el sacerdote dice:</Text>
          <Text style={styles.texto}>Oremos.</Text>

          <Text style={styles.textoRojo}>De pie</Text>

          <Text style={styles.textoRojoItalic}>Todos oran en silencio durante unos momentos. Luego el sacerdote dice la 'Oración para después de la comunión' de ese día. El pueblo aclama:</Text>
          <Text style={styles.texto}>Amén.</Text>
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
  textoNegrita: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 10,
    fontWeight:'bold',
    color:'#000000',
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
  opcion: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    marginBottom: 10,
  },
  opcionTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
}); 