import { TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { santaMisaStyles as styles } from '../../components/santa-misa/santaMisaStyles';

export default function SantaMisaPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'La Santa Misa o Eucaristía' }} />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Link href="/(app)/santa-misa/misa-del-dia" asChild>
            <TouchableOpacity style={styles.menuItemStacked}>
              <Text style={styles.menuItemStackedText}>Misa del día</Text>
            </TouchableOpacity>
          </Link>

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
