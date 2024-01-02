import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllHistory from '../screen/history/tabs/AllHistory';
import Successful from '../screen/history/tabs/Successful';
import GivenUp from '../screen/history/tabs/GivenUp';

const Tab = createMaterialTopTabNavigator();

const HistoryTopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={'AllHistory'}>
      <Tab.Screen name="AllHistory" component={AllHistory} />
      <Tab.Screen name="Successful" component={Successful} />
      <Tab.Screen name="GivenUp" component={GivenUp} />
    </Tab.Navigator>
  );
};

export default HistoryTopTabNavigator;
