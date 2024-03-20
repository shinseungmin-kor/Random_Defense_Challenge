import {
  Dimensions,
  ScrollView,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
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
import { AccountService } from '~/service/AccountService';

const Home = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const screenWidth = Math.round(Dimensions.get('window').width);

  const PAGES1 = [
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

  const PAGES2 = [
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
  ];

  const getTest = async () => {
    const response = await AccountService.getText('1');
    if (response.status == 200) {
      console.log(`됬다네~ ${response.data}`);
    } else {
      console.log('안됬다네');
    }
  };

  useEffect(() => {
    getTest();
  }, []);

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
            pages={PAGES1}
            pageWidth={screenWidth - 32}
            gap={16}
          />
        </View>
        <SplitLine />
        <View style={styles.test3}>
          <Interval height={20} />
          <Title text={'진행중인 챌린지'} font={FontStyle.bold.font16} />
          <CurrentChallenge />
          <Interval height={20} />
        </View>
        <View style={styles.test4}>
          <SubBnnerCarousel gap={0} pages={PAGES2} pageWidth={screenWidth} />
        </View>
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
    justifyContent: 'space-between',
  },
  test2: {
    flex: 0.3,
  },
  test3: {
    flex: 0.55,
    marginHorizontal: 16,
  },
  test4: {
    flex: 0.15,
  },
});

export default Home;
