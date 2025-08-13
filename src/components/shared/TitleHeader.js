import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import icons from '../../assets/icons';


const TitleHeader = ({onPress, title }) => {
  return (
    <View style={[{flexDirection: 'row', alignItems: 'center', height: 48}]}>
      <View style={{width: 48, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={onPress}
          style={[{borderRadius: 50, borderWidth: 0.5} , styles.p8]}>
          <Image source={icons.left_arrow} style={[styles.icon20]} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {title && (
          <Text style={[{textAlign: 'center', color: colors.black}, styles.ts19]}>
            {title}
          </Text>
        )}
      </View>
      <View style={{width: 48}} />
    </View>
  );
};

export default TitleHeader;