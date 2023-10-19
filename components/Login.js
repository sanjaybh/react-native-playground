import {Button, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export const Login = props => {
  const [userName, setUserName] = useState();
  const age = 20;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}> Login Screen</Text>
        <TextInput 
          placeholder='Enter Name' 
          style={{fontSize:20, borderColor:'#000', borderWidth:2}}
          onChangeText={(text)=>setUserName(text)}
          />
        <Button title="go to Home" onPress={()=> {
          props.navigation.navigate('Home', {name:userName, age});
        }}/>
      </View>
    );
  };