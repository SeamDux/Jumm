import React from 'react';
import { StyleSheet, ScrollView, Pressable, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack, useRouter } from 'expo-router';
import RitosInicialesPage from './ritos-iniciales';
import LiturgiaPalabraPage from './liturgia-palabra';
import LiturgiaEucaristicaPage from './liturgia-eucaristica';
import RitoConclusionPage from './rito-conclusion';

interface Seccion {
  id: string;
  titulo: string;
  componente: React.ComponentType;
}

export default function OrdinarioPage() {
  const [seccionSeleccionada, setSeccionSeleccionada] = React.useState<string | null>(null);
  const router = useRouter();

  const secciones: Seccion[] = [
    {
      id: 'ritos-iniciales',
      titulo: 'Ritos Iniciales',
      componente: RitosInicialesPage
    },
    {
      id: 'liturgia-palabra',
      titulo: 'Liturgia de la Palabra',
      componente: LiturgiaPalabraPage
    },
    {
      id: 'liturgia-eucaristica',
      titulo: 'Liturgia Eucarística',
      componente: LiturgiaEucaristicaPage
    },
    {
      id: 'rito-conclusion',
      titulo: 'Rito de Conclusión',
      componente: RitoConclusionPage
    }
  ];

  if (seccionSeleccionada) {
    const seccion = secciones.find(s => s.id === seccionSeleccionada);
    if (seccion) {
      const Componente = seccion.componente;
      return <Componente />;
    }
  }

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Ordinario de la Misa',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {secciones.map((seccion) => (
            <Pressable
              key={seccion.id}
              style={styles.opcion}
              onPress={() => setSeccionSeleccionada(seccion.id)}
            >
              <Text style={styles.opcionTexto}>{seccion.titulo}</Text>
            </Pressable>
          ))}
          {/* Botones para las 4 plegarias eucarísticas */}
          <Text style={{marginTop: 30, marginBottom: 10, fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Plegarias Eucarísticas</Text>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-1')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística I (Canon Romano)</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-2')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística II</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-3')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística III</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/santa-misa/plegaria-4')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística IV</Text>
          </Pressable>
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
  opcion: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  opcionTexto: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 