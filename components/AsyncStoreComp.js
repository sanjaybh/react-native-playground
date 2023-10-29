import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStoreComp = () => {
    const [dataObj, setDataObj] = useState("");

    const setData = async () =>{
      const _name = (dataObj == "") ? "Yajnas" : dataObj;

      console.log(_name)

      await AsyncStorage.setItem("user", _name);
      setDataObj(_name);
    }

    const getData = async () =>{
      const user = await AsyncStorage.getItem("user");
      setDataObj(user);

      console.warn(user)
    }

    const removetData = async () =>{
      await AsyncStorage.removeItem("user");
      setDataObj("");
    }
const handleChange = (text)=>{
    if(text != ''){
        setDataObj(text);
    }else{
        setDataObj("");
    }
}
  return (
    <View style={{marginTop:100, marginLeft:30}}>
      <Text style={{fontSize:20}}>Async Store Comp</Text>
      <TextInput style={{fontSize:20, borderColor:'#000', borderWidth:1}} placeholder='Enter Name' onChangeText={(text)=>handleChange(text)} />
      <Text>Name:- {dataObj}</Text>
      <View style={styles.btn}>
         <Button title="Set Data"  onPress={setData}/>
      </View>

      <View style={styles.btn}>
         <Button title="Get Data" style={styles.btn} onPress={getData}/>
      </View>
      <View style={styles.btn}>
         <Button title="Remove Data" style={styles.btn} onPress={removetData}/>
      </View>
    </View>
  )
}

export default AsyncStoreComp

const styles = StyleSheet.create({
    btn:{
        marginBottom:10,
        paddingBottom:10
    }
})