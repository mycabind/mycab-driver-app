import react from 'react';
import {SafeAreaView, Text, TouchableOpacity,View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TitleInput, Button, TitleHeader} from '../../components/shared';
import styles from '../../assets/styles';
import colors from '../../assets/colors';


const NewPass = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.p16]}>
      <TitleHeader onPress={()=>{navigation.navigate('SignIn')}}/>
      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.mb12]}>New Password</Text>
        <Text
          style={[
            {color: colors.black400, textAlign: 'center'},
            styles.ts16,
            styles.mb12,
          ]}>
          fill your new password must be different from previously used passwords.
        </Text>
      </View>
      <TitleInput
        title="New Password"
        secureTextEntry="false"
      />
      <TitleInput
        title="Confirm Password"
        secureTextEntry="false"
      />
      <Button label="Create New Password" onPress={()=>navigation.navigate('VerifyOtp')} />
    </SafeAreaView>
  );
};
export default NewPass;
