import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { isNumeric } from '../Helpers/checkNumber';

export default function InputGroup({enabled, placeHolder, text, marginTop, onClick, onChange, type, value}: {
    enabled: boolean,
    placeHolder: string,
    text: string,
    marginTop?:number,
    onClick?:Function,
    onChange?:any,
    type?:any,
    value?: string
}) {
  return (
    <View style={styles.inputView}>
        <Text style={styles.placeholder}>{text}</Text>
        <TextInput  style={styles.input} value={value ? value.toString() : ''} keyboardType={type} onChange={(e)=>{
          if(type === 'numeric'){
            const text = e.nativeEvent.text
            if((text.length > 0 && !isNumeric(text)) && text=== '.' ) return;
          }
          onChange(e);
        }}  editable={enabled} multiline={true} numberOfLines={3} placeholderTextColor="#98989D" placeholder={placeHolder} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    inputView: {
        width: '100%',
        marginTop: 15,
    },
    placeholder: {
      color: '#98989D',
      fontSize: 16,
      fontFamily: 'Comfortaa_400Regular'
    },
    input: {
      height: 50,
      backgroundColor: '#f7f8fb',
      width: '100%',
      marginTop: 15,
      borderRadius: 16,
      paddingLeft: 15,
      fontSize:14,
      color: '#3A69FF',
      fontFamily:'Comfortaa_400Regular'
    },
});
