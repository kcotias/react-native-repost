import React, { useState } from 'react';
import { View, TextInput, Text, Image, Modal, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import themeStyles from '../../config/theme.styles';
import GradientButton from '../../components/Button/Button';
import styles from './styles';

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [code, setCode] = useState('');
  const [confirmResultObj, setConfirmResult] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const signIn = number => {
    firebase
      .auth()
      .signInWithPhoneNumber(`+55${number}`)
      .then(confirmResult => {
        console.log(confirmResult);
        setConfirmResult(confirmResult);
        setModalVisible(true);
      })
      .catch(error => Alert.alert('Ops...', 'Ocorreu um erro, tenta denovo.'));
  };
  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View
          style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 15 }}>
          <View style={styles.modal}>
            <View
              style={{
                ...styles.container,
                alignItems: 'center',
                marginTop: 5,
                justifyContent: 'center',
              }}></View>
            <View
              style={{
                ...styles.container,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 40,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginBottom: 10,
                  marginTop: -5,
                }}>
                Check your phone
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                We just sent a confirmation code to your number, type it below:
              </Text>
              <TextInput
                placeholder="Type the code"
                style={{
                  alignSelf: 'center',
                  margin: 10,
                  paddingLeft: 20,
                  backgroundColor: '#fff',
                  width: 120,
                  height: 44,
                }}
                onChangeText={text => setCode(text)}
              />
            </View>
            <GradientButton
              onPress={() => {
                confirmResultObj
                  .confirm(code)
                  .then(result => {
                    navigation.navigate('HOME');
                  })
                  .catch(error => {
                    setError('Ocorreu um erro, tente novamente.');
                  });
                setModalVisible(false);
              }}
              text="Send code"
            />
            <Text>{error}</Text>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: 250, alignSelf: 'center' }}
          resizeMode="contain"
          source={require('../../assets/imgs/logo.png')}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: themeStyles.ALTERNATE_COLOR,
            fontWeight: themeStyles.FONT_WEIGHT_MEDIUM,
            fontSize: 20,
          }}>
          In order to proceed we need your phone number!
        </Text>
        <View
          style={{
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'gray',
            shadowOpacity: 0.7,
            shadowOffset: {
              height: 4,
              width: 4,
            },
            shadowRadius: 5,
            elevation: 6,
            paddingVertical: 8,
          }}>
          <TextInput
            placeholder="Type your phone - i.e. 11991803266"
            style={{
              borderRadius: 40,
              paddingLeft: 20,
              backgroundColor: '#fff',
              width: '100%',
              height: 44,
            }}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <GradientButton text="Send" onPress={() => signIn(phone)} />
      </View>
    </View>
  );
};
export default Login;
