import {
  ActivityIndicator,
  Button,
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
    backgroundColor: isDarkMode ? 'dark-content' : 'light-content',
  };

  const handlePressMe = userName => {
    //console.warn('Testing Press me - ' + userName);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
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
          <Text>Total - {result?.total}</Text>
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
    padding: 7,
    margin: 5,
    backgroundColor: '#fff',
  },
  itemList: {
    fontSize: 15,
  },
  highlight: {
    color: 'red',
    fontWeight: 'bold',
  },
});
