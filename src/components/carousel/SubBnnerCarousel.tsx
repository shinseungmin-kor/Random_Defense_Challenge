import { View, Text, FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import React, { useState } from 'react';
import Page from './Page';

interface IProps {
  gap: number;
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
    <View style={styles.container}>
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
      <View style={styles.indicatorWrapper}>
        {Array.from({ length: props.pages.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    top: 20,
    right: 10,
  },
});

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: ${(props) => (props.focused ? '#262626' : '#dfdfdf')};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

export default SubBnnerCarousel;
