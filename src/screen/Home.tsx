import { Dimensions, View } from 'react-native';
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

const Home = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const screenWidth = Math.round(Dimensions.get('window').width);

  const PAGES = [
    {
      num: 1,
      color: Color.Blue40,
    },
    {
      num: 2,
      color: Color.Blue10,
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
    <SafeContainer style={{ backgroundColor: Color.White }}>
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
      <MainBannerCarousel
        gap={16}
        offset={0}
        pages={PAGES}
        pageWidth={screenWidth - 32}
      />
      <Interval height={20} />
      <SplitLine />
      <View>
        <Title text={'진행중인 챌린지'} font={FontStyle.bold.font18} />
      </View>
      <SubBnnerCarousel />
    </SafeContainer>
  );
};

export default Home;
