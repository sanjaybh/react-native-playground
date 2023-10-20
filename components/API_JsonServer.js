import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const API_JsonServer = () => {
    const data = {
        name: "fromAPI", age: 44, email:'api@gmail.com'
    }
    const severAPICall = async() =>{
        //TODO:-  Need to check the local URL to send this data using API call
        // Create a form , set validations and then submit using this API
        
        const url = "http://192.168.2.19:3000/users";
        let result = await fetch(url, {
            method: 'POST', headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        result = await result.json();
        console.warn(result);
    }
  return (
    <View>
      <Text>API_JsonServer</Text>
      <Button title="Save Data" onPress={severAPICall} />
    </View>
  )
}

export default API_JsonServer

const styles = StyleSheet.create({})