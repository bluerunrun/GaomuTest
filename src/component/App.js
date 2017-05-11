// modules/App.js
import React from 'react'
import { Link } from 'react-router'
import '../css/App.css'


export default React.createClass({

    getInitialState: function() {
        return {
            value: 'Here show the communicating data！',
        };
    },

    componentDidMount: function () {
        var listener = this.rnListener;
        window.document.addEventListener('message',function(e){
//                document.getElementById("status") = "Get from RN: " + e.data;
            listener(e.data);
        });
    },

    // componentWillUnmount: function() {
    //     window.document.removeEventListener('message');
    // },


    // 处理从 RN 传过来的数据
    rnListener: function(msg) {
        var result = JSON.parse(msg);
        //document.getElementById("status").innerHTML = "rnListener: " + msg;

        var pCmd = result.command;
        switch (pCmd){
            case 'get':{
                document.getElementById("status").innerHTML = "Get from RN: " + JSON.stringify(result.data);
                break;
            }
            case 'nav':{
                // web 切换 page

                break;
            }
            default : {
                break;
            }

        }

    },

    postMessageToRN: function(pCmd, pData) {
        var msg =  JSON.stringify({command:pCmd,data:pData});
        //alert('你好，我是一个弹框！'+msg);
        document.getElementById("status").innerHTML = "Send to RN: " + msg;
        window.postMessage(msg);
    },

    handleClick: function(pCmd, event) {
        var pData = null;
        switch (pCmd) {
            case 'set': {
                var sValue = document.getElementById("input").value;
                pData = {value:sValue};
                break;
            }
            case 'get': {
                break;
            }
            case 'nav': {
                break;
            }
            default :{

                break;
            }
        }
        this.postMessageToRN(pCmd,pData);
    },


    render() {
        var value = this.state.value;
        return (
            <div>

                <h1>Web Side:</h1>
                <p id="status" className="status" >{value}</p>
                <input className="input" type="text" placeholder="Some..." ref="theInput"/>
                <button className="button"  onClick={this.handleClick.bind(this, 'set')}>Send To RN</button>
                <button className="button"  onClick={this.handleClick.bind(this, 'set')}>Get From RN</button>
                <button className="button"  onClick={this.handleClick.bind(this, 'set')}>Nav To Another Page</button>

                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/tags">Tags</Link></li>
                </ul>

            </div>
        )
    }
});