import { View } from 'react-native';
import React from 'react';

interface IProps {
  width?: number;
  height?: number;
}

const Interval = (props: IProps) => {
  return <View style={{ width: props.width, height: props.height }} />;
};

export default Interval;
