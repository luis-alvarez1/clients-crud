import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import Icon from 'react-native-ionicons';

const theme = {
  ...DefaultTheme,
};
const BarraSuperior = ({navigation, route}) => {
  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };

  return (
    <>
      <Button
        style={styles.button}
        color={theme.colors.surface}
        onPress={() => handlePress()}>
        N. Cliente
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
});

export default BarraSuperior;
