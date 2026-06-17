import type { ReactNode } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

type OracionSiempreLayoutProps = {
  title: string;
  headerTitle?: string;
  children: ReactNode;
};

export function OracionSiempreLayout({
  title,
  headerTitle,
  children,
}: OracionSiempreLayoutProps) {
  return (
    <>
      <Stack.Screen options={{ title: headerTitle ?? title }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>{title.toUpperCase()}</Text>
        {children}
      </ScrollView>
    </>
  );
}

export function PrayerParagraph({ children }: { children: string }) {
  return <Text style={styles.paragraph}>{children}</Text>;
}

export function PrayerSectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export function VersicleLine({
  label,
  text,
}: {
  label: 'V' | 'R';
  text: string;
}) {
  return (
    <Text style={styles.line}>
      <Text style={styles.prefix}>{label}. </Text>
      <Text style={styles.bodyText}>{text}</Text>
    </Text>
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
    fontSize: 20,
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  paragraph: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
    marginBottom: 14,
    textAlign: 'left',
  },
  sectionTitle: {
    fontFamily: Fonts.bold,
    fontSize: 17,
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  line: {
    marginBottom: 8,
    lineHeight: 26,
  },
  prefix: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.liturgicalRed,
  },
  bodyText: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
  },
});
