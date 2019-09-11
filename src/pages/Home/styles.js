import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';

const { FONT_SIZE_MEDIUM, FONT_WEIGHT_LIGHT } = themeStyles;

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: FONT_WEIGHT_LIGHT,
    fontSize: FONT_SIZE_MEDIUM,
    color: 'gray',
  },
  flexAlign: {
    flex: 1,
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  textColor: { color: 'gray' },
});

export default styles;
