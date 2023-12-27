import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomTabNavigator from './MainBottomTabNavigator';

const Stack = createNativeStackNavigator();

const FullScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FullScreenStackNavigator;
