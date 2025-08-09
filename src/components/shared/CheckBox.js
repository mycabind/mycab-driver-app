import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../../assets/colors';
import styles from '../../assets/styles';

const { width } = Dimensions.get('window');
const wp = percentage => (width * percentage) / 100;

const Checkbox = ({ isChecked, label, onToggle }) => {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, styles.mv12]}>
      <TouchableOpacity
        onPress={onToggle}
        activeOpacity={0.7}
        style={[
          {
            width: wp(6),  
            height: wp(6), 
            borderWidth: 2,
            borderRadius: wp(1),
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.primary,
            backgroundColor: isChecked ? colors.primary : 'transparent',
          },
          styles.mr12,
        ]}
      >
        {isChecked && (
          <View
            style={{
              width: wp(3.2),  
              height: wp(3.2),
              backgroundColor: colors.white,
              borderRadius: wp(0.5),
            }}
          />
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.ts16,
          { fontSize: wp(4), color: colors.black },
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {label}
      </Text>
    </View>
  );
};

export default Checkbox;
