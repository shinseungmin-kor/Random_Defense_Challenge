import { View, Text } from 'react-native';
import React from 'react';
import NavigaitonHeader from '../commons/component/NavigaitonHeader';
import { SafeContainer } from '../../components/container/SafeContainer';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';
import MyPageButton from '../../components/buttons/MypageButton';
import { Color } from '../../statics/styles/Color';
import TopTabStackNavigator from '../../navigation/TopTabStackNavigator';
import { PrimaryButton } from '../../components/buttons/BasicButton';
import { Config, IconBlackLeftArrow } from '../../assets/vector';

const History = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeContainer style={{ backgroundColor: Color.White }}>
      <NavigaitonHeader
        title={'챌린지 내역'}
        hasBackButton={false}
        headerRight={() => {
          return (
            <View>
              <MyPageButton
                isMypage={false}
                onPress={() => {
                  navigation.navigate('Mypage');
                }}
              />
            </View>
          );
        }}
      />
    </SafeContainer>
  );
};

export default History;
