import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import Page from './Page';

interface IProps {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

const SubBnnerCarousel = (props: IProps) => {
  const [page, setPage] = useState(0);

  const renderItem = (item: any) => {
    return (
      <Page
        item={item.item}
        style={{ width: props.pageWidth, marginHorizontal: props.gap / 2 }}
      />
    );
  };

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (props.pageWidth + props.gap),
    );
    setPage(newPage);
  };

  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: props.gap / 2,
        }}
        data={props.pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={props.pageWidth + props.gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

const Container = styled.View`
  height: 13%;
`;

export default SubBnnerCarousel;
