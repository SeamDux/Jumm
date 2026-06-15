import { StyleSheet, TouchableOpacity, Alert, ScrollView, Linking } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, Link } from 'expo-router';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ResumenDoctrinaScreen() {
  const handleOpenVaticanURL = async (url: string, title: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Error',
          `No se puede abrir la URL de ${title}. Verifica tu conexión a internet.`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error al abrir URL:', error);
      Alert.alert(
        'Error',
        `No se pudo abrir la página de ${title}. Verifica tu conexión a internet.`,
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'La Doctrina Cristiana' }} />
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              handleOpenVaticanURL(
                'https://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_sp.html',
                'Compendio de la Doctrina Social de la Iglesia'
              )
            }
          >
            <MaterialCommunityIcons name="scale-balance" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Compendio de la Doctrina Social de la Iglesia</Text>
              <Text style={styles.subtitle}>Abrir en el sitio web del Vaticano</Text>
            </View>
            <MaterialCommunityIcons name="open-in-new" size={20} color={Colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              handleOpenVaticanURL(
                'https://www.vatican.va/archive/catechism_sp/index_sp.html',
                'Catecismo de la Iglesia Católica'
              )
            }
          >
            <MaterialCommunityIcons name="book-open-variant" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Catecismo de la Iglesia Católica</Text>
              <Text style={styles.subtitle}>Abrir en el sitio web del Vaticano</Text>
            </View>
            <MaterialCommunityIcons name="open-in-new" size={20} color={Colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              handleOpenVaticanURL(
                'https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_sp.html',
                'Compendio del Catecismo de la Iglesia Católica'
              )
            }
          >
            <MaterialCommunityIcons name="book" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Compendio del Catecismo de la Iglesia Católica</Text>
              <Text style={styles.subtitle}>Abrir en el sitio web del Vaticano</Text>
            </View>
            <MaterialCommunityIcons name="open-in-new" size={20} color={Colors.gray} />
          </TouchableOpacity>

          <Link href="/(app)/resumen-doctrina/credo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-cross" size={24} color={Colors.primary} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>El Credo del Pueblo de Dios</Text>
                <Text style={styles.subtitle}>San Pablo VI, Papa</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/resumen-doctrina/mandamientos" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="tablet" size={24} color={Colors.primary} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Los Diez mandamientos de la Ley de Dios</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/resumen-doctrina/mandamientos-iglesia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <FontAwesome5 name="church" size={24} color={Colors.primary} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Los mandamientos de la Iglesia</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scrollView: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
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
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
  },
});
