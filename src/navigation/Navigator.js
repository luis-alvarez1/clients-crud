import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InicioScreen from '../screens/InicioScreen';
import DetallesClienteScreen from '../screens//DetallesClienteScreen';
import NuevoClienteScreen from '../screens//NuevoClienteScreen';
import BarraSuperior from '../components/ui/Barra';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774f2',
    accent: '#0655bf',
  },
};

const Navigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Inicio"
            component={InicioScreen}
            options={({navigation, route}) => ({
              headerLeft: (props) => (
                <BarraSuperior
                  {...props}
                  navigation={navigation}
                  route={route}
                />
              ),
            })}
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
