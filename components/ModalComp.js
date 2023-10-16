import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ModalComp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is our Modal window</Text>
            <Button title="Close" onPress={()=>setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={()=>setShowModal(true)} />
      </View>
    </View>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  modalView:{
    backgroundColor:'#fff',
    padding:30,
    borderRadius:20,
    shadowColor:'black',
    elevation:5
  },
  modalText:{
    fontSize:20,
    marginBottom:20
  }
});
