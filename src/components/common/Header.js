import React, { Component } from 'react';
import ReactNative from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
    render(props) {
      return (
        <Text style={styles.largetext}>{this.props.headerText}</Text>
    );
  };

}

const styles = StyleSheet.create({
  largetext: {
    fontFamily: 'Avenir-Black',
    fontSize: 30,
    fontWeight: 'bold',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    paddingTop: 15,
    paddingBottom:30,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 25,
    backgroundColor: '#E8E8E8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
  },
});

export { Header };
