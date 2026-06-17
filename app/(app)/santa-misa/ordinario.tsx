import React from 'react';
import { ScrollView, Pressable, TouchableOpacity, Linking, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import RitosInicialesPage from './ritos-iniciales';
import LiturgiaPalabraPage from './liturgia-palabra';
import LiturgiaEucaristicaPage from './liturgia-eucaristica';
import RitoConclusionPage from './rito-conclusion';
import { santaMisaStyles as styles } from '../../../components/santa-misa/santaMisaStyles';

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
      <Stack.Screen options={{ title: 'Ordinario de la Misa' }} />
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
          <Text style={styles.sectionHeading}>Plegarias Eucarísticas</Text>
          <Pressable style={styles.opcion} onPress={() => router.push('/(app)/santa-misa/plegaria-1')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística I (Canon Romano)</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/(app)/santa-misa/plegaria-2')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística II</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/(app)/santa-misa/plegaria-3')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística III</Text>
          </Pressable>
          <Pressable style={styles.opcion} onPress={() => router.push('/(app)/santa-misa/plegaria-4')}>
            <Text style={styles.opcionTexto}>Plegaria Eucarística IV</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

