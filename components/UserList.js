import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import { getUserList } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native-animatable';

const UserList = () => {
    //const [userData, setUserData] = useState();

    const dispatch = useDispatch();
    let userList = useSelector((state)=>state.reducer);

    useEffect(()=>{
        dispatch(getUserList());        
    },[]);

    //setUserData(userList);
    //console.warn("====> comp", userList);
    return (
        <View styles={styles.container}> 
            <ScrollView>
            {
                userList.length ?
                userList.map((item)=>(
                    <View key={item.id} style={styles.itemContainer}>
                        <Image source={{uri:item.image}} style={styles.image} />                        
                        <View>
                            <Text style={styles.textName}>{item.firstName} {item.lastName}</Text>
                            <Text style={styles.textEmail}>{item.email}</Text>
                        </View>
                    </View>
                ))
                : null
            } 
            </ScrollView>          
        </View>
        
    )
}

export default UserList;

const styles = StyleSheet.create({
    container:{
       flex:1
    },
    itemContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginTop: 10,
        borderBottomColor:'#5500dc', 
        borderBottomWidth:1,
        borderRadius: 25,
        padding:10,
        margin:3
    },
    image: {
        width: 50,
        height:50,
        borderRadius: 25
    },
    textName: {
        fontSize:17,
        marginLeft:10,
        fontWeight:'600'
    },
    textEmail: {
        fontSize:14,
        marginLeft:10,
        color:'grey'
    }
})