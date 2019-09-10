import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: themeStyles.FONT_WEIGHT_LIGHT,
    fontSize: themeStyles.FONT_SIZE_MEDIUM,
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
});

export default styles;
