import { View, Text } from 'react-native';
import React from 'react';
import StyleSheet from 'styled-components/dist/sheet/Sheet';
import { Color } from '../../statics/styles/Color';

// 화면 분할 라인
const SplitLine = () => {
  return (
    <View
      style={{
        borderBottomColor: Color.Gray30,
        borderBottomWidth: 1,
      }}
    />
  );
};

export default SplitLine;
