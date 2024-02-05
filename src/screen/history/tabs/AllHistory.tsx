import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../statics/styles/Color';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { HistoryDummy } from '../../../dummy/HistoryDummy';
import HistoryContainer from '../../../components/container/HistoryContainer';
import Interval from '../../../components/lines/Interval';

interface IProps {
  isDarkMode?: [];
}

const AllHistory = (props: IProps) => {
  return (
    <SafeContainer style={styles.container}>
      <Interval height={20} />
      <ScrollView>
        {HistoryDummy.map((el) => {
          return (
            <HistoryContainer
              key={el.key}
              title={el.title}
              content={el.content}
              isSuccess={el.isSuccess}
              imageUrl={el.imageUrl}
            />
          );
        })}
      </ScrollView>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
});

export default AllHistory;
