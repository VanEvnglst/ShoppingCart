import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../screens/products-screen';
import ShoppingCartScreen from '../screens/cart-screen';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'Products'}
        component={ProductsScreen}
      />
      <HomeStack.Screen
        name={'Cart'}
        component={ShoppingCartScreen}
      />
    </HomeStack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigator;