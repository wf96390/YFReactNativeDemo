/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

export default class extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      key:"点击屏幕任意位置"
    }
  }

  componentWillMount(){
    console.log("componentWillMount");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate");
    return true
  }

  componentWillUpdate(nextProps,nextState){
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => this.backgorundClicked()}
        underlayColor = '#ddd'
        style = {styles.container}
        >
        <Text style={styles.welcome}>{this.state.key}</Text>
      </TouchableHighlight>
    );
  }

  backgorundClicked(){
    this.setState({
      key:"设置了新的值"
    });
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
