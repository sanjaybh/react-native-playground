import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme
} from 'react-native';
import React, {Suspense, useEffect, useState} from 'react';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import Product from './components/Product';

//import AsyncStoreComp from './components/AsyncStoreComp';

//import Search from './components/Search';


//import SplashScreen from './components/SplashScreen';

//import SearchFlatList from './components/SearchFlatList';
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

  const products = [
    { 
      id:1,
      name:'Samsung Mobile',
      color:'white',
      price: 30000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    { 
      id:2,
      name:'Apple Mobile',
      color:'black',
      price: 1250000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    },
    { 
      id:3,
      name:'Nokia Mobile',
      color:'green',
      price: 25000,
      image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
    }
  ]
  
  return (
    <SafeAreaView style={{flex:1, marginHorizontal:20}}>
        {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <Header />
      <ScrollView>
      {
        products.map((item)=><Product key={item.id} item={item} />)
      }
      </ScrollView>
       
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
