import React from 'react';
import { StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function PenitenciaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Días de penitencia, las indulgencias',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Días de penitencia, las indulgencias</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Días de penitencia</Text>
            <Text style={styles.text}>
              La penitencia interior del cristiano puede tener expresiones muy variadas. La Escritura y los Padres insisten sobre todo en tres formas: el ayuno, la oración y la limosna, que expresan la conversión con relación a sí mismo, con relación a Dios y con relación a los demás. Junto a la purificación radical operada por el Bautismo o por el martirio, citan, como medio de obtener el perdón de los pecados, los esfuerzos realizados para reconciliarse con el prójimo, las lágrimas de penitencia, la preocupación por la salvación del prójimo, la intercesión de los santos y la práctica de la caridad "que cubre multitud de pecados" (1 P 4, 8).
            </Text>
            <Text style={styles.text}>
              La Iglesia ha establecido ciertos días de penitencia obligatoria para todos los fieles. Son los viernes de todo el año y el tiempo de Cuaresma. El ayuno y la abstinencia de carne se guardarán el miércoles de Ceniza y el Viernes Santo. La abstinencia de carne se guardará todos los viernes del año, a no ser que coincidan con una solemnidad. La Conferencia Episcopal puede determinar con más detalle el modo de observar el ayuno y la abstinencia, así como sustituirlos en todo o en parte por otras formas de penitencia, sobre todo por obras de caridad y prácticas de piedad.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Las indulgencias</Text>
            <Text style={styles.text}>
              La indulgencia es la remisión ante Dios de la pena temporal por los pecados, ya perdonados, en cuanto a la culpa, que un fiel dispuesto y cumpliendo determinadas condiciones consigue por mediación de la Iglesia, la cual, como administradora de la redención, distribuye y aplica con autoridad el tesoro de las satisfacciones de Cristo y de los santos.
            </Text>
            <Text style={styles.text}>
              La indulgencia es parcial o plenaria según libere de la pena temporal parcial o totalmente. Todo fiel puede lucrar para sí mismo o aplicar por los difuntos, a manera de sufragio, las indulgencias tanto parciales como plenarias.
            </Text>
            <Text style={styles.text}>
              Para ganar indulgencias se requiere que el fiel esté bautizado, no excomulgado y en estado de gracia al menos al final de las obras prescritas. Para ganar indulgencias plenarias se requiere además que el fiel tenga la intención de ganarlas, que esté libre de todo afecto al pecado, incluso venial, y que cumpla las tres condiciones siguientes: confesión sacramental, comunión eucarística y oración por las intenciones del Papa. Se requiere que estas tres condiciones se cumplan dentro de los varios días que preceden o siguen a la realización de la obra prescrita; sin embargo, es conveniente que la comunión y la oración por las intenciones del Papa se realicen el mismo día en que se lleva a cabo la obra.
            </Text>
            <Text style={styles.text}>
              La indulgencia plenaria solo puede ganarse una vez al día. La indulgencia parcial, en cambio, puede ganarse varias veces al día, a no ser que se indique expresamente lo contrario.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonSantTrinidad}
          onPress={() => Linking.openURL('https://www.obispadodesanbernardo.cl/wp-content/uploads/2025/04/Manual-del-Peregrino-2025-pdf.pdf')}
        >
          <Text style={styles.buttonText}>Abrir Manual del Peregrino (PDF)</Text>
        </TouchableOpacity>
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
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
  },
  buttonSantTrinidad: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: -5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 