import React, { useEffect } from 'react';
import { Linking, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';

export default function EnsenanzasPapaLeonXIVScreen() {
  useEffect(() => {
    // Aquí puedes cambiar la URL por el enlace que quieras compartir
    Linking.openURL('https://www.vatican.va/content/vatican/es.html');
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Enseñanzas del Papa León XIV',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: '#fff',
        }}
      />
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});
