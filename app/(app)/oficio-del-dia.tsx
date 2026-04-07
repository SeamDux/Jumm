import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Linking, RefreshControl, Image } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as rssParser from 'react-native-rss-parser';

interface OficioItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  content: string;
  audioLinks: string[];
}

export default function OficioDelDiaScreen() {
  const [oficioData, setOficioData] = useState<OficioItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchOficioDelDia().finally(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    // Establecer la fecha actual al cargar el componente
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Santiago' // Zona horaria de Chile
    };
    
    // Usar 'es-ES' para mostrar los nombres de los días y meses en español
    setCurrentDate(today.toLocaleDateString('es-ES', options));
    
    // Cargar el oficio del día
    fetchOficioDelDia();
  }, []);

  const fetchOficioDelDia = async () => {
    try {
      setError('');
      console.log('Iniciando carga del oficio del día...');
      
      // Usar rss2json para convertir el feed RSS a JSON
      const rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbiblialiturgia.com%2Ffeed%2F';
      
      console.log(`Intentando con rss2json: ${rss2jsonUrl}`);
      const response = await fetch(rss2jsonUrl);
      
      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status} al obtener el feed RSS`);
      }
      
      const jsonData = await response.json();
      console.log('Respuesta JSON recibida:', JSON.stringify(jsonData).substring(0, 200) + '...');
      
      if (jsonData.status === 'ok' && jsonData.items && jsonData.items.length > 0) {
        // Obtener el primer item (el más reciente)
        const item = jsonData.items[0];
        console.log(`Título del oficio: ${item.title}`);
        
        // Extraer enlaces de audio del contenido
        const content = item.content || '';
        
        // Extraer todas las etiquetas que podrían contener audios
        const audioRegex = /(<audio[^>]*>.*?<\/audio>|<source[^>]*>|<a[^>]*\.(?:mp3|wav|ogg)[^>]*>)/gis;
        const srcRegex = /(?:src|href|data-url)="([^"]+\.(?:mp3|wav|ogg))"/i;
        
        const audioLinks: string[] = [];
        let audioMatch;
        
        // Primero encontrar todas las etiquetas que podrían contener audios
        while ((audioMatch = audioRegex.exec(content)) !== null) {
          const tagContent = audioMatch[1];
          const srcMatch = srcRegex.exec(tagContent);
          
          if (srcMatch && srcMatch[1]) {
            const audioUrl = srcMatch[1];
            if (!audioLinks.includes(audioUrl)) {
              audioLinks.push(audioUrl);
            }
          }
        }
        
        console.log(`Enlaces de audio encontrados: ${audioLinks.length}`);
        
        setOficioData({
          title: item.title || 'Oficio del Día',
          link: item.link || '',
          description: item.description || '',
          pubDate: item.pubDate || '',
          content: content,
          audioLinks
        });
      } else {
        console.error('No se encontraron items en el feed RSS o el status no es ok');
        setError('No se encontró información del oficio del día');
      }
    } catch (err) {
      console.error('Error fetching oficio del día:', err);
      setError('No se pudo cargar el oficio del día');
    } finally {
      setLoading(false);
    }
  };

  const openLink = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  };

  const openAudio = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Liturgia de las Horas',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      
      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Cargando oficio del día...</Text>
        </View>
      ) : error ? (
        <View style={styles.centered}>
          <MaterialCommunityIcons name="alert-circle-outline" size={50} color={Colors.error} />
          <Text style={styles.error}>{error}</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={() => {
              setLoading(true);
              fetchOficioDelDia();
            }}
          >
            <Text style={styles.retryButtonText}>Intentar nuevamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView 
          style={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {oficioData ? (
            <View style={styles.content}>
              <Text style={styles.title}>Liturgia de las Horas</Text>
              <Text style={styles.subtitle}>{oficioData.title}</Text>
              <Text style={styles.date}>
                {currentDate || new Date(oficioData.pubDate).toLocaleDateString('es-ES', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric'
                })}
              </Text>
              
              {/* Se ha eliminado la descripción que no tenía relación con la funcionalidad */}
              
              {oficioData.audioLinks && oficioData.audioLinks.length > 0 ? (
                <>
                  <Text style={styles.sectionTitle}>Escucha la Liturgia de las Horas:</Text>
                  
                  {oficioData.audioLinks.map((audioLink, index) => {
                    // Extraer el nombre del audio desde la URL
                    const audioName = audioLink.split('/').pop()?.replace(/\.(mp3|wav|ogg)$/i, '') || `Audio ${index + 1}`;
                    console.log('Nombre extraído del audio:', audioName);
                    
                    // Mapeo personalizado de nombres de archivos a títulos más descriptivos
                    const getFormattedTitle = (fileName: string, index: number) => {
                      // Verificar si es el audio de completas por la URL completa
                      if (audioLink.includes('7-Martes-01.mp3') || 
                          audioLink.includes('7-martes-01.mp3')) {
                        return 'Completas (Oración de la noche)';
                      }
                      
                      // Decodificar URL para manejar caracteres especiales como %C3%AD (í)
                      const decodedFileName = decodeURIComponent(fileName);
                      console.log('Nombre del archivo decodificado:', decodedFileName);
                      
                      // Caso específico para el patrón de Completas
                      const lowerFileName = decodedFileName.toLowerCase();
                      
                      // Detectar el patrón '7-día-01' o variaciones para completas
                      if ((lowerFileName.includes('7-') && lowerFileName.includes('-01')) ||
                          (lowerFileName.match(/7-\w+-01/) !== null)) {
                        return 'Completas (Oración de la noche)';
                      }
                      
                      // Mapeo de patrones comunes en los nombres de archivo a títulos legibles
                      if (decodedFileName.includes('Invitatorio')) return 'Invitatorio';
                      if (decodedFileName.includes('Oficio-de-Lec') || decodedFileName.includes('Oficio de Lec')) return 'Oficio de Lectura';
                      if (decodedFileName.includes('Primera-Lec') || decodedFileName.includes('Primera Lec')) return 'Primera Lectura';
                      if (decodedFileName.includes('PRIMERA-LECTURA') || decodedFileName.includes('Primera Lec')) return 'Primera Lectura';
                      if (decodedFileName.includes('Segunda-Lec') || decodedFileName.includes('Segunda Lec')) return 'Segunda Lectura';
                      if (decodedFileName.includes('SEGUNDA-LECTURA') || decodedFileName.includes('Segunda Lec')) return 'Segunda Lectura';
                      if (decodedFileName.includes('Laudes')) return 'Laudes (Oración de la mañana)';
                      if (decodedFileName.includes('LAUDES')) return 'Laudes (Oración de la mañana)';
                      if (decodedFileName.includes('Tercia')) return 'Hora Tercia';
                      if (decodedFileName.includes('Sexta')) return 'Hora Sexta';
                      if (decodedFileName.includes('Nona')) return 'Hora Nona';
                      if (decodedFileName.includes('Vísperas') || decodedFileName.includes('Visperas')) return 'Vísperas (Oración de la tarde)';
                      if (decodedFileName.includes('VISPRAS') || decodedFileName.includes('Visperas')) return 'Vísperas (Oración de la tarde)';
                      if (decodedFileName.includes('Completas')) return 'Completas (Oración de la noche)';
                      if (decodedFileName.includes('EVANGELIO') || decodedFileName.includes('Evangelio')) return 'Evangelio del día';
                      if (decodedFileName.includes('EvANGELIO') || decodedFileName.includes('Evangelio')) return 'Evangelio del día';
                      if (decodedFileName.includes('EANGELIO') || decodedFileName.includes('Evangelio')) return 'Evangelio del día';
                      if (decodedFileName.includes('Jueves')) return 'Completas (Oración de la noche)';
                      if (decodedFileName.includes('5.1-TERCIA')) return 'Hora Tercia';
                      if (decodedFileName.includes('5.2-SEXTA')) return 'Hora Sexta';
                      if (decodedFileName.includes('5.3-NONA')) return 'Hora Nona';
                      
                      // Caso especial para archivos que solo tienen números (como "5")
                      if (/^\d+$/.test(decodedFileName) || decodedFileName.length < 3) {
                        // Mapeo basado en la posición en la lista
                        const hourNames = [
                          'Hora Tercia',
                          'Hora Sexta', 
                          'Hora Nona'
                        ];
                        
                        // Si hay tres números consecutivos, asumimos que son las horas menores
                        const terciaSextaNonaIndex = oficioData.audioLinks.findIndex(link => 
                          link.includes('Tercia') || link.includes('tercia')
                        );
                        
                        if (terciaSextaNonaIndex !== -1) {
                          const relativeIndex = index - terciaSextaNonaIndex;
                          if (relativeIndex >= 0 && relativeIndex < hourNames.length) {
                            return hourNames[relativeIndex];
                          }
                        }
                        
                        return `Hora ${index + 1}`;
                      }
                      
                      // Si no coincide con ningún patrón conocido, usar el formato estándar
                      const formattedName = decodedFileName
                        .replace(/^\d+-/, '')
                        .replace(/-\d+$/, '')
                        .replace(/-/g, ' ')
                        .replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2);
                      
                      return formattedName;
                    };
                    
                    const displayTitle = getFormattedTitle(audioName, index);
                    


                    return (
                      <TouchableOpacity 
                        key={index} 
                        style={styles.audioItem}
                        onPress={() => openAudio(audioLink)}
                      >
                        <View style={styles.audioContent}>
                          <MaterialCommunityIcons 
                            name="play-circle" 
                            size={40} 
                            color={Colors.primary} 
                            style={styles.playIcon}
                          />
                          <View style={styles.textContainer}>
                            <Text style={styles.audioName} numberOfLines={1} ellipsizeMode="tail">{displayTitle}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </>
              ) : (
                <Text style={styles.noAudio}>No hay audios disponibles para el día de hoy</Text>
              )}
              
              <TouchableOpacity 
                style={styles.linkButton}
                onPress={() => openLink(oficioData.link)}
              >
                <Text style={styles.linkButtonText}>Ver en biblialiturgia.com</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.centered}>
              <Text style={styles.noAudio}>No hay contenido disponible</Text>
            </View>
          )}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.secondary,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  date: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
  audioItem: {
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  audioContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  playIcon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  audioName: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '500',
  },
  linkButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  linkButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: Colors.error,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  retryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  noAudio: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 20,
  },
});
