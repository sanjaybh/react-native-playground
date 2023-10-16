import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  useColorScheme
} from 'react-native';

//import Flatlist from './components/FlatlistComp';

//import APICall from './components/APICall';
//import FlexBox from './components/FlexBox';

function App(): JSX.Element {  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'blue' : 'green',
  };
  
  return (
    <>
      <Text>Some text</Text>
    </>
  );
}

export default App;
