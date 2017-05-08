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
  TextInput,

} from'react-native';
import Dimensions from 'Dimensions';
const defaultUrl = require('../src/rn-react.html');


export default class MainPage extends Component {

    webview: WebView;

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            html: defaultUrl
        };
    }

    handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    navToAnotherUrl =  html => {
        this.setState({html: require('../src/react.html')});
    };

    webListener(event){
        console.log('onMessage->event.nativeEvent.data:');
        console.log(event.nativeEvent.data);
        Alert.alert(
            'Get Data From Web',
            event.nativeEvent.data,
            [
                {
                    text: 'OK',
                    onPress: () => console.log("Press OK!"),
                },
            ]
        );
    }

    rnSender = () => {
        if (this.webview) {
            var msg = this.state.inputValue;
            this.webview.postMessage(msg===""?"text":msg);
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <WebView
                    style={styles.web_side_style}
                    ref={webview => { this.webview = webview; }}
                    source={this.state.html}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    onMessage={this.webListener}
                >
                </WebView>
                <View style={styles.space_style}></View>
                <View style={styles.rn_side_style}>
                    <Text style={styles.text_style}>React Native Side: </Text>
                    <TextInput style={styles.input_style}
                               placeholder=' 请输入'
                               returnKeyType={'done'}
                               underlineColorAndroid='transparent'
                               value={this.state.inputValue}
                               onChangeText={this.handleTextChange.bind(this)}
                    />
                    <Button title="Send Message to Web View"  onPress={this.rnSender} />

                    <Button title="Nav Web View To Another Page"  onPress={this.navToAnotherUrl.bind(this)} />
                </View>
            </View>
        );
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 80;

const styles = StyleSheet.create({
    web_side_style:{
        backgroundColor: "white",
        flex: 1,
    },
    rn_side_style:{
        backgroundColor: "white",
        flex: 1,
    },
    space_style:{
        backgroundColor: "black",
        height: 2,
    },
    text_style: {
        marginTop: 22,
        marginLeft: 10,
        fontSize: 24,
    },
    input_style: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor:'black',
        borderWidth: 1,
        height:30,
        borderRadius: 5,
        marginHorizontal: 20,
        paddingLeft:12,
        color: 'black',
    },

});

