import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Background from './Background';

interface JubileoBackgroundProps {
  children: React.ReactNode;
}

export default function JubileoBackground({ children }: JubileoBackgroundProps) {
  return (
    <Background imageSource={require('../assets/images/jubileo-background.png')}>
      <View style={styles.container}>
        {children}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Puedes ajustar la opacidad o añadir estilos específicos para el fondo del Jubileo
  },
});
