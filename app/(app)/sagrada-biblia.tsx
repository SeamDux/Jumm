import { Platform, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';

export default function SagradaBibliaScreen() {
  if (Platform.OS === 'web') {
    return (
      <>
        <Stack.Screen options={{ title: 'Sagrada Biblia' }} />
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
          <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
            Sagrada Biblia Straubinger
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
            onClick={() => window.open('https://bibliastraubinger.com', '_blank')}
          >
            Ir a bibliastraubinger.com
          </button>

          <div style={{ width: '100%', maxWidth: 1200, height: 'calc(100vh - 200px)', marginTop: 20 }}>
            <iframe
              src="https://bibliastraubinger.com"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Sagrada Biblia Straubinger"
            />
          </div>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Sagrada Biblia' }} />
      <WebView
        source={{ uri: 'https://bibliastraubinger.com' }}
        style={{ flex: 1 }}
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
      />
    </>
  );
}
