import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryTopTabNavigator from './HistoryTopNavigator';

const Stack = createNativeStackNavigator();

const TopTabStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryTopTabNavigator"
        component={HistoryTopTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TopTabStackNavigator;
