import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';
import { ThemedText } from '../../../components/ThemedText';

export default function CompletasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Completas',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.mainTitle}>Oración de la noche (Completas)</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Invocación inicial</Text>
            <Text style={styles.versiculo}>V. Dios mío, ven en mi auxilio.</Text>
            <Text style={styles.respuesta}>R. Señor, date prisa en socorrerme.</Text>
            <Text style={styles.text}>Gloria. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Examen de conciencia</Text>
            <Text style={styles.text}>
              Es muy de alabar que, después de la invocación inicial, se haga el examen de conciencia, el cual en la celebración comunitaria puede concluirse con alguna de las fórmulas del acto penitencial de la misa.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Himno</Text>
            <View style={styles.estrofa}>
              <Text style={styles.text}>Cuando la luz del sol es ya poniente,</Text>
              <Text style={styles.text}>gracias, Señor, es nuestra melodía;</Text>
              <Text style={styles.text}>recibe, como ofrenda, amablemente,</Text>
              <Text style={styles.text}>nuestro dolor, trabajo y alegría.</Text>
            </View>

            <View style={styles.estrofa}>
              <Text style={styles.text}>Si poco fue el amor en nuestro empeño</Text>
              <Text style={styles.text}>de darle vida al día que fenece,</Text>
              <Text style={styles.text}>convierta en realidad lo que fue un sueño</Text>
              <Text style={styles.text}>tu gran amor que todo lo engrandece.</Text>
            </View>

            <View style={styles.estrofa}>
              <Text style={styles.text}>Tu cruz, Señor, redime nuestra suerte</Text>
              <Text style={styles.text}>de pecadora en justa, e ilumina</Text>
              <Text style={styles.text}>la senda de la vida y de la muerte</Text>
              <Text style={styles.text}>del hombre que en la fe lucha y camina.</Text>
            </View>

            <View style={styles.estrofa}>
              <Text style={styles.text}>Jesús, Hijo del Padre, cuando avanza</Text>
              <Text style={styles.text}>la noche oscura sobre nuestro día,</Text>
              <Text style={styles.text}>concédenos la paz y la esperanza</Text>
              <Text style={styles.text}>de esperar cada noche tu gran día. Amén.</Text>
            </View>

            <Text style={styles.salmoSubtitle}>O bien:</Text>

            <View style={styles.estrofa}>
              <Text style={styles.text}>Se inclina ya mi frente,</Text>
              <Text style={styles.text}>sellado está el trabajo;</Text>
              <Text style={styles.text}>Señor, tu pecho sea</Text>
              <Text style={styles.text}>la gracia del descanso.</Text>
            </View>

            <View style={styles.estrofa}>
              <Text style={styles.text}>Mis ojos se retiran,</Text>
              <Text style={styles.text}>la voz deja su canto,</Text>
              <Text style={styles.text}>pero el amor enciende</Text>
              <Text style={styles.text}>su lámpara velando.</Text>
            </View>

            <View style={styles.estrofa}>
              <Text style={styles.text}>Lucero que te fuiste,</Text>
              <Text style={styles.text}>con gran amor amado,</Text>
              <Text style={styles.text}>en tu gloria dormimos</Text>
              <Text style={styles.text}>y en sueños te adoramos. Amén.</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Salmodia</Text>
            <Text style={styles.antifona}>Ant.: Al amparo del Altísimo no temo el espanto nocturno.</Text>

            <Text style={styles.salmoTitle}>Salmo 90</Text>
            <Text style={styles.salmoSubtitle}>A la sombra del Omnipotente</Text>

            <Text style={styles.text}>Os he dado potestad para pisotear</Text>
            <Text style={styles.text}>serpientes y escorpiones. (Lc 10,19){'\n\n'}</Text>

            <Text style={styles.text}>Tú que habitas al amparo del Altísimo,</Text>
            <Text style={styles.text}>que vives a la sombra del Omnipotente,</Text>
            <Text style={styles.text}>di al Señor: «Refugio mío, alcázar mío,</Text>
            <Text style={styles.text}>Dios mío, confío en ti».{'\n\n'}</Text>

            <Text style={styles.text}>Él te librará de la red del cazador,</Text>
            <Text style={styles.text}>de la peste funesta.</Text>
            <Text style={styles.text}>Te cubrirá con sus plumas,</Text>
            <Text style={styles.text}>bajo sus alas te refugiarás:</Text>
            <Text style={styles.text}>su brazo es escudo y armadura.{'\n\n'}</Text>

            <Text style={styles.text}>No temerás el espanto nocturno,</Text>
            <Text style={styles.text}>ni la flecha que vuela de día,</Text>
            <Text style={styles.text}>ni la peste que se desliza en las tinieblas,</Text>
            <Text style={styles.text}>ni la epidemia que devasta a mediodía.{'\n\n'}</Text>

            <Text style={styles.text}>Caerán a tu izquierda mil,</Text>
            <Text style={styles.text}>diez mil a tu derecha;</Text>
            <Text style={styles.text}>a ti no te alcanzará.{'\n\n'}</Text>

            <Text style={styles.text}>Tan sólo abre tus ojos</Text>
            <Text style={styles.text}>y verás la paga de los malvados,</Text>
            <Text style={styles.text}>porque hiciste del Señor tu refugio,</Text>
            <Text style={styles.text}>tomaste al Altísimo por defensa.{'\n\n'}</Text>

            <Text style={styles.text}>No se te acercará la desgracia,</Text>
            <Text style={styles.text}>ni la plaga llegará hasta tu tienda,</Text>
            <Text style={styles.text}>porque a sus ángeles ha dado órdenes</Text>
            <Text style={styles.text}>para que te guarden en tus caminos;{'\n\n'}</Text>

            <Text style={styles.text}>Te llevarán en sus palmas,</Text>
            <Text style={styles.text}>para que tu pie no tropiece en la piedra;</Text>
            <Text style={styles.text}>caminarás sobre áspides y víboras,</Text>
            <Text style={styles.text}>pisotearás leones y dragones.{'\n\n'}</Text>

            <Text style={styles.text}>«Se puso junto a mí: lo libraré;</Text>
            <Text style={styles.text}>lo protegeré porque conoce mi nombre,</Text>
            <Text style={styles.text}>me invocará y lo escucharé.</Text>
            <Text style={styles.text}>Con él estaré en la tribulación,</Text>
            <Text style={styles.text}>lo defenderé, lo glorificaré,</Text>
            <Text style={styles.text}>lo saciaré de largos días,</Text>
            <Text style={styles.text}>y le haré ver mi salvación».</Text>

            <Text style={styles.antifona}>Ant.: Al amparo del Altísimo no temo el espanto nocturno.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Lectura breve</Text>
            <Text style={styles.cita}>Ap 22, 4-5</Text>
            <Text style={styles.text}>
              Verán el rostro del Señor, y tendrán su nombre en la frente. Y no habrá más noche, y no necesitarán luz de lámpara ni de sol, porque el Señor Dios alumbrará sobre ellos, y reinarán por los siglos de los siglos.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Responsorio breve</Text>
            <Text style={styles.versiculo}>V. En tus manos, Señor, encomiendo mi espíritu.</Text>
            <Text style={styles.respuesta}>R. En tus manos, Señor, encomiendo mi espíritu.</Text>
            <Text style={styles.versiculo}>V. Tú, el Dios leal, nos librarás.</Text>
            <Text style={styles.respuesta}>R. Te encomiendo mi espíritu.</Text>
            <Text style={styles.versiculo}>V. Gloria al Padre, y al Hijo, y al Espíritu Santo.</Text>
            <Text style={styles.respuesta}>R. En tus manos, Señor, encomiendo mi espíritu.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cántico evangélico</Text>
            <Text style={styles.antifona}>
              Ant.: Sálvanos, Señor, despiertos, protégenos mientras dormimos, para que velemos con Cristo y descansemos en paz.
            </Text>

            <Text style={styles.salmoTitle}>Cántico de Simeón</Text>
            <Text style={styles.cita}>Lc 2, 29-32</Text>
            <Text style={styles.salmoSubtitle}>Cristo, luz de las naciones y gloria de Israel</Text>

            <Text style={styles.text}>Ahora, Señor, según tu promesa,</Text>
            <Text style={styles.text}>puedes dejar a tu siervo irse en paz,{'\n\n'}</Text>

            <Text style={styles.text}>porque mis ojos han visto a tu Salvador,</Text>
            <Text style={styles.text}>a quien has presentado ante todos los pueblos:{'\n\n'}</Text>

            <Text style={styles.text}>luz para alumbrar a las naciones</Text>
            <Text style={styles.text}>y gloria de tu pueblo Israel.</Text>

            <Text style={styles.antifona}>
              Ant.: Sálvanos, Señor, despiertos, protégenos mientras dormimos, para que velemos con Cristo y descansemos en paz.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.text}>
              Humildemente te pedimos, Señor, que después de haber celebrado en este día los misterios de la resurrección de tu Hijo, sin temor alguno, descansemos en tu paz, y mañana nos levantemos alegres para cantar nuevamente tus alabanzas. Por Cristo nuestro Señor.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conclusión</Text>
            <Text style={styles.versiculo}>V. El Señor todopoderoso nos conceda una noche tranquila y una santa muerte.</Text>
            <Text style={styles.respuesta}>R. Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Antífona final de la Santísima Virgen</Text>
            
            <View style={styles.antifonaGrupo}>
              <Text style={styles.antifonaNumero}>I</Text>
              <Text style={styles.antifonaTexto}>Madre del Redentor, virgen fecunda,</Text>
              <Text style={styles.antifonaTexto}>puerta del cielo siempre abierta,</Text>
              <Text style={styles.antifonaTexto}>estrella de mar,</Text>
              <Text style={styles.antifonaTexto}>ven a librar al pueblo que tropieza</Text>
              <Text style={styles.antifonaTexto}>y se quiere levantar.</Text>
              <Text style={styles.antifonaTexto}>Ante la admiración de cielo y tierra,</Text>
              <Text style={styles.antifonaTexto}>engendraste a tu santo Creador,</Text>
              <Text style={styles.antifonaTexto}>y permaneces siempre virgen.</Text>
              <Text style={styles.antifonaTexto}>Recibe el saludo del ángel Gabriel,</Text>
              <Text style={styles.antifonaTexto}>y ten piedad de nosotros, pecadores.</Text>
            </View>

            <View style={styles.antifonaGrupo}>
              <Text style={styles.antifonaNumero}>II</Text>
              <Text style={styles.antifonaTexto}>Salve, Reina de los cielos</Text>
              <Text style={styles.antifonaTexto}>y Señora de los ángeles;</Text>
              <Text style={styles.antifonaTexto}>salve raíz, salve puerta,</Text>
              <Text style={styles.antifonaTexto}>que dio paso a nuestra luz.</Text>
              <Text style={styles.antifonaTexto}>Alégrate, virgen gloriosa,</Text>
              <Text style={styles.antifonaTexto}>entre todas la más bella;</Text>
              <Text style={styles.antifonaTexto}>salve, agraciada doncella,</Text>
              <Text style={styles.antifonaTexto}>ruega a Cristo por nosotros.</Text>
            </View>

            <View style={styles.antifonaGrupo}>
              <Text style={styles.antifonaNumero}>III</Text>
              <Text style={styles.antifonaTexto}>Dios te salve, Reina y Madre de misericordia,</Text>
              <Text style={styles.antifonaTexto}>vida, dulzura y esperanza nuestra,</Text>
              <Text style={styles.antifonaTexto}>Dios te salve.</Text>
              <Text style={styles.antifonaTexto}>A ti llamamos los desterrados hijos de Eva,</Text>
              <Text style={styles.antifonaTexto}>a ti suspiramos, gimiendo y llorando,</Text>
              <Text style={styles.antifonaTexto}>en este valle de lágrimas.</Text>
              <Text style={styles.antifonaTexto}>Ea, pues, Señora, abogada nuestra,</Text>
              <Text style={styles.antifonaTexto}>vuelve a nosotros esos tus ojos misericordiosos,</Text>
              <Text style={styles.antifonaTexto}>y después de este destierro muéstranos a Jesús,</Text>
              <Text style={styles.antifonaTexto}>fruto bendito de tu vientre.</Text>
              <Text style={styles.antifonaTexto}>Oh clemente, oh piadosa,</Text>
              <Text style={styles.antifonaTexto}>oh dulce Virgen María!</Text>
            </View>

            <View style={styles.antifonaGrupo}>
              <Text style={styles.antifonaNumero}>IV</Text>
              <Text style={styles.antifonaTexto}>Bajo tu amparo nos acogemos,</Text>
              <Text style={styles.antifonaTexto}>santa Madre de Dios,</Text>
              <Text style={styles.antifonaTexto}>no desprecies las oraciones</Text>
              <Text style={styles.antifonaTexto}>que te dirigimos en nuestras necesidades,</Text>
              <Text style={styles.antifonaTexto}>antes bien líbranos de todo peligro,</Text>
              <Text style={styles.antifonaTexto}>oh Virgen gloriosa y bendita.</Text>
            </View>
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
    color: Colors.primary,
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
    marginTop: 16,
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
    marginBottom: 2,
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
  cita: {
    fontSize: 14,
    color: Colors.error,
    marginBottom: 8,
  },
  estrofa: {
    marginBottom: 16,
  },
  antifonaGrupo: {
    marginBottom: 24,
  },
  antifonaNumero: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.error,
    textAlign: 'center',
    marginBottom: 12,
  },
  antifonaTexto: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 4,
    lineHeight: 24,
  },
}); 