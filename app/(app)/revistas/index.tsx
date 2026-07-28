import { Linking, StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { revistasMenu } from '../../../constants/revistasMenu';

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

export default function RevistasScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Revistas' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>REVISTAS</Text>
        <Text style={styles.subtitle}>Elige la colección que deseas consultar</Text>

        <View style={styles.list}>
          {revistasMenu.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => openExternalUrl(item.externalUrl)}
            >
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
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
