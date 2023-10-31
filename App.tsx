import { StyleSheet, Text } from 'react-native';
import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Product' 
          component={ProductWrapper} 
          options={{
            title: 'Products Screen',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fff',
            }
          }} />
        <Stack.Screen name='User' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{}
});

export default App;
