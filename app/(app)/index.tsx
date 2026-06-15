import { StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

type MenuItem = {
  title: string;
  href: `/(app)/${string}`;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
};

const menuItems: MenuItem[] = [
  {
    title: 'Ofrecimiento de Obras',
    href: '/(app)/ofrecimiento-obras',
    icon: 'hand-heart',
  },
  {
    title: 'Ángelus',
    href: '/(app)/angelus',
    icon: 'bell-ring',
  },
  {
    title: 'Regina Caeli',
    href: '/(app)/regina-caeli',
    icon: 'flower-tulip',
  },
  {
    title: 'De los alimentos',
    href: '/(app)/de-los-alimentos',
    icon: 'silverware-fork-knife',
  },
  {
    title: 'Preparación para la Santa Misa',
    href: '/(app)/preparacion-santa-misa',
    icon: 'church',
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
    title: 'Novena a San José',
    href: '/(app)/novena-san-jose',
    icon: 'flower',
  },
  {
    title: 'Novena a la Divina Misericordia',
    href: '/(app)/novena-divina-misericordia',
    icon: 'heart-pulse',
  },
  {
    title: 'Novena a Nuestra Señora del encuentro con Dios',
    href: '/(app)/novena-nuestra-senora-encuentro-dios',
    icon: 'account-heart',
  },
  {
    title: 'Sagrada Biblia',
    href: '/(app)/sagrada-biblia',
    icon: 'book-open-page-variant',
  },
  {
    title: 'Evangelio del día',
    href: '/(app)/evangelio-del-dia',
    icon: 'book-open-variant',
  },
  {
    title: 'La Doctrina Cristiana',
    href: '/(app)/resumen-doctrina',
    icon: 'book-cross',
  },
];

export default function HomePage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>JUMM</Text>
        <Text style={styles.subtitle}>Oraciones y devociones</Text>

        <View style={styles.grid}>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} asChild>
              <TouchableOpacity style={styles.menuItem}>
                <MaterialCommunityIcons name={item.icon} size={32} color={Colors.primary} />
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 14,
    borderRadius: 6,
    marginBottom: 12,
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
    fontSize: 14,
    marginTop: 10,
    color: Colors.secondary,
    textAlign: 'center',
  },
});
