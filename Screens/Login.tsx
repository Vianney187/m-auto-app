import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import LoginImage from '../assets/loginImage.svg';
import {login} from '../Redux/actions/login';
import {useDispatch} from 'react-redux'

export default function Login({navigation  }: {navigation: any}) {
  const [userData, setUserData] = useState({telephone: '', password: ''});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <LoginImage width={400}/>
      <View style={styles.inputView}>
        <TextInput style={styles.input} onChange={(e)=>{
          setUserData({...userData, telephone: e.nativeEvent.text })
        }} placeholderTextColor="#A0A3BD" placeholder="Username" />
        <TextInput style={styles.input} onChange={(e)=>{
          setUserData({...userData, password: e.nativeEvent.text })
        }} secureTextEntry={true}  placeholderTextColor="#A0A3BD" placeholder="Password" />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={async ()=>{
          setLoading(true);
          if(!(await login(userData)(dispatch))) Alert.alert('Login Failed','Phone or password incorrect');
          setLoading(false);
      }}>
          {loading && <ActivityIndicator color='#3A69FF'/>}
          {!loading && <Text style={styles.loginBtnText}>Se connecter</Text>}
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  inputView: {
      width: '100%',
      marginTop: 30,
  },
  input: {
    height: 50,
    backgroundColor: '#EFF0F7',
    width: '100%',
    marginTop: 20,
    borderRadius: 16,
    paddingLeft: 15,
    color: '#3A69FF'
  },
  loginBtn: {
      height: 50,
      borderColor: '#3A69FF',
      borderWidth: 2,
      width: '100%',
      marginTop: 30,
      borderRadius:  40,
      justifyContent: 'center',
      alignItems: 'center'
  },
  loginBtnText: {
    width: '100%',
    textAlign: 'center',
    color: '#3A69FF',
    fontWeight: 'bold'
  },
  resetView: {
      flexDirection: 'row',
      marginTop: 20
  },
  forgotText: {
      color: '#000',
  },
  resetText: {
      color: '#3A69FF'
  }
  
});
