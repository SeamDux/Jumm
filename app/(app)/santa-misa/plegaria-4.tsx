import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function Plegaria4Page() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Plegaria Eucarística IV',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Plegaria Eucarística IV</Text>

          <Text style={styles.texto}>
            En verdad es justo darte gracias,{"\n"}
            y deber nuestro glorificarte, Padre santo,{"\n"}
            porque tú eres el único Dios vivo y verdadero{"\n"}
            que existes desde siempre;{"\n"}
            y vives para siempre;{"\n"}
            luz sobre toda luz.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Porque tú solo eres bueno y la fuente de la vida,{"\n"}
            hiciste todas las cosas{"\n"}
            para colmarlas de tus bendiciones{"\n"}
            y alegrar su multitud con la claridad de tu gloria.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Por eso,
            innumerables ángeles en tu presencia,{"\n"}
            contemplando la gloria de tu rostro,{"\n"}
            te sirven siempre y te glorifican sin cesar.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Y con ellos también nosotros, llenos de alegría,{"\n"}
            y por nuestra voz las demás criaturas,{"\n"}
            aclamamos tu nombre cantando:{"\n"}
          </Text>

          <Text style={styles.textoItalica}>
            Santo, Santo, Santo es el Señor,{"\n"}
            Dios del Universo.{"\n"}
            Llenos están el cielo y la tierra de tu gloria.{"\n"}
            Hosanna en el cielo.{"\n"}
            Bendito el que viene en nombre del Señor.{"\n"}
            Hosanna en el cielo.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, con las manos extendidas, dice:</Text>

          <Text style={styles.texto}>
            Te alabamos, Padre santo,{"\n"}
            porque eres grande{"\n"}
            y porque hiciste todas las cosas con sabiduría y amor.{"\n"}
          </Text>

          <Text style={styles.texto}>
            A imagen tuya creaste al hombre{"\n"}
            y le encomendaste el universo entero,{"\n"}
            para que, sirviéndote sólo a ti, su Creador,{"\n"}
            dominara todo lo creado.{"\n"}
            Y cuando por desobediencia perdió tu amistad,{"\n"}
            no lo abandonaste al poder de la muerte,{"\n"}
            sino que, compadecido, tendiste la mano a todos,{"\n"}
            para que te encuentre el que te busca.{"\n"}
            Reiteraste, además, tu alianza a los hombres;{"\n"}
            por los profetas{"\n"}
            los fuiste llevando con la esperanza de salvación.{"\n"}
            Y tanto amaste al mundo, Padre santo,{"\n"}
            que, al cumplirse la plenitud de los tiempos,{"\n"}
            nos enviaste como salvador a tu único Hijo.{"\n"}
            El cual se encarnó por obra del Espíritu Santo,{"\n"}
            nació de María, la Virgen,{"\n"}
            y así compartió en todo nuestra condición humana{"\n"}
            menos en el pecado;{"\n"}
            anunció la salvación a los pobres,{"\n"}
            la liberación a los oprimidos{"\n"}
            y a los afligidos el consuelo.{"\n"}
            Para cumplir tus designios,{"\n"}
            él mismo se entregó a la muerte,{"\n"}
            y, resucitando, destruyó la muerte y nos dio nueva vida.{"\n"}
            Y porque no vivamos ya para nosotros mismos,{"\n"}
            sino para él, que por nosotros murió y resucitó,{"\n"}
            envió Padre, al Espíritu Santo{"\n"}
            como primicia para los creyentes,{"\n"}
            a fin de santificar todas las cosas,{"\n"}
            llevando a plenitud su obra en el mundo.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>Junta las manos y, manteniéndolas extendidas sobre las ofrendas, dice:</Text>
          <Text style={styles.texto}>
            Por eso, Padre, te rogamos{"\n"}
            que este mismo Espíritu{"\n"}
            santifique estas ofrendas,{"\n"}
          <Text style={styles.textoRojoItalic}>Junta las manos y traza el signo de la cruz sobre el pan y el cáliz conjuntamente, diciendo:</Text>{"\n"}
            para que se conviertan en el Cuerpo y Sangre{"\n"}
            de Jesucristo, nuestro Señor,{"\n"}
            y así celebremos el gran misterio{"\n"}
            que nos dejó como alianza eterna.{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>
            El sacerdote, con claridad pronuncia las palabras del Señor para consagrar el pan:{"\n"}
          </Text>

          <Text style={styles.texto}>
            Porque el mismo,{"\n"}
            llegada la hora en que había de ser glorificado{"\n"}
            por ti, Padre santo,.{"\n"}
            habiendo amado a los suyos{"\n"}
            que estaban en el mundo,{"\n"}
            los amó hasta el extremo.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Y, mientras cenaba con sus discípulos,{"\n"}
            tomó pan,{"\n"}
            te bendijo,{"\n"}
            lo partió{"\n"}
            y se lo dio, diciendo:{"\n"}
          </Text>

          <Text style={styles.textoNegrita}>
            TOMEN Y COMAN TODOS DE ÉL,{"\n"}
            PORQUE ESTO ES MI CUERPO,{"\n"}
            QUE SERÁ ENTREGADO POR USTEDES.{"\n"}
          </Text>
          <Text style={styles.textoRojoItalic}>Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.textoRojoItalic}>
            Igualmente, consagra el vino con las palabras:{"\n"}
          </Text>

          <Text style={styles.texto}>
            Del mismo modo,{"\n"}
            tomó el cáliz lleno del fruto de la vid,{"\n"}
            te dio gracias{"\n"}
            y lo pasó a sus discípulos, diciendo:{"\n"}
          </Text>

          <Text style={styles.textoNegrita}>
            TOMEN Y BEBAN TODOS DE ÉL,{"\n"}
            PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,{"\n"}
            SANGRE DE LA ALIANZA NUEVA Y ETERNA,{"\n"}
            QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS{"\n"}
            PARA EL PERDÓN DE LOS PECADOS.{"\n"}
            HACED ESTO EN CONMEMORACIÓN MÍA.{"\n"}
          </Text>
          <Text style={styles.textoRojoItalic}>Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.textoRojoItalic}>
            El celebrante dice:{"\n"}
          </Text>
          <Text style={styles.texto}>Éste es el Sacramento de nuestra fe.</Text>
          <Text style={styles.textoRojoItalic}>o bien:</Text>
          <Text style={styles.texto}>Éste es el Misterio de la fe.</Text>

          <Text style={styles.textoRojoItalic}>El pueblo responde:</Text>
          <Text style={styles.textoItalica}>
            Anunciamos tu muerte,{"\n"}
            proclamamos tu resurrección.{"\n"}
            ¡Ven, Señor Jesús!{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>o bien:</Text>
          <Text style={styles.texto}>Aclamad el Misterio de la redención</Text>
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

          <Text style={styles.texto}>
            Por eso, Padre,{"\n"}
            al celebrar ahora el memorial de nuestra redención,{"\n"}
            recordamos la muerte de Cristo{"\n"}
            y su descenso al lugar de los muertos,{"\n"}
            proclamamos su resurrección y ascensión a tu derecha;{"\n"}
            y mientras esperamos tu venida gloriosa,{"\n"}
            te ofrecemos su Cuerpo y su Sangre,{"\n"}
            sacrificio agradable a ti{"\n"}
            y salvación para todo el mundo.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Dirige tu mirada sobre esta Víctima{"\n"}
            que tú mismo has preparado a tu Iglesia,{"\n"}
            y concede a cuantos compartimos{"\n"}
            este pan y este cáliz,{"\n"}
            que, congregados en un solo cuerpo por el Espíritu Santo,{"\n"}
            seamos en Cristo{"\n"}
            víctima viva para alabanza de tu gloria.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Y ahora, Señor, acuérdate{"\n"}
            de todos aquellos por quienes te ofrecemos este sacrificio:{"\n"}
            de tu servidor el Papa N.,{"\n"}
            de nuestro Obispo N.,{"\n"}
            del orden episcopal y de los presbíteros y diáconos,{"\n"}
            de los ofrentes y de los aquí reunidos,{"\n"}
            de todo tu pueblo santo{"\n"}
            y de aquellos que te buscan con sincero corazón.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Acuérdate también{"\n"}
            de los que murieron en la paz de Cristo{"\n"}
            y de todos los difuntos,{"\n"}
            cuya fe sólo tú conociste.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Padre de bondad,{"\n"}
            que todos tus hijos nos reunamos{"\n"}
            en la heredad de tu reino,{"\n"}
            con María, la Virgen Madre de Dios,{"\n"}
            San José su Esposo,{"\n"}
            con los apóstoles y los santos;{"\n"}
            y allí, junto con toda la creación{"\n"}
            libre ya del pecado y de la muerte,{"\n"}
            Te glorifiquemos por Cristo, Señor nuestro,{"\n"}
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