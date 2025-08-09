import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../assets/styles';
import {
  TitleInput,
  CheckBox,
  Button,
  Logo,
  OTPInput,
  TitleHeader,
} from '../../components/shared';
import colors from '../../assets/colors';
import icons from '../../assets/icons';
const CreateAccount = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.p16]}>
      <View style={[{alignItems: 'center'}, styles.mt10]}>
        <Text style={[styles.h1, styles.mb12]}>Create Account</Text>
        <Text
          style={[
            {color: colors.black400, textAlign: 'center'},
            styles.ts16,
            styles.mb12,
          ]}>
          fill your information below or register with your social account
        </Text>
      </View>
      <TitleInput title="Name" placeholder="Name" />
      <TitleInput title="Email" placeholder="example@gmail.com" />
      <TitleInput title="Password" secureTextEntry="true" />
      <CheckBox label="Agree with Terms & Condition" />
      <Button label="Sign up" onPress={() => navigation.navigate('Profile')} />
      <View
        style={[
          styles.mt12,
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
          },
        ]}>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
            },
            styles.mv20,
          ]}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.grey100,
            }}
          />
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 14,
              color: '#787675',
              textAlign: 'center',
            }}>
            Or sign up with
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.grey200,
            }}
          />
        </View>
      </View>
      <Logo imageUrl={icons.google} stylImage={[styles.icon24]} />
      <View
        style={[
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          },
          styles.mt20,
        ]}>
        <Text style={[styles.ts12]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text
            style={[
              {color: colors.primary, textDecorationLine: 'underline'},
              styles.fwBold,
              styles.ts12,
            ]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
