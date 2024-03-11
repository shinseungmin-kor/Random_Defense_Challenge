import { View, Text, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import Title from '../../components/text/Typography';
import FontStyle from '../../statics/styles/Font';
import { OutLineButton } from '../../components/buttons/BasicButton';
import { Color } from '../../statics/styles/Color';
import Interval from '../../components/lines/Interval';
import AddChallengeModal from '../../components/modals/AddChallengeModal';

const CurrentChallenge = () => {
  const [hasChallenge, setHasChallenge] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {hasChallenge ? (
        <View>
          <Text>챌린지가 있어요</Text>
        </View>
      ) : (
        <View>
          <Title
            text={'진행중인 챌린지가 없어요'}
            font={FontStyle.bold.font16}
          />
          <Interval height={20} />
          <OutLineButton text={'도전하러가기 ->'} onPress={toggleModal} />
        </View>
      )}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <AddChallengeModal toggleModal={toggleModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CurrentChallenge;
