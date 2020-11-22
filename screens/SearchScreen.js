import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import db from '../config';

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allTransactions: [],
    }
  }

  componentDidMount=async ()=>{
    const query = await db.collection("transactions").limit(10).get()
    query.docs.map((doc)=>{
      var data_val = doc.data()
      console.log("Resp " + data_val)
      this.setState({
        allTransctions: [...this.state.allTransactions, doc.data()],
      })
    })
  }


  render() {
    console.log("srch render")
    console.log("All states " + this.state.allTransactions)
    return (
      // <View>
        // <View> 
      <ScrollView>
          {this.state.allTransactions.map((transaction, index)=>(
            //Now??
            <View  key = {index} style = {styles.view}>
            <Text>{"Book Id: " + transaction.bookId}</Text>
            <Text>{"Student Id: " + transaction.studentId}</Text>
            <Text>{"Transaction Type: " + transaction.transactionType}</Text>
            <Text>{"Date: " + transaction.date.toDate()}</Text>
          </View>   
          )
        )}           
      </ScrollView>
      // </View>
      // </View>
    );
  }
}

//style is not there
const styles = StyleSheet.create({
  view:{
    borderBottomWidth: 2
  }
})
//please refer documen