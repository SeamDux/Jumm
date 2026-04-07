import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

interface BackgroundProps {
  children: React.ReactNode;
  imageSource: any;
}

export default function Background({ children, imageSource }: BackgroundProps) {
  return (
    <ImageBackground
      source={imageSource}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Capa de superposición para mejorar la legibilidad
  },
});
