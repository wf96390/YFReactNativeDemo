/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

export default class extends Component {
  render() {
    return (
      <Image style={styles.container} source={require('./img/icon.jpg')}></Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:100,
    height:100,
    marginTop:100
  },
});
