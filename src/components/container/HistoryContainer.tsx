import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Color } from '../../statics/styles/Color';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';

interface IProps {
  title: string;
  content: string;
  isSuccess: boolean;
  imageUrl: string;
}

const HistoryContainer = (props: IProps) => {
  const { title, content, isSuccess, imageUrl } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 60, height: 60, borderRadius: 4 }}
        />
        <View style={styles.content}>
          <Title text={title} font={FontStyle.bold.font16} />
          <Title
            text={content}
            font={FontStyle.regular.font14}
            style={{ width: 200 }}
          />
        </View>
        <View style={styles.result}>
          {isSuccess ? (
            <Title text={'성공'} font={FontStyle.bold.font16} />
          ) : (
            <Title text={'패스'} font={FontStyle.bold.font16} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: Color.White,
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    height: 80,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderColor: Color.Gray60,
  },
  content: {
    marginLeft: 10,
  },
  result: {
    flex: 1,
    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HistoryContainer;
