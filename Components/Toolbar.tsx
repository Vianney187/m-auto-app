import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import {useDispatch} from 'react-redux'
import { LOGOUT } from '../Redux/actionTypes';

export default function Toolbar({navigation}: {navigation?: any}) {
    const dispatch  = useDispatch();
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Car Express</Text>
        <View style={styles.iconContainer}>
        <Icon size={22} name='shoppingcart'  style={{marginTop: 5}} type="antdesign" color={'#929399'} onPress={()=>{
          navigation.navigate('PANIER')
        }
        }/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      alignContent:"space-between",
      justifyContent: "space-between",
      paddingTop: 50,
      borderTopWidth: 0, elevation: 1,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,

    },
    iconContainer: {
        flexDirection: "row",
    },
    title: {
        color: '#929399',
        fontWeight: '200',
        fontSize: 20,
        marginTop: -5,
        fontFamily:'Comfortaa_400Regular'
    }
  });

