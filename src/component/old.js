import React from 'react'
import '../css/App.css'


export default React.createClass({

    getInitialState: function() {
        return {
            value: 'Here show the communicating data！',
        };
    },

    getDefaultProps: function() {
        return {
            pageName: "firstPage"
        };
    },

    componentDidMount: function () {
        var listener = this.rnListener;
        window.document.addEventListener('message',function(e){
            listener(e.data);
        });
    },

    // componentWillUnmount: function() {
    //     window.document.removeEventListener('message');
    // },

    // 处理从 RN 传过来的数据
    rnListener: function(msg) {
        var result = JSON.parse(msg);

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

    // 路由設定
    contextTypes: {
        router: React.PropTypes.object
    },

    // 切換到另一個頁面
    navToAnotherPage(event) {
        var pageName = this.props.pageName;
        var path = "";
        switch (pageName){
            case "page01":{
                path = path + "/page02";
                break;
            }
            case "page02":{
                path = path +"/page03";
                break;
            }
            case "page03":{
                path = path +"/page04";
                break;
            }
            case "page04":{
                path = path +"/page05";
                break;
            }
            case "page05":{
                path =  "/";
                break;
            }
            default:{
                break;
            }
        }
        this.context.router.push(path);
    },

    render() {
        var value = this.state.value;
        return (
            <div>
                <p id="status" className="status" >{value}</p>
                <input id="input" className="input" type="text" placeholder="Some..." ref="theInput"/>
                <button className="button"  onClick={this.handleClick.bind(this, 'set')}>Send To RN</button>
                <button className="button"  onClick={this.handleClick.bind(this, 'get')}>Get From RN</button>
                <button className="button"  onClick={this.navToAnotherPage.bind(this)}>Nav To Next Page</button>

            </div>
        )
    }
});