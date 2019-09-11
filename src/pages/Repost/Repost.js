import React from 'react';
import { View, Image, Clipboard, Alert, StyleSheet } from 'react-native';
import GradientButton from '@components/Button/Button';
import Header from '@components/Header/Header';

const Repost = ({ navigation }) => {
  const thumbnail = navigation.getParam('thumbnail', '');
  const title = navigation.getParam('description', '');
  return (
    <View>
      <Header hasBackButton onBackPress={() => navigation.goBack()} />
      <Image style={styles.img} source={thumbnail} />
      <GradientButton
        text="Repost"
        onPress={() => {
          Clipboard.setString(title);
          Alert.alert('Oba!', 'Texto copiado para o clipboard');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: { height: 300, margin: 10 },
});

export default Repost;
