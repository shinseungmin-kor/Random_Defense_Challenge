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

interface IProps {
  toggleModal: () => void;
}
const screenWidth = Math.round(Dimensions.get('window').width);

const AddChallengeModal = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text>Modal is open!</Text>
        <TouchableOpacity onPress={props.toggleModal}>
          <Text>Close Modal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.background}></View>
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
    padding: 20,
    position: 'absolute',
    zIndex: 2,
  },
});

export default AddChallengeModal;
