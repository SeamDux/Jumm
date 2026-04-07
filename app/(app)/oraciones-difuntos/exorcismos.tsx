import React from 'react';
import { StyleSheet, ScrollView, Pressable, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function ExorcismosScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Exorcismos',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Exorcismo</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Súplicas que pueden utilizar privadamente los fieles en la lucha contra el poder de las tinieblas
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_1999-01-26_il-rito-degli-esorcismi_sp.html')}
          >
            <Text style={styles.buttonText}>Leer más sobre los exorcismos</Text>
          </TouchableOpacity>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>ORACIONES</Text>
            <Text style={styles.texto}>
              1. Señor Dios, apiádate de mí, siervo tuyo{"\n"}
              que, a causa de muchas insidias,{"\n"}
              me he vuelto como un objeto perdido;{"\n"}
              sálvame de la mano de mis enemigos{"\n"}
              y ven a buscarme si estoy perdido,{"\n"}
              acógeme cuando me encuentres,{"\n"}
              y no me abandones,{"\n"}
              así podré agradarte por siempre,{"\n"}
              porque sé que me has redimido con tu fuerza.{"\n"}
              Por Jesucristo nuestro Señor. Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              2. Dios todopoderoso,{"\n"}
              que das cobijo a los afligidos en tu casa{"\n"}
              y conduces a los cautivos a la prosperidad,{"\n"}
              mira mi aflicción{"\n"}
              y ven en mi auxilio;{"\n"}
              derrota al enemigo malvado,{"\n"}
              para que, una vez vencida la acción del{"\n"}
              adversario,{"\n"}
              la libertad me conduzca a la paz,{"\n"}
              y, de modo que, restablecido en la piedad serena,{"\n"}
              proclame que eres admirable{"\n"}
              Tú que diste fuerza a tu pueblo.{"\n"}
              Por Jesucristo nuestro Señor. Amén
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              3. Oh Dios, creador y defensor del género{"\n"}
              humano, que formaste al hombre a tu imagen{"\n"}
              y lo recreaste más admirablemente{"\n"}
              con la gracia del Bautismo,{"\n"}
              dirige tu mirada sobre mí, siervo tuyo,{"\n"}
              y sé propicio a mis súplicas.{"\n"}
              Te pido que nazca en mi corazón{"\n"}
              el esplendor de tu gloria{"\n"}
              para que, eliminado plenamente todo temor,{"\n"}
              pueda alabarte{"\n"}
              con ánimo y espíritu sereno,{"\n"}
              junto a mis hermanos en tu Iglesia.{"\n"}
              Por Jesucristo, nuestro Señor. Amén
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              4. Oh Dios, origen de toda misericordia{"\n"}
              y de toda bondad, que quisiste que tu Hijo{"\n"}
              sufriera por nosotros el suplicio de la cruz para{"\n"}
              librarnos del poder del enemigo; mira propicio{"\n"}
              mi humillación y dolor, y concédeme,{"\n"}
              que me renovéis en la fuente bautismal, que,{"\n"}
              habiendo vencido el ataque del Maligno, me{"\n"}
              colme la gracia de tu bendición. Por Jesucristo{"\n"}
              nuestro Señor. Amén
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              5. Oh Dios, que, por la gracia de la adopción,{"\n"}
              quisiste que yo fuera hijo de la luz,{"\n"}
              te pido que me concedas{"\n"}
              no verme envuelto en las tinieblas de los{"\n"}
              demonios, sino que pueda por siempre{"\n"}
              permanecer plenamente en el esplendor de la{"\n"}
              libertad recibida de ti.{"\n"}
              Por Jesucristo nuestro Señor. Amén
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Invocaciones a la Santísima Trinidad</Text>
            <Text style={styles.texto}>
              Gloria al Padre y al Hijo y al Espíritu Santo.{"\n"}
              Sólo a Dios honor y gloria.{"\n"}
              Bendigamos al Padre y al Hijo y al Espíritu{"\n"}
              Santo: sea alabado y ensalzado por los siglos de{"\n"}
              los siglos.{"\n"}
              Te invocamos, te alabamos, te adoramos,{"\n"}
              oh santa Trinidad.{"\n"}
              Esperanza nuestra, salvación nuestra,{"\n"}
              honor nuestro,{"\n"}
              oh santa Trinidad.{"\n"}
              Líbrame, sálvame, vivifícame,{"\n"}
              oh santa Trinidad.{"\n"}
              Santo, santo, santo es el Señor, Dios{"\n"}
              todopoderoso, el que era, el que es y el que{"\n"}
              vendrá.{"\n"}
              A ti el honor y la fuerza, oh santa Trinidad,{"\n"}
              a ti la gloria y el poder por los siglos de los siglos.{"\n"}
              A ti la alabanza, a ti la gloria, a ti la acción de{"\n"}
              gracias por los siglos de los siglos, oh santa{"\n"}
              Trinidad.{"\n"}
              Santo Dios, Santo fuerte, Santo inmortal,{"\n"}
              ten piedad de mí.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Invocaciones a Nuestro Señor Jesucristo.</Text>
            <Text style={styles.texto}>
              Jesús, Hijo de Dios vivo, ten piedad mí{"\n"}
              Jesús, imagen del Padre,{"\n"}
              Jesús, Sabiduría eterna,{"\n"}
              Jesús, resplandor de la luz eterna,{"\n"}
              Jesús, Palabra de vida,{"\n"}
              Jesús, Hijo de la Virgen María,{"\n"}
              Jesús, Dios y hombre,{"\n"}
              Jesús, Sumo Sacerdote,{"\n"}
              Jesús, heraldo del reino de Dios,{"\n"}
              Jesús, camino, verdad y vida,{"\n"}
              Jesús, pan de vida,{"\n"}
              Jesús, vid verdadera,{"\n"}
              Jesús, hermano de los pobres,{"\n"}
              Jesús, amigo de los pecadores,{"\n"}
              Jesús, médico del alma y del cuerpo,{"\n"}
              Jesús, salvación de los oprimidos,{"\n"}
              Jesús, descanso de los abandonados,{"\n"}
              Tú que viniste a este mundo,{"\n"}
              Tú que libraste los oprimidos por el diablo,{"\n"}
              Tú que estuviste colgado en la cruz,{"\n"}
              Tú que aceptaste la muerte por nosotros,{"\n"}
              Tú que yaciste en el sepulcro,{"\n"}
              Tú que descendiste a los infiernos,{"\n"}
              Tú que resucitaste de entre los muertos,{"\n"}
              Tú que subiste a los cielos,{"\n"}
              Tú que enviaste el Espíritu Santo sobre los Apóstoles,{"\n"}
              Tú que te sientas a la derecha del Padre,{"\n"}
              Tú que vendrás a juzgar a vivos y muertos,{"\n\n"}
              Por tu encarnación Líbrame, Señor{"\n"}
              Por tu nacimiento,{"\n"}
              Por tu bautismo y santo ayuno,{"\n"}
              Por tu pasión y cruz,{"\n"}
              Por tu muerte y sepultura,{"\n"}
              Por tu santa resurrección,{"\n"}
              Por tu santa resurrección,{"\n"}
              Por tu admirable ascensión,{"\n"}
              Por el envío del Espíritu Santo,{"\n"}
              Por tu gloriosa venida,
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Otras invocaciones al Señor</Text>
            <Text style={styles.texto}>
              Cuando se nombra la cruz, puede el fiel{"\n"}
              oportunamente hacer la señal de la cruz{"\n"}
              Sálvame, Cristo Salvador, por la fuerza de la{"\n"}
              Cruz +: tú que salvaste a Pedro en el mar,{"\n"}
              ten piedad de mí.{"\n"}
              Por la señal de la santa Cruz +,{"\n"}
              de nuestros enemigos líbranos, Señor,{"\n"}
              Dios nuestro.{"\n"}
              Por tu Cruz, + sálvanos, oh Cristo Redentor, tú{"\n"}
              que muriendo destruiste nuestra muerte y{"\n"}
              resucitando restauraste la vida.{"\n"}
              Tu Cruz + adoramos, Señor, tu gloriosa pasión{"\n"}
              contemplamos: ten misericordia de nosotros, tú{"\n"}
              que padeciste por nosotros.{"\n"}
              Te adoramos, oh Cristo, y te bendecimos, porque{"\n"}
              con tu Cruz + has redimido al mundo.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Invocaciones a la Santísima Virgen María.</Text>
            <Text style={styles.texto}>
              Bajo tu protección nos acogemos,{"\n"}
              santa Madre de Dios;{"\n"}
              no deseches las súplicas{"\n"}
              que te dirigimos en nuestras necesidades;{"\n"}
              antes bien, líbranos siempre de todo peligro,{"\n"}
              oh Virgen gloriosa y bendita.{"\n"}
              Consoladora de los afligidos, ruega por nosotros.{"\n"}
              Auxilio de los cristianos, ruega por nosotros.{"\n"}
              Dígnate aceptar mis alabanzas, oh Virgen santa;{"\n"}
              hazme fuerte contra tus enemigos.{"\n"}
              Madre mía, confianza mía.{"\n"}
              María, Virgen Madre de Dios, ruega a Jesús por mí.{"\n"}
              Dignísima Reina del mundo,{"\n"}
              Virgen perpetua María,{"\n"}
              intercede por nuestra paz y salvación,{"\n"}
              tú que engendraste a Cristo Señor,{"\n"}
              Salvador de todos.{"\n"}
              María, Madre de gracia,{"\n"}
              Madre de misericordia,{"\n"}
              defiéndenos del enemigo,{"\n"}
              y ampáranos en la hora de la muerte.{"\n"}
              Socórreme, oh piadosísima Virgen María,{"\n"}
              en todas mis tribulaciones,{"\n"}
              angustias y necesidades,{"\n"}
              alcánzame de tu Hijo querido{"\n"}
              la liberación de todos los males{"\n"}
              y de los peligros de alma y cuerpo.{"\n"}
              Acuérdate, oh piadosísima Virgen María,{"\n"}
              que jamás se ha oído decir,{"\n"}
              que ni uno solo de cuantos han acudido a tu{"\n"}
              protección e implorado tu socorro,{"\n"}
              haya sido desamparado por ti.{"\n"}
              Yo pecador, animado con esta confianza,
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              San Pablo,{"\n"}
              San Juan,{"\n"}
              Todos los santos Apóstoles,{"\n"}
              Santa María Magdalena,{"\n"}
              (Pueden añadirse los nombres de otros Santos y Beatos){"\n"}
              De todo mal, Líbranos / me, Señor.{"\n"}
              De todo pecado,{"\n"}
              De las insidias del diablo,{"\n"}
              De la muerte eterna,{"\n"}
              Cristo, óyenos / me.{"\n"}
              Cristo, escúchanos / me
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