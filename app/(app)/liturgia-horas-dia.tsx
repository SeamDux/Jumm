import { Platform, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';

const LITURGIA_HORAS_URL = 'https://liturgiadelashoras.github.io';

export default function LiturgiaHorasDiaScreen() {
  if (Platform.OS === 'web') {
    return (
      <>
        <Stack.Screen options={{ title: 'Liturgia de las Horas del Día' }} />
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
          <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
            Liturgia de las Horas del Día
          </Text>
          <button
            style={{
              backgroundColor: Colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: 6,
              padding: '10px 20px',
              fontSize: 16,
              cursor: 'pointer',
              marginBottom: 16,
            }}
            onClick={() => window.open(LITURGIA_HORAS_URL, '_blank')}
          >
            Ir a liturgiadelashoras.github.io
          </button>

          <div style={{ width: '100%', maxWidth: 600, height: 1200, marginTop: 20 }}>
            <iframe
              src={LITURGIA_HORAS_URL}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Liturgia de las Horas del Día"
            />
          </div>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Liturgia de las Horas del Día' }} />
      <WebView
        source={{ uri: LITURGIA_HORAS_URL }}
        style={{ flex: 1 }}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
      />
    </>
  );
}
