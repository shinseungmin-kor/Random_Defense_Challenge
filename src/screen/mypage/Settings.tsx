import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import NavigaitonHeader from '../commons/component/NavigaitonHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';
import { SafeContainer } from '../../components/container/SafeContainer';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../modules/redux/slices/CounterSlice';
import SplitLine from '../../components/lines/SplitLine';
import Title from '../../components/text/Typography';
import FontStyle from '../../statics/styles/Font';
import { Color } from '../../statics/styles/Color';
import Interval from '../../components/lines/Interval';

const Settings = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const dispatch = useDispatch();

  const SettingMenu = ({
    mainButtonTitle,
    subButtonTitle,
    mainOnClick,
    subOnClick,
    fontColor,
  }: {
    mainButtonTitle: string;
    subButtonTitle?: string;
    mainOnClick?: () => void;
    subOnClick?: () => void;
    fontColor?: Color;
  }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={mainOnClick}>
          <Title
            text={mainButtonTitle}
            font={FontStyle.regular.font16}
            color={fontColor}
          />
        </TouchableOpacity>
        {subButtonTitle ? (
          <TouchableOpacity onPress={subOnClick}>
            <Title
              text={subButtonTitle}
              font={FontStyle.regular.font16}
              color={Color.Gray50}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    );
  };

  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'설정'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
      />
      <SplitLine />
      <Interval height={20} />
      <View style={styles.subContainer}>
        <View>
          <Title text={'일반'} font={FontStyle.bold.font14} />
          <Interval height={15} />
          <SettingMenu mainButtonTitle="계정정보" subButtonTitle="카카오" />
        </View>
      </View>
      <Interval height={20} />
      <SplitLine />
      <Interval height={20} />
      <View style={styles.subContainer}>
        <View>
          <Title text={'정보'} font={FontStyle.bold.font14} />
          <Interval height={15} />
          <SettingMenu mainButtonTitle="사업자 정보" subButtonTitle="보기" />
          <Interval height={10} />
          <SettingMenu
            mainButtonTitle="서비스 이용약관"
            subButtonTitle="보기"
          />
          <Interval height={10} />
          <SettingMenu
            mainButtonTitle="개인정보 처리방침"
            subButtonTitle="보기"
          />
        </View>
      </View>
      <Interval height={20} />
      <SplitLine />
      <Interval height={20} />
      <View style={styles.subContainer}>
        <View>
          <Title text={'기타'} font={FontStyle.bold.font14} />
          <Interval height={15} />
          <SettingMenu
            mainButtonTitle="로그아웃"
            mainOnClick={() => {
              dispatch(loginUser(false));
            }}
          />
          <Interval height={10} />
          <SettingMenu mainButtonTitle="버전정보" subButtonTitle="1.0.0(1)" />
          <Interval height={10} />
          <SettingMenu mainButtonTitle="실행환경" subButtonTitle="production" />
        </View>
      </View>
      <Interval height={20} />
      <SplitLine />
      <Interval height={20} />
      <View style={styles.subContainer}>
        <View>
          <SettingMenu mainButtonTitle="회원탈퇴" fontColor={Color.Red80} />
        </View>
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
  subContainer: {
    marginHorizontal: 16,
  },
});

export default Settings;
