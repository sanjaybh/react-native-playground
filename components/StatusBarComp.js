import {
  Button,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, {useState} from 'react';

const StatusBarComp = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');
  const platform = Platform;
  return (
    <View style={styles.container}>    
        <StatusBar backgroundColor="blue" barStyle={barStyle} hidden={hide} />
        <Button title="Toggle status bar" color={'orange'} onPress={()=>setHide(!hide)} />
        <View style={styles.btnStyle}>
            <Button title="Update Style" color={'green'} onPress={()=>{
            (barStyle === 'dark-content') ? setBarStyle('light-content') : setBarStyle('dark-content');
            }} />
        </View>
        <View>
            <Text style={{fontSize:20}}>Platform : {platform.OS}</Text>
            <Text style={{fontSize:20}}>Version : {platform.Version}</Text>
            <Text style={{fontSize:20}}>React Native Version : {platform.constants.reactNativeVersion.major}.{platform.constants.reactNativeVersion.minor}.{platform.constants.reactNativeVersion.patch}</Text>
            <Text style={{fontSize:20}}>Brand : {platform.constants.Brand}</Text>
            <Text style={{fontSize:20}}>Manufacturer : {platform.constants.Manufacturer}</Text>
            <Text style={{fontSize:20}}>Model : {platform.constants.Model}</Text>
            <Text style={{fontSize:8}}>React Native Version : {JSON.stringify(platform)}</Text>
        </View>
    </View>
  );
};

export default StatusBarComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  btnStyle:{
    marginTop: 10,
  },
  pressableBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});
