import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Header from '@components/Header/Header';
import styles from './styles';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <View style={{ alignItems: 'flex-start' }}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{`1.   `}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('instagram://app')}>
              <Text style={[styles.text, { color: 'blue' }]}>
                Open Instagram{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{`2.   `}</Text>
            <Text style={styles.text}>
              Tap
              <Text
                style={(styles.text, { color: 'black', fontWeight: 'bold' })}>
                {` ••• `}
              </Text>
              button
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{`3.   `}</Text>
            <Text style={styles.text}>
              Choose
              <Text style={(styles.text, { color: 'black' })}>
                {` Copy Link`}
              </Text>
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text>{`🚀 `}</Text>
            <Text style={styles.text}>Open Repost</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Home;
