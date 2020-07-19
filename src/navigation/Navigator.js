import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InicioScreen from '../screens/InicioScreen';
import DetallesClienteScreen from '../screens//DetallesClienteScreen';
import NuevoClienteScreen from '../screens//NuevoClienteScreen';

import {} from 'react-native-paper';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen
            name="Inicio"
            component={InicioScreen}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="DetallesCliente"
            component={DetallesClienteScreen}
            options={{
              title: 'Detalles',
            }}
          />
          <Stack.Screen
            name="NuevoCliente"
            component={NuevoClienteScreen}
            options={{
              title: 'Nuevo Cliente',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default Navigator;
