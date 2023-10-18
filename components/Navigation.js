import {Button, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function Navigation(): JSX.Element {
    const [input, setInput] = useState();
    const btnAction = () => {
        console.warn("Button clicked "+input)
    }
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          name="Home"
          component={Home}
          options={{
            title: 'User Home',
            headerStyle: {
              backgroundColor: 'pink',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Header = props => {
    return (
     <TextInput placeholder="Input text" onChangeText={(text)=>props.setInput(text)} />
    );
  };

const Home = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}> Home Screen</Text>
      <Button
        title="go to Login"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};

const Login = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}> Login Screen Test</Text>
      {/* <Button title="go to Home" onPress={()=> props.navigation.navigate('Home')}/> */}
    </View>
  );
};

export default Navigation;
