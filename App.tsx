import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  useColorScheme
} from 'react-native';

import APICall from './components/APICall';

//import FlatlistComp from './components/FlatlistComp';
//import FlexBox from './components/FlexBox';

function App(): JSX.Element {  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'blue' : 'green',
  };
  
  return (
    <>
      <APICall />
    </>
  );
}

export default App;
