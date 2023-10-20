import {Button, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export const Home = props => {
  //const {name, age} = props.route.params;
  const name = 'Test'; const age=30;
  //console.warn(props.route.params)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}> Home Screen</Text>
        <Button
          title="go to Login"
          onPress={() => props.navigation.navigate('Login')}
        />
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
    );
  };