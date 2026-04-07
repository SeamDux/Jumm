import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Stack, Link } from 'expo-router';
import Colors from '../../constants/Colors';

export default function ConfesionScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Confesión Sacramental',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        {/* Introducción sobre la confesión sacramental */}
        <Text style={[styles.menuText, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>El requisito básico para hacer una buena confesión es tener la intención de volver a Dios como el hijo pródigo y reconocer nuestros pecados con verdadera contrición ante su representante, el sacerdote.</Text>
        <Text style={[styles.menuText, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>"Una condición indispensable es, ante todo, la rectitud y la transparencia de la conciencia del penitente. Un hombre no se pone en el camino de la penitencia verdadera y genuina, hasta que no descubre que el pecado contrasta con la norma ética, inscrita en la intimidad del propio ser; hasta que no reconoce haber tenido la experiencia personal y ser el responsable de tal contraste; hasta que no dice solamente que "existe el pecado", sino "yo he pecado"; hasta que no admite que el pecado ha introducido en su conciencia una división que invade todo su ser y lo separa de Dios y de los hermanos. El signo sacramental de esta transparencia de la conciencia es el acto tradicionalmente llamado examen de conciencia, acto que debe ser siempre no una ansiosa introspección psicológica, sino la confrontación sincera y serena con la ley moral interior, con las normas evangélicas propuestas por la Iglesia, con el mismo Cristo Jesús, que es para nosotros maestro y modelo de vida, y con el Padre celestial, que nos llama al bien y a la perfección". (Juan Pablo II, Exhortación Apostólica, Reconciliatio et Poenitentia, n. 31).</Text>
        <Text style={[styles.menuText, {fontSize: 17, color: '#222', textAlign: 'justify', marginBottom: 16}]}>"A todos aquellos que han estado alejados del sacramento de la Reconciliación y del amor que perdona les hago esta exhortación: regresad a esta fuente de gracia; no temáis! Cristo mismo os está esperando. ¡Él os sanará y estaréis en paz con Dios!". (Juan Pablo II, Homilía en Westover Hills, San Antonio, Texas, 13 de septiembre, 1987).</Text>
        <Link href="/(app)/confesion/examen" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Examen de Conciencia</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(app)/confesion/antes" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Antes de Confesarse</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(app)/confesion/confesion" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Confesión de los Pecados</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  menuItem: {
    backgroundColor: 'white',
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
  menuText: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
  },
}); 