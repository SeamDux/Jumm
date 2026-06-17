import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Stack, Link } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { oracionesNocheMenu } from '../../../constants/oracionesNocheMenu';

export default function OracionesNocheScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oraciones de la Noche' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>ORACIONES DE LA NOCHE</Text>
        <Text style={styles.subtitle}>Oraciones para concluir el día</Text>

        <View style={styles.list}>
          {oracionesNocheMenu.map((item) => (
            <Link key={item.id} href={item.href} asChild>
              <TouchableOpacity style={styles.item}>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}
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
    paddingBottom: 32,
  },
  mainTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  list: {
    gap: 12,
  },
  item: {
    backgroundColor: Colors.white,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  itemTitle: {
    fontFamily: Fonts.regular,
    fontSize: 17,
    color: Colors.primary,
    textAlign: 'center',
  },
});
