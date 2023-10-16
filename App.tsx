import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  useColorScheme
} from 'react-native';

import PressableBtn from './components/PressableBtn';

//import ModalComp from './components/ModalComp';
//import LoaderComp from './components/LoaderComp';
//import RadioBtn from './components/RadioBtn';
//import Button from './components/Button';
//import APICall from './components/APICall';
//import FlatlistComp from './components/FlatlistComp';
//import FlexBox from './components/FlexBox';


function App(): JSX.Element {  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'blue' : 'green',
  };
  
  return (
    <>
      <PressableBtn />
    </>
  );
}

export default App;
