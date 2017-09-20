/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', height: 100, padding: 20, marginTop:100}}>
          <View style={{backgroundColor: 'blue', flex: 0.5}} />
          <View style={{backgroundColor: 'red', flex: 0.25}} />
          <View style={{backgroundColor: 'green', flex: 0.25}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
