import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';
import Icon from 'react-native-ionicons';
import globalStyles from '../styles/styles';

const NuevoClienteScreen = () => {
  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [mail, setMail] = useState('');
  const [company, setCompany] = useState('');

  return (
    <>
      <View style={globalStyles.container}>
        <Headline style={globalStyles.title}>Añadir Nuevo Cliente</Headline>
        <TextInput
          label="Nombre"
          placeholder="Luis"
          style={styles.input}
          onChangeText={() => {
            console.log('leyendo');
          }}
        />
        <TextInput
          label="Teléfono"
          placeholder="1257896513"
          style={styles.input}
          onChangeText={() => {
            console.log('leyendo');
          }}
        />
        <TextInput
          label="Correo"
          placeholder="ejemplo@correo.com"
          style={styles.input}
          onChangeText={() => {
            console.log('leyendo');
          }}
        />
        <TextInput
          label="Empresa"
          placeholder="Example.Inc"
          style={styles.input}
          onChangeText={() => {
            console.log('leyendo');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoClienteScreen;
