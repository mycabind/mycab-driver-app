import React, { useState } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const { width, height } = Dimensions.get('window');

const wp = percentage => (width * percentage) / 100;   
const hp = percentage => (height * percentage) / 100; 

const OTPInput = ({ OTPInputStyle }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const refInputs = {};

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      refInputs[`input-${index + 1}`]?.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      refInputs[`input-${index - 1}`]?.focus();
    }
  };

  return (
    <View
      style={[
        {
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        styles.fdRow,
        styles.mh20,
        OTPInputStyle,
      ]}
    >
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          value={digit}
          onChangeText={text => handleChange(text, index)}
          keyboardType="numeric"
          maxLength={1}
          onKeyPress={event => handleKeyPress(event, index)}
          style={[
            {
              width: wp(12),             
              height: hp(6),             
              borderWidth: 1,
              borderColor: colors.grey80,
              borderRadius: 10,        
              textAlign: 'center',
              fontSize: wp(5),            
              backgroundColor: colors.smoke,
              color: colors.black,
            },
          ]}
          ref={input => (refInputs[`input-${index}`] = input)}
        />
      ))}
    </View>
  );
};

export default OTPInput;

