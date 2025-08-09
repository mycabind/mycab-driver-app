import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const { width, height } = Dimensions.get('window');
const wp = percentage => (width * percentage) / 100;
const hp = percentage => (height * percentage) / 100;

const TitleInput = ({
  title,
  value,
  onChangeText,
  placeholder,
  errorMessage = '',
  showError = false,
  style,
  multiline = false,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={[
        { marginBottom: showError ? 25 : styles.mb8, position: 'relative' },
        style,
      ]}
    >
      <Text style={[ styles.mb8, { fontSize: wp(3.8), color: colors.black }]}>
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.grey60}
        style={[
          {
            borderColor: showError ? colors.red : colors.grey80,
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: hp(1.5),
            paddingHorizontal: wp(4),
            fontSize: wp(4), 
            color: colors.grey20,
            width: '100%',
            height: hp(6), 
            paddingRight: secureTextEntry ? wp(12) : wp(4),
          },
        ]}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: wp(2.5),
            transform: [{ translateY: -hp(1.2) }],
            height: hp(5),
            width: hp(5),
            top: '58%',
          }}
          onPress={togglePasswordVisibility}
        >
          <Image
            source={isPasswordVisible ? icons.closed_eye : icons.opened_eye}
            style={styles.icon36}
          />
        </TouchableOpacity>
      )}
      {showError && errorMessage ? (
        <Text style={{ fontSize: wp(3), marginTop: hp(0.5), color: colors.red }}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default TitleInput;
