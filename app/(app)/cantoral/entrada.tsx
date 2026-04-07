import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CantosEntradaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Cantos de entrada',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Cantos de entrada</Text>
          </View>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>1. Hasta tus plantas</Text>
            <Text style={styles.lyrics}>
              Hasta tus plantas, Señor, llegamos buscando asilo en tu{'\n'}
              corazón; tus gracias todas, hoy imploramos, que ellas protejan{'\n'}
              nuestra Nación.{'\n\n'}
              <Text style={styles.italic}>Do quiera al Rey de reyes levántese un altar.{'\n'}
              A Dios queremos en nuestras leyes, en las escuelas y en el hogar. (bis)</Text>{'\n\n'}
              Fijo en la altura su pensamiento a Dios alzando su corazón;{'\n'}
              con los colores del firmamento formó la patria su pabellón.{'\n\n'}
              A Dios queremos en la enseñanza, porque la infancia desde su{'\n'}
              albor, lleve en el alma fe y esperanza, y a Jesús ame, su Redentor.{'\n\n'}
              A Dios queremos en los hogares crezcan los hijos en fe y pudor;{'\n'}
              y los esposos en los altares, prometan fieles perpetuo amor.{'\n\n'}
              Mientras el culto de nuestra historia a los patriotas aliento dé,{'\n'}
              nuestros mejores himnos de gloria serán los cantos de nuestra fe.{'\n\n'}
              A Dios queremos, Virgen María, benigna acoge nuestro clamor;{'\n'}
              bajo tu amparo, oh, Madre mía, guárdenos siempre tu tierno amor.
            </Text>
          </View>
            <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://youtu.be/vUp7Uq2guPk?si=rmCHvhL2jHTOV-83')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>2. Llegad hasta el Señor</Text>
            <Text style={styles.antifona}>Salmo 99</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>Llegad hasta el Señor, cantando himnos de gozo.</Text>{'\n\n'}
              Aclamad al Señor, tierra entera, servid al Señor con alegría,{'\n'}
              llegad a Él con cantares de gozo.{'\n\n'}
              Sabed que el Señor es Dios, Él nos creó, a Él pertenecemos,{'\n'}
              somos su pueblo y ovejas de su aprisco.{'\n\n'}
              Entrad por sus puertas dando gracias, avanzad por sus atrios{'\n'}
              entre himnos, alabadle y a su Nombre bendecid.{'\n\n'}
              Sí, el Señor es bondadoso. Sí, eterno es su amor, su lealtad por{'\n'}
              los siglos permanece.{'\n\n'}
              Demos gloria al Padre Poderoso, a su Hijo, Cristo, el Señor,{'\n'}
              y al Espíritu que habita en nuestras almas.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=HVbKk-UWmwc')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>3. Juntos como hermanos</Text>
            <Text style={styles.lyrics}>
              Juntos como hermanos{'\n'}
              Miembros de una iglesia{'\n'}
              Vamos caminando{'\n'}
              Al encuentro del Señor{'\n\n'}
              Un largo caminar{'\n'}
              Por el desierto bajo el Sol{'\n'}
              No podemos avanzar{'\n'}
              Sin la ayuda del Señor{'\n\n'}
              Unidos al rezar{'\n'}
              Unidos en una canción{'\n'}
              Viviremos nuestra fe{'\n'}
              Con la ayuda del Señor{'\n\n'}
              La iglesia en marcha está{'\n'}
              A un mundo nuevo vamos ya{'\n'}
              Donde reinará el amor{'\n'}
              Donde reinará la paz
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=R9SeI3Wqz94')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>4. Vienen con alegría</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>Vienen con alegría, Señor{'\n'}
              Cantando vienen con alegría, Señor{'\n'}
              Los que caminan por la vida, Señor{'\n'}
              Sembrando tu paz y amor</Text>{'\n\n'}
              Vienen trayendo la esperanza{'\n'}
              A un mundo cargado de ansiedad{'\n'}
              A un mundo que busca y que no alcanza{'\n'}
              Caminos de amor y de amistad{'\n\n'}
              Vienen trayendo entre sus manos{'\n'}
              Esfuerzos de hermanos por la paz{'\n'}
              Deseos de un mundo más humano{'\n'}
              Que nacen del bien y la verdad{'\n\n'}
              Cuando el odio y la violencia{'\n'}
              Aniden en nuestro corazón{'\n'}
              El mundo sabrá que por herencia{'\n'}
              Le aguardan la tristeza y el dolor
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=o13EntxXHW0')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>5. ¿Señor, quién entrará?</Text>
            <Text style={styles.lyrics}>
              ¿Señor, quién entrará en tu Santuario para adorar?{'\n'}
              El de manos limpias,{'\n'}
              de corazón puro,{'\n'}
              que no es vanidoso{'\n'}
              y que sepa amar (bis){'\n\n'}
              Señor, yo quiero entrar{'\n'}
              en tu Santuario{'\n'}
              para adorar. (bis){'\n\n'}
              Tu sangre me lava{'\n'}
              tu fuego me quema{'\n'}
              tu Espíritu Santo inunda mi ser (bis)
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=W97nt1pQy3k')}
                    >
            <Text style={styles.buttonText}>Escuchar</Text>
            </TouchableOpacity>

          <View style={styles.songCard}>
            <Text style={styles.songTitle}>6. Christus heri et hodie</Text>
            <Text style={styles.lyrics}>
              <Text style={styles.italic}>Christus heri et hodie{'\n'}
              Finis et Principium;{'\n'}
              Christus Alpha et Omega.{'\n'}
              Ipsi gloria saecula.</Text>{'\n\n'}
              1.Que alegría cuando me dijeron:{'\n'}
              "Vayamos a la Casa del Señor.{'\n'}
              Ciudad de Dios alza tus dinteles{'\n'}
              delante de los pueblos que aquí vienen{'\n\n'}

              Suena la trompeta de un nuevo milenio,{'\n'}
              recuerda a la Iglesia:{'\n'}
              ¡Duc in altum!{'\n\n'}

              2. Sol y luna ya han señalado{'\n'}
              desde que te abajaras hasta el hombre.{'\n'}
              Son dos milenios de tu encarnación{'\n'}
              ¡Asumes nuestra sangre y nuestra historia!{'\n\n'}

              3. Y bendita eres tu María,{'\n'}
              la gracia del Señor reosa en ti.{'\n'}
              Tu dulce seno, vientre inmaculado{'\n'}
              nos dio al esperado de los siglos.{'\n'}
              Que nacen del bien y la verdad{'\n\n'}

              4. Verbo eterno, Tu el predilecto,{'\n'}
              espada penetrante de dos filos,{'\n'}
              Dios de justicia y de misericordia,{'\n'}
              Tu cambias nuestro llanto en fiesta y danza.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=vl8CtI-ZZYc')}
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
    marginBottom: 10,
  },
  lyrics: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  italic: {
    fontStyle: 'italic',
  },
  antifona: {
      fontSize: 18,
      color: Colors.primary,
      fontStyle: 'italic',
      marginVertical: 12,
      textAlign: 'justify',
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