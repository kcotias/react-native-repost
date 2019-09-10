import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import Routes from './Routes';
import themeStyle from '@config/theme.styles.js';

const styles = StyleSheet.create({
  nextButton: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5,
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 14,
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    name: 'welcome',
    title: 'Seja bem vindo!',
    text: 'Precisou de um serviço ou um profissional especifico? AQUI É FÁCIL!',
    colors: '#fff',
    image: 'welcome',
  },
  {
    name: 'screen1',
    title: 'Tudo ao seu alcance!',
    text:
      'Basta navegar pelo nosso feed e encontrar o serviço desejado! (Ah, e não se esqueça dos filtros para facilitar sua busca!)',
    colors: '#fff',
    image: 'find',
  },
  {
    name: 'screen2',
    title: 'Quer cadastrar o seu serviço?',
    text:
      'Também é bem FÁCIL! Basta clicar no botão de adicionar na tela principal e se cadastrar!',
    colors: '#fff',
    image: 'register',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: true,
    };
  }

  componentDidMount() {
    // if(Platform.OS === 'android'){
    // SplashScreen.close({
    //     animationType: SplashScreen.animationType.scale,
    //     duration: 850,
    //     delay: 500
    //  });
    // }

    AsyncStorage.getItem('onboardingFirstUse').then(value => {
      if (value) {
        this.setState({ showRealApp: true });
      } else {
        this.setState({ showRealApp: false });
      }
    });
  }

  _renderItem = props => {
    const chooseImage = () => {
      switch (props.image) {
        case 'welcome': {
          return (
            <Image
              style={{ height: 200, width: 200 }}
              resizeMode={'contain'}
              //source={require('')}
            />
          );
        }
        case 'find': {
          return (
            <Image
              style={{ height: 200, width: 200 }}
              resizeMode={'contain'}
              //source={require('')}
            />
          );
        }
        case 'register': {
          return (
            <Image
              style={{ height: 200, width: 200 }}
              resizeMode={'contain'}
              // source={require('')}
            />
          );
        }
        default: {
          return null;
        }
      }
    };
    return (
      <View
        style={[
          styles.mainContent,
          {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height,
            backgroundColor: props.colors,
          },
        ]}>
        <View style={{ flex: 1, justifyContent: 'flex-end', paddingTop: 90 }}>
          {chooseImage()}
        </View>
        <View style={{ flex: 1, paddingTop: 90, paddingHorizontal: 20 }}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    AsyncStorage.setItem('onboardingFirstUse', 'false');
  };

  _renderNextButton = () => <Text style={styles.nextButton}>Próximo</Text>;

  _renderDoneButton = () => <Text style={styles.nextButton}>Concluir</Text>;

  render() {
    if (this.state.showRealApp) {
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
    }
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={this._renderItem}
      />
    );
  }
}
