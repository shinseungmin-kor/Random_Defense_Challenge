import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import History from '../screen/history/History';
import Character from '../screen/character/Character';
import Mypage from '../screen/mypage/Mypage';
import TabBar from './TabBar';
import EmptyPage from '../screen/challenge/EmptyPage';

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
        name="EmptyPage"
        component={EmptyPage}
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
