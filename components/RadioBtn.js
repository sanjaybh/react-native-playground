import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RadioBtn = () => {
    const [selectedRadio, setSelectedRadio] = useState(1)
    const skills = [
        { id:1, name:'JS'},
        { id:2, name:'Java'},
        { id:3, name:'PHP'},
        { id:4, name:'SQL'}
    ];
    useEffect(()=>{
        console.warn(selectedRadio)
    }, [selectedRadio])
  return (
      <View style={styles.main}>
        {skills.map((item, index)=> <TouchableOpacity
            key={index}
            onPress={()=>setSelectedRadio(item.id, item.name)} >
            <View style={styles.wrapper}>
                <View style={styles.radio}>
                {selectedRadio === item.id ? <View style={styles.radioBg}></View> : null}
                </View>
                <Text style={styles.radioText}>{item.name}</Text>
            </View>
        </TouchableOpacity>)
        }
      </View>
  )
}

export default RadioBtn

const styles = StyleSheet.create({
    main:{
        flex:1, alignItems: 'center', justifyContent:'center'
    },
    radioText:{
        fontSize: 16
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    radio:{
        height: 20, width: 20, borderColor: 'black', borderWidth:2, borderRadius: 10,
        margin:5
    },
    radioBg:{
        backgroundColor: 'black', height: 14, width: 14, borderRadius:10, margin: 1
    },
    radioWrapper:{ flexDirection: 'row', alignItems:'center'}
})