import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import History from '../screen/history/History';
import Character from '../screen/character/Character';
import Mypage from '../screen/mypage/Mypage';
import TabBar from './TabBar';
import AddChallenge from '../screen/challenge/AddChallenge';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Modal Content</Text>
            <Button
              title="Close Modal"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>

      <Text>Home Screen!</Text>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
    </View>
  );
};

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
        component={MyTabs}
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
