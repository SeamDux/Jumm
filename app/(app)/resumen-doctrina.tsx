import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Alert, ActivityIndicator, Linking, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, Link } from 'expo-router';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function ResumenDoctrinaScreen() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleOpenVaticanURL = async (url: string, title: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Error',
          `No se puede abrir la URL de ${title}. Verifica tu conexión a internet.`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error al abrir URL:', error);
      Alert.alert(
        'Error',
        `No se pudo abrir la página de ${title}. Verifica tu conexión a internet.`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleDownloadAndSharePDF = async (url: string, title: string) => {
    try {
      setDownloading(title);
      
      // Crear nombre de archivo único
      const fileName = `${title.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.pdf`;
      const fileUri = `${FileSystem.documentDirectory}${fileName}`;
      
      console.log('Iniciando descarga de:', url);
      console.log('Guardando en:', fileUri);
      
      // Descargar el archivo
      const downloadResult = await FileSystem.downloadAsync(url, fileUri);
      
      console.log('Resultado de descarga:', downloadResult);
      
      if (downloadResult.status === 200) {
        // Verificar si se puede compartir
        const isAvailable = await Sharing.isAvailableAsync();
        
        if (isAvailable) {
          // Compartir el archivo descargado
          await Sharing.shareAsync(downloadResult.uri, {
            mimeType: 'application/pdf',
            dialogTitle: `Abrir ${title}`,
            UTI: 'com.adobe.pdf'
          });
        } else {
          // Si no se puede compartir, mostrar opciones alternativas
          Alert.alert(
            'PDF Descargado',
            `El archivo "${title}" se ha descargado correctamente.\n\nPara abrirlo:\n1. Ve a tu gestor de archivos\n2. Busca el archivo en la carpeta de la app\n3. Tócalo para abrirlo con tu lector de PDF preferido`,
            [
              { text: 'Ver en Gestor de Archivos', onPress: () => {
                // Intentar abrir el gestor de archivos
                Sharing.shareAsync(downloadResult.uri, {
                  mimeType: 'application/pdf',
                  dialogTitle: 'Abrir con aplicación'
                }).catch(() => {
                  Alert.alert('Info', 'El archivo se encuentra en la carpeta de la aplicación');
                });
              }},
              { text: 'OK' }
            ]
          );
        }
      } else {
        throw new Error(`Error en la descarga: ${downloadResult.status}`);
      }
    } catch (error) {
      console.error('Error completo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      Alert.alert(
        'Error',
        `No se pudo descargar el documento: ${errorMessage}\n\nVerifica tu conexión a internet e inténtalo de nuevo.`,
        [{ text: 'OK' }]
      );
    } finally {
      setDownloading(null);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'La Doctrina Cristiana',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleOpenVaticanURL(
            'https://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_sp.html',
            'Compendio de la Doctrina Social de la Iglesia'
          )}
        >
          <MaterialCommunityIcons name="scale-balance" size={24} color={Colors.primary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Compendio de la Doctrina Social de la Iglesia</Text>
            <Text style={styles.subtitle}>Abrir en el sitio web del Vaticano</Text>
          </View>
          <MaterialCommunityIcons name="open-in-new" size={20} color={Colors.gray} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleOpenVaticanURL(
            'https://www.vatican.va/archive/catechism_sp/index_sp.html',
            'Catecismo de la Iglesia Católica'
          )}
        >
          <MaterialCommunityIcons name="book-open-variant" size={24} color={Colors.primary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Catecismo de la Iglesia Católica</Text>
            <Text style={styles.subtitle}>Abrir en el sitio web del Vaticano</Text>
          </View>
          <MaterialCommunityIcons name="open-in-new" size={20} color={Colors.gray} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleOpenVaticanURL(
            'https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_sp.html',
            'Compendio del Catecismo de la Iglesia Católica'
          )}
        >
          <MaterialCommunityIcons name="book" size={24} color={Colors.primary} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Compendio del Catecismo de la Iglesia Católica</Text>
            <Text style={styles.subtitle}>Abrir en el sitio web del Vaticano</Text>
          </View>
          <MaterialCommunityIcons name="open-in-new" size={20} color={Colors.gray} />
        </TouchableOpacity>

        <Link href="/resumen-doctrina/credo" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="book-cross" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>El Credo del Pueblo de Dios</Text>
              <Text style={styles.subtitle}>San Pablo VI, Papa</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/resumen-doctrina/mandamientos" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="tablet" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Los Diez mandamientos de la Ley de Dios</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/resumen-doctrina/mandamientos-iglesia" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5 name="church" size={24} color={Colors.primary} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Los mandamientos de la Iglesia</Text>
            </View>
          </TouchableOpacity>
        </Link>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scrollView: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
  },
}); 