import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';
import GradientButton from '@components/Button/Button';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [code, setCode] = useState('');
  const [confirmResultObj, setConfirmResult] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const signIn = number => {
    console.log('tamo aqui');
    firebase
      .auth()
      .signInWithPhoneNumber(`+55${number}`)
      .then(confirmResult => {
        console.log(confirmResult);
        setConfirmResult(confirmResult);
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            navigation.navigate('HOME');
          } else {
            setModalVisible(true);
          }
        });
      })
      .catch(e => console.log(e));
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={[styles.container, { paddingHorizontal: 15 }]}>
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
            <View
              style={{
                ...styles.modalContainer,
                paddingHorizontal: 40,
                marginTop: 50,
              }}>
              <Text style={styles.modalTitle}>Check your phone</Text>
              <Text style={styles.modalText}>
                We just sent a confirmation code to your number, type it below:
              </Text>
              <TextInput
                placeholder="Type the code"
                style={styles.modalInput}
                onChangeText={text => setCode(text)}
              />
            </View>
            <GradientButton
              onPress={() => {
                confirmResultObj
                  .confirm(code)
                  .then(result => {
                    AsyncStorage.setItem('@user', true);
                    navigation.navigate('HOME');
                    setModalVisible(false);
                  })
                  .catch(error => {
                    console.log(error);
                    setError('Ocorreu um erro, tente novamente.');
                  });
              }}
              text="Send code"
            />
            <Text>{error}</Text>
          </View>
        </View>
      </Modal>
      <View style={styles.flex}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../assets/imgs/logo.png')}
        />
      </View>
      <View style={styles.flex}>
        <Text style={styles.mainTitle}>
          In order to proceed we need your phone number!
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Type your phone - i.e. 11991803266"
            style={styles.input}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <GradientButton text="Send" onPress={() => signIn(phone)} />
      </View>
    </View>
  );
};
export default Login;
