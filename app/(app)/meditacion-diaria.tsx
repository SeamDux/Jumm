import React, { useEffect } from 'react';
import { Platform, View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

const MEDITACION_URL = 'https://www.hablarcondios.org/meditaciondiaria.aspx';

export default function MeditacionDiaria() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions?.({ title: 'Meditación diaria · Lectio divina' });
  }, [navigation]);

  const handleOpenBrowser = async () => {
    try {
      const supported = await Linking.canOpenURL(MEDITACION_URL);
      if (supported) {
        await Linking.openURL(MEDITACION_URL);
      } else {
        console.log('No se puede abrir la URL:', MEDITACION_URL);
      }
    } catch (error) {
      console.error('Error al abrir el navegador:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Meditación Diaria</Text>
        <Text style={styles.subtitle}>Lectio Divina</Text>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Accede a la meditación diaria y lectio divina desde el sitio web oficial de "Hablar con Dios".
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleOpenBrowser}>
          <Text style={styles.buttonText}>Abrir en Navegador</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Se abrirá en tu navegador predeterminado para una mejor experiencia.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  descriptionContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  note: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});


