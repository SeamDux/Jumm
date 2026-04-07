import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

interface SantoData {
  title: string;
  description: string;
  link: string;
  pubDate: string;
}

export default function SantoScreen() {
  const [santoData, setSantoData] = useState<SantoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchSantoDelDia = async () => {
    try {
      const rssUrl = 'https://rss.app/feeds/zVNzPufgvNkzmtU4.xml';
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=o1jvmwzwvwk9gjdzrwyvqolxqwsne3rgyrcthbph`;
      
      console.log('Intentando obtener el feed RSS...');
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('Respuesta recibida:', data.status);

      if (data.status === 'ok' && data.items && data.items.length > 0) {
        console.log('Items encontrados:', data.items.length);

        // Tomar el primer artículo ya que este feed es específico para santos
        const santoArticle = data.items[0];
        console.log('Artículo encontrado:', santoArticle.title);

        // Limpiar el título (remover la fecha si existe)
        let title = santoArticle.title;
        const dateMatch = title.match(/\d{1,2}\/\d{1,2}\/\d{4}/); // Busca fechas en formato dd/mm/yyyy
        if (dateMatch) {
          title = title.replace(dateMatch[0], '').trim();
        }

        setSantoData({
          title: title,
          description: santoArticle.description
            .replace(/<[^>]*>/g, '') // Remover etiquetas HTML
            .replace(/&nbsp;/g, ' ') // Reemplazar &nbsp; por espacios
            .replace(/\s+/g, ' ') // Normalizar espacios
            .trim(),
          link: santoArticle.link,
          pubDate: new Date(santoArticle.pubDate).toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
      } else {
        setError('No se pudo obtener el feed RSS');
      }
    } catch (error) {
      console.error('Error al obtener el santo del día:', error);
      setError('Error al obtener la información del santo del día');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchSantoDelDia();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchSantoDelDia();
  }, []);

  const openLink = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Santo del Día',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
        }}
      />

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <MaterialCommunityIcons name="alert" size={48} color={Colors.primary} />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchSantoDelDia}>
            <Text style={styles.retryText}>Reintentar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.content}>
            <Text style={styles.title}>{santoData?.title}</Text>
            <Text style={styles.date}>{santoData?.pubDate}</Text>
            <Text style={styles.description}>{santoData?.description}</Text>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => santoData?.link && openLink(santoData.link)}
            >
              <Text style={styles.linkText}>Leer más sobre el Santo</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: Colors.primary,
  },
  retryButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.primary,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

