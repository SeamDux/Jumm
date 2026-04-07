import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CantosComunionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Cantos de Comunión',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Cantos de Comunión</Text>
          </View>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>1. Tu Corazón Santo</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>Corazón santo de mi señor{'\n'}
              acoge el canto que alza mi voz,{'\n'}
              y tu María a la mansión{'\n'}
              de su reinado condúcenos.</Text>{'\n\n'}
              Tu Corazón Jesús es fuente de dulzura{'\n'}
              do acude el alma que penas a endulzar{'\n'}
              y el tuyo es oh María, el ancora segura{'\n'}
              del alma a quien satan te quiera arrebatar.{'\n\n'}
              Tu Corazón Jesús es víctima sagrada{'\n'}
              que a Dios por nuestro amor se ofrece en el altar{'\n'}
              y el tuyo es madre mía María inmaculada{'\n'}
              del triste pecador refugio singular.{'\n\n'}
              Tu Corazón Jesús herido por la lanza{'\n'}
              es puerto de esperanza del mundo seductor{'\n'}
              y el tuyo es madre mía la hermosa barquilla{'\n'}
              que lleva hasta la orilla al hijo de su amor.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rPm-DLWwUlA')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>2. Dueño de mi vida</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>Dueño de mi vida, vida de mi amor,{'\n'}
              ábreme la herida, de tu corazón.</Text>{'\n\n'}
              Corazón divino, que dulzura dan{'\n'}
              de tu sangre el vino, de tu cuerpo el pan.{'\n\n'}
              Corazón divino, dulce cual la miel,{'\n'}
              tu eres el camino, para el alma fiel.{'\n\n'}
              Tú abrazas el hielo, tú endulzas la hiel,{'\n'}
              tú eres el consuelo para el alma fiel.{'\n\n'}
              Tú eres la esperanza, del que va a vivir,{'\n'}
              tú eres el remedio, del que va a morir.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=f64d3GrVDPI&list=PLn0bdOqKV4pCwipMYlIc-kdVfQ17Wxwcf&index=4')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
          </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>3. El Profeta (Jeremías 1, 4)</Text>
            <Text style={styles.lyrics}>
              Antes que te formaras dentro del vientre de tu madre; antes{'\n'}
              que tú nacieras, te conocía y te consagré.{'\n\n'}
              Para ser mi profeta de las naciones yo te escogí: irás donde te{'\n'}
              envíe, y donde te mande proclamarás.{'\n\n'}
              <Text style={styles.italic}>Tengo que gritar, tengo que arriesgar, ay de mí si no lo hago; como{'\n'}
              escapar de ti, como no hablar, si tu voz me quema dentro.</Text>{'\n\n'}
              No temas arriesgarte porque contigo yo estaré; no temas{'\n'}
              anunciarme porque en tu boca yo hablaré.{'\n\n'}
              Te encargo hoy mi pueblo para arrancar y derribar, para edificar{'\n'}
              destruirás y plantarás...{'\n\n'}
              Deja a tus hermanos, deja a tu padre y a tu madre, abandona{'\n'}
              tu casa porque la tierra gritando esta. Nada traigas contigo porque{'\n'}
              a tu lado yo estaré, es hora de luchar porque mi pueblo sufriendo{'\n'}
              está... (CORO)
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=mnrPH9IJOFc')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
          </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>4. Cristo te necesita</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>Cristo te necesita para amar, para amar Cristo te necesita para{'\n'}
              amar (bis)</Text>{'\n\n'}
              No te importe la raza ni el color de la piel, Ama a todos como{'\n'}
              hermanos y haz el bien (bis){'\n\n'}
              Al que sufre y al triste dale amor, dale amor Al humilde y al{'\n'}
              pobre dale amor (bis){'\n\n'}
              Al que vive a tu lado dale amor, dale amor, Al que viene de{'\n'}
              lejos dale amor (bis){'\n\n'}
              Al que habla otra lengua dale amor, dale amor Al que piensa{'\n'}
              distinto dale amor (bis){'\n\n'}
              Al amigo de siempre dale amor, dale amor Al que no te saluda{'\n'}
              dale amor (bis)
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jwOlP3mm_3g')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
          </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>5. Vaso nuevo</Text>
            <Text style={styles.lyrics}>
              Gracias quiero darte por amarme. Gracias, quiero darte yo a{'\n'}
              ti Señor. Hoy soy feliz porque te conocí. Gracias por amarme a{'\n'}
              mí también.{'\n\n'}
              <Text style={styles.italic}>Señor yo quiero ser, abandonarme, como el barro en las manos{'\n'}
              del alfarero. Toma mi vida, hazla de nuevo, yo quiero ser, yo quiero{'\n'}
              ser, un vaso nuevo (Bis).</Text>{'\n\n'}
              Te conocí y te amé; te pedí perdón y me escuchaste. Si te ofendí,{'\n'}
              perdóname, Señor, pues te amo y nunca te olvidaré.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=94mPOZRkiFs')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
          </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>6. Alma misionera</Text>
            <Text style={styles.lyrics}>
              Señor toma mi vida nueva, antes que la espera, desgaste años{'\n'}
              en mí.{'\n\n'}
              Estoy dispuesto a lo que quieras no importa lo que sea, tu{'\n'}
              llámame a servir{'\n\n'}
              <Text style={styles.italic}>Llévame donde los hombres necesiten tus palabras, necesiten tus{'\n'}
              palabras, necesiten las ganas de vivir, donde falte la esperanza, donde{'\n'}
              falte la alegría, simplemente por no saber de ti.</Text>{'\n\n'}
              Te doy mi corazón sincero, para gritar sin miedo tu grandeza{'\n'}
              Señor. Tendré mis manos sin cansancio tu historia entre mis labios,{'\n'}
              mi fuerza en la oración
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=y-P08xxPCXY')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 20,
  },
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  songCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  lyrics: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  italic: {
    fontStyle: 'italic',
  },
  button: {
      backgroundColor: Colors.primary,
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: 'center',
      marginTop: 1,
      marginBottom: 10,
    },
    buttonText: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: 16,
    },
}); 