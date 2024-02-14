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
import AddChallenge from '../screen/challenge/AddChallenge';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '.';
import EmptyPage from '../screen/challenge/EmptyPage';
import { Color } from '../statics/styles/Color';
import { Config } from '../assets/vector';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainBottomTabNavigator;
