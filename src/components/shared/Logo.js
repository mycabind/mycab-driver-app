import React from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const { width } = Dimensions.get('window');
const wp = percentage => (width * percentage) / 100;

const Logo = ({ imageUrl, style, imageStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.mt24,
        {
          alignSelf: 'center',
          borderWidth:  1,
          borderRadius: 50,
          borderColor: colors.grey200,
          padding: wp(2),
        },
        style,
      ]}
    >
      <Image
        source={imageUrl}
        style={[styles.icon32,imageStyle, {resizeMode : "contain"}]}
      />
    </TouchableOpacity>
  );
};

export default Logo;
