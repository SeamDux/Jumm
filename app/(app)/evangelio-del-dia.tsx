import { Platform, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';

export default function EvangelioDelDiaScreen() {
  if (Platform.OS === 'web') {
    return (
      <>
        <Stack.Screen options={{ title: 'Evangelio del día' }} />
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
          <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
            Evangelio del día
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
            onClick={() => window.open('https://www.eucaristiadiaria.cl/dia.php', '_blank')}
          >
            Ir a eucaristiadiaria.cl
          </button>

          <div style={{ width: '100%', maxWidth: 600, height: 1200, marginTop: 20 }}>
            <iframe
              src="https://www.eucaristiadiaria.cl/compartir.php"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Evangelio del día"
            />
          </div>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Evangelio del día' }} />
      <WebView
        source={{ uri: 'https://www.eucaristiadiaria.cl/compartir.php' }}
        style={{ flex: 1 }}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
      />
    </>
  );
}
