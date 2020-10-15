import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, 
KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId: "",
            password: ""
        }
    }

    Login=async(email, password)=>{
        if(email && password){
            try{
                const response = await firebase.auth()
                .signInWithEmailAndPassword(email, password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        Alert.alert("User doesnt exists")
                        console.log("doesnt exist")
                    break;
                    case 'auth/invalid-email':
                        Alert.alert("Incorrect email or password");
                        console.log("Invalid");
                }
            }
        }
        else {
            Alert.alert("Enter email and password")
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style = {{alignContent: 'center', marginTop: 20}}>
                <View>
                    <Image 
                    source = {require("../assets/booklogo.jpg")}
                    style={{width:200, height:200}}/>
                    <Text style={{textAlign: 'center', fontSize:30}}>WILY</Text>
                </View>
                <View>
                    <TextInput
                    style = {styles.loginBox}
                    placeholder="abcd@example.com"
                    keyboardType = "email-address"
                    onChangeText={(text)=>{
                        this.setState({emailId: text})
                    }} />

                    <TextInput
                    style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder="enter password"
                    onChangeText={(text)=>{
                        this.setState({password: text})
                    }} />
                </View>
                <View>
                    <TouchableOpacity
                    style = {{height:30, width:90, borderWidth:1, 
                    marginTop:20, paddingTop: 10, borderRadius: 15}}
                    onPress={()=>{this.Login(this.state.emailId, this.state.password)}} >
                        <Text style={{textAlign: 'center'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox:{
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin:10,
        paddingLeft: 10
    }
})
