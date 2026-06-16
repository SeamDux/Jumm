import {
  Lora_400Regular,
  Lora_400Regular_Italic,
  Lora_700Bold,
} from '@expo-google-fonts/lora';

const bundledRegular = 'Lora_400Regular';
const bundledBold = 'Lora_700Bold';
const bundledItalic = 'Lora_400Regular_Italic';

export const Fonts = {
  regular: bundledRegular,
  bold: bundledBold,
  italic: bundledItalic,
};

export const fontAssets = {
  [bundledRegular]: Lora_400Regular,
  [bundledBold]: Lora_700Bold,
  [bundledItalic]: Lora_400Regular_Italic,
};

export default Fonts;
