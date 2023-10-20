import {ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

function APICall(): JSX.Element {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getDataFromAPI = async () => {
    try {
        setLoading(true);
      const response = await fetch('https://dummyjson.com/posts');
      const json = await response.json();
      setResult(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  function handlePressMe(text){
    console.warn(text)
  }
  return (
    <>
        <View>
            <Text style={styles.header}> Times of India </Text>
            <View style={styles.btn}>
            <Button
                title="More..."
                onPress={() => handlePressMe('Sanjay Bhan')}
            />
            </View>
        </View>

        <View style={styles.itemListContainer}>
            <Text>Total - {result?.total}</Text>
        </View>

        <View>
          <Text style={styles.header}>Flat List Component</Text>
          <FlatList style={styles.flatlist}
                  data={result.posts}
                  renderItem={({item}) => <Item post={item} />}
                  keyExtractor={item => item.id}
              />
        </View>
    </>
  );
}

const Item = ({post}) => (
  //const {title, id, body} = post;
  <View style={styles.item}>
    <Text style={styles.title}>{post.id}). {post.title}</Text>
    <Text style={styles.body}>{post.body}</Text>
    <Text style={{fontWeight:'bold'}}>{post.tags.map((item)=> <Text> - {item}</Text>)}</Text>
  </View>
);

export default APICall;

const styles = StyleSheet.create({
  header:{
    fontSize: 20,
    backgroundColor: 'blue',
    color: "#fff",
    margin: 5, padding: 5
  }, 
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  backgroundStyle: {
    backgroundColor: 'lightblue',
  },
  flatListCont: {
    color: '#fff',
    backgroundColor: 'orange',
  },
  flatListItems: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#14d11a',
  },
  btn: {
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  itemListContainer: {
    backgroundColor: '#f5f7ec',
    borderBottomColor: '#000',
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: 7,
    padding: 1,
  },
  itemList: {
    fontSize: 15,
  },
  highlight: {
    color: 'red',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 4,
    marginVertical: 1,
    marginHorizontal: 1,
    marginBottom: 1
  },
  flatlist:{
    borderWidth:0,
    borderColor: '#000',
    marginBottom: 140
  },
  title: {
    fontSize: 18,
  },
  body: {
    fontSize: 12,
  },
});
