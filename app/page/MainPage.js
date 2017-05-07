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
} from'react-native';
const html = require('../src/react.html');


export default class MainPage extends Component {

  onMessage(event){
    console.log('onMessage->event.nativeEvent.data:');
    console.log(event.nativeEvent.data);
    Alert.alert(
      '警告提示',
      event.nativeEvent.data,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed!')},
      ]
    );
  }

  render() {
    return (
    <View style={{flex:1}}>
      <WebView style={styles.webview_style}
               source={html}
               startInLoadingState={true}
               domStorageEnabled={true}
               javaScriptEnabled={true}
               onMessage={this.onMessage}

      >
      </WebView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  webview_style:{
    backgroundColor:'#00ff00',
  }
});