import { Platform } from 'react-native';

const bundledRegular = 'TimesNewRoman';
const bundledBold = 'TimesNewRoman-Bold';
const bundledItalic = 'TimesNewRoman-Italic';

export const Fonts = {
  regular: Platform.select({
    ios: 'Times New Roman',
    android: bundledRegular,
    web: 'Times New Roman, Times, serif',
    default: bundledRegular,
  }) as string,
  bold: Platform.select({
    ios: 'Times New Roman',
    android: bundledBold,
    web: 'Times New Roman, Times, serif',
    default: bundledBold,
  }) as string,
  italic: Platform.select({
    ios: 'Times New Roman',
    android: bundledItalic,
    web: 'Times New Roman, Times, serif',
    default: bundledItalic,
  }) as string,
};

export const fontAssets = {
  [bundledRegular]: require('../assets/fonts/TimesNewRoman-Regular.ttf'),
  [bundledBold]: require('../assets/fonts/TimesNewRoman-Bold.ttf'),
  [bundledItalic]: require('../assets/fonts/TimesNewRoman-Italic.ttf'),
};

export default Fonts;
