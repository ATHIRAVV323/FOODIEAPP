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
 
  export default class Header1 extends Component {
    render() {
        return (
          <View>
            <View style={styles.header}>
              <EvilIcons style={{fontSize:40,color:'white'}} name="navicon" />
              <View style={{flexDirection:"row"}}>
             <Text style={{fontSize:30,color:"white",marginTop:-5}}>Bal : </Text>
             <Text style={{fontSize:30,color:"white",marginTop:-5,fontWeight:"bold"}}>0</Text>
             </View>
              <Ionicons style={{fontSize:30,color:'white'}} name="location" />
            </View>
          <View style={{height:5,color:"white",width:wp}}></View>
        </View>
      );
   }
 }
const styles=StyleSheet.create({
  header:{
    flexDirection:'row',
    height: 70,
    backgroundColor:'#00A39A',
    width:"100%",
    justifyContent:'space-between',
    paddingTop:20,
    paddingLeft:15,
    paddingRight:15,
    flexWrap:"wrap"
   },    
           
        })