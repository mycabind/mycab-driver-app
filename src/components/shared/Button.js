import React from 'react';
import {TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const {height , width} = Dimensions.get("window")
const wp = percentage => (width * percentage) / 100;

const Button = ({label, onPress, style, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          opacity: disabled ? 0.6 : 1,
          height : height * 0.06,
          width  : "auto"
        },
        style,
      ]}
      activeOpacity={0.8}
      disabled={disabled}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:   'center',
          width: '100%',
          paddingVertical: 6,
        }}>
        <Text
          style={[
            styles.ts17,
            styles.fwBold,
            {color: colors.white, textAlign: 'center' , fontSize : wp(4.5)},
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;



