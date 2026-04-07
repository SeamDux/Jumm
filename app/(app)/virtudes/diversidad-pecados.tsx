import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function DiversidadPecadosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'La diversidad de pecados',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>La diversidad de pecados</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              La variedad de pecados es grande. La Escritura contiene varias listas. La carta a los Gálatas opone las obras de la carne al fruto del Espíritu: "Las obras de la carne son conocidas: fornicación, impureza, libertinaje, idolatría, hechicería, odios, discordia, celos, iras, rencillas, divisiones, disensiones, envidias, embriagueces, orgías y cosas semejantes, sobre las cuales os prevengo como ya os previne, que quienes hacen tales cosas no heredarán el Reino de Dios" (5,19-21; cf Rm 1, 28-32; 1 Co 6, 9-10; Ef 5, 3-5; Col 3, 5-8; 1 Tm 1, 9-10; 2 Tm 3, 2-5). (CEC 1852)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Se pueden distinguir los pecados según su objeto, como en todo acto humano, o según las virtudes a las que se oponen, por exceso o por defecto, o según los mandamientos que quebrantan. Se los puede agrupar también según que se refieran a Dios, al prójimo o a sí mismo; se los puede dividir en pecados espirituales y carnales, o también en pecados de pensamiento, palabra, acción u omisión. La raíz del pecado está en el corazón del hombre, en su libre voluntad, según la enseñanza del Señor: "De dentro del corazón salen las intenciones malas, asesinatos, adulterios, fornicaciones, robos, falsos testimonios, injurias. Esto es lo que hace impuro al hombre" (Mt 15,19-20). En el corazón reside también la caridad, principio de las obras buenas y puras, a la que hiere el pecado. (CEC 1853)
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Pecado: pecado mortal y venial</Text>
            <Text style={styles.text}>
              "Conviene valorar los pecados según su gravedad. La distinción entre pecado mortal y venial, perceptible ya en la Escritura (cf 1 Jn 16-17) se ha impuesto en la tradición de la Iglesia. La experiencia de los hombres la corroboran." (CEC 1854)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado mortal destruye la caridad en el corazón del hombre por una infracción grave de la ley de Dios; aparta al hombre de Dios, que es su fin último y su bienaventuranza, prefiriendo un bien inferior. (CEC 1855)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado venial deja subsistir la caridad, aunque la ofende y la hiere.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado mortal, que ataca en nosotros el principio vital que es la caridad, necesita una nueva iniciativa de la misericordia de Dios y una conversión del corazón que se realiza ordinariamente en el marco del sacramento de la Reconciliación (CEC 1856)
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>¿Cuándo un pecado es mortal o venial?</Text>
            <Text style={styles.text}>
              Para que un pecado sea mortal se requieren tres condiciones: "Es pecado mortal lo que tiene como objeto una materia grave y que, además, es cometido con pleno conocimiento y deliberado consentimiento" (RP 17). (CEC 1857)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              La materia grave es precisada por los Diez mandamientos según la respuesta de Jesús al joven rico: "No mates, no cometas adulterio, no robes, no levantes testimonio falso, no seas injusto, honra a tu padre y a tu madre" (Mc 10, 19). La gravedad de los pecados es mayor o menor: un asesinato es más grave que un robo. La cualidad de las personas lesionadas cuenta también: la violencia ejercida contra los padres es más grave que la ejercida contra un extraño. (CEC 1858)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado mortal requiere plena conciencia y entero consentimiento. Presupone el conocimiento del carácter pecaminoso del acto, de su oposición a la Ley de Dios. Implica también un consentimiento suficientemente deliberado para ser una elección personal. La ignorancia afectada y el endurecimiento del corazón (cf Mc 3, 5-6; Lc 16, 19-31) no disminuyen, sino aumentan, el carácter voluntario del pecado. (CEC 1859)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              La ignorancia involuntaria puede disminuir, y aún excusar, la imputabilidad de una falta grave, pero se supone que nadie ignora los principios de la ley moral que están inscritos en la conciencia de todo hombre. Los impulsos de la sensibilidad, las pasiones pueden igualmente reducir el carácter voluntario y libre de la falta, lo mismo que las presiones exteriores o los trastornos patológicos. El pecado más grave es el que se comete por malicia, por elección deliberada del mal. (CEC 1860)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado mortal es una posibilidad radical de la libertad humana como lo es también el amor. Entraña la pérdida de la caridad y la privación de la gracia santificante, es decir, del estado de gracia. Si no es rescatado por el arrepentimiento y el perdón de Dios, causa la exclusión del Reino de Cristo y la muerte eterna del infierno; de modo que nuestra libertad tiene poder de hacer elecciones para siempre, sin retorno. Sin embargo, aunque podamos juzgar que un acto es en sí una falta grave, el juicio sobre las personas debemos confiarlo a la justicia y a la misericordia de Dios. (CEC 1861)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Se comete un pecado venial cuando no se observa en una materia leve la medida prescrita por la ley moral, o cuando se desobedece a la ley moral en materia grave, pero sin pleno conocimiento o sin entero consentimiento. (CEC 1862)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              El pecado venial debilita la caridad; entraña un afecto desordenado a bienes creados; impide el progreso del alma en el ejercicio de las virtudes y la práctica del bien moral; merece penas temporales. El pecado venial deliberado y que permanece sin arrepentimiento, nos dispone poco a poco a cometer el pecado mortal. No obstante, el pecado venial no rompe la Alianza con Dios. Es humanamente reparable con la gracia de Dios. "No priva de la gracia santificante, de la amistad con Dios, de la caridad, ni, por tanto, de la bienaventuranza eterna". (RP 17) (CEC 1863)
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Todos los pecados pueden ser perdonados</Text>
            <Text style={styles.citaText}>
              "Todo pecado y blasfemia será perdonado a los hombres pero la blasfemia contra el Espíritu Santo no será perdonada" (Mc 3, 29; cf Mt 12, 32; Lc 12, 10). No hay límites a la misericordia de Dios, pero quien se niega deliberadamente a acoger la misericordia de Dios mediante el arrepentimiento rechaza el perdón de sus pecados y la salvación ofrecida por el Espíritu Santo (cf DeV 46). Semejante endurecimiento puede conducir a la condenación final y a la perdición eterna. (CEC 1864)
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Pecados capitales y virtudes opuestas</Text>
            <Text style={styles.text}>
              La reiteración de pecados, incluso veniales, engendra vicios entre los cuales se distinguen los pecados capitales. Son así llamados porque generan otros pecados, otros vicios. Los siete pecados capitales y las virtudes opuestas son:
            </Text>
            <View style={styles.tableContainer}>
              <View style={styles.tableColumn}>
                <Text style={styles.tableHeader}>Pecados</Text>
                <Text style={styles.tableItem}>• Soberbia</Text>
                <Text style={styles.tableItem}>• Avaricia</Text>
                <Text style={styles.tableItem}>• Envidia</Text>
                <Text style={styles.tableItem}>• Ira</Text>
                <Text style={styles.tableItem}>• Lujuria</Text>
                <Text style={styles.tableItem}>• Gula</Text>
                <Text style={styles.tableItem}>• Pereza</Text>
              </View>
              <View style={styles.tableColumn}>
                <Text style={styles.tableHeader}>Virtudes</Text>
                <Text style={styles.tableItem}>• Humildad</Text>
                <Text style={styles.tableItem}>• Largueza</Text>
                <Text style={styles.tableItem}>• Caridad</Text>
                <Text style={styles.tableItem}>• Paciencia</Text>
                <Text style={styles.tableItem}>• Castidad</Text>
                <Text style={styles.tableItem}>• Templanza</Text>
                <Text style={styles.tableItem}>• Diligencia</Text>
              </View>
            </View>
          </View>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  sectionCard: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  card: {
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
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
  },
  citaText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  tableColumn: {
    flex: 1,
    paddingHorizontal: 10,
  },
  tableHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  tableItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 24,
  },
}); 