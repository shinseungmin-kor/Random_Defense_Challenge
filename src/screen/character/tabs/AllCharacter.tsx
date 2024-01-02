import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { Color } from '../../../statics/styles/Color';

const AllCharacter = () => {
  return (
    <SafeContainer style={styles.container}>
      <Text>AllCharacter</Text>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
});

export default AllCharacter;
