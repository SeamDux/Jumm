import { Stack, useNavigation, usePathname, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { BackHandler, Platform, View, Text, LogBox, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Ignorar advertencias específicas si es necesario
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Sending `onAnimatedValueUpdate` with no listeners registered.'
]);

// Error Boundary Component
function ErrorScreen({ error }: { error: Error }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: Colors.background }}>
      <Text style={{ fontSize: 18, marginBottom: 10, color: Colors.text }}>Ha ocurrido un error en la navegación</Text>
      <Text style={{ color: 'gray' }}>{error?.message || 'Error desconocido'}</Text>
    </View>
  );
}

export default function AppLayout() {
  const navigation = useNavigation();
  const pathname = usePathname();
  const [error, setError] = useState<Error | null>(null);

  // Manejar el botón de retroceso en Android
  useEffect(() => {
    if (Platform.OS === 'android') {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          try {
            if (navigation.canGoBack()) {
              navigation.goBack();
              return true;
            }
            return false;
          } catch (e) {
            console.warn('Error al navegar hacia atrás:', e);
            setError(e instanceof Error ? e : new Error('Error de navegación'));
            return true;
          }
        }
      );

      return () => backHandler.remove();
    }
  }, [navigation]);

  // Reiniciar el error cuando cambia la ruta
  useEffect(() => {
    setError(null);
  }, [pathname]);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  const screenOptions = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: '600' as const,
      fontSize: 18,
    },
    headerShadowVisible: false,
    contentStyle: {
      backgroundColor: Colors.background,
    },
    animation: Platform.select({
      ios: 'default',
      android: 'slide_from_right'
    }) as 'default' | 'slide_from_right',
    animationDuration: 200,
    gestureEnabled: Platform.OS === 'ios',
    gestureDirection: 'horizontal' as const,
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen 
          name="index" 
          options={{
            title: 'Orar con Jesús',
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => router.push('/(app)/creditos')}
                style={{
                  marginRight: 16,
                  padding: 4,
                }}
              >
                <MaterialCommunityIcons name="star" size={26} color="white" />
              </TouchableOpacity>
            ),
          }} 
        />
        <Stack.Screen 
          name="acerca-de" 
          options={{
            title: 'Acerca de',
            headerShown: true,
          }} 
        />
        <Stack.Screen 
          name="[id]" 
          options={{
            headerShown: true,
          }}
        />
      </Stack>
    </View>
  );
}
