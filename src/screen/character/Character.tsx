import { View, Text } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../components/container/SafeContainer';
import { Color } from '../../statics/styles/Color';
import NavigaitonHeader from '../commons/component/NavigaitonHeader';
import MyPageButton from '../../components/buttons/MypageButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';
import CharacterTopTabNavigator from '../../navigation/CharacterTopTabNavigator';

const Character = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeContainer style={{ backgroundColor: Color.White }}>
      <NavigaitonHeader
        title={'챌린지 특성'}
        hasBackButton={false}
        headerRight={() => {
          return (
            <View>
              <MyPageButton
                onPress={() => {
                  navigation.navigate('Mypage');
                }}
              />
            </View>
          );
        }}
      />
      <CharacterTopTabNavigator />
    </SafeContainer>
  );
};

export default Character;
