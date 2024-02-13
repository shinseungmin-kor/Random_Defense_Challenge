import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';

const MultipleLineTextBox = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Title text={'제목'} font={FontStyle.bold.font16} style={styles.title} />
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="여기에 입력하세요"
        placeholderTextColor="gray"
        multiline={true}
        numberOfLines={6}
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
    height: 150, // 원하는 높이로 조정 가능
    borderColor: 'gray',
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top', // 텍스트를 상단 정렬하도록 설정
    borderRadius: 5,
  },
});

export default MultipleLineTextBox;
