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
const defaultUrl = require('../src/html/rn-react.html');


export default class MainPage extends Component {

    webview: WebView;

    constructor(props) {
        super(props);
        this.state = {
            html: defaultUrl,
            dataFormWeb: null,

        };
    }

    shouldComponentUpdate(nextProps, nextState){
        // if(nextProps.isLoggedIn != this.props.isLoggedIn && nextProps.isLoggedIn === true){
        //     //will redirect
        //     this.refs.modal.close();
        //     this.toMain();
        //     return false;
        // }
        // if (nextState.dataFormWeb !== null){
        //     this.showData("test","update");
        //     return false;
        // }
        return true;
    }

    showData(title,test){
        Alert.alert(
            title,
            test,
            [
                {
                    text: 'OK',
                    onPress: () => console.log("Press OK!"),
                },
            ]
        );
    }

    postMessageToWeb = (pCmd, pData) => {
        if (this.webview) {
            var msg =  JSON.stringify({command:pCmd,data:pData});
            this.webview.postMessage(msg);
        }
    }

    webListener = (event) => {
        var strFromWeb = event.nativeEvent.data;
        var result = JSON.parse(strFromWeb);

        // this.setState({'dataFormWeb': result});

        var pCmd = result.command;
        switch (pCmd){
            case 'set':{
                this.showData("Get Data From Web",result.data.value);
                break;
            }
            case 'getA':{
                var data = {value:"RN Data"};
                this.postMessageToWeb(pCmd,data);
                break;
            }
            default : {
                break;
            }

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
                    onMessage={this.webListener.bind(this)}
                >
                </WebView>
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

