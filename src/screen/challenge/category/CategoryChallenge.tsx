import { View, Text } from 'react-native';
import React from 'react';
import NavigaitonHeader from '../../commons/component/NavigaitonHeader';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation';

const CategoryChallenge = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <SafeContainer>
      <NavigaitonHeader
        title={'카테고리별 챌린지'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
      />
    </SafeContainer>
  );
};

export default CategoryChallenge;
