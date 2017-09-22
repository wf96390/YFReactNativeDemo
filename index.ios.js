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
  View,
  FlatList,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';

import CommonView from './views/view0';
import ImageView from './views/imageView';
import Timer from './views/timer';
import Lifecycle from './views/lifecycle';
import Native from './views/native';

class MyList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => index;

  itemClick(item, index) {
    this.props.navigator.push({
      title: item.title,
      index: index,
      display: !item.hideNav,
      component: item.component,
    })
    // alert('点击了第' + item.component + '项');
  }

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        activeOpacity={0.5}
        onPress={this.itemClick.bind(this, item, index)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default class RNDemo extends Component {
  constructor() {
    super();
    this.state = {
      listItems:[{
        key:0,
        title:"View",
        component: CommonView,
        hideNav: true,
      }, {
        key:1,
        title:"ImageView",
        component: ImageView,
        hideNav: true,
      }, {
        key:2,
        title:"Timer",
        component: Timer,
        hideNav: true,
      }, {
        key:3,
        title:"生命周期",
        component: Lifecycle,
        hideNav: true,
      }, {
        key:4,
        title:"JS调用Native",
        component: Native,
        hideNav: true,
      }]
    }
  }

  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          index: 0,
          title:'首页'+this.props.appVersion,//navigationController 的 title
          component:MyList,//navigationController 的 rootViewController
          passProps:{data:this.state.listItems, style:styles.container}
        }}
      />

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
  navigator: {
    flex: 1,
  },
  listItem: {
    margin: 10,
    height: 30,
  },
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
