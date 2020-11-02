import * as React from 'react';

import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var wid = Dimensions.get('window').width ;
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();
import Header1 from "../components/header1";


export default class DATACARD extends React.Component {
  render() {
    return (
       <SafeAreaView>
           <View style={{width:Dimensions.get('window').width}}>
           <Header1/></View>
        {/* <ScrollView
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
         style={{width:500}}
         horizontal= {true}
         decelerationRate={0}
         snapToInterval={100} //your element width
         snapToAlignment={"center"}
        > */}
        <NavigationContainer>
      <Tab.Navigator  
        tabBarOptions={{
            scrollEnabled:true,
            labelStyle: { fontSize: 20,fontWeight:"bold" },
            tabStyle: { width: 100 },
            style: { backgroundColor: '#00A39A' },
          activeTintColor: 'white',
          inactiveTintColor: 'white',
         pressOpacity:.8,
          indicatorStyle: {
            borderBottomColor: 'white',
            borderBottomWidth: 5,
          },navigationOptions: {
            gesturesEnabled: true
          }
        }}>
      <Tab.Screen name="ZAIN" component={ZAIN} />
      <Tab.Screen name="LEBARA" component={LEBARA} />
      <Tab.Screen name="FRIENDI" component={FRIENDI} />
      <Tab.Screen name="MOBILY" component={MOBILY} /> 
      <Tab.Screen name="STC" component={STC} />
    </Tab.Navigator>
    </NavigationContainer>
    {/* </ScrollView> */}
    </SafeAreaView>
    );
  }
}
function ZAIN() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontSize:50}}>Home!</Text>
      </View>
    );
  }
  
  function LEBARA() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }function FRIENDI() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function MOBILY() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}function STC() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},

  
});

