import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { Color } from '../../../statics/styles/Color';
import Title from '../../../components/text/Typography';
import FontStyle from '../../../statics/styles/Font';
import Interval from '../../../components/lines/Interval';
import { OutLineButton } from '../../../components/buttons/BasicButton';

const MyCharacter = () => {
  return (
    <SafeContainer style={styles.container}>
      <View style={styles.mainImage}>
        <Image
          source={{
            uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjhfMjk5/MDAxNjE5NTg0OTQ4MjQx.jtPPY6-Uh0hUz91LOrQYI5QMQASAsPftdAuRYZBauGog.sB5FTvDIyHf4mzlgpNI6uW3LDSI3zbj5ZC5ODZywqusg.JPEG.ni1203/photo-1517963879433-6ad2b056d712.jpg?type=w800',
          }}
          style={{ width: 190, height: 230, borderRadius: 4 }}
        />
      </View>
      <View style={styles.contents}>
        <Interval height={20} />
        <Title text={'운동매니아'} font={FontStyle.bold.font20} />
        <Interval height={10} />
        <Title
          text={
            '운동을 참 좋아합니다\n구기종목, 스포츠 등등\n가리는 운동 없이 다 좋아합니다.'
          }
          font={FontStyle.regular.font14}
          style={{ textAlign: 'center' }}
        />
        <Interval height={30} />
        <OutLineButton text={'다시선택'} style={{ width: 140, height: 30 }} />
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  mainImage: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contents: {
    flex: 0.5,
    alignItems: 'center',
  },
});

export default MyCharacter;
