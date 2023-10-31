import { Button, Text, TextInput, View, ScrollView, StyleSheet, Image } from 'react-native';
import React, {useEffect, useState} from 'react';

import Header from './Header';
import Product from './Product';

const ProductWrapper = ({navigation}) => {    
    const products = [
        { 
          id:1,
          name:'Samsung Mobile',
          color:'white',
          price: 30000,
          image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        { 
          id:2,
          name:'Apple Mobile',
          color:'black',
          price: 1250000,
          image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        { 
          id:3,
          name:'Nokia Mobile',
          color:'green',
          price: 25000,
          image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        }
    ]

    return (
        <View style={styles.container}>
        <Button title="UserList" onPress={()=>navigation.navigate('User')}/>
            <Header />
            <ScrollView>
            {
                products.map((item)=><Product key={item.id} item={item} />)
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default ProductWrapper;
