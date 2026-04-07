import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function VigiliaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Vigilia por el difunto',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Vigilia por el difunto</Text>
          
          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Durante las horas que transcurren hasta el momento de las exequias, se permanece velando el cuerpo del difunto y acompañando a la familia en señal de condolencia.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              Es muy aconsejable que, según las costumbres y posibilidades de cada lugar, los amigos y familiares del difunto se reúnan en la casa del difunto o en la funeraria para celebrar una vigilia de oración. Esta vigilia la preside un obispo, un sacerdote o un diácono o, en su defecto, la dirige un laico.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Monición Introductoria</Text>
            <Text style={styles.texto}>
              El que preside o dirige empieza con estas palabras:
            </Text>
            <Text style={styles.texto}>
              Hermanos: Es lógico vuestro dolor, pues siempre duele la separación de los seres que amamos. Pero en este momento tengamos confianza en el Señor, que nos dice: «Venid a mí todos los que estáis cansados y agobiados, que yo os aliviaré». Por eso, vamos a escuchar su palabra de consuelo y a orar con la confianza de los hijos de Dios.
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
              Aunque pase por quebradas muy oscuras,{"\n"}
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
            <Text style={styles.subtitulo}>Oración</Text>
            <Text style={styles.texto}>
              Dios de misericordia y de amor,{"\n"}
              ponemos en tus manos amorosas a nuestro(a) hermano(a) N.{"\n"}
              En esta vida tú le demostraste tu gran amor;{"\n"}
              y ahora que ya está libre de toda preocupación,{"\n"}
              concédele la felicidad y la paz eterna.{"\n"}
              Su vida terrena ha terminado ya;{"\n"}
              recíbelo(a) ahora en el paraíso,{"\n"}
              en donde ya no habrá dolores,{"\n"}
              ni lágrimas ni penas,{"\n"}
              sino únicamente paz y alegría{"\n"}
              con Jesús, tu Hijo,{"\n"}
              y con el Espíritu Santo, para siempre.{"\n"}
              Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Evangelio Jn 12 23-26</Text>
            <Text style={styles.texto}>
              Lectura del santo Evangelio según San Juan{"\n"}
              En aquel tiempo dijo Jesús a sus discípulos:{"\n"}
              <Text style={styles.italic}>Ha llegado la hora de que sea glorificado el Hijo del hombre.{"\n"}
              Os aseguro que, si el grano que cae en tierra y muere, queda{"\n"}
              infecundo; pero, si muere, da mucho fruto. El que se ama a sí mismo,{"\n"}
              se pierde, y el que se aborrece a sí mismo en este mundo, se guardará{"\n"}
              para la vida eterna. El que quiera servirme, que me siga, y donde{"\n"}
              esté yo, allí también estará mi servidor; a quien me sirva, el Padre{"\n"}
              lo premiará.</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Preces Finales</Text>
            <Text style={styles.texto}>
              V. Pidamos por nuestro hermano(a) a Jesucristo, que ha{"\n"}
              dicho: «Yo soy la resurrección y la vida; el que cree en mí,{"\n"}
              aunque haya muerto, vivirá, y el que está vivo y cree en mí,{"\n"}
              no morirá para siempre.»{"\n\n"}
              V. Señor, tú que lloraste en la tumba de Lázaro, dígnate{"\n"}
              enjugar nuestras lágrimas.{"\n"}
              <Text style={styles.respuesta}>R. Te lo pedimos, Señor.</Text>{"\n\n"}
              V. Tú que resucitaste a los muertos, dígnate dar la vida{"\n"}
              eterna a nuestro hermano(a).{"\n"}
              <Text style={styles.respuesta}>R. Te lo pedimos, Señor</Text>{"\n\n"}
              V. Tú que perdonaste en la cruz al buen ladrón y le{"\n"}
              prometiste el paraíso, dígnate perdonar y llevar al cielo a{"\n"}
              nuestro hermano(a).{"\n"}
              <Text style={styles.respuesta}>R. Te lo pedimos, Señor</Text>{"\n\n"}
              V. Tú que has purificado a nuestro hermano en el agua{"\n"}
              del bautismo y lo ungiste con el óleo de la confirmación,{"\n"}
              dígnate admitirlo entre tus santos y elegidos.{"\n"}
              <Text style={styles.respuesta}>R. Te lo pedimos, Señor.</Text>{"\n\n"}
              V. Tú que alimentaste a nuestro hermano con tu Cuerpo y{"\n"}
              tu Sangre, dígnate también admitirlo en la mesa de tu Reino{"\n"}
              <Text style={styles.respuesta}>R. Te lo pedimos, Señor.</Text>{"\n\n"}
              V. Y a nosotros, que lloramos su muerte, dígnate confortar{"\n"}
              nos con la fe y la esperanza de la vida eterna.{"\n"}
              <Text style={styles.respuesta}>R. Te lo pedimos Señor.</Text>{"\n\n"}
              V. Terminemos nuestra oración repitiendo la plegaria{"\n"}
              que Cristo nos enseñó.{"\n"}
              <Text style={styles.respuesta}>R. Padre nuestro...</Text>{"\n"}
              V. Dale Señor el descanso eterno.{"\n"}
              <Text style={styles.respuesta}>R. Brille para él(ella) la luz perpetua.</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Letanía</Text>
            <Text style={styles.texto}>
              Uno de los presentes puede ir guiando a los demás al rezar una breve forma de letanía a los santos. Se pueden incluir otros santos, especialmente los santos patronos de la persona difunta, de la familia, de la parroquia y otros santos a quienes la persona difunta haya tenido devoción particular.{"\n\n"}
              Santos de Dios, vengan en su ayuda!{"\n"}
              ¡Salgan a encontrarlo(a), ángeles de Dios!{"\n"}
              Santa María, Madre de Dios{"\n"}
              ruega por él (ella){"\n"}
              San José{"\n"}
              San Pedro y san Pablo{"\n"}
              rueguen por él (ella){"\n\n"}
              Se puede añadir la siguiente oración:
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oremos.</Text>
            <Text style={styles.texto}>
              Señor Dios de misericordia,{"\n"}
              escucha nuestras oraciones y compadécete{"\n"}
              de tu hijo(a), a quien has llamado de esta vida.{"\n"}
              Recíbelo(a), junto con todos tus santos{"\n"}
              en tu Reino de luz y de paz.{"\n"}
              Te lo pedimos por Cristo, nuestro Señor.{"\n"}
              Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Padrenuestro</Text>
            <Text style={styles.texto}>
              El ministro introduce el padrenuestro con estas u otras palabras semejantes:{"\n\n"}
              Dios es infinitamente misericordioso para redimirnos; oremos como Jesús nos enseñó:{"\n\n"}
              Todos dicen:{"\n"}
              <Text style={styles.texto}>Padre nuestro...</Text>
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.subtitulo}>Oración</Text>
            <Text style={styles.texto}>
              El ministro termina con la siguiente oración:{"\n\n"}
              Señor Jesús, redentor nuestro,{"\n"}
              tú te entregaste voluntariamente a la muerte{"\n"}
              para que todos pudiéramos salvarnos{"\n"}
              y pasar de la muerte a una vida nueva.{"\n"}
              Escucha, Señor, nuestras oraciones{"\n"}
              y mira con amor a tu pueblo,{"\n"}
              que ora entristecido por la muerte{"\n"}
              de su hermano(a) N.{"\n"}
              Señor Jesús, santo y compasivo:{"\n"}
              perdónale sus pecados a nuestro(a) hermano(a) N.{"\n"}
              Con tu muerte nos has abierto las puertas de la vida{"\n"}
              a aquellos que creemos en ti.{"\n"}
              No permitas que nuestro(a) hermano(a) se aparte de ti;{"\n"}
              al contrario, con tu supremo poder{"\n"}
              concédele gozar de la luz, la alegría y la paz en el cielo,{"\n"}
              en donde vives tú para siempre.{"\n"}
              Amén.
            </Text>
          </View>

          <View style={styles.seccion}>
            <Text style={styles.texto}>
              El ministro puede concluir estas oraciones con una simple bendición o con un gesto simbólico, por ejemplo, haciendo la señal de la cruz en la frente del difunto. El sacerdote o el diácono pueden rociar el cuerpo con agua bendita.
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