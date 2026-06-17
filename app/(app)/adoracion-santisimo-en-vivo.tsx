import { Platform, View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

const YOUTUBE_LIVE_URL = 'https://www.youtube.com/live/mnOTH_3dprI';
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/mnOTH_3dprI';

async function openYoutubeLive() {
  try {
    const supported = await Linking.canOpenURL(YOUTUBE_LIVE_URL);
    if (supported) {
      await Linking.openURL(YOUTUBE_LIVE_URL);
    }
  } catch (error) {
    console.error('Error opening YouTube:', error);
  }
}

export default function AdoracionSantisimoEnVivoScreen() {
  if (Platform.OS === 'web') {
    return (
      <>
        <Stack.Screen options={{ title: 'Adoración al Santísimo en vivo' }} />
        <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
          <Text
            style={{
              fontFamily: Fonts.bold,
              fontSize: 20,
              color: Colors.liturgicalRed,
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            Adoración al Santísimo en vivo
          </Text>
          <Text
            style={{
              fontFamily: Fonts.regular,
              fontSize: 16,
              lineHeight: 26,
              textAlign: 'center',
              marginBottom: 20,
              color: '#000000',
            }}
          >
            Únete a la transmisión en vivo de la Adoración al Santísimo Sacramento.
          </Text>
          <button
            style={{
              backgroundColor: Colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '14px 24px',
              fontSize: 16,
              cursor: 'pointer',
              marginBottom: 24,
            }}
            onClick={() => window.open(YOUTUBE_LIVE_URL, '_blank')}
          >
            Ver en YouTube
          </button>
          <div style={{ width: '100%', maxWidth: 720, aspectRatio: '16/9' }}>
            <iframe
              src={YOUTUBE_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: 8 }}
              title="Adoración al Santísimo en vivo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Adoración al Santísimo en vivo' }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: Colors.white }}
        contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
      >
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 22,
            color: Colors.liturgicalRed,
            textAlign: 'center',
            marginBottom: 12,
            letterSpacing: 0.5,
          }}
        >
          ADORACIÓN AL SANTÍSIMO EN VIVO
        </Text>
        <Text
          style={{
            fontFamily: Fonts.regular,
            fontSize: 16,
            lineHeight: 26,
            textAlign: 'center',
            marginBottom: 24,
            color: '#000000',
          }}
        >
          Transmisión en vivo de la Adoración al Santísimo Sacramento.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            borderRadius: 8,
            paddingVertical: 16,
            paddingHorizontal: 20,
            alignItems: 'center',
            marginBottom: 24,
          }}
          onPress={openYoutubeLive}
        >
          <Text style={{ fontFamily: Fonts.bold, color: Colors.white, fontSize: 17 }}>
            Ver transmisión en YouTube
          </Text>
        </TouchableOpacity>

        <View style={{ height: 220, borderRadius: 8, overflow: 'hidden' }}>
          <WebView
            source={{ uri: YOUTUBE_EMBED_URL }}
            style={{ flex: 1 }}
            javaScriptEnabled
            domStorageEnabled
            allowsFullscreenVideo
            mediaPlaybackRequiresUserAction={false}
          />
        </View>
      </ScrollView>
    </>
  );
}
