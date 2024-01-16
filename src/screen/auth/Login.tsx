import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../modules/redux/slices/CounterSlice';
import { Color } from '../../statics/styles/Color';
import { SafeContainer } from '../../components/container/SafeContainer';
import Title from '../../components/text/Typography';
import FontStyle from '../../statics/styles/Font';
import SocialButton from '../../components/buttons/SocialButton';
import Interval from '../../components/lines/Interval';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <SafeContainer style={styles.container}>
      <View style={styles.title}>
        <Title text={'랜덤챌린지'} font={FontStyle.bold.font24} />
        <Title text={'디펜스'} font={FontStyle.bold.font28} />
      </View>
      <View style={styles.buttons}>
        <SocialButton
          socialName="kakao"
          onPress={() => {
            dispatch(loginUser(true));
          }}
        />
        <Interval height={10} />
        <SocialButton
          socialName="naver"
          onPress={() => {
            dispatch(loginUser(true));
          }}
        />
        <Interval height={10} />
        <SocialButton
          socialName="google"
          onPress={() => {
            dispatch(loginUser(true));
          }}
        />
      </View>
      {/* <View>
        <Button
          title="Login"
          onPress={() => {
            dispatch(loginUser(true));
          }}
        />
      </View> */}
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
  title: {
    flex: 0.7,
    marginTop: 50,
    alignItems: 'center',
  },
  buttons: {
    flex: 0.3,
  },
});

export default Login;
