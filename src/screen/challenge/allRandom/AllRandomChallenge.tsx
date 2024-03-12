import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { SetStateAction, useState } from 'react';
import NavigaitonHeader from '../../commons/component/NavigaitonHeader';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation';
import Title from '../../../components/text/Typography';
import FontStyle from '../../../statics/styles/Font';
import { Color } from '../../../statics/styles/Color';
import Interval from '../../../components/lines/Interval';
import SplitLine from '../../../components/lines/SplitLine';
import CenterModal from '../../../components/modals/CenterModal';
import ConfrimButton from '../../../components/buttons/ConfrimButton';
import CancelButton from '../../../components/buttons/CancelButton';

const AllRandomChallenge = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const [selected, setSelected] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const screenWidth = Math.round(Dimensions.get('window').width) - 32;

  const buttonText = ['아주쉬움', '쉬움', '보통', '어려움', '아주어려움'];

  const handlePress = (number: string) => {
    setSelected(number);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const CircleButton = ({ onPress }: { onPress: any }) => {
    return (
      <TouchableOpacity style={styles.circleButton} onPress={onPress}>
        <Title
          text={'뽑기'}
          font={FontStyle.bold.font20}
          style={{ color: Color.White }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'완전랜덤 챌린지'}
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
        <Interval height={15} />
        <Title text={'난이도 선택'} font={FontStyle.regular.font14} />
        <Interval height={15} />
        <View style={styles.buttonContainer}>
          {buttonText.map((number) => (
            <TouchableOpacity
              key={number}
              style={[
                styles.button,
                {
                  width: screenWidth / 5,
                  backgroundColor:
                    selected === number ? Color.Gray50 : Color.White,
                },
              ]}
              onPress={() => handlePress(number)}
            >
              <Text style={styles.buttonText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Interval height={70} />
        <View style={styles.circleButtonContainer}>
          <View style={styles.bigCircle}>
            {[...Array(8)].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.divider,
                  {
                    transform: [{ rotate: `${45 * index}deg` }],
                  },
                ]}
              />
            ))}
          </View>
          <View style={styles.centerButtonContainer}>
            <CircleButton onPress={toggleModal} />
          </View>
        </View>
      </View>
      <CenterModal
        show={isModalVisible}
        onClose={toggleModal}
        children={
          <View style={styles.submitModal}>
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Title text={'어려움'} font={FontStyle.bold.font24} />
                <Title
                  text={' 난이도를 선택했습니다.'}
                  font={FontStyle.bold.font16}
                />
              </View>
              <Title
                text={'새 챌린지를 뽑으시겠어요?'}
                font={FontStyle.bold.font16}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <CancelButton />
              <Interval width={10} />
              <ConfrimButton />
            </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 345,
    height: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    borderWidth: 0.5,
    borderColor: Color.Gray80,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  circleButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'relative',
  },
  bigCircle: {
    width: 270,
    height: 270,
    borderRadius: 135,
    borderWidth: 1,
    borderColor: Color.Gray80,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 270,
    height: 0,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  centerButtonContainer: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitModal: {
    height: 180,
    padding: 20,
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AllRandomChallenge;
