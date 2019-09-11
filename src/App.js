import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import Routes from './Routes';

const App = () => {
  return (
    <View style={styles.mainApp}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 32 : 0,
    backgroundColor: '#fff',
  },
});

export default App;
