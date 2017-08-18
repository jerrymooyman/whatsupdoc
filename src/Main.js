import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MDButton } from './components/atoms'
import Auth0 from 'react-native-auth0';

var credentials = require('./auth0-credentials');
const auth0 = new Auth0(credentials);

class main extends Component {
  _onLogin() {
    auth0
        .webAuth
        .authorize({scope: 'openid email', audience: 'https://' + credentials.domain + '/userinfo'})
        .then(credentials =>
              Alert.alert(
                  'Success',
                  'AccessToken: ' + credentials.accessToken,
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                ))
        .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          An Awesome App
        </Text>
        <MDButton onPress={this._onLogin} title="Log In" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('whatsupdoc', () => main);
