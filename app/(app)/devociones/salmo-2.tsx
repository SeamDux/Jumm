import React, { useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Salmo2() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions?.({ title: 'Salmo 2' });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Salmo 2</Text>
      <Text style={styles.bold}>Antífona: <Text style={styles.normal}>Su reinado es sempiterno; y todos los reyes le servirán y le acatarán (T.P. Aleluya).</Text></Text>
      <View style={styles.versesBlock}>
        <Text style={styles.verse}><Text style={styles.verseNum}>1.</Text> ¿Por qué se han amotinado las naciones, y los pueblos meditaron cosas vanas?</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>2.</Text> Se han levantado los reyes de la tierra, y se han reunido los príncipes contra el Señor y contra su Cristo.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>3.</Text> Rompamos, dijeron, sus ataduras, y sacudamos lejos de nosotros su yugo.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>4.</Text> El que habita en los cielos se reirá de ellos, se burlará de ellos el Señor.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>5.</Text> Entonces les hablará en su indignación, y les llenará de terror con su ira.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>6.</Text> Mas yo constituí mi rey sobre Sión, mi monte santo.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>7.</Text> Predicaré su decreto. A mí me ha dicho el Señor: Tú eres mi hijo; yo te he engendrado hoy.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>8.</Text> Pídeme, y te daré las naciones en herencia, y extenderé tus dominios hasta los confines de la tierra.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>9.</Text> Los regirás con vara de hierro, y como a vaso de alfarero los romperás.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>10.</Text> Ahora, pues, oh reyes!, entendedlo bien: dejaos instruir, los que juzgáis la tierra.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>11.</Text> Servid al Señor con temor, y ensalzadlo con temblor santo.</Text>
        <Text style={styles.verse}><Text style={styles.verseNum}>12.</Text> Abrazad la buena doctrina, no sea que al fin se enoje, y perezcáis fuera del camino, cuando, dentro de poco, se inflame su ira. Bienaventurados serán los que hayan puesto en él su confianza.</Text>
      </View>
      <Text style={styles.response}><Text style={styles.bold}>V/.</Text> Gloria al Padre, y al Hijo, y al Espíritu Santo.</Text>
      <Text style={styles.response}><Text style={styles.bold}>R/.</Text> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</Text>
      <Text style={styles.bold}>Antífona: <Text style={styles.normal}>Su reinado es sempiterno; y todos los reyes le servirán y le acatarán (T.P. Aleluya).</Text></Text>
      <Text style={styles.response}><Text style={styles.bold}>V/.</Text> Señor, escucha nuestra oración.</Text>
      <Text style={styles.response}><Text style={styles.bold}>R/.</Text> Y llegue a ti nuestro clamor.</Text>
      <Text style={styles.response}>Los sacerdotes añaden:</Text>
      <Text style={styles.response}><Text style={styles.bold}>V/.</Text> El Señor esté con vosotros.</Text>
      <Text style={styles.response}><Text style={styles.bold}>R/.</Text> Y con tu espíritu.</Text>
      <Text style={styles.response}><Text style={styles.bold}>V/.</Text> Oremos: Omnipotente y sempiterno Dios, que en tu amado Hijo, Rey universal, quisiste instaurarlo todo: concédenos propicio que todos los pueblos, disgregados por la herida del pecado, se sometan a su suavísimo imperio: que contigo vive y reina en unidad del Espíritu Santo, Dios, por todos los siglos de los siglos.</Text>
      <Text style={styles.response}><Text style={styles.bold}>R/.</Text> Amén</Text>
      <Text style={styles.citation}>
        “Jesucristo, habiendo entrado una vez por todas en el santuario del cielo, intercede sin cesar por nosotros como el mediador” a la derecha del Padre “que nos asegura permanentemente la efusión del Espíritu Santo”. No hay otro camino para llegar al Padre si no es a través de Jesucristo. (CEC 667).
      </Text>
      <Text style={styles.citation}>
        “La oración de la Iglesia, alimentada por la palabra de Dios y por la celebración de la liturgia, nos enseña a orar al Señor Jesús. Aunque esté dirigida sobre todo al Padre, en todas las tradiciones litúrgicas incluye formas de oración dirigidas a Cristo. Algunos salmos, según su actualización en la oración de la Iglesia, y el Nuevo Testamento ponen en nuestros labios y graban en nuestros corazones las invocaciones de esta oración a Cristo: Hijo de Dios, Verbo de Dios, Señor, Salvador, Cordero de Dios, Rey, Hijo amado, Hijo de la Virgen, Buen Pastor, Vida nuestra, nuestra Luz, nuestra Esperanza, Resurrección nuestra, Amigo de los hombres…”. (CEC 2665).
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#b71c1c',
    textAlign: 'center',
    marginBottom: 18,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222',
  },
  normal: {
    fontWeight: 'normal',
    color: '#222',
  },
  versesBlock: {
    marginVertical: 10,
    marginLeft: 10,
  },
  verse: {
    fontSize: 17,
    color: '#222',
    marginBottom: 4,
    textAlign: 'justify',
  },
  verseNum: {
    fontWeight: 'bold',
    color: '#b71c1c',
    marginRight: 4,
  },
  response: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
    marginBottom: 8,
    marginLeft: 10,
  },
  citation: {
    fontSize: 15,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 18,
    marginBottom: 10,
    textAlign: 'justify',
  },
}); 