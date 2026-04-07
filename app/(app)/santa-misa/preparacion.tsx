import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

interface Oracion {
  id: string;
  titulo: string;
  texto: string;
}

const oraciones: Oracion[] = [
  {
    id: 'ambrosio',
    titulo: 'Oración de San Ambrosio',
    texto: 'Señor mío Jesucristo,\nme acerco a tu altar\nlleno de temor por mis pecados,\npero también lleno de confianza\nporque estoy seguro de tu misericordia.\nTengo conciencia de que mis pecados son muchos\ny de que no he sabido dominar mi corazón y mi lengua.\nPor eso, Señor de bondad y de poder,\ncon miseria y temores me acerco a Ti,\nfuente de misericordia y de perdón,\nvengo a refugiarme en Ti,\nque has dado la vida por salvarme,\nantes de que llegues como juez a pedirme cuentas.\nSeñor no me da vergüenza\ndescubrirte a Ti mis llagas.\nMe dan miedo mis pecados,\npero confío en tu infinito amor.\nPor eso te los entrego todos.\nSeñor mío Jesucristo, te ruego,\ncuyo nombre verdadero siempre con amor,\npues quisiste hacerte hombre para morir por nosotros.\nDios y hombre eres en uno.\nTen compasión de mis pecados y miserias.\nTú que eres fuente inagotable de amor,\nTe adoro, Señor, porque diste tu vida en la Cruz\ny te ofreciste en sacrificio por todos los hombres\ny especialmente por mí.\n\nAdoro Señor, la sangre preciosa\nque brotó de tus heridas\ny ha purificado al mundo de sus pecados.\nMira, Señor, a este pobre pecador,\ncreado y redimido por Ti.\nMe arrepiento de mis pecados\ny propongo corregir sus consecuencias.\nPurifícame de todas mis maldades\npara que pueda recibir\nmenos indignamente\ntu sagrada comunión.\nQue tu Cuerpo y sangre\nme ayuden, Señor,\na obtener de Ti\nel perdón de mis pecados\ny la satisfacción de mis culpas;\nme libren de mis pensamientos,\nrenueven en mí los sentimientos santos,\nme impulsen a cumplir tu voluntad\ny me protejan en todo peligro\nde alma y cuerpo. Amén.'
  },
  {
    id: 'tomas',
    titulo: 'Oración de Santo Tomás de Aquino',
    texto: 'Aquí me llego, todopoderoso y eterno Dios,\nal sacramento de vuestro unigénito Hijo\nmi Señor Jesucristo,\ncomo enfermo al médico de la vida,\ncomo manchado a la fuente de misericordias,\ncomo ciego a la luz de la claridad eterna,\ncomo pobre y desvalido al Señor\nde los cielos y tierra.\nRuego, pues, a vuestra infinita bondad y misericordia,\ntengáis por bien sanar mi enfermedad,\nlimpiar mi suciedad, alumbrar mi ceguidad,\nenriquecer mi pobreza y vestir mi desnudez,\npara que así pueda yo recibir el Pan de los Ángeles,\nal Rey de los Reyes, al Señor de los señores,\ncon tanta reverencia y humildad,\ncon tanta contrición y devoción,\ncon tal fe y tal pureza,\ny con tal propósito e intención,\ncual conviene para la salud de mi alma.\nDadme, Señor, que reciba yo,\nno sólo el sacramento\ndel Sacratísimo Cuerpo y Sangre,\nsino también la virtud y gracia del sacramento.\n¡Oh benignísimo Dios!,\nconcededme que albergue yo en mi corazón\nde tal modo el Cuerpo de vuestro unigénito Hijo,\nnuestro Señor Jesucristo,\nCuerpo adorable que tomó de la Virgen María,\nque merezca incorporarme a su Cuerpo místico,\ny contarme como uno de sus miembros.\n¡Oh piadosísimo Padre!,\notorgadme que a este unigénito Hijo vuestro,\nal cual deseo ahora recibir encubierto\ny debajo del velo en esta vida,\nmerezca yo verle para siempre,\ndescubierto y sin velo, en la otra.\nEl cual con Vos vive y reina en unidad del Espíritu Santo,\nDios, por los siglos de los siglos. Amén.'
  },
  {
    id: 'virgen',
    titulo: 'Oración a la Santísima Virgen',
    texto: 'Oh Madre de piedad y de misericordia,\nSantísima Virgen María.\nYo, miserable e indigno pecador,\nen ti confío con todo mi corazón y afecto; y acudo a tu piedad, para que,\nasí como estuviste junto a tu dulcísimo Hijo\npendiente de la cruz, también estés junto a mí, miserable pecador,\ny junto a todos los fieles que aquí y en toda la Santa Iglesia \nvamos a participar de aquel divino sacrificio, para que, ayudados con tu gracia,\nofrezcamos una hostia digna y aceptable\nen la presencia de la suma y única Trinidad. Amén.'
  },
  {
    id: 'intencion',
    titulo: 'Fórmula para la intención de la Misa',
    texto: 'Yo quiero celebrar el Santo Sacrificio de la Misa y hacer el Cuerpo y la Sangre de nuestro Señor Jesucristo, según el rito de la Santa Iglesia Romana, para alabanza de Dios omnipotente y de toda la Iglesia triunfante, para mi beneficio y el de toda la Iglesia militante, por todos los que se encomendaron a mis oraciones en general y en particular, y por la feliz situación de la Santa Iglesia Romana. Amén. El Señor omnipotente y misericordioso nos conceda la alegría con la paz, la enmienda de la vida, tiempo de verdadera penitencia, la gracia y el consuelo del Espíritu Santo, y la perseverancia en las buenas obras. Amén.'
  },
  {
    id: 'jose',
    titulo: 'Oración a San José',
    texto: '¡Oh feliz varón, bienaventurado José,\na quien le fue concedido\nno solo ver y oír al Dios,\na quien muchos reyes quisieron ver y no vieron,\noír y no oyeron,\nsino también abrazarlo, besarlo,\nvestirlo y custodiarlo!\n\nV. Ruega por nosotros, bienaventurado José.\nR. Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo.\n\nOremos:\nOh Dios, que nos concediste el sacerdocio real\nte pedimos que,\nasí como San José mereció tratar y llevar en sus brazos\ncon cariño a tu Hijo unigénito,\nnacido de la Virgen María,\nhagas que nosotros te sirvamos\ncon corazón limpio y buenas obras,\nde modo que hoy recibamos dignamente\nel sacramento Cuerpo y Sangre de tu Hijo,\ny en la vida futura merezcamos alcanzar el premio eterno.\nPor el mismo Jesucristo nuestro Señor. Amén.'
  },
  {
    id: 'antes-comunion',
    titulo: 'Oraciones para antes de la Comunión',
    texto: 'Acércate con gran respeto a comulgar. Es muy bueno que repitas en tu interior estas oraciones que van debajo. Al recibir el Cuerpo del Señor, respondes Amén, reafirmando tu fe en la presencia real de Cristo en la forma consagrada. Retírate luego con el mismo respeto a darle gracias al Señor.\n\nActo de fe\n\n¡Señor mío, Jesucristo!, creo firmemente que voy a recibir tu Cuerpo, tu Sangre, tu Alma y tu Divinidad.\n\nActo de esperanza\n\nEspero, Señor, que ya que te das todo a mí, en la Eucaristía tendrás misericordia de mí y me otorgarás las gracias necesarias para mi salvación eterna.\n\nActo de caridad\n\nDios mío, te amo con todo mi corazón, con toda mi alma, con todas mis fuerzas y sobre todas las cosas.\n\nActo de adoración\n\n¡Señor!, te adoro y te reconozco como mi Creador, Redentor y soberano Dueño.\n\nComunión espiritual\n\nEsta oración se puede decir siempre que por cualquier motivo no se haya podido comulgar sacramentalmente, o cuando se pase cerca de una Iglesia.\n\n Yo quisiera, Señor, recibiros con aquella pureza, humildad y devoción con que os recibió vuestra Santísima Madre, con el espíritu y fervor de los Santos.'
  }
];

export default function PreparacionPage() {
  const [oracionSeleccionada, setOracionSeleccionada] = useState<Oracion | null>(null);

  return (
    <>
      <Stack.Screen 
        options={{
          title: oracionSeleccionada ? oracionSeleccionada.titulo : 'Preparación',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {oracionSeleccionada ? (
            <View style={styles.oracionDetalle}>
              <Text style={styles.oracionTitulo}>{oracionSeleccionada.titulo}</Text>
              <Text style={styles.oracionTexto}>{oracionSeleccionada.texto}</Text>
              <TouchableOpacity 
                style={styles.botonVolver}
                onPress={() => setOracionSeleccionada(null)}
              >
                <Text style={styles.botonVolverTexto}>Volver al listado</Text>
              </TouchableOpacity>
            </View>
          ) : (
            oraciones.map((oracion) => (
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
    backgroundColor: '#f3f4f6',
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
    fontSize: 16,
    color: '#dc2626',
    fontStyle: 'italic',
    marginBottom: 10,
  },
}); 