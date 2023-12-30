import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import FontStyle from '../../statics/styles/Font';
import { Color } from '../../statics/styles/Color';
import Title from '../text/Typography';

type SizeType = 'lg' | 'md' | 'sm';

export interface IProps {
  text: string;
  disabled?: boolean;
  isFullfil?: boolean;
  hasBorder?: boolean;
  type?: SizeType;
  svg?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

const getHeight = (type: SizeType): number => {
  let height = 50;
  let font = FontStyle.bold.font14;
  switch (type) {
    case 'md':
      height = 35;
      font = FontStyle.bold.font12;
      break;
    case 'sm':
      height = 25;
      font = FontStyle.bold.font10;
      break;
    case 'lg':
    default:
      break;
  }

  return height;
};

const getFont = (type: SizeType) => {
  let font = FontStyle.bold.font16;
  switch (type) {
    case 'md':
      font = FontStyle.bold.font14;
      break;
    case 'sm':
      font = FontStyle.bold.font12;
      break;
    case 'lg':
    default:
      break;
  }

  return font;
};

const PrimaryButton = (props: IProps) => {
  const {
    onPress,
    onPressIn,
    onPressOut,
    text,
    isFullfil = true,
    disabled,
    style,
    type = 'lg',
    children,
  } = props;

  let height = getHeight(type);
  let font = getFont(type);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          height: height,
          backgroundColor: disabled
            ? Color.Gray40
            : isFullfil
            ? Color.Blue50
            : Color.Gray10,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        style,
      ]}
    >
      <Title
        font={font}
        color={
          disabled ? Color.Gray10 : isFullfil ? Color.Gray10 : Color.MainBlue
        }
        text={text}
        style={{
          textAlign: 'center',
        }}
      />
      {children}
    </TouchableOpacity>
  );
};

const OutLineButton = (props: IProps) => {
  const {
    onPress,
    text,
    isFullfil = true,
    disabled,
    style,
    type = 'md',
    children,
  } = props;

  let height = getHeight(type);
  let font = getFont(type);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // disabled={disabled}
      onPress={onPress}
      style={[
        {
          height: height,
          backgroundColor: Color.White,
          borderWidth: 0.5,
          borderColor: Color.Gray80,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        },
        style,
      ]}
    >
      <Title
        font={font}
        color={Color.Gray90}
        text={text}
        style={{
          textAlign: 'center',
        }}
      />
      {children}
    </TouchableOpacity>
  );
};

const LoginButton = () => {
  return (
    <View>
      <Text>LoginButton</Text>
    </View>
  );
};

export { PrimaryButton, OutLineButton, LoginButton };
