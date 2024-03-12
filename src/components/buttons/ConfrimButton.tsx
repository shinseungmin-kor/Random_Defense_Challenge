import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';
import { Color } from '../../statics/styles/Color';

const ConfrimButton = () => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: Color.Gray80,
        backgroundColor: Color.Gray80,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title
        text={'뽑기'}
        font={FontStyle.bold.font16}
        style={{ color: Color.White }}
      />
    </TouchableOpacity>
  );
};

export default ConfrimButton;
