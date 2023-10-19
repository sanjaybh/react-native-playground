import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

const CheckNetwork = () => {
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [connectionType, setConnectionType] = useState(null);

  const handleNetworkChange = state => {
    setConnectionStatus(state.isConnected);
    setConnectionType(state.type);
  };

  useEffect(() => {
    const netInfoSubscription = NetInfo.addEventListener(handleNetworkChange);
    return () => {
      netInfoSubscription && netInfoSubscription();
    };
  }, []);

  // eslint-disable-next-line react/no-unstable-nested-components
  const NetworkCheck = ({status, type}) => {
    return (
        <>
            <Text style={styles.statusText}>
                Connection Status : {status ? 'Connected' : 'Disconnected'}
            </Text>
            <Text style={styles.statusText}>Connection Type : {type}</Text>
        </>
    );
  };

  return (
    <View style={styles.container}>
        <NetworkCheck status={connectionStatus} type={connectionType} />
    </View>
  );
};

export default CheckNetwork;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  statusText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#000',
  },
});
