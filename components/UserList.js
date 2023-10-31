import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getUserList } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
    const dispatch = useDispatch();
    let userList = useSelector((state)=>state.reducer)
    useEffect(()=>{
        dispatch(getUserList())
    },[]);

    //userList = userList.users

    //console.log("====> comp", userList);
    return (
        <View styles={styles.container}>
             <Text>{userList.length ? userList.length: "No"}</Text>   
        </View>
    )
}

export default UserList;

const styles = StyleSheet.create({
    container:{
       flex:1
    },
    context:{
      textAlign:'right', fontSize:30,  padding:3, backgroundColor:'orange', alignItems:'center'
    },
    innContainer:{
      backgroundColor:'yellow', borderRadius:20, height:40, width:40
    },
    cartItem:{
      fontSize:25, textAlign:'center'
    }
})