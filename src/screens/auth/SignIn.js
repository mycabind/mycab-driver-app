import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TitleInput, Button, Logo, TitleHeader} from '../../components/shared';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import Home from '../home';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.p16]}>
      <TitleHeader
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}
      />

      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1]}>Sign In</Text>
        <Text style={[styles.ts16]}>Hi! Welcome back ,you've been missed</Text>
      </View>
      <TitleInput title="Email" placeholder="example@gmail.com" />
      <TitleInput title="Password" secureTextEntry="false" />
      <TouchableOpacity onPress={() => navigation.navigate('NewPass')}>
        <Text
          style={[
            {
              textAlign: 'right',
              color: colors.primary,
              textDecorationLine: 'underline',
            },
          ]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <Button
        label="Sign In"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
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
      <Logo image={icons.google} />
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
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text
            style={[
              {color: colors.primary, textDecorationLine: 'underline'},
              styles.fwBold,
              styles.ts12,
              styles.ml4,
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
