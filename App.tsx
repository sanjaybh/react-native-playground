import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const isDarkMode = useColorScheme() === 'dark';

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
    {id: 12, name: 'bogus'},
  ];

  const getDataFromAPI = async () => {
    try {
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

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? 'dark-content' : 'light-content',
    backgroundColor: '#dae773',
  };

  const handlePressMe = userName => {
    //console.warn('Testing Press me - ' + userName);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View _style={style.flatListCont}>
        <FlatList
          data={users}
          keyExtractor={(user, index) => user.id}
          renderItem={user => (
            <Text _style={style.flatListItems}>{user.name}</Text>
          )}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={style.backgroundStyle}>
          <View>
            <Text style={style.header}>Times of India</Text>
            <Text> </Text>
            <View style={style.btn}>
              <Button
                title="More..."
                onPress={() => handlePressMe('Sanjay Bhan')}
              />
            </View>
          </View>
          <Text style={{fontWeight: 'bold', padding: 10}}>
            Total - {result?.total}
          </Text>
          <View>
            {result.total
              ? result.posts.map(item => <ListItems item={item} />)
              : 'No Data'}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const ListItems = ({item}) => {
  return (
    <View style={style.itemListContainer} key={item.id}>
      <Text style={[style.itemList, style.highlight]}>
        {item.id} - {item.title}
      </Text>
      <Text style={style.itemList}>Body: {item.body}</Text>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'lightblue',
  },
  flatListCont: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  flatListItems: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#14d11a',
    padding: 7,
    margin: 5,
  },
  btn: {
    flex: 1,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
  itemListContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f5f7ec',
    borderBottomColor: '#000',
    borderWidth: 0,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 15,
  },
  highlight: {
    color: 'red',
    fontWeight: 'bold',
  },
});
