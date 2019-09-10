import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexAlign} />
      <View style={styles.flexAlign}>
        <Text style={styles.title}>Repost</Text>
      </View>
      <View style={styles.flexAlign}>
        <TouchableOpacity>
          <Text>Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
