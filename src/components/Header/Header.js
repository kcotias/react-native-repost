import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ hasBackButton, onBackPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexAlign}>
        {hasBackButton && (
          <TouchableOpacity
            onPress={onBackPress}
            style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
            <Icon name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.flexAlign}>
        <Text style={styles.title}>Repost</Text>
      </View>
      <View style={styles.flexAlign}>
        <TouchableOpacity
          onPress={() => Linking.openURL('instagram://app')}
          style={{ alignSelf: 'flex-end', marginRight: 10 }}>
          <Icon name="instagram" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
