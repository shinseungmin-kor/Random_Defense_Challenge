import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllHistory from '../screen/history/tabs/AllHistory';
import Successful from '../screen/history/tabs/Successful';
import GivenUp from '../screen/history/tabs/GivenUp';
import TopTapBar from './TopTapBar';
import AllCharacter from '../screen/character/tabs/AllCharacter';
import MyCharacter from '../screen/character/tabs/MyCharacter';

const Tab = createMaterialTopTabNavigator();

const CharacterTopTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TopTapBar {...props} />}>
      <Tab.Screen name="내특성" component={MyCharacter} />
      <Tab.Screen name="전체특성" component={AllCharacter} />
    </Tab.Navigator>
  );
};

export default CharacterTopTabNavigator;
