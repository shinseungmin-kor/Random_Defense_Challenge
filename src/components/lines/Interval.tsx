import { View } from 'react-native';
import React from 'react';

interface IProps {
  height: number;
}

const Interval = (props: IProps) => {
  return <View style={{ height: props.height }} />;
};

export default Interval;
