import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { Color } from '../../../statics/styles/Color';
import NavigaitonHeader from '../../commons/component/NavigaitonHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation';
import Title from '../../../components/text/Typography';
import FontStyle from '../../../statics/styles/Font';
import Interval from '../../../components/lines/Interval';
import SingleLineTextBox from '../../../components/input/SingleLineTextBox';
import MultipleLineTextBox from '../../../components/input/MultipleLineTextBox';
import SplitLine from '../../../components/lines/SplitLine';
import UploadImageForm from '../../../components/input/UploadImageForm';

const Inquiry = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'문의하기'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
      />
      <SplitLine />
      <ScrollView style={styles.subContainer}>
        <Interval height={20} />
        <Title
          text={`괴짜히어로연합에게\n무엇이든지 물어보세요!!`}
          font={FontStyle.bold.font16}
        />
        <Interval height={10} />
        <Title
          text={`문의는 이메일만 가능합니다.\n(문의 후 일주일 내로 답변해드립니다.)`}
          font={FontStyle.regular.font14}
        />
        <Interval height={40} />
        <SingleLineTextBox />
        <Interval height={15} />
        <MultipleLineTextBox />
        <Interval height={20} />
        <UploadImageForm />
      </ScrollView>
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

export default Inquiry;
