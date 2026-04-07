import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl, TouchableOpacity, Linking } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import * as rssParser from 'react-native-rss-parser';

interface VideoItem {
  id: string;
  title: string;
  link: string;
  published: string;
  thumbnail: string;
}

const PLAYLIST_RSS = 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLDFmwHW6wkBrrf050erGsLhFgGHP3r5sT';

export default function ConsejoCaminoScreen() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = async () => {
    setLoading(true);
    setError(null);
    try {
      const corsProxy = 'https://corsproxy.io/?';
      const rssUrl = `${corsProxy}${PLAYLIST_RSS}`;
      const response = await fetch(rssUrl, {
        headers: {
          'Accept': 'application/rss+xml, application/xml, text/xml',
          'User-Agent': 'OrarConJesusApp/1.0',
        },
      });
      if (!response.ok) throw new Error('No se pudo obtener el feed de la playlist');
      const text = await response.text();
      const feed = await rssParser.parse(text);
      const videosArray: VideoItem[] = feed.items.map(item => {
        // Extraer el ID del video desde el link
        let videoId = '';
        if (item.links && item.links.length > 0) {
          const url = item.links[0].url;
          const match = url.match(/v=([\w-]+)/);
          if (match && match[1]) videoId = match[1];
        }
        // Miniatura estándar de YouTube
        const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
        return {
          id: videoId,
          title: item.title || '',
          link: item.links && item.links[0] ? item.links[0].url : '',
          published: item.published || '',
          thumbnail,
        };
      });
      // Ordenar por fecha descendente
      videosArray.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
      setVideos(videosArray);
    } catch (e: any) {
      setError('No se pudo cargar la lista de videos.');
      setVideos([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchVideos();
  };

  const openYouTube = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Consejos para el Camino',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 40 }} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <ScrollView
          style={styles.scrollView}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {videos.length > 0 ? (
            videos.map((video, idx) => (
              <TouchableOpacity key={video.id + idx} style={styles.card} onPress={() => openYouTube(video.link)}>
                <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{video.title}</Text>
                  <Text style={styles.date}>{new Date(video.published).toLocaleDateString('es-ES', {
                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                  })}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noVideos}>
              <Text style={styles.noVideosText}>No hay videos disponibles.</Text>
            </View>
          )}
        </ScrollView>
      )}
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
  thumbnail: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'left',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  error: {
    color: '#b00',
    fontSize: 16,
    margin: 20,
    textAlign: 'center',
  },
  noVideos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  noVideosText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
}); 