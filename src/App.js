import React from 'react';
import { View, Platform } from 'react-native';
import Routes from './Routes';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 32 : 0,
        backgroundColor: '#fff',
      }}>
      <Routes />
    </View>
  );
};

export default App;
