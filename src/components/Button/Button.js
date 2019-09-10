import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import themeStyles from '../../config/theme.styles';
import styles from './styles';

const GradientButton = ({ text, onPress }) => {
  const { SECONDARY_COLOR, PRIMARY_COLOR } = themeStyles;
  return (
    <TouchableOpacity style={styles.btnWrapper} onPress={onPress}>
      <LinearGradient
        style={styles.btn}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[SECONDARY_COLOR, PRIMARY_COLOR]}>
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default GradientButton;
