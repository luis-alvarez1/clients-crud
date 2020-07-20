import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
};
const BarraSuperior = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };

  return (
    <>
      <Button color={theme.colors.surface} onPress={() => handlePress()}>
        Cliente
      </Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default BarraSuperior;
