import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {
  OTPInput,
  Button,
  TitleHeader,
} from '../../components/shared';

const VerifyOtp = ({navigation, route}) => {
  return (
    <SafeAreaView style={[styles.p16]}>
      <TitleHeader
        onPress={() => {
          navigation.navigate('NewPass');
        }}
      />

      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.mb12]}>Verify Code</Text>
        <Text style={[{color: colors.black400}, styles.ts14]}>
          Please enter the code we just to your email
        </Text>
        <Text style={[{color: colors.primary}, styles.ts15]}>
          mailto:example@gmail.com
        </Text>
      </View>
      <OTPInput OTPInputStyle={[styles.mt36]} />
      <Text
        style={[
          {color: colors.black400, textAlign: 'center'},
          styles.ts14,
          styles.mt40,
        ]}>
        Didn't receive OTP
      </Text>
      <Text
        style={[
          {
            color: colors.black,
            textAlign: 'center',
            textDecorationLine: 'underline',
          },
          styles.fwBold,
          styles.ts14,
          styles.mt8,
        ]}>
        Resend Code
      </Text>
      <Button label={'Verify'} buttonStyle={[styles.mt24]} />
    </SafeAreaView>
  );
};

export default VerifyOtp;
