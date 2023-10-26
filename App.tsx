import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import React, {Suspense, useEffect, useState} from 'react';

import SearchFlatList from './components/SearchFlatList';

//import MapViewScroll from './components/MapViewScroll';
//import {countryListObj} from './Constants/index';
//import API_JsonServer from './components/API_JsonServer';
//import APICall from './components/APICall';
//import TabNavigation from './components/TabNavigation';
//import Navigation from './components/Navigation';
//import CheckNetwork from './components/CheckNetwork';
//import CustModalComp from './components/CustModalComp';
//import WebViewComp from './components/WebViewComp';
//import StatusBarComp from './components/StatusBarComp';
//import PressableBtn from './components/PressableBtn';
//import ModalComp from './components/ModalComp';
//import LoaderComp from './components/LoaderComp';
//import RadioBtn from './components/RadioBtn';
//import Button from './components/Button';
//import FlatlistComp from './components/FlatlistComp';
//import FlexBox from './components/FlexBox';



function App(): JSX.Element {
  const [defaultCountries, setDefaultCountries] = useState([]);

  const isDarkMode = useColorScheme() === 'light';
  
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      marginTop:1
    };
  
  return (
    <SafeAreaView style={{flex:1, marginHorizontal:20}}>
        {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <SearchFlatList />
    </SafeAreaView>
    
  );
}



const styles = StyleSheet.create({
  mainContainer:{
    padding:5, margin:1, backgroundColor:'#f0a6a6',
    borderWidth:1,
    borderColor:'pink'    
  },
  
});

export default App;
