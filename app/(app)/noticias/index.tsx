import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import * as rssParser from 'react-native-rss-parser';

interface Noticia {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  image?: string;
}

export default function NoticiasScreen() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const extractImageFromContent = (content: string): string | undefined => {
    if (!content) return undefined;
    
    // Buscar imágenes en el contenido HTML
    const imgMatch = content.match(/<img[^>]+src=[\"']?([^\"' >]+)[\"']?[^>]*>/i);
    if (imgMatch && imgMatch[1]) {
      let imageUrl = imgMatch[1];
      
      // Asegurarse de que la URL sea absoluta
      if (imageUrl.startsWith('//')) {
        imageUrl = 'https:' + imageUrl;
      } else if (imageUrl.startsWith('/')) {
        imageUrl = 'https://www.obispadodesanbernardo.cl' + imageUrl;
      }
      
      return imageUrl;
    }
    
    // Buscar imágenes en formato de datos base64
    const base64Match = content.match(/src=[\"']data:image\/[^;]+;base64,[^\"']+[\"']/i);
    if (base64Match) {
      return base64Match[0].replace(/^src=[\"']|["']$/g, '');
    }
    
    return undefined;
  };

  // Función para extraer noticias directamente de una página web
  const extractNoticiasFromWebPage = async (url: string): Promise<Noticia[]> => {
    try {
      console.log(`Extrayendo noticias de página web: ${url}`);
      
      // Usamos un proxy CORS para evitar problemas de acceso
      const corsProxy = 'https://corsproxy.io/?';
      const response = await fetch(`${corsProxy}${url}`, {
        headers: {
          'Accept': 'text/html',
          'User-Agent': 'OrarConJesusApp/1.0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const html = await response.text();
      console.log(`HTML recibido, longitud: ${html.length}`);
      
      // Crear un DOM a partir del HTML para extraer información
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const noticias: Noticia[] = [];
      
      // Sitios web específicos - Vaticano
      if (url.includes('vaticannews.va')) {
        // Extraer noticias del sitio del Vaticano
        const articles = doc.querySelectorAll('article') || doc.querySelectorAll('.article-card');
        
        Array.from(articles).slice(0, 10).forEach((article) => {
          const titleEl = article.querySelector('h3, h2, .title');
          const linkEl = article.querySelector('a');
          const imageEl = article.querySelector('img');
          const descEl = article.querySelector('p, .description, .summary');
          
          if (titleEl && linkEl) {
            const title = titleEl.textContent?.trim() || '';
            const link = linkEl.getAttribute('href') || '';
            const fullLink = link.startsWith('http') ? link : `https://www.vaticannews.va${link}`;
            const image = imageEl?.getAttribute('src') || undefined;
            const fullImage = image && !image.startsWith('http') ? `https://www.vaticannews.va${image}` : image;
            const description = descEl?.textContent?.trim() || '';
            
            noticias.push({
              title,
              link: fullLink,
              pubDate: new Date().toISOString(),
              description,
              content: description,
              image: fullImage
            });
          }
        });
      } 
      // Sitio web de AciPrensa
      else if (url.includes('aciprensa.com')) {
        const articles = doc.querySelectorAll('.article, .news-item');
        
        Array.from(articles).slice(0, 10).forEach((article) => {
          const titleEl = article.querySelector('h2, h3, .title');
          const linkEl = article.querySelector('a');
          const imageEl = article.querySelector('img');
          const descEl = article.querySelector('p, .summary');
          
          if (titleEl && linkEl) {
            const title = titleEl.textContent?.trim() || '';
            const link = linkEl.getAttribute('href') || '';
            const fullLink = link.startsWith('http') ? link : `https://www.aciprensa.com${link}`;
            const image = imageEl?.getAttribute('src') || undefined;
            const description = descEl?.textContent?.trim() || '';
            
            noticias.push({
              title,
              link: fullLink,
              pubDate: new Date().toISOString(),
              description,
              content: description,
              image
            });
          }
        });
      }
      // Sitio web de la Iglesia Católica de Chile
      else if (url.includes('iglesia.cl')) {
        const articles = doc.querySelectorAll('.noticia, .news-item, article');
        
        Array.from(articles).slice(0, 10).forEach((article) => {
          const titleEl = article.querySelector('h2, h3, .titulo');
          const linkEl = article.querySelector('a');
          const imageEl = article.querySelector('img');
          const descEl = article.querySelector('p, .extracto');
          
          if (titleEl && linkEl) {
            const title = titleEl.textContent?.trim() || '';
            const link = linkEl.getAttribute('href') || '';
            const fullLink = link.startsWith('http') ? link : `https://www.iglesia.cl${link}`;
            const image = imageEl?.getAttribute('src') || undefined;
            const fullImage = image && !image.startsWith('http') ? `https://www.iglesia.cl${image}` : image;
            const description = descEl?.textContent?.trim() || '';
            
            noticias.push({
              title,
              link: fullLink,
              pubDate: new Date().toISOString(),
              description,
              content: description,
              image: fullImage
            });
          }
        });
      }
      // Sitio web genérico - intentar extraer noticias de cualquier sitio
      else {
        // Buscar elementos que parezcan artículos de noticias
        const articles = doc.querySelectorAll('article, .article, .news-item, .post, .entry');
        
        if (articles.length > 0) {
          Array.from(articles).slice(0, 10).forEach((article) => {
            const titleEl = article.querySelector('h1, h2, h3, .title, .headline');
            const linkEl = article.querySelector('a');
            const imageEl = article.querySelector('img');
            const descEl = article.querySelector('p, .description, .summary, .excerpt');
            
            if (titleEl) {
              const title = titleEl.textContent?.trim() || '';
              const link = linkEl?.getAttribute('href') || '';
              // Asumimos que el enlace podría ser relativo
              const fullLink = link.startsWith('http') ? link : `${new URL(url).origin}${link}`;
              const image = imageEl?.getAttribute('src') || undefined;
              const description = descEl?.textContent?.trim() || '';
              
              noticias.push({
                title,
                link: fullLink,
                pubDate: new Date().toISOString(),
                description,
                content: description,
                image
              });
            }
          });
        } else {
          // Si no encontramos artículos, buscar cualquier contenido que parezca noticia
          const headings = doc.querySelectorAll('h1, h2, h3');
          
          Array.from(headings).slice(0, 10).forEach((heading) => {
            const parent = heading.parentElement;
            const title = heading.textContent?.trim() || '';
            const linkEl = heading.querySelector('a') || parent?.querySelector('a');
            const link = linkEl?.getAttribute('href') || '';
            const fullLink = link.startsWith('http') ? link : `${new URL(url).origin}${link}`;
            const imageEl = parent?.querySelector('img');
            const image = imageEl?.getAttribute('src') || undefined;
            const descEl = parent?.querySelector('p');
            const description = descEl?.textContent?.trim() || '';
            
            if (title && (link || description)) {
              noticias.push({
                title,
                link: fullLink,
                pubDate: new Date().toISOString(),
                description,
                content: description,
                image
              });
            }
          });
        }
      }
      
      console.log(`Extracción completada. Noticias encontradas: ${noticias.length}`);
      return noticias;
    } catch (error) {
      console.error(`Error al extraer noticias de la página web: ${error}`);
      return [];
    }
  };

  const fetchNoticias = async () => {
    try {
      setError(null);
      console.log('Iniciando carga de noticias...');
      
      // Inicializar array de noticias
      let noticiasArray: Noticia[] = [];
      
      // Priorizar el uso de RSS en lugar de scraping web
      // ya que el scraping está fallando con error 500
      console.log('Intentando obtener noticias desde feeds RSS...');
      
      // Intentar con una URL alternativa si la principal no funciona
      // Usamos un proxy CORS para evitar problemas de acceso
      const corsProxy = 'https://corsproxy.io/?';
      const rssUrls = [
        // Feed RSS del Obispado de San Bernardo (primera prioridad)
        `${corsProxy}https://www.obispadodesanbernardo.cl/feed`,
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.obispadodesanbernardo.cl%2Ffeed',
        // URLs con proxy CORS
        `${corsProxy}https://www.iglesia.cl/noticias/rss.php`,
        `${corsProxy}https://www.iglesia.cl/noticias/rss.xml`,
        `${corsProxy}https://www.iglesia.cl/feed/`,
        // Fuentes alternativas de noticias católicas
        `${corsProxy}https://www.vaticannews.va/es/rss.xml`,
        `${corsProxy}https://www.aciprensa.com/rss/noticias.xml`
      ];
      
      let response = null;
      let errorMsg = '';
      
      // Intentar con cada URL hasta que una funcione
      for (const url of rssUrls) {
        try {
          console.log(`Intentando con URL RSS: ${url}`);
          response = await fetch(url, {
            headers: {
              'Accept': 'application/rss+xml, application/xml, text/xml, application/json',
              'User-Agent': 'OrarConJesusApp/1.0'
            }
          });
          
          if (response.ok) {
            console.log(`Conexión exitosa con: ${url}`);
            break;
          } else {
            errorMsg += `Error HTTP ${response.status} en ${url}. `;
          }
        } catch (fetchError) {
          console.error(`Error al intentar con ${url}:`, fetchError);
          errorMsg += `Error al conectar con ${url}. `;
        }
      }
      
      if (!response || !response.ok) {
        throw new Error(`No se pudo conectar a ninguna fuente de noticias. ${errorMsg}`);
      }
      
      // Determinar si la respuesta es JSON o XML
      const contentType = response.headers.get('content-type') || '';
      console.log('Tipo de contenido recibido:', contentType);
      
      if (contentType.includes('application/json') || response.url.includes('api.rss2json.com')) {
        // Procesar como JSON
        console.log('Procesando respuesta como JSON');
        const jsonData = await response.json();
        console.log('Datos JSON recibidos:', JSON.stringify(jsonData).substring(0, 200) + '...');
        
        if (jsonData.items && Array.isArray(jsonData.items)) {
          // Formato de rss2json.com
          noticiasArray = jsonData.items.map((item: any) => {
            const content = item.content || item.description || '';
            const description = item.description || '';
            
            // Extraer imagen del contenido
            let image = item.thumbnail || item.enclosure?.link || undefined;
            
            // Si no hay imagen en los metadatos, intentar extraerla del contenido
            if (!image) {
              // Primero del contenido completo
              image = extractImageFromContent(content);
              
              // Si no se encontró en el contenido, intentar con la descripción
              if (!image) {
                image = extractImageFromContent(description);
              }
            }
            
            return {
              title: item.title || '',
              link: item.link || '',
              pubDate: item.pubDate || new Date().toISOString(),
              description: description,
              content: content,
              image: image
            };
          });
        } else if (jsonData.channel && jsonData.channel.item) {
          // Otro formato JSON posible
          const items = Array.isArray(jsonData.channel.item) ? jsonData.channel.item : [jsonData.channel.item];
          noticiasArray = items.map((item: any) => {
            const content = item['content:encoded'] || item.description || '';
            const description = item.description || '';
            
            // Extraer imagen del contenido
            let image = item.enclosure?.link || undefined;
            
            // Si no hay imagen en los metadatos, intentar extraerla del contenido
            if (!image) {
              // Primero del contenido completo
              image = extractImageFromContent(content);
              
              // Si no se encontró en el contenido, intentar con la descripción
              if (!image) {
                image = extractImageFromContent(description);
              }
            }
            
            return {
              title: item.title || '',
              link: item.link || '',
              pubDate: item.pubDate || new Date().toISOString(),
              description: description,
              content: content,
              image: image
            };
          });
        }
      } else {
        // Procesar como XML
        console.log('Procesando respuesta como XML');
        const text = await response.text();
        console.log('Texto XML recibido, longitud:', text.length);
        
        try {
          const feed = await rssParser.parse(text);
          console.log('Feed parseado correctamente');
          
          if (feed.items && feed.items.length > 0) {
            noticiasArray = feed.items.map((item: rssParser.RssItem) => {
              const content = item.content || '';
              const description = item.description || '';
              
              return {
                title: item.title || '',
                link: item.links && item.links.length > 0 ? item.links[0].url : '',
                pubDate: item.published || '',
                description: description,
                content: content || description,
                image: extractImageFromContent(content) || extractImageFromContent(description) || 
                       (item.enclosures && item.enclosures.length > 0 ? item.enclosures[0].url : undefined)
              };
            });
          }
        } catch (parseError: any) {
          console.error('Error al parsear el feed XML:', parseError);
          // Intentar parsear como XML simple usando DOMParser si rssParser falla
          try {
            console.log('Intentando parseo alternativo con DOMParser...');
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, 'text/xml');
            const items = xmlDoc.getElementsByTagName('item');
            
            if (items.length > 0) {
              noticiasArray = Array.from(items).map(item => {
                const content = item.getElementsByTagName('content:encoded')[0]?.textContent || '';
                const description = item.getElementsByTagName('description')[0]?.textContent || '';
                const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i) || description.match(/<img[^>]+src="([^"]+)"/i);
                
                return {
                  title: item.getElementsByTagName('title')[0]?.textContent || '',
                  link: item.getElementsByTagName('link')[0]?.textContent || '',
                  pubDate: item.getElementsByTagName('pubDate')[0]?.textContent || '',
                  description: description,
                  content: content || description,
                  image: imgMatch ? imgMatch[1] : undefined
                };
              });
            }
          } catch (domError) {
            console.error('Error en parseo alternativo:', domError);
          }
        }
      }
      
      // Si no se encontraron noticias, crear noticias de ejemplo
      if (noticiasArray.length === 0) {
        console.log('No se encontraron noticias, creando noticias de ejemplo...');
        noticiasArray = [
          {
            title: 'El Papa Francisco invita a rezar por la paz',
            link: 'https://www.vaticannews.va/es.html',
            pubDate: new Date().toISOString(),
            description: 'El Santo Padre ha hecho un llamamiento a todos los fieles para rezar por la paz en el mundo.',
            content: 'El Santo Padre ha hecho un llamamiento a todos los fieles para rezar por la paz en el mundo. Durante la audiencia general, el Papa recordó la importancia de la oración como instrumento de paz.',
            image: 'https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/afp/2023/01/25/15/papa-francisco-audiencia-general-25012023-afp-15_big.jpg'
          },
          {
            title: 'La Iglesia celebra la fiesta de Pentecostés',
            link: 'https://www.aciprensa.com',
            pubDate: new Date().toISOString(),
            description: 'Este domingo los católicos de todo el mundo celebran la venida del Espíritu Santo sobre los apóstoles.',
            content: 'Este domingo los católicos de todo el mundo celebran la venida del Espíritu Santo sobre los apóstoles. La fiesta de Pentecostés marca el nacimiento de la Iglesia y el inicio de su misión evangelizadora.',
            image: 'https://www.aciprensa.com/imagespp/PentecostesEspirituSanto_Wikipedia_11052016.jpg'
          },
          {
            title: 'Nuevas orientaciones pastorales para la catequesis',
            link: 'https://www.iglesia.cl',
            pubDate: new Date().toISOString(),
            description: 'La Conferencia Episcopal ha publicado nuevas orientaciones para la catequesis adaptadas a los tiempos actuales.',
            content: 'La Conferencia Episcopal ha publicado nuevas orientaciones para la catequesis adaptadas a los tiempos actuales. El documento busca responder a los desafíos de la evangelización en el contexto contemporáneo.',
            image: 'https://www.iglesia.cl/img/contenido/catequesis2023.jpg'
          }
        ];
      }
      
      console.log(`Total de noticias procesadas: ${noticiasArray.length}`);
      setNoticias(noticiasArray);
    } catch (error: any) {
      console.error('Error al cargar las noticias:', error);
      setError(`No se pudieron cargar las noticias: ${error.message || 'Error desconocido'}`);
      setNoticias([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchNoticias();
  }, []);

  useEffect(() => {
    fetchNoticias();
  }, []);

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
          title: 'Noticias de la Diocesis',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      
      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
                <Text style={styles.title}>{noticia.title}</Text>
                <Text style={styles.date}>
                  {new Date(noticia.pubDate).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
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
