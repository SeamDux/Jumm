import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function Plegaria1Page() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Plegaria Eucarística I',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Plegaria Eucarística I o Canon Romano</Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, con las manos extendidas, dice:</Text>
          <Text style={styles.texto}>
            Padre misericordioso,{"\n"}
            te pedimos humildemente{"\n"}
            por Jesucristo, tu Hijo, nuestro Señor,{"\n"}
            que aceptes y bendigas{"\n"}
          <Text style={styles.textoRojoItalic}>Traza el signo de la cruz sobre el pan y el vino conjuntamente, diciendo:</Text>{"\n"}
            estos dones +,{"\n"}
            este sacrificio santo y puro que te ofrecemos,{"\n"}
            ante todo, por tu Iglesia santa y católica,{"\n"}
            para que le concedas la paz,{"\n"}
            la protejas,{"\n"}
            la congregues en la unidad y la gobiernes en el mundo entero,{"\n"}
            con tu servidor el Papa N.,{"\n"}
            con nuestro Obispo N.,{"\n"}
            y todos los demás Obispos que, fieles a la verdad,{"\n"}
            promueven la fe católica y apostólica.
          </Text>

          <Text style={styles.textoNegrita}>Conmemoración de los vivos.</Text>
          <Text style={styles.texto}>
            Acuérdate, Señor,{"\n"}
            de tus hijos N. y N.,{"\n"}
            y de todos los aquí reunidos,{"\n"}
            cuya fe y entrega bien conoces;{"\n"}
            por ellos y todos los suyos, por el perdón de sus pecados{"\n"}
            y la salvación que esperan,{"\n"}
            te ofrecemos,{"\n"}
            y ellos mismos te ofrecen,{"\n"}
            este sacrificio de alabanza, a ti, eterno Dios, vivo y verdadero.
          </Text>

          <Text style={styles.textoNegrita}>Conmemoración de los santos.</Text>
          <Text style={styles.texto}>
            Reunidos en comunión con toda la Iglesia,{"\n"}
            veneramos la memoria,{"\n"}
            ante todo, de la gloriosa siempre Virgen María,{"\n"}
            Madre de Jesucristo, nuestro Dios y Señor;{"\n"}
            la de su esposo, san José;{"\n"}
            la de los santos apóstoles y mártires{"\n"}
            Pedro y Pablo, Andrés,{"\n"}
            (Santiago y Juan,{"\n"}
            Tomás, Santiago, Felipe,{"\n"}
            Bartolomé, Mateo, Simón y Tadeo;{"\n"}
            Lino, Cleto, Clemente,{"\n"}
            Sixto, Cornelio, Cipriano,{"\n"}
            Lorenzo, Crisógono,{"\n"}
            Juan y Pablo, Cosme y Damián),{"\n"}
            y la de todos los santos;{"\n"}
            por sus méritos y oraciones{"\n"}
            concédenos en todo tu protección.
          </Text>
          <Text style={styles.textoItalica}>(Por Cristo, nuestro Señor. Amén.)</Text>

          <Text style={styles.texto}>
            Acepta, Señor, en tu bondad,{"\n"}
            esta ofrenda de tus servidores{"\n"}
            y de toda tu familia santa;{"\n"}
            ordena en tu paz nuestros días,{"\n"}
            líbranos de la condenación eterna{"\n"}
            y cuéntanos entre tus elegidos.
          </Text>
          <Text style={styles.textoItalica}>(Por Cristo, nuestro Señor. Amén.)</Text>

          <Text style={styles.textoRojoItalic}>Extendiendo las manos sobre las ofrendas, dice:</Text>
          <Text style={styles.texto}>
            Bendice y santifica, esta ofrenda, Padre{"\n"}
            haciéndola perfecta, espiritual y digna de ti,{"\n"}
            de manera que sea para nosotros{"\n"}
            Cuerpo y Sangre de tu Hijo amado,{"\n"}
            Jesucristo, nuestro Señor.
          </Text>

          <Text style={styles.texto}>
            El mismo, la víspera de su Pasión,{"\n"}
            tomó pan en sus santas y venerables manos,{"\n"}
            y, elevando los ojos al cielo,{"\n"}
            hacia ti, Dios, Padre suyo todopoderoso,{"\n"}
            dando gracias te bendijo, lo partió,{"\n"}
            y lo dio a sus discípulos, diciendo:{"\n"}
          </Text>

          <Text style={styles.textoRojoItalic}>El sacerdote, con claridad, pronuncia la palabras del Señor para consagrar el pan:</Text>
          <Text style={styles.textoNegrita}>
            TOMEN Y COMAN TODOS DE ÉL,{"\n"}
            PORQUE ESTO ES MI CUERPO,{"\n"}
            QUE SERÁ ENTREGADO POR USTEDES.
          </Text>
          <Text style={styles.textoRojoItalic}>Muestra el pan consagrado al pueblo, lo deposita luego sobre la patena y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.textoRojoItalic}>Igualmente, consagra el vino con las palabras:</Text>
          <Text style={styles.texto}>
            Del mismo modo, acabada la cena,{"\n"}
            tomó este cáliz glorioso,{"\n"}
            en sus santas y venerables manos,{"\n"}
            dando gracias te bendijo,{"\n"}
            y lo dio a sus discípulos, diciendo:{"\n"}
          </Text>
          <Text style={styles.textoNegrita}>
            TOMEN Y BEBAN TODOS DE ÉL,{"\n"}
            PORQUE ÉSTE ES EL CÁLIZ DE MI SANGRE,{"\n"}
            SANGRE DE LA ALIANZA NUEVA Y ETERNA,{"\n"}
            QUE SERÁ DERRAMADA POR USTEDES Y POR MUCHOS,{"\n"}
            PARA EL PERDÓN DE LOS PECADOS.{"\n"}
            HAGAN ESTO EN CONMEMORACIÓN MÍA.
          </Text>
          <Text style={styles.textoRojoItalic}>Muestra el cáliz al pueblo, lo deposita luego sobre el corporal y lo adora, haciendo genuflexión.</Text>

          <Text style={styles.texto}>
            Por eso, Padre,{"\n"}
            nosotros, tus servidores, y todo tu pueblo santo,{"\n"}
            al celebrar este memorial de la muerte gloriosa,{"\n"}
            de Jesucristo, tu Hijo, nuestro Señor;,{"\n"}
            de su santa resurrección del lugar de los muertos,{"\n"}
            y de su admirable ascensión a los cielos,{"\n"}
            te ofrecemos, Dios de gloria y majestad,{"\n"}
            de los mismos bienes que nos has dado,{"\n"}
            el sacrificio puro, inmaculado y santo:{"\n"}
            pan de vida eterna,{"\n"}
            y cáliz de eterna salvación.{"\n"}
          </Text>

          <Text style={styles.texto}>
            Mira con ojos de bondad esta ofrenda y acéptala,{"\n"}
            como aceptaste los dones del justo Abel,{"\n"}
            el sacrificio de Abrahán, nuestro padre en la fe,{"\n"}
            y la oblación pura de tu sumo sacerdote Melquisedec.
          </Text>

          <Text style={styles.textoRojoItalic}>Inclinado, con las manos juntas, prosigue:</Text>
          <Text style={styles.texto}>
            Te pedimos humildemente,{"\n"}
            Dios todopoderoso,{"\n"}
            que esta ofrenda sea llevada a tu presencia,{"\n"}
            hasta el altar del cielo,{"\n"}
            por manos de tu ángel,{"\n"}
            para que cuantos recibimos,{"\n"}
            el Cuerpo y la Sangre de tu Hijo,{"\n"}
            al participar aquí de este altar,{"\n"}
            <Text style={styles.textoRojoItalic}>Se endereza y se signa, diciendo:</Text>{"\n"}
            seamos colmados,{"\n"}
            de gracia y bendición.
          </Text>
          <Text style={styles.textoItalica}>(Por Cristo, nuestro Señor. Amén.)</Text>

          <Text style={styles.textoNegrita}>Conmemoración de los difuntos.</Text>
          <Text style={styles.texto}>
            Acuérdate también, Señor,{"\n"}
            de tus hijos N. y N.,{"\n"}
            que nos han precedido con el signo de la fe,{"\n"}
            y duermen ya el sueño de la paz.{"\n"}
            A ellos, Señor, y a cuantos descansan en Cristo,{"\n"}
            concédeles el lugar del consuelo,{"\n"}
            de la luz y de la paz.
          </Text>
          <Text style={styles.textoItalica}>(Por Cristo, nuestro Señor. Amén.)</Text>

          <Text style={styles.texto}>
            Y a nosotros, pecadores, siervos tuyos,{"\n"}
            que confiamos en tu infinita misericordia,{"\n"}
            admítenos en la asamblea,{"\n"}
            de los santos apóstoles y mártires,{"\n"}
            Juan el Bautista, Esteban,{"\n"}
            Matías y Bernabé,{"\n"}
            (Ignacio, Alejandro,{"\n"}
            Marcelino y Pedro,{"\n"}
            Felicidad y Perpetua,{"\n"}
            Águeda, Lucía,{"\n"}
            Inés, Cecilia, Anastasia),{"\n"}
            y de todos los santos;,{"\n"}
            y acéptanos en su compañía,{"\n"}
            no por nuestros méritos,{"\n"}
            sino conforme a tu bondad.
          </Text>

          <Text style={styles.texto}>
            Por Cristo, Señor nuestro,{"\n"}
            por quien sigues creando todos los bienes,{"\n"}
            los santificas,{"\n"}
            los llenas de vida,{"\n"}
            los bendices,{"\n"}
            y los repartes entre nosotros.
          </Text>

          <Text style={styles.textoItalica}>
            Por Cristo, con él y en él,{"\n"}
            a ti, Dios Padre omnipotente,{"\n"}
            en la unidad del Espíritu Santo,{"\n"}
            todo honor y toda gloria,{"\n"}
            por los siglos de los siglos.
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
}); 