import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Toolbar from '../Components/Toolbar';
import { getAllProduct } from '../Redux/actions/product';
import {useSelector, useDispatch} from 'react-redux';

export default function Panier({navigation}: {navigation: any}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {products} = useSelector((state:any) => state.product) ;
  useEffect(()=>{
    getAllProduct()(dispatch)
  },[])

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <Toolbar navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          {[{},{},{},{}].map((item: any) => {
              return  <View style={{flexDirection: "row", elevation: 10, backgroundColor: '#f6f6f6', padding: 10, marginTop: 20}}>
               <Image style={{height: 85, width: 85}} source={require('../assets/splash.png')}/>
               <View>
                 <Text style={{fontSize: 17, marginLeft: 20, marginTop: 0}}>ejnejbejbfjfbejf</Text>
                 <Text style={{fontSize: 18, marginLeft: 20, marginTop: 5}}>lknrneglnrjnkjnj</Text>
                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
                  <TouchableOpacity style={{backgroundColor: "red", padding: 5, borderRadius: 10}}>
                    <Text style={{color: "#fff"}}>Supprimer</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: "blue", padding: 5, marginLeft: 15, borderRadius: 10}}>
                    <Text style={{color: "#fff"}}>Commander</Text>
                  </TouchableOpacity>
                </View>
               </View>
             </View>
    
          })}
          
          {loading && <ActivityIndicator color="#3A69FF" />}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }, 
});
