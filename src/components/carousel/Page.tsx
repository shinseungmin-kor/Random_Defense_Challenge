import { View, Text, ViewStyle } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Color } from '../../statics/styles/Color';

interface IPage {
  item: { num: any; color: any };
  style: ViewStyle;
}

const Page = (props: IPage) => {
  const PageNum = styled.Text``;

  return (
    <PageItem color={props.item.color} style={props.style}>
      <PageNum>{props.item.num}</PageNum>
    </PageItem>
  );
};

const PageItem = styled.View<{ color: any }>`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export default Page;
