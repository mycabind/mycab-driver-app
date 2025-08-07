import React from 'react';
import { TouchableOpacity, Text,  View, Image } from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const Button = ({ label, onPress, buttonStyle, disabled, showIcon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.primary,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: showIcon ? 8 : 25,
          opacity: disabled ? 0.6 : 1,
        },
        styles.pdh20,
        styles.mv12,
        showIcon ? styles.pdv4  : styles.pdv8 ,
        buttonStyle,
      ]}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: showIcon ? 'space-between' : 'center',
          width: showIcon ? '80%' : '100%',
          paddingVertical: 6,
        }}
      >
        <Text
          style={[
            styles.ts18,
            styles.fwBold,
            styles.mr12,
            { color: colors.white, textAlign: 'center' },
          ]}
        >
          {label}
        </Text>
        {showIcon && (
          <Image source={icons.arrow_right} style={[styles.icon36]} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
