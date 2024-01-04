import { View, Text } from 'react-native';
import React from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';
import { Color } from '../statics/styles/Color';

type Route = {
  key: string;
  name: string;
  params?: object | undefined;
};

const TopTapBar = (props: MaterialTopTabBarProps) => {
  const { state, navigation } = props;
  return (
    <Container>
      <TabWrapper>
        {state.routes.map((route: Route, index: number) => {
          // const {options} = descriptors[route.key];
          // const label = options.tabBarLabel;
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TabButton
              isFocused={isFocused}
              onPress={onPress}
              key={`tab_${index}`}
            >
              <TabText isFocused={isFocused}>{label}</TabText>
            </TabButton>
          );
        })}
      </TabWrapper>
    </Container>
  );
};

const Container = styled.View``;

const TabWrapper = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding-left: 4px;
  border-bottom-width: 0.5px;
  border-color: ${Color.Gray40};
`;

const TabButton = styled.TouchableOpacity<{ isFocused: boolean }>`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0px 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? '#5d004a' : 'transparent'};
`;

const TabText = styled.Text<{ isFocused: boolean }>`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => (props.isFocused ? '#5d004a' : '#000000')};
`;

export default TopTapBar;
