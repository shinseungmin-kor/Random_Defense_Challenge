import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FullScreenStackNavigator from './FullScreenStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { useSelector } from 'react-redux';
import HistoryTopTabNavigator from './HistoryTopNavigator';

const Navigator = () => {
  // const [isUser, setIsUser] = useState(true);
  const isUser = useSelector((state: any) => {
    return state.loginUser.value;
  });

  return (
    <NavigationContainer>
      {isUser ? <FullScreenStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
