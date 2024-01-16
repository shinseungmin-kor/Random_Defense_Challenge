import { View, Text, Button } from 'react-native';
import React from 'react';
import NavigaitonHeader from '../commons/component/NavigaitonHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';
import { SafeContainer } from '../../components/container/SafeContainer';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../modules/redux/slices/CounterSlice';

const Settings = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const Counter = () => {
    const dispatch = useDispatch();

    return (
      <Button
        title="Logout"
        onPress={() => {
          dispatch(loginUser(false));
        }}
      />
    );
  };
  return (
    <SafeContainer>
      <NavigaitonHeader
        title={'설정'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
      />
      <Counter />
    </SafeContainer>
  );
};

export default Settings;
