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

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={[styles.p16]}>
      <TitleHeader
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}
      />

      <View style={[{alignItems: 'center'}]}>
        <Text style={[styles.h1, styles.m12]}>Complete your Profile</Text>
        <Text
          style={[
            {color: colors.black400, textAlign: 'center'},
            styles.ts14,
            styles.ml36,
            styles.mr36,
            styles.mb12,
          ]}>
          Don't worry ,only you can see your personal data. No one else will be
          able to see it.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.mt8, styles.mb8, {alignItems: 'center'}]}>
        <Image
          source={icons.profile_pic}
          style={[{borderRadius: 30}, styles.logoProfile]}
        />
      </TouchableOpacity>
      <TitleInput title="Name" placeholder="Name" customStyles={[styles.mb8]} />
      <TitleInput
        title="Phone Number"
        placeholder="Enter Phone Number"
        customStyles={[styles.mb8]}
      />
      <TitleInput
        title="Gender"
        placeholder="Gender"
        customStyles={[styles.mb8]}
      />
      <Button label="Complete Profile" onPress={() => setModalVisible(true)} />

      {/* MODEL */}

      <Modal
        animationType="slide" // Can be "slide", "fade", or "none"
        transparent={false} // Makes the background transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Close on back button
      >
        <SafeAreaView styes={[styles.p16]}>
          <View style={[{alignItems: 'center', marginTop: 200}, styles.mb40]}>
            <Logo
              image={icons.location}
              styl={[
                {
                  alignSelf: 'center',
                  justifyContent: 'center',
                  borderWidth: 1.5,
                  borderRadius: 50,
                  borderColor: colors.grey200,
                  height: 100,
                  width: 100,
                  backgroundcolor: colors.grey200,
                },
                styles.pd8,
              ]}
              stylImage={[{alignSelf: 'center'}, styles.icon88]}
            />
          </View>
          <View style={[styles.mb48]}>
            <Text style={[styles.h1, {textAlign: 'center'}]}>
              Enable Location Access
            </Text>
            <Text style={[{textAlign: 'center'}]}>
              To ensure seamless and effificient experience, allow us access
              your location
            </Text>
          </View>

          <View
            style={[
              {
                backgroundColor: colors.white,
                borderRadius: 16,
                borderTopColor: colors.grey200,
                elevation: 5,         //for shadow
                shadowColor: colors.grey200,
              },
              styles.pdt4,
              styles.p16,
            ]}>
            <Button
              label="Allow Location Access"
              onPress={() => setModalVisible(false)}
            />
            <Button label="Maybe Later" />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
