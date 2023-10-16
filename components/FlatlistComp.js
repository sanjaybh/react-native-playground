import {ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

function FlatlistComp(): JSX.Element {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const users = [
    {id: 1, name: 'Sanjay'},
    {id: 2, name: 'More'},
    {id: 3, name: 'test'},
    {id: 4, name: 'bogus'},
    {id: 5, name: 'Sanjay'},
    {id: 6, name: 'More'},
    {id: 7, name: 'test'},
    {id: 8, name: 'bogus'},
    {id: 9, name: 'Sanjay'},
    {id: 10, name: 'More'},
    {id: 11, name: 'test'},
    {id: 12, name: 'gsdf'},
    {id: 13, name: 'Sahhhnjay'},
    {id: 14, name: 'Moddre'},
    {id: 15, name: 'tesdffft'},
    {id: 16, name: 'bodfggus'},
  ];

  return (
    <>
        <View>
        <Text style={styles.header}>Flat List Component</Text>
            <FlatList
                data={users}
                renderItem={({item}) => <Item name={item.name} />}
                keyExtractor={item => item.id}
            />
        </View>
        </>
  );
}
const Item = ({name}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );

export default FlatlistComp;

const styles = StyleSheet.create({ 
  header:{
    fontSize: 20,
    backgroundColor: 'blue',
    color: "#fff",
    margin: 5, padding: 5
  }, 
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
  },
});
