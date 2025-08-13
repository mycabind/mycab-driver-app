import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Button, TitleHeader} from '../../components/shared';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import colors from '../../assets/colors';

const {width, height} = Dimensions.get('window');
const wp = percentage => (width * percentage) / 100;
const hp = percentage => (height * percentage) / 100;

const ProfilePictureScreen = ({route, navigation}) => {
  const [uploadPicText, setUploadPicText] = useState('');
  const instructions = [
    {id: 1, text: 'Please Upload a Clear Selfie'},
    {id: 2, text: 'The Selfie Should have the applicants face alone'},
    {id: 3, text: 'Upload PDF / JPEG / PNG'},
  ];
  const {documentType} = route.params || {};


  useEffect(() => {
    if (documentType === 'ProfilePicture') {
      setUploadPicText('Profile Picture');
    } else if (documentType === 'BankDetails') {
      setUploadPicText('Attach Bank Account Details');
    } else if (documentType === 'DrivingDetails') {
      setUploadPicText('Attach Driving License');
    } else {
      setUploadPicText('Upload Adhar Card');
    }
  }, [documentType]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView contentContainerStyle={[styles.p16, {paddingBottom: hp(10)}]}>
        <TitleHeader
          onPress={() => navigation.goBack()}
          title="Profile Picture"
        />
        <View style={{marginTop: hp(2)}}>
          {instructions.map(item => (
            <View
              key={item.id}
              style={[
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  maxWidth: '100%',
                },
                styles.mb8,
              ]}>
              <Image source={icons.tick} style={[styles.icon32, styles.mr4]} />
              <Text
                style={{color: colors.black, fontSize: wp(3.8), flexShrink: 1}}>
                {item.text}
              </Text>
            </View>
          ))}
          <Text style={[styles.ts16, styles.mt20, {color: colors.black}]}>
            {uploadPicText}
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: colors.gray,
              borderStyle: 'dashed',
              padding: wp(4),
              marginTop: hp(2),
              alignItems: 'center',
              height: hp(15),
              borderRadius: 8,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image source={icons.upload_image} style={[styles.iconLarge]} />
            </TouchableOpacity>
          </View>
          <View
            style={[{
              flexDirection: 'row',
              alignItems: 'center',
              maxWidth: '100%',
              borderWidth : 1
            }, styles.mt16]}>
            <Image
              source={{
                uri: 'https://unsplash.com/photos/swirling-blues-and-whites-with-dark-organic-shapes-BS-Z2Db4Y2A',
              }}
              style={{width: wp(20), height: wp(20), borderRadius: wp(2)}}
            />
            <View style={{marginLeft: wp(2), flexShrink: 1}}>
              <Text style={{color: colors.black, fontSize: wp(3.5)}}>
                Profile
              </Text>
              <Text style={{color: colors.primary, fontSize: wp(3)}}>
                JPG • 250kb
              </Text>
            </View>
            <TouchableOpacity style={{marginLeft: wp(2)}}>
              <Image
                source={icons.close}
                style={{width: wp(4), height: wp(4)}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: wp(4),
        }}>
        <Button
          label="Done"
          onPress={() => navigation.navigate('UploadDocument', {documentType})}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfilePictureScreen;
