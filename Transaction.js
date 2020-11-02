import * as React from 'react';
import {SafeAreaView,StyleSheet,Text,StatusBar,View,ScrollView,Modal,
  TouchableOpacity,Dimensions,} from 'react-native';
  import { Table, TableWrapper, Row, Rows, Col, Cols, Cell }
   from 'react-native-table-component';
  // import { DataTable } from 'react-native-paper';
var wid = Dimensions.get('window').width ;
var hei = Dimensions.get('window').height ;
import Header1 from "../components/header1";

import DatePicker from 'react-native-datepicker';


export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:['20-1-2020'],
      date1:['20-1-2020'],
      HeadTables:['Product'],
      HeadTable: ['Transaction  No','Date', 'Product Name', 'Price'],
      DataTable: [['1','9-8-2020', 'xxxx', '300'],
       ['2','2-3-2020', 'bbb', '400'],
      ['3','4-12-2020', 'ccc', '500'],
      ['4','5-4-2020', 'yyyy', '600']]
    }
    
    
  }
  render() { 
    const state = this.state;
    


    return (
       <SafeAreaView>
           <View style={{width:'100%'}}>
           <Header1/></View>
           <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00A39A" translucent = {true}/>
           <View style={styles.datepic}>
      <DatePicker
        style={{width: '50%'}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
         minDate="2016-05-01"
         maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          // dateIcon: {
          //   position: 'absolute',
          //   left: 0,
          //   top: 4,
          //   marginLeft: 0
          // },
          dateInput: {
          //   marginLeft: 36
          // justifyContent:'space-around',
          
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      
      />
        <DatePicker
        style={{width: '50%'}} 
        // marginTop:-40,marginLeft:180}}
        date={this.state.date1}
        mode="date"
        placeholder="select date"
        borderColor="#00A39A"
        format="DD-MM-YYYY"
        minDate="2016-05-01"
        maxDate="2020-12-30"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          // dateIcon: {
        
          //   position: 'absolute',
          //   left: 0,
          //   top: 4,
          //   marginLeft: 0
          // },
          dateInput: {
          //   marginLeft: 36
          // justifyContent:'space-around',
          
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date1) => {this.setState({date1: date1})}}
        />
   </View>
           
           <View style={styles.container}>
           <Table borderStyle={{borderWidth: 1, borderColor: '#00A39A'} }>
           <Row data={state.HeadTables} style={styles.HeadStyles} textStyle={styles.TableText}/>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText} />
          {/* <Cell data={["Balance"]} style={styles.singleHead}/> */}
          {/* <TableWrapper style={{flexDirection:'row'}}> */}
          {/* <Row data={['Before','After']}style={styles.head} heightArr={[20, 20]} textStyle={styles.text} /> */}
           {/* </TableWrapper> */}
          <Rows data={state.DataTable}  style={styles.HeadStyle1} textStyle={styles.TableText1}/>
        </Table>
      </View>
      
   </SafeAreaView>
          
    )
  }
}
const styles=StyleSheet.create({
  header2:{
    flexDirection:'row',
    height: 65,
    backgroundColor:'#07b5ab',
    width:"100%",
    marginTop:-5,
    // borderTopWidth:2,
    // borderTopColor:'#07b5ab',
}, 
shape:{
  borderRadius:40,
  backgroundColor:'#1ac9c9',
  height:55,
  width:'70%',
  marginLeft:'15%',
  marginTop:10,
  // width:wid -60,
  // justifyContent:'center',
  // alignContent:'center',
},
text:{
   color:'white',
   fontSize:20,
   textAlign:'center',
  //  width:wid -50,
  //  marginTop:13,
   paddingTop:13,
},
datebox:{
  marginTop:10,
  flexDirection:'row',
  justifyContent:'space-around',
  height:'20%'
},

datePickerStyle: {
  width: 200,
  marginTop: 20,
},

date:{
  textAlign:'center',
  marginTop:10,
  fontSize:15,
},
container: { 
  paddingTop:-2,
  width:'96%',
  marginLeft:6,
  marginTop:10,
},
HeadStyles:{
  height:60,
  
},
datepic:{
  flexDirection:'row',
  // justifyContent:'space-around',
  marginTop:10,
  marginLeft:6,
 
},

HeadStyle: { 
  height:70,
  
},
HeadStyle1:{
  height:40 
},
TableText: { 
  color:'#00A39A',
  textAlign:'center',

},
TableText1:{
  color:'#cacaca',
  fontSize:15,
  textAlign:'center',
 
 
}
})