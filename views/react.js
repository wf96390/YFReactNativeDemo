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
  NativeModules,
  NativeEventEmitter
} from 'react-native';

var nativeBridge = NativeModules.YFExportReactMethod;
const nativeModule = new NativeEventEmitter(nativeBridge);

export default class extends Component {
  componentDidMount(){
    nativeModule.addListener('ReactNativeCaller',(data)=>console.log(data));  // 增加监听
  }

  componentWillUnmount() {
    //删除监听
    this.nativeModule.remove();
  }

  render() {
    return (
      <View style={styles.container}> 
        <TouchableHighlight onPress={()=>nativeBridge.callReactNativeMethod('调用Native方法，再调用React方法')}>
          <Text style={styles.welcome}>点击</Text>
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
