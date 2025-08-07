import react from 'react';
import { Image, SafeAreaView ,Text ,TouchableOpacity } from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const Logo =({image,styl,stylImage})=>{
    return(
        <TouchableOpacity
          style={[
            styles.mt24,
            {
              alignSelf: 'center',
              borderWidth: 0.5,
              borderRadius: 50,
              borderColor: colors.grey200,
            },
            styles.p8,
            ,styl,
          ]}>
          <Image source={image} style={[styles.icon24,stylImage]} />
        </TouchableOpacity>
      
    )
}

export default Logo;