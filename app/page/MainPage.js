/**
 * Created by pwj on 17-5-5.
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Alert,
  Button,

} from'react-native';
const html = require('../src/react.html');


export default class MainPage extends Component {

    constructor(props) {
        super(props);
    }
    webview: null;

    handleMessage(event){
      console.log('onMessage->event.nativeEvent.data:');
      console.log(event.nativeEvent.data);
      Alert.alert(
        '警告提示',
        event.nativeEvent.data,
        [
          {
              text: 'OK',
              onPress: () => console.log("Press OK!"),
          },
        ]
      );
    }

    postMessage = () => {
        if (this.webview) {
            // alert(this.webview);
            this.webview.postMessage('"Hello" from React Native!');
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <WebView
                    style={styles.webview_style}
                    ref={webview => { this.webview = webview; }}
                    source={html}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    onMessage={this.handleMessage}
                >
                </WebView>
                <View >
                    <Button title="Send Message to Web View"  onPress={this.postMessage} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  webview_style:{
    backgroundColor:'#00ff00',
  }
});

