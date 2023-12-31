import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import image from '../assets/images';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Color } from '../statics/styles/Color';

const TabBar = (props: BottomTabBarProps) => {
  const { state, navigation } = props;
  const insets = useSafeAreaInsets();

  const {
    history,
    historyActive,
    party,
    partyActive,
    lounge,
    loungeActive,
    judge,
    judgeActive,
    myPage,
    myPageActive,
  } = image.BottomTab;

  const getIcon = (name: string, focused: boolean) => {
    if (name === 'Home') {
      if (!focused) return history;
      return historyActive;
    } else if (name === 'History') {
      if (!focused) return party;
      return partyActive;
    } else if (name === 'AddChallege') {
      if (!focused) return lounge;
      return loungeActive;
    } else if (name === 'Character') {
      if (!focused) return judge;
      return judgeActive;
    } else if (name === 'Mypage') {
      if (!focused) return myPage;
      return myPageActive;
    }
  };

  return (
    <Container style={{ height: 60 + insets.bottom }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon = getIcon(route.name, isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'Home') {
              navigation.navigate(route.name);
              return;
            } else if (route.name === 'History') {
              navigation.navigate(route.name);
              return;
            } else if (route.name === 'AddChallege') {
              navigation.navigate(route.name);
              return;
            } else if (route.name === 'Character') {
              navigation.navigate(route.name);
              return;
            } else if (route.name === 'Mypage') {
              navigation.navigate(route.name);
              return;
            }
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Image source={icon} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        );
      })}
    </Container>
  );
};

const Container = styled.View({
  flexDirection: 'row',
  backgroundColor: Color.Gray10,
  borderTopWidth: 0.5,
  borderTopColor: Color.Gray40,
  paddingTop: 20,
});

export default TabBar;
