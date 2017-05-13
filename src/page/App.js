import React from 'react'
var initReactFastclick = require('react-fastclick');


export default React.createClass({

    componentDidMount(){
        initReactFastclick();
    },

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})

