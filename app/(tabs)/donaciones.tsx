import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Linking, Alert, Modal, Animated, Dimensions } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function DonacionesScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDonar = async () => {
    const url = 'https://www.flow.cl/app/web/pagarBtnPago.php?token=nafa0fa9c5c577e055b69083bfde12f57034b333';
    
    try {
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Error',
          'No se puede abrir el enlace de donaciones en este dispositivo.',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Ocurrió un error al abrir el enlace de donaciones.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleTransferencia = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Donaciones',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 16 }}>
              <Ionicons name="arrow-back" size={24} color={Colors.white} />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="hand-holding-heart" size={64} color={Colors.primary} />
        </View>
        <Text style={styles.title}>Apoyanos!🙏</Text>
        <Text style={styles.gracias}>¡Gracias por tu generosidad!</Text>
        <Text style={styles.texto}>
          Si este proyecto te ha ayudado y quieres colaborar para que siga creciendo, 
          puedes hacer una donación voluntaria. Todo aporte ayuda a mantener y mejorar la aplicación.
        </Text>
        
        <TouchableOpacity style={styles.botonTransferencia} onPress={handleTransferencia}>
          <Text style={styles.textoBotonTransferencia}>Transferencia Bancaria</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Datos Bancarios</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Ionicons name="close" size={24} color={Colors.text} />
              </TouchableOpacity>
            </View>
            
            <View style={styles.datosContainer}>
              <View style={styles.datoItem}>
                <Text style={styles.datoLabel}>Entidad:</Text>
                <Text style={styles.datoValue}>Obispado de San Bernardo</Text>
              </View>
              
              <View style={styles.datoItem}>
                <Text style={styles.datoLabel}>RUT:</Text>
                <Text style={styles.datoValue}>71.421.900-6</Text>
              </View>
              
              <View style={styles.datoItem}>
                <Text style={styles.datoLabel}>Cuenta Corriente:</Text>
                <Text style={styles.datoValue}>Banco Santander 1222-0</Text>
              </View>
              
              <View style={styles.datoItem}>
                <Text style={styles.datoLabel}>Sitio Web:</Text>
                <Text style={styles.datoValue}>www.obispadodesanbernardo.cl</Text>
              </View>
              
              <View style={styles.datoItem}>
                <Text style={styles.datoLabel}>Dirección:</Text>
                <Text style={styles.datoValue}>Freire 516, San Bernardo</Text>
              </View>
            </View>
            
            <Text style={styles.modalFooter}>
              Puedes realizar una transferencia bancaria directa usando estos datos.
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    marginTop: 32,
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  gracias: {
    fontSize: 18,
    color: Colors.success,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },
  texto: {
    fontSize: 17,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 26,
  },
  botonDonar: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 48,
    marginTop: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotonDonar: {
    color: Colors.white,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  botonTransferencia: {
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 32,
  },
  textoBotonTransferencia: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  closeButton: {
    padding: 4,
  },
  datosContainer: {
    marginBottom: 24,
  },
  datoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  datoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    flex: 1,
  },
  datoValue: {
    fontSize: 16,
    color: Colors.text,
    flex: 2,
    textAlign: 'right',
  },
  modalFooter: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
    fontStyle: 'italic',
  },
}); 