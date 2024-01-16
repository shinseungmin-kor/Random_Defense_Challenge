import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';
import { Color } from '../../statics/styles/Color';

interface IProps {
  socialName: string;
  onPress: () => void;
}

const SocialButton = (props: IProps) => {
  const { socialName, onPress } = props;

  const ButtonContainer = () => {
    return <View></View>;
  };

  const SwitchButtons = ({ type }: { type: string }) => {
    switch (type) {
      case 'kakao':
        return (
          <TouchableOpacity style={styles.kakaoButton} onPress={onPress}>
            <Title text={'카카오로 시작하기'} font={FontStyle.regular.font14} />
          </TouchableOpacity>
        );
      case 'naver':
        return (
          <TouchableOpacity style={styles.naverButton} onPress={onPress}>
            <Title text={'네이버로 시작하기'} font={FontStyle.regular.font14} />
          </TouchableOpacity>
        );
      case 'google':
        return (
          <TouchableOpacity style={styles.googleButton} onPress={onPress}>
            <Title text={'구글로 시작하기'} font={FontStyle.regular.font14} />
          </TouchableOpacity>
        );
    }
  };

  return (
    <View style={styles.container}>
      <SwitchButtons type={socialName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  kakaoButton: {
    height: 50,
    backgroundColor: Color.Kakao,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  naverButton: {
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Color.Gray50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Color.Gray50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SocialButton;
