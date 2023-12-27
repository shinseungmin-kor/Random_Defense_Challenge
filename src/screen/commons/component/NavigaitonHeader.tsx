import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import FontStyle from '../../../statics/styles/Font';
import { Color } from '../../../statics/styles/Color';
import Title from '../../../components/text/Typography';
import { IconBlackLeftArrow } from '../../../assets/vector';

interface IProps {
  isDarkMode?: boolean;
  title?: string;
  hasBackButton?: boolean;
  onPressBackButton?: () => void;
  headerLeft?: () => React.ReactNode;
  headerRight?: () => React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const NavigaitonHeader = ({
  isDarkMode,
  title,
  hasBackButton = true,
  onPressBackButton,
  headerLeft,
  headerRight,
  style,
}: IProps) => {
  return (
    <HeaderContainer style={[{ justifyContent: 'space-between' }, style]}>
      <View style={{ flexDirection: 'row' }}>
        {hasBackButton && (
          <TouchableOpacity onPress={onPressBackButton}>
            <IconBlackLeftArrow
              fill={isDarkMode ? Color.Gray10 : undefined}
              width={20}
              height={20}
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
        )}
        {headerLeft && headerLeft()}
        {!!title && (
          <Title
            font={FontStyle.bold.font18}
            color={isDarkMode ? Color.Gray10 : undefined}
            text={title}
          />
        )}
      </View>
      <View>{headerRight && headerRight()}</View>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  height: 60,
  paddingHorizontal: 16,
});

export default NavigaitonHeader;
