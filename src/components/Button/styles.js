import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';

const styles = StyleSheet.create({
  btnWrapper: {
    margin: 20,
    shadowColor: themeStyles.PRIMARY_COLOR,
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  btn: {
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  text: {
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default styles;
