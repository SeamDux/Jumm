import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { WebView } from 'react-native-webview';
import Colors from '../../constants/Colors';

const NOTICIAS_URL = 'https://www.iglesia.cl/noticias.php';

// Estilos específicos para el iframe en web
const iframeStyle: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vh - 56px)', // Ajusta según el alto del header
  border: 'none',
  backgroundColor: '#fff',
  display: 'block',
};

export default function NoticiasIglesiaChileScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'Noticias de la Iglesia en Chile',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }} 
      />
      {Platform.OS === 'web' ? (
        <iframe
          src={NOTICIAS_URL}
          style={iframeStyle}
          title="Noticias Iglesia Chile"
          frameBorder={0}
        />
      ) : (
        <WebView
          source={{ uri: NOTICIAS_URL }}
          style={styles.webview}
          startInLoadingState={true}
          renderLoading={() => (
            <View style={styles.loadingContainer} />
          )}
        />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
}); 