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
  View
} from 'react-native';

class TotalTimeView extends Component {
  static propTypes = {
    totalTime: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <Text style={styles.totalTime}>{this.props.totalTime}</Text>
    );
  }
}

class StartButton extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      watchOn: false, 
      startBtnText: "启动",
      startBtnColor: "#60B644",
    };
  }

  _startWatch() {
    if (!this.state.watchOn) {
      this.props.startWatch()
      this.setState({
        startBtnText: "停止",
        startBtnColor: "#ff0044",
        watchOn: true
      })
    } else {
      this.props.stopWatch()
      this.setState({
        startBtnText: "启动",
        startBtnColor: "#60B644",
        watchOn: false
      })
    } 
  }

  _resetWatch() {
    this.props.resetWatch();
  }

  render() {
    return (
      <View style={styles.startButtonStyle}>
          <View style={{flex:1,alignItems:"flex-start"}}>
            <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> this._resetWatch()}>
              <Text style={styles.btnStartText}>复位</Text>
            </TouchableHighlight>
          </View>

          <View style={{flex:1,alignItems:"flex-end"}}>
            <TouchableHighlight style={styles.btnStart} underlayColor="#eee" onPress={()=> this._startWatch()}>
              <Text style={[styles.btnStartText,{color:this.state.startBtnColor}]}>{this.state.startBtnText}</Text>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}

export default class extends Component{
  constructor() {
    super();
      this.state = {
        stopWatch: false,
        resetWatch: true,
        intialTime: 0,
        currentTime:0,
        recordTime:0,
        timeAccumulation:0,
        totalTime: "00:00.00",
    };
  }

  componentWillUnmount() {
    this._stopWatch();
  }

  _startWatch() {
    if (this.state.resetWatch) {
      this.setState({
        stopWatch: false,
        resetWatch: false,
        timeAccumulation:0,
        initialTime: (new Date()).getTime()
      })
    } else {
      this.setState({
        stopWatch: false,
        initialTime: (new Date()).getTime()
      })
    }
    let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
    let interval = setInterval(
        () => { 
          this.setState({
            currentTime: (new Date()).getTime()
          })
          countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
          minute = Math.floor(countingTime/(60*1000));
          second = Math.floor((countingTime-6000*minute)/1000);
          milSecond = Math.floor((countingTime%1000)/10);
          seccountingTime = countingTime - this.state.recordTime;
          secminute = Math.floor(seccountingTime/(60*1000));
          secsecond = Math.floor((seccountingTime-6000*secminute)/1000);
          secmilSecond = Math.floor((seccountingTime%1000)/10);
          this.setState({
            totalTime: (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond),
            sectionTime: (secminute<10? "0"+secminute:secminute)+":"+(secsecond<10? "0"+secsecond:secsecond)+"."+(secmilSecond<10? "0"+secmilSecond:secmilSecond),
          })
          if (this.state.stopWatch) {
            this.setState({
              timeAccumulation: countingTime 
            })
            clearInterval(interval)
          };
        },10);
  }

  _stopWatch() {
    this.setState({
      stopWatch: true
    })
  }

  _resetWatch() {
    this.setState({
      resetWatch: true,
      totalTime: "00:00.00",
    })
  }

  render(){
    return(
      <View style={styles.watchContainer}>
        <TotalTimeView totalTime={this.state.totalTime}></TotalTimeView>
        <StartButton startWatch={()=>this._startWatch()} stopWatch={()=>this._stopWatch()} resetWatch={()=>this._resetWatch()}></StartButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  watchContainer:{
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    marginTop: 60,
  },
  totalTime:{
    fontSize: 60,
    color: "#222",
    paddingLeft:20
  },
  btnStart:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  startButtonStyle:{
    width: 300,
    height: 100,
    flexDirection:"row",
    backgroundColor: '#f3f3f3',
    paddingTop: 30, paddingLeft: 60, paddingRight:60, paddingBottom:0,
  },
  btnStartText:{
    fontSize:14,
    backgroundColor:"transparent"
  },
});
