import React, { FunctionComponent, useRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Modal, { Direction } from 'react-native-modal';
import { Color } from '../../statics/styles/Color';

interface IProps {
  isVisible: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onModalShow?: () => void;
  onModalHide?: () => void;
  onClose?: () => void;
  propagateSwipe?: boolean;
  swipeDirection?: Direction | Direction[] | undefined;
}

const BaseModal: FunctionComponent<IProps> = (props: IProps) => {
  const {
    isVisible,
    style,
    children,
    onModalShow,
    onModalHide,
    onClose,
    propagateSwipe = true,
    swipeDirection = 'down',
  } = props;

  return (
    <Modal
      propagateSwipe={propagateSwipe}
      swipeDirection={swipeDirection}
      onSwipeComplete={onClose}
      isVisible={isVisible}
      onBackdropPress={onClose}
      onModalShow={onModalShow}
      onModalHide={onModalHide}
      backdropColor={Color.Gray110}
      backdropOpacity={0.8}
      style={style}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
