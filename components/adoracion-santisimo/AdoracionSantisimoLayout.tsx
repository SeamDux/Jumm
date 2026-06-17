import type { ReactNode } from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export type AdoracionLanguage = 'es' | 'la';

type AdoracionLayoutProps = {
  title: string;
  headerTitle?: string;
  children: ReactNode;
};

export function AdoracionSantisimoLayout({
  title,
  headerTitle,
  children,
}: AdoracionLayoutProps) {
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

export function Rubric({ children }: { children: string }) {
  return <Text style={styles.rubric}>{children}</Text>;
}

export function SectionHeading({ children }: { children: string }) {
  return <Text style={styles.sectionHeading}>{children}</Text>;
}

export function BodyText({ children }: { children: ReactNode }) {
  return <Text style={styles.body}>{children}</Text>;
}

export function DropCapLine({ initial, text }: { initial: string; text: string }) {
  return (
    <Text style={styles.body}>
      <Text style={styles.dropCap}>{initial}</Text>
      {text}
    </Text>
  );
}

export function VersicleLine({
  label,
  text,
  suffix,
}: {
  label: 'V' | 'R';
  text: string;
  suffix?: string;
}) {
  return (
    <Text style={styles.versicleLine}>
      <Text style={styles.versicleLabel}>{label}. </Text>
      <Text style={styles.versicleBody}>{text}</Text>
      {suffix ? <Text style={styles.tpNote}> {suffix}</Text> : null}
    </Text>
  );
}

export function LanguageSwitch({
  language,
  onChange,
}: {
  language: AdoracionLanguage;
  onChange: (lang: AdoracionLanguage) => void;
}) {
  return (
    <View style={styles.switchContainer}>
      <Pressable
        style={[styles.switchOption, language === 'es' && styles.switchOptionActive]}
        onPress={() => onChange('es')}
      >
        <Text style={[styles.switchText, language === 'es' && styles.switchTextActive]}>
          Español
        </Text>
      </Pressable>
      <Pressable
        style={[styles.switchOption, language === 'la' && styles.switchOptionActive]}
        onPress={() => onChange('la')}
      >
        <Text style={[styles.switchText, language === 'la' && styles.switchTextActive]}>
          Latín
        </Text>
      </Pressable>
    </View>
  );
}

export function LocalizedText({
  language,
  es,
  la,
}: {
  language: AdoracionLanguage;
  es: string;
  la: string;
}) {
  return <BodyText>{language === 'es' ? es : la}</BodyText>;
}

export function Footnote({ children }: { children: string }) {
  return <Text style={styles.footnote}>{children}</Text>;
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
    fontSize: 18,
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.4,
    lineHeight: 26,
  },
  switchContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1.5,
    borderColor: Colors.liturgicalRed,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 24,
  },
  switchOption: {
    paddingHorizontal: 28,
    paddingVertical: 10,
    backgroundColor: Colors.white,
  },
  switchOptionActive: {
    backgroundColor: Colors.liturgicalRed,
  },
  switchText: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.liturgicalRed,
  },
  switchTextActive: {
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  sectionHeading: {
    fontFamily: Fonts.bold,
    fontSize: 17,
    color: Colors.liturgicalRed,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
    letterSpacing: 0.3,
  },
  rubric: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
    lineHeight: 24,
    marginBottom: 14,
    textAlign: 'left',
  },
  body: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
    lineHeight: 26,
    marginBottom: 10,
    textAlign: 'left',
  },
  dropCap: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    color: Colors.liturgicalRed,
    lineHeight: 28,
  },
  versicleLine: {
    marginBottom: 8,
    lineHeight: 26,
  },
  versicleLabel: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.liturgicalRed,
  },
  versicleBody: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: '#000000',
  },
  tpNote: {
    fontFamily: Fonts.italic,
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.liturgicalRed,
  },
  footnote: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.secondary,
    lineHeight: 20,
    marginTop: 16,
    fontStyle: 'italic',
  },
});
