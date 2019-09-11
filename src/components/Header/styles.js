import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';

const { FONT_WEIGHT_MEDIUM, FONT_SIZE_LARGE } = themeStyles;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 0.3,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  igBtn: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  title: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontSize: FONT_SIZE_LARGE,
  },
  flexAlign: { flex: 1, alignItems: 'center' },
});

export default styles;
