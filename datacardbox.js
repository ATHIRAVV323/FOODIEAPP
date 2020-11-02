import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class datacardbox extends React.Component {
    render() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

        <Text>hai</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
}

const styles = StyleSheet.create({
    scrollView: {
     // backgroundColor: grey,
    },
    
  });




