import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';
const { PRIMARY_COLOR, FONT_WEIGHT_MEDIUM } = themeStyles;
const styles = StyleSheet.create({
  btnWrapper: {
    margin: 20,
    shadowColor: PRIMARY_COLOR,
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
  },
  btn: {
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 8,
    elevation: 8,
  },
  text: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default styles;
