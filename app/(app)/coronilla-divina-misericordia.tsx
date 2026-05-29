import { StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';

export default function CoronillaDivinaMisericordiaScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Coronilla de la Divina Misericordia' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.body}>Contenido por agregar.</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 26,
    color: Colors.text,
  },
});
