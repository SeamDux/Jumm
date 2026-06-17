import { StyleSheet, ScrollView, Text } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

export default function GuiaHimnoScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Guía del JUMM' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>GUÍA DEL JUMM</Text>
        <Text style={styles.placeholder}>
          La guía del JUMM se agregará próximamente.
        </Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 28,
    paddingBottom: 40,
  },
  mainTitle: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  placeholder: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});
