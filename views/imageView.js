/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={styles.containerView}>
        <Image style={styles.container} source={require('./img/icon.jpg')}></Image>
        <Image style={styles.container} source={{uri:'https://file.qf.56.com/p/group1/M04/D0/CF/MTAuMTAuODguNzk=/dXBsb2FkRmlsZV8xXzE0NjM1OTUzMDMwMzM=/cut@m=crop,x=0,y=0,w=527,h=527_cut@m=resize,w=100,h=100.jpg'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    width:100,
    height:100,
    marginTop:100
  },
});
