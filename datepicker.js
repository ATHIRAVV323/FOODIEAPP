import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    StatusBar,Dimensions
  } from "react-native";
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  var wp = Dimensions.get('window').width ;
  var hp = Dimensions.get('window').height ;
  import DatePicker from 'react-native-datepicker';

export default class MyDatePicker extends Component {

    
    constructor(props){
      super(props)
      this.state = {date:"2016-05-15"}
    }
   
    render(){
      return (
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        
      )
      
    }
  }
  export class Mydatapicker extends Component {

    
    constructor(props){
      super(props)
      this.state = {date:"2016-05-15"}
    }
   
    render(){
      return (
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
             
              left: 0,
              top: 4,
              marginLeft: 50,
            },
            dateInput: {
              marginLeft: 40
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        
      )
      
    }
  }
  