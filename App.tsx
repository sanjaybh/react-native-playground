import {
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
let countryListObj = [
	{
	 "id": 1,
	 "name": "India",
	 "currency": "INR",
	 "phone": 93,
	 "capital": "New Delhi",
	 "code": "In",
	 "code3": "Ind",
	 "continent": "Asia",
	 "number": 4
	},
	{
	 "id": 2,
	 "name": "Indo",
	 "currency": "ZAR",
	 "phone": 27,
	 "capital": "Pretoria",
	 "code": "ZA",
	 "code3": "ZAF",
	 "continent": "África",
	 "number": 710
	},
	{
	 "id": 3,
	 "name": "Zim",
	 "currency": "ALL",
	 "phone": 355,
	 "capital": "Tirana",
	 "code": "AL",
	 "code3": "ALB",
	 "continent": "Europa",
	 "number": 8
	}]


function App(): JSX.Element {
  const [countriesList, setCountriesList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState([]);
    
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    marginTop:1
  };
  // useEffect(()=>{
  //   async function loadData(){
  //     const {countryListObj} = await import(`./Constants/index`);
  //     setCountriesList([{
  //       "id": 1,
  //       "name": "Afeganistão",
  //       "currency": "AFN",
  //       "phone": 93,
  //       "capital": "Kabul",
  //       "code": "AF",
  //       "code3": "AFG",
  //       "continent": "Ásia",
  //       "number": 4
  //      }]);
  //     //import(`./${bird}.json`).then(data => setInitial(data));
  //   }
  
  //   loadData();
  // },[])

  useEffect(()=>{
    setCountriesList(countryListObj)
  }, []);

  function handleSeach(text){ 
    let filteredList = countriesList.filter((item) => {
      //return (item.name).toLowerCase() == (text).toLowerCase()

      return (item.name).toLowerCase().includes(text.toLowerCase())
    });

    //author.toLowerCase().includes(searchText.toLowerCase())

    console.log("==> "+JSON.stringify(filteredList));
    
    if(filteredList.length > 0){
      setCountriesList(filteredList)
    }    
    if(text == ''){
      setCountriesList(countryListObj)
    }
  }

  const getUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((json) => setUsers(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }
  
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TextInput
            style={{height: 40, borderRadius:10, backgroundColor:'#f5f0f0', margin:4, borderWidth:1}}
            placeholder="Type here to search!"
            // clearButtonMode='always'
            // autoCapitalize='none'
            // autoCorrect={false}
            // value={searchQuery}
            onChangeText={newText => handleSeach(newText)}
          />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        {
          countriesList.map((txt, index) => <InnerComp txt={txt} index={index} key={index} />)
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const InnerComp = ({txt, index}) =>{
  return (
    <View style={styles.mainContainer} key={index}>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Name: </Text>
        <Text style={styles.secTextName}>{txt.name}</Text>
        </Text>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Currency: </Text>
          {txt.currency}
        </Text>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Capital: </Text>
          {txt.capital}
        </Text>
      <Text style={styles.sectionContainer}>
        <Text style={styles.secText}>Continent: </Text>
          {txt.continent}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:5, margin:1, backgroundColor:'#f5f0f0',
    borderWidth:1,
    borderColor:'pink'
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
  },
  textInputContainer:{},
  textInput:{
    borderWidth:1,
    borderColor:'green',
    height: 40,
    borderRadius:10,
    width:50
  }
});

export default App;
