import {Button, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import { Home } from './Home';
import { Login } from './Login';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function Navigation(): JSX.Element {
    const [input, setInput] = useState();

    const btnAction = () => {
        console.warn("Button clicked "+input)
    }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontSize: 12,
          },
        }}>
        <Stack.Screen 
          name="Home Screen" 
          component={Home}
          options={{
            title: 'Home Screen',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle:()=> <Button title="Help" onPress={btnAction} />,
            headerRight: ()=> <Header setInput={setInput} />,
            title: 'User Login',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'User Home',
            headerStyle: {
              backgroundColor: 'pink',
            },
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Header = props => {
    return (
     <TextInput placeholder="Input text" onChangeText={(text)=>props.setInput(text)} />
    );
  };

export default Navigation;
