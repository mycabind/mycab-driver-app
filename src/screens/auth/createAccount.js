import React from 'react';
import {View, Text, Pressable, SafeAreaView, TouchableOpacity} from 'react-native';
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
      <View style={[{alignItems: 'center'}, styles.mt24]}>
        <Text style={[styles.h1, styles.mb12]}>Create Account</Text>
        <Text
          style={[
            {color: colors.black400, textAlign: 'center'},
            styles.pdh48,
            styles.ts14,
            styles.mb12,
          ]}>
          fill your information below or register with your social account
        </Text>
      </View>
      <TitleInput
        title="Name"
        placeholder="Name"
        style={[styles.mb12, styles.mt20]}
      />
      <TitleInput
        title="Email"
        placeholder="example@gmail.com"
        style={[styles.mb12]}
      />
      <TitleInput title="Password" secureTextEntry="true" />
      <CheckBox label="Agree with Terms & Condition" />
      <Button
        label="Sign up"
        onPress={() => navigation.navigate('ProfileSetup')}
        style={[styles.mt20]}
      />
      <View
        style={[
          styles.mt48,
          styles.mb32,
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
        <Text style={[styles.ts14, styles.mr8]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <TouchableOpacity>
            <Text
              style={[
                {color: colors.primary, textDecorationLine: 'underline'},
                styles.fwBold,
                styles.ts14,
              ]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
