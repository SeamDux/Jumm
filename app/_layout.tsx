import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme, SafeAreaView, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import * as Font from 'expo-font';

// Prevenir que la pantalla de inicio se oculte automáticamente
SplashScreen.preventAutoHideAsync();

interface ErrorFallbackProps {
  error: Error | null;
}

// Error Boundary Component
function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Lo sentimos, ha ocurrido un error.</Text>
      <Text style={{ color: 'gray' }}>{error?.message || 'Error desconocido'}</Text>
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [error, setError] = useState<Error | null>(null);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Asegurar que las fuentes estén cargadas
        await Font.loadAsync({
          SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        });

        if (loaded) {
          // Pequeño retraso para asegurar que todo esté listo
          await new Promise(resolve => setTimeout(resolve, 500));
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn('Error durante la inicialización:', e);
        setError(e instanceof Error ? e : new Error('Error desconocido'));
      }
    }

    prepare();
  }, [loaded]);

  // Mostrar pantalla de error si hay algún problema
  if (error) {
    return <ErrorFallback error={error} />;
  }

  // Mantener la pantalla de splash mientras se carga
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            animationDuration: 200,
          }}
        >
          <Stack.Screen 
            name="(app)" 
            options={{
              animation: 'fade',
            }}
          />
          <Stack.Screen 
            name="+not-found" 
            options={{ 
              title: 'Página no encontrada',
              headerShown: true,
              headerStyle: { 
                backgroundColor: Colors.primary,
              },
              headerTintColor: Colors.white,
              contentStyle: {
                backgroundColor: Colors.background,
              },
            }} 
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaView>
  );
}
