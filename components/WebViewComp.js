import {
    Text,
    View
} from 'react-native';

import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewComp = () => {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
}

export default WebViewComp;