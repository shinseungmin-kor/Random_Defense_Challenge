import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';
import { Color } from '../../statics/styles/Color';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation';

interface IProps {
  toggleModal: () => void;
}
const screenWidth = Math.round(Dimensions.get('window').width);

const AddChallengeModal = (props: IProps) => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.allRandom}
          onPress={() => {
            props.toggleModal();
            navigation.navigate('AllRandomChallenge');
          }}
        >
          <Title text={'완전랜덤챌린지'} font={FontStyle.bold.font14} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.characteristics}
          onPress={() => {
            props.toggleModal();
            navigation.navigate('CharacteristicsChallenge');
          }}
        >
          <Title text={'특성기반챌린지'} font={FontStyle.bold.font14} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() => {
            props.toggleModal();
            navigation.navigate('CategoryChallenge');
          }}
        >
          <Title text={'카테고리별챌린지'} font={FontStyle.bold.font14} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.background}
        onPress={props.toggleModal}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.Gray100,
    opacity: 0.8,
    position: 'absolute',
    zIndex: 1,
  },
  modal: {
    width: screenWidth,
    height: 500,
    backgroundColor: Color.White,
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
  },
  allRandom: {
    flex: 1,
    backgroundColor: Color.Red50,
  },
  characteristics: {
    flex: 1,
    backgroundColor: Color.Blue50,
  },
  category: {
    flex: 1,
    backgroundColor: Color.Gray50,
  },
});

export default AddChallengeModal;
