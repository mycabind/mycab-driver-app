import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import icons from '../../assets/icons';

const TitleHeader = ({onPress, title}) => {
  return (
    <View style={[styles.fdRow, {alignItems: 'center'}]}>
      <TouchableOpacity
        onPress={onPress}
        style={[{borderRadius: 50, borderWidth: 0.5}, styles.p8]}>
        <Image source={icons.left_arrow} style={[styles.icon20]} />
      </TouchableOpacity>
      {title && (
        <Text style={[{color: colors.black}, styles.ts19, styles.ml16]}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default TitleHeader;
