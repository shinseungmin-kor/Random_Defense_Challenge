import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';

const SingleLineTextBox = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Title
        text={'이메일*'}
        font={FontStyle.bold.font16}
        style={styles.title}
      />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="여기에 입력하세요"
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default SingleLineTextBox;
