import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function Plegaria2Page() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Plegaria Eucarística II',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Plegaria Eucarística II</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, con las manos extendidas, dice:</Text>
          <Text style={styles.texto}>
            Santo eres en verdad, Señor,{"\n"}
            fuente de toda santidad;{"\n"}
            por eso te pedimos que santifiques estos dones{"\n"}
            con la efusión de tu Espíritu,{"\n"}
            de manera que sean para nosotros{"\n"}
            Cuerpo y Sangre{"\n"}
            de Jesucristo, nuestro Señor.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Junta las manos.</Text>
          <Text style={styles.texto}>
            El mismo, cuando iba a ser entregado a su Pasión,{"\n"}
            voluntariamente aceptada,{"\n"}
            tomó pan, dándote gracias, lo partió{"\n"}
            y lo dio a sus discípulos, diciendo:{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Se inclina un poco.</Text>
          <Text style={styles.textoNegrita}>
            TOMEN Y COMAN TODOS DE ÉL,{"\n"}
            PORQUE ESTO ES MI CUERPO,{"\n"}
            QUE SERÁ ENTREGADO POR USTEDES.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.texto}>
            Del mismo modo, acabada la cena,{"\n"}
            tomó el cáliz,{"\n"}
            y, dándote gracias de nuevo,{"\n"}
            lo pasó a sus discípulos diciendo:{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.textoNegrita}>
            TOMEN Y BEBAN TODOS DE ÉL,{"\n"}
            PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,{"\n"}
            SANGRE DE LA ALIANZA NUEVA Y ETERNA,{"\n"}
            QUE SERÁ DERRAMADA POR USTEDES{"\n"}
            Y POR MUCHOS{"\n"}
            PARA EL PERDÓN DE LOS PECADOS.{"\n"}
            HAGAN ESTO EN CONMEMORACIÓN MÍA.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>El celebrante dice:</Text>
          <Text style={styles.texto}>Éste es el Sacramento de nuestra fe.</Text>
          <Text style={styles.textoRojoItalic}>o bien:</Text>
          <Text style={styles.texto}>Éste es el Misterio de la fe.</Text>

          <Text style={styles.textoItalica}>
            Anunciamos tu muerte,{"\n"}
            proclamamos tu resurrección.{"\n"}
            ¡Ven, Señor Jesús!{"\n"}
          </Text>

          <Text style={styles.texto}>Aclamad el Misterio de la redención</Text>
          <Text style={styles.textoItalica}>
            Cada vez que comemos de este pan{"\n"}
            y bebemos de este cáliz,{"\n"}
            anunciamos tu muerte, Señor,{"\n"}
            hasta que vuelvas.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Así, pues, Padre,{"\n"}
            al celebrar ahora el memorial{"\n"}
            de la muerte y resurrección de tu Hijo,{"\n"}
            te ofrecemos{"\n"}
            el pan de vida y el cáliz de salvación,{"\n"}
            y te damos gracias{"\n"}
            porque nos haces dignos de servirte en tu presencia.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Te pedimos humildemente{"\n"}
            que el Espíritu Santo congregue en la unidad{"\n"}
            a cuantos participamos{"\n"}
            del Cuerpo y Sangre de Cristo.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Acuérdate, Señor,{"\n"}
            de tu Iglesia extendida por toda la tierra;{"\n"}
            y reunida aquí en el domingo,{"\n"}
            día en que Cristo ha vencido a la muerte{"\n"}
            y nos ha hecho partícipes de su vida inmortal;{"\n"}
            y con el Papa N.,{"\n"}
            con nuestro Obispo N.,{"\n"}
            y todos los pastores que cuidan de tu pueblo,{"\n"}
            llévala a su perfección por la caridad.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Acuérdate también de nuestros hermanos{"\n"}
            que se durmieron en la esperanza{"\n"}
            de la resurrección,{"\n"}
            y de todos los que han muerto en tu misericordia;{"\n"}
            admítelos a contemplar la luz de tu rostro.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Ten misericordia de todos nosotros,{"\n"}
            y así, con María, la Virgen Madre de Dios,{"\n"}
            San José su Esposo,{"\n"}
            los apóstoles{"\n"}
            y cuantos vivieron en tu amistad{"\n"}
            a través de los tiempos,{"\n"}
            merezcamos, por tu Hijo Jesucristo,{"\n"}
            compartir la vida eterna{"\n"}
            y cantar tus alabanzas.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Toma la patena con el pan consagrado y el cáliz y, elevándolos, dice:</Text>
          <Text style={styles.textoItalica}>
            Por Cristo, con él y en él,{"\n"}
            a ti, Dios Padre omnipotente,{"\n"}
            en la unidad del Espíritu Santo,{"\n"}
            todo honor y toda gloria{"\n"}
            por los siglos de los siglos.{"\n"}
            Amén.
          </Text>
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
  negrita: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b30000',
    marginTop: 10,
    marginBottom: 4,
  },
  centradoNegrita: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b30000',
    textAlign: 'center',
    marginVertical: 10,
  },
}); 