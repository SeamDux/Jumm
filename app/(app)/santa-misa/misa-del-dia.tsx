import { Platform, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { Linking } from 'react-native';
import { santaMisaStyles as styles } from '../../../components/santa-misa/santaMisaStyles';

export default function MisaDelDia() {
  const navigation = useNavigation();
  const [showWebView, setShowWebView] = useState(false);

  useEffect(() => {
    navigation.setOptions?.({ title: 'Misa del día' });
  }, [navigation]);

  const handleOpenUrl = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  if (Platform.OS === 'web') {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
        <Text style={styles.webTitle}>
          Misa del día
        </Text>
        <Text style={styles.webNote}>
          En vivo por ISB todos los días a las 11.30 am y Domingo y días de Precepto a las 12.00 am 
        </Text>
        <button
          style={{
            backgroundColor: '#1e3a5f',
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
        <button
          style={{
            backgroundColor: '#1e3a5f',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            padding: '10px 20px',
            fontSize: 16,
            cursor: 'pointer',
            marginBottom: 16,
          }}
          onClick={() => window.open('https://www.canalisb.cl', '_blank')}
        >
          Ir a Canal ISB
        </button>
        <div style={{ width: '100%', maxWidth: 600, height: 1200, marginTop: 20 }}>
          <iframe
            src="https://www.eucaristiadiaria.cl/dia.php"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Misa del día"
          />
        </div>
      </View>
    );
  }

  // En móvil, mostrar información y botones
  if (!showWebView) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Misa del día</Text>
          <Text style={styles.description}>
            En vivo por ISB todos los días a las 11.30 am y Domingo y días de Precepto a las 12.00 am
          </Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => handleOpenUrl('https://www.eucaristiadiaria.cl/dia.php')}
          >
            <Text style={styles.buttonText}>Ir a eucaristiadiaria.cl</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => handleOpenUrl('https://www.canalisb.cl')}
          >
            <Text style={styles.buttonText}>Ir a Canal ISB</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.webViewButton]}
            onPress={() => setShowWebView(true)}
          >
            <Text style={styles.buttonText}>Ver Misa en la App</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // WebView para móvil cuando se presiona el botón
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => setShowWebView(false)}
      >
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
      <WebView
        source={{ uri: 'https://www.eucaristiadiaria.cl/dia.php' }}
        style={{ flex: 1 }}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

