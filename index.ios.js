/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CodePush from 'react-native-code-push';

class reactnativeCodepush extends Component {

  componentDidMount() {
    CodePush.sync({updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE})
      .then(update => console.log('update', update))
      .catch(err => console.log('update error', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Deepak Sisodiya
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactnativeCodepush', () => reactnativeCodepush);
