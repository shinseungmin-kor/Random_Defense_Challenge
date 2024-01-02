import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { Color } from '../../../statics/styles/Color';

const GivenUp = () => {
  return (
    <SafeContainer style={styles.container}>
      <Text>포기한</Text>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
});

export default GivenUp;
