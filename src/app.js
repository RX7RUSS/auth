import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiCEvKqCtv59GJVN_oahFOzItnpxQwyEs',
      authDomain: 'authentication-2c8f2.firebaseapp.com',
      databaseURL: 'https://authentication-2c8f2.firebaseio.com',
      projectId: 'authentication-2c8f2',
      storageBucket: 'authentication-2c8f2.appspot.com',
      messagingSenderId: '196273351508'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
    return <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>;
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;
  }
}

  render() {
    return (
      <View style={{ marginTop: 25}}>
        <Header headerText='Authentication!' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
