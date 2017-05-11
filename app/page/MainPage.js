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
const defaultSrc = require('../src/index.html');
// const defaultSrc = require('../src/react.html');
const nextSrc = require('../src/react.html');

export default class MainPage extends Component {

    webview: WebView;

    constructor(props) {
        super(props);
        this.state = {
            src: defaultSrc,
            srcType:"html",
            anser: "A",

        };
    }

    shouldComponentUpdate(nextProps, nextState){
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


    navWebToNewPage(pCmd,currScr,nextSrc) {
        var  data = {currScr:currScr,nextSrc:nextSrc};
        this.postMessageToWeb(pCmd,data);
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
            case 'get':{
                var data = {value:this.state.anser};
                this.postMessageToWeb(pCmd,data);
                break;
            }
            case 'nav':{
                this.navWebToNewPage(pCmd,defaultSrc,nextSrc);
                break;
            }
            default : {
                break;
            }

        }

    }

    render() {
        var src ;
        if (this.state.srcType == "html") {
            src = this.state.src;
        }else {
            src = {uri:this.state.src};
        }

        return (
            <View style={{flex:1}}>
                <WebView
                    style={styles.web_side_style}
                    ref={webview => { this.webview = webview; }}
                    source={src}
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

