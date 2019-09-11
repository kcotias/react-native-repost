import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Clipboard,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import Header from '@components/Header/Header';
import styles from './styles';
import GradientButton from '../../components/Button/Button';
import themeStyles from '../../config/theme.styles';
import AsyncStorage from '@react-native-community/async-storage';
import RepostItem from '../../components/RepostItem/RepostItem';

const Home = () => {
  const [url, setUrl] = useState('');
  const [reposts, setReposts] = useState([]);

  async function getUrl() {
    let clipUrl = await Clipboard.getString();
    setUrl(clipUrl);
  }
  function getData(link) {
    console.log(link);
    return link
      ? fetch(`https://api.instagram.com/oembed/?url=${link}`)
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.author_name) {
              let repostArray = [];
              repostArray = reposts;
              console.log('repostArray');
              console.log(repostArray);
              repostArray.push(responseJson);
              setReposts(repostArray);
              storeData(repostArray);
            } else {
              Alert.alert('Link inválido', 'Os dados copiados não são válidos');
            }
          })
          .catch(() =>
            Alert.alert('Link inválido', 'Os dados copiados não são válidos'),
          )
      : null;
  }
  useEffect(() => {
    //clearAll();
    getReposts();
    getUrl();
  }, [url]);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@repost_list', JSON.stringify(value));
      console.log('dados salvos');
      console.log(value);
    } catch (e) {
      // saving error
    }
  };

  const getReposts = async () => {
    try {
      const value = await AsyncStorage.getItem('@repost_list');
      if (value !== null) {
        console.log('dados recuperados');
        console.log(JSON.parse(value));

        setReposts(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };

  const renderItem = item => {
    return (
      <RepostItem
        thumbnail={{ uri: item.thumbnail_url }}
        author={item.author_name}
        description={item.title}
      />
    );
  };

  const handleRender = () => {
    return !reposts ? (
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
            getUrl().then(() => {
              getData(url);
            });
          }}
        />
      </View>
    ) : (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={({ item }) => renderItem(item)}
          data={reposts}
        />
        <View style={{ paddingBottom: 10 }}>
          <GradientButton
            text="Add more"
            onPress={() => {
              getUrl().then(() => {
                getData(url);
              });
            }}
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {handleRender()}
    </View>
  );
};
export default Home;
