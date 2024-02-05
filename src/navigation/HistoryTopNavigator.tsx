import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllHistory from '../screen/history/tabs/AllHistory';
import Successful from '../screen/history/tabs/Successful';
import GivenUp from '../screen/history/tabs/GivenUp';
import TopTapBar from './TopTapBar';
import { HistoryDummy } from '../dummy/HistoryDummy';

const Tab = createMaterialTopTabNavigator();

const HistoryTopTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TopTapBar {...props} />}>
      <Tab.Screen name="전체" component={AllHistory} />
      <Tab.Screen name="성공한" component={Successful} />
      <Tab.Screen name="포기한" component={GivenUp} />
    </Tab.Navigator>
  );
};

export default HistoryTopTabNavigator;
