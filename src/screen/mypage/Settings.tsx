import { View, Text } from 'react-native';
import React from 'react';
import NavigaitonHeader from '../commons/component/NavigaitonHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';

const Settings = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <View>
      <NavigaitonHeader
        title={'설정'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Settings;
