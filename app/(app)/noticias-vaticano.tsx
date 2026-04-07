import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

interface Noticia {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  image?: string;
}

// rss2json obtiene el RSS desde su servidor y devuelve JSON; funciona igual en web y en app nativa.
const RSS2JSON_API_KEY = 'o1jvmwzwvwk9gjdzrwyvqolxqwsne3rgyrcthbph';

// Fuente: https://www.vaticannews.va/es.html (menú "Rss" en pie de página).
// Misma estructura que el feed que sí funciona: content/vaticannews/es/evangelio-de-hoy.rss.xml
const RSS_URLS_TO_TRY = [
  'https://www.vaticannews.va/content/vaticannews/es.rss.xml',
  'https://www.vaticannews.va/content/vaticannews/es/noticias.rss.xml',
  'https://www.vaticannews.va/content/vaticannews/es/index.rss.xml',
  'https://www.vaticannews.va/content/vaticannews/es/rss.xml',
  'https://www.vaticannews.va/es/rss.xml',
  'https://www.vaticannews.va/es.rss.xml',
  'https://www.vaticannews.va/es/feed',
  'https://www.aciprensa.com/rss/noticias.xml',
];

function extractImageFromContent(html: string, baseUrl = 'https://www.vaticannews.va'): string | undefined {
  if (!html) return undefined;
  const imgMatch = html.match(/<img[^>]+src=["']?([^"' >]+)["']?[^>]*>/i);
  if (imgMatch && imgMatch[1]) {
    const src = imgMatch[1];
    return src.startsWith('http') ? src : `${baseUrl}${src.startsWith('/') ? '' : '/'}${src}`;
  }
  return undefined;
}

function mapRssItemToNoticia(item: any, imageBaseUrl = 'https://www.vaticannews.va'): Noticia {
  const content = item.content || item.description || '';
  const description = (item.description || '').replace(/<[^>]*>/g, '').trim();
  let image = item.thumbnail || item.enclosure?.link;
  if (!image) image = extractImageFromContent(content, imageBaseUrl) || extractImageFromContent(item.description || '', imageBaseUrl);
  return {
    title: item.title || '',
    link: item.link || '',
    pubDate: item.pubDate || '',
    description,
    content: content.replace(/<[^>]*>/g, '').trim(),
    image,
  };
}

export default function NoticiasVaticanoScreen() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNoticias = async () => {
    setLoading(true);
    setError(null);
    let lastError: string | null = null;
    const tryWithKey = true;
    for (const rssUrl of RSS_URLS_TO_TRY) {
      for (const useKey of [tryWithKey, false]) {
        try {
          const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}${useKey ? `&api_key=${RSS2JSON_API_KEY}` : ''}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            lastError = `HTTP ${response.status}`;
            continue;
          }
          const data = await response.json();
          if (data.status !== 'ok' || !data.items || !Array.isArray(data.items) || data.items.length === 0) {
            lastError = data.message || 'Feed vacío o inválido';
            continue;
          }
          const baseUrl = rssUrl.includes('aciprensa') ? 'https://www.aciprensa.com' : 'https://www.vaticannews.va';
          const noticiasArray: Noticia[] = data.items.map((item: any) => mapRssItemToNoticia(item, baseUrl));
          setNoticias(noticiasArray);
          setError(null);
          setLoading(false);
          setRefreshing(false);
          return;
        } catch (_) {
          lastError = 'Error de red o formato';
          continue;
        }
      }
    }
    setError('No se pudo cargar el feed de noticias del Vaticano. ' + (lastError ? `(${lastError})` : ''));
    setNoticias([]);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNoticias();
  };

  function cleanTitle(title: string): string {
    // Elimina etiquetas <p>, <center>, atributos de estilo y cualquier HTML
    return title
      .replace(/<p[^>]*>/gi, '')
      .replace(/<\/p>/gi, '')
      .replace(/<center[^>]*>/gi, '')
      .replace(/<\/center>/gi, '')
      .replace(/style=\"[^\"]*\"/gi, '')
      .replace(/<[^>]*>?/gm, '')
      .trim();
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Noticias de la Iglesia - Santa Sede',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <View key={index} style={styles.card}>
              {noticia.image && (
                <Image
                  source={{ uri: noticia.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
              <View style={styles.cardContent}>
                <Text style={styles.title}>
                  {cleanTitle(noticia.title)}
                </Text>
                <Text style={styles.date}>
                  {new Date(noticia.pubDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
                <Text
                  style={styles.description}
                  numberOfLines={3}
                  ellipsizeMode="tail"
                >
                  {noticia.description.replace(/<[^>]*>?/gm, '')}
                </Text>
                <Text
                  style={styles.leerMas}
                  onPress={() => Linking.openURL(noticia.link)}
                >
                  Leer más
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noNews}>
            <MaterialCommunityIcons name="newspaper-remove" size={50} color="#ccc" />
            <Text style={styles.noNewsText}>{error || 'No hay noticias disponibles en este momento'}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'left',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    lineHeight: 20,
  },
  leerMas: {
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 5,
  },
  noNews: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noNewsText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
}); 