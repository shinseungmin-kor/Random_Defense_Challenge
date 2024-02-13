import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { ImageType } from '../../types/ImageType';

interface IProps {
  bucket: ImageType.ImageBucketType;
  images: Array<ImageType.ImageModel>;
  label?: string;
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  count?: number;
  isValid?: boolean;
  deniedImages?: Array<ImageType.ImageModel>;
  representation?: boolean;
  requiredCount?: number;
  hasProfileGuideModal?: boolean;
  onSorted: (images: Array<ImageType.ImageModel>) => void;
  onUploaded: (image: ImageType.ImageModel) => void;
  onDeleted: (image: ImageType.ImageModel) => void;
  isDarkMode?: boolean;
}

const UploadImageForm = (props: IProps) => {
  const {
    isDarkMode = false,
    bucket,
    label,
    images,
    style,
    count,
    placeholder,
    isValid,
    deniedImages = [],
    representation,
    requiredCount,
    hasProfileGuideModal,
    onSorted,
    onUploaded,
    onDeleted,
  } = props;

  return (
    <View>
      <Text>UploadImageForm</Text>
    </View>
  );
};

export default UploadImageForm;
