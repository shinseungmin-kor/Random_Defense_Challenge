import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import NavigaitonHeader from '../../commons/component/NavigaitonHeader';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation';
import { Color } from '../../../statics/styles/Color';
import Interval from '../../../components/lines/Interval';
import Title from '../../../components/text/Typography';
import FontStyle from '../../../statics/styles/Font';
import SplitLine from '../../../components/lines/SplitLine';
import { OutLineButton } from '../../../components/buttons/BasicButton';

const CharacteristicsChallenge = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'특성기반 챌린지'}
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
      <Interval height={10} />
      <View style={styles.subContainer}>
        <View style={styles.infoBox}>
          <Title
            text={
              '완전랜덤 챌린지는 말 그대로 괴짜 히어로 연합에서 준비한 수많은 챌린지 중에서 랜덤한 하나의 챌린지를 추천해 드리는 겁니다. 그러니까 맘에 안들어도 하세요, 아님 나올때까지 뺑뺑이를...'
            }
            font={FontStyle.regular.font14}
          />
        </View>
        <Interval height={15} />
        <SplitLine />
        <Interval height={50} />
        <View style={styles.mainImage}>
          <Image
            source={{
              uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjhfMjk5/MDAxNjE5NTg0OTQ4MjQx.jtPPY6-Uh0hUz91LOrQYI5QMQASAsPftdAuRYZBauGog.sB5FTvDIyHf4mzlgpNI6uW3LDSI3zbj5ZC5ODZywqusg.JPEG.ni1203/photo-1517963879433-6ad2b056d712.jpg?type=w800',
            }}
            style={{ width: 190, height: 230, borderRadius: 4 }}
          />
        </View>
        <View style={styles.contents}>
          <Interval height={20} />
          <Title text={'운동매니아'} font={FontStyle.bold.font20} />
          <Interval height={10} />
          <Title
            text={
              '운동을 참 좋아합니다\n구기종목, 스포츠 등등\n가리는 운동 없이 다 좋아합니다.'
            }
            font={FontStyle.regular.font14}
            style={{ textAlign: 'center' }}
          />
          <Interval height={30} />
          <OutLineButton text={'다시선택'} style={{ width: 140, height: 30 }} />
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
  infoBox: {
    backgroundColor: Color.Gray30,
    padding: 12,
    borderRadius: 5,
  },
  mainImage: {
    // flex: 0.5,
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  contents: {
    // flex: 0.5,
    alignItems: 'center',
  },
});

export default CharacteristicsChallenge;
