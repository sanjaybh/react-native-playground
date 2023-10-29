import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import filter from "lodash.filter";

const API_ENDPOINT = `https://randomuser.me/api/?results=30`

function Search(): JSX.Element {  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(()=>{
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, [])

  const fetchData = async(url) => {
    try{
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        setIsLoading(false);
        setFullData(json.results)
        //console.log(json.results)
    }catch(e){
        setError(e);
        //console.log(e)
        setIsLoading(false);
    }finally{
        //console.log("finally called")
    }
  }
  
  
  const handleSearch =(query) => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, (user) => {
        return contains(user, formattedQuery);
    });
    setData(filteredData);
  }

  const contains = ({name, email}, query) => {
    const {first, last} = name;
    if(first.includes(query) || last.includes(query) || email.includes(query)){
        return true;
    }else{ 
        return false;
    }
  }

  const handleUserCard = (item)=>{
    //console.log(item)
    console.log("testing")
  }

  if(isLoading) {
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size={'large'} color="#5500dc" />
    </View>
  }

  if(error) {
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Error in fetching data ... PLease check your internet connection</Text>
    </View>
  }

  return (
    <View> 
      <TextInput 
        placeholder='Search Users' 
        clearButtonMode='always' 
        style={styles.searchBox}
        autoCapitalize='none'
        autoCorrect={false}
        value={searchQuery}
        placeholderTextColor='#000'
        // underlineColorAndroid=''
        onChangeText={(query) => handleSearch(query)}
    />

    <FlatList
        data={data}
        keyExtractor={(item)=> item.login.username}
        renderItem={({item}) => (
            // <Pressable onPress={(item)=>handleUserCard(item)}>
                <LoadCard item={item} />
            // </Pressable >
        )}
    />
    </View>
  )
}

const LoadCard = ({item}) =>{
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri:item.picture.thumbnail}} style={styles.image} />
            <View>
                <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                <Text style={styles.textEmail}>{item.email}</Text>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBox:{
        paddingHorizontal: 20,
        paddingVertical:10,
        borderColor: "#ccc",
        borderWidth:1,
        borderRadius:8,
        marginTop:7,
        backgroundColor:'white',
        fontSize:20
    },
    itemContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginTop: 10
    },
    image: {
        width: 50,
        height:50,
        borderRadius: 25
    },
    textName: {
        fontSize:17,
        marginLeft:10,
        fontWeight:'600'
    },
    textEmail: {
        fontSize:14,
        marginLeft:10,
        color:'grey'
    },
})