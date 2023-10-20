/* eslint-disable react-native/no-inline-styles */

import * as Animatable from 'react-native-animatable';

import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //navigation.navigate('Login', {name: 'Welcome!!!'});
    }, 2000);
  }, []);

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
  const zoomOut = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    },
    1: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.Text
        style={{color: 'white', fontSize: 36, fontWeight: '800'}}
        duration={5000}
        animation="zoomInUp"
        //animation={zoomOut}
        >
        Sanjay Bhan
      </Animatable.Text>

      <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
      <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>


    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
