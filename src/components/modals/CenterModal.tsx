import React, { FunctionComponent } from 'react';
import { ColorValue, SafeAreaView, TouchableOpacity, View } from 'react-native';
import BaseModal from './BaseModal';
import { Color } from '../../statics/styles/Color';
import { Close } from '../../assets/vector';

interface IProps {
  show: boolean;
  isSafeMode?: boolean;
  backgroundColor?: ColorValue;
  children?: React.ReactNode;
  onClose?: () => void;
  onModalHide?: () => void;
}

const CenterModal: FunctionComponent<IProps> = (props: IProps) => {
  const {
    show,
    isSafeMode = true,
    backgroundColor = Color.White,
    children,
    onClose,
    onModalHide,
  } = props;

  return (
    <BaseModal
      isVisible={show}
      onClose={onClose}
      onModalHide={onModalHide}
      style={{ alignItems: 'center' }}
    >
      {isSafeMode ? (
        <SafeAreaView
          style={{
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            maxHeight: '90%',
            borderRadius: 5,
            width: 300,
          }}
        >
          {children}
          <TouchableOpacity
            style={{ position: 'absolute', top: -36, right: 16, zIndex: 1 }}
            onPress={onClose}
          >
            <Close fill={Color.Gray10} width={20} height={20} />
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: backgroundColor,
            maxHeight: '90%',
          }}
        >
          {children}
          <TouchableOpacity
            style={{ position: 'absolute', top: -36, right: 16, zIndex: 1 }}
            onPress={onClose}
          >
            <Close fill={Color.Gray10} width={20} height={20} />
          </TouchableOpacity>
        </View>
      )}
    </BaseModal>
  );
};

export default CenterModal;
