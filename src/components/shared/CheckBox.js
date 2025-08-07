import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import styles from '../../assets/styles';

const Checkbox = ({isChecked, label, onToggle}) => {
  return (
    <TouchableOpacity
      style={[
        {flexDirection: 'row', alignItems: 'center'},
        styles.mv12
      ]}
      onPress={onToggle}>
      <View
        style={[
          {
            width: 24,
            height: 24,
            borderWidth: 2,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.primary,
            backgroundColor: isChecked ? colors.primary : 'transparent',
          },
          styles.mr12 
        ]}>
        {isChecked && (
          <View
            style={{
              width: 12,
              height: 12,
              backgroundColor: colors.white,
              borderRadius: 2,
            }}
          />
        )}
      </View>
      <Text style={[styles.ts16 , {color : colors.black}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;