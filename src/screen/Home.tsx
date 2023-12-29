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
      color: Color.Gold50,
    },
    {
      num: 2,
      color: Color.Blue50,
    },
    {
      num: 3,
      color: Color.Red50,
    },
  ];

  return (
    <SafeContainer style={styles.container}>
      <View style={styles.test1}>
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
        <View style={styles.test2}></View>
        <View style={styles.test3}></View>
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
    backgroundColor: Color.Blue50,
    justifyContent: 'space-between',
  },
  test2: {
    height: 50,
    backgroundColor: Color.Red50,
  },
  test3: {
    height: 50,
    backgroundColor: Color.Gold50,
  },
});

export default Home;
