import { Linking, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';
import { youtubeChannels } from '../../../constants/youtubeChannels';

async function openYoutubeChannel(url: string) {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  } catch (error) {
    console.error('Error opening YouTube channel:', error);
  }
}

export default function YoutubeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'YouTube' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>YOUTUBE</Text>
        <Text style={styles.subtitle}>Canales en YouTube</Text>

        <View style={styles.list}>
          {youtubeChannels.map((channel) => (
            <TouchableOpacity
              key={channel.id}
              style={styles.item}
              onPress={() => openYoutubeChannel(channel.url)}
            >
              <Text style={styles.itemTitle}>{channel.title}</Text>
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
