import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';
import { SafeContainer } from '../../components/container/SafeContainer';
import { Color } from '../../statics/styles/Color';
import NavigaitonHeader from '../commons/component/NavigaitonHeader';
import MyPageButton from '../../components/buttons/MypageButton';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../modules/redux/slices/CounterSlice';

const Mypage = () => {
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
    <SafeContainer style={{ backgroundColor: Color.White }}>
      <NavigaitonHeader
        title={'마이페이지'}
        hasBackButton={false}
        headerRight={() => {
          return (
            <View>
              <MyPageButton
                isMypage={true}
                onPress={() => {
                  navigation.navigate('Settings');
                }}
              />
            </View>
          );
        }}
      />
      <Counter />
    </SafeContainer>
  );
};

export default Mypage;
