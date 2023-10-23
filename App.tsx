import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
import React, {useEffect, useState} from 'react';

import {countryListObj} from './Constants/index'

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
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    marginTop:1
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        {countryListObj.map((text, index) => (
          <InnerComp text={text} index={index} />
        ))}

      </ScrollView>
      </SafeAreaView>
  );
}

const InnerComp = ({text, index}) =>{
  return (
    <View style={styles.mainContainer} key={index}>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Name: </Text>
        <Text style={styles.secTextName}>{text.name}</Text>
        </Text>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Currency: </Text>
          {text.currency}
        </Text>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Capital: </Text>
          {text.capital}
        </Text>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Continent: </Text>
          {text.continent}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:5, margin:1, backgroundColor:'#cecaca'
  },
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 1,
    color:'#000'
  },
  secText:{
    fontWeight:'bold'
  },
  secTextName:{
    color:'blue'
  }
});

export default App;
