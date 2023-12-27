import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import History from '../screen/history/History';
import Character from '../screen/character/Character';
import Mypage from '../screen/mypage/Mypage';
import TabBar from './TabBar';
import AddChallenge from '../screen/challenge/AddChallenge';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={(props) => <TabBar {...props} />}
      backBehavior={'none'}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddChallege"
        component={AddChallenge}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Character"
        component={Character}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigator;
