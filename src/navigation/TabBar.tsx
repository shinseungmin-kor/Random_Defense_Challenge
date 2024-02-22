import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import image from '../assets/images';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Color } from '../statics/styles/Color';
import { Plus } from '../assets/vector';
import AddChallengeModal from '../components/modals/AddChallengeModal';

const TabBar = (props: BottomTabBarProps) => {
  const { state, navigation } = props;
  const insets = useSafeAreaInsets();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const {
    history,
    historyActive,
    party,
    partyActive,
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
            onPress={index !== 2 ? onPress : toggleModal}
            style={{ flex: 1, alignItems: 'center' }}
          >
            {index === 2 ? (
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: Color.Blue30,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Plus width={30} height={30} />
              </View>
            ) : (
              <Image source={icon} style={{ width: 20, height: 20 }} />
            )}
          </TouchableOpacity>
        );
      })}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <AddChallengeModal toggleModal={toggleModal} />
      </Modal>
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
