import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import NavigaitonHeader from '../../commons/component/NavigaitonHeader';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation';
import { Color } from '../../../statics/styles/Color';
import Interval from '../../../components/lines/Interval';
import Title from '../../../components/text/Typography';
import FontStyle from '../../../statics/styles/Font';
import SplitLine from '../../../components/lines/SplitLine';
import CategoryChallengContainer from '../../../components/container/CategoryChallengContainer';
import { CategoryDummy } from '../../../dummy/CategoryDummy';
import CenterModal from '../../../components/modals/CenterModal';

const CategoryChallenge = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'카테고리별 챌린지'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
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
        <Interval height={20} />
        <ScrollView>
          {CategoryDummy.map((el) => {
            return (
              <CategoryChallengContainer
                key={el.key}
                title={el.title}
                content={el.content}
                isSuccess={el.isSuccess}
                imageUrl={el.imageUrl}
                onPress={toggleModal}
              />
            );
          })}
        </ScrollView>
      </View>
      <CenterModal
        show={isModalVisible}
        onClose={toggleModal}
        children={
          <View style={styles.submitModal}>
            <Title text={'asdfasdf'} font={FontStyle.bold.font16} />
          </View>
        }
      />
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
  submitModal: {
    height: 200,
  },
});

export default CategoryChallenge;
