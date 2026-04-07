import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Linking, Animated } from 'react-native';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Link, router } from 'expo-router';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function HomePage() {
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [newsDropdownHeight] = useState(new Animated.Value(0));
  const [liturgyDropdownOpen, setLiturgyDropdownOpen] = useState(false);
  const [liturgyDropdownHeight] = useState(new Animated.Value(0));
  const [devotionsDropdownOpen, setDevotionsDropdownOpen] = useState(false);
  const [devotionsDropdownHeight] = useState(new Animated.Value(0));

  const toggleNewsDropdown = () => {
    const toValue = newsDropdownOpen ? 0 : 1;
    setNewsDropdownOpen(!newsDropdownOpen);
    
    Animated.timing(newsDropdownHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleLiturgyDropdown = () => {
    const toValue = liturgyDropdownOpen ? 0 : 1;
    setLiturgyDropdownOpen(!liturgyDropdownOpen);
    
    Animated.timing(liturgyDropdownHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleDevotionsDropdown = () => {
    const toValue = devotionsDropdownOpen ? 0 : 1;
    setDevotionsDropdownOpen(!devotionsDropdownOpen);
    
    Animated.timing(devotionsDropdownHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

          {/* Menú desplegable de Noticias */}
          <View style={styles.dropdownContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={toggleNewsDropdown}>
              <MaterialCommunityIcons name="newspaper" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Noticias</Text>
              <MaterialCommunityIcons 
                name={newsDropdownOpen ? "chevron-up" : "chevron-down"} 
                size={24} 
                color={Colors.primary} 
              />
            </TouchableOpacity>
            
            <Animated.View 
              style={[
                styles.dropdownContent,
                {
                  height: newsDropdownHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 180], // Altura aproximada para 3 opciones
                  }),
                  opacity: newsDropdownHeight,
                }
              ]}
            >
              <Link href="/(app)/noticias-vaticano" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="church" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Noticias de la Iglesia - Santa Sede</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/noticias-iglesia-chile" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="flag" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Noticias de la Iglesia en Chile</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/noticias" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="newspaper" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Noticias de la Diócesis</Text>
                </TouchableOpacity>
              </Link>
            </Animated.View>
          </View>

          <Link href="/(app)/ensenanzas-papa-leon-xiv" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="crown" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Enseñanzas del Papa León XIV</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sagrada-biblia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Sagrada Biblia</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/evangelio-del-dia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-open-variant" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Evangelio del día</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/meditacion-diaria" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-account" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Meditación diaria · Lectio divina</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/consejo-camino" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="walk" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Consejos para el Camino</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/calendario" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="calendar-month" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Calendario Litúrgico de Chile</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santoral" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="calendar-star" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Santoral</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/virtudes" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-pulse" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Las virtudes</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/resumen-doctrina" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>La Doctrina Cristiana</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="church" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Los Sacramentos de la Iglesia</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>La Vida Cristiana</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-open-page-variant" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones de Siempre</Text>
            </TouchableOpacity>
          </Link>

          {/* Menú desplegable de Liturgia de las Horas */}
          <View style={styles.dropdownContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={toggleLiturgyDropdown}>
              <MaterialCommunityIcons name="clock" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Liturgia de las Horas</Text>
              <MaterialCommunityIcons 
                name={liturgyDropdownOpen ? "chevron-up" : "chevron-down"} 
                size={24} 
                color={Colors.primary} 
              />
            </TouchableOpacity>
            
            <Animated.View 
              style={[
                styles.dropdownContent,
                {
                  height: liturgyDropdownHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 180], // Altura aproximada para 3 opciones
                  }),
                  opacity: liturgyDropdownHeight,
                }
              ]}
            >
              <Link href="/(app)/liturgia" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="clock-outline" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Liturgia de las Horas Dominical</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/liturgia-horas-dia" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="clock" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Liturgia de las Horas del Día</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/oficio-del-dia" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="book-open-variant" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Liturgia de las Horas del día en Audio</Text>
                </TouchableOpacity>
              </Link>
            </Animated.View>
          </View>

          <Link href="/(app)/oraciones-noche" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="weather-night" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones de la Noche</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="bread-slice" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>La Santa Misa</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/adoracion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="sunny" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Adoración al Santísimo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/confesion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-plus" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Confesión Sacramental</Text>
            </TouchableOpacity>
          </Link>

          {/* Menú desplegable de Devociones */}
          <View style={styles.dropdownContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={toggleDevotionsDropdown}>
              <MaterialCommunityIcons name="heart" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones</Text>
              <MaterialCommunityIcons 
                name={devotionsDropdownOpen ? "chevron-up" : "chevron-down"} 
                size={24} 
                color={Colors.primary} 
              />
            </TouchableOpacity>
            
            <Animated.View 
              style={[
                styles.dropdownContent,
                {
                  height: devotionsDropdownHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 360], // Altura aproximada para 6 opciones
                  }),
                  opacity: devotionsDropdownHeight,
                }
              ]}
            >
              <Link href="/(app)/trinidad" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="triangle-outline" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Devociones a la Santísima Trinidad</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/devociones-jesus" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="heart-outline" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Devociones a Nuestro Señor Jesucristo</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/devociones-espiritu" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="fire" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Devociones al Espíritu Santo</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/devociones-maria" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="account-heart" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Devociones a la Virgen María</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/devociones-jose" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="flower-tulip" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Devociones a San José</Text>
                </TouchableOpacity>
              </Link>

              <Link href="/(app)/devociones-moribundo" asChild>
                <TouchableOpacity style={styles.dropdownItem}>
                  <MaterialCommunityIcons name="heart-pulse" size={24} color={Colors.primary} />
                  <Text style={styles.dropdownText}>Devociones para acompañar a un enfermo o moribundo</Text>
                </TouchableOpacity>
              </Link>
            </Animated.View>
          </View>

          <Link href="/(app)/oraciones-difuntos" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="candle" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones por los Difuntos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/novenas" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Novenas</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos/exorcismos" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="cross-celtic" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Exorcismos</Text>
            </TouchableOpacity>
          </Link>      

          <Link href="/(app)/bendiciones" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="hands-pray" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Otras bendiciones y oraciones</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-diversas" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-multiple" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones Diversas</Text>
            </TouchableOpacity>
          </Link>
          

          <Link href="/(app)/cantoral" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="music-note" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Cantoral Breve</Text>
            </TouchableOpacity>
          </Link>
          {/* Espacio extra para que no tape los botones flotantes */}
          <View style={{ height: 100 }} />
        </ScrollView>
      
      {/* Barra de botones flotantes */}
      <View style={styles.fabBar}>
        <TouchableOpacity style={styles.fabButton} onPress={() => router.push('/(app)/acerca-de')}>
          <MaterialCommunityIcons name="information-outline" size={28} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fabButton, styles.fabButtonCenter]} onPress={() => router.push('/(app)/buscar')}>
          <Ionicons name="search" size={32} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fabButton} onPress={() => router.push('/(tabs)/donaciones')}>
          <FontAwesome5 name="hand-holding-heart" size={26} color={Colors.primary} />
        </TouchableOpacity>
      </View>
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
  },
  contentContainer: {
    paddingBottom: 80, // Espacio para el botón de búsqueda
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
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
    fontSize: 20,
    marginLeft: 15,
    color: Colors.secondary,
    flex: 1,
  },
  searchButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 100,
    paddingHorizontal: 24,
  },
  fabButton: {
    backgroundColor: Colors.white,
    borderRadius: 32,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  fabButtonCenter: {
    backgroundColor: Colors.primary,
    width: 68,
    height: 68,
    borderRadius: 34,
    marginHorizontal: 12,
    borderWidth: 4,
    borderColor: Colors.white,
    top: -16,
    zIndex: 101,
  },
  creditosIcon: {
    position: 'absolute',
    top: 36,
    right: 24,
    zIndex: 200,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  dropdownContent: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownText: {
    fontSize: 16,
    marginLeft: 15,
    color: Colors.secondary,
    flex: 1,
  },
}); 