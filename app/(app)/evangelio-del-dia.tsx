import { Platform, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';

export default function EvangelioDelDia() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions?.({ title: 'Evangelio del día' });
  }, [navigation]);

  if (Platform.OS === 'web') {
    // Botón personalizado usando HTML para mejor integración web
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 20 }}>
        <Text style={{ marginBottom: 10, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
          Evangelio del día
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
          onClick={() => window.open('https://www.eucaristiadiaria.cl/dia.php', '_blank')}
        >
          Ir a eucaristiadiaria.cl
        </button>
        
        <div style={{ width: '100%', maxWidth: 600, height: 1200, marginTop: 20 }}>
          <iframe
            src="https://www.eucaristiadiaria.cl/compartir.php"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Evangelio del día"
          />
        </div>
      </View>
    );
  }
  // En móvil, WebView
  return (
    <WebView
      source={{ uri: 'https://www.eucaristiadiaria.cl/compartir.php' }}
      style={{ flex: 1 }}
      startInLoadingState={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
}

// --- CÓDIGO ANTERIOR COMENTADO PARA REFERENCIA ---
/*
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Linking } from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import type { RssItem } from 'react-native-rss-parser';
import { useNavigation } from 'expo-router';

const RSS_URL = 'https://www.vaticannews.va/content/vaticannews/es/evangelio-de-hoy.rss.xml';

// Utilidad para decodificar entidades HTML
function decodeHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&aacute;/g, 'á')
    .replace(/&eacute;/g, 'é')
    .replace(/&iacute;/g, 'í')
    .replace(/&oacute;/g, 'ó')
    .replace(/&uacute;/g, 'ú')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&uuml;/g, 'ü')
    .replace(/&Aacute;/g, 'Á')
    .replace(/&Eacute;/g, 'É')
    .replace(/&Iacute;/g, 'Í')
    .replace(/&Oacute;/g, 'Ó')
    .replace(/&Uacute;/g, 'Ú')
    .replace(/&Ntilde;/g, 'Ñ')
    .replace(/&Uuml;/g, 'Ü')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#160;/g, ' ')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8230;/g, '…')
    .replace(/&#8217;/g, '’')
    .replace(/&#8242;/g, "'")
    .replace(/&#8243;/g, '"')
    .replace(/&iquest;/g, '¿')
    .replace(/&iexcl;/g, '¡');
}

// Unir párrafos sueltos (como paréntesis o referencias cortas) al anterior
function mergeLooseParagraphs(paragraphs: string[]): string[] {
  const merged: string[] = [];
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    // Si el párrafo es solo un paréntesis o muy corto, únelo al anterior
    if ((/^\(*\)*$/.test(p.trim()) || p.trim().length < 8) && merged.length > 0) {
      merged[merged.length - 1] += ' ' + p.trim();
    } else {
      merged.push(p);
    }
  }
  return merged;
}

// Unir bloques de referencia entre paréntesis, aunque el paréntesis no esté al inicio
function mergeReferenceBlocks(paragraphs: string[]): string[] {
  const merged: string[] = [];
  let buffer: string[] = [];
  let insideRef = false;
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    if (!insideRef && p.includes('(')) {
      insideRef = true;
      buffer.push(p);
      if (p.includes(')')) {
        merged.push(buffer.join(' '));
        buffer = [];
        insideRef = false;
      }
    } else if (insideRef) {
      buffer.push(p);
      if (p.includes(')') || p.length < 40) {
        // Si contiene ')' o es un bloque corto, cerrar
        if (p.includes(')')) {
          merged.push(buffer.join(' '));
          buffer = [];
          insideRef = false;
        }
      }
    } else {
      merged.push(p);
    }
  }
  if (buffer.length > 0) {
    merged.push(buffer.join(' '));
  }
  return merged;
}

// Filtrar solo el evangelio del día
function extractEvangelio(paragraphs: string[]): string[] {
  const startIdx = paragraphs.findIndex(p => /^Lectura del santo evangelio seg\u00fan san/i.test(p));
  if (startIdx === -1) return [];
  const evangelio: string[] = [];
  for (let i = startIdx; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    // Parar si llegamos a una homilía, referencia, comentario, cita, o párrafo vacío
    if (
      !p.trim() ||
      /^"/.test(p.trim()) ||
      /^\(/.test(p.trim()) ||
      /Papa|homil[ií]a|Regina Caeli|San Juan Pablo|Benedicto XVI|Francisco|Juan Pablo II|XL |lib\. II|Homiliarum|PL|\d{4}\)/i.test(p)
    ) break;
    evangelio.push(p);
  }
  return evangelio;
}

export default function EvangelioDelDia() {
  const [evangelio, setEvangelio] = useState<RssItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions?.({ title: 'Evangelio del día' });
  }, [navigation]);

  useEffect(() => {
    const corsProxy = 'https://corsproxy.io/?';
    fetch(corsProxy + RSS_URL, {
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml',
        'User-Agent': 'OrarConJesusApp/1.0',
      },
    })
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        if (rss.items && rss.items.length > 0) {
          setEvangelio(rss.items[0]);
        } else {
          setError('No se encontró el evangelio del día.');
        }
        setLoading(false);
      })
      .catch((e) => {
        setError('Error al obtener el evangelio.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1, marginTop: 40 }} size="large" color="#888" />;
  }
  if (error) {
    return <View style={styles.container}><Text style={styles.error}>{error}</Text></View>;
  }
  if (!evangelio) {
    return null;
  }
  // Procesar el contenido en párrafos
  const rawContent = decodeHtml(evangelio.description.replace(/<[^>]+>/g, '\n'));
  let paragraphs = rawContent.split(/\n+/).map(p => p.trim()).filter(Boolean);
  paragraphs = mergeLooseParagraphs(paragraphs);
  paragraphs = mergeReferenceBlocks(paragraphs);
  const evangelioParagraphs = extractEvangelio(paragraphs);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{decodeHtml(evangelio.title)}</Text>
      <Text style={styles.date}>{new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Text>
      {evangelioParagraphs.map((p, idx) => {
        // Sección "Lectura de..."
        if (/^Lectura de/i.test(p)) {
          return <Text key={idx} style={styles.sectionTitle}>{p}</Text>;
        }
        // Cita bíblica
        if (/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+ \d{1,3}, ?\d{1,2}(-\d{1,2})?$/i.test(p.trim())) {
          return <Text key={idx} style={styles.bibleCitation}>{p}</Text>;
        }
        // Normal
        return <Text key={idx} style={styles.paragraph}>{p}</Text>;
      })}
      {evangelio.links && evangelio.links[0]?.url && (
        <Text style={styles.link} onPress={() => Linking.openURL(evangelio.links[0].url)}>
          Leer en Vatican News
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#1a73e8',
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8,
  },
  bibleCitation: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 12,
    marginTop: 0,
  },
  link: {
    color: '#1a73e8',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
  homily: {
    fontSize: 18,
    color: '#333',
    marginBottom: 16,
    fontStyle: 'italic',
    textAlign: 'left',
  },
  reference: {
    fontSize: 15,
    color: '#888',
    marginTop: 18,
    marginBottom: 8,
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
*/ 