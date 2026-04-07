import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function Plegaria3Page() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Plegaria Eucarística III',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Plegaria Eucarística III</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, con las manos extendidas, dice:</Text>
          <Text style={styles.texto}>
            Santo eres en verdad, Padre,{"\n"}
            y con razón te alaban todas tus criaturas,{"\n"}
            ya que por Jesucristo, tu Hijo, Señor nuestro,{"\n"}
            con la fuerza del Espíritu Santo,{"\n"}
            das vida y santificas todo,{"\n"}
            y congregas a tu pueblo sin cesar,{"\n"}
            para que ofrezca en tu honor{"\n"}
            un sacrificio sin mancha{"\n"}
            desde donde sale el sol hasta el ocaso.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice:</Text>
          <Text style={styles.texto}>
            Por eso, Padre,{"\n"}
            te suplicamos{"\n"}
            que santifiques por el mismo Espíritu{"\n"}
            estos dones que hemos separado para ti,{"\n"}
          <Text style={styles.textoRojoItalic}>Junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo:</Text>{"\n"}
            de manera que conviertan para nosotros,{"\n"}
            en el Cuerpo y Sangre de Jesucristo,{"\n"}
            Hijo tuyo y Señor nuestro,{"\n"}
            que nos mandó celebrar estos misterios.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Porque él mismo,{"\n"}
            la noche que iba a ser entregado{"\n"}
            tomó pan,{"\n"}
            y dando gracias te bendijo,{"\n"}
            lo partió{"\n"}
            y se lo dio a sus discípulos, diciendo:{"\n"}
          </Text>

          <Text style={styles.textoNegrita}>
            TOMEN Y COMAN TODOS DE ÉL,{"\n"}
            PORQUE ESTO ES MI CUERPO,{"\n"}
            QUE SERÁ ENTREGADO POR USTEDES{"\n"}
          </Text>
          <Text style={styles.textoRojoItalic}>Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.texto}>
            Del mismo modo, acabada la cena,{"\n"}
            tomó el cáliz,{"\n"}
            dando gracias te bendijo,{"\n"}
            y lo pasó a sus discípulos, diciendo:{"\n"}
          </Text>

          <Text style={styles.textoNegrita}>
            TOMEN Y BEBAN TODOS DE ÉL,{"\n"}
            PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,{"\n"}
            SANGRE DE LA ALIANZA NUEVA Y ETERNA,{"\n"}
            QUE SERÁ DERRAMADA POR USTEDES{"\n"}
            Y POR MUCHOS{"\n"}
            PARA EL PERDÓN DE LOS PECADOS.{"\n"}
            HAGAN ESTO EN CONMEMORACIÓN MÍA.{"\n"}
          </Text>
          <Text style={styles.textoRojoItalic}>Muestra el caliz consagrado al pueblo, lo deposita luego sobre el corporal y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.textoRojoItalic}>El celebrante dice:</Text>
          <Text style={styles.texto}>Éste es el Sacramento de nuestra fe.</Text>
          <Text style={styles.textoRojoItalic}>o bien:</Text>
          <Text style={styles.texto}>Éste es el Misterio de la fe.</Text>

          <Text style={styles.textoItalica}>
            Anunciamos tu muerte,{"\n"}
            proclamamos tu resurrección.{"\n"}
            ¡Ven, Señor Jesús!{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>o bien:</Text>
          <Text style={styles.texto}>Aclamen el Misterio de la redención</Text>
          <Text style={styles.textoItalica}>
            Cada vez que comemos de este pan{"\n"}
            y bebemos de este cáliz,{"\n"}
            anunciamos tu muerte, Señor,{"\n"}
            hasta que vuelvas.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>o bien:</Text>
          <Text style={styles.texto}>Cristo se entregó por nosotros.</Text>
          <Text style={styles.textoItalica}>
            Por tu cruz y resurrección{"\n"}
            nos has salvado, Señor.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Después el sacerdote, con las manos extendidas, dice:</Text>

          <Text style={styles.texto}>
          Así, Padre,{"\n"}
          al celebrar ahora el memorial{"\n"}
          de la pasión salvadora de tu Hijo,{"\n"}
          de su admirable resurrección y ascensión al cielo,{"\n"}
          mientras esperamos su venida gloriosa,{"\n"}
          te ofrecemos, en esta acción de gracias,{"\n"}
          el sacrificio vivo y santo.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Dirige tu mirada{"\n"}
            sobre la ofrenda de tu Iglesia,{"\n"}
            y reconoce en ella la Víctima{"\n"}
            por cuya inmolación quisiste devolvernos tu amistad,{"\n"}
            para que, fortalecidos con el Cuerpo y la Sangre de tu Hijo{"\n"}
            y llenos de su Espíritu Santo,{"\n"}
            formemos en Cristo un solo cuerpo y un solo espíritu.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Que él nos transforme en ofrenda permanente,{"\n"}
            para que gocemos de tu heredad{"\n"}
            junto con tus elegidos:{"\n"}
            con María la Virgen Madre de Dios, San José su esposo,{"\n"}
            los apóstoles y los mártires,{"\n"}
            (san N.: Santo del día o Patrono){"\n"}
            y todos los santos,{"\n"}
            por cuya intercesión{"\n"}
            confiamos obtener siempre tu ayuda.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Te pedimos, Padre,{"\n"}
            que esta Víctima de reconciliación{"\n"}
            traiga la paz y la salvación al mundo entero.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Confirma en la fe y en la caridada tu Iglesia,{"\n"}
            peregrina en la tierra:{"\n"}
            a tu servidor, el Papa N.,{"\n"}
            a nuestro Obispo N.,{"\n"}
            al orden episcopal, a los presbíteros y diáconos,{"\n"}
            y a todo el pueblo redimido por ti.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Atiende los deseos y súplicas de esta familia{"\n"}
            que has congregado en tu presencia.{"\n"}
            Reúne en torno a ti, Padre misericordioso,{"\n"}
            a todos tus hijos dispersos por el mundo.{"\n"}
          </Text>

          <Text style={styles.texto}>
            A nuestros hermanos difuntos{"\n"}
            y a cuantos murieron en tu amistad{"\n"}
            recíbelos en tu reino,{"\n"}
            donde esperamos gozar todos juntos{"\n"}
            de la plenitud eterna de tu gloria,{"\n"}
            Por Cristo, Señor nuestro,{"\n"}
            por quien concedes al mundo todos los bienes.{"\n"}
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