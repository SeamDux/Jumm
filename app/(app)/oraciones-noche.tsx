import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack } from 'expo-router';

interface OracionNoche {
  id: string;
  titulo: string;
  texto: string;
}

const oracionesNoche: OracionNoche[] = [
  {
    id: 'buen-dormir',
    titulo: 'Oración para un Buen Dormir',
    texto: 'Oh buen Dios, que mientras yo duerma, mi corazón esté\nvelando: que sea yo preservado de todo mal por vuestros ángeles,\na los cuales ordenasteis que me guarden en todos mis caminos.\nManifiesto que mientras estaré entregado al sueño, quisiera adoraros\ndel modo que os adoran vuestros ángeles en el cielo, y ya que\nla naturaleza exige el reposo de mi frágil y miserable cuerpo, os\nofrezco las adoraciones que os tributan los espíritus celestiales, así\ncomo las oraciones, las lágrimas, las mortificaciones y penitencias\nde todos vuestros siervos que pasan una gran parte de la noche\nentregados a estos piadosos ejercicios.\n\nAcepta, Dios mío, estos ofrecimientos y deseos de mi corazón,\npara que de día y de noche no cese de alabar vuestro santo nombre.\nTe pido, Señor, esta gracia por los méritos del Sagrado Corazón\nde vuestro santísimo Hijo mi Redentor y Salvador mío.'
  },
  {
    id: 'antes-examen',
    titulo: 'Oración antes del Examen de Conciencia de la noche',
    texto: 'Oh Dios, dame en esta hora la gracia de reconocer debidamente\nmis pecados ante ti, y de arrepentirme de ellos verdaderamente.\nBorra de tu libro, Señor de misericordia, mis múltiples acciones\ncometidas contra ti. Perdóname todas las distracciones en la\noración, mis pecados de omisión, y mis pecados deliberados\ncontra la conciencia.\n\nDame luz para ver lo que he de hacer, valor para emprenderlo\ny firmeza para llevarlo a cabo. Que en todas las cosas avance en\nla obra de santificación, de la realización de tu voluntad; y que\nen definitiva, por tu misericordia, pueda alcanzar la gloria de tu\nReino eterno, por Jesucristo nuestro Señor.'
  },
  {
    id: 'examen-noche',
    titulo: 'Examen de Conciencia por la noche',
    texto: 'Hay muchos modos de hacer el examen de conciencia. E incluso conviene cambiar el modo de hacerlo cada cierto tiempo. Transcribimos dos de esos modos posibles.\n\n[subtitle]Primera forma[/subtitle]\n\nCon Dios: ¿Me he acordado de Dios durante este día, ofreciéndole mi trabajo, dándole gracias, acudiendo a Él con confianza de hijo? ¿He tenido respetos humanos en algún momento? ¿He rezado con pausa y atención? ¿He acudido a Dios para pedirle ayuda para crecer en todas las virtudes y para superar mis defectos?\n\nCon el prójimo: ¿He tratado con dureza o menosprecio a los demás? ¿Me he preocupado de ayudar a los que me rodean y de hacerles la vida agradable? ¿Me preocupa también su vida espiritual? ¿He hecho algún apostolado? ¿He murmurado o calumniado? ¿He perdonado? ¿He pedido perdón? ¿He rezado por las personas que me preocupan?\n\nConmigo mismo: ¿He luchado por mi santificación? ¿He cumplido con todos mis deberes y obligaciones? ¿Me he dejado llevar por la pereza? ¿Me he dejado llevar por sentimientos de orgullo, vanidad, sensualidad, impureza? ¿Me he esforzado por vencer mi defecto dominante?\n\nPara terminar: ¡Dios y Señor mío! Te doy gracias por todos los beneficios que hoy me has concedido. Te pido perdón de todas las faltas que he cometido durante este día, me pesa de todo corazón el haberte ofendido y propongo firmemente nunca más pecar, ayudado por tu divina gracia. Amén.\n\n[subtitle]Segunda forma[/subtitle]\n\nOración: ¿Cómo estuve en la oración? ¿Cumplí, durante el día, los propósitos? ¿He tenido presencia de Dios? ¿Anduve con el debido recogimiento?, etc.\n\nExpiación: ¿Cómo recibí, en este día, las contradicciones venidas de la mano de Dios?, ¿las que me proporcionaron, con su carácter, mis compañeros?, ¿Las de mi misma miseria? ¿Supe ofrecer al Señor, como expiación, el mismo dolor, que siento, de haberle ofendido, ¡tantas veces!?, ¿le ofrecí la vergüenza de mis interiores sonrojos y humillaciones, al considerar lo poco que adelanto en el camino de las virtudes?\n\nAcción: ¿Actué siempre, durante el día, como lo hubiera hecho el Señor?, ¿en tal obra?, ¿y en tal?, ¿y en tal otra?...\n\nEste examen es compatible con cualquier otro sistema, que se siga, p.e., con el empleado por aquellos que miran, hora por hora del día, cómo anduvieron; o también con el de aquellos otros que examinan sus obligaciones con Dios, con el prójimo y consigo mismo; este triple punto puede considerarse en la oración, en la expiación y en la acción. Y así con cualquier otro modo de llevar el examen de conciencia.'
  },
  {
    id: 'acto-contricion',
    titulo: 'Acto de Contrición y de Acción de gracias',
    texto: 'En el nombre † del Padre, y del Hijo, y del Espíritu Santo.\nAmén.\n\nTe doy gracias, Dios mío, por todos los beneficios que hoy me\nhas concedido. Te pido perdón de todas las faltas que he cometido\ndurante este día; me pesa de todo corazón haberte ofendido y\npropongo firmemente nunca más pecar, ayudado de tu divina gracia.'
  },
  {
    id: 'abandono',
    titulo: 'Acto de abandono',
    texto: 'Señor, Dios mío: en tus manos abandono lo pasado y lo\npresente y lo futuro, lo pequeño y lo grande, lo poco y lo mucho,\nlo temporal y lo eterno.'
  },
  {
    id: 'contricion',
    titulo: 'Acto de contrición',
    texto: 'Dios mío, me arrepiento de todo corazón de todos mis pecados\ny los aborrezco, porque al pecar, no sólo merezco las penas\nestablecidas por ti justamente, sino principalmente porque te\nofendí, a ti sumo Bien y digno de amor por encima de todas las\ncosas. Por eso propongo firmemente, con ayuda de tu gracia, no\npecar más en adelante y huir de toda ocasión de pecado. Amén.'
  }
];

