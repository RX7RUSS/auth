import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: ''};


  render() {
    return (
      <Card>
        <CardSection>
          <Input
          value={this.state.text}
          onChangeText={text => this.setState({ text:text })}
          />
        </CardSection>

        <CardSection>
          <Input
          value={this.state.text}
          onChangeText={text => this.setState({ text:text })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}



export default LoginForm;