import { StyleSheet } from 'react-native';
import themeStyles from '@config/theme.styles.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    marginTop: -5,
  },
  modalText: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  modalInput: {
    alignSelf: 'center',
    margin: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
    width: 120,
    height: 44,
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
  flex: { flex: 1 },
  mainTitle: {
    color: themeStyles.ALTERNATE_COLOR,
    fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
    fontSize: 20,
  },
  inputWrapper: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    paddingVertical: 8,
  },
  input: {
    borderRadius: 40,
    paddingLeft: 20,
    elevation: 8,
    backgroundColor: '#fff',
    width: '100%',
    height: 44,
  },
  logo: {
    height: 250,
    alignSelf: 'center',
  },
});

export default styles;
