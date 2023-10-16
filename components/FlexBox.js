import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

function FlexBox(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text> Hello World 11 </Text>
      </View>
      <View style={styles.botContainer}>

        <View style={styles.horBotCont}>
          <View style={styles.horBotBox}>
            <Text> Horizontal 1 </Text>
          </View>
          <View style={styles.horBotBox}>
            <Text> Horizontal 2 </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    borderWidth:1,
    borderColor:'black',
    marginBottom:5
  },
  botContainer: {
    flex: 3,
    backgroundColor: 'orange',
    borderWidth:1,
    borderColor:'black'
  },
  horBotCont:{
    flexDirection: 'row',
    flex:1,
    padding:5,
  },
  horBotBox:{
    flex: 1,
    margin:3,
    backgroundColor: 'pink',
    borderWidth:1,
    borderColor:'black'
  }
});

export default FlexBox;
