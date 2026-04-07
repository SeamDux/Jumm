import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function ViaCrucisBreveScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vía Crucis breve',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Vía Crucis breve</Text>

          {/* Primera estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              1ª Estación: <Text style={styles.estacionTitle}>Jesús sentenciado a muerte</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Sentenciado y no por un tribunal, sino por todos. Condenado por los mismos que le habían aclamado poco antes. Y Él calla... Nosotros huimos de ser reprochados. Y saltamos inmediatamente...
            </Text>
            <Text style={styles.text}>
              Dame, Señor, imitarte, uniéndome a Ti por el Silencio cuando alguien me haga sufrir. Yo lo merezco. ¡Ayúdame! Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Segunda estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              2ª Estación: <Text style={styles.estacionTitle}>Jesús cargado con la cruz</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Que yo comprenda, Señor, el valor de la cruz, de mis pequeñas cruces de cada día, de mis achaques, de mis dolencias, de mi soledad.
            </Text>
            <Text style={styles.text}>
              Dame convertir en ofrenda amorosa, en reparación por mi vida y en apostolado por mis hermanos, mi cruz de cada día. Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Tercera estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              3ª Estación: <Text style={styles.estacionTitle}>Jesús cae, por primera vez, bajo el paso de la cruz</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Tú caes, Señor, para redimirme. Para ayudarme a levantarme en mis caídas diarias, cuando después de haberme propuesto ser fiel, vuelvo a reincidir en mis defectos cotidianos. ¡Ayúdame a levantarme siempre y a seguir mi camino hacia Ti! Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Cuarta estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              4ª Estación: <Text style={styles.estacionTitle}>Encuentro con la Virgen</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Haz Señor, que me encuentre al lado de tu Madre en todos los momentos de mi vida.
            </Text>
            <Text style={styles.text}>
              Con ella, apoyándome en su cariño maternal, tengo la seguridad de llegar a Ti en el último día de mi existencia. ¡Ayúdame Madre! Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Quinta estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              5ª Estación: <Text style={styles.estacionTitle}>el Cirineo ayuda al Señor a llevar la Cruz</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Cada uno de nosotros tenemos nuestra vocación, hemos venido al mundo para algo concreto, para realizarnos de una manera particular.
            </Text>
            <Text style={styles.text}>
              ¿Cuál es la mía y cómo la llevo a cabo? Pero hay algo, Señor, que es misión mía y de todos: la de ser Cirineo de los demás, la de ayudar a todos. ¿Cómo llevo adelante la realización de mi misión de Cirineo? Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Sexta estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              6ª Estación: <Text style={styles.estacionTitle}>la Verónica enjuga el rostro de Jesús</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Es la mujer valiente, decidida, que se acerca a Ti cuando todos te abandonan. Yo, Señor, te abandono cuando me dejo llevar por el "qué dirán", del respeto humano, cuando no me atrevo a defender al prójimo ausente, cuando no me atrevo a replicar una broma que ridiculiza a los que tratan de acercarse a Ti.
            </Text>
            <Text style={styles.text}>
              Y en tantas otras ocasiones. Ayúdame a no dejarme llevar por el respeto humano, por el "qué dirán". Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Séptima estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              7ª Estación: <Text style={styles.estacionTitle}>Segunda caída en el camino de la Cruz</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Caes, Señor, por segunda vez. El Vía Crucis nos señala tres caídas en tu caminar hacia el Calvario. Tal vez fueran más.
            </Text>
            <Text style={styles.text}>
              Caes delante de todos... ¿Cuándo aprenderé yo a no temer el quedar mal ante los demás, por un error, por una equivocación?. ¿Cuándo aprenderé que también eso se puede convertir en ofrenda? Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Octava estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              8ª Estación: <Text style={styles.estacionTitle}>Jesús consuela a las hijas de Jerusalén</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Muchas veces, tendría yo que analizar la causa de mis lágrimas. Al menos, de mis pesares, de mis preocupaciones. Tal vez hay en ellos un fondo de orgullo, de amor propio mal entendido, de egoísmo, de envidia.
            </Text>
            <Text style={styles.text}>
              Debería llorar por mi falta de correspondencia a tus innumerables beneficios de cada día, que me manifiestan, Señor, cuánto me quieres. Dame profunda gratitud y correspondencia a tu misericordia. Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Novena estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              9ª Estación: <Text style={styles.estacionTitle}>Jesús cae por tercera vez</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Tercera caída. Más cerca de la Cruz. Más agotado, más falto de fuerzas. Caes desfallecido, Señor.
            </Text>
            <Text style={styles.text}>
              Yo digo que me pesan los años, que no soy el de antes, que me siento incapaz. Dame, Señor, imitarte en esta tercera caída y haz que mi desfallecimiento sea beneficioso para otros, porque te lo doy a Ti para ellos. Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Décima estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              10ª Estación: <Text style={styles.estacionTitle}>Jesús despojado de sus vestiduras</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Arrancan tus vestiduras, adheridas a Ti por la sangre de tus heridas. A infinita distancia de tu dolor, yo he sentido, a veces, cómo algo se arrancaba dolorosamente de mí por la pérdida de mis seres queridos.
            </Text>
            <Text style={styles.text}>
              Que yo sepa ofrecerte el recuerdo de las separaciones que me desgarraron, uniéndome a tu pasión y esforzándome en consolar a los que sufren, huyendo de mi propio egoísmo. Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Undécima estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              11ª Estación: <Text style={styles.estacionTitle}>Jesús es clavado en la Cruz</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu Santa Cruz redimiste al mundo.</Text> Señor, que yo disminuya mis limitaciones con mi esfuerzo y así pueda ayudar a mis hermanos. Y que cuando mi esfuerzo no consiga disminuirlas, me esfuerce en ofrecértelas también por ellos. Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Duodécima estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              12ª Estación: <Text style={styles.estacionTitle}>Jesús muere en la Cruz</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Te adoro, mi Señor, muerto en la Cruz por Salvarme. Te adoro y beso tus llagas, las heridas de los clavos, la lanzada del costado... ¡Gracias, Señor, gracias! Has muerto por salvarme, por salvarnos.
            </Text>
            <Text style={styles.text}>
              Dame responder a tu amor con amor, cumplir tu Voluntad, trabajar por mi salvación, ayudado de tu gracia. Y dame trabajar con ahínco por la salvación de mis hermanos. Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Decimotercera estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              13ª Estación: <Text style={styles.estacionTitle}>Jesús en brazos de su madre</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Déjame estar a tu lado, Madre, especialmente en estos momentos de tu dolor incomparable. Déjame estar a tu lado. Más te pido: que hoy y siempre me tengas cerca de Ti y te compadezcas de mí.
            </Text>
            <Text style={styles.text}>
              ¡Mírame con compasión , no me dejes, Madre mía! Señor, pequé, ten piedad y misericordia de mí. Amén.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          {/* Decimocuarta estación */}
          <View style={styles.estacionCard}>
            <Text style={styles.estacionTitle}>
              14ª Estación: <Text style={styles.estacionTitle}>Jesús puesto en el sepulcro</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Te adoramos, Señor, y te bendecimos, porque por tu santa cruz redimiste al mundo.</Text> Todo ha terminado. Pero no: después de la muerte, la Resurrección.
            </Text>
            <Text style={styles.text}>
              Enséñame a ver lo que pasa, lo transitorio y pasajero, a la luz de lo que no pasa. Y que esa luz ilumine todos mis actos. Así sea. Señor, pequé, ten piedad y misericordia de mí.
            </Text>
            <Text style={styles.finalPrayer}>
              Padre Nuestro, Ave María y Gloria...
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Oración final</Text>
          <Text style={styles.text}>
            Señor Jesucristo, que con tu Pasión, Muerte y Resurrección redimiste al mundo, concédenos la gracia de seguirte con amor y fidelidad. Amén.
          </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  estacionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.0,
    elevation: 2,
  },
  estacionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.text,
  },
  estacionTitleRed: {
    color: 'darkred',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 5,
  },
  finalPrayer: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 0,
  },
  bold: {
    fontWeight: 'bold',
  },
}); 