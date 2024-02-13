import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Color } from '../../statics/styles/Color';
import { SafeContainer } from '../../components/container/SafeContainer';
import NavigaitonHeader from '../commons/component/NavigaitonHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';
import Interval from '../../components/lines/Interval';
import SingleLineTextBox from '../../components/input/SingleLineTextBox';
import SplitLine from '../../components/lines/SplitLine';
import Title from '../../components/text/Typography';
import FontStyle from '../../statics/styles/Font';

const EditProfile = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'프로필 편집'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
        headerRight={() => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <Title text={'완료'} font={FontStyle.bold.font18} />
            </TouchableOpacity>
          );
        }}
      />
      <SplitLine />
      <View style={styles.subContainer}>
        <Interval height={25} />
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
        </View>
        <Interval height={50} />
        <SingleLineTextBox />
        <Interval height={15} />
        <SingleLineTextBox />
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    // height: '100%',
    // flex: 1,
  },
  subContainer: {
    flex: 1,
    // height: '100%',
    marginHorizontal: 16,
  },
});

export default EditProfile;
