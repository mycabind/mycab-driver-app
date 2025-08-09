import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import icons from '../../assets/icons';

const { width } = Dimensions.get('window');
const wp = percentage => (width * percentage) / 100;

const TitleHeader = ({ onPress, title }) => {
  return (
    <View style={[styles.fdRow, { alignItems: 'center' }]}>
      <TouchableOpacity
        onPress={onPress}
        style={[{ borderRadius: 50, borderWidth: 1 }, styles.p8]}
      >
        <Image source={icons.left_arrow} style={styles.icon20} />
      </TouchableOpacity>

      {title && (
        <Text
          style={[
            { 
              color: colors.black, 
              fontSize: wp(4.8) 
            },
            styles.ts19,
            styles.ml16
          ]}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

export default TitleHeader;
