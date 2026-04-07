import React, { useEffect } from 'react';
import { Platform, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';

export default function LiturgiaHorasDiaScreen() {
  useEffect(() => {
    // Configurar el título de la pantalla
  }, []);

  if (Platform.OS === 'web') {
    // Botón personalizado usando HTML para mejor integración web
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
        <Stack.Screen
          options={{
            title: 'Liturgia de las Horas del Día',
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: '#fff',
          }}
        />
        <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
          Liturgia de las Horas del Día
        </Text>
        <button
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            padding: '10px 20px',
            fontSize: 16,
            cursor: 'pointer',
            marginBottom: 16,
          }}
          onClick={() => window.open('https://liturgiadelashoras.github.io', '_blank')}
        >
          Ir a liturgiadelashoras.github.io
        </button>
        
        <div style={{ width: '100%', maxWidth: 600, height: 1200, marginTop: 20 }}>
          <iframe
            src="https://liturgiadelashoras.github.io"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Liturgia de las Horas del Día"
          />
        </div>
      </View>
    );
  }
  
  // En móvil, WebView
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Liturgia de las Horas del Día',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
        }}
      />
      <WebView
        source={{ uri: 'https://liturgiadelashoras.github.io' }}
        style={{ flex: 1 }}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </>
  );
} 