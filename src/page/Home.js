/**
 * Created by blue on 2017/5/11.
 */
import React from 'react'
import '../css/App.css'

export default React.createClass({

    // 路由設定
    contextTypes: {
        router: React.PropTypes.object
    },

    // 切換到另一個頁面
    navToAnotherPage(event) {
        const path = `/page01`;
        this.context.router.push(path);
    },

    render() {
        return (
            <div>
                <h1 className="entry_title">Home Page:</h1>
                <button className="button" onClick={this.navToAnotherPage}>开始练习</button>
            </div>
        )
    }
})