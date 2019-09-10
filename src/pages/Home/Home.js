import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking, Clipboard } from 'react-native';
import Header from '@components/Header/Header';
import styles from './styles';
import GradientButton from '../../components/Button/Button';
import themeStyles from '../../config/theme.styles';

const Home = () => {
  const [url, setUrl] = useState('');
  async function getUrl() {
    let clipUrl = await Clipboard.getString();
    setUrl(clipUrl);
  }
  function getData(link) {
    return link
      ? fetch(`https://api.instagram.com/oembed/?url=${link}`)
          .then(response => response.json())
          .then(responseJson => console.log(responseJson))
          .catch(error => console.log(error))
      : null;
  }
  useEffect(() => {
    getUrl();
    getData(url);
  }, [url]);

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <View style={{ alignItems: 'flex-start' }}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{`1.   `}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL('instagram://app')}>
              <Text
                style={[
                  styles.text,
                  {
                    color: themeStyles.ALTERNATE_COLOR,
                    fontWeight: themeStyles.FONT_WEIGHT_HEAVY,
                  },
                ]}>
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
            <Text style={styles.text}>Click button below</Text>
          </View>
        </View>
        <GradientButton
          text="Done!"
          onPress={() => {
            getUrl();
            alert(url);
          }}
        />
      </View>
    </View>
  );
};
export default Home;
