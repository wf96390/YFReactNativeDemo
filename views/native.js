/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  NativeModules
} from 'react-native';

var testObject = NativeModules.YFTestObject;

export default class extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <TouchableHighlight onPress={()=>testObject.doSomething('点击按钮')}>
          <Text style={styles.welcome}>点击</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=>testObject.doSomethingCallback('点击按钮（回调）', (error,events)=>{
                 if (error) {
                   console.error(error);
                 } else {
                   console.log(events);
                 }
           })}>
          <Text style={styles.welcome}>点击（回调）</Text>
        </TouchableHighlight>
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
  }
});
