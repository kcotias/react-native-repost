import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  title: {
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    fontSize: themeStyles.FONT_SIZE_LARGE,
  },
  flexAlign: { flex: 1, alignItems: 'center' },
});

export default styles;
