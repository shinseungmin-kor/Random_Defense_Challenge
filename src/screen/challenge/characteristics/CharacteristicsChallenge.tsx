import { View, Text } from 'react-native';
import React from 'react';
import NavigaitonHeader from '../../commons/component/NavigaitonHeader';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation';

const CharacteristicsChallenge = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <SafeContainer>
      <NavigaitonHeader
        title={'특성기반 챌린지'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
      />
    </SafeContainer>
  );
};

export default CharacteristicsChallenge;
