import {
    Button,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {useState} from 'react';

const PressableBtn = () => {
    const [showModal, setShowModal] = useState(false);
    return (
      <View style={styles.main}>
        <Pressable
            onPress={()=> console.warn('Normal onPress')}
            onLongPress={()=> console.warn('onLongPress')}
            onPressIn={()=> console.warn('press in')}
            onPressOut={()=> console.warn('Press Out')}
        >
            <Text style={styles.pressableBtn}>Pressable</Text>
        </Pressable>
      </View>
    );
  };

  export default PressableBtn;

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent:'center'
    },
    pressableBtn:{
        backgroundColor:'blue',
        color:'#fff',
        padding:10, margin: 10, borderRadius:10, fontSize:20,
        textAlign:'center',
        shadowColor:'#000',
        elevation:5
    }
  });
  