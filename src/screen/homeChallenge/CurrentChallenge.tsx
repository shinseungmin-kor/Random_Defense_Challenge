import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import Title from '../../components/text/Typography';
import FontStyle from '../../statics/styles/Font';
import { OutLineButton } from '../../components/buttons/BasicButton';

const CurrentChallenge = () => {
  const [hasChallenge, setHasChallenge] = useState(false);

  return (
    <Container>
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
          <OutLineButton text={'도전하러가기 ->'} />
        </View>
      )}
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export default CurrentChallenge;
