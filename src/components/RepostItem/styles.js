import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';

const { FONT_WEIGHT_LIGHT, FONT_SIZE_SMALL, FONT_WEIGHT_MEDIUM } = themeStyles;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginVertical: 5,
  },
  thumb: {
    height: 75,
    width: 75,
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    fontWeight: FONT_WEIGHT_MEDIUM,
  },
  text: {
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: FONT_SIZE_SMALL,
    color: 'gray',
  },
});

export default styles;
