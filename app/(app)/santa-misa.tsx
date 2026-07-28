import { Linking, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { santaMisaStyles as styles } from '../../components/santa-misa/santaMisaStyles';

const EVANGELIO_DEL_DIA_URL = 'https://www.vaticannews.va/es/evangelio-de-hoy.html';

async function openExternalUrl(url: string) {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  } catch (error) {
    console.error('Error opening URL:', error);
  }
}

export default function SantaMisaPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'La Santa Misa o Eucaristía' }} />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.menuItemStacked}
            onPress={() => openExternalUrl(EVANGELIO_DEL_DIA_URL)}
          >
            <Text style={styles.menuItemStackedText}>Evangelio del día</Text>
          </TouchableOpacity>

          <Link href="/(app)/santa-misa/preparacion" asChild>
            <TouchableOpacity style={styles.menuItemStacked}>
              <Text style={styles.menuItemStackedText}>Preparación</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/ordinario" asChild>
            <TouchableOpacity style={styles.menuItemStacked}>
              <Text style={styles.menuItemStackedText}>Ordinario de la Misa</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa/accion-gracias" asChild>
            <TouchableOpacity style={styles.menuItemStacked}>
              <Text style={styles.menuItemStackedText}>Acción de Gracias</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </>
  );
}
