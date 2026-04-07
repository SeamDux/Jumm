import { Tabs } from 'expo-router';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          borderTopColor: Colors.lightGray,
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="../(app)/buscar"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="../(app)/acerca-de"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="donaciones"
        options={{
          title: 'Donaciones',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="hand-holding-heart" size={size} color={color} />
          ),
          headerShown: true,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
} 