import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function BendicionInArticuloMortisScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Bendición Papal "In artículo mortis"',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Bendición Papal "In artículo mortis"</Text>
            <Text style={styles.subtitle}>(Sólo la puede impartir el obispo y el sacerdote)</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Oremos</Text>
            <Text style={styles.prayer}>
              Señor Padre clementísimo y misericordioso, Dios de todo consuelo. Tú que no quieres que se pierda ninguno de cuantos creen en ti, conforme a la inmensidad de tu misericordia; mira propicio a tu siervo/a. Visítalo con tu gracia para que lo salves y concédele benignamente el perdón de todos sus pecados por los méritos de la Pasión y muerte de tu Hijo Jesucristo. Que cuando salga su alma de este cuerpo, encuentre en Ti su juez indulgente, y que, purificada de toda mancha en la Sangre de tu Hijo, merezca alcanzar los gozos eternos.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              Y yo, haciendo uso del poder que me otorga la Sede Apostólica, y en nombre de nuestro Santo Padre el Papa, te concedo indulgencia plenaria y el perdón de todos tus pecados. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.prayer}>
              Que Dios todopoderoso y rico en misericordia, por la muerte y resurrección de Cristo te perdone todas las penas de esta vida, te abra las puertas del Paraíso y te lleve a los gozos eternos. Amén.
            </Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
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
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 5,
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
  prayer: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 