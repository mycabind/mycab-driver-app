import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const TitleInput = ({
    title, 
  value,
  onChangeText,
  placeholder,
  errorMessage = '',
  showError = false,
  customStyles ,
  multiline = false,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[{marginBottom: showError ? 25 : styles.mb8, position: 'relative'},customStyles]}>
        <Text style={[styles.h4,  styles.mb8 , styles.ts15  , {color : colors.black}]}>{title}</Text>
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
            paddingVertical: 12,
            paddingHorizontal: 15,
            fontSize: 16,
            color: colors.grey20,
            width: '100%',
            paddingRight: secureTextEntry ? 45 : 15, // Add space for the icon if secureTextEntry is true
          },
          customStyles,
        ]}
        multiline={multiline}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            transform: [{translateY: -10}], // Center the icon vertically
            height : 40 , 
            width : 40, 
            top : "58%"
          }}
          onPress={togglePasswordVisibility}>
          <Image
            source={ isPasswordVisible ? icons.closed_eye : icons.opened_eye}
            style={[
              styles.icon36,
            ]}
          />
        </TouchableOpacity>
      )}
      {showError && errorMessage ? (
        <Text style={[{fontSize: 12, marginTop: 5, color: errorColor}]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};


export default TitleInput;