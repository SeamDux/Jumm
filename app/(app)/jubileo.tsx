import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import Background from '../../components/Background';

export default function JubileoScreen() {
  return (
    <Background imageSource={require('../../assets/images/jubileo-background.png')}>
      <Stack.Screen
        options={{
          title: 'Jubileo de la Esperanza 2025',
          headerStyle: {
            backgroundColor: '#006400',
          },
          headerTintColor: '#ffffff',
        }}
      />
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        <BlurView 
        intensity={100} 
        tint="light"
        style={[styles.content, { backgroundColor: 'rgba(255, 255, 255, 0.2)' }]}>
          <Text style={styles.title}>Oración del Jubileo de la Esperanza 2025</Text>
          
          <Text style={styles.prayer}>
            Padre que estás en el cielo,{"\n"}
            la fe que nos has donado en{"\n"}
            tu Hijo Jesucristo, nuestro hermano,{"\n"}
            y la llama de <Text style={{fontStyle: 'italic'}}>caridad</Text>{"\n"}
            infundida en nuestros corazones por el Espíritu Santo,{"\n"}
            despierten en nosotros la bienaventurada <Text style={{fontStyle: 'italic'}}>esperanza</Text>{"\n"}
            en la venida de tu Reino.{"\n\n"}
            Tu gracia nos transforme{"\n"}
            en dedicados cultivadores de las semillas del Evangelio{"\n"}
            que fermenten la humanidad y el cosmos,{"\n"}
            en espera confiada{"\n"}
            de los cielos nuevos y de la tierra nueva,{"\n"}
            cuando vencidas las fuerzas del mal,{"\n"}
            se manifestará para siempre tu gloria.{"\n\n"}
            La gracia del Jubileo{"\n"}
            reavive en nosotros, <Text style={{fontStyle: 'italic'}}>Peregrinos de Esperanza</Text>,{"\n"}
            el anhelo de los bienes celestiales{"\n"}
            y derrame en el mundo entero{"\n"}
            la alegría y la paz{"\n"}
            de nuestro Redentor.{"\n"}
            A ti, Dios bendito eternamente,{"\n"}
            sea la alabanza y la gloria por los siglos.{"\n"}
            Amén.
          </Text>
        </BlurView>
        <TouchableOpacity
          style={{
            backgroundColor: '#006400',
            padding: 16,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 24,
            marginBottom: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 4,
          }}
          onPress={() => Linking.openURL('https://www.obispadodesanbernardo.cl/wp-content/uploads/2025/04/Manual-del-Peregrino-2025-pdf.pdf')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            Abrir Manual del Peregrino (PDF)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#006400',
            padding: 16,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 0,
            marginBottom: 32,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 4,
          }}
          onPress={() => Linking.openURL('https://www.obispadodesanbernardo.cl/2024/12/09/ano-jubilar-2025-peregrinos-de-la-esperanza/')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            Más información sobre el Año Jubilar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Fondo más opaco
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  prayer: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#333',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
}); 