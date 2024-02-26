import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import HistoryTopTabNavigator from './HistoryTopNavigator';
import TopTabStackNavigator from './TopTabStackNavigator';
import Settings from '../screen/mypage/Settings';
import AddChallenge from '../screen/challenge/AddChallenge';
import EditProfile from '../screen/mypage/EditProfile';
import Notice from '../screen/mypage/menus/Notice';
import Inquiry from '../screen/mypage/menus/Inquiry';
import AllRandomChallenge from '../screen/challenge/allRandom/AllRandomChallenge';
import CategoryChallenge from '../screen/challenge/category/CategoryChallenge';
import CharacteristicsChallenge from '../screen/challenge/characteristics/CharacteristicsChallenge';

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
      <Stack.Screen
        name="AddChallenge"
        component={AddChallenge}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inquiry"
        component={Inquiry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notice"
        component={Notice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllRandomChallenge"
        component={AllRandomChallenge}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoryChallenge"
        component={CategoryChallenge}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CharacteristicsChallenge"
        component={CharacteristicsChallenge}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FullScreenStackNavigator;
