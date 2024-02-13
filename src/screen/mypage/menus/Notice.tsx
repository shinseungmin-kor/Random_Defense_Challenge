import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { Color } from '../../../statics/styles/Color';
import NavigaitonHeader from '../../commons/component/NavigaitonHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation';
import SplitLine from '../../../components/lines/SplitLine';

const Notice = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <SafeContainer style={styles.container}>
      <NavigaitonHeader
        title={'공지사항'}
        hasBackButton={true}
        onPressBackButton={() => {
          navigation.goBack();
        }}
      />
      <SplitLine />
      <ScrollView>
        <View></View>
      </ScrollView>
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
  },
  subContainer: {
    marginHorizontal: 16,
  },
});

export default Notice;
