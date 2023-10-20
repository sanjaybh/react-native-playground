import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Home } from './Home';
import { Login } from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const BotTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
        <TopTab.Navigator>
            <TopTab.Screen name='Login' component={Login} />
            <TopTab.Screen name='Home' component={Home} />
        </TopTab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})