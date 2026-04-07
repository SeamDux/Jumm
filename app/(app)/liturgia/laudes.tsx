import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function LaudesScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Laudes',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.mainTitle}>Oración de la Mañana (Laudes)</Text>

          <View style={styles.section}>
            <Text style={styles.text}>Para la primera celebración del día:</Text>
            <Text style={styles.versiculo}>V. Señor, abre mis labios.</Text>
            <Text style={styles.respuesta}>R. Y mi boca proclamará tu alabanza.</Text>

            <Text style={styles.text}>A continuación, se dice el salmo Invitatorio, con la antífona:</Text>
            <Text style={styles.antifona}>† Venid, aclamemos al Señor, demos vítores a la roca que nos salva. Aleluya.</Text>

            <Text style={styles.text}>Para la segunda celebración del día</Text>
            <Text style={styles.versiculo}>V. Dios mío, ven en mi auxilio.</Text>
            <Text style={styles.respuesta}>R. Señor, date prisa en socorrerme.</Text>
            <Text style={styles.respuesta}>Gloria. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Himno</Text>
            <Text style={styles.text}>Es verdad que las luces del alba</Text>
            <Text style={styles.text}>del día de hoy</Text>
            <Text style={styles.text}>son más puras, radiantes y bellas,</Text>
            <Text style={styles.text}>por gracia de Dios.{'\n\n'}</Text>
            
            <Text style={styles.text}>Es verdad que yo siento en mi vida,</Text>
            <Text style={styles.text}>muy dentro de mí,</Text>
            <Text style={styles.text}>que la gracia de Dios es mi gracia,</Text>
            <Text style={styles.text}>que no merecí.{'\n\n'}</Text>

            <Text style={styles.text}>Es verdad que la gracia del Padre,</Text>
            <Text style={styles.text}>en Cristo Jesús,</Text>
            <Text style={styles.text}>es la gloria del hombre y del mundo</Text>
            <Text style={styles.text}>bañados en luz.{'\n\n'}</Text>

            <Text style={styles.text}>Es verdad que la Pascua de Cristo</Text>
            <Text style={styles.text}>es pascua por mí,</Text>
            <Text style={styles.text}>que su muerte y victoria me dieron</Text>
            <Text style={styles.text}>eterno vivir.{'\n\n'}</Text>

            <Text style={styles.text}>Viviré en alabanzas al Padre,</Text>
            <Text style={styles.text}>que al Hijo nos dio,</Text>
            <Text style={styles.text}>y que el Santo Paráclito inflame</Text>
            <Text style={styles.text}>nuestra alma en amor. Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Salmodia</Text>
            <Text style={styles.antifona}>Ant. 1: Por ti madrugo, Dios mío, para contemplar tu fuerza y tu gloria. Aleluya.</Text>

            <Text style={styles.salmoTitle}>Salmo 62, 2-9</Text>
            <Text style={styles.salmoSubtitle}>El alma sedienta de Dios</Text>

            <Text style={styles.text}>Madruga por Dios todo el que</Text>
            <Text style={styles.text}>rechaza las obras de las tinieblas.{'\n\n'}</Text>

            <Text style={styles.text}>¡Oh Dios!, tú eres mi Dios, por ti madrugo,</Text>
            <Text style={styles.text}>mi alma está sedienta de ti;</Text>
            <Text style={styles.text}>mi carne tiene ansia de ti,</Text>
            <Text style={styles.text}>como tierra reseca, agostada, sin agua.{'\n\n'}</Text>

            <Text style={styles.text}>¡Cómo te contemplaba en el santuario</Text>
            <Text style={styles.text}>viendo tu fuerza y tu gloria!</Text>
            <Text style={styles.text}>Tu gracia vale más que la vida,</Text>
            <Text style={styles.text}>te alabarán mis labios.{'\n\n'}</Text>

            <Text style={styles.text}>Toda mi vida te bendeciré</Text>
            <Text style={styles.text}>y alzaré las manos invocándote.</Text>
            <Text style={styles.text}>Me saciaré de manjares exquisitos,</Text>
            <Text style={styles.text}>y mis labios te alabarán jubilosos.{'\n\n'}</Text>

            <Text style={styles.text}>En el lecho me acuerdo de ti</Text>
            <Text style={styles.text}>y velando medito en ti,</Text>
            <Text style={styles.text}>porque fuiste mi auxilio,</Text>
            <Text style={styles.text}>y a la sombra de tus alas canto con júbilo;</Text>
            <Text style={styles.text}>mi alma está unida a ti,</Text>
            <Text style={styles.text}>y tu diestra me sostiene.</Text>

            <Text style={styles.antifona}>Ant. 1: Por ti madrugo, Dios mío, para contemplar tu fuerza y tu gloria. Aleluya.</Text>

            <Text style={styles.antifona}>Ant. 2: En medio de las llamas, los tres jóvenes unánimes cantaban: "Bendito sea el Señor". Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cántico Dn 3, 57-88. 56</Text>
            <Text style={styles.salmoSubtitle}>Toda la creación alabe al Señor</Text>

            <Text style={styles.text}>Alabad al Señor sus siervos todos. (Ap 19, 5){'\n\n'}</Text>
            
            <Text style={styles.text}>Creaturas todas del Señor, bendecid al Señor,</Text>
            <Text style={styles.text}>ensalzadlo con himnos por los siglos.{'\n\n'}</Text>

            <Text style={styles.text}>Ángeles del Señor, bendecid al Señor;</Text>
            <Text style={styles.text}>cielos, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Aguas del espacio, bendecid al Señor;</Text>
            <Text style={styles.text}>ejércitos del Señor, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Sol y luna, bendecid al Señor;</Text>
            <Text style={styles.text}>astros del cielo, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Lluvia y rocío, bendecid al Señor;</Text>
            <Text style={styles.text}>vientos todos, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Fuego y calor, bendecid al Señor;</Text>
            <Text style={styles.text}>fríos y heladas, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Rocíos y nevadas, bendecid al Señor;</Text>
            <Text style={styles.text}>témpanos y hielos, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Escarchas y nieves, bendecid al Señor;</Text>
            <Text style={styles.text}>noche y día, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Luz y tinieblas, bendecid al Señor;</Text>
            <Text style={styles.text}>rayos y nubes, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Bendiga la tierra al Señor,</Text>
            <Text style={styles.text}>ensálcelo con himnos por los siglos.{'\n\n'}</Text>

            <Text style={styles.text}>Montes y cumbres, bendecid al Señor;</Text>
            <Text style={styles.text}>cuanto germina en la tierra, bendiga al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Manantiales, bendecid al Señor;</Text>
            <Text style={styles.text}>mares y ríos, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Cetáceos y peces, bendecid al Señor;</Text>
            <Text style={styles.text}>aves del cielo, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Fieras y ganados, bendecid al Señor,</Text>
            <Text style={styles.text}>ensalzadlo con himnos por los siglos.{'\n\n'}</Text>

            <Text style={styles.text}>Hijos de los hombres, bendecid al Señor;</Text>
            <Text style={styles.text}>bendiga Israel al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Sacerdotes del Señor, bendecid al Señor;</Text>
            <Text style={styles.text}>siervos del Señor, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Almas y espíritus justos, bendecid al Señor;</Text>
            <Text style={styles.text}>santos y humildes de corazón, bendecid al Señor.{'\n\n'}</Text>

            <Text style={styles.text}>Ananías, Azarías y Misael, bendecid al Señor,</Text>
            <Text style={styles.text}>ensalzadlo con himnos por los siglos.{'\n\n'}</Text>

            <Text style={styles.text}>Bendigamos al Padre, y al Hijo y al Espíritu Santo,</Text>
            <Text style={styles.text}>ensalcémoslo con himnos por los siglos.{'\n\n'}</Text>

            <Text style={styles.text}>Bendito el Señor en la bóveda del cielo,</Text>
            <Text style={styles.text}>alabado y glorioso y ensalzado por los siglos.{'\n\n'}</Text>

            <Text style={styles.italicText}>No se dice Gloria al Padre</Text>

            <Text style={styles.antifona}>Ant. 2: En medio de las llamas, los tres jóvenes unánimes cantaban: "Bendito sea el Señor". Aleluya.</Text>

            <Text style={styles.antifona}>Ant. 3: Que el pueblo de Dios se alegre por su Rey. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Salmo 149</Text>
            <Text style={styles.salmoSubtitle}>Alegría de los santos</Text>

            <Text style={styles.text}>Los hijos de la Iglesia, nuevo pueblo de Dios, se alegran en su Rey, Cristo, el Señor (Hesiquio)</Text>

            <Text style={styles.text}>Cantad al Señor un cántico nuevo,</Text>
            <Text style={styles.text}>resuene su alabanza en la asamblea de los fieles;</Text>
            <Text style={styles.text}>que se alegre Israel por su Creador,</Text>
            <Text style={styles.text}>los hijos de Sión por su Rey.{'\n\n'}</Text>

            <Text style={styles.text}>Alabad su nombre con danzas,</Text>
            <Text style={styles.text}>cantadle con tambores y cítaras;</Text>
            <Text style={styles.text}>porque el Señor ama a su pueblo</Text>
            <Text style={styles.text}>y adorna con la victoria a los humildes.{'\n\n'}</Text>

            <Text style={styles.text}>Que los fieles festejen su gloria</Text>
            <Text style={styles.text}>y canten jubilosos en filas:</Text>
            <Text style={styles.text}>con vítores a Dios en la boca</Text>
            <Text style={styles.text}>y espadas de dos filos en las manos:{'\n\n'}</Text>

            <Text style={styles.text}>para tomar venganza de los pueblos</Text>
            <Text style={styles.text}>y aplicar el castigo a las naciones,</Text>
            <Text style={styles.text}>sujetando a los reyes con argollas,</Text>
            <Text style={styles.text}>a los nobles con esposas de hierro.{'\n\n'}</Text>

            <Text style={styles.text}>Ejecutar la sentencia dictada</Text>
            <Text style={styles.text}>es un honor para todos sus fieles.{'\n\n'}</Text>

            <Text style={styles.text}>Gloria al Padre, y al Hijo, y al Espíritu Santo.</Text>
            <Text style={styles.text}>Como era en el principio, ahora y siempre,</Text>
            <Text style={styles.text}>por los siglos de los siglos. Amén.</Text>

            <Text style={styles.antifona}>Ant. 3: Que el pueblo de Dios se alegre por su Rey. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Lectura Breve</Text>
            <Text style={styles.salmoSubtitle}>Ap 7, 10. 12</Text>

            <Text style={styles.text}>La salvación es de nuestro Dios, que está sentado en el trono, y del Cordero. La alabanza y la gloria y la sabiduría y la acción de gracias y el honor y el poder y la fuerza son de nuestro Dios, por los siglos de los siglos. Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Responsorio Breve</Text>

            <Text style={styles.versiculo}>V. Cristo, Hijo de Dios vivo, ten piedad de nosotros.</Text>
            <Text style={styles.respuesta}>R. Cristo, Hijo de Dios vivo, ten piedad de nosotros.</Text>

            <Text style={styles.versiculo}>V. Tú que estás sentado a la derecha del Padre.</Text>
            <Text style={styles.respuesta}>R. Ten piedad de nosotros.</Text>

            <Text style={styles.versiculo}>V. Gloria al Padre, y al Hijo, y al Espíritu Santo.</Text>
            <Text style={styles.respuesta}>R. Cristo, Hijo de Dios vivo, ten piedad de nosotros.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cantico Evangelico</Text>
            <Text style={styles.salmoTitle}>Cantico de Zacarías - Lc 1, 68-79</Text>
            <Text style={styles.salmoSubtitle}>El Mesías y su precursor</Text>
            <Text style={styles.antifona}>Ant: Bendito sea el Señor, Dios nuestro.</Text>

            <Text style={styles.text}>Bendito sea el Señor, Dios de Israel,</Text>
            <Text style={styles.text}>porque ha visitado y redimido a su pueblo,</Text>
            <Text style={styles.text}>suscitándonos una fuerza de salvación</Text>
            <Text style={styles.text}>en la casa de David, su siervo,</Text>
            <Text style={styles.text}>según lo había predicho desde antiguo</Text>
            <Text style={styles.text}>por boca de sus santos profetas.{'\n\n'}</Text>

            <Text style={styles.text}>Es la salvación que nos libra de nuestros enemigos</Text>
            <Text style={styles.text}>y de la mano de todos los que nos odian;</Text>
            <Text style={styles.text}>realizando la misericordia que tuvo con nuestros padres,</Text>
            <Text style={styles.text}>recordando su santa alianza</Text>
            <Text style={styles.text}>y el juramento que juró a nuestro padre Abrahán.{'\n\n'}</Text>

            <Text style={styles.text}>Para concedernos que, libres de temor,</Text>
            <Text style={styles.text}>arrancados de la mano de los enemigos,</Text>
            <Text style={styles.text}>le sirvamos con santidad y justicia,</Text>
            <Text style={styles.text}>en su presencia, todos nuestros días.{'\n\n'}</Text>

            <Text style={styles.text}>Y a ti, niño, te llamarán profeta del Altísimo,</Text>
            <Text style={styles.text}>porque irás delante del Señor</Text>
            <Text style={styles.text}>a preparar sus caminos,</Text>
            <Text style={styles.text}>anunciando a su pueblo la salvación,</Text>
            <Text style={styles.text}>el perdón de sus pecados.{'\n\n'}</Text>

            <Text style={styles.text}>Por la entrañable misericordia de nuestro Dios,</Text>
            <Text style={styles.text}>nos visitará el sol que nace de lo alto,</Text>
            <Text style={styles.text}>para iluminar a los que viven en tinieblas</Text>
            <Text style={styles.text}>y en sombra de muerte,</Text>
            <Text style={styles.text}>para guiar nuestros pasos</Text>
            <Text style={styles.text}>por el camino de la paz.{'\n\n'}</Text>

            <Text style={styles.text}>Gloria al Padre, y al Hijo, y al Espíritu Santo.</Text>
            <Text style={styles.text}>Como era en el principio, ahora y siempre,</Text>
            <Text style={styles.text}>por los siglos de los siglos. Amén.</Text>

            <Text style={styles.antifona}>Ant: Bendito sea el Señor, Dios nuestro.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preces</Text>

            <Text style={styles.text}>Glorifiquemos al Señor Jesús, luz que alumbra a todo hombrey sol de justicia que no conoce el ocaso, y digámosle:</Text>

            <Text style={styles.versiculo}>Tú que eres nuestra vida y nuestra salvación, Señor, ten piedad.</Text>

            <Text style={styles.text}>Señor del universo, al darte gracias por el nuevo día que ahora empieza,</Text>
            <Text style={styles.respuesta}>- te pedimos que el recuerdo de tu santa resurrección sea nuestro gozo durante este domingo.</Text>

            <Text style={styles.text}>Que tu Espíritu Santo nos enseñe a cumplir tu voluntad,</Text>
            <Text style={styles.respuesta}>- y que tu sabiduría dirija hoy todas nuestras acciones.</Text>

            <Text style={styles.text}>Que al celebrar la eucaristía de este domingo tu palabra nos llene de gozo,</Text>
            <Text style={styles.respuesta}>- y que la participación en el banquete de tu amor haga crecer nuestra esperanza.</Text>

            <Text style={styles.text}>Que sepamos contemplar las maravillas que tu generosidad nos concede,</Text>
            <Text style={styles.respuesta}>- y vivamos durante todo el día en acción de gracias.</Text>

            <Text style={styles.text}>(Se pueden añadir algunas intenciones libres).</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Padre Nuestro</Text>
            <Text style={styles.antifona}>Digamos ahora todos juntos la oración que Cristo nos enseñó:</Text>

            <Text style={styles.text}>Padre nuestro, que estás en el cielo,</Text>
            <Text style={styles.text}>santificado sea tu Nombre;</Text>
            <Text style={styles.text}>venga a nosotros tu reino;</Text>
            <Text style={styles.text}>hágase tu voluntad</Text>
            <Text style={styles.text}>en la tierra como en el cielo.</Text>
            <Text style={styles.text}>Danos hoy nuestro pan de cada día;</Text>
            <Text style={styles.text}>perdona nuestras ofensas,</Text>
            <Text style={styles.text}>como también nosotros perdonamos</Text>
            <Text style={styles.text}>a los que nos ofenden;</Text>
            <Text style={styles.text}>no nos dejes caer en la tentación,</Text>
            <Text style={styles.text}>y líbranos del mal.</Text>
            <Text style={styles.text}>Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.text}>Dios todopoderoso y eterno, que gobiernas el cielo y la tierra,
            escucha las súplicas de tu pueblo y concédenos tu paz en nuestro
            tiempo. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina
            contigo en la unidad del Espíritu Santo y es Dios, por los siglos
            de los siglos.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conclusión</Text>
            <Text style={styles.versiculo}>V. El Señor nos bendiga, nos guarde de todo mal y nos lleve a la vida eterna.</Text>
            <Text style={styles.respuesta}>R. Amén.</Text>
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
    padding: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.error,
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.error,
    marginBottom: 12,
    textAlign: 'center',
  },
  salmoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  salmoSubtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.error,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 3,
    textAlign: 'justify',
    lineHeight: 24,
  },
  versiculo: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  respuesta: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
    marginLeft: 16,
  },
  antifona: {
    fontSize: 16,
    color: Colors.primary,
    fontStyle: 'italic',
    marginVertical: 12,
    textAlign: 'justify',
  },
  italicText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    marginVertical: 8,
    fontWeight: 'bold',
  },
}); 