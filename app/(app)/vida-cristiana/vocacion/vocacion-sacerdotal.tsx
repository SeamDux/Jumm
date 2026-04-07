import React from 'react';
import { Platform, StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import Colors from '../../../../constants/Colors';
import { Stack } from 'expo-router';
import { WebView } from 'react-native-webview';

const VOCACION_URL = 'https://www.obispadodesanbernardo.cl/vocacion-sacerdotal';

export default function VocacionSacerdotalScreen() {
  if (Platform.OS === 'web') {
    return (
      <>
        <Stack.Screen
          options={{
            title: 'Vocación Sacerdotal',
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: Colors.white,
          }}
        />
        <View style={styles.webContainer}>
          <Text style={styles.title}>Vocación Sacerdotal</Text>
          <Text style={styles.description}>
            Contenido oficial del Obispado de San Bernardo. Usa el botón para abrirlo en otra pestaña
            o visualízalo debajo.
          </Text>
          <button
            style={styles.webButton}
            onClick={() => window.open(VOCACION_URL, '_blank')}
          >
            Abrir en nuevo sitio
          </button>
          <div style={styles.webFrame as React.CSSProperties}>
            <iframe
              title="Vocación Sacerdotal - Obispado de San Bernardo"
              src={VOCACION_URL}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Vocación Sacerdotal',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: Colors.white,
        }}
      />
      <View style={styles.nativeContainer}>
        <Text style={styles.title}>Vocación Sacerdotal</Text>
        <Text style={styles.description}>
          Información del Obispado de San Bernardo. Puedes abrirla en el navegador o leerla aquí
          mismo.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(VOCACION_URL)}>
          <Text style={styles.buttonText}>Abrir en el navegador</Text>
        </TouchableOpacity>
        <View style={styles.webviewWrapper}>
          <WebView
            source={{ uri: VOCACION_URL }}
            style={{ flex: 1 }}
            startInLoadingState
            javaScriptEnabled
            domStorageEnabled
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 16,
  },
  nativeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  webviewWrapper: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  webContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  webButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '10px 20px',
    cursor: 'pointer',
  } as React.CSSProperties,
  webFrame: {
    width: '100%',
    maxWidth: 1000,
    height: '75vh',
    marginTop: 20,
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
});

