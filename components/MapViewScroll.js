import {
    ActivityIndicator,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

function MapViewScroll(): JSX.Element {
    const [defaultCountries, setDefaultCountries] = useState([]);
    const [countriesList, setCountriesList] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState([]);
      
    
  
    useEffect(()=>{
      setLoading(true);
      //TODO:- Loading data from import of json object
        //setCountriesList(countryListObj)
        //import {countryListObj} from './Constants/index';
  
        // TODO - Dynamic loading data from json file object
      import(`../Constants/index`)
        .then((res) => {
          setCountriesList(res.countryListObj)
          setDefaultCountries(res.countryListObj)
          setLoading(false)
        })
        .catch(_ => null);
    }, []);
  
    function handleSeach(text){ 
      let filteredList = countriesList.filter((item) => {
        //return (item.name).toLowerCase() == (text).toLowerCase()
        return (item.name).toLowerCase().includes(text.toLowerCase())
      });
      
      if(filteredList.length > 0){
        setCountriesList(filteredList)
      }    
      if(text == ''){
        setCountriesList(defaultCountries)
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
        <View>
            <TextInput
                style={{height: 40, borderRadius:10, backgroundColor:'#f5f0f0', margin:4, borderWidth:1}}
                placeholder="Type here to search!"
                clearButtonMode='always'
                autoCapitalize='none'
                autoCorrect={false}
                // value={searchQuery}
                onChangeText={newText => handleSeach(newText)}
                />
            <ScrollView style={styles.scrollViewCls}
            contentInsetAdjustmentBehavior="automatic">
            {
                isLoading ? <View style={styles.loadingWrap}><ActivityIndicator size={'large'} color="gold" animating={true} /></View> : countriesList.map((txt, index) => <InnerComp txt={txt} index={index} key={index} />)
            }
        
            </ScrollView>
        </View>      
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
      padding:5, margin:1, backgroundColor:'#f0a6a6',
      borderWidth:1,
      borderColor:'pink'    
    },
    scrollViewCls:{
      marginBottom: 50
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
    },
    loadingWrap:{
      alignItems: 'center', 
      justifyContent:'center'
    }
  });
  
  export default MapViewScroll;
  