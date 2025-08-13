import react, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TitleInput, Button, TitleHeader, Logo} from '../../components/shared';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';

const OptionCard = ({label, onPress, style}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          borderRadius: 12,
          marginTop: 8,
          borderWidth: 0.5,
          borderColor: colors.grey100,
          width: '95%',
          alignSelf: 'center',
        },
        styles.p12,
        style,
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
        <Text style={[styles.ts16, {color: colors.black}]}>{label}</Text>
        <Image
          source={icons.right_forward}
          style={[
            styles.icon24,
            {marginLeft: 'auto', tintColor: colors.grey600},
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const ProfileSetup = () => {
  const navigation = useNavigation();

  const requiredSteps = [
    {
      name: 'Profile Picture',
      props: 'ProfilePicture',
    },
    {
      name: 'Bank Account Details',
      props: 'BankDetails',
    },
    {
      name: 'Driving Details',
      props: 'DrivingDetails',
    },
    {
      name: 'Goverment IDs',
      props: 'GovermentIDs',
    },
  ];

  return (
    <SafeAreaView
      style={[styles.p16, {flex: 1, backgroundColor: colors.white}]}>
      <TitleHeader
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View style={[styles.mt40]}>
        <Text
          style={[
            styles.h2,
            {
              color: colors.black,
              fontSize: 22,
              fontWeight: '400',
              textAlign: 'center',
            },
          ]}>
          Welcome Esther!
        </Text>

        <Text
          style={[
            styles.h5,
            {color: colors.black, fontWeight: '500', fontSize: 18},
            styles.mt24,
          ]}>
          Requires steps
        </Text>

        <View style={[styles.mt4]}>
          {requiredSteps.map((item, index) => {
            return (
              <OptionCard
                key={index}
                label={item.name}
                style={{marginBottom: 8}}
                onPress={() =>
                  navigation.navigate('UploadDocument', {
                    documentType: item.props,
                  })
                }
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetup;
