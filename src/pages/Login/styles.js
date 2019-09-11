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

  modal: {
    height: 300,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    shadowColor: 'gray',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
    padding: 20,
  },
});

export default styles;
