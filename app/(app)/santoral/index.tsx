import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function SantoralScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Santoral',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>Santoral</Text>
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Enero</Text>
            {[
              { day: '01', saint: 'Santa María Madre de Dios.' },
              { day: '02', saint: 'S. Basilio y S. Gregario de Nacianzo.' },
              { day: '06', saint: 'Epifanía del Señor.' },
              { day: '07', saint: 'S. Raimundo de Peñafort.' },
              { day: '13', saint: 'S. Hilario.' },
              { day: '17', saint: 'S. Antonio de Egipto.' },
              { day: '20', saint: 'S. Fabián. S. Sebastián.' },
              { day: '21', saint: 'Sta. Inés.' },
              { day: '22', saint: 'S. Vicente. Beata Laura Vicuña' },
              { day: '24', saint: 'S. Francisco de Sales.' },
              { day: '25', saint: 'Conversión de S. Pablo.' },
              { day: '26', saint: 'S. Timoteo y S. Tito.' },
              { day: '27', saint: 'Sta. Ángela Mérici.' },
              { day: '28', saint: 'Sto. Tomás de Aquino.' },
              { day: '31', saint: 'S. Juan Bosco.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Febrero</Text>
            {[
              { day: '02', saint: 'Presentación del Señor.' },
              { day: '03', saint: 'S. Blas. S. Oscar' },
              { day: '05', saint: 'Sta. Águeda.' },
              { day: '06', saint: 'S. Pablo Miki y los mártires japoneses.' },
              { day: '08', saint: 'S. Jerónimo Emiliano.' },
              { day: '10', saint: 'Sta. Escolástica.' },
              { day: '11', saint: 'Ntra. Sra. de Lourdes.' },
              { day: '14', saint: 'S. Cirilo y S. Metodio.' },
              { day: '17', saint: 'Los siete santos fundares de los servitas.' },
              { day: '21', saint: 'S. Pedro Damiano.' },
              { day: '22', saint: 'La Cátedra de S. Pedro.' },
              { day: '23', saint: 'S. Policarpo.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Marzo</Text>
            {[
              { day: '04', saint: 'S. Casimiro.' },
              { day: '07', saint: 'Sta. Perpetua y Sta. Felicidad.' },
              { day: '08', saint: 'S. Juan de Dios.' },
              { day: '09', saint: 'Sta. Francisca Romana.' },
              { day: '17', saint: 'S. Patricio.' },
              { day: '18', saint: 'S. Cirilo de Jerusalén.' },
              { day: '19', saint: 'S. José.' },
              { day: '23', saint: 'Sto. Toribio de Mogrovejo.' },
              { day: '25', saint: 'Anunciación del Señor.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Abril</Text>
            {[
              { day: '02', saint: 'S. Francisco de Paula.' },
              { day: '04', saint: 'S. Isidoro.' },
              { day: '05', saint: 'S. Vicente Ferrer.' },
              { day: '07', saint: 'S. Juan Bautista de la Salle.' },
              { day: '11', saint: 'S. Estanislao.' },
              { day: '13', saint: 'S. Martín I.' },
              { day: '21', saint: 'S. Anselmo.' },
              { day: '23', saint: 'S. Jorge.' },
              { day: '24', saint: 'S. Fidel de Sigmaringen.' },
              { day: '25', saint: 'S. Marcos.' },
              { day: '28', saint: 'S. Pedro Chanel.' },
              { day: '29', saint: 'Sta. Catalina de Siena.' },
              { day: '30', saint: 'S. Pío V.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Mayo</Text>
            {[
              { day: '01', saint: 'S. José Obrero.' },
              { day: '02', saint: 'S. Atanasio.' },
              { day: '03', saint: 'S. Felipe y Santiago. Fiesta de la Santa Cruz.' },
              { day: '12', saint: 'S. Nereo y S. Aquileo.' },
              { day: '13', saint: 'S. Pancracio.' },
              { day: '14', saint: 'S. Matías.' },
              { day: '18', saint: 'S. Juan I.' },
              { day: '20', saint: 'S. Bernardino de Siena.' },
              { day: '25', saint: 'S. Beda. S.Gregorio VII. Sta. María Magdalena de Pazzis.' },
              { day: '26', saint: 'S. Felipe Neri.' },
              { day: '27', saint: 'S. Agustín de Cantorbery.' },
              { day: '31', saint: 'Visitación de la Santísima Virgen María.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Junio</Text>
            {[
              { day: '01', saint: 'S. Justino.' },
              { day: '02', saint: 'S. Marcelino y S. Pedro.' },
              { day: '03', saint: 'S. Carlos Lwanga y compañeros Mártires de Uganda.' },
              { day: '05', saint: 'S. Bonifacio.' },
              { day: '06', saint: 'S. Norberto.' },
              { day: '09', saint: 'S. Efrén.' },
              { day: '11', saint: 'S. Bernabé.' },
              { day: '13', saint: 'S. Antonio de Padua.' },
              { day: '19', saint: 'S. Romualdo.' },
              { day: '21', saint: 'S. Luis Gonzaga.' },
              { day: '22', saint: 'S. Paulino de Nola. S.Juan Fisher y Sto. Tomás Moro.' },
              { day: '24', saint: 'Natividad de S. Juan Bautista.' },
              { day: '27', saint: 'S. Cirilo de Alejandría' },
              { day: '26', saint: 'San Josemaría Escrivá' },
              { day: '28', saint: 'S. Ireneo.' },
              { day: '29', saint: 'S. Pedro y S. Pablo.' },
              { day: '30', saint: 'Primeros santos Mártires de la Iglesia Romana' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Julio</Text>
            {[
              { day: '03', saint: 'Sto. Tomas.' },
              { day: '04', saint: 'Sta. Isabel de Portugal.' },
              { day: '05', saint: 'S. Antonio María Zacarías.' },
              { day: '06', saint: 'Sta. María Goretti.' },
              { day: '11', saint: 'S. Benito.' },
              { day: '13', saint: 'S. Enrique. Santa Teresa de Jesús de Los Andes' },
              { day: '14', saint: 'S. Camilo de Lelis.' },
              { day: '15', saint: 'S. Buenaventura.' },
              { day: '16', saint: 'Ntra. Sra. del Carmen.' },
              { day: '21', saint: 'S. Lorenzo de Brindis.' },
              { day: '22', saint: 'Sta. María Magdalena.' },
              { day: '23', saint: 'Sta. Brígida.' },
              { day: '25', saint: 'Santiago.' },
              { day: '26', saint: 'S. Joaquín y Sta. Ana.' },
              { day: '29', saint: 'Sta. Marta.' },
              { day: '30', saint: 'S. Pedro Crisólogo.' },
              { day: '31', saint: 'S. Ignacio de Loyola.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Agosto</Text>
            {[
              { day: '01', saint: 'S. Alfonso de Ligorio.' },
              { day: '02', saint: 'S. Eusebio de Vercelli.' },
              { day: '04', saint: 'S. Juan María Vianney.' },
              { day: '05', saint: 'Dedicación de Santa María Mayor.' },
              { day: '06', saint: 'La Transfiguración del Señor.' },
              { day: '07', saint: 'S. Sixto II, S. Cayetano de Tieni.' },
              { day: '08', saint: 'Sto. Domingo.' },
              { day: '10', saint: 'S. Lorenzo.' },
              { day: '11', saint: 'Sta. Clara.' },
              { day: '13', saint: 'S. Ponciano y S. Hipólito.' },
              { day: '15', saint: 'Asunción de la Santísima Virgen María.' },
              { day: '16', saint: 'S. Esteban de Hungría.' },
              { day: '18', saint: 'S. Alberto Hurtado. Sta. Elena.' },
              { day: '19', saint: 'S. Juan Eudes.' },
              { day: '20', saint: 'S. Bernardo.' },
              { day: '21', saint: 'S. Pío X.' },
              { day: '22', saint: 'Sta. María Reina.' },
              { day: '23', saint: 'Sta. Rosa de Lima.' },
              { day: '24', saint: 'S. Bartolomé.' },
              { day: '25', saint: 'S. Luis de Francia. S. José de Calasanz.' },
              { day: '26', saint: 'Beato Ceferino Namuncurá' },
              { day: '27', saint: 'Sta. Mónica.' },
              { day: '28', saint: 'S. Agustín.' },
              { day: '29', saint: 'Martirio de S. Juan Bautista.' },
              { day: '30', saint: 'Sta. Rosa de Lima' },
              { day: '31', saint: 'San Ramón' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Septiembre</Text>
            {[
              { day: '03', saint: 'S. Gregorio Magno.' },
              { day: '08', saint: 'Natividad de la Santísima Virgen María.' },
              { day: '13', saint: 'S. Juan Crisóstomo.' },
              { day: '15', saint: 'Ntra. Sra. de los Dolores.' },
              { day: '16', saint: 'S. Cornelio y S. Cipriano.' },
              { day: '17', saint: 'S. Roberto Belarmino.' },
              { day: '19', saint: 'S. Jenaro.' },
              { day: '21', saint: 'S. Mateo.' },
              { day: '26', saint: 'S. Cosme y S. Damián.' },
              { day: '27', saint: 'S. Vicente de Paul.' },
              { day: '28', saint: 'S. Wenceslao.' },
              { day: '29', saint: 'S. Miguel, S. Gabriel y S. Rafael.' },
              { day: '30', saint: 'S. Jerónimo.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Octubre</Text>
            {[
              { day: '01', saint: 'Sta. Teresa del Niño Jesús.' },
              { day: '02', saint: 'Los Ángeles Custodios.' },
              { day: '04', saint: 'S. Francisco de Asís.' },
              { day: '06', saint: 'S. Bruno.' },
              { day: '07', saint: 'Ntra. Sra. del Rosario.' },
              { day: '09', saint: 'S. Dionisio y sus Compañeros. S. Juan Leonardi.' },
              { day: '14', saint: 'S. Calixto.' },
              { day: '15', saint: 'Sta. Teresa de Ávila.' },
              { day: '16', saint: 'Sta. Edwiges. Sta. Margarita María Alacoque.' },
              { day: '17', saint: 'S. Ignacio de Antioquía.' },
              { day: '18', saint: 'S. Lucas.' },
              { day: '19', saint: 'Ss. Juan Brébeuf, Isaac Jogues y CC. Mártires americano-canadienses. S. Pablo de la Cruz.' },
              { day: '23', saint: 'S. Juan de Capistrano.' },
              { day: '24', saint: 'S. Antonio María Claret.' },
              { day: '28', saint: 'S. Simón y S. Judas.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Noviembre</Text>
            {[
              { day: '01', saint: 'Todos los Santos.' },
              { day: '02', saint: 'Conmemoración de todos los fieles difuntos.' },
              { day: '03', saint: 'S. Martín de Porres. lo' },
              { day: '04', saint: 'S. Carlos Borromeo.' },
              { day: '09', saint: 'Dedicación de la Basílica de Letrán.' },
              { day: '10', saint: 'S. León Magno.' },
              { day: '11', saint: 'S. Martín de Tours.' },
              { day: '12', saint: 'S. Josafat Kuncewitz.' },
              { day: '15', saint: 'S. Alberto Magno.' },
              { day: '16', saint: 'Sta. Margarita de Escocia. Sta. Gertrudis.' },
              { day: '17', saint: 'Sta. Isabel de Hungría.' },
              { day: '18', saint: 'Dedicación de las Basílicas de S. Pedro y de S. Pablo.' },
              { day: '21', saint: 'Presentación de la Santísima Virgen María.' },
              { day: '22', saint: 'Sta. Cecilia.' },
              { day: '23', saint: 'S. Clemente. S. Columbano.' },
              { day: '30', saint: 'S. Andrés.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>

          <View style={styles.monthCard}>
            <Text style={styles.monthTitle}>Diciembre</Text>
            {[
              { day: '03', saint: 'S. Francisco Javier.' },
              { day: '04', saint: 'S. Juan Damasceno.' },
              { day: '06', saint: 'S. Nicolás.' },
              { day: '07', saint: 'S. Ambrosio.' },
              { day: '08', saint: 'Inmaculada Concepción de la Santísima Virgen María.' },
              { day: '11', saint: 'S. Dámaso.' },
              { day: '12', saint: 'Sta. Juana Francisca de Chantal.' },
              { day: '13', saint: 'Sta. Lucía.' },
              { day: '14', saint: 'S. Juan de la Cruz.' },
              { day: '21', saint: 'S. Pedro Canisio.' },
              { day: '23', saint: 'S. Juan de Kenty (Cancio).' },
              { day: '25', saint: 'Natividad del Señor.' },
              { day: '26', saint: 'S. Esteban.' },
              { day: '27', saint: 'S. Juan.' },
              { day: '28', saint: 'Los Santos Inocentes.' },
              { day: '29', saint: 'Sto. Tomás Becket.' },
              { day: '31', saint: 'S. Silvestre.' },
            ].map(item => (
              <View key={item.day} style={styles.dateItem}>
                <Text style={styles.date}>{item.day}</Text>
                <Text style={styles.celebration}>{item.saint}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 20,
  },
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  monthCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  monthTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  dateItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    width: 40,
  },
  celebration: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
}); 