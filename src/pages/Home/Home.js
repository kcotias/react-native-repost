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
import GradientButton from '@components/Button/Button';
import themeStyles from '@config/theme.styles';
import AsyncStorage from '@react-native-community/async-storage';
import RepostItem from '@components/RepostItem/RepostItem';

const Home = ({ navigation }) => {
  const [url, setUrl] = useState('');
  const [reposts, setReposts] = useState([]);
  const [repostsLenght, setRepostsLenght] = useState(0);

  async function getUrl() {
    let clipUrl = await Clipboard.getString();
    setUrl(clipUrl);
  }
  function getData(link) {
    return link
      ? fetch(`https://api.instagram.com/oembed/?url=${link}`)
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.author_name) {
              let repostArray = [];
              repostArray = reposts;
              repostArray.push(responseJson);
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
    getReposts();
    getUrl();
  }, [repostsLenght]);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@repost_list', JSON.stringify(value)).then(
        () => {
          setReposts(value);
          setRepostsLenght(repostsLenght + 1);
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getReposts = async () => {
    try {
      const value = await AsyncStorage.getItem('@repost_list');
      if (value !== null) {
        setReposts(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear().then(() => {
        setReposts([]);
        setRepostsLenght(0);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const renderItem = item => {
    return (
      <RepostItem
        onPress={() =>
          navigation.navigate('REPOST', {
            thumbnail: { uri: item.thumbnail_url },
            description: item.title,
          })
        }
        thumbnail={{ uri: item.thumbnail_url }}
        author={item.author_name}
        description={item.title}
      />
    );
  };

  const handleRender = () => {
    console.log(reposts[0]);
    return typeof reposts !== 'undefined' && reposts.length > 0 ? (
      <ScrollView contentContainerStyle={styles.flex}>
        <FlatList
          extraData
          keyExtractor={(item, index) => JSON.stringify(index)}
          renderItem={({ item }) => renderItem(item)}
          data={reposts}
        />
        <View style={{ paddingBottom: 10 }}>
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Text style={styles.textColor} onPress={() => clearAll()}>
              Erase All
            </Text>
          </TouchableOpacity>
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
    ) : (
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
    );
  };

  return (
    <View style={styles.flex}>
      <Header />
      {handleRender()}
    </View>
  );
};
export default Home;
