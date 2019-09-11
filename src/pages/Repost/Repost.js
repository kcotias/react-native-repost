import React from 'react';
import { View, Image, Clipboard } from 'react-native';
import GradientButton from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const Repost = ({ navigation }) => {
  const thumbnail = navigation.getParam('thumbnail', '');
  const title = navigation.getParam('title', '');
  return (
    <View>
      <Header hasBackButton onBackPress={() => navigation.goBack()} />
      <Image style={{ height: 300, margin: 10 }} source={thumbnail} />
      <GradientButton
        text="Repost"
        onPress={() => Clipboard.setString(title)}
      />
    </View>
  );
};
export default Repost;
