import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { Color } from '../../../statics/styles/Color';

const MyCharacter = () => {
  return (
    <SafeContainer style={styles.container}>
      <Text>MyCharacter</Text>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
});

export default MyCharacter;
