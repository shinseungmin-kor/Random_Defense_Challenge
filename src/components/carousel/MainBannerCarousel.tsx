import { FlatList } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import Page from './Page';

interface ICarousel {
  gap: number;
  pages: any[];
  pageWidth: number;
}

const MainBannerCarousel = (props: ICarousel) => {
  const [page, setPage] = useState(0);

  const renderItem = (item: any) => {
    return (
      <Page
        item={item}
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
      <IndicatorWrapper>
        {Array.from({ length: props.pages.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

const Container = styled.View`
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: ${(props) => (props.focused ? '#262626' : '#dfdfdf')};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export default MainBannerCarousel;
