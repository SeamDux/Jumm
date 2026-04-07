import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Link, Stack } from 'expo-router';

export default function OracionesDifuntosScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oraciones por los Difuntos',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Oraciones por los Difuntos</Text>
            <Text style={styles.description}>
            Desde el bautismo hasta la muerte, la existencia del cristiano debe ser. una continua espera del Señor que viene: «Sí, voy a llegar en seguida. Amén. Ven, Señor Jesús» (Ap 22, 20). Por eso, cuando llega el momento culminante de su encuentro con el Señor, es decir, cuando se ve que el enfermo llega a su última agonía, conviene que se vea asistido por lo menos por algunos fieles, presididos a poder ser por un ministro ordenado, y que lo acompañen en su tránsito con la plegaria de la Iglesia. Para ello, pueden usarse invocaciones breves, lecturas bíblicas y letanía de los santos que aparecen a continuación o bien recitarse pausadamente algunas de las oraciones que acostumbraba a rezar durante su vida el moribundo o cantar algún salmo o canto que le fueran especialmente familiares.
            </Text>
          </View>

          <Link href="/(app)/oraciones-difuntos/letanias" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Letanías para la Buena Muerte</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/invocaciones" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Invocaciones Breves</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/lecturas" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Lecturas Bíblicas</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/recomendacion" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Preces para la Recomendación del Alma</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/expirar" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>En el momento de expirar</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/despues" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Después de la muerte</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/vigilia" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Vigilia por el difunto</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/responsos" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Responsos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/responso-dos" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Responso II</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/cementerio" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Preces en el cementerio y bendición del sepulcro</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/exorcismos" asChild>
            <TouchableOpacity style={styles.optionCard}>
              <Text style={styles.optionText}>Exorcismos</Text>
            </TouchableOpacity>
          </Link>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify',
    lineHeight: 24,
  },
  optionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
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
  optionText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
}); 