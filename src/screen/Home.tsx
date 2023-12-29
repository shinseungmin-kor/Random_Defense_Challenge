import {
  Dimensions,
  ScrollView,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import { SafeContainer } from '../components/container/SafeContainer';
import { Color } from '../statics/styles/Color';
import NavigaitonHeader from './commons/component/NavigaitonHeader';
import MyPageButton from '../components/buttons/MypageButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../navigation';
import SplitLine from '../components/lines/SplitLine';
import MainBannerCarousel from '../components/carousel/MainBannerCarousel';
import Title from '../components/text/Typography';
import FontStyle from '../statics/styles/Font';
import SubBnnerCarousel from '../components/carousel/SubBnnerCarousel';
import Interval from '../components/lines/Interval';
import CurrentChallenge from './homeChallenge/CurrentChallenge';

const Home = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const screenWidth = Math.round(Dimensions.get('window').width);

  const PAGES = [
    {
      num: 1,
      color: '#86E3CE',
    },
    {
      num: 2,
      color: '#D0E6A5',
    },
    {
      num: 3,
      color: '#FFDD94',
    },
    {
      num: 4,
      color: '#FA897B',
    },
    {
      num: 5,
      color: '#CCABD8',
    },
  ];

  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'랜덤챌린지디펜스'}
        hasBackButton={false}
        headerRight={() => {
          return (
            <View>
              <MyPageButton
                onPress={() => {
                  navigation.navigate('Mypage');
                }}
              />
            </View>
          );
        }}
      />
      <View style={styles.test1}>
        <View style={styles.test2}>
          <MainBannerCarousel
            offset={36}
            pages={PAGES}
            pageWidth={screenWidth - (16 + 36) * 2}
            gap={16}
          />
        </View>
        <View style={styles.test3}>
          <Title text={'진행중인 챌린지'} font={FontStyle.bold.font18} />
        </View>
        <View style={styles.test4}></View>
      </View>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
  scrollView: {
    marginHorizontal: 16,
  },
  test1: {
    flex: 1,
    backgroundColor: Color.Blue50,
    justifyContent: 'space-between',
  },
  test2: {
    flex: 0.3,
    backgroundColor: Color.Red50,
  },
  test3: {
    flex: 0.55,
    backgroundColor: Color.Gold50,
  },
  test4: {
    flex: 0.15,
    backgroundColor: Color.Gold10,
  },
});

export default Home;
