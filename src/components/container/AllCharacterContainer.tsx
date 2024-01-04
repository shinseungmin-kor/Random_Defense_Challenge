import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Color } from '../../statics/styles/Color';
import Title from '../text/Typography';
import FontStyle from '../../statics/styles/Font';
import Interval from '../lines/Interval';

interface IPorps {
  title: string;
  imageUrl: string;
}

const AllCharacterContainer = (props: IPorps) => {
  const { title, imageUrl } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ width: 80, height: 80, borderRadius: 4 }}
      />
      <Interval height={5} />
      <Title text={title} font={FontStyle.regular.font14} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 110,
    alignItems: 'center',
  },
});

export default AllCharacterContainer;
