import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiCEvKqCtv59GJVN_oahFOzItnpxQwyEs',
      authDomain: 'authentication-2c8f2.firebaseapp.com',
      databaseURL: 'https://authentication-2c8f2.firebaseio.com',
      projectId: 'authentication-2c8f2',
      storageBucket: 'authentication-2c8f2.appspot.com',
      messagingSenderId: '196273351508'
    });

  }


  render() {
    return (
      <View style={{ marginTop: 25}}>
        <Header headerText='Authentication!' />
        <LoginForm />
        <Text style={{margin: 25, fontSize: 20, fontWeight: '600', fontFamily: 'Avenir', textAlign: 'center' }}>
          Enter your email address and password to login.
          If this is your first time logging in, a new account will be created for you.
        </Text>
      </View>
    );
  }
}

export default App;
