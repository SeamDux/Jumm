import {
  FlatList,
  Linking,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

const HORIZONTAL_PADDING = 16;
const COLUMN_GAP = 12;
const ROW_GAP = 12;

type MenuItem = {
  title: string;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  href?: `/(app)/${string}`;
  externalUrl?: string;
};

async function openExternalUrl(url: string) {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  } catch (error) {
    console.error('Error opening URL:', error);
  }
}

const menuItems: MenuItem[] = [
  {
    title: 'JUMM',
    href: '/(app)/jumm',
    icon: 'music-note',
  },
  {
    title: 'P. Molina',
    href: '/(app)/p-molina',
    icon: 'account-tie',
  },
  {
    title: 'Audiolibros JUMM',
    href: '/(app)/audiolibros',
    icon: 'headphones',
  },
  {
    title: 'YouTube',
    href: '/(app)/youtube',
    icon: 'youtube',
  },
  {
    title: 'Revistas',
    href: '/(app)/revistas',
    icon: 'newspaper-variant',
  },
  {
    title: 'Oraciones de Siempre',
    href: '/(app)/oraciones-siempre',
    icon: 'book-alphabet',
  },
  {
    title: 'Liturgia de las Horas del Día',
    href: '/(app)/liturgia-horas-dia',
    icon: 'clock-outline',
  },
  {
    title: 'De los alimentos',
    href: '/(app)/de-los-alimentos',
    icon: 'silverware-fork-knife',
  },
  {
    title: 'La Santa Misa',
    href: '/(app)/santa-misa',
    icon: 'church',
  },
  {
    title: 'Adoración al Santísimo',
    href: '/(app)/adoracion-santisimo',
    icon: 'candle',
  },
  {
    title: 'Santo Rosario',
    href: '/(app)/santo-rosario',
    icon: 'circle-multiple',
  },
  {
    title: 'Coronilla de la Divina Misericordia',
    href: '/(app)/coronilla-divina-misericordia',
    icon: 'heart',
  },
  {
    title: 'Santo Vía Crucis',
    href: '/(app)/santo-via-crucis',
    icon: 'cross',
  },
  {
    title: 'Novenas',
    href: '/(app)/novenas',
    icon: 'book-multiple',
  },
  {
    title: 'Sagrada Biblia',
    href: '/(app)/sagrada-biblia',
    icon: 'book-open-page-variant',
  },
  {
    title: 'La Doctrina Cristiana',
    href: '/(app)/resumen-doctrina',
    icon: 'book-cross',
  },
];

function MenuCard({
  item,
  size,
}: {
  item: MenuItem;
  size: number;
}) {
  const card = (
    <View style={[styles.menuItem, { width: size, height: size }]}>
      <MaterialCommunityIcons name={item.icon} size={32} color={Colors.primary} />
      <Text style={styles.menuText}>{item.title}</Text>
    </View>
  );

  if (item.externalUrl) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => openExternalUrl(item.externalUrl!)}>
        {card}
      </TouchableOpacity>
    );
  }

  return (
    <Link href={item.href!} asChild>
      <TouchableOpacity activeOpacity={0.7}>{card}</TouchableOpacity>
    </Link>
  );
}

export default function HomePage() {
  const { width } = useWindowDimensions();
  const itemSize = Math.floor((width - HORIZONTAL_PADDING * 2 - COLUMN_GAP) / 2);

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.title}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>JUMM</Text>
            <Text style={styles.subtitle}>Jóvenes Unidos Mariano Misionero</Text>
          </View>
        }
        renderItem={({ item }) => <MenuCard item={item} size={itemSize} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingTop: HORIZONTAL_PADDING,
    paddingBottom: HORIZONTAL_PADDING,
    flexGrow: 0,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.secondary,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: ROW_GAP,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginTop: 10,
    color: Colors.secondary,
    textAlign: 'center',
  },
});
