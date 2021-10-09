import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import Toolbar from '../Components/Toolbar';
import { getAllProduct } from '../Redux/actions/product';
import {useSelector, useDispatch} from 'react-redux';

export default function Home({navigation}: {navigation: any}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {products} = useSelector((state:any) => state.product) ;
  console.log(products);
  useEffect(()=>{
    getAllProduct()(dispatch)
  },[])

  return (
    <View  style={{backgroundColor: '#fff', height: '100%'}}>
      <Toolbar navigation={navigation} />

        <View style={styles.container}>
        <ScrollView>
          <View>
          {products.map((item: any) => {
              return <View style={{flexDirection: "row", elevation: 10, backgroundColor: '#f6f6f6', padding: 10, marginTop: 15}}>
                <Image style={{height: 85, width: 85}} source={item.imgcover ?  {uri: item.imgcover } : require('../assets/splash.png')}/>
                <View>
                  <Text style={{fontSize: 17, marginLeft: 20, marginTop: 0}}>{item?.nom}</Text>
                  <Text style={{fontSize: 18, marginLeft: 20, marginTop: 5}}>{item?.prix} $</Text>
                  <Text style={{backgroundColor: 'blue', color: "#fff",marginTop: 5, marginLeft: 20, padding: 4, borderRadius: 10}}>{item.status === 1 ? 'Disponible' : 'indisponible'}</Text>
                </View>
              </View>
          })}
          
          {loading && <ActivityIndicator color="#3A69FF" />}
          </View>
          </ScrollView>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }, 
});
