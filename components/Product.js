import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from './redux/action'
import {useDispatch, useSelector} from 'react-redux';

const Product = ({item}) => {
    const [isAdded, setIsAdded] = useState();
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=> state.reducer)

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item));
    }
    const handleRemoveFromCart = (item) =>{
        dispatch(removeFromCart(item.id));
    }

    useEffect(()=>{
      let result = cartItems.filter(element => {
        return element.id === item.id
      })
      if(result.length){
        setIsAdded(true)
      }else {
        setIsAdded(false)
      }
    }, [cartItems]);

  return (
    <View style={{
        alignItems:'center', 
        borderBottomColor:'orange', 
        borderBottomWidth:2, padding:10, marginBottom:30
    }}>
        <Text style={{fontSize:20}}>{item.name}</Text>
        <Text style={{fontSize:20}}>{item.price}</Text>
        <Text style={{fontSize:20}}>{item.color}</Text>
        <Image style={{width:200, height:200}} source={{uri:item.image}} />
        {
            isAdded ? 
            <Button title="Remove from Cart" onPress={()=>handleRemoveFromCart(item)} />
            :
            <Button title="Add to Cart" onPress={()=>handleAddToCart(item)} />
        }
        
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})