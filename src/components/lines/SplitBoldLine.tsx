import { View, Text } from 'react-native';
import React from 'react';
import { Color } from '../../statics/styles/Color';

const SplitBoldLine = () => {
  return (
    <View
      style={{
        borderTopWidth: 0.4,
        borderTopColor: Color.Gray50,
        borderBottomColor: Color.Gray20,
        borderBottomWidth: 5,
      }}
    />
  );
};

export default SplitBoldLine;
