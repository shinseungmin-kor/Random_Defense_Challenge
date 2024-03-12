import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';

const CancelButton = () => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title text={'취소'} font={FontStyle.bold.font16} />
    </TouchableOpacity>
  );
};

export default CancelButton;
