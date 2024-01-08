import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import HistoryTopTabNavigator from './HistoryTopNavigator';
import TopTabStackNavigator from './TopTabStackNavigator';
import Settings from '../screen/mypage/Settings';

const Stack = createNativeStackNavigator();

const FullScreenStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FullScreenStackNavigator;