export default function OracionesNocheScreen() {
  const [oracionSeleccionada, setOracionSeleccionada] = useState<OracionNoche | null>(null);

  const renderTextoFormateado = (texto: string) => {
    const partes = texto.split(/(\[subtitle\].*?\[\/subtitle\])/);
    return partes.map((parte, index) => {
      if (parte.startsWith('[subtitle]')) {
        const subtitulo = parte.replace('[subtitle]', '').replace('[/subtitle]', '');
        return (
          <Text key={index} style={styles.subtitulo}>
            {subtitulo}
          </Text>
        );
      }
      return <Text key={index} style={styles.oracionTexto}>{parte}</Text>;
    });
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: oracionSeleccionada ? oracionSeleccionada.titulo : 'Oraciones de la Noche',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {oracionSeleccionada ? (
            <View style={styles.oracionDetalle}>
              <Text style={styles.oracionTitulo}>{oracionSeleccionada.titulo}</Text>
              <View style={styles.oracionContenido}>
                {renderTextoFormateado(oracionSeleccionada.texto)}
              </View>
              <TouchableOpacity 
                style={styles.botonVolver}
                onPress={() => setOracionSeleccionada(null)}
              >
                <Text style={styles.botonVolverTexto}>Volver al listado</Text>
              </TouchableOpacity>
            </View>
          ) : (
            oracionesNoche.map((oracion) => (
              <TouchableOpacity 
                key={oracion.id}
                style={styles.oracionItem}
                onPress={() => setOracionSeleccionada(oracion)}
              >
                <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
              </TouchableOpacity>
            ))
          )}
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
  oracionItem: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  oracionItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
  oracionDetalle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  oracionTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  oracionTexto: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 15,
  },
  oracionContenido: {
    marginBottom: 20,
  },
}); 