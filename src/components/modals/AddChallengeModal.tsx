import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';

interface IProps {
  toggleModal: () => void;
}

const AddChallengeModal = (props: IProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text>Modal is open!</Text>
        <TouchableOpacity onPress={props.toggleModal}>
          <Text>Close Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddChallengeModal;
