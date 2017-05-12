import React from 'react'
import FirstPage from '../page/FirstPage'
var initReactFastclick = require('react-fastclick');


export default React.createClass({

    componentDidMount(){
        initReactFastclick();
    },

    render() {
        return (
            <div>
                <FirstPage />
                {this.props.children}
            </div>
        )
    }
})

