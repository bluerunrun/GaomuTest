import React from 'react'
import '../css/reset.css'
import '../css/choice.css'
import '../css/Q.css'
import commonUtil from '../util/common'
// var commonUtil = require('../util/common');


function fixHtml(htmlStr) {
    var result = "";
    result = htmlStr.replace(/class/g,"className")

    return result;
}


function createMarkup(htmlStr) {
    return {__html: htmlStr};
}

export default React.createClass({

    // props 验证 明确组件的 props 的类型  不符合设定时 浏览器控制台会提示
    propTypes: {
        pageName: React.PropTypes.string.isRequired,
        pageData: React.PropTypes.object.isRequired,
    },

    // 0 此方法设置默认的 prop， 若使用此组件是未设定相应的 prop 则使用此方法的设定；在组件中只执行一次，类似于oc类方法 ，无论有几个组件实例对象被调用，被加载。
    getDefaultProps: function() {
        // alert("getDefaultProps");
        return {
            pageName:"",
            pageData:null
        };
    },
    // 1 此方法设置默认的 state，在组件实例对象的每次mount前调用 before componentWillMount
    getInitialState: function() {
        // alert("getInitialState");
        return {
            data: null,
        };
    },
    // 2 在渲染前调用,在客户端也在服务端。
    componentWillMount() {
        // alert(this.props.pageName+"componentWillMount");
        var data = JSON.parse(JSON.stringify(this.props.pageData));
        data = this.dealData(data);
        this.setState({data: data});
        data = null;
    },
    // 3 在第一次渲染后调用，只在客户端
    componentDidMount() {
        // alert(this.props.pageName+"componentDidMount");
    },

    // 4 在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount(){
        // alert(this.props.pageName+"componentWillUnmount");
        this.setState({data: null});
    },

    // 使用组件的上下文时 一定要在组件类设置此方法 否则 无法获取 this.context
    contextTypes: {
        router: React.PropTypes.object
    },

    // 处理展示数据
    dealData(data){
        // 处理习题来源
        if (data.src) {
            data.src = "("+data.src+")";
        }
        return data;
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
        var data = this.state.data;
        return (
            <div>
                <div className="Qst">
                    <article id="qtn">
                        {data.src}
                        <span dangerouslySetInnerHTML={createMarkup(data.Q)} />
                    </article>

                    <div className="opt">
                        <ul>
                            <li data-hash="A" onClick={this.navToAnotherPage}><i className="answerA"></i>
                                <span dangerouslySetInnerHTML={createMarkup(data.opts[0])} />
                            </li>
                            <li data-hash="B" onClick={this.navToAnotherPage}><i className="answerB"></i>
                                <span dangerouslySetInnerHTML={createMarkup(data.opts[1])} />
                            </li>
                            <li data-hash="C" onClick={this.navToAnotherPage}><i className="answerC"></i>
                                <span dangerouslySetInnerHTML={createMarkup(data.opts[2])} />
                            </li>
                            <li data-hash="D" onClick={this.navToAnotherPage}><i className="answerD"></i>
                                <span dangerouslySetInnerHTML={createMarkup(data.opts[3])} />
                            </li>
                            <li data-hash="E" onClick={this.navToAnotherPage}><i className="answerE"></i>不会做</li>
                        </ul>
                    </div>
                </div>
                <div className="loadImg">
                    <span className="img1"></span>
                    <span className="img2"></span>
                    <span className="img3"></span>
                    <span className="img4"></span>
                    <span className="img5"></span>
                </div>
                <div id="errorPage">
                    <div className="errorImg"></div>
                    <div className="errorMessage">
                        <p>题目加载失败，请稍后尝试</p>
                    </div>
                </div>
            </div>
        )
    }
})



