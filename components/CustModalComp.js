import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CustModalComp = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.main}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <View style={styles.bodyText}>
                <Text>
                To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.
                To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.
                To render multiple columns, use the numColumns prop. Using this approach instead of a flexWrap layout can prevent conflicts with the item height logic.
                </Text>
            </View>
            <Button title="Close" onPress={()=>setShow(false)}/>
          </View>
        </View>
      ) : null}
      <Button title="Open Modal" onPress={()=>setShow(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50, 50, 50,5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    padding: 20,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  bodyText:{
    justifyContent: 'flex-start',
    padding: 5,
    flex:1
  }
});

export default CustModalComp;
